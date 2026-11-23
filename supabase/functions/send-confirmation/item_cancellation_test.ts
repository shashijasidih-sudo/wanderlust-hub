import { assert, assertEquals, assertStringIncludes } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { buildItemCancellationEmail, checkItemRequest, type CancellableItem } from "./item_cancellation.ts";

const BRAND = { ink: "#111", muted: "#666", surface: "#fafafa", primaryDark: "#d97706", border: "#eee", success: "#16a34a" };
const ACT = "11111111-1111-4111-8111-111111111111";
const TRF = "22222222-2222-4222-8222-222222222222";
const items: CancellableItem[] = [
  { id: ACT, activity_name: "Coral Island Tour", product_type: "activity", travel_date: "2026-12-01", price: 2500, status: "confirmed", adults: 2 },
  { id: TRF, activity_name: "Pattaya Airport Transfer", product_type: "transfer", travel_date: "2026-12-02", price: 1800, status: "confirmed", pickup_location: "BKK Airport", drop_location: "Hilton Pattaya" },
];
const build = (cancelled: CancellableItem, all: CancellableItem[]) => buildItemCancellationEmail({
  name: "Asha", recipientEmail: "asha@example.com", customerPhone: "", bookingId: "b-1", bookingShort: "B1",
  item: cancelled, allItems: all, formatDate: (d) => d || "TBD", formatMoney: (a, c) => `${c} ${a}`,
  fallbackCurrency: "INR", viewUrl: "https://yellodae.com/user-bookings", brand: BRAND,
});

Deno.test("individual activity cancellation names only that activity and keeps transfer active", () => {
  const all = [{ ...items[0], status: "cancelled" }, items[1]];
  const out = build(all[0], all);
  assertEquals(out.kind, "Activity");
  assertEquals(out.customerSubject, "Activity cancelled - Coral Island Tour - Yellodae");
  assertEquals(out.remaining.map((i) => i.id), [TRF]);
  assertStringIncludes(out.customerInner, "remain confirmed");
  assertStringIncludes(out.supportText, `Item ID: ${ACT}`);
  assertStringIncludes(out.supportText, `REMAINING ACTIVE ITEMS (1)`);
});

Deno.test("individual transfer cancellation names only that transfer and keeps activity active", () => {
  const all = [items[0], { ...items[1], status: "cancelled" }];
  const out = build(all[1], all);
  assertEquals(out.kind, "Transfer");
  assertEquals(out.customerSubject, "Transfer cancelled - Pattaya Airport Transfer - Yellodae");
  assertEquals(out.remaining.map((i) => i.id), [ACT]);
  assertStringIncludes(out.supportText, "Pickup location: BKK Airport");
  assert(!out.supportText.includes(`Item ID: ${ACT}`));
});

Deno.test("whole-booking cancellation without itemId keeps the existing path", () => {
  assertEquals(checkItemRequest("cancellation", undefined), { ok: true, itemId: null });
  assertEquals(checkItemRequest("cancellation", null), { ok: true, itemId: null });
});

Deno.test("refund email keeps the existing path and refuses an itemId", () => {
  assertEquals(checkItemRequest("refund", undefined), { ok: true, itemId: null });
  assertEquals(checkItemRequest(undefined, undefined), { ok: true, itemId: null });
  assertEquals(checkItemRequest("refund", ACT).ok, false);
});

Deno.test("invalid itemId is rejected", () => {
  for (const bad of ["", "abc", 123, {}, "11111111-1111-4111-8111-11111111111Z"]) {
    assertEquals(checkItemRequest("cancellation", bad).ok, false);
  }
  assertEquals(checkItemRequest("cancellation", ACT), { ok: true, itemId: ACT });
});
