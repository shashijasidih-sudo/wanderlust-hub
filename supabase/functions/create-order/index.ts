import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { orderBodySchema } from "../_shared/bookingValidation.ts";
import { checkoutFingerprint, itemsTotalMinor, normaliseCurrency } from "../_shared/checkoutPricing.ts";
const headers = { ...corsHeaders, "Content-Type": "application/json", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const fail = (status: number, code: string, error: string): Response => {
  console.warn(JSON.stringify({ fn: "create-order", code, status }));
  return new Response(JSON.stringify({ success: false, error, code }), { status, headers });
};
export async function handleRequest(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") return new Response("ok", { headers });
  if (req.method !== "POST") return fail(405, "method_not_allowed", "Method not allowed.");
  try {
    const url = Deno.env.get("SUPABASE_URL");
    const anon = Deno.env.get("SUPABASE_ANON_KEY");
    const key = Deno.env.get("RAZORPAY_KEY_ID")?.trim();
    const secret = Deno.env.get("RAZORPAY_KEY_SECRET")?.trim();
    if (!url || !anon || !key || !secret) return fail(503, "payment_config_missing", "Payment is temporarily unavailable. Please try later.");
    const token = req.headers.get("Authorization")?.match(/^Bearer (.+)$/i)?.[1];
    if (!token || token === anon || token === Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")) {
      return fail(401, "sign_in_required", "Please sign in before making a payment.");
    }
    const client = createClient(url, anon, { auth: { persistSession: false, autoRefreshToken: false } });
    const { data, error } = await client.auth.getUser(token);
    const ownerId = data.user?.id;
    if (error || !ownerId || data.user?.is_anonymous) return fail(401, "invalid_session", "Your session expired. Please sign in again before paying.");
    let input: unknown;
    try { input = await req.json(); } catch { return fail(400, "invalid_request", "Invalid payment request."); }
    const parsed = orderBodySchema.safeParse(input);
    if (!parsed.success) return fail(400, "invalid_checkout", "Check the amount and travel dates before paying.");
    const body = parsed.data; // user_id supplied in the request is stripped and never used.
    const currency = normaliseCurrency(body.currency);
    if (!currency || body.items.some(i => normaliseCurrency(i.currency) !== currency)) {
      return fail(400, "unsupported_currency", "This checkout currency is not supported.");
    }
    if (itemsTotalMinor(body.items, currency) !== body.amount) {
      return fail(400, "cart_total_mismatch", "Your cart total changed. Review it before paying.");
    }
    const fingerprint = await checkoutFingerprint(body.items, currency);
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST", headers: { "Content-Type": "application/json", Authorization: `Basic ${btoa(`${key}:${secret}`)}` },
      body: JSON.stringify({ amount: body.amount, currency, partial_payment: false,
        receipt: body.checkout_ref,
        notes: { user_id: ownerId, checkout_ref: body.checkout_ref, checkout_hash: fingerprint, checkout_version: "6" },
      }),
    });
    if (!response.ok) return fail(502, "order_creation_failed", "We could not create the payment order. Please try again.");
    const order = await response.json();
    if (typeof order.id !== "string" || !/^order_[A-Za-z0-9]+$/.test(order.id) || order.amount !== body.amount ||
        order.currency !== currency || order.notes?.user_id !== ownerId || order.notes?.checkout_ref !== body.checkout_ref ||
        order.notes?.checkout_hash !== fingerprint) {
      return fail(502, "invalid_order_response", "We could not confirm the payment order. Please try again.");
    }
    return new Response(JSON.stringify({ id: order.id, amount: order.amount, currency: order.currency, checkout_ref: body.checkout_ref }), { status: 200, headers });
  } catch {
    return fail(500, "unexpected_error", "Could not start payment. Please try again.");
  }
}
if (import.meta.main) Deno.serve(handleRequest);
