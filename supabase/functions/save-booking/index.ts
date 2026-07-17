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

    // NOTE: The production `bookings` table does NOT have `payment_id` or `order_id` columns.
    // We embed those refs inside `item_details` for traceability and use booking_number for idempotency.
    // If you later add the columns via migration, re-enable the block below.

    // Collision-proof booking number generator: YL-<YY><MM><DD>-<8hex>
    const genBookingNumber = () => {
      const d = new Date();
      const yy = String(d.getUTCFullYear()).slice(-2);
      const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(d.getUTCDate()).padStart(2, "0");
      const rand = crypto.randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase();
      return `YL-${yy}${mm}${dd}-${rand}`;
    };

    // Merge payment/order refs into item_details so we don't lose the audit trail
    // even though the table doesn't have dedicated columns for them.
    const mergedItemDetails = {
      ...(body.item_details && typeof body.item_details === "object" && !Array.isArray(body.item_details)
        ? body.item_details
        : { items: body.item_details ?? null }),
      payment_id: payment_id || null,
      order_id: order_id || null,
    };

    const baseBookingData: Record<string, unknown> = {
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
      item_details: mergedItemDetails,
    };

    // Retry loop:
    //  - 23505 (unique violation on booking_number)  -> regenerate booking_number
    //  - 42703 / PGRST204 (missing column)           -> drop the offending column and retry
    let data: any = null;
    let error: any = null;
    const workingData: Record<string, unknown> = { ...baseBookingData };
    const droppedCols: string[] = [];

    // Extract the offending column name from Postgres/PostgREST error messages.
    const extractMissingCol = (err: any): string | null => {
      const msg: string = (err?.message || "") + " " + (err?.details || "") + " " + (err?.hint || "");
      // e.g. "Could not find the 'foo' column of 'bookings' in the schema cache"
      let m = msg.match(/'([^']+)' column/);
      if (m) return m[1];
      // e.g. "column bookings.foo does not exist" / "column \"foo\" of relation"
      m = msg.match(/column\s+(?:"?[\w]+"?\.)?"?([\w]+)"?\s+(?:does not exist|of relation)/i);
      if (m) return m[1];
      return null;
    };

    for (let attempt = 0; attempt < 12; attempt++) {
      const bookingData: Record<string, unknown> = {
        ...workingData,
        booking_number: genBookingNumber(),
      };
      const res = await supabase.from("bookings").insert([bookingData]).select().single();
      data = res.data;
      error = res.error;
      if (!error) break;

      const code = (error as any).code;
      if (code === "23505") {
        console.warn(`booking_number collision on attempt ${attempt + 1}, retrying...`);
        continue;
      }
      if (code === "42703" || code === "PGRST204") {
        const col = extractMissingCol(error);
        if (col && col in workingData) {
          console.warn(`Column '${col}' missing on bookings table — dropping and retrying.`);
          delete workingData[col];
          droppedCols.push(col);
          continue;
        }
        console.error("Missing column reported but could not parse name:", error);
      }
      break;
    }

    if (droppedCols.length) {
      console.warn("Inserted without columns not present in production schema:", droppedCols);
    }



    if (error) {
      console.error("Database insert error:", error);
      return new Response(JSON.stringify({ error: "Failed to save booking", details: (error as any).message }), {
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
          body: JSON.stringify({ bookingId, paymentId: payment_id || null, orderId: order_id || null }),
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
