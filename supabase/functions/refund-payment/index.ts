import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import {
  classifyRefundResponse, findRefundForAttempt, mapDbError, parseRefundRequest,
  resolvePaymentId, sha256Hex, unrecordedRefunds, type RazorpayRefund,
} from "./refund_logic.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: corsHeaders });
const RZP = "https://api.razorpay.com/v1";
const PENDING_GRACE_MS = 120_000;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY") || Deno.env.get("ANON_KEY") || "";
    const keyId = Deno.env.get("RAZORPAY_KEY_ID")?.trim();
    const keySecret = Deno.env.get("RAZORPAY_KEY_SECRET")?.trim();
    if (!keyId || !keySecret) return json({ error: "Server not configured: missing Razorpay credentials" }, 500);

    // ---- Admin auth: requested_by comes only from the verified JWT ----
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401);
    const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authHeader } } });
    const { data: claimsData, error: authError } = await userClient.auth.getClaims(authHeader.slice(7));
    if (authError || !claimsData?.claims?.sub) return json({ error: "Unauthorized" }, 401);
    const adminId = claimsData.claims.sub as string;
    const db = createClient(supabaseUrl, serviceKey);
    const { data: profile, error: profileError } = await db.from("profiles").select("role").eq("id", adminId).maybeSingle();
    if (profileError || !(profile?.role === "admin" || profile?.role === "super_admin")) return json({ error: "Forbidden" }, 403);

    const parsed = parseRefundRequest(await req.json().catch(() => ({})));
    if (!parsed.ok) return json({ error: parsed.error }, 400);
    const request = parsed.value;

    const basic = `Basic ${btoa(`${keyId}:${keySecret}`)}`;
    const rzp = async (path: string, init: RequestInit = {}) => {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 20_000);
      try {
        const res = await fetch(`${RZP}${path}`, { ...init, signal: ctrl.signal, headers: { Authorization: basic, "Content-Type": "application/json", ...(init.headers || {}) } });
        const text = await res.text();
        let data: unknown = {};
        try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text.slice(0, 300) }; }
        return { status: res.status as number | null, data };
      } catch {
        return { status: null, data: {} };
      } finally { clearTimeout(timer); }
    };

    // ---- Server-to-server refund email (send-confirmation verifies the service key) ----
    const sendRefundEmail = async (refundId: string, bookingId: string) => {
      try {
        const res = await fetch(`${supabaseUrl}/functions/v1/send-confirmation`, {
          method: "POST",
          headers: { Authorization: `Bearer ${serviceKey}`, apikey: serviceKey, "Content-Type": "application/json" },
          body: JSON.stringify({ bookingId, type: "refund", refundId }),
        });
        const data = await res.json().catch(() => ({}));
        return res.ok ? { status: "sent" as const } : { status: "failed" as const, error: String(data?.error || `Email failed (${res.status})`) };
      } catch (e) {
        return { status: "failed" as const, error: e instanceof Error ? e.message : "Email request failed" };
      }
    };

    if (request.action === "retry_email") {
      const { data: row } = await db.from("booking_refunds").select("id, booking_id, status, email_status").eq("id", request.refundId).maybeSingle();
      if (!row) return json({ error: "Refund not found" }, 404);
      if (row.status !== "processed") return json({ error: "Refund is not processed" }, 409);
      if (row.email_status === "sent") return json({ error: "Refund email was already sent" }, 409);
      const email = await sendRefundEmail(row.id, row.booking_id);
      return json({ ok: email.status === "sent", email }, email.status === "sent" ? 200 : 502);
    }

    // ---- Load booking with the service role ----
    const { data: booking } = await db.from("bookings").select("*").eq("id", request.bookingId).maybeSingle();
    if (!booking) return json({ error: "Booking not found." }, 404);
    const paymentId = resolvePaymentId(booking as Record<string, unknown>);
    if (!paymentId || !/^pay_[A-Za-z0-9]+$/.test(paymentId)) return json({ error: "No Razorpay payment ID saved for this booking." }, 400);

    // ---- Server-verified Razorpay data ----
    const pay = await rzp(`/payments/${encodeURIComponent(paymentId)}`);
    if (pay.status !== 200) return json({ error: "Could not read the payment from Razorpay.", details: (pay.data as any)?.error?.description }, 502);
    const payment = pay.data as Record<string, any>;
    const refundsRes = await rzp(`/payments/${encodeURIComponent(paymentId)}/refunds?count=100`);
    if (refundsRes.status !== 200) return json({ error: "Could not read existing refunds from Razorpay." }, 502);

    const { data: ledger } = await db.from("booking_refunds").select("*").eq("booking_id", booking.id);
    const rows = (ledger || []) as any[];

    // Finishes an attempt using only Razorpay's own refund object.
    const finishCreated = async (row: any, refund: RazorpayRefund) => {
      const { data, error } = await db.rpc("refund_finish", {
        _refund_id: row.id, _outcome: "created", _rzp_refund_id: refund.id ?? null, _rzp_refund_payment_id: refund.payment_id ?? null,
        _rzp_refund_amount: refund.amount ?? null, _rzp_refund_receipt: refund.receipt ?? null, _rzp_refund_status: refund.status ?? null,
        _failure_reason: null, _rzp_captured_minor: payment.amount,
      });
      if (error) throw new Error(`refund_finish: ${error.message}`);
      return data as any;
    };
    const finishRejected = async (row: any, reason: string) => {
      const { error } = await db.rpc("refund_finish", {
        _refund_id: row.id, _outcome: "rejected", _rzp_refund_id: null, _rzp_refund_payment_id: null, _rzp_refund_amount: null,
        _rzp_refund_receipt: null, _rzp_refund_status: null, _failure_reason: reason, _rzp_captured_minor: payment.amount,
      });
      if (error) throw new Error(`refund_finish: ${error.message}`);
    };
    // Sends the stored request body byte-for-byte with the attempt id as idempotency key.
    const sendStored = async (row: any) => {
      if ((await sha256Hex(row.razorpay_request_body)) !== row.razorpay_request_sha256) throw new Error("Stored refund request failed its integrity check");
      const res = await rzp(`/payments/${encodeURIComponent(row.razorpay_payment_id)}/refund`, {
        method: "POST", headers: { "X-Refund-Idempotency": row.id }, body: row.razorpay_request_body,
      });
      return classifyRefundResponse(res.status, res.data);
    };
    const settle = async (row: any, outcome: ReturnType<typeof classifyRefundResponse>) => {
      if (outcome.kind === "created") {
        const done = await finishCreated(row, outcome.refund);
        if (done.status !== "processed") return json({ error: "Razorpay's reply did not match the recorded refund. Marked for review.", refund_id: row.id }, 409);
        const email = await sendRefundEmail(row.id, row.booking_id);
        return json({ ok: true, refund: { id: done.id, scope: done.scope, amount_minor: done.amount_minor, currency: done.currency, razorpay_refund_id: done.razorpay_refund_id }, email });
      }
      if (outcome.kind === "duplicate_receipt") {
        const again = await rzp(`/payments/${encodeURIComponent(row.razorpay_payment_id)}/refunds?count=100`);
        const found = again.status === 200 ? findRefundForAttempt(again.data, row.razorpay_receipt, row.id) : null;
        if (found) return settle(row, { kind: "created", refund: found });
        return json({ error: "Razorpay reports this receipt was already used, but the refund was not found. Left pending for review.", refund_id: row.id }, 409);
      }
      if (outcome.kind === "rejected") {
        await finishRejected(row, outcome.reason);
        return json({ error: outcome.reason, refund_id: row.id }, 422);
      }
      return json({ pending: true, message: "Razorpay has not confirmed yet. The refund is held as pending; try again in a few minutes to check it.", reason: outcome.reason, refund_id: row.id }, 202);
    };

    // ---- An open attempt must be resolved before anything new starts ----
    const open = rows.find((r) => r.status === "pending" || r.status === "review");
    if (open?.status === "review") return json({ error: "A refund for this booking needs manual review before any further refund.", refund_id: open.id }, 409);
    if (open) {
      const found = findRefundForAttempt(refundsRes.data, open.razorpay_receipt, open.id);
      if (found) return settle(open, { kind: "created", refund: found });
      if (Date.now() - new Date(open.created_at).getTime() < PENDING_GRACE_MS) return json({ error: "Another refund for this booking is in progress. Try again in a minute." }, 409);
      return settle(open, await sendStored(open)); // same key, same bytes
    }

    const strangers = unrecordedRefunds(refundsRes.data, rows);
    if (strangers.length) return json({ error: "Refund found in Razorpay not recorded in Yellodae — review required." }, 409);

    // ---- Locked begin: SQL computes amount, receipt and request body ----
    const { data: begun, error: beginError } = await db.rpc("refund_begin", {
      _booking_id: booking.id, _item_id: request.itemId, _scope: request.scope, _payment_id: paymentId,
      _rzp_payment_status: payment.status ?? null, _rzp_captured_minor: payment.amount ?? null,
      _rzp_refunded_minor: payment.amount_refunded ?? 0, _rzp_currency: payment.currency ?? null,
      _rzp_order_id: payment.order_id ?? null, _requested_by: adminId,
    });
    if (beginError || !begun) {
      console.error("refund_begin failed:", beginError?.message);
      const mapped = mapDbError(beginError?.message);
      return json({ error: mapped.error }, mapped.status);
    }
    return settle(begun, await sendStored(begun));
  } catch (error) {
    console.error("refund-payment error:", error instanceof Error ? error.message : String(error));
    return json({ error: error instanceof Error ? error.message : "Unknown error" }, 500);
  }
});
