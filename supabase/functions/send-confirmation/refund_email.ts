// Ledger-based refund emails for send-confirmation. Pure helpers only (no SMTP, no database).

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type RefundRequestCheck = { ok: true; refundId: string | null } | { ok: false; error: string };

/** refundId absent -> existing refund/confirmation/cancellation behaviour. Present -> UUID and type "refund" only. */
export function checkRefundRequest(type: unknown, refundId: unknown, itemId: unknown): RefundRequestCheck {
  if (refundId === undefined || refundId === null) return { ok: true, refundId: null };
  if (typeof refundId !== "string" || !UUID_RE.test(refundId.trim())) return { ok: false, error: "Invalid refundId" };
  if (type !== "refund") return { ok: false, error: "refundId is only supported for refund emails" };
  if (itemId !== undefined && itemId !== null) return { ok: false, error: "refundId cannot be combined with itemId" };
  return { ok: true, refundId: refundId.trim().toLowerCase() };
}

/** Constant-time comparison of the caller's bearer token with the service key. */
export function isServiceCaller(authHeader: string | null, serviceKey: string | undefined): boolean {
  if (!authHeader || !serviceKey || !authHeader.startsWith("Bearer ")) return false;
  const a = new TextEncoder().encode(authHeader.slice(7));
  const b = new TextEncoder().encode(serviceKey);
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

export interface RefundRow {
  id: string; booking_id: string; booking_item_id: string | null; scope: "item" | "full";
  amount_minor: number; currency: string; razorpay_refund_id: string | null; status: string;
}
export interface RefundItem { id?: string | null; activity_name?: string | null; product_type?: string | null; travel_date?: string | null; status?: string | null; refund_status?: string | null }

const esc = (v: unknown) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
const isTransfer = (t?: string | null) => /transfer/i.test(t || "");
export function formatMinor(minor: number, currency: string): string {
  const cur = (currency || "INR").toUpperCase();
  const value = Number(minor) / 100;
  try { return new Intl.NumberFormat("en-IN", { style: "currency", currency: cur, minimumFractionDigits: 2 }).format(value); }
  catch { return `${cur} ${value.toFixed(2)}`; }
}

/** Validates a refund row before emailing. Everything shown comes from this row, never from the request. */
export function validateRefundForEmail(row: RefundRow | null, bookingId: string, items: RefundItem[]): { ok: true; item: RefundItem | null } | { ok: false; status: number; error: string } {
  if (!row || String(row.booking_id).toLowerCase() !== String(bookingId).toLowerCase()) return { ok: false, status: 404, error: "Refund not found for this booking" };
  if (row.status !== "processed" || !row.razorpay_refund_id) return { ok: false, status: 409, error: "Refund is not processed" };
  if (row.scope === "item") {
    const item = items.find((i) => String(i.id || "").toLowerCase() === String(row.booking_item_id || "").toLowerCase());
    if (!item) return { ok: false, status: 404, error: "Refunded item not found in this booking" };
    return { ok: true, item };
  }
  return { ok: true, item: null };
}

export function buildRefundEmails(p: { row: RefundRow; item: RefundItem | null; items: RefundItem[]; name: string; bookingRef: string; bookingId: string; tourTitle: string }) {
  const amount = formatMinor(p.row.amount_minor, p.row.currency);
  const kind = p.item ? (isTransfer(p.item.product_type) ? "transfer" : "activity") : null;
  const itemName = p.item?.activity_name || (kind === "transfer" ? "Transfer" : "Activity");
  const others = p.item ? p.items.filter((i) => i.id !== p.item!.id && i.refund_status !== "refunded" && String(i.status || "").toLowerCase() !== "cancelled") : [];
  const subject = p.item ? `Refund initiated for your ${kind}: ${itemName} - Yellodae` : `Refund initiated - ${p.tourTitle} - Yellodae`;
  const intro = p.item
    ? `a refund of <strong>${esc(amount)}</strong> has been initiated for <strong>${esc(itemName)}</strong> only. It typically takes 5–7 business days to reflect in your account.`
    : `a refund of <strong>${esc(amount)}</strong> for <strong>${esc(p.tourTitle)}</strong> has been initiated to your original payment method. It typically takes 5–7 business days to reflect in your account.`;
  const othersHtml = p.item
    ? (others.length
        ? `<p style="margin:14px 0 0;font-size:14px;">Your other booked items are not affected and remain active:</p><ul style="margin:6px 0 0;padding-left:18px;font-size:14px;">${others.map((o) => `<li>${esc(o.activity_name || "Booked item")}</li>`).join("")}</ul>`
        : `<p style="margin:14px 0 0;font-size:14px;">No other active items remain in this booking.</p>`)
    : "";
  const inner = `
<tr><td style="padding:36px 32px 8px;text-align:center;">
  <div style="display:inline-block;background:#dcfce7;border-radius:999px;padding:10px 18px;color:#15803d;font-size:12px;font-weight:700;letter-spacing:0.5px;">REFUND INITIATED</div>
  <h1 style="margin:18px 0 6px;font-size:24px;font-weight:800;">Your refund is on its way</h1>
  <p style="margin:0;font-size:15px;line-height:1.6;">Hi ${esc(p.name)}, ${intro}</p>
  ${othersHtml}
  <p style="margin:16px 0 0;font-size:13px;">Booking ID: <span style="font-family:monospace;">${esc(p.bookingRef)}</span> · Razorpay refund: <span style="font-family:monospace;">${esc(p.row.razorpay_refund_id)}</span></p>
</td></tr>
<tr><td style="padding:16px 32px 32px;"><p style="margin:0;font-size:13px;line-height:1.6;">Questions? Email <a href="mailto:support@yellodae.com">support@yellodae.com</a> or WhatsApp <a href="https://wa.me/917061710810">+91 7061710810</a>.</p></td></tr>`;
  const preview = p.item ? `Refund of ${amount} initiated for ${itemName}.` : `Refund of ${amount} initiated for ${p.tourTitle}.`;
  const supportText = [
    "YELLODAE - REFUND NOTIFICATION", "================================",
    `Refund type: ${p.item ? `SINGLE ${kind!.toUpperCase()}` : "FULL / REMAINING BALANCE"}`,
    `Booking ID: ${p.bookingId}`, `Booking reference: ${p.bookingRef}`, `Customer: ${p.name}`,
    `Amount: ${amount}`, `Razorpay refund ID: ${p.row.razorpay_refund_id}`, `Yellodae refund record: ${p.row.id}`,
    ...(p.item ? [`Refunded item: ${itemName} (${p.item.id})`, "Other items still active:", ...(others.length ? others.map((o) => `  - ${o.activity_name || "Booked item"} (${o.id})`) : ["  none"])] : []),
    "", "Yellodae Trails", "support@yellodae.com | +91 7061710810",
  ].join("\n");
  return { subject, inner, preview, supportSubject: `Yellodae refund notification - ${p.bookingRef}`, supportText };
}
