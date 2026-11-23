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
