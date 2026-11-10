# Production booking failure — revised proposal from supplied exports

## Confirmed target and scope

Target: **Yellodae Trails Auth — `cymzgmfnhtnqledwwojt` — main/production, Singapore**, as identified by you. Inspected your three exports; no live database was contacted. The separate Lovable Cloud project remains untouched. **No application edits, SQL execution, deployment, payment action or publication.** Only the proposal and task checklist were updated.

## Exact findings

- `production-bookings-schema.csv`: production `bookings` has **20 columns**, `booking_items` **33**. Parent `id`, `created_at`, `updated_at` are NOT NULL with defaults. Parent `user_id` and `tour_date` are also **NOT NULL**; guest ownership cannot be assumed valid.
- `Supabase_Snippet_Untitled_query.csv`: the complete function explicitly inserts every column through `jsonb_populate_record(NULL::public.bookings, ...)` and `jsonb_populate_recordset(NULL::public.booking_items, ...)`. Both turn omitted fields into NULL instead of applying defaults.
- `index.ts`: deployed save-booking source is identical to the repository copy except the final newline. It omits parent/item IDs and timestamps. The first failure is therefore parent `id` (`23502`); fixing only that exposes parent timestamp and then item ID/timestamp failures (subject to any unexported triggers).

### All defaults bypassed by the original SQL

| Table | Defaults affected |
|---|---|
| bookings | id, adults, children, currency, status, created_at, updated_at, refund_status |
| booking_items | id, product_type, quantity, adults, children, price, currency, status, pickup_required, item_details, created_at, updated_at |

The current save-booking payload supplies most business defaults, but omits both tables' IDs/timestamps and parent `refund_status`. `booking_number` has **no default** in the export; whether a trigger generates it remains unverified. `amount` also has no default and is nullable; don't invent a mapping from price without checking its use. Nullable item voucher/supplier fields remain preserved if supplied to the SQL function.

**Additional mismatch:** save-booking sends `payment_status: "paid"`, but production has **no payment_status column**. The RPC currently ignores unknown JSON keys, so this is not the reported NULL-ID error. Its direct-table fallback will reject that unknown column if exercised. Payment references are stored in `item_details`; don't add a payment_status column merely to match the other project.

## Minimum safe SQL correction proposed

Replace the **two insert constructions** in the same existing function, not the table schema. Seed typed records with the exact exported defaults before populating JSON. Generate UUIDs inside PostgreSQL for missing/JSON-null IDs; keep supplied valid IDs. This avoids enumerating and accidentally dropping any of the 20 parent or 33 child fields. Keep the existing return type, SECURITY DEFINER/search path, 1–10 item limit, single transaction and forced item booking_id.

The complete draft below is **for review only**, not applied or placed in an executable migration. All default values come directly from your CSV. They are function-level mirrors of the current table defaults, not changes to table defaults; any future default change must update this function too. An explicit-column INSERT is a longer alternative, but must carefully preserve supported optional fields.

```sql
CREATE OR REPLACE FUNCTION public.create_booking_with_items(_booking jsonb, _items jsonb)
RETURNS public.bookings
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  new_booking public.bookings;
  booking_defaults public.bookings;
  item_defaults public.booking_items;
BEGIN
  IF _booking IS NULL OR jsonb_typeof(_booking) <> 'object' THEN
    RAISE EXCEPTION 'create_booking_with_items: booking must be an object';
  END IF;
  IF _items IS NULL OR jsonb_typeof(_items) <> 'array' THEN
    RAISE EXCEPTION 'create_booking_with_items: items must be an array';
  END IF;
  IF jsonb_array_length(_items) = 0 THEN
    RAISE EXCEPTION 'create_booking_with_items: at least one item is required';
  END IF;
  IF jsonb_array_length(_items) > 10 THEN
    RAISE EXCEPTION 'create_booking_with_items: a booking may contain at most 10 items';
  END IF;
  IF EXISTS (
    SELECT 1 FROM jsonb_array_elements(_items) AS e(value)
    WHERE jsonb_typeof(e.value) <> 'object'
  ) THEN
    RAISE EXCEPTION 'create_booking_with_items: each item must be an object';
  END IF;

  -- Verified production defaults: omitted attributes retain these values.
  booking_defaults.id := gen_random_uuid();
  booking_defaults.adults := 1;
  booking_defaults.children := 0;
  booking_defaults.currency := 'INR'::text;
  booking_defaults.status := 'pending'::booking_status;
  booking_defaults.created_at := now();
  booking_defaults.updated_at := now();
  booking_defaults.refund_status := 'pending'::text;

  INSERT INTO public.bookings
  SELECT * FROM jsonb_populate_record(
    booking_defaults,
    _booking || jsonb_build_object(
      'id', COALESCE((_booking ->> 'id')::uuid, booking_defaults.id)
    )
  )
  RETURNING * INTO new_booking;

  item_defaults.product_type := 'activity'::text;
  item_defaults.quantity := 1;
  item_defaults.adults := 1;
  item_defaults.children := 0;
  item_defaults.price := 0;
  item_defaults.currency := 'INR'::text;
  item_defaults.status := 'confirmed'::text;
  item_defaults.pickup_required := false;
  item_defaults.item_details := '{}'::jsonb;
  item_defaults.created_at := now();
  item_defaults.updated_at := now();

  -- A distinct UUID per item; always use the inserted parent's relationship key.
  INSERT INTO public.booking_items
  SELECT r.*
  FROM jsonb_array_elements(_items) AS e(value)
  CROSS JOIN LATERAL jsonb_populate_record(
    item_defaults,
    e.value || jsonb_build_object(
      'id', COALESCE((e.value ->> 'id')::uuid, gen_random_uuid()),
      'booking_id', new_booking.id
    )
  ) AS r;

  RETURN new_booking;
END;
$function$;
```

### Behavior and boundaries

- Missing or JSON-null UUID generates a UUID; valid supplied UUID is retained; malformed UUID fails. Normal existing uniqueness checks still apply.
- Missing defaulted attributes use the exported defaults. An explicitly supplied NULL still overrides a default and retains existing NOT NULL rejection where applicable (except the agreed UUID handling). This avoids masking invalid input.
- All other JSON fields supported by the table remain populated as before, including supplied timestamps, refund_status, amount, booking_number, voucher fields and item_details. Unknown JSON fields remain ignored, matching the original RPC.
- A child failure rolls back the parent and every item automatically; no separate deletion/compensation is introduced.
- Non-object inputs receive clear validation errors. No role/grant/RLS changes are proposed. Function owner and execute grants must be checked before deployment; CREATE OR REPLACE should preserve existing ownership/grants.
- This correction does **not** make guest bookings valid, verify Razorpay payment or guarantee idempotency. Those must not be implied by a successful UUID fix.

## Does save-booking require code changes?

**For an authenticated booking with valid travel date:** no code change or redeployment is needed to fix these defaults; correcting the existing RPC handles the current payload and retains its confirmation call.

**For reliable guest/retry behavior:** yes, separate controlled corrections are needed:

1. `ownerId` can be NULL for no token, while production user_id is NOT NULL. Body user_id is intentionally ignored. Require and validate a production auth token for this schema; do not invent an owner, accept an untrusted body ID, or relax NOT NULL. Quick Pay and the legacy modal send no token. A guest flow would require separately approved design/schema changes, not this minimum fix.
2. Remove the unsupported payment_status key from the parent payload if retaining direct-table fallback. The RPC currently ignores it; do not mistake it for stored payment verification. Prefer failing safely when the expected transactional RPC is unavailable instead of a non-atomic insert/delete fallback.
3. Check errors from the existing-payment lookup; check payment/order/owner consistency before returning existing data. A pre-insert lookup alone is race-prone. Inspect production indexes/duplicates before proposing a uniqueness guard or transactional payment-key lock/check.
4. Validate captured Razorpay payment, order association, amount and currency server-side at save time. This source marks confirmed without such validation and without requiring a payment_id. Frontend signature verification cannot secure a directly callable save endpoint.
5. Check send-confirmation HTTP status/body, distinguish delivery from saved booking success, and don't delete a committed booking on later failures. Existing-payment retries currently return before sending confirmation, so a failed initial email isn't retried automatically.

These are findings/proposed changes, **not implemented**. Payment credentials, refunds, database roles and Hostinger settings stay unchanged.

## Confirmation and voucher evidence

The deployed save-booking export calls send-confirmation **after a returned saved UUID**, with bookingId/paymentId/orderId; it never reaches that call on the reported transaction failure. A successful call's delivery result is currently unchecked.

Only the repository send-confirmation source was available: it loads saved parent/items and sends Yellodae-branded Hostinger SMTP email, displaying existing voucher numbers. It does not generate PDF vouchers or populate voucher URLs. The actual deployed confirmation source/logs and any separate supplier voucher process were **not** supplied, so delivery/voucher generation cannot be confirmed. The repository verify-payment checks signature only and does not create another booking; deployed verification source is still unverified.

## Safe reconciliation of the already-captured Coral Island payment

**Do not create a new Razorpay order, charge again, refund automatically or change payment records.**

1. Retrieve the exact payment/order IDs and original saved item/contact/travel payload from redacted production logs or the customer's preserved booking snapshot. The uploaded sources contain no actual payment IDs; `YL-2026-1014` alone is not a payment deduplication key.
2. Read Razorpay payment details with authorized production access: captured state, order ID, amount, currency and customer/merchant context. Match them to the original booking and authenticated customer's production UUID, not a guessed user.
3. Read production bookings by `item_details->>payment_id` and order reference, including corresponding booking_items. Check for duplicates/incomplete bookings. Error 23502 in this atomic RPC implies that invocation saved nothing, but other retries may already have succeeded.
4. If a complete matching booking exists, return/reuse its UUID and retry only verified-missing confirmation/voucher delivery. If incomplete or conflicting, stop for manual review; don't overwrite or delete it.
5. After SQL testing and explicit deployment/recovery approval, create the missing booking once through the corrected RPC using the original verified payment, owner and full item details. Serialize recovery against live retries with reviewed database idempotency safeguards; the current check-then-insert is not sufficient.
6. Read back parent/items, price, date, guests, pickup details and payment references. Only then invoke the existing confirmation workflow. Log recovery outcome without exposing customer data. Customer email should not imply a voucher was generated unless verified.

## Proposed affected files and SQL

- **Now changed:** roadmap.md and this review proposal only.
- **Minimum fix after approval:** public.create_booking_with_items(jsonb,jsonb); a reviewed production SQL migration artifact, not yet created/applied. No table changes or Edge Function deployment required for an authenticated valid payload.
- **Separate safety batch if approved:** supabase/functions/save-booking/index.ts and targeted tests; transactional payment idempotency SQL only after index/duplicate/access review. Frontend recovery changes would affect PaymentInformation.tsx, QuickPay.tsx and any reachable BookingModal.tsx, not bundled silently into the SQL fix.
- No refund, checkout UI, role policies, payment credentials, Cloud project or unrelated deployment changes.

## Verification plan and outstanding evidence

Before deploying, obtain production constraints/FKs/indexes/triggers, booking_status enum values, function owner/execute grants and deployed confirmation/verification configuration. The column export does not establish these. Verify the target reference again immediately before any approved production action.

In an isolated disposable database matching the exports and those additional definitions:

1. Reproduce parent ID, parent timestamp, item ID and item timestamp failures with the original function and deployed payload; no paid production writes.
2. Test omitted/null/supplied/malformed IDs, every default above, explicit NULL constraints, and rejection of missing owner/date. Assert exact returned UUID/record and preservation of every supported field, including optional voucher/refund fields.
3. Test activity/transfer multi-items, distinct item UUIDs, correct relationships, totals, dates and pickup details; test 0/11 items and malformed JSON. Force child failure and confirm neither parent nor items persists.
4. For any separately approved retry work, test concurrent same-payment requests, lookup failure, ownership/order/amount mismatch and lost responses. Exactly one complete booking; recovery never charges again.
5. Simulate confirmation HTTP failure: saved booking survives; no false delivery claim or extra booking. Verify real Hostinger delivery/voucher status only with explicit authorization and deployed evidence.
6. Run targeted tests and check the automatic production build only if application files change. No production build was run for this documentation-only investigation, and no runtime SQL tests or live reconciliation have occurred.

**Waiting for your approval of the minimum SQL proposal.** Additional safety work and deployment/reconciliation require explicit scope approval and the missing production evidence; approval of the report alone does not authorize publishing or production writes.
