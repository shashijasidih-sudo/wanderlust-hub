import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: corsHeaders });
  }

  try {
    const SMTP_HOST = Deno.env.get("SMTP_HOST")?.trim() || "";
    const SMTP_PORT = Number(Deno.env.get("SMTP_PORT")?.trim() || "465");
    const SMTP_USERNAME = Deno.env.get("SMTP_USERNAME")?.trim() || "";
    const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD") || "";
    const SMTP_FROM = Deno.env.get("SMTP_FROM")?.trim() || SMTP_USERNAME;

    if (!SMTP_HOST || !SMTP_USERNAME || !SMTP_PASSWORD) {
      console.error("SMTP not configured", { hasHost: !!SMTP_HOST, hasUser: !!SMTP_USERNAME, hasPass: !!SMTP_PASSWORD });
      return new Response(
        JSON.stringify({ error: "Email service not configured (SMTP secrets missing)" }),
        { status: 500, headers: corsHeaders },
      );
    }

    const { to, subject, html, replyTo } = await req.json();
    if (!to || !subject || !html) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: to, subject, html" }),
        { status: 400, headers: corsHeaders },
      );
    }

    const client = new SMTPClient({
      connection: {
        hostname: SMTP_HOST,
        port: SMTP_PORT,
        tls: SMTP_PORT === 465,
        auth: { username: SMTP_USERNAME, password: SMTP_PASSWORD },
      },
    });

    try {
      await client.send({
        from: `Yellodae <${SMTP_FROM}>`,
        to,
        subject,
        html,
        content: "This email requires an HTML-capable client.",
        ...(replyTo ? { replyTo } : {}),
      });
    } finally {
      try {
        const maybe = client.close();
        if (maybe && typeof (maybe as Promise<unknown>).then === "function") {
          await maybe;
        }
      } catch (_) {
        // ignore close errors
      }
    }


    return new Response(JSON.stringify({ success: true, recipient: to }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("send-email SMTP error:", msg);
    return new Response(JSON.stringify({ success: false, error: `SMTP send failed: ${msg}` }), {
      status: 502,
      headers: corsHeaders,
    });
  }
});
