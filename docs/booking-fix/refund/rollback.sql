-- Rollback for 001_item_refunds.sql. Run only if no real refund rows must be kept
-- (export booking_refunds first). Existing booking/item data is otherwise untouched.
DROP FUNCTION IF EXISTS public.refund_email_mark(uuid,boolean,text);
DROP FUNCTION IF EXISTS public.refund_email_claim(uuid,uuid);
DROP FUNCTION IF EXISTS public.refund_finish(uuid,text,text,text,bigint,text,text,text,bigint);
DROP FUNCTION IF EXISTS public.refund_begin(uuid,uuid,text,text,text,bigint,bigint,text,text,uuid);
DROP TABLE IF EXISTS public.booking_refunds;
DROP FUNCTION IF EXISTS public.booking_refunds_guard_immutable();
DROP FUNCTION IF EXISTS public.refund_resolve_order_id(public.bookings);
DROP FUNCTION IF EXISTS public.refund_resolve_payment_id(public.bookings);
ALTER TABLE public.bookings DROP COLUMN IF EXISTS refund_status;
ALTER TABLE public.booking_items DROP COLUMN IF EXISTS refund_status;
DROP INDEX IF EXISTS public.booking_items_id_booking_uq;
