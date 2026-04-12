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
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")?.trim();

    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const { bookingId } = await req.json();

    if (!bookingId) {
      console.error("Missing bookingId in request body");
      return new Response(JSON.stringify({ error: "Missing bookingId" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    console.log("Fetching booking details for ID:", bookingId);

    // Fetch booking details from database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: booking, error: dbError } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", bookingId)
      .single();

    if (dbError || !booking) {
      console.error("Failed to fetch booking:", dbError);
      return new Response(JSON.stringify({ error: "Booking not found", details: dbError?.message }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    console.log("Booking fetched:", JSON.stringify(booking));

    const recipientEmail = booking.contact_email;
    const name = booking.contact_name || "Valued Customer";
    const tourTitle = booking.tour_name || "Tour Booking";
    const date = booking.tour_date || "TBD";
    const adultCount = booking.adults || 1;
    const childCount = booking.children || 0;
    const totalAmount = booking.total_price || 0;
    const curr = booking.currency || "INR";
    const refId = bookingId;

    if (!recipientEmail) {
      console.error("No contact_email found in booking");
      return new Response(JSON.stringify({ error: "Missing email in booking record" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const currencySymbol = curr === "INR" ? "₹" : curr === "USD" ? "$" : curr === "AED" ? "AED " : `${curr} `;

    const invoiceHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation - Yellodae</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#f59e0b,#d97706);padding:32px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:28px;font-weight:bold;">Yellodae</h1>
              <p style="color:#fef3c7;margin:8px 0 0;font-size:14px;">Your Travel Partner</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 16px;text-align:center;">
              <div style="display:inline-block;background:#dcfce7;border:1px solid #86efac;border-radius:50%;width:64px;height:64px;line-height:64px;font-size:32px;margin-bottom:16px;">✓</div>
              <h2 style="color:#16a34a;margin:0 0 8px;font-size:22px;">Booking Confirmed!</h2>
              <p style="color:#6b7280;margin:0;font-size:14px;">Thank you for choosing Yellodae, ${name}!</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;">
              <table width="100%" style="background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
                <tr>
                  <td style="padding:20px;">
                    <h3 style="color:#1f2937;margin:0 0 16px;font-size:16px;border-bottom:2px solid #f59e0b;padding-bottom:8px;">📋 INVOICE</h3>
                    <table width="100%" cellpadding="4" cellspacing="0">
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:4px 0;">Booking Reference</td>
                        <td style="color:#1f2937;font-size:13px;font-weight:bold;text-align:right;padding:4px 0;">${refId}</td>
                      </tr>
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:4px 0;">Tour / Service</td>
                        <td style="color:#1f2937;font-size:13px;font-weight:bold;text-align:right;padding:4px 0;">${tourTitle}</td>
                      </tr>
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:4px 0;">Tour Date</td>
                        <td style="color:#1f2937;font-size:13px;text-align:right;padding:4px 0;">${date}</td>
                      </tr>
                      <tr>
                        <td style="color:#6b7280;font-size:13px;padding:4px 0;">Guests</td>
                        <td style="color:#1f2937;font-size:13px;text-align:right;padding:4px 0;">${adultCount} Adult${adultCount > 1 ? 's' : ''}${childCount > 0 ? `, ${childCount} Child${childCount > 1 ? 'ren' : ''}` : ''}</td>
                      </tr>
                      <tr>
                        <td colspan="2" style="border-top:1px solid #e5e7eb;padding-top:8px;margin-top:8px;"></td>
                      </tr>
                      <tr>
                        <td style="color:#1f2937;font-size:15px;font-weight:bold;padding:4px 0;">Total Amount</td>
                        <td style="color:#f59e0b;font-size:18px;font-weight:bold;text-align:right;padding:4px 0;">${currencySymbol}${Number(totalAmount).toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td style="color:#16a34a;font-size:12px;padding:4px 0;">Payment Status</td>
                        <td style="color:#16a34a;font-size:12px;font-weight:bold;text-align:right;padding:4px 0;">✅ PAID</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;">
              <table width="100%" style="background:#fffbeb;border-radius:8px;border:2px dashed #f59e0b;">
                <tr>
                  <td style="padding:20px;">
                    <h3 style="color:#92400e;margin:0 0 16px;font-size:16px;">🎫 TOUR VOUCHER</h3>
                    <p style="color:#78350f;font-size:13px;margin:0 0 8px;"><strong>Tour:</strong> ${tourTitle}</p>
                    <p style="color:#78350f;font-size:13px;margin:0 0 8px;"><strong>Date:</strong> ${date}</p>
                    <p style="color:#78350f;font-size:13px;margin:0 0 8px;"><strong>Guest Name:</strong> ${name}</p>
                    <p style="color:#78350f;font-size:13px;margin:0 0 8px;"><strong>Guests:</strong> ${adultCount} Adult${adultCount > 1 ? 's' : ''}${childCount > 0 ? ` + ${childCount} Child${childCount > 1 ? 'ren' : ''}` : ''}</p>
                    <p style="color:#78350f;font-size:13px;margin:0 0 0;"><strong>Voucher ID:</strong> ${refId}</p>
                    <hr style="border:none;border-top:1px dashed #d97706;margin:16px 0;">
                    <p style="color:#92400e;font-size:11px;margin:0;text-align:center;font-style:italic;">Present this voucher at the activity counter. Valid for the date mentioned above.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;">
              <h3 style="color:#1f2937;font-size:14px;margin:0 0 12px;">📌 Important Information</h3>
              <ul style="color:#6b7280;font-size:13px;line-height:1.8;padding-left:20px;margin:0;">
                <li>Please carry a valid photo ID</li>
                <li>Arrive 15 minutes before scheduled time</li>
                <li>Our team will contact you 24 hours before pickup</li>
                <li>For queries, email us at <a href="mailto:support@yellodae.com" style="color:#f59e0b;">support@yellodae.com</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style="background:#1f2937;padding:24px 32px;text-align:center;">
              <p style="color:#9ca3af;font-size:12px;margin:0 0 8px;">Yellodae Tours & Travels</p>
              <p style="color:#6b7280;font-size:11px;margin:0;">This is an automated confirmation. Please do not reply to this email.</p>
              <p style="color:#6b7280;font-size:11px;margin:8px 0 0;">
                <a href="https://yellodae.com" style="color:#f59e0b;text-decoration:none;">yellodae.com</a> |
                <a href="mailto:support@yellodae.com" style="color:#f59e0b;text-decoration:none;">support@yellodae.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // Send via Resend
    console.log("Sending email to:", recipientEmail);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Yellodae <noreply@yellodae.com>",
        to: [recipientEmail],
        subject: `Booking Confirmed - ${tourTitle} | Yellodae`,
        html: invoiceHtml,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", data);
      return new Response(JSON.stringify({ success: false, error: data }), {
        status: response.status,
        headers: corsHeaders,
      });
    }

    console.log("Email sent successfully:", data);

    // Also send a copy to admin
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Yellodae <noreply@yellodae.com>",
        to: ["support@yellodae.com"],
        subject: `New Booking - ${tourTitle} | ${name}`,
        html: invoiceHtml,
        reply_to: recipientEmail,
      }),
    }).catch((err) => console.error("Admin notification failed:", err));

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Send confirmation error:", error);
    return new Response(JSON.stringify({ success: false, error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
