// Pure helpers for the admin Refund button and admin function-call errors.

/** Payment ID: legacy top-level field first, then item_details.payment_id (where bookings save it). */
export function getRefundPaymentId(booking: { payment_id?: string | null; item_details?: unknown }): string | null {
  const top = typeof booking.payment_id === "string" ? booking.payment_id.trim() : "";
  if (top) return top;
  const details = booking.item_details;
  const nested = details && typeof details === "object" ? (details as Record<string, unknown>).payment_id : undefined;
  return typeof nested === "string" && nested.trim() ? nested.trim() : null;
}

/** Mirrors refund-payment's rupees-to-paise conversion (Math.round(amount * 100)). */
export function rupeesToPaise(amount: number): number {
  return Math.round(amount * 100);
}

/** Reads the server's actual error message from a failed functions.invoke error. */
export async function readFunctionErrorMessage(error: any): Promise<string> {
  const fallback = (error && error.message) || "Request failed";
  const response = error?.context;
  if (!response || typeof response.clone !== "function") return fallback;
  try {
    const text = await response.clone().text();
    if (!text) return fallback;
    try {
      const parsed = JSON.parse(text);
      const msg = parsed?.error ?? parsed?.message ?? parsed?.details;
      if (typeof msg === "string" && msg) return msg;
      if (msg && typeof msg === "object") return msg.description || msg.message || JSON.stringify(msg);
      return fallback;
    } catch {
      return text.slice(0, 300);
    }
  } catch {
    return fallback;
  }
}

// ---- Ledger-based refunds (refund-payment v2) ----
export interface RefundableItem {
  id: string;
  status?: string | null;
  refund_status?: string | null;
}

export interface RefundableBooking {
  id: string;
  status?: string | null;
  /** Aggregate refund state. The approved migration saves it as bookings.refund_status
   *  ('none' | 'partial' | 'full'); refund_state is accepted for older payloads. */
  refund_state?: string | null;
  refund_status?: string | null;
  booking_items?: RefundableItem[];
}

export interface RefundLedgerRow {
  id: string;
  booking_item_id: string | null;
  scope: string;
  status: string;
  amount_minor: number;
  currency: string;
  email_status: string;
  email_last_error?: string | null;
}

const REFUNDABLE_BOOKING = ["confirmed", "completed", "cancelled"];

/** True once the booking itself is marked fully refunded, under either field name. */
function isFullyRefunded(booking: RefundableBooking): boolean {
  return booking.refund_state === "full" || booking.refund_status === "full";
}

/** Item refund button: eligible booking, item not already refunded or in progress, no open refund on the booking. */
export function canRefundItem(item: RefundableItem, booking: RefundableBooking, ledger: RefundLedgerRow[] = []): boolean {
  if (!REFUNDABLE_BOOKING.includes(String(booking.status || ""))) return false;
  if (isFullyRefunded(booking)) return false;
  if (item.refund_status === "refunded" || item.refund_status === "pending") return false;
  if (ledger.some((r) => r.status === "pending" || r.status === "review")) return false;
  return !ledger.some((r) => r.booking_item_id === item.id && r.status === "processed");
}

/** Full (or remaining-balance) refund button. */
export function canFullRefund(booking: RefundableBooking, ledger: RefundLedgerRow[] = []): boolean {
  if (!REFUNDABLE_BOOKING.includes(String(booking.status || ""))) return false;
  if (isFullyRefunded(booking)) return false;
  return !ledger.some((r) => r.status === "pending" || r.status === "review" || (r.scope === "full" && r.status === "processed"));
}

/** The only fields the browser sends. Amounts are computed on the server from saved data. */
export function buildRefundRequest(bookingId: string, itemId?: string | null) {
  return itemId
    ? { action: "refund", booking_id: bookingId, scope: "item", item_id: itemId }
    : { action: "refund", booking_id: bookingId, scope: "full" };
}

export function refundsNeedingEmailRetry(ledger: RefundLedgerRow[]): RefundLedgerRow[] {
  return ledger.filter((r) => r.status === "processed" && r.email_status === "failed");
}

export function formatMinorAmount(minor: number, currency = "INR"): string {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(Number(minor) / 100);
  } catch {
    return `${currency} ${(Number(minor) / 100).toFixed(2)}`;
  }
}
