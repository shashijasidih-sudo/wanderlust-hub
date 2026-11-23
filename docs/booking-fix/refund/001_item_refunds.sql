-- Yellodae – Individual & full refunds (FINAL review package). NOT EXECUTED.
-- Target: production project cymzgmfnhtnqledwwojt only, after written approval.
-- Additive only: no existing policy, grant, column or function is changed.

-- 0. Lets booking_refunds prove an item belongs to its booking (id is already the PK, so this cannot fail).
CREATE UNIQUE INDEX IF NOT EXISTS booking_items_id_booking_uq ON public.booking_items (id, booking_id);

-- 1. Refund ledger: one row per refund attempt. id doubles as the X-Refund-Idempotency key.
CREATE TABLE public.booking_refunds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid NOT NULL REFERENCES public.bookings(id) ON DELETE RESTRICT,
  booking_item_id uuid,
  scope text NOT NULL CHECK (scope IN ('item','full')),
  attempt_no int NOT NULL DEFAULT 1 CHECK (attempt_no BETWEEN 1 AND 9),
  amount_minor bigint NOT NULL CHECK (amount_minor > 0),
  currency text NOT NULL,
  razorpay_payment_id text NOT NULL,
  razorpay_receipt text NOT NULL CHECK (char_length(razorpay_receipt) <= 40),
  -- Exact bytes sent to Razorpay; every retry re-sends this text unchanged.
  razorpay_request_body text NOT NULL,
  razorpay_request_sha256 text NOT NULL,
  razorpay_refund_id text UNIQUE,
  razorpay_refund_status text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','processed','failed','review')),
  failure_reason text,
  requested_by uuid NOT NULL,
  -- Email delivery tracking
  email_status text NOT NULL DEFAULT 'not_sent' CHECK (email_status IN ('not_sent','sending','sent','failed')),
  email_attempts int NOT NULL DEFAULT 0,
  email_last_error text,
  email_claimed_at timestamptz,
  refund_email_sent_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK ((scope = 'item') = (booking_item_id IS NOT NULL)),
  CONSTRAINT booking_refunds_item_in_booking_fk FOREIGN KEY (booking_item_id, booking_id)
    REFERENCES public.booking_items (id, booking_id) ON DELETE RESTRICT
);
CREATE UNIQUE INDEX booking_refunds_one_live_per_item ON public.booking_refunds (booking_item_id)
  WHERE scope = 'item' AND status IN ('pending','processed','review');
CREATE UNIQUE INDEX booking_refunds_one_live_full ON public.booking_refunds (booking_id)
  WHERE scope = 'full' AND status IN ('pending','processed','review');
CREATE UNIQUE INDEX booking_refunds_one_open_per_booking ON public.booking_refunds (booking_id)
  WHERE status IN ('pending','review');
CREATE UNIQUE INDEX booking_refunds_receipt_uq ON public.booking_refunds (razorpay_payment_id, razorpay_receipt);
CREATE INDEX booking_refunds_booking_idx ON public.booking_refunds (booking_id);

GRANT SELECT ON public.booking_refunds TO authenticated;
GRANT ALL ON public.booking_refunds TO service_role;
ALTER TABLE public.booking_refunds ENABLE ROW LEVEL SECURITY;
CREATE POLICY "booking_refunds admin select" ON public.booking_refunds
  FOR SELECT TO authenticated USING (public.is_admin(auth.uid()));
-- No insert/update/delete policies: only the service-role functions below write.

CREATE TRIGGER trg_booking_refunds_updated_at BEFORE UPDATE ON public.booking_refunds
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 1b. Request details are immutable once recorded.
CREATE OR REPLACE FUNCTION public.booking_refunds_guard_immutable()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF NEW.booking_id IS DISTINCT FROM OLD.booking_id OR NEW.booking_item_id IS DISTINCT FROM OLD.booking_item_id
     OR NEW.scope IS DISTINCT FROM OLD.scope OR NEW.attempt_no IS DISTINCT FROM OLD.attempt_no
     OR NEW.amount_minor IS DISTINCT FROM OLD.amount_minor OR NEW.currency IS DISTINCT FROM OLD.currency
     OR NEW.razorpay_payment_id IS DISTINCT FROM OLD.razorpay_payment_id
     OR NEW.razorpay_receipt IS DISTINCT FROM OLD.razorpay_receipt
     OR NEW.razorpay_request_body IS DISTINCT FROM OLD.razorpay_request_body
     OR NEW.razorpay_request_sha256 IS DISTINCT FROM OLD.razorpay_request_sha256
     OR NEW.requested_by IS DISTINCT FROM OLD.requested_by
     OR (OLD.razorpay_refund_id IS NOT NULL AND NEW.razorpay_refund_id IS DISTINCT FROM OLD.razorpay_refund_id) THEN
    RAISE EXCEPTION 'refund_request_immutable' USING ERRCODE = '42501';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER trg_booking_refunds_immutable BEFORE UPDATE ON public.booking_refunds
  FOR EACH ROW EXECUTE FUNCTION public.booking_refunds_guard_immutable();

-- 2. Refund status, separate from cancellation status.
ALTER TABLE public.booking_items ADD COLUMN refund_status text NOT NULL DEFAULT 'none'
  CHECK (refund_status IN ('none','pending','refunded','failed'));
ALTER TABLE public.bookings ADD COLUMN refund_status text NOT NULL DEFAULT 'none'
  CHECK (refund_status IN ('none','partial','full'));

-- 3. Shared payment-ID / order-ID resolvers (the Edge Function mirrors these exactly).
--    to_jsonb() works whether or not bookings has top-level payment_id / order_id columns.
CREATE OR REPLACE FUNCTION public.refund_resolve_payment_id(b public.bookings)
RETURNS text LANGUAGE sql STABLE SET search_path = public AS $$
  SELECT NULLIF(btrim(COALESCE(NULLIF(btrim(to_jsonb(b)->>'payment_id'),''), b.item_details->>'payment_id')), '')
$$;
CREATE OR REPLACE FUNCTION public.refund_resolve_order_id(b public.bookings)
RETURNS text LANGUAGE sql STABLE SET search_path = public AS $$
  SELECT NULLIF(btrim(COALESCE(NULLIF(btrim(to_jsonb(b)->>'order_id'),''), b.item_details->>'order_id',
                               b.item_details->>'razorpay_order_id')), '')
$$;

-- 4. Locked begin step. Amount, receipt and request body are computed HERE from saved data;
--    the only external inputs are Razorpay values the Edge Function fetched server-side
--    and the admin id taken from the verified JWT.
CREATE OR REPLACE FUNCTION public.refund_begin(
  _booking_id uuid, _item_id uuid, _scope text, _payment_id text,
  _rzp_payment_status text, _rzp_captured_minor bigint, _rzp_refunded_minor bigint,
  _rzp_currency text, _rzp_order_id text, _requested_by uuid)
RETURNS public.booking_refunds
LANGUAGE plpgsql SET search_path = public AS $$
DECLARE
  b public.bookings; r public.booking_refunds;
  ours bigint; remaining bigint; amt bigint; items_minor bigint;
  attempt int; base text; rcpt text; body text; stored_order text;
BEGIN
  IF _scope NOT IN ('item','full') OR (_scope = 'item') <> (_item_id IS NOT NULL) THEN
    RAISE EXCEPTION 'invalid_scope' USING ERRCODE = '22023'; END IF;
  IF _requested_by IS NULL OR NOT public.is_admin(_requested_by) THEN
    RAISE EXCEPTION 'requester_not_admin' USING ERRCODE = '42501'; END IF;
  IF _rzp_payment_status IS DISTINCT FROM 'captured' THEN
    RAISE EXCEPTION 'payment_not_captured' USING ERRCODE = '22023'; END IF;

  PERFORM pg_advisory_xact_lock(hashtextextended('refund:' || _payment_id, 0));
  SELECT * INTO b FROM public.bookings WHERE id = _booking_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'booking_not_found' USING ERRCODE = 'P0002'; END IF;

  IF public.refund_resolve_payment_id(b) IS DISTINCT FROM _payment_id THEN
    RAISE EXCEPTION 'payment_mismatch' USING ERRCODE = '22023'; END IF;
  stored_order := public.refund_resolve_order_id(b);
  IF stored_order IS NOT NULL AND stored_order IS DISTINCT FROM _rzp_order_id THEN
    RAISE EXCEPTION 'order_mismatch' USING ERRCODE = '22023'; END IF;
  IF upper(b.currency) IS DISTINCT FROM upper(_rzp_currency) THEN
    RAISE EXCEPTION 'currency_mismatch' USING ERRCODE = '22023'; END IF;
  IF round(b.total_price * 100)::bigint <> _rzp_captured_minor THEN
    RAISE EXCEPTION 'total_vs_captured_mismatch' USING ERRCODE = '22023'; END IF;

  IF EXISTS (SELECT 1 FROM public.booking_refunds WHERE booking_id = _booking_id AND status IN ('pending','review')) THEN
    RAISE EXCEPTION 'refund_in_progress' USING ERRCODE = '55P03'; END IF;
  IF EXISTS (SELECT 1 FROM public.booking_refunds WHERE booking_id = _booking_id AND scope = 'full' AND status = 'processed') THEN
    RAISE EXCEPTION 'already_fully_refunded' USING ERRCODE = '23505'; END IF;

  SELECT COALESCE(sum(amount_minor),0) INTO ours FROM public.booking_refunds
    WHERE booking_id = _booking_id AND status = 'processed';
  IF _rzp_refunded_minor <> ours THEN
    RAISE EXCEPTION 'gateway_ledger_mismatch' USING ERRCODE = '55000'; END IF;
  remaining := _rzp_captured_minor - ours;

  IF _scope = 'item' THEN
    SELECT round(COALESCE(sum(price),0) * 100)::bigint INTO items_minor FROM public.booking_items WHERE booking_id = _booking_id;
    IF items_minor <> _rzp_captured_minor THEN
      RAISE EXCEPTION 'items_vs_captured_mismatch' USING ERRCODE = '22023'; END IF;
    SELECT round(price * 100)::bigint INTO amt FROM public.booking_items WHERE id = _item_id AND booking_id = _booking_id;
    IF NOT FOUND THEN RAISE EXCEPTION 'item_not_in_booking' USING ERRCODE = '22023'; END IF;
    IF EXISTS (SELECT 1 FROM public.booking_refunds WHERE booking_item_id = _item_id AND status = 'processed') THEN
      RAISE EXCEPTION 'item_already_refunded' USING ERRCODE = '23505'; END IF;
    base := 'yl-i-' || replace(_item_id::text, '-', '');
    SELECT COUNT(*) + 1 INTO attempt FROM public.booking_refunds WHERE booking_item_id = _item_id AND status = 'failed';
  ELSE
    amt := remaining;
    base := 'yl-f-' || replace(_booking_id::text, '-', '');
    SELECT COUNT(*) + 1 INTO attempt FROM public.booking_refunds WHERE booking_id = _booking_id AND scope = 'full' AND status = 'failed';
  END IF;
  IF amt IS NULL OR amt <= 0 OR amt > remaining THEN
    RAISE EXCEPTION 'exceeds_remaining' USING ERRCODE = '22023'; END IF;
  IF attempt > 9 THEN RAISE EXCEPTION 'too_many_attempts' USING ERRCODE = '54000'; END IF;
  rcpt := base || CASE WHEN attempt = 1 THEN '' ELSE '-r' || attempt END;

  r.id := gen_random_uuid();
  -- Fixed key order, built once, stored verbatim.
  body := '{"amount":' || amt || ',"speed":"normal","receipt":' || to_jsonb(rcpt)::text
       || ',"notes":{"booking_id":' || to_jsonb(_booking_id::text)::text
       || ',"item_id":' || COALESCE(to_jsonb(_item_id::text)::text, '""')
       || ',"attempt_id":' || to_jsonb(r.id::text)::text || '}}';

  INSERT INTO public.booking_refunds (id, booking_id, booking_item_id, scope, attempt_no, amount_minor, currency,
    razorpay_payment_id, razorpay_receipt, razorpay_request_body, razorpay_request_sha256, requested_by)
  VALUES (r.id, _booking_id, _item_id, _scope, attempt, amt, upper(_rzp_currency), _payment_id, rcpt, body,
    encode(sha256(convert_to(body, 'UTF8')), 'hex'), _requested_by)
  RETURNING * INTO r;
  IF _scope = 'item' THEN
    UPDATE public.booking_items SET refund_status = 'pending' WHERE id = _item_id AND booking_id = _booking_id;
  END IF;
  RETURN r;
END $$;

-- 5. Locked finish step. Accepts only fields read from Razorpay's own response, and cross-checks them.
--    _outcome: 'created' (Razorpay returned a refund object) | 'rejected' (clear 4xx, no refund exists).
CREATE OR REPLACE FUNCTION public.refund_finish(
  _refund_id uuid, _outcome text, _rzp_refund_id text, _rzp_refund_payment_id text,
  _rzp_refund_amount bigint, _rzp_refund_receipt text, _rzp_refund_status text,
  _failure_reason text, _rzp_captured_minor bigint)
RETURNS public.booking_refunds
LANGUAGE plpgsql SET search_path = public AS $$
DECLARE r public.booking_refunds; total bigint; pid text;
BEGIN
  SELECT razorpay_payment_id INTO pid FROM public.booking_refunds WHERE id = _refund_id;
  IF NOT FOUND THEN RAISE EXCEPTION 'refund_not_found' USING ERRCODE = 'P0002'; END IF;
  PERFORM pg_advisory_xact_lock(hashtextextended('refund:' || pid, 0));
  SELECT * INTO r FROM public.booking_refunds WHERE id = _refund_id FOR UPDATE;
  PERFORM 1 FROM public.bookings WHERE id = r.booking_id FOR UPDATE;
  IF r.status <> 'pending' THEN RETURN r; END IF;  -- idempotent

  IF _outcome = 'created' THEN
    IF _rzp_refund_id IS NULL OR _rzp_refund_id !~ '^rfnd_[A-Za-z0-9]+$'
       OR _rzp_refund_payment_id IS DISTINCT FROM r.razorpay_payment_id
       OR _rzp_refund_amount IS DISTINCT FROM r.amount_minor
       OR _rzp_refund_receipt IS DISTINCT FROM r.razorpay_receipt
       OR _rzp_refund_status NOT IN ('pending','processed') THEN
      UPDATE public.booking_refunds SET status = 'review',
        failure_reason = 'Razorpay response did not match the recorded request'
        WHERE id = _refund_id RETURNING * INTO r;
      RETURN r;
    END IF;
    UPDATE public.booking_refunds SET status = 'processed', razorpay_refund_id = _rzp_refund_id,
      razorpay_refund_status = _rzp_refund_status WHERE id = _refund_id RETURNING * INTO r;
    IF r.scope = 'item' THEN
      UPDATE public.booking_items SET refund_status = 'refunded' WHERE id = r.booking_item_id AND booking_id = r.booking_id;
    ELSE
      UPDATE public.booking_items SET refund_status = 'refunded' WHERE booking_id = r.booking_id AND refund_status <> 'refunded';
    END IF;
    SELECT COALESCE(sum(amount_minor),0) INTO total FROM public.booking_refunds
      WHERE booking_id = r.booking_id AND status = 'processed';
    IF total >= _rzp_captured_minor THEN
      UPDATE public.bookings SET refund_status = 'full', status = 'refunded' WHERE id = r.booking_id;
    ELSE
      UPDATE public.bookings SET refund_status = 'partial' WHERE id = r.booking_id;
    END IF;
  ELSIF _outcome = 'rejected' THEN
    UPDATE public.booking_refunds SET status = 'failed', failure_reason = left(COALESCE(_failure_reason,'rejected'), 500)
      WHERE id = _refund_id RETURNING * INTO r;
    IF r.scope = 'item' THEN
      UPDATE public.booking_items SET refund_status = 'failed' WHERE id = r.booking_item_id AND booking_id = r.booking_id;
    END IF;
  ELSE
    RAISE EXCEPTION 'invalid_outcome' USING ERRCODE = '22023';
  END IF;
  RETURN r;
END $$;

-- 6. Email delivery tracking. Claim is atomic; a stale 'sending' claim (>10 min, e.g. a crash) can be re-claimed.
CREATE OR REPLACE FUNCTION public.refund_email_claim(_refund_id uuid, _booking_id uuid)
RETURNS public.booking_refunds
LANGUAGE plpgsql SET search_path = public AS $$
DECLARE r public.booking_refunds;
BEGIN
  UPDATE public.booking_refunds
     SET email_status = 'sending', email_claimed_at = now(), email_attempts = email_attempts + 1
   WHERE id = _refund_id AND booking_id = _booking_id AND status = 'processed' AND razorpay_refund_id IS NOT NULL
     AND email_attempts < 10
     AND (email_status IN ('not_sent','failed')
          OR (email_status = 'sending' AND email_claimed_at < now() - interval '10 minutes'))
  RETURNING * INTO r;
  RETURN r;  -- NULL row = not claimable (already sent, in flight, not processed, wrong booking, or 10 attempts used)
END $$;

CREATE OR REPLACE FUNCTION public.refund_email_mark(_refund_id uuid, _sent boolean, _error text)
RETURNS public.booking_refunds
LANGUAGE plpgsql SET search_path = public AS $$
DECLARE r public.booking_refunds;
BEGIN
  UPDATE public.booking_refunds
     SET email_status = CASE WHEN _sent THEN 'sent' ELSE 'failed' END,
         refund_email_sent_at = CASE WHEN _sent THEN now() ELSE refund_email_sent_at END,
         email_last_error = CASE WHEN _sent THEN NULL ELSE left(_error, 500) END
   WHERE id = _refund_id AND email_status = 'sending'
  RETURNING * INTO r;
  RETURN r;
END $$;

-- 7. Only the server (service role) may run these. PUBLIC is revoked so the Data API refuses browser tokens.
REVOKE ALL ON FUNCTION public.refund_resolve_payment_id(public.bookings) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.refund_resolve_order_id(public.bookings) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.refund_begin(uuid,uuid,text,text,text,bigint,bigint,text,text,uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.refund_finish(uuid,text,text,text,bigint,text,text,text,bigint) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.refund_email_claim(uuid,uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.refund_email_mark(uuid,boolean,text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.booking_refunds_guard_immutable() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.refund_resolve_payment_id(public.bookings) TO service_role;
GRANT EXECUTE ON FUNCTION public.refund_resolve_order_id(public.bookings) TO service_role;
GRANT EXECUTE ON FUNCTION public.refund_begin(uuid,uuid,text,text,text,bigint,bigint,text,text,uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.refund_finish(uuid,text,text,text,bigint,text,text,text,bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.refund_email_claim(uuid,uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.refund_email_mark(uuid,boolean,text) TO service_role;
