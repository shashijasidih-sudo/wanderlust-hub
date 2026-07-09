import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

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
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAnonKey =
      Deno.env.get("SUPABASE_ANON_KEY") || Deno.env.get("ANON_KEY") || "";
    const RAZORPAY_KEY_ID = Deno.env.get("RAZORPAY_KEY_ID")?.trim();
    const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET")?.trim();

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      console.error("Missing Razorpay secrets");
      return new Response(
        JSON.stringify({ error: "Server not configured: missing Razorpay credentials" }),
        { status: 500, headers: corsHeaders },
      );
    }

    // ---- Admin auth ----
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: corsHeaders,
      });
    }
    const token = authHeader.replace("Bearer ", "");

    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: claimsData, error: authError } = await userClient.auth.getClaims(token);
    if (authError || !claimsData?.claims) {
      console.error("Auth error:", authError);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: corsHeaders,
      });
    }
    const userId = claimsData.claims.sub as string;

    const adminClient = createClient(supabaseUrl, supabaseServiceKey);
    const { data: profile, error: profileError } = await adminClient
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .maybeSingle();

    if (
      profileError ||
      !(profile?.role === "admin" || profile?.role === "super_admin")
    ) {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: corsHeaders,
      });
    }

    // ---- Parse body ----
    const body = await req.json().catch(() => ({}));
    const { payment_id, amount, booking_id } = body || {};

    if (!payment_id) {
      return new Response(
        JSON.stringify({ error: "Missing payment_id" }),
        { status: 400, headers: corsHeaders },
      );
    }

    // amount from client is in rupees (matches admin display); Razorpay expects paise
    const amountPaise =
      typeof amount === "number" && amount > 0
        ? Math.round(amount * 100)
        : undefined;

    // ---- Call Razorpay Refund API ----
    const basicAuth = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
    const rzpRes = await fetch(
      `https://api.razorpay.com/v1/payments/${encodeURIComponent(payment_id)}/refund`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicAuth}`,
        },
        body: JSON.stringify({
          ...(amountPaise ? { amount: amountPaise } : {}),
          speed: "normal",
          notes: booking_id ? { booking_id: String(booking_id) } : undefined,
        }),
      },
    );

    const rzpText = await rzpRes.text();
    let rzpData: any = {};
    try {
      rzpData = rzpText ? JSON.parse(rzpText) : {};
    } catch {
      rzpData = { raw: rzpText };
    }

    if (!rzpRes.ok) {
      console.error("Razorpay refund failed:", rzpRes.status, rzpData);
      const msg =
        rzpData?.error?.description ||
        rzpData?.error?.reason ||
        `Razorpay refund failed (${rzpRes.status})`;
      return new Response(JSON.stringify({ error: msg, details: rzpData }), {
        status: rzpRes.status,
        headers: corsHeaders,
      });
    }

    return new Response(
      JSON.stringify({ ok: true, refund: rzpData }),
      { status: 200, headers: corsHeaders },
    );
  } catch (error) {
    console.error("refund-payment error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: corsHeaders },
    );
  }
});
