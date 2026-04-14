import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json",
};

const ADMIN_EMAILS = ["admin@yellodae.com"];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

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

    const userEmail = data.claims.email as string;
    if (!ADMIN_EMAILS.includes(userEmail)) {
      return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403, headers: corsHeaders });
    }

    // Use service role to bypass RLS and fetch ALL bookings
    const adminClient = createClient(supabaseUrl, supabaseServiceKey);
    const { data: bookings, error } = await adminClient
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch error:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
    }

    return new Response(JSON.stringify({ bookings }), { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("Admin bookings error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500, headers: corsHeaders });
  }
});
