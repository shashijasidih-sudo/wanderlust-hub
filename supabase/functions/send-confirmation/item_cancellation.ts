// Item-level cancellation email support for send-confirmation.
// Pure helpers only (no SMTP, no database) so they can be unit-tested.

export interface CancellableItem {
  id?: string | null;
  booking_id?: string | null;
  activity_name?: string | null;
  product_type?: string | null;
  travel_date?: string | null;
  adults?: number | null;
  children?: number | null;
  quantity?: number | null;
  price?: number | null;
  currency?: string | null;
  status?: string | null;
  pickup_location?: string | null;
  drop_location?: string | null;
  pickup_time?: string | null;
  flight_number?: string | null;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type ItemRequestCheck =
  | { ok: true; itemId: string | null }
  | { ok: false; error: string };

/**
 * itemId absent -> existing whole-booking behaviour (itemId: null).
 * itemId present -> must be a UUID and only allowed with type "cancellation".
 */
export function checkItemRequest(type: unknown, itemId: unknown): ItemRequestCheck {
  if (itemId === undefined || itemId === null) return { ok: true, itemId: null };
  if (typeof itemId !== "string" || !UUID_RE.test(itemId.trim())) {
    return { ok: false, error: "Invalid itemId" };
  }
  if (type !== "cancellation") {
    return { ok: false, error: "itemId is only supported for cancellation emails" };
  }
  return { ok: true, itemId: itemId.trim().toLowerCase() };
}

export function itemKind(productType?: string | null): "Activity" | "Transfer" {
  return /transfer/i.test(productType || "") ? "Transfer" : "Activity";
}

export function isCancelled(item: CancellableItem): boolean {
  return String(item.status || "").toLowerCase() === "cancelled";
}

function esc(v: unknown): string {
  return String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export interface ItemEmailInput {
  name: string;
  recipientEmail: string;
  customerPhone: string;
  bookingId: string;
  bookingShort: string;
  item: CancellableItem;
  allItems: CancellableItem[];
  formatDate: (d?: string | null) => string;
  formatMoney: (amount: number, curr: string) => string;
  fallbackCurrency: string;
  viewUrl: string;
  brand: { ink: string; muted: string; surface: string; primaryDark: string; border: string; success: string };
}

export interface ItemEmailOutput {
  kind: "Activity" | "Transfer";
  remaining: CancellableItem[];
  customerSubject: string;
  customerInner: string;
  previewText: string;
  supportSubject: string;
  supportText: string;
}

export function buildItemCancellationEmail(p: ItemEmailInput): ItemEmailOutput {
  const kind = itemKind(p.item.product_type);
  const itemName = p.item.activity_name || `Booked ${kind.toLowerCase()}`;
  const date = p.formatDate(p.item.travel_date);
  const price = p.formatMoney(Number(p.item.price || 0), p.item.currency || p.fallbackCurrency || "INR");
  const remaining = p.allItems.filter((it) => it.id !== p.item.id && !isCancelled(it));
  const b = p.brand;

  const remainingHtml = remaining.length
    ? `<p style="margin:0 0 8px;color:${b.ink};font-size:14px;font-weight:700;">Still active in this booking</p>
<ul style="margin:0;padding-left:18px;color:${b.ink};font-size:13px;line-height:1.7;">${remaining
        .map((it) => `<li>${esc(it.activity_name || itemKind(it.product_type))} (${itemKind(it.product_type)}, ${esc(p.formatDate(it.travel_date))})</li>`)
        .join("")}</ul>
<p style="margin:10px 0 0;color:${b.muted};font-size:13px;line-height:1.6;">These items are not affected and remain confirmed.</p>`
    : `<p style="margin:0;color:${b.muted};font-size:13px;line-height:1.6;">No other active items remain in this booking.</p>`;

  const customerInner = `
<tr><td style="padding:36px 32px 8px;text-align:center;">
  <div style="display:inline-block;background:#fee2e2;border-radius:999px;padding:10px 18px;color:#b91c1c;font-size:12px;font-weight:700;letter-spacing:0.5px;">${kind.toUpperCase()} CANCELLED</div>
  <h1 style="color:${b.ink};margin:18px 0 6px;font-size:24px;font-weight:800;">One ${kind.toLowerCase()} in your booking has been cancelled</h1>
  <p style="color:${b.muted};margin:0;font-size:15px;line-height:1.6;">Hi ${esc(p.name)}, the ${kind.toLowerCase()} <strong>${esc(itemName)}</strong> (${esc(date)}) has been cancelled. If a payment was made for it, any eligible refund will be processed separately and you'll receive a confirmation once it's initiated.</p>
  <p style="color:${b.muted};margin:16px 0 0;font-size:13px;">Booking ID: <span style="font-family:monospace;">${esc(p.bookingShort)}</span> · ${kind} price: ${esc(price)}</p>
</td></tr>
<tr><td style="padding:16px 32px 8px;">
  <div style="background:${b.surface};border:1px solid ${b.border};border-radius:10px;padding:18px 20px;">${remainingHtml}</div>
</td></tr>
<tr><td style="padding:12px 32px 32px;">
  <p style="margin:0;color:${b.muted};font-size:13px;line-height:1.6;">View your booking at <a href="${p.viewUrl}" style="color:${b.primaryDark};">yellodae.com</a>. Questions? Email <a href="mailto:support@yellodae.com" style="color:${b.primaryDark};">support@yellodae.com</a> or WhatsApp <a href="https://wa.me/917061710810" style="color:${b.primaryDark};">+91 7061710810</a>.</p>
</td></tr>`;

  const supportText = [
    "YELLODAE - BOOKING NOTIFICATION",
    "================================",
    `Notification type: ${kind.toUpperCase()} CANCELLED (single item - booking NOT fully cancelled unless stated below)`,
    "",
    "CUSTOMER",
    `Name: ${p.name}`,
    `Email: ${p.recipientEmail}`,
    `Phone: ${p.customerPhone || "Not provided"}`,
    "",
    "BOOKING",
    `Booking ID: ${p.bookingId}`,
    `Booking reference: ${p.bookingShort}`,
    "",
    "CANCELLED ITEM",
    `Item ID: ${p.item.id}`,
    `Name: ${itemName}`,
    `Type: ${kind}`,
    `Travel date: ${date}`,
    `Adults: ${Number(p.item.adults ?? 0)} | Children: ${Number(p.item.children ?? 0)} | Quantity: ${Number(p.item.quantity ?? 1)}`,
    `Price: ${price}`,
    ...(p.item.pickup_location ? [`Pickup location: ${p.item.pickup_location}`] : []),
    ...(p.item.drop_location ? [`Drop location: ${p.item.drop_location}`] : []),
    ...(p.item.pickup_time ? [`Pickup time: ${p.item.pickup_time}`] : []),
    ...(p.item.flight_number ? [`Flight number: ${p.item.flight_number}`] : []),
    "",
    `REMAINING ACTIVE ITEMS (${remaining.length})`,
    ...(remaining.length
      ? remaining.map((it, i) => `${i + 1}. ${it.activity_name || itemKind(it.product_type)} (${itemKind(it.product_type)}, ${p.formatDate(it.travel_date)}) - ID ${it.id}`)
      : ["None - all items in this booking are now cancelled."]),
    "",
    `Open bookings: ${p.viewUrl}`,
    "",
    "Yellodae Trails",
    "support@yellodae.com | +91 7061710810",
  ].join("\n");

  return {
    kind,
    remaining,
    customerSubject: `${kind} cancelled - ${itemName} - Yellodae`,
    customerInner,
    previewText: `Your ${kind.toLowerCase()} ${itemName} has been cancelled. Other items remain active.`,
    supportSubject: `Yellodae ${kind.toLowerCase()} cancellation - ${p.bookingShort}`,
    supportText,
  };
}
