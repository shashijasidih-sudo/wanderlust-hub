import { beforeEach, describe, expect, it, vi } from "vitest";
import { webcrypto } from "node:crypto";
import { bookingRequest, CheckoutSignInRequired, clearCheckoutSnapshot, postCheckout, prepareCheckout, requireCheckoutSession } from "@/lib/checkoutRequests";
import { buildBookingItemsFromCart } from "@/lib/bookingItems";
import type { CartItem } from "@/contexts/CartContext";
import { normaliseCurrency, orderAgeValid, toMinor } from "@/lib/checkoutPricing";

const { getSession, getUser, invoke } = vi.hoisted(() => ({ getSession: vi.fn(), getUser: vi.fn(), invoke: vi.fn() }));
vi.mock("@/lib/supabaseClient", () => ({ supabase: { auth: { getSession, getUser }, functions: { invoke } } }));
const snapshot = () => ({ customer_name: "Fixture", customer_email: "fixture@example.invalid", customer_phone: "", tour_name: "Quick Payment", tour_slug: "quick-pay", tour_date: "2026-12-10", adults: 1, children: 0, amount: 10000, currency: "INR", total_price: 100 });
beforeEach(() => {
  vi.clearAllMocks(); localStorage.clear(); vi.stubGlobal("crypto", webcrypto);
  getSession.mockResolvedValue({ data: { session: { access_token: "synthetic-session" } } });
  getUser.mockResolvedValue({ data: { user: { id: "synthetic-owner", is_anonymous: false } } });
  invoke.mockResolvedValue({ data: { success: true }, error: null });
});
describe("coordinated checkout contract", () => {
  it("requires a session before sending either function request", async () => {
    getSession.mockResolvedValue({ data: { session: null } });
    await expect(postCheckout("create-order", {})).rejects.toBeInstanceOf(CheckoutSignInRequired);
    await expect(postCheckout("save-booking", {})).rejects.toBeInstanceOf(CheckoutSignInRequired);
    expect(invoke).not.toHaveBeenCalled();
  });
  it("rejects anonymous sessions", async () => {
    getUser.mockResolvedValue({ data: { user: { id: "guest", is_anonymous: true } } });
    await expect(requireCheckoutSession()).rejects.toBeInstanceOf(CheckoutSignInRequired);
  });
  it("sends the current session for both requests without persisting tokens", async () => {
    await postCheckout("create-order", { amount: 10000 });
    await postCheckout("save-booking", { order_id: "order_fixture" });
    expect(invoke).toHaveBeenNthCalledWith(1, "create-order", { headers: { Authorization: "Bearer synthetic-session" }, body: { amount: 10000 } });
    expect(invoke).toHaveBeenNthCalledWith(2, "save-booking", { headers: { Authorization: "Bearer synthetic-session" }, body: { order_id: "order_fixture" } });
    expect(localStorage.length).toBe(0);
  });
  it("uses each callback's snapshot rather than another tab's global booking data", () => {
    const first = prepareCheckout(snapshot());
    const second = prepareCheckout({ ...snapshot(), total_price: 200 });
    const request = bookingRequest(first, { razorpay_order_id: "order_fixture", razorpay_payment_id: "pay_fixture", razorpay_signature: "a".repeat(64) }, "order_fixture");
    expect(request).toMatchObject({ total_price: 100, checkout_ref: first.checkout_ref, order_id: "order_fixture", razorpay_signature: "a".repeat(64) });
    expect(request).not.toHaveProperty("user_id");
    clearCheckoutSnapshot(first.checkout_ref);
    expect(JSON.parse(localStorage.getItem("booking_data") ?? "{}").checkout_ref).toBe(second.checkout_ref);
  });
  it("rejects another order's callback", () => {
    expect(() => bookingRequest(prepareCheckout(snapshot()), { razorpay_order_id: "order_other", razorpay_payment_id: "pay_fixture", razorpay_signature: "a".repeat(64) }, "order_fixture")).toThrow("checkout_order_mismatch");
  });
  it("preserves extended cart prices and does not multiply quantity or guests twice", () => {
    const cart = [{ id: "1", title: "Activity", slug: "activity", price: 6500, quantity: 2, adults: 3, children: 1, selectedDate: "2026-12-10", itemType: "activity" }, { id: "2", title: "Airport Transfer", slug: "airport-transfer", price: 1200, quantity: 1, numberOfPersons: 4, pickupDate: "2026-12-09", itemType: "transfer" }, { id: "3", title: "eSIM Thailand", slug: "esim", price: 60, quantity: 1, selectedDate: "2026-12-11", itemType: "activity" }] as CartItem[];
    const items = buildBookingItemsFromCart(cart, {});
    const prepared = prepareCheckout({ ...snapshot(), items, total_price: 14260 });
    expect(prepared.amount).toBe(1426000);
    expect(prepared.items.map(i => i.price)).toEqual([13000, 1200, 60]);
    expect(prepared.tour_date).toBe("2026-12-09");
    expect(prepared.items[2].product_type).toBe("activity");
  });
  it("requires a real eSIM travel date rather than its activation date", () => {
    const item = { product_type: "esim" as const, activity_name: "eSIM", travel_date: null, quantity: 1, adults: 1, children: 0, price: 100, currency: "INR", pickup_required: false, pickup_type: null, item_details: { activation_date: "2026-12-10" } };
    expect(() => prepareCheckout({ ...snapshot(), items: [item] })).toThrow();
  });
  it("keeps packages enquiry-only", () => {
    const base = prepareCheckout(snapshot());
    expect(() => prepareCheckout({ ...snapshot(), items: [{ ...base.items[0], product_type: "package" }] })).toThrow();
  });
  it("rejects unsupported currencies rather than falling back to 100", () => {
    expect(normaliseCurrency("JPY")).toBeNull();
    expect(() => toMinor(100, "JPY")).toThrow();
    expect(() => prepareCheckout({ ...snapshot(), currency: "JPY" })).toThrow();
  });
  it("requires both strict age boundaries", () => {
    expect(orderAgeValid(200000, 200000)).toBe(true);
    expect(orderAgeValid(113600, 200000)).toBe(true);
    expect(orderAgeValid(200001, 200000)).toBe(false);
    expect(orderAgeValid(113599, 200000)).toBe(false);
  });
});