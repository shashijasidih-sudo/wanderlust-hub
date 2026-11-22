# Individual admin cancellation email — review only

## Production comparison status

The actual deployed production `send-confirmation` source is unavailable in this sandbox. The available backend tools target the excluded Lovable Cloud instance, and there are no linked provider connections. The uploaded `index.ts` is `save-booking`, not `send-confirmation`. **No deployed-source comparison has been completed; this is an exact proposed addition against the repository source, not a verified production patch.** Upload the current production function and its local imports without credentials before approving an executable patch.

No Edge Function has been edited or deployed. No SQL, grants, policies, secrets, payments or emails were changed or sent. Individual admin cancellation intentionally sends no email in this frontend release rather than invoking the existing whole-booking cancellation template. Historical cancellation and Refund retain their existing handlers and notifications.

## Current repository behaviour

`supabase/functions/send-confirmation/index.ts` accepts `{ bookingId, paymentId, orderId, type }`. Its cancellation branch says “Your booking has been cancelled”, regardless of individual item status. Support receives the existing new-booking HTML even for cancellation. Neither is suitable for partial cancellation. The repository handler also does not validate caller identity; a new item-specific branch must validate its authenticated admin caller rather than inherit that omission.

## Exact proposed request addition

Retain all existing request fields and add optional `bookingItemId` for `type: "cancellation"` only:

```json
{ "bookingId": "<existing-parent-uuid>", "bookingItemId": "<selected-item-uuid>", "type": "cancellation" }
```

The UI must not send this request until the approved function has been deployed and verified. Do not automatically retry old cancellations or send historical notifications.

## Exact proposed function additions (not applied)

1. Add `id?: string`, `booking_id?: string`, and `status?: string | null` to `BookingItemRow`.
2. Include `bookingItemId` in request destructuring.
3. Immediately after constructing the server client, before booking lookup, insert the following new-branch validation. Existing confirmation/refund/legacy-cancellation paths remain as deployed after source comparison.

```typescript
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const hasItemId = bookingItemId !== undefined;
const itemCancellation = hasItemId && emailType === "cancellation";
const respond = (status: number, error: string) =>
  new Response(JSON.stringify({ success: false, error }), { status, headers: corsHeaders });

if (hasItemId && (!itemCancellation || typeof bookingId !== "string" ||
    !uuid.test(bookingId) || typeof bookingItemId !== "string" || !uuid.test(bookingItemId))) {
  return respond(400, "bookingItemId requires cancellation and valid booking/item IDs");
}
if (itemCancellation) {
  const authorization = req.headers.get("Authorization") || "";
  if (!authorization.startsWith("Bearer ")) return respond(401, "Sign in required");
  const url = Deno.env.get("SUPABASE_URL");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!url || !anonKey) return respond(500, "Authentication unavailable");
  const caller = createClient(url, anonKey, {
    global: { headers: { Authorization: authorization } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: identity, error: authError } = await caller.auth.getUser(authorization.slice(7));
  if (authError || !identity.user) return respond(401, "Sign in required");
  const { data: admin, error: adminError } = await caller.rpc("is_admin", {
    _user_id: identity.user.id,
  });
  if (adminError || admin !== true) return respond(403, "Admin access required");
}
```

The `_user_id` parameter above follows the user's supplied production definition, not the separate Cloud definition. Its existing effective execution permission must be checked read-only against the production export; do not change the function or grants. If it is not callable, return 403 and propose the minimum alternative before release.

4. Immediately after the saved `booking_items` query, **before** its legacy fallback, insert this early-return branch. No client-supplied item title or remaining-status statement is trusted. This branch performs no record writes.

For this new branch, also replace the one-page item read with an ordered, paginated read (500 rows per request until a shorter page is returned), failing closed on any error. Keep the original query unchanged for other email types; use the complete paginated array as `itemRows` below. This prevents API row limits from hiding active items when calculating `allCancelled`.

```typescript
if (itemCancellation) {
  if (itemsError) return respond(500, "Could not verify saved booking items");
  const savedItems = (itemRows || []) as BookingItemRow[];
  const cancelled = savedItems.find(item => item.id === bookingItemId && item.booking_id === bookingId);
  if (!cancelled) return respond(404, "Booked item not found");
  if (cancelled.status !== "cancelled") return respond(409, "Item is not cancelled");
  if (savedItems.some(item => item.booking_id !== bookingId || !item.status)) {
    return respond(409, "Could not verify remaining item statuses");
  }
  const others = savedItems.filter(item => item.id !== cancelled.id);
  const active = others.filter(item => ["pending", "confirmed"].includes(String(item.status)));
  const allCancelled = savedItems.every(item => item.status === "cancelled");
  const kind = /transfer|airport/i.test(`${cancelled.product_type || ""} ${cancelled.activity_name || ""}`)
    ? "Transfer" : "Activity";
  const exactName = cancelled.activity_name?.trim();
  if (!exactName) return respond(409, "Cancelled item name unavailable");
  const remainingStatement = active.length
    ? `${active.length} other item(s) remain active. Their saved statuses are listed below.`
    : allCancelled
      ? "All booked items are now cancelled. No other items remain active."
      : "No other items are currently pending or confirmed. Their saved statuses are listed below.";
  const remainingHtml = others.length ? `<ul>${others.map(item =>
    `<li>${esc(item.activity_name || "Booked item")}: ${esc(item.status)}</li>`).join("")}</ul>` : "";
  const inner = `<tr><td style="padding:32px;">
    <h1>${kind} cancelled</h1>
    <p>Hi ${esc(name)}, your ${kind.toLowerCase()} <strong>${esc(exactName)}</strong>
    for ${esc(fmtDate(cancelled.travel_date))} has been cancelled.</p>
    <p>Booking ID: ${esc(bookingShort)}</p>
    ${renderItemCard(cancelled, 0, 1, booking.currency || "INR")}
    <p>${esc(remainingStatement)}</p>${remainingHtml}
    <p>Any eligible refund is handled separately. This cancellation does not initiate a refund.</p>
  </td></tr>`;
  const subjectName = exactName.replace(/[\r\n]+/g, " ");
  const subject = `${kind} Cancelled · ${subjectName} · Yellodae`;
  const body = shell(inner, `${kind} cancelled: ${exactName}. ${remainingStatement}`);
  try {
    await smtpSend(recipientEmail, subject, body);
  } catch {
    return respond(502, "Item cancelled; cancellation email delivery failed");
  }
  let supportSent = true;
  try {
    await smtpSend("support@yellodae.com", subject, body, recipientEmail);
  } catch {
    supportSent = false;
  }
  return new Response(JSON.stringify({ success: true, type: "cancellation", bookingItemId,
    customerSent: true, supportSent }), { status: 200, headers: corsHeaders });
}
```

`allCancelled` describes the items, not an unverified parent update. Partial cancellations never use a whole-booking-cancelled subject, heading or statement. Existing Hostinger transport, branding, recipients and confirmation/refund templates stay untouched. No credentials or request bodies are logged by the proposed branch.

## Required review and tests before any release

- Compare a freshly exported deployed function and local imports; adapt these insertion points and preserve production authentication/service invocation details.
- Check production `is_admin(_user_id uuid)` callable permissions without changing them.
- Tests: exact selected activity/transfer; remaining active item and saved status; final cancelled item; other completed/refunded items; foreign item ID; non-cancelled item; malformed IDs; signed-out/non-admin; failed item query; missing name; customer/support SMTP failure.
- Verify existing confirmation, refund and historical cancellation requests behave unchanged.
- No real send, deployment, credential change or historical-email retry without separate approval.

## Frontend verification and limitations

The UI helper writes only `status` on the selected item using both item and booking ID plus the previously read status. It verifies a returned row, re-reads saved statuses, and changes the parent only if every saved item is cancelled. The parent update is also conditioned on its previously read status. Any failure refreshes the list and open modal and reports partial success separately. No automatic refund or email is invoked.

These are existing separate Data API requests, not a new atomic transaction. The single-item write is isolated, but simultaneous cross-client status changes between the item-list read and parent update cannot be made fully atomic from frontend alone. An absolute multi-administrator transactional guarantee would require a separately approved production RPC; none is added here. Live authenticated production cancellation will not be exercised because modifying production records is not approved.