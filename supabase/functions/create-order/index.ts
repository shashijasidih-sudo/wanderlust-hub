import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
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
    const RAZORPAY_KEY_ID = Deno.env.get("RAZORPAY_KEY_ID")?.trim();
    const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET")?.trim();

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      console.error("Missing Razorpay credentials", {
        hasKeyId: !!RAZORPAY_KEY_ID,
        hasKeySecret: !!RAZORPAY_KEY_SECRET,
      });
      return new Response(JSON.stringify({ error: "Razorpay credentials not configured" }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const body = await req.json();
    const { amount, currency, customer_name, customer_email, services, booking_date, city, pickup_time } = body;

    if (!amount || Number.isNaN(Number(amount))) {
      return new Response(JSON.stringify({ error: "Invalid amount" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const credentials = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        amount: Math.round(Number(amount)),
        currency: currency || "INR",
        notes: {
          customer_name: customer_name || "",
          customer_email: customer_email || "",
          services: (services || "").substring(0, 512),
          booking_date: booking_date || "",
          city: city || "",
          pickup_time: pickup_time || "",
        },
      }),
    });

    const responseText = await response.text();
    const order = responseText ? JSON.parse(responseText) : null;

    if (!response.ok) {
      console.error("Razorpay API error", {
        status: response.status,
        body: order,
      });
      return new Response(JSON.stringify({ error: "Failed to create order", details: order }), {
        status: response.status,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Edge function error", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
