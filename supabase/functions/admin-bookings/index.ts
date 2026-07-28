import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json",
};



serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAnonKey = Deno.env.get("ANON_KEY")!;

    // Verify the caller is an admin
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
    }

    const token = authHeader.replace("Bearer ", "");

    // Use a client that passes the auth header so getClaims works with Lovable's signing keys
    const userClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const { data, error: authError } = await userClient.auth.getClaims(token);

    if (authError || !data?.claims) {
      console.error("Auth error:", authError);
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
    }

    const userId = data.claims.sub as string;

    // Use service role to bypass RLS
    const adminClient = createClient(supabaseUrl, supabaseServiceKey);

    // Verify admin role via profiles table
    const { data: profile, error: profileError } = await adminClient
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .maybeSingle();

    if (profileError || !(profile?.role === "admin" || profile?.role === "super_admin")) {
      return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403, headers: corsHeaders });
    }

    // Fetch ALL bookings (newest first)
    const { data: bookingRows, error } = await adminClient
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch error:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
    }

    const bookingList = bookingRows ?? [];

    // Fetch all booking_items for those bookings and group them by booking_id.
    // Bookings with zero items simply get an empty array (backward compatible).
    const itemsByBooking: Record<string, unknown[]> = {};
    if (bookingList.length > 0) {
      const ids = bookingList.map((b: { id: string }) => b.id);
      const { data: items, error: itemsError } = await adminClient
        .from("booking_items")
        .select("*")
        .in("booking_id", ids)
        .order("created_at", { ascending: true });

      if (itemsError) {
        // Old databases may not have booking_items yet — don't fail the dashboard.
        console.error("booking_items fetch error:", itemsError);
      } else {
        for (const item of items ?? []) {
          const key = (item as { booking_id: string }).booking_id;
          (itemsByBooking[key] ||= []).push(item);
        }
      }
    }

    const bookings = bookingList.map((b: { id: string }) => ({
      ...b,
      booking_items: itemsByBooking[b.id] ?? [],
    }));

    return new Response(JSON.stringify({ bookings }), { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("Admin bookings error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500, headers: corsHeaders });
  }
});
