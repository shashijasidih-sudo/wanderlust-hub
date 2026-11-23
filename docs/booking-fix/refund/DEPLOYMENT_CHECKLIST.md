# Refund release checklist (Razorpay TEST mode, production project cymzgmfnhtnqledwwojt)

Order matters: database → refund-payment + send-confirmation → Admin Panel. Each step needs separate approval.

## 0. Before anything
- [ ] Confirm the Razorpay keys on production are `rzp_test_…` (look at the prefix only; never share the secret).
- [ ] Export `bookings` and `booking_items` as a backup.
- [ ] Run `verify_readonly.sql` part A. A1 returns both functions. A2 shows no existing `booking_refunds` / `refund_status`. A3 on the test booking: payment_id `pay_…` is present and `total_minor = items_minor`.

## 1. Database (approval 1)
- [ ] Run `001_item_refunds.sql` once in the production SQL editor.
- [ ] Run `verify_readonly.sql` part B. B1: anon/authenticated = false on all six functions, service_role = true. B2: authenticated has SELECT only. B3: booking/booking_items policies identical to the pre-migration output.

## 2. Server functions (approval 2)
- [ ] Deploy `refund-payment` (folder: index.ts, refund_logic.ts).
- [ ] Deploy `send-confirmation` (folder: index.ts, item_cancellation.ts, refund_email.ts). It's built on the downloaded production file.
- [ ] Smoke test with no refund: send a confirmation email for an existing test booking (no refundId) and confirm it arrives unchanged.
- [ ] Call `send-confirmation` with a `refundId` and a normal user token. Expect 403.

## 3. Admin Panel (approval 3) – publish the frontend

## 4. Razorpay Test Mode verification (test booking only)
- [ ] Item refund of the activity: Razorpay dashboard shows one refund with receipt `yl-i-…`. Ledger row is processed. Transfer stays `confirmed` / refund `none`. Booking refund_status is `partial`. Customer + support emails arrive and name only the activity.
- [ ] Click Refund again on the same item: the button is hidden. A direct API call is refused with "already refunded".
- [ ] Refund the remaining balance: the amount equals the transfer price. Booking becomes `refunded` / `full`.
- [ ] Email retry: temporarily use a wrong SMTP password on a **test** copy only, or simulate. Email shows `failed`, then "Retry refund email" sends exactly once.
- [ ] Receipt checks (H4): a rejected refund, then the same receipt reused; a 40- vs 41-character receipt. Record the results in the design document.

## Rollback
- Admin Panel: republish the previous version.
- Functions: redeploy the previous refund-payment (git `HEAD~` copy) and the production send-confirmation file you downloaded.
- Database: export `booking_refunds`, then run `rollback.sql`.
