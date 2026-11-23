import { assert, assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { classifyRefundResponse, findRefundForAttempt, mapDbError, parseRefundRequest, resolvePaymentId, sha256Hex, unrecordedRefunds } from "./refund_logic.ts";

const B = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa", I = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";

Deno.test("request accepts only ids and scope; browser amount/result/requested_by are dropped", () => {
  const r = parseRefundRequest({ booking_id: B, scope: "item", item_id: I, amount: 1, requested_by: "x", refund_result: "processed" });
  assertEquals(r, { ok: true, value: { action: "refund", bookingId: B, scope: "item", itemId: I } });
  assertEquals(parseRefundRequest({ booking_id: B }), { ok: true, value: { action: "refund", bookingId: B, scope: "full", itemId: null } });
  assertEquals(parseRefundRequest({ booking_id: B, scope: "item" }).ok, false);
  assertEquals(parseRefundRequest({ booking_id: B, scope: "full", item_id: I }).ok, false);
  assertEquals(parseRefundRequest({ booking_id: "x" }).ok, false);
  assertEquals(parseRefundRequest({ action: "retry_email", refund_id: I }), { ok: true, value: { action: "retry_email", refundId: I } });
});
Deno.test("payment id: top-level first, then item_details.payment_id", () => {
  assertEquals(resolvePaymentId({ payment_id: "pay_TOP", item_details: { payment_id: "pay_N" } }), "pay_TOP");
  assertEquals(resolvePaymentId({ payment_id: " ", item_details: { payment_id: "pay_N" } }), "pay_N");
  assertEquals(resolvePaymentId({ item_details: {} }), null);
});
Deno.test("Razorpay responses: created / rejected / duplicate receipt / uncertain", () => {
  assertEquals(classifyRefundResponse(200, { id: "rfnd_1", amount: 5 }).kind, "created");
  assertEquals(classifyRefundResponse(200, {}).kind, "uncertain");
  assertEquals(classifyRefundResponse(400, { error: { description: "The amount exceeds" } }).kind, "rejected");
  assertEquals(classifyRefundResponse(400, { error: { description: "Duplicate receipt found" } }).kind, "duplicate_receipt");
  for (const s of [null, 409, 429, 500, 503]) assertEquals(classifyRefundResponse(s, {}).kind, "uncertain");
});
Deno.test("finds our attempt in Razorpay's refund list by receipt or attempt id", () => {
  const list = { items: [{ id: "rfnd_a", receipt: "yl-i-x" }, { id: "rfnd_b", receipt: null, notes: { attempt_id: "att" } }] };
  assertEquals(findRefundForAttempt(list, "yl-i-x", "zzz")?.id, "rfnd_a");
  assertEquals(findRefundForAttempt(list, "nope", "att")?.id, "rfnd_b");
  assertEquals(findRefundForAttempt(list, "nope", "nope"), null);
});
Deno.test("refunds in Razorpay but not in our ledger are flagged", () => {
  const list = { items: [{ id: "rfnd_ours", receipt: "yl-i-1", status: "processed" }, { id: "rfnd_old", receipt: null, status: "processed" }, { id: "rfnd_f", status: "failed" }] };
  const ledger = [{ razorpay_refund_id: "rfnd_ours", razorpay_receipt: "yl-i-1", status: "processed" }];
  assertEquals(unrecordedRefunds(list, ledger).map((r) => r.id), ["rfnd_old"]);
});
Deno.test("stored body hash is stable for retries", async () => {
  const body = '{"amount":250000,"speed":"normal","receipt":"yl-i-x"}';
  assertEquals(await sha256Hex(body), await sha256Hex(body));
  assert((await sha256Hex(body)) !== (await sha256Hex(body + " ")));
});
Deno.test("database errors map to clear admin messages", () => {
  assertEquals(mapDbError("ERROR: refund_in_progress").status, 409);
  assertEquals(mapDbError("items_vs_captured_mismatch").error.includes("single-item"), true);
  assertEquals(mapDbError("something else").status, 500);
});
