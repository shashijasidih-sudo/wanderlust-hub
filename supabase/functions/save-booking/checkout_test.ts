import { handleRequest as save } from "./index.ts";
import { handleRequest as create } from "../create-order/index.ts";
import { checkoutFingerprint, itemsTotalMinor, toMinor, orderAgeValid } from "../_shared/checkoutPricing.ts";
function assert(ok: unknown, message = "assertion failed"): asserts ok { if (!ok) throw new Error(message); }
const owner = "11111111-1111-4111-8111-111111111111";
const ref = "22222222-2222-4222-8222-222222222222";
const makeItem = (price = 100, product_type = "activity", quantity = 1) => ({
  activity_name: "Test experience", activity_slug: "test-experience", product_type,
  travel_date: "2026-12-10", quantity, adults: 2, children: 1, price, currency: "INR", pickup_required: false,
});
async function scenario(options: Record<string, any> = {}) {
  // All credentials below are synthetic. Fetch is intercepted; network is prohibited.
  const originalFetch = globalThis.fetch;
  const keys = ["SUPABASE_URL", "SUPABASE_ANON_KEY", "SUPABASE_SERVICE_ROLE_KEY", "RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"];
  const old = keys.map(k => Deno.env.get(k));
  const vals = ["https://fixture.invalid", "test-anon", "test-service", "test-key", "test-secret"];
  keys.forEach((k, i) => Deno.env.set(k, vals[i]));
  let rpcCalls = 0; let writes = 0; let emails = 0; let capturedParent: any; let capturedItems: any; let createdNotes: any;
  const items = options.items || [makeItem()];
  const sum = items.reduce((s: number, i: any) => s + i.price, 0);
  const amount = toMinor(sum, "INR");
  const notes = { user_id: owner, checkout_ref: ref, checkout_hash: await checkoutFingerprint(items, "INR"), checkout_version: "6", ...options.notes };
  const booking = { id: "33333333-3333-4333-8333-333333333333", user_id: owner,
    item_details: { payment_id: "pay_fixture", order_id: "order_fixture", checkout_ref: ref, checkout_hash: notes.checkout_hash } };
  const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
  globalThis.fetch = async (input, init) => {
    const url = String(input); const method = init?.method || "GET";
    if (url.includes("/auth/v1/user")) return json({ id: owner });
    if (url.endsWith("/v1/orders") && method === "POST") {
      const payload = JSON.parse(String(init?.body)); createdNotes = payload.notes;
      assert(payload.notes.user_id === owner, "order owner must come from session");
      return json({ id: "order_fixture", amount: payload.amount, currency: payload.currency, notes: payload.notes });
    }
    if (url.includes("/v1/payments/")) return json({ id: "pay_fixture", order_id: "order_fixture", status: options.status || "captured", amount: options.paymentAmount ?? amount, currency: options.paymentCurrency || "INR" });
    if (url.includes("/v1/orders/")) return json({ id: "order_fixture", status: "paid", amount, amount_paid: amount, amount_due: 0, currency: "INR", created_at: options.created ?? Math.floor(Date.now()/1000), notes });
    if (url.includes("/rest/v1/bookings")) { assert(method === "GET", "separate booking write forbidden"); return json(options.existing ? [booking] : []); }
    if (url.includes("/rest/v1/booking_items")) {
      assert(method === "GET", "separate item write forbidden");
      if (options.readFailure) throw new Error("fixture_read_failure");
      return json(items.map((i: any) => ({ ...i, booking_id: booking.id })));
    }
    if (url.includes("/rpc/create_booking_with_items")) {
      rpcCalls++; const payload = JSON.parse(String(init?.body)); capturedParent = payload._booking; capturedItems = payload._items;
      if (options.rpcFailure) return json({ code: options.rpcFailure, message: "fixture" }, 400);
      writes++; return json(booking);
    }
    if (url.includes("/functions/v1/send-confirmation")) {
      emails++;
      if (options.emailNetwork) throw new Error("fixture_network_failure");
      return json({ success: !options.emailFailure }, options.emailFailure ? 500 : 200);
    }
    throw new Error("unexpected_network_request");
  };
  try {
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode("test-secret"), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const signature = Array.from(new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("order_fixture|pay_fixture"))), b => b.toString(16).padStart(2,"0")).join("");
    const payload = options.create ? {
      amount: options.amount ?? amount, currency: options.currency || "INR", checkout_ref: ref, items, user_id: "body-attacker",
    } : {
      payment_id: "pay_fixture", order_id: "order_fixture", razorpay_signature: options.signature ?? signature, checkout_ref: options.checkout_ref || ref,
      tour_name: "Fixture booking", tour_slug: "test", total_price: options.total ?? sum,
      currency: options.currency || "INR", contact_name: "Fixture Person", contact_email: "fixture@example.invalid",
      items, user_id: "body-attacker",
    };
    const request = new Request("https://fixture.invalid/function", { method: "POST", headers: {
      "Content-Type": "application/json", ...(options.noAuth ? {} : { Authorization: "Bearer synthetic-session" }),
    }, body: JSON.stringify(payload) });
    const response = await (options.create ? create : save)(request);
    return { status: response.status, body: await response.json(), rpcCalls, writes, emails, capturedParent, capturedItems, createdNotes };
  } finally {
    globalThis.fetch = originalFetch;
    keys.forEach((k,i) => old[i] === undefined ? Deno.env.delete(k) : Deno.env.set(k, old[i] as string));
  }
}
Deno.test("create-order uses session owner and checkout notes, ignores body user_id", async () => {
  const r = await scenario({ create: true }); assert(r.status === 200); assert(r.createdNotes.user_id === owner); assert(r.createdNotes.checkout_ref === ref); assert(r.createdNotes.checkout_hash.length === 64);
});
Deno.test("create-order requires signed-in customer", async () => { const r=await scenario({create:true,noAuth:true}); assert(r.status===401); assert(!r.createdNotes); });
Deno.test("create-order rejects mismatched cart amount", async () => { const r=await scenario({create:true,amount:1}); assert(r.status===400 && r.body.code==="cart_total_mismatch"); assert(!r.createdNotes); });
for (const type of ["activity", "airport_transfer", "esim"]) Deno.test(`single ${type} commits only through RPC`, async () => {
  const r = await scenario({ items: [makeItem(100,type)] }); assert(r.status===200); assert(r.writes===1 && r.rpcCalls===1); assert(r.capturedParent.user_id===owner); assert(r.capturedItems[0].price===100);
  if(type==="esim") assert(r.capturedItems[0].product_type==="activity");
});
Deno.test("multi-item activity transfer eSIM amounts agree without quantity multiplied twice", async () => {
  const items=[makeItem(6500,"activity",2),makeItem(1200,"airport_transfer"),makeItem(60,"esim")];
  const r=await scenario({items}); assert(r.status===200); assert(r.capturedParent.total_price===7760); assert(r.capturedItems.reduce((s:number,i:any)=>s+i.price,0)===7760); assert(r.capturedItems[0].price===6500);
});
Deno.test("round aggregate once, not each line", async () => {
  const items=[makeItem(0.004),makeItem(0.004)]; assert(itemsTotalMinor(items,"INR")===1); assert(items.reduce((s,i)=>s+toMinor(i.price,"INR"),0)===0);
  const r=await scenario({items}); assert(r.status===200);
});
Deno.test("missing ownership notes rejects before RPC", async () => { const r=await scenario({notes:{user_id:undefined}}); assert(r.status===400 && r.body.code==="order_owner_missing" && r.rpcCalls===0); });
Deno.test("ownership mismatch rejects before RPC", async () => { const r=await scenario({notes:{user_id:"another-user"}}); assert(r.status===403 && r.body.code==="order_owner_mismatch" && r.rpcCalls===0); });
Deno.test("checkout reference mismatch rejects", async () => { const r=await scenario({checkout_ref:"44444444-4444-4444-8444-444444444444"}); assert(r.body.code==="checkout_mismatch" && r.rpcCalls===0); });
Deno.test("changed item snapshot rejects", async () => { const r=await scenario({notes:{checkout_hash:"altered"}}); assert(r.body.code==="checkout_mismatch" && r.rpcCalls===0); });
Deno.test("duplicate new payment reads back existing items without writes or email resend", async () => { const r=await scenario({existing:true}); assert(r.status===200 && r.body.idempotent && r.body.items.length===1 && r.writes===0 && r.emails===0); });
Deno.test("payment amount mismatch rejects", async () => { const r=await scenario({paymentAmount:999}); assert(r.body.code==="payment_not_verified" && r.writes===0); });
Deno.test("cart total mismatch rejects", async () => { const r=await scenario({total:101}); assert(r.body.code==="cart_total_mismatch" && r.writes===0); });
Deno.test("authorized payment never creates booking", async () => { const r=await scenario({status:"authorized"}); assert(r.body.code==="payment_not_verified" && r.writes===0); });
Deno.test("unsupported currency rejects", async () => { const r=await scenario({currency:"JPY"}); assert(r.body.code==="unsupported_currency" && r.writes===0); });
Deno.test("eSIM missing travel date rejects before RPC", async () => { const r=await scenario({items:[{...makeItem(60,"esim"),travel_date:""}]}); assert(r.body.code==="invalid_booking" && r.writes===0); });
Deno.test("no future order, exact 24h boundary inclusive", () => { const now=200000; assert(orderAgeValid(now,now)); assert(orderAgeValid(now-86400,now)); assert(!orderAgeValid(now+1,now)); assert(!orderAgeValid(now-86401,now)); assert(!orderAgeValid("200000",now)); });
Deno.test("RPC unavailable has no fallback writes", async () => { const r=await scenario({rpcFailure:"PGRST202"}); assert(r.body.code==="booking_rpc_unavailable" && r.writes===0); });
Deno.test("RPC transaction failure has no fallback writes", async () => { const r=await scenario({rpcFailure:"23502"}); assert(r.body.code==="booking_transaction_failed" && r.writes===0); });
Deno.test("confirmation HTTP failure preserves committed booking", async () => { const r=await scenario({emailFailure:true}); assert(r.status===200 && r.body.success && r.body.confirmation==="failed" && r.writes===1); });
Deno.test("confirmation network failure preserves committed booking", async () => { const r=await scenario({emailNetwork:true}); assert(r.status===200 && r.body.success && r.body.confirmation==="failed" && r.writes===1); });
Deno.test("post-commit readback exception still returns booking success", async () => { const r=await scenario({readFailure:true}); assert(r.status===200 && r.body.success && r.body.readback==="failed" && r.writes===1); });

Deno.test("invalid signature cannot reach RPC", async () => {const r=await scenario({signature:"0".repeat(64)}); assert(r.body.code==="invalid_signature" && r.rpcCalls===0);});
Deno.test("save-booking rejects unsigned guests", async () => {const r=await scenario({noAuth:true}); assert(r.status===401 && r.rpcCalls===0);});
Deno.test("packages stay enquiry only", async () => {const r=await scenario({create:true,items:[makeItem(100,"package")]}); assert(r.body.code==="invalid_checkout" && !r.createdNotes);});
Deno.test("future-dated order cannot reach RPC", async () => {const r=await scenario({created:Math.floor(Date.now()/1000)+3600}); assert(r.body.code==="payment_not_verified" && r.rpcCalls===0);});
Deno.test("order older than 24 hours cannot reach RPC", async () => {const r=await scenario({created:Math.floor(Date.now()/1000)-86401}); assert(r.body.code==="payment_not_verified" && r.rpcCalls===0);});
