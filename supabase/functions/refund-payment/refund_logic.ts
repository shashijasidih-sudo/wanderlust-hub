// Pure helpers for refund-payment (no network, no database) so they can be unit-tested.

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type RefundRequest =
  | { action: "refund"; bookingId: string; scope: "item" | "full"; itemId: string | null }
  | { action: "retry_email"; refundId: string };

/** Only ids and scope are accepted. Any amount, payment id, requested_by or result in the body is ignored. */
export function parseRefundRequest(body: unknown): { ok: true; value: RefundRequest } | { ok: false; error: string } {
  const b = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const action = b.action ?? "refund";
  if (action === "retry_email") {
    const id = typeof b.refund_id === "string" ? b.refund_id.trim() : "";
    if (!UUID_RE.test(id)) return { ok: false, error: "Invalid refund_id" };
    return { ok: true, value: { action, refundId: id.toLowerCase() } };
  }
  if (action !== "refund") return { ok: false, error: "Invalid action" };
  const bookingId = typeof b.booking_id === "string" ? b.booking_id.trim() : "";
  if (!UUID_RE.test(bookingId)) return { ok: false, error: "Invalid booking_id" };
  const scope = b.scope ?? "full";
  if (scope !== "item" && scope !== "full") return { ok: false, error: "Invalid scope" };
  if (scope === "item") {
    const itemId = typeof b.item_id === "string" ? b.item_id.trim() : "";
    if (!UUID_RE.test(itemId)) return { ok: false, error: "Invalid item_id" };
    return { ok: true, value: { action, bookingId: bookingId.toLowerCase(), scope, itemId: itemId.toLowerCase() } };
  }
  if (b.item_id !== undefined && b.item_id !== null) return { ok: false, error: "item_id is only allowed for item refunds" };
  return { ok: true, value: { action, bookingId: bookingId.toLowerCase(), scope, itemId: null } };
}

/** Same rule as SQL refund_resolve_payment_id: top-level payment_id, else item_details.payment_id. */
export function resolvePaymentId(booking: Record<string, unknown>): string | null {
  const top = typeof booking.payment_id === "string" ? booking.payment_id.trim() : "";
  if (top) return top;
  const d = booking.item_details as Record<string, unknown> | null | undefined;
  const n = d && typeof d === "object" && typeof d.payment_id === "string" ? d.payment_id.trim() : "";
  return n || null;
}

export interface RazorpayRefund { id?: string; amount?: number; currency?: string; payment_id?: string; receipt?: string | null; status?: string }

export type RefundCallOutcome =
  | { kind: "created"; refund: RazorpayRefund }
  | { kind: "rejected"; reason: string }
  | { kind: "duplicate_receipt"; reason: string }
  | { kind: "uncertain"; reason: string };

/** Classifies Razorpay's reply to POST /payments/{id}/refund. Timeouts, 5xx, 429 and 409 are "uncertain". */
export function classifyRefundResponse(status: number | null, data: unknown): RefundCallOutcome {
  const d = (data && typeof data === "object" ? data : {}) as Record<string, any>;
  const desc = String(d?.error?.description || d?.error?.reason || "");
  if (status === null) return { kind: "uncertain", reason: "No response from Razorpay (timeout or network error)" };
  if (status >= 200 && status < 300) {
    if (typeof d.id === "string" && d.id.startsWith("rfnd_")) return { kind: "created", refund: d as RazorpayRefund };
    return { kind: "uncertain", reason: "Razorpay returned success without a refund id" };
  }
  if (status === 409 || status === 429 || status >= 500) return { kind: "uncertain", reason: desc || `Razorpay busy or unavailable (${status})` };
  if (/duplicate receipt/i.test(desc)) return { kind: "duplicate_receipt", reason: desc };
  return { kind: "rejected", reason: desc || `Razorpay rejected the refund (${status})` };
}

/** Finds the Razorpay refund created by one of our attempts (receipt or notes.attempt_id). */
export function findRefundForAttempt(list: unknown, receipt: string, attemptId: string): RazorpayRefund | null {
  const items = Array.isArray((list as any)?.items) ? (list as any).items : [];
  return items.find((r: any) => r?.receipt === receipt || r?.notes?.attempt_id === attemptId) ?? null;
}

/** Razorpay refunds that are not in our processed ledger (by refund id or receipt). Non-empty = admin review. */
export function unrecordedRefunds(list: unknown, ledger: { razorpay_refund_id: string | null; razorpay_receipt: string; status: string }[]): RazorpayRefund[] {
  const items: RazorpayRefund[] = Array.isArray((list as any)?.items) ? (list as any).items : [];
  const ids = new Set(ledger.filter((l) => l.razorpay_refund_id).map((l) => l.razorpay_refund_id));
  const receipts = new Set(ledger.filter((l) => l.status === "processed").map((l) => l.razorpay_receipt));
  return items.filter((r) => r.status !== "failed" && !ids.has(r.id ?? "") && !receipts.has(r.receipt ?? ""));
}

export async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

const DB_ERRORS: Record<string, [number, string]> = {
  refund_in_progress: [409, "Another refund for this booking is in progress. Try again in a minute."],
  already_fully_refunded: [409, "This booking has already been fully refunded."],
  item_already_refunded: [409, "This item has already been refunded."],
  item_not_in_booking: [400, "This item does not belong to the booking."],
  payment_mismatch: [409, "The Razorpay payment does not match this booking."],
  order_mismatch: [409, "The Razorpay order does not match this booking."],
  currency_mismatch: [409, "The payment currency does not match the booking currency."],
  payment_not_captured: [409, "The Razorpay payment is not captured, so it cannot be refunded."],
  total_vs_captured_mismatch: [409, "The booking total does not match the amount Razorpay captured. Review required."],
  items_vs_captured_mismatch: [409, "The item prices do not add up to the captured amount, so single-item refunds are blocked. Review required."],
  gateway_ledger_mismatch: [409, "Razorpay's refunded total does not match Yellodae's records. Review required."],
  exceeds_remaining: [409, "Nothing left to refund, or the amount exceeds the remaining balance."],
  too_many_attempts: [409, "Too many failed attempts for this refund. Review required."],
  requester_not_admin: [403, "Forbidden"],
  booking_not_found: [404, "Booking not found."],
};
export function mapDbError(message: string | undefined): { status: number; error: string } {
  const key = Object.keys(DB_ERRORS).find((k) => (message || "").includes(k));
  if (!key) return { status: 500, error: "Refund could not be recorded." };
  const [status, error] = DB_ERRORS[key];
  return { status, error };
}
