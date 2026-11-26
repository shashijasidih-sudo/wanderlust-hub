import { describe, it, expect } from "vitest";
import { buildRefundRequest, canFullRefund, canRefundItem, formatMinorAmount, refundsNeedingEmailRetry, type RefundLedgerRow } from "@/lib/adminRefund";

const booking = { id: "b1", status: "confirmed", refund_status: "none" };
const act = { id: "i1", refund_status: "none" }, tr = { id: "i2", refund_status: "none" };
const row = (o: Partial<RefundLedgerRow>): RefundLedgerRow => ({ id: "r1", booking_item_id: "i1", scope: "item", status: "processed", amount_minor: 250000, currency: "INR", email_status: "sent", ...o });

describe("ledger refunds in the Admin Panel", () => {
  it("browser sends only ids and scope, never an amount", () => {
    expect(buildRefundRequest("b1", "i1")).toEqual({ action: "refund", booking_id: "b1", scope: "item", item_id: "i1" });
    expect(buildRefundRequest("b1")).toEqual({ action: "refund", booking_id: "b1", scope: "full" });
  });
  it("refunding one item leaves the other item refundable", () => {
    const ledger = [row({})];
    expect(canRefundItem({ ...act, refund_status: "refunded" }, booking, ledger)).toBe(false);
    expect(canRefundItem(tr, booking, ledger)).toBe(true);
  });
  it("no item refund buttons once the booking is marked fully refunded", () => {
    expect(canRefundItem(tr, { ...booking, refund_status: "full" }, [])).toBe(false);
    expect(canRefundItem(tr, { ...booking, refund_state: "full" }, [])).toBe(false);
  });
  it("no refund buttons while a refund is pending or under review", () => {
    for (const status of ["pending", "review"]) {
      const ledger = [row({ status })];
      expect(canRefundItem(tr, booking, ledger)).toBe(false);
      expect(canFullRefund(booking, ledger)).toBe(false);
    }
  });
  it("remaining-balance refund allowed after item refund, blocked after full refund", () => {
    expect(canFullRefund(booking, [row({})])).toBe(true);
    expect(canFullRefund(booking, [row({ scope: "full", booking_item_id: null })])).toBe(false);
    expect(canFullRefund({ ...booking, refund_status: "full" })).toBe(false);
    expect(canFullRefund({ ...booking, status: "pending" })).toBe(false);
  });
  it("historical bookings without items keep a full refund option", () => {
    expect(canFullRefund({ id: "old", status: "cancelled" })).toBe(true);
  });
  it("failed refund emails are offered for retry; sent ones are not", () => {
    expect(refundsNeedingEmailRetry([row({ email_status: "failed" }), row({ id: "r2", email_status: "sent" })]).map(r => r.id)).toEqual(["r1"]);
  });
  it("₹3,303.75 displays from 330375 paise", () => {
    expect(formatMinorAmount(330375)).toBe("₹3,303.75");
  });
});
