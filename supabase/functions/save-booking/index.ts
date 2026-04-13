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
    console.log("Received body:", JSON.stringify(body));

    const {
      payment_id,
      order_id,
      user_id,
      tour_name,
      tour_slug,
      tour_date,
      total_price,
      contact_name,
      contact_email,
      contact_phone,
      adults,
      children,
      currency,
      special_requests,
    } = body;

    // Validate required fields
    if (!tour_name || !tour_date || !total_price || !contact_email) {
      console.error("Missing required fields:", { tour_name, tour_date, total_price, contact_email });
      return new Response(JSON.stringify({ error: "Missing required fields", details: { tour_name: !!tour_name, tour_date: !!tour_date, total_price: !!total_price, contact_email: !!contact_email } }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const bookingData = {
      user_id: user_id || null,
      contact_name: contact_name || "",
      contact_email,
      contact_phone: contact_phone || null,
      total_price: Number(total_price),
      currency: currency || "INR",
      status: "confirmed",
      tour_name,
      tour_slug: tour_slug || "",
      tour_date,
      adults: adults || 1,
      children: children || 0,
      special_requests: special_requests || null,
      item_details: body.item_details || null,
    };

    const { data, error } = await supabase
      .from("bookings")
      .insert([bookingData])
      .select()
      .single();

    if (error) {
      console.error("Database insert error:", error);
      return new Response(JSON.stringify({ error: "Failed to save booking", details: error.message }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const bookingId = data?.id;
    console.log("Returned booking:", JSON.stringify(data));
    console.log("Booking saved successfully, ID:", bookingId);

    // Trigger send-confirmation server-side
    if (bookingId) {
      console.log("Calling send-confirmation with bookingId:", bookingId);
      const supabaseFunctionsUrl = `${supabaseUrl}/functions/v1`;
      try {
        const confirmRes = await fetch(`${supabaseFunctionsUrl}/send-confirmation`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${supabaseServiceKey}`,
          },
          body: JSON.stringify({ bookingId }),
        });
        const confirmData = await confirmRes.text();
        console.log("send-confirmation response:", confirmRes.status, confirmData);
      } catch (confirmErr) {
        console.error("send-confirmation call failed:", confirmErr);
      }
    } else {
      console.error("Booking ID missing — email not triggered");
    }

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
