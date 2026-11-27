import { describe, it, expect } from "vitest";
import { canCancelItem, nextParentStatus, itemKindLabel } from "@/lib/bookingItemCancellation";

describe("individual booking item cancellation", () => {
  it("does not allow cancelling a cancelled or completed item", () => {
    expect(canCancelItem("cancelled")).toBe(false);
    expect(canCancelItem("completed")).toBe(false);
    expect(canCancelItem("confirmed")).toBe(true);
    expect(canCancelItem("pending")).toBe(true);
  });
  it("keeps the parent booking status while another item is active", () => {
    expect(nextParentStatus([{ status: "cancelled" }, { status: "confirmed" }], "confirmed")).toBe("confirmed");
  });
  it("cancels the parent booking when every item is cancelled", () => {
    expect(nextParentStatus([{ status: "cancelled" }, { status: "cancelled" }], "confirmed")).toBe("cancelled");
  });
  it("labels transfers and activities", () => {
    expect(itemKindLabel({ product_type: "transfer" })).toBe("Transfer");
    expect(itemKindLabel({ product_type: "activity", activity_name: "Coral Island Tour" })).toBe("Activity");
    expect(itemKindLabel({ product_type: "activity", activity_name: "Pattaya Floating Market Guided Tour with Transfer" })).toBe("Activity");
    expect(itemKindLabel({ product_type: "airport_transfer", activity_name: "Private ride" })).toBe("Transfer");
  });
});
