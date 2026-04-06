import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

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
    const body = await req.json();
    const {
      payment_id,
      order_id,
      amount,
      customer_name,
      customer_email,
      customer_phone,
      tour_name,
      tour_slug,
      tour_date,
      adults,
      children,
      special_requests,
      user_id,
    } = body;

    // Validate required fields
    if (!payment_id || !user_id || !tour_name || !tour_slug || !tour_date || !customer_name || !customer_email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Convert amount from paise to currency units
    const totalPrice = Number(amount) / 100;

    const { data, error } = await supabase.from("bookings").insert({
      user_id,
      contact_name: customer_name,
      contact_email: customer_email,
      contact_phone: customer_phone || null,
      total_price: totalPrice,
      currency: "INR",
      status: "confirmed",
      tour_name,
      tour_slug,
      tour_date,
      adults: adults || 1,
      children: children || 0,
      special_requests: special_requests || null,
    }).select().single();

    if (error) {
      console.error("Database insert error:", error);
      return new Response(JSON.stringify({ error: "Failed to save booking", details: error.message }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    console.log("Booking saved successfully:", data.id);

    return new Response(JSON.stringify({ success: true, booking: data }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Save booking error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
