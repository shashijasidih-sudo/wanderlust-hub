-- Read-only checks. Part A before the migration, part B after.
-- A1 prerequisites exist
SELECT proname FROM pg_proc WHERE pronamespace='public'::regnamespace AND proname IN ('is_admin','set_updated_at');
-- A2 names are free
SELECT to_regclass('public.booking_refunds') AS table_exists, to_regclass('public.booking_items_id_booking_uq') AS idx_exists;
SELECT table_name, column_name FROM information_schema.columns
 WHERE table_schema='public' AND table_name IN ('bookings','booking_items') AND column_name IN ('refund_status','payment_id','order_id');
-- A3 test booking: resolved payment/order IDs and amount agreement (replace :booking_id)
SELECT b.id, COALESCE(NULLIF(to_jsonb(b)->>'payment_id',''), b.item_details->>'payment_id') AS payment_id,
       COALESCE(NULLIF(to_jsonb(b)->>'order_id',''), b.item_details->>'order_id', b.item_details->>'razorpay_order_id') AS order_id,
       round(b.total_price*100)::bigint AS total_minor,
       (SELECT round(COALESCE(sum(i.price),0)*100)::bigint FROM public.booking_items i WHERE i.booking_id=b.id) AS items_minor
FROM public.bookings b WHERE b.id = :'booking_id';
-- B1 function privileges: anon/authenticated must be false
SELECT r.rolname, p.proname, has_function_privilege(r.rolname, p.oid, 'EXECUTE') AS can_execute
FROM pg_proc p CROSS JOIN (VALUES ('anon'),('authenticated'),('service_role')) r(rolname)
WHERE p.pronamespace='public'::regnamespace
  AND p.proname IN ('refund_begin','refund_finish','refund_email_claim','refund_email_mark','refund_resolve_payment_id','refund_resolve_order_id')
ORDER BY p.proname, r.rolname;
-- B2 table privileges: authenticated SELECT only
SELECT grantee, privilege_type FROM information_schema.role_table_grants
 WHERE table_schema='public' AND table_name='booking_refunds' ORDER BY grantee, privilege_type;
-- B3 existing booking/booking_items policies unchanged (compare with pre-migration output)
SELECT tablename, policyname, cmd FROM pg_policies WHERE schemaname='public' AND tablename IN ('bookings','booking_items','booking_refunds') ORDER BY 1,2;
