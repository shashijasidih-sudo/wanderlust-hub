import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const MAX_ITEMS = 10;

const fail = (status: number, code: string, message: string, details?: unknown) =>
  new Response(JSON.stringify({ success: false, error: message, code, details: details ?? null }), {
    status,
    headers: corsHeaders,
  });

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return fail(405, "method_not_allowed", "Method not allowed");

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  let bookingId: string | null = null;

  try {
    const body = await req.json();
    console.log("save-booking body:", JSON.stringify(body).slice(0, 4000));

    const {
      payment_id, order_id,
      tour_name, tour_slug, tour_date, total_price,
      contact_name, contact_email, contact_phone,
      adults, children, currency, special_requests,
      items,
    } = body;

    if (!tour_name || !total_price || !contact_email) {
      return fail(400, "missing_fields", "Missing required booking fields (tour name, amount or contact email).");
    }

    // ---- Ownership: derive the user from the bearer token, never from the body ----
    let ownerId: string | null = null;
    const authHeader = req.headers.get("Authorization") || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    if (token && token !== supabaseAnonKey && token !== supabaseServiceKey) {
      const authClient = createClient(supabaseUrl, supabaseAnonKey, {
        global: { headers: { Authorization: `Bearer ${token}` } },
      });
      const { data: userData } = await authClient.auth.getUser();
      ownerId = userData?.user?.id ?? null;
      if (!ownerId) {
        return fail(401, "invalid_session", "Your session has expired. Please sign in again and retry — your payment has not been lost.");
      }
    }
    // ownerId stays null only for genuine guest checkouts (no bearer token).

    // ---- Idempotency: never create a duplicate booking for the same payment ----
    if (payment_id) {
      const { data: existing } = await supabase
        .from("bookings")
        .select("*")
        .eq("item_details->>payment_id", payment_id)
        .maybeSingle();
      if (existing) {
        console.log("save-booking: idempotent hit for payment", payment_id);
        return new Response(JSON.stringify({ success: true, booking: existing, idempotent: true }), {
          status: 200, headers: corsHeaders,
        });
      }
    }

    // ---- Build the item rows (always at least one) ----
    const rawItems: any[] = Array.isArray(items) ? items : [];
    if (rawItems.length > MAX_ITEMS) {
      return fail(400, "too_many_items", `A booking can contain at most ${MAX_ITEMS} items. Please split your order.`);
    }

    const itemRows = (rawItems.length > 0 ? rawItems : [{
      product_type: "activity",
      activity_name: tour_name,
      activity_slug: tour_slug || null,
      travel_date: tour_date || null,
      quantity: 1,
      adults: adults || 1,
      children: children || 0,
      price: Number(total_price),
      currency: currency || "INR",
      pickup_required: false,
      special_requests: special_requests || null,
      item_details: { payment_id: payment_id || null, order_id: order_id || null, legacy_single_item: true },
    }]).map((it) => ({
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

    const parentInsert: Record<string, unknown> = {
      user_id: ownerId,
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
      item_details: {
        payment_id: payment_id || null,
        order_id: order_id || null,
        items_summary: itemRows.map((it) => ({ name: it.activity_name, slug: it.activity_slug, price: it.price })),
      },
    };

    // ---- Preferred path: single-transaction RPC (parent + items or nothing) ----
    let booking: any = null;
    const { data: rpcBooking, error: rpcErr } = await supabase.rpc("create_booking_with_items", {
      _booking: parentInsert,
      _items: itemRows,
    });

    if (!rpcErr && rpcBooking) {
      booking = Array.isArray(rpcBooking) ? rpcBooking[0] : rpcBooking;
    } else {
      const rpcMissing =
        !!rpcErr && /could not find the function|does not exist|PGRST202/i.test(
          `${rpcErr.message} ${(rpcErr as any).code ?? ""}`,
        );
      if (rpcErr && !rpcMissing) {
        console.error("create_booking_with_items failed:", rpcErr);
        return fail(500, "booking_transaction_failed", "We could not save your booking. No booking was created — please contact support with your payment ID.", rpcErr.message);
      }

      // ---- Fallback path (RPC not deployed yet): insert + compensating delete ----
      console.warn("create_booking_with_items RPC unavailable — using compensating-transaction fallback");

      const { data: parent, error: bookingErr } = await supabase
        .from("bookings").insert([parentInsert]).select().single();

      if (bookingErr || !parent) {
        console.error("Booking insert error:", bookingErr);
        return fail(500, "booking_insert_failed", "We could not save your booking. No booking was created — please contact support with your payment ID.", bookingErr?.message);
      }

      bookingId = parent.id;

      const { error: itemsErr } = await supabase
        .from("booking_items")
        .insert(itemRows.map((r) => ({ ...r, booking_id: parent.id })));

      if (itemsErr) {
        console.error("booking_items insert failed — rolling back booking", parent.id, itemsErr);
        const { error: rollbackErr } = await supabase.from("bookings").delete().eq("id", parent.id);
        if (rollbackErr) console.error("ROLLBACK FAILED — orphan booking", parent.id, rollbackErr);
        return fail(500, "booking_items_insert_failed",
          "We could not save the details of your booked experiences, so the booking was cancelled to avoid an incomplete record. Your payment is safe — please contact support with your payment ID.",
          itemsErr.message);
      }

      booking = parent;
    }

    bookingId = booking?.id ?? null;
    if (!bookingId) {
      return fail(500, "booking_missing_id", "The booking was not saved correctly. Please contact support with your payment ID.");
    }

    // ---- Confirmation email (non-fatal: booking is already complete) ----
    try {
      await fetch(`${supabaseUrl}/functions/v1/send-confirmation`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${supabaseServiceKey}` },
        body: JSON.stringify({ bookingId, paymentId: payment_id || null, orderId: order_id || null }),
      });
    } catch (e) {
      console.error("send-confirmation call failed:", e);
    }

    return new Response(JSON.stringify({ success: true, booking }), { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("save-booking error:", error);
    if (bookingId) {
      const { error: rollbackErr } = await supabase.from("bookings").delete().eq("id", bookingId);
      if (rollbackErr) console.error("ROLLBACK FAILED — orphan booking", bookingId, rollbackErr);
    }
    return fail(500, "unexpected_error",
      "Something went wrong while saving your booking. Your payment is safe — please contact support with your payment ID.",
      error instanceof Error ? error.message : "Unknown error");
  }
});
