import { supabase } from "@/lib/supabaseClient";
import { normaliseCurrency, toMinor, isTravelDate } from "@/lib/checkoutPricing";
import type { BookingItemPayload } from "@/lib/bookingItems";

export interface BookingSnapshot {
  customer_name: string; customer_email: string; customer_phone: string;
  tour_name: string; tour_slug: string; tour_date: string;
  adults: number; children: number; amount: number; currency: string;
  total_price: number; special_requests?: string | null;
  items?: BookingItemPayload[];
}
export class CheckoutSignInRequired extends Error {
  constructor() { super("checkout_sign_in_required"); }
}
export async function requireCheckoutSession(): Promise<string> {
  const { data, error } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (error || !token) throw new CheckoutSignInRequired();
  const { data: verified, error: verifyError } = await supabase.auth.getUser(token);
  if (verifyError || !verified.user || verified.user.is_anonymous) throw new CheckoutSignInRequired();
  return token;
}
export function prepareCheckout(snapshot: BookingSnapshot) {
  if (!snapshot.customer_name.trim() || snapshot.customer_name.trim().length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(snapshot.customer_email) || snapshot.customer_email.length > 255 ||
      !snapshot.tour_name.trim() || snapshot.tour_name.length > 2000 ||
      !Number.isInteger(snapshot.adults) || snapshot.adults < 0 ||
      !Number.isInteger(snapshot.children) || snapshot.children < 0) {
    throw new Error("invalid_checkout_details");
  }
  const currency = normaliseCurrency(snapshot.currency);
  if (!currency) throw new Error("This payment currency is not supported.");
  const items: BookingItemPayload[] = snapshot.items?.length ? snapshot.items : [{
    product_type: "activity", activity_name: snapshot.tour_name, activity_slug: snapshot.tour_slug,
    travel_date: snapshot.tour_date, quantity: 1, adults: snapshot.adults, children: snapshot.children,
    price: snapshot.total_price, currency, pickup_required: false, pickup_type: null,
  }];
  if (items.length > 10 || items.some(i => i.product_type === "package" || !i.travel_date || !isTravelDate(i.travel_date) ||
      !Number.isFinite(i.price) || i.price < 0 || !Number.isInteger(i.quantity) || i.quantity < 1 ||
      !Number.isInteger(i.adults) || i.adults < 0 || !Number.isInteger(i.children) || i.children < 0 ||
      normaliseCurrency(i.currency) !== currency)) {
    throw new Error("Review your booking details and choose a travel date for every item, including eSIM, before paying.");
  }
  const amount = toMinor(snapshot.total_price, currency);
  if (amount <= 0 || amount !== toMinor(items.reduce((sum, i) => sum + i.price, 0), currency)) {
    throw new Error("Your booking items do not match your cart total. Review your cart before paying.");
  }
  const prepared = structuredClone({ ...snapshot, currency, amount, checkout_ref: crypto.randomUUID(),
    tour_date: items.map(i => i.travel_date || "").sort()[0],
    items: items.map(i => ({ ...i, product_type: i.product_type === "esim" ? "activity" as const : i.product_type })),
  });
  // Retain an immutable in-memory snapshot AND a per-checkout retry record.
  // Never persist tokens; do not read another tab's global booking_data in callbacks.
  localStorage.setItem(`booking_data:${prepared.checkout_ref}`, JSON.stringify(prepared));
  localStorage.setItem("booking_data", JSON.stringify(prepared));
  return prepared;
}
export async function postCheckout(functionName: "create-order" | "save-booking", body: Record<string, unknown>): Promise<Response> {
  const token = await requireCheckoutSession();
  const { data, error } = await supabase.functions.invoke(functionName, {
    headers: { Authorization: `Bearer ${token}` }, body,
  });
  if (error) {
    const context = (error as { context?: unknown }).context;
    if (context instanceof Response) return context;
    throw new Error(functionName === "create-order"
      ? "Could not start payment. Please try again."
      : "Could not confirm your booking. If already paid, contact support before paying again.");
  }
  return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
}
export function clearCheckoutSnapshot(checkoutRef: string): void {
  try {
    localStorage.removeItem(`booking_data:${checkoutRef}`);
    const latest = JSON.parse(localStorage.getItem("booking_data") || "{}");
    if (latest.checkout_ref === checkoutRef) localStorage.removeItem("booking_data");
  } catch { /* Preserve unrelated storage when it cannot be read. */ }
}

export interface CheckoutPayment { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string; }
export function bookingRequest(snapshot: ReturnType<typeof prepareCheckout>, payment: CheckoutPayment, expectedOrderId: string) {
  if (payment.razorpay_order_id !== expectedOrderId) throw new Error("checkout_order_mismatch");
  return { payment_id: payment.razorpay_payment_id, order_id: expectedOrderId,
    razorpay_signature: payment.razorpay_signature, checkout_ref: snapshot.checkout_ref,
    tour_name: snapshot.tour_name, tour_slug: snapshot.tour_slug, tour_date: snapshot.tour_date,
    total_price: snapshot.total_price, currency: snapshot.currency,
    contact_name: snapshot.customer_name, contact_email: snapshot.customer_email,
    contact_phone: snapshot.customer_phone, adults: snapshot.adults, children: snapshot.children,
    special_requests: snapshot.special_requests ?? null, items: snapshot.items };
}
