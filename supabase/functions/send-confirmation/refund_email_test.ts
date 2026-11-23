import { assert, assertEquals, assertStringIncludes } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { buildRefundEmails, checkRefundRequest, formatMinor, isServiceCaller, validateRefundForEmail, type RefundRow } from "./refund_email.ts";

const B = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa", ACT = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb", TR = "cccccccc-cccc-4ccc-8ccc-cccccccccccc";
const items = [
  { id: ACT, activity_name: "Coral Island Tour", product_type: "activity", status: "confirmed", refund_status: "refunded" },
  { id: TR, activity_name: "Airport Transfer", product_type: "transfer", status: "confirmed", refund_status: "none" },
];
const row = (o: Partial<RefundRow> = {}): RefundRow => ({ id: "dddddddd-dddd-4ddd-8ddd-dddddddddddd", booking_id: B, booking_item_id: ACT, scope: "item", amount_minor: 250000, currency: "INR", razorpay_refund_id: "rfnd_X1", status: "processed", ...o });

Deno.test("refundId absent keeps the existing refund path", () => assertEquals(checkRefundRequest("refund", undefined, undefined), { ok: true, refundId: null }));
Deno.test("refundId must be a UUID, type refund, and never combined with itemId", () => {
  assertEquals(checkRefundRequest("refund", "x", undefined).ok, false);
  assertEquals(checkRefundRequest("cancellation", row().id, undefined).ok, false);
  assertEquals(checkRefundRequest("refund", row().id, ACT).ok, false);
  assertEquals(checkRefundRequest("refund", row().id.toUpperCase(), undefined), { ok: true, refundId: row().id });
});
Deno.test("only the exact service key is accepted as caller", () => {
  assert(isServiceCaller("Bearer svc-key", "svc-key"));
  assert(!isServiceCaller("Bearer user-jwt", "svc-key"));
  assert(!isServiceCaller(null, "svc-key"));
  assert(!isServiceCaller("Bearer svc-key", undefined));
});
Deno.test("refund row must belong to booking, be processed and have a Razorpay id", () => {
  assertEquals(validateRefundForEmail(null, B, items).ok, false);
  assertEquals(validateRefundForEmail(row({ booking_id: TR }), B, items).ok, false);
  assertEquals(validateRefundForEmail(row({ status: "pending" }), B, items).ok, false);
  assertEquals(validateRefundForEmail(row({ razorpay_refund_id: null }), B, items).ok, false);
  assertEquals(validateRefundForEmail(row({ booking_item_id: "eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee" }), B, items).ok, false);
  assertEquals(validateRefundForEmail(row(), B, items).ok, true);
});
Deno.test("single activity refund email names only that activity and says the transfer remains active", () => {
  const m = buildRefundEmails({ row: row(), item: items[0], items, name: "Shashi", bookingRef: "AAAAAAAA", bookingId: B, tourTitle: "2 experiences" });
  assertStringIncludes(m.subject, "activity: Coral Island Tour");
  assertStringIncludes(m.inner, "Coral Island Tour</strong> only");
  assertStringIncludes(m.inner, "remain active");
  assertStringIncludes(m.inner, "Airport Transfer");
  assertStringIncludes(m.inner, "₹2,500.00");
  assertStringIncludes(m.supportText, "SINGLE ACTIVITY");
  assertStringIncludes(m.supportText, `Airport Transfer (${TR})`);
});
Deno.test("single transfer refund email names the transfer", () => {
  const its = [{ ...items[0], refund_status: "none" }, { ...items[1], refund_status: "refunded" }];
  const m = buildRefundEmails({ row: row({ booking_item_id: TR, amount_minor: 80375 }), item: its[1], items: its, name: "S", bookingRef: "R", bookingId: B, tourTitle: "T" });
  assertStringIncludes(m.subject, "transfer: Airport Transfer");
  assertStringIncludes(m.inner, "₹803.75");
  assertStringIncludes(m.inner, "Coral Island Tour");
});
Deno.test("full refund email uses the ledger amount (₹3,303.75)", () => {
  const m = buildRefundEmails({ row: row({ scope: "full", booking_item_id: null, amount_minor: 330375 }), item: null, items, name: "S", bookingRef: "R", bookingId: B, tourTitle: "Pattaya" });
  assertStringIncludes(m.inner, "₹3,303.75");
  assertStringIncludes(m.supportText, "FULL / REMAINING BALANCE");
  assertEquals(formatMinor(330375, "INR"), "₹3,303.75");
});
Deno.test("item names are HTML-escaped", () => {
  const m = buildRefundEmails({ row: row(), item: { ...items[0], activity_name: "<b>x</b>" }, items, name: "S", bookingRef: "R", bookingId: B, tourTitle: "T" });
  assert(!m.inner.includes("<b>x</b>"));
});
