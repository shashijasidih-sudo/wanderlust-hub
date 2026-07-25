# Multi-Item Booking Architecture

Redesign bookings so one `bookings` row can contain up to 10 heterogeneous `booking_items` (activities, transfers, eSIMs, tickets, packages), each with its own pickup/customer fields, while keeping Razorpay, email, refund, cancellation, auth, and booking numbers untouched.

## Scope guardrails (unchanged)
- `supabase/functions/create-order`, `verify-payment`, `send-confirmation`, `send-email`, `refund-payment`
- `bookings` id/booking_number generation trigger
- Razorpay client flow, auth (`useAuth`), currency context
- Existing single-item bookings must keep rendering (fallback path)

## 1. Database (migration)

New table `public.booking_items`:

```
id uuid pk
booking_id uuid fk -> bookings(id) on delete cascade
product_id text
product_type text            -- 'activity' | 'transfer' | 'esim' | 'ticket' | 'package'
activity_name text
activity_slug text
image_url text
destination text
travel_date date
quantity int default 1
adults int default 1
children int default 0
price numeric
currency text
status text default 'confirmed'
pickup_required boolean default false
pickup_type text             -- 'airport' | 'hotel' | 'meeting_point' | null
hotel_name text
pickup_location text
country text
meeting_point text
pickup_time text
drop_location text
flight_number text
airline text
terminal text
special_requests text
voucher_number text
voucher_url text
supplier_reference text
item_details jsonb           -- catch-all for future fields
created_at, updated_at timestamptz
```

RLS: owner via `bookings.user_id = auth.uid()`; admin via `has_role`; service_role full.
GRANTs: SELECT/INSERT/UPDATE/DELETE to authenticated; ALL to service_role.
Index on `booking_id`, `travel_date`.
Trigger for `updated_at`.

`bookings` table stays as-is — no destructive changes. `item_details` JSON on bookings continues to work as the legacy fallback.

## 2. Cart → checkout → save

- Extend `CartItem` with `productType`, `pickupRequired`, and per-type pickup fields (already partly present).
- Checkout form becomes product-aware: renders per-item field group by `productType` (airport transfer / hotel transfer / tour / theme park / eSIM / package). Reuse existing form primitives.
- `save-booking` edge function: after inserting the parent `bookings` row, insert one `booking_items` row per cart item using the merged pickup/customer fields. Wrapped in a single transaction via `rpc` or sequential inserts with rollback on failure. Enforce max 10 items server-side.
- Legacy single-item callers keep working: if payload has no `items[]`, insert a single derived `booking_items` row from top-level fields.

## 3. My Booking page

Redesign `src/pages/MyBookings.tsx` (or equivalent):

- Hero: booking number, status chip, payment status, total, currency, created date.
- Timeline: Confirmed → Voucher Sent → Upcoming → Completed (derived from status + travel_date).
- One card per `booking_items` row:
  - Image (from activity data via slug lookup), destination, tour name, date, guests
  - Pickup block ONLY if `pickup_required = true`; fields shown depend on `pickup_type`
  - Voucher download button (per item)
  - Contact Support / Manage Booking actions
- Collapsible when >3 items.
- Fallback: if a booking has zero `booking_items`, render from legacy `bookings` columns as today.
- Responsive; keep dark-sea-green + orange primary CTAs.

## 4. Admin Dashboard

Update `AdminDashboard` + `ViewBookingModal`:

- List row shows item count + destinations summary.
- Detail modal renders each `booking_items` row independently, grouped by type, showing pickup/flight/hotel/voucher fields relevant to that type.
- Empty pickup sections hidden.

## 5. Vouchers

- Add `voucher_url` per item; "Download Voucher" button per card.
- Booking-level voucher stays as fallback.

## 6. Images

Add `getActivityImage(slug)` helper reading from existing `toursData` / transfer data maps; used by both customer and admin cards.

## Technical notes

- New file: `supabase/migrations/*_booking_items.sql`
- Edit: `supabase/functions/save-booking/index.ts` (multi-insert loop, no logic change to email trigger)
- New: `src/components/booking/BookingItemCard.tsx`, `PickupBlock.tsx`, `BookingTimeline.tsx`
- Edit: `src/pages/MyBookings.tsx`, `src/pages/AdminDashboard.tsx`, `src/components/ViewBookingModal.tsx`
- Edit: `src/contexts/CartContext.tsx` + `src/services/cart.ts` to persist `productType` and pickup fields
- Edit: checkout page — dynamic per-item field groups
- Types regenerated automatically after migration approval

## Rollout order

1. Migration (booking_items + RLS + grants)
2. `save-booking` writes items (parent write unchanged)
3. My Booking redesign with legacy fallback
4. Admin view update
5. Dynamic checkout forms
6. Voucher per-item wiring

## Out of scope
Payments, emails, refund/cancel logic, auth, booking number trigger, SMTP.

Approve to proceed with step 1 (migration).
