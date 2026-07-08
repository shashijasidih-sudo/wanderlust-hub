import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

async function hmacSha256Hex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message),
  );
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET")?.trim();
    if (!RAZORPAY_KEY_SECRET) {
      console.error("Missing RAZORPAY_KEY_SECRET");
      return new Response(
        JSON.stringify({ verified: false, error: "Server not configured" }),
        { status: 500, headers: corsHeaders },
      );
    }

    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body || {};

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return new Response(
        JSON.stringify({ verified: false, error: "Missing verification fields" }),
        { status: 400, headers: corsHeaders },
      );
    }

    const expected = await hmacSha256Hex(
      RAZORPAY_KEY_SECRET,
      `${razorpay_order_id}|${razorpay_payment_id}`,
    );

    // Constant-time comparison
    const a = new TextEncoder().encode(expected);
    const b = new TextEncoder().encode(String(razorpay_signature));
    let ok = a.length === b.length;
    const len = Math.max(a.length, b.length);
    let diff = a.length ^ b.length;
    for (let i = 0; i < len; i++) {
      diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
    }
    ok = ok && diff === 0;

    if (!ok) {
      console.warn("Signature mismatch for order", razorpay_order_id);
      return new Response(
        JSON.stringify({ verified: false, error: "Signature verification failed" }),
        { status: 400, headers: corsHeaders },
      );
    }

    return new Response(JSON.stringify({ verified: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("verify-payment error", error);
    return new Response(
      JSON.stringify({ verified: false, error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: corsHeaders },
    );
  }
});
