import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { webcrypto } from "node:crypto";
import QuickPay from "@/pages/QuickPay";
import PaymentInformation from "@/pages/PaymentInformation";
const fixture = vi.hoisted(() => ({ getSession: vi.fn(), getUser: vi.fn(), invoke: vi.fn(), navigate: vi.fn(), clearCart: vi.fn(), purchase: vi.fn(), success: vi.fn(), options: undefined as any }));
vi.mock("@/lib/supabaseClient", () => ({ supabase: { auth: { getSession: fixture.getSession, getUser: fixture.getUser }, functions: { invoke: fixture.invoke } } }));
vi.mock("@/lib/auth", () => ({ useAuth: () => ({ user: { id: "synthetic-owner" } }) }));
vi.mock("react-router-dom", () => ({ useNavigate: () => fixture.navigate }));
vi.mock("@/contexts/CartContext", () => ({ useCart: () => ({ cartItems: [{ id: "fixture", title: "Activity", slug: "activity", itemType: "activity", selectedDate: "2026-12-10", adults: 1, children: 0, price: 100, quantity: 1 }], getCartTotal: () => 100, clearCart: fixture.clearCart }) }));
vi.mock("@/components/Header", () => ({ default: () => null }));
vi.mock("@/components/Footer", () => ({ default: () => null }));
vi.mock("@/components/BookingSteps", () => ({ default: () => null }));
vi.mock("@/components/BookingSummary", () => ({ default: () => null }));
vi.mock("@/components/recommendations/TripRecommendations", () => ({ default: () => null }));
vi.mock("@/lib/analytics", () => ({ trackPurchase: fixture.purchase, trackBeginCheckout: vi.fn(), trackAddPaymentInfo: vi.fn(), trackPaymentFailed: vi.fn(), destinationFromSlug: () => "Thailand" }));
vi.mock("sonner", () => ({ toast: { success: fixture.success, error: vi.fn() } }));
beforeEach(() => {
  vi.clearAllMocks(); localStorage.clear(); sessionStorage.clear(); fixture.options = undefined;
  vi.stubGlobal("crypto", webcrypto);
  vi.stubGlobal("scrollTo", vi.fn());
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ verified: true }), { status: 200 })));
  fixture.getSession.mockResolvedValue({ data: { session: { access_token: "synthetic-session" } } });
  fixture.getUser.mockResolvedValue({ data: { user: { id: "synthetic-owner" } } });
  fixture.invoke.mockImplementation(async (name, { body }) => ({ data: name === "create-order" ? { id: "order_fixture", amount: body.amount, currency: body.currency, checkout_ref: body.checkout_ref } : { success: true, booking: { id: "booking_fixture" } }, error: null }));
  window.Razorpay = class { constructor(options: any) { fixture.options = options; } on() {} open() {} };
  sessionStorage.setItem("customerInfo", JSON.stringify({ customerName: "Fixture", email: "fixture@example.invalid", phone: "1234567890" }));
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });
async function openCheckout(kind: "cart" | "quick") {
  render(kind === "cart" ? <PaymentInformation /> : <QuickPay />);
  if (kind === "quick") {
    for (const [id, value] of [["name", "Fixture"], ["email", "fixture@example.invalid"], ["phone", "1234567890"], ["amount", "100"]]) {
      const input = document.getElementById(id);
      if (!input) throw new Error("Missing fixture input");
      fireEvent.change(input, { target: { value } });
    }
  }
  fireEvent.click(screen.getByRole("button", { name: kind === "cart" ? "CONFIRM & PAY" : "Pay ₹100" }));
}
const payment = { razorpay_order_id: "order_fixture", razorpay_payment_id: "pay_fixture", razorpay_signature: "a".repeat(64) };
describe.each(["cart", "quick"] as const)("%s active caller", kind => {
  it("redirects signed-out customers before order creation", async () => {
    fixture.getSession.mockResolvedValue({ data: { session: null } });
    await openCheckout(kind);
    await waitFor(() => expect(fixture.navigate).toHaveBeenCalledWith("/auth/"));
    expect(fixture.invoke).not.toHaveBeenCalled();
    expect(fixture.options).toBeUndefined();
  });
  it("passes the retained snapshot, signature and session through save then shows success", async () => {
    await openCheckout(kind); await waitFor(() => expect(fixture.options).toBeDefined());
    const order = fixture.invoke.mock.calls[0][1].body;
    localStorage.setItem("booking_data", JSON.stringify({ total_price: 1, checkout_ref: "another-tab" }));
    await act(async () => { await fixture.options.handler(payment); });
    expect(fixture.invoke).toHaveBeenLastCalledWith("save-booking", { headers: { Authorization: "Bearer synthetic-session" }, body: expect.objectContaining({ total_price: 100, order_id: "order_fixture", razorpay_signature: payment.razorpay_signature, checkout_ref: order.checkout_ref, items: order.items }) });
    expect(fixture.purchase).toHaveBeenCalledTimes(1);
    expect(fixture.success).toHaveBeenCalledTimes(1);
  });
  it("does not clear data or report purchase/success on save failure", async () => {
    await openCheckout(kind); await waitFor(() => expect(fixture.options).toBeDefined());
    fixture.invoke.mockResolvedValue({ data: { success: false, code: "booking_transaction_failed" }, error: null });
    await act(async () => { await fixture.options.handler(payment); });
    expect(fixture.purchase).not.toHaveBeenCalled(); expect(fixture.success).not.toHaveBeenCalled();
    expect(fixture.clearCart).not.toHaveBeenCalled(); expect(localStorage.getItem("booking_data")).not.toBeNull();
  });
});