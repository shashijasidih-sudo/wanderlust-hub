import { describe, it, expect } from "vitest";
import { getRefundPaymentId, rupeesToPaise, readFunctionErrorMessage } from "@/lib/adminRefund";

describe("admin refund payment ID", () => {
  it("reads item_details.payment_id when no top-level payment_id", () => {
    expect(getRefundPaymentId({ item_details: { payment_id: "pay_ABC123", order_id: "order_X" } })).toBe("pay_ABC123");
  });
  it("prefers top-level payment_id", () => {
    expect(getRefundPaymentId({ payment_id: "pay_TOP", item_details: { payment_id: "pay_NESTED" } })).toBe("pay_TOP");
  });
  it("returns null when neither exists", () => {
    expect(getRefundPaymentId({ item_details: {} })).toBeNull();
    expect(getRefundPaymentId({ payment_id: "", item_details: null })).toBeNull();
  });
});

describe("rupees to paise", () => {
  it("converts ₹3,303.75 to 330375 paise", () => {
    expect(rupeesToPaise(3303.75)).toBe(330375);
  });
});

describe("function error message", () => {
  it("shows the server's error body instead of the generic message", async () => {
    const err = { message: "Edge Function returned a non-2xx status code", context: new Response(JSON.stringify({ error: "Missing payment_id" }), { status: 400 }) };
    expect(await readFunctionErrorMessage(err)).toBe("Missing payment_id");
  });
});
