import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const MAX_ITEMS = 10;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    console.log("save-booking body:", JSON.stringify(body).slice(0, 4000));

    const {
      payment_id, order_id, user_id,
      tour_name, tour_slug, tour_date, total_price,
      contact_name, contact_email, contact_phone,
      adults, children, currency, special_requests,
      items, // NEW: optional array of booking_items payloads
    } = body;

    if (!tour_name || !total_price || !contact_email) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: corsHeaders });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const itemsArray: any[] = Array.isArray(items) ? items.slice(0, MAX_ITEMS) : [];

    const mergedItemDetails = {
      payment_id: payment_id || null,
      order_id: order_id || null,
      items_summary: itemsArray.map((it) => ({
        name: it.activity_name, slug: it.activity_slug, price: it.price,
      })),
    };

    const parentInsert: Record<string, unknown> = {
      user_id: user_id || null,
      contact_name: contact_name || "",
      contact_email,
      contact_phone: contact_phone || null,
      total_price: Number(total_price),
      currency: currency || "INR",
      status: "confirmed",
      payment_status: "paid",
      tour_name,
      tour_slug: tour_slug || "",
      tour_date: tour_date || null,
      adults: adults || 1,
      children: children || 0,
      special_requests: special_requests || null,
      item_details: mergedItemDetails,
    };

    const { data: booking, error: bookingErr } = await supabase
      .from("bookings").insert([parentInsert]).select().single();

    if (bookingErr) {
      console.error("Booking insert error:", bookingErr);
      return new Response(JSON.stringify({ error: "Failed to save booking", details: bookingErr.message }), {
        status: 500, headers: corsHeaders,
      });
    }

    const bookingId = booking.id;

    // Insert booking_items
    if (itemsArray.length > 0) {
      const rows = itemsArray.map((it) => ({
        booking_id: bookingId,
        product_id: it.product_id ?? null,
        product_type: it.product_type || "activity",
        activity_name: it.activity_name || tour_name,
        activity_slug: it.activity_slug || tour_slug || null,
        image_url: it.image_url ?? null,
        destination: it.destination ?? null,
        travel_date: it.travel_date || tour_date || null,
        quantity: it.quantity ?? 1,
        adults: it.adults ?? 1,
        children: it.children ?? 0,
        price: Number(it.price ?? 0),
        currency: it.currency || currency || "INR",
        status: "confirmed",
        pickup_required: !!it.pickup_required,
        pickup_type: it.pickup_type ?? null,
        hotel_name: it.hotel_name ?? null,
        pickup_location: it.pickup_location ?? null,
        country: it.country ?? null,
        meeting_point: it.meeting_point ?? null,
        pickup_time: it.pickup_time ?? null,
        drop_location: it.drop_location ?? null,
        flight_number: it.flight_number ?? null,
        airline: it.airline ?? null,
        terminal: it.terminal ?? null,
        special_requests: it.special_requests ?? null,
        item_details: it.item_details ?? {},
      }));
      const { error: itemsErr } = await supabase.from("booking_items").insert(rows);
      if (itemsErr) console.error("booking_items insert error:", itemsErr);
    } else {
      // Legacy fallback: derive a single item from top-level fields
      await supabase.from("booking_items").insert([{
        booking_id: bookingId,
        product_type: "activity",
        activity_name: tour_name,
        activity_slug: tour_slug || null,
        destination: null,
        travel_date: tour_date || null,
        quantity: 1,
        adults: adults || 1,
        children: children || 0,
        price: Number(total_price),
        currency: currency || "INR",
        pickup_required: false,
        item_details: { payment_id: payment_id || null, order_id: order_id || null },
      }]);
    }

    // Trigger send-confirmation
    if (bookingId) {
      try {
        await fetch(`${supabaseUrl}/functions/v1/send-confirmation`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${supabaseServiceKey}` },
          body: JSON.stringify({ bookingId, paymentId: payment_id || null, orderId: order_id || null }),
        });
      } catch (e) {
        console.error("send-confirmation call failed:", e);
      }
    }

    return new Response(JSON.stringify({ success: true, booking }), { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("save-booking error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500, headers: corsHeaders,
    });
  }
});
