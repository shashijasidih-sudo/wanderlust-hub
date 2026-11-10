# Production booking correction — investigation and approval proposal

## Scope and access status

**Only permitted target:** Yellodae Trails Auth, production/main, project reference `cymzgmfnhtnqledwwojt`, Singapore (name/environment/region supplied by you).

No database requests, changes, deployments, payment actions or publishing were performed. The separate Lovable Cloud project was not accessed or modified. Available database credentials do **not** explicitly match the permitted production project and were not used; no external service connection is available.

The complete live production schema, current function definition, indexes, grants, triggers and deployed Edge Function source remain **unverified**. Findings below distinguish your supplied production evidence from inspected repository code. The repository's Cloud schema is not treated as production evidence.

## Root cause

Your reported `bookings.id UUID NOT NULL DEFAULT gen_random_uuid()` and SQL explain error `23502`:

```sql
INSERT INTO public.bookings
SELECT * FROM jsonb_populate_record(NULL::public.bookings, _booking)
RETURNING * INTO new_booking;
```

`jsonb_populate_record` fills absent attributes with SQL NULL. `SELECT *` explicitly supplies every column, bypassing column defaults. Adding another UUID default to the table would not fix this statement.

## Proposed minimal SQL correction

**Draft replacement for the parent INSERT only; not a complete deployable function.** After obtaining the complete function, replace this statement in place, keeping its signature, return type, security mode, search path, permissions, item insertion, exception handling and return statements unchanged:

```sql
INSERT INTO public.bookings
SELECT *
FROM jsonb_populate_record(
  NULL::public.bookings,
  _booking || jsonb_build_object(
    'id', COALESCE((_booking ->> 'id')::uuid, gen_random_uuid())
  )
)
RETURNING * INTO new_booking;
```

- Missing `id` or JSON `null` generates a database UUID.
- A valid supplied UUID is preserved; duplicate UUIDs retain normal primary-key rejection.
- Malformed/empty UUID strings are rejected rather than silently replaced.
- All other supplied fields are unchanged, and `new_booking.id` remains the relationship key for the existing items logic.
- This patch assumes `_booking` is a validated, non-null JSON object. Confirm or add input validation within the function before inserting; preserve existing validation if present.
- UUID generation fixes this failure, **not payment idempotency**.

### Other database defaults

The same `SELECT *` pattern bypasses **every** omitted defaulted column, not just `id`. The local parent payload omits `booking_number`, `created_at` and `updated_at`. Their production definitions and triggers must be inspected; they may become NULL or cause the next failure. A trigger could fill `booking_number`, but this cannot be assumed. Inspect `booking_items` for the same populate-record pattern, especially item IDs, timestamps, quantities, status, currency and JSON defaults.

If additional affected defaults exist, prefer an **explicit, schema-verified column INSERT**, omitting server-generated columns so PostgreSQL applies their actual defaults. Preserve all supported supplied booking fields, including the agreed handling of supplied IDs; preserve explicit NULL for genuinely nullable fields. Do not apply blanket `COALESCE` to all columns or hardcode guessed defaults. The complete corrected SQL will be prepared from the production export before implementation approval.

## Read-only production evidence needed

Run these queries only against the confirmed production project, or supply their outputs without credentials or customer records:

```sql
-- Full columns, defaults and generated/identity attributes for both tables.
SELECT table_name, ordinal_position, column_name, data_type,
       udt_schema, udt_name, is_nullable, column_default,
       is_identity, is_generated, generation_expression
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name IN ('bookings', 'booking_items')
ORDER BY table_name, ordinal_position;

-- Exact function, owner and execution privileges.
SELECT p.oid::regprocedure::text AS signature,
       pg_get_functiondef(p.oid) AS definition,
       pg_get_userbyid(p.proowner) AS owner,
       p.prosecdef AS security_definer, p.proconfig, p.proacl
FROM pg_proc p
JOIN pg_namespace n ON n.oid = p.pronamespace
WHERE n.nspname = 'public'
  AND p.proname = 'create_booking_with_items';

-- Constraints and relationships.
SELECT conrelid::regclass::text AS table_name, conname,
       pg_get_constraintdef(oid) AS definition
FROM pg_constraint
WHERE conrelid IN ('public.bookings'::regclass,
                   'public.booking_items'::regclass);

SELECT tablename, indexname, indexdef
FROM pg_indexes
WHERE schemaname = 'public'
  AND tablename IN ('bookings', 'booking_items');

SELECT t.tgrelid::regclass::text AS table_name, t.tgname,
       pg_get_triggerdef(t.oid) AS trigger_definition,
       pg_get_functiondef(t.tgfoid) AS trigger_function
FROM pg_trigger t
WHERE NOT t.tgisinternal
  AND t.tgrelid IN ('public.bookings'::regclass,
                    'public.booking_items'::regclass);

SELECT * FROM pg_policies
WHERE schemaname = 'public'
  AND tablename IN ('bookings', 'booking_items');

SELECT table_name, grantee, privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'public'
  AND table_name IN ('bookings', 'booking_items')
ORDER BY table_name, grantee, privilege_type;
```

Also needed: deployed `save-booking`, `verify-payment`, and `send-confirmation` source/config and relevant redacted logs. Repository copies may differ from production.

## Repository findings: payload and confirmation

### `supabase/functions/save-booking/index.ts`

- Builds `_booking` without `id`, matching the reported failure. Copies contact/travel/price fields, derives ownership from the bearer token, and places payment/order IDs in `item_details`.
- Calls `create_booking_with_items` once with the parent and all item rows. A real RPC error returns failure; the compensating insert/delete fallback is reserved for a missing RPC. That fallback is not fully atomic and can leave an incomplete booking if rollback fails.
- Looks up an existing payment before inserting, but ignores lookup errors. A check followed by insert **does not prevent concurrent duplicates** unless production has a suitable unique constraint/index or serialized database logic.
- Existing-payment response does not check owner/payment-order consistency and skips confirmation delivery entirely. These require careful review before allowing guest recovery.
- Calls `send-confirmation` only after a returned booking ID, but does not inspect HTTP status/body. SMTP failures may therefore look like successful delivery.
- Its outer exception handler can delete a booking after the ID has been assigned. Approved changes should distinguish uncommitted construction from committed success: post-commit notification/response failures must not delete paid bookings.
- Marks bookings paid/confirmed without verifying the payment inside this function. Frontend verification alone is insufficient: a caller can invoke `save-booking` directly. Server-side payment/order, captured status, amount and currency validation must be confirmed in production before claiming payment safety.
- Logs customer payloads; avoid sharing those logs unredacted.

### `supabase/functions/verify-payment/index.ts`

- Inspected local copy verifies the Razorpay signature and returns `verified: true`; **it does not insert a booking or call save-booking**. No double save from this copy was found.
- Signature validity alone does not establish captured status or matching booking amount/currency. Production behavior remains unverified.

### Confirmation and voucher workflow

`supabase/functions/send-confirmation/index.ts` loads the saved parent and items by booking UUID and sends branded customer/support email using existing Hostinger SMTP. It displays existing voucher numbers and promises vouchers later; no automatic voucher generation, voucher URL creation or PDF attachment workflow was found in this file. Support email is fire-and-forget; there is no durable delivery retry/deduplication mechanism visible. No in-code caller authorization check is visible; deployed access configuration must be verified separately. SMTP credentials, branding and refund/cancellation behavior must remain unchanged.

## Retry and duplicate-booking safeguards proposed for separate approval

1. Validate the payment server-side at booking creation, including order association, captured status, expected amount/currency and ownership. Do not trust client-supplied totals or a prior frontend verification request.
2. Inspect existing duplicate payments before proposing a database uniqueness guard on the verified payment key. Do not delete duplicates automatically. Implement transactional idempotency so simultaneous retries return the same committed booking and original items, with no overwrite and no second charge.
3. Fail safely on idempotency lookup errors. Only return an existing booking after authorized ownership/payment consistency checks; do not reveal someone else's booking.
4. Persist payment/order/signature recovery details alongside the original booking snapshot before saving. Retrying must reuse the captured payment; never create another Razorpay order/payment for recovery.
5. Treat email delivery independently from booking commitment: inspect delivery responses, report pending/failed delivery, and provide deduplicated retries without reinserting bookings. A durable delivery mechanism, if needed, requires separately approved scope.

### Frontend risks discovered — not changed

- `src/pages/PaymentInformation.tsx`: explicit save failures preserve the cart, but exceptions fall through to cart clearing and the success page. The Razorpay payment response is not persisted for reload recovery. Cart clearing is not awaited.
- `src/pages/QuickPay.tsx`: failed booking saves can still track purchase, discard the stored booking and reset customer fields.
- `src/components/BookingModal.tsx`: inspected callback does not call signature verification, sends no ownership bearer token, and can show success after a save failure. Check whether this legacy modal remains reachable before approving changes.
- These callers share one `booking_data` storage key; concurrent tabs/payments can overwrite snapshots. Recovery should be associated with its specific order/payment.

**The UUID-only correction does not resolve these safety gaps.** No claim of safe end-to-end recovery or duplicate prevention can be made yet.

## Affected SQL and files

**Changed now:** only this proposal and `roadmap.md`; no application code changed.

**Minimal fix after inspection/approval:** `public.create_booking_with_items(jsonb,jsonb)` and a reviewed SQL migration artifact (not yet created/applied). No table-default alteration is needed for the confirmed UUID issue.

**Additional safety work, only with approval:** `save-booking/index.ts`, payment-key uniqueness/idempotency SQL if missing, `PaymentInformation.tsx`, `QuickPay.tsx`, and any reachable `BookingModal.tsx`; corresponding targeted tests. Confirmation delivery changes require separately reviewed impact because `send-confirmation` also handles refunds/cancellations. `verify-payment` was inspected, not nominated for an automatic deployment.

No unrelated functions, RLS, payment credentials, refund logic or Cloud database changes.

## Verification plan after production evidence and implementation approval

Use a disposable test database mirroring the exported production schema, never the forbidden Cloud project:

1. Reproduce `23502` using the original statement and a sanitized actual payload.
2. Test absent ID, JSON null ID, supplied UUID, malformed UUID and duplicate UUID. Assert generated UUIDs and exact preservation of supplied fields/return shape.
3. Test every production-defaulted field with omitted and explicit-null values according to its verified intended behavior.
4. Test activity/transfer multi-item bookings: exact row count, dates, prices, guests, pickup details and all item foreign keys equal the returned parent ID.
5. Force an item insert failure: neither parent nor items persist. Confirm no email runs before successful commit.
6. Test sequential and simultaneous retries of the same payment: exactly one parent and one set of items, same returned UUID. Test mismatched owner/order/amount and invalid or uncaptured payments are rejected.
7. Simulate dropped responses, HTTP 500, SMTP rejection and refresh after payment. Preserve booking/cart/recovery state appropriately; no success screen without a saved UUID, no deletion after commit and no second charge. Confirm email retry does not create a booking or duplicate known successful delivery.
8. Verify existing branded Hostinger emails, item details and any independently documented voucher workflow without changing credentials or sending unsolicited customer messages.
9. Run targeted regression tests and review the automatic production build. Only after separate deployment authorization, confirm the target reference immediately before applying the reviewed correction and verify live logs/read-back in production.
10. Recover the previously captured Coral Island booking only after checking its actual Razorpay payment/order, absence of an existing complete booking and original details. Reuse the payment; do not charge again, overwrite bookings or modify Razorpay records.

**Next step:** provide read-only production access or the exports above, then review the final complete SQL and the separately scoped safety changes. Approval of this investigation proposal is not deployment or publishing authorization.