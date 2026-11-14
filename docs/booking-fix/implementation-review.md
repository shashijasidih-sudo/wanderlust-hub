# Coordinated Booking Fix v6/v6.1 — implementation review

## Status and release restrictions

Repository implementation prepared, **not production-ready or released**. No SQL was executed, database contacted, Edge Function deployed, website published, credential changed, payment initiated, historical record modified or email sent during this work. No release tool was called. Do not point preview/manual payment tests at the live merchant.

## Files inspected

- Existing `supabase/functions/create-order/index.ts` and `save-booking/index.ts`, before changing either.
- `supabase/functions/verify-payment/index.ts` and the confirmation request/response and SMTP workflow in `send-confirmation/index.ts`.
- Existing local migrations; no local atomic RPC definition was found. This is not evidence of production's current definition or permissions.
- `src/pages/PaymentInformation.tsx`, `QuickPay.tsx`, current auth/session helper and `src/lib/supabaseClient.ts`, `src/lib/bookingItems.ts`, cart total arithmetic, checkout call-site search, existing tests and test configuration.
- Approved v6 complete pack, review archive, v6.1 clarification report and uploaded implementation instructions.
- Project architecture rules and roadmap.

## Changed or added files

| File | Result |
|---|---|
| `supabase/functions/create-order/index.ts` | Verified authenticated non-anonymous owner; validated items, amount, supported currency and reference; server-generated fingerprint and ownership notes; sanitized order response and safe logs. |
| `supabase/functions/save-booking/index.ts` | Required session, signature, IDs and reference; HMAC signature verification plus separate Razorpay payment/order API reads; captured/paid/amount/currency/owner/hash/strict age validation; RPC-only writes; no fallback inserts or compensating deletion; nonfatal confirmation and item readback. |
| `supabase/functions/_shared/bookingValidation.ts` | Request validation for both functions; packages rejected; all items including eSIM require real travel dates. |
| `supabase/functions/_shared/checkoutPricing.ts` | Explicit supported currencies, aggregate rounding, deterministic fingerprint and strict 0–24-hour age boundaries. |
| `src/lib/checkoutPricing.ts` | Byte-identical browser counterpart of the server arithmetic/fingerprint helper. |
| `src/lib/checkoutRequests.ts` | Existing production client's current session; per-checkout detached snapshot; checkout preparation, authenticated function calls and exact save payload including signature. No tokens stored in snapshots. |
| `src/pages/PaymentInformation.tsx` | Active cart caller uses the coordinated contract; missing dates rejected before order creation; sign-in redirect; no success/cart clearing on failed booking save. |
| `src/pages/QuickPay.tsx` | Active manual INR caller uses the same session and snapshot contract; no guest payment; no purchase/success/data clearing on failed save; processing guard retained through callback. |
| `docs/booking-fix/create_booking_with_items-v6-review.sql` | Unexecuted review script, intentionally outside automatic migrations. Explicit columns, UUID/timestamps, required owner/name/email/date checks and payment advisory-lock retry protection. |
| `supabase/functions/save-booking/checkout_test.ts` | 29 offline backend scenarios with mocked auth, Razorpay, RPC, readback and confirmation. |
| `src/test/checkout-contract.test.ts` | 10 helper/session/snapshot/pricing/date/package/age tests. |
| `src/test/checkout-callers.test.tsx` | Six active cart/Quick Pay integration tests: signed-out redirect, authenticated snapshot success and save failure. |
| `AGENTS.md`, `roadmap.md`, this report | Contract architecture, task status and release limitations. |

The SQL is byte-for-byte the unchanged approved v2/v6 dependency, SHA-256 `d55f8fb8693717c3ee66b9d7b9f8e99cbc7d014eb89c2e39406b8a8daab8bed7`. It returns the full parent row; save-booking reads associated items separately. It contains no grants/revokes or added index. CREATE OR REPLACE retains existing permissions **only if the function already exists with the verified safe ACL**. Creating a missing function can acquire unsafe default execution privileges; do not execute this script without verifying that prerequisite. No permissions were inspected live or changed.

## Verification performed

- `bun x deno check --no-lock supabase/functions/create-order/index.ts supabase/functions/save-booking/index.ts`: passed.
- `bun x deno test --no-lock --allow-env supabase/functions/save-booking/checkout_test.ts`: **29 passed, 0 failed**, without network permission. All fetches intercepted; synthetic credentials restored after tests. These are not real Razorpay payments or PostgreSQL transactions.
- `bun x vitest run`: **48 passed across 8 files**, including existing regression tests, 10 checkout-helper tests and six mounted active-caller tests. Calls, sessions, Razorpay popup and analytics mocked; no live service invoked.
- Harness preview build/type checking: latest available `build-errors.log` reports **build OK**. No separate manual Vite/prebuild/prerender build or standalone frontend type-check was run because the harness owns these checks.
- Browser/server pricing modules byte-identical; SQL hash matches approval.
- Both checkout JSX layout blocks byte-identical to the pre-repair baseline. Existing customer-facing JSX wording preserved; no banners, UI notifications or new toast wording added to callers. Backend validation errors can still appear through the existing cart error display.
- Confirmation/templates, public verify-payment, packages enquiry page, auth provider setup and production auth client unchanged.
- Static inspection: no `.insert()`, `.delete()` or full request-body logging in save-booking. Only the transactional RPC writes bookings.
- `git diff --check`: passed.

## Contract and dependency checks

Order: current signed-in token + `amount` (minor units), explicit settlement currency, UUID checkout reference and full validated items. The server calculates the snapshot hash and writes `user_id`, `checkout_ref`, `checkout_hash`, `checkout_version=6` into Razorpay order notes. Response supplies exact ID/amount/currency/reference; both active callers compare those against their snapshot before opening checkout.

Save: fresh session token + exact originating order ID, payment ID, signature, checkout reference, retained items and parent/contact fields. Client does not supply trusted user ownership. Server verifies HMAC over `order_id|payment_id`, independently reads the payment and order, requires captured payment and fully paid order with exact amounts/currencies, checks ownership/hash/reference/version, then allows only orders created no later than now and at most 86,400 seconds ago. Failed/missing RPC returns an error without alternate writes. Successful confirmation failures do not delete or reverse committed records.

Every Edge Function local import is within `_shared`, not `src` or another function's directory. Both deployment bundles require `bookingValidation.ts` and `checkoutPricing.ts`. Runtime imports are SDK `npm:@supabase/supabase-js@2`, SDK CORS and `npm:zod@3.25.76`; local Deno resolution succeeds, hosted bundle/runtime remains unverified. Existing `verify-payment` endpoint remains in the browser flow; save-booking no longer relies on it as its security boundary.

## Remaining limitations and release gates

1. **Browser pricing is not independently catalogue-verified.** Existing total = sum(configuration price × cart quantity); stored item.price already extends quantity. No guest/vehicle count multiplier is added and no fee/coupon system introduced. Fingerprinting binds this supplied priced snapshot, not genuine catalogue rates. Quick Pay remains a manually entered INR amount, with its existing UTC preparation date; that convention is not used to invent eSIM travel dates.
2. Production deployed source, function gateway settings, actual schema precision/defaults/triggers and effective RPC permissions remain unverified. Reuse prior inspection outputs; fill gaps only with separately approved read access. Do not contact the excluded managed project or use its sessions for production tests.
3. Atomic SQL must be separately reviewed and explicitly authorized for execution against the intended production target. Existing effective service-role-only execution must be evidenced, including denial through PUBLIC/inherited privileges. No permission workaround implemented.
4. No real authenticated browser/payment/database end-to-end test, hosted CORS/dependency test, database atomic rollback/concurrency test, merchant currency eligibility check or inbox/voucher delivery test occurred. These require an approved isolated production-equivalent environment and new test records/payments, not historical data.
5. Release requires separately approved payment pause/in-flight checkout drain, verified rollback exports, coordinated SQL/functions/frontend rollout and stale-tab handling. Legacy orders without owner/hash notes cannot be accepted; no bypass, notes backfill or historical reconciliation added. Existing auth success still returns to homepage; automatic return to interrupted checkout and Quick Pay field restoration are not added under the no-new-UX scope.
6. `BookingModal.tsx` has no active repository consumer and is not changed. If a fresh deployed-source comparison establishes an active caller, it must be integrated before release. Packages remain enquiry-only; backend checkout rejects explicit package items.
7. No new secrets, credentials or manual provider configuration is introduced. Existing required environment names must be present on the intended deployment target; inspect presence only, never values. Function gateway/JWT settings and SDK resolved version need release verification, not silent changes here.

## Rollback, subject to separate approval

Keep new payments paused. Restore a verified compatible frontend plus both function bundles/shared versions together; never mix legacy order creation with hardened saving. Prefer retaining corrected atomic SQL for frontend/function problems. Restoring the original defective SQL does not make the release safe. Leave committed bookings, captured payments, historical records, credentials and refunds untouched. Reopen only after approved acceptance testing demonstrates a working compatible release.