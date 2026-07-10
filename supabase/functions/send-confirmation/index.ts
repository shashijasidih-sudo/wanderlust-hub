import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

// ---- Hostinger SMTP ----
const SMTP_HOST = Deno.env.get("SMTP_HOST")?.trim() || "";
const SMTP_PORT = Number(Deno.env.get("SMTP_PORT")?.trim() || "465");
const SMTP_USERNAME = Deno.env.get("SMTP_USERNAME")?.trim() || "";
const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD") || "";
const SMTP_FROM = Deno.env.get("SMTP_FROM")?.trim() || SMTP_USERNAME;

async function smtpSend(to: string, subject: string, html: string, replyTo?: string) {
  if (!SMTP_HOST || !SMTP_USERNAME || !SMTP_PASSWORD) {
    throw new Error("SMTP not configured (missing SMTP_HOST/USERNAME/PASSWORD)");
  }
  const client = new SMTPClient({
    connection: {
      hostname: SMTP_HOST,
      port: SMTP_PORT,
      // Port 465 = implicit TLS; 587 = STARTTLS (denomailer negotiates automatically when tls:false)
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
}


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

// Brand tokens
const BRAND = {
  primary: "#f59e0b", // amber-500
  primaryDark: "#d97706", // amber-600
  ink: "#111827",
  text: "#374151",
  muted: "#6b7280",
  border: "#e5e7eb",
  surface: "#f9fafb",
  soft: "#fff7ed",
  success: "#16a34a",
  bg: "#f3f4f6",
};

const SITE = "https://yellodae.com";
const LOGO_URL = "https://yellodae.com/favicon.png";

function money(amount: number, curr: string) {
  const sym = curr === "INR" ? "₹" : curr === "USD" ? "$" : curr === "AED" ? "AED " : curr === "THB" ? "฿" : curr === "SGD" ? "S$" : `${curr} `;
  return `${sym}${Number(amount).toLocaleString("en-IN")}`;
}


function detectDestination(slug: string, tourName: string): string {
  const cities = ["Bangkok", "Phuket", "Pattaya", "Krabi", "Chiang Mai", "Bali", "Dubai", "Singapore", "Abu Dhabi"];
  const hay = `${slug} ${tourName}`.toLowerCase();
  for (const c of cities) if (hay.includes(c.toLowerCase())) return c;
  return "Your Destination";
}

function shell(inner: string, previewText: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light">
<title>Yellodae</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${BRAND.text};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${previewText}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 16px rgba(17,24,39,0.06);">
<tr><td style="background:linear-gradient(135deg,${BRAND.primary},${BRAND.primaryDark});padding:32px 32px;text-align:center;">
  <img src="${LOGO_URL}" alt="Yellodae" width="52" height="52" style="display:inline-block;width:52px;height:52px;border-radius:12px;background:#ffffff;padding:6px;" />
  <h1 style="color:#ffffff;margin:12px 0 4px;font-size:26px;font-weight:800;letter-spacing:-0.5px;">Yellodae</h1>
  <p style="color:#fff7ed;margin:0;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;">Curated Travel Experiences</p>
</td></tr>
${inner}
<tr><td style="background:${BRAND.ink};padding:24px 32px;text-align:center;">
  <p style="color:#d1d5db;font-size:13px;margin:0 0 6px;font-weight:600;">Yellodae Tours &amp; Travels</p>
  <p style="color:#9ca3af;font-size:11px;margin:0 0 10px;">Need help? Email <a href="mailto:support@yellodae.com" style="color:${BRAND.primary};text-decoration:none;">support@yellodae.com</a> or WhatsApp +91 7061710810</p>
  <p style="color:#6b7280;font-size:11px;margin:0;">
    <a href="${SITE}" style="color:${BRAND.primary};text-decoration:none;">yellodae.com</a>
  </p>
</td></tr>
</table>
<p style="color:${BRAND.muted};font-size:11px;margin:14px 0 0;">© ${new Date().getFullYear()} Yellodae. All rights reserved.</p>
</td></tr></table>
</body></html>`;
}

interface CustomerParams {
  name: string;
  tourTitle: string;
  destination: string;
  bookingId: string;
  bookingShort: string;
  tourDate: string;
  guests: string;
  amount: string;
  status: string;
  viewUrl: string;
  supportUrl: string;
  exploreUrl: string;
}

function customerEmail(p: CustomerParams) {
  const row = (label: string, value: string, opts?: { strong?: boolean; color?: string }) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};color:${BRAND.muted};font-size:13px;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};color:${opts?.color || BRAND.ink};font-size:14px;font-weight:${opts?.strong ? 700 : 500};text-align:right;">${value}</td>
    </tr>`;

  const inner = `
<tr><td style="padding:36px 32px 8px;text-align:center;">
  <div style="display:inline-block;background:#dcfce7;border-radius:999px;padding:10px 18px;color:${BRAND.success};font-size:12px;font-weight:700;letter-spacing:0.5px;">✓ BOOKING CONFIRMED</div>
  <h1 style="color:${BRAND.ink};margin:18px 0 6px;font-size:26px;line-height:1.25;font-weight:800;">You're all set, ${p.name}!</h1>
  <p style="color:${BRAND.muted};margin:0;font-size:15px;line-height:1.5;">Your ${p.destination} experience is booked. We've saved your spot and shared the details below.</p>
</td></tr>

<tr><td style="padding:24px 32px 8px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.soft};border:1px solid #fed7aa;border-radius:12px;">
    <tr><td style="padding:20px 22px;">
      <p style="margin:0 0 4px;color:${BRAND.primaryDark};font-size:11px;font-weight:700;letter-spacing:1px;">ACTIVITY</p>
      <p style="margin:0;color:${BRAND.ink};font-size:17px;font-weight:700;line-height:1.35;">${p.tourTitle}</p>
      <p style="margin:6px 0 0;color:${BRAND.muted};font-size:13px;">📍 ${p.destination}</p>
    </td></tr>
  </table>
</td></tr>

<tr><td style="padding:16px 32px 8px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    ${row("Booking ID", `<span style="font-family:monospace;">${p.bookingShort}</span>`, { strong: true })}
    ${row("Travel Date", p.tourDate, { strong: true })}
    ${row("Guests", p.guests)}
    ${row("Booking Status", `<span style="color:${BRAND.success};font-weight:700;">${p.status.toUpperCase()}</span>`)}
    <tr>
      <td style="padding:14px 0 4px;color:${BRAND.ink};font-size:15px;font-weight:700;">Amount Paid</td>
      <td style="padding:14px 0 4px;color:${BRAND.primaryDark};font-size:20px;font-weight:800;text-align:right;">${p.amount}</td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:24px 32px 8px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding-bottom:12px;">
        <a href="${p.viewUrl}" style="display:inline-block;background:${BRAND.primary};color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:10px;font-weight:700;font-size:15px;">View Booking</a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="${p.supportUrl}" style="display:inline-block;background:#ffffff;color:${BRAND.ink};text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:600;font-size:14px;border:1.5px solid ${BRAND.border};margin:0 4px 8px;">Contact Support</a>
        <a href="${p.exploreUrl}" style="display:inline-block;background:#ffffff;color:${BRAND.ink};text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:600;font-size:14px;border:1.5px solid ${BRAND.border};margin:0 4px 8px;">Explore More Activities</a>
      </td>
    </tr>
  </table>
</td></tr>

<tr><td style="padding:16px 32px 32px;">
  <div style="background:${BRAND.surface};border-radius:10px;padding:18px 20px;">
    <p style="margin:0 0 8px;color:${BRAND.ink};font-size:13px;font-weight:700;">Need help with your booking?</p>
    <p style="margin:0;color:${BRAND.muted};font-size:13px;line-height:1.6;">
      Email <a href="mailto:support@yellodae.com" style="color:${BRAND.primaryDark};">support@yellodae.com</a> or WhatsApp
      <a href="https://wa.me/917061710810" style="color:${BRAND.primaryDark};">+91 7061710810</a>.
      Our team responds within a few hours, 7 days a week.
    </p>
  </div>
</td></tr>`;

  return shell(inner, `Booking confirmed: ${p.tourTitle} on ${p.tourDate}`);
}

interface SupportParams extends CustomerParams {
  customerEmail: string;
  customerPhone: string;
  paymentId: string;
  orderId: string;
  bookedAt: string;
  specialRequests: string;
}

function supportEmail(p: SupportParams) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:9px 0;border-bottom:1px solid ${BRAND.border};color:${BRAND.muted};font-size:13px;width:42%;">${label}</td>
      <td style="padding:9px 0;border-bottom:1px solid ${BRAND.border};color:${BRAND.ink};font-size:14px;font-weight:600;text-align:right;">${value}</td>
    </tr>`;

  const inner = `
<tr><td style="padding:32px 32px 8px;text-align:center;">
  <div style="display:inline-block;background:#fef3c7;border-radius:999px;padding:8px 16px;color:${BRAND.primaryDark};font-size:11px;font-weight:700;letter-spacing:1px;">NEW BOOKING RECEIVED</div>
  <h1 style="color:${BRAND.ink};margin:16px 0 4px;font-size:22px;font-weight:800;">${p.tourTitle}</h1>
  <p style="color:${BRAND.muted};margin:0;font-size:13px;">📍 ${p.destination}</p>
</td></tr>

<tr><td style="padding:20px 32px 8px;">
  <h3 style="color:${BRAND.ink};margin:0 0 8px;font-size:13px;letter-spacing:0.5px;text-transform:uppercase;">Customer</h3>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    ${row("Name", p.name)}
    ${row("Email", `<a href="mailto:${p.customerEmail}" style="color:${BRAND.primaryDark};text-decoration:none;">${p.customerEmail}</a>`)}
    ${p.customerPhone ? row("Phone", `<a href="tel:${p.customerPhone}" style="color:${BRAND.primaryDark};text-decoration:none;">${p.customerPhone}</a>`) : ""}
  </table>
</td></tr>

<tr><td style="padding:20px 32px 8px;">
  <h3 style="color:${BRAND.ink};margin:0 0 8px;font-size:13px;letter-spacing:0.5px;text-transform:uppercase;">Booking</h3>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    ${row("Booking ID", `<span style="font-family:monospace;">${p.bookingId}</span>`)}
    ${row("Activity", p.tourTitle)}
    ${row("Travel Date", p.tourDate)}
    ${row("Guests", p.guests)}
    ${row("Status", `<span style="color:${BRAND.success};">${p.status.toUpperCase()}</span>`)}
  </table>
</td></tr>

<tr><td style="padding:20px 32px 8px;">
  <h3 style="color:${BRAND.ink};margin:0 0 8px;font-size:13px;letter-spacing:0.5px;text-transform:uppercase;">Payment</h3>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding:9px 0;border-bottom:1px solid ${BRAND.border};color:${BRAND.muted};font-size:13px;">Amount</td>
      <td style="padding:9px 0;border-bottom:1px solid ${BRAND.border};color:${BRAND.primaryDark};font-size:16px;font-weight:800;text-align:right;">${p.amount}</td>
    </tr>
    ${p.paymentId ? row("Payment ID", `<span style="font-family:monospace;">${p.paymentId}</span>`) : ""}
    ${p.orderId ? row("Order ID", `<span style="font-family:monospace;">${p.orderId}</span>`) : ""}
    ${row("Booked At", p.bookedAt)}
  </table>
</td></tr>

${p.specialRequests ? `
<tr><td style="padding:20px 32px 8px;">
  <h3 style="color:${BRAND.ink};margin:0 0 8px;font-size:13px;letter-spacing:0.5px;text-transform:uppercase;">Special Requests</h3>
  <div style="background:${BRAND.surface};border-left:3px solid ${BRAND.primary};padding:12px 14px;border-radius:6px;color:${BRAND.text};font-size:13px;line-height:1.6;">${p.specialRequests}</div>
</td></tr>` : ""}

<tr><td style="padding:24px 32px 32px;" align="center">
  <a href="${p.viewUrl}" style="display:inline-block;background:${BRAND.primary};color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:700;font-size:14px;">Open in Admin</a>
</td></tr>`;

  return shell(inner, `New booking · ${p.name} · ${p.tourTitle}`);
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: corsHeaders });

  try {
    if (!SMTP_HOST || !SMTP_USERNAME || !SMTP_PASSWORD) {
      console.error("SMTP not configured", { hasHost: !!SMTP_HOST, hasUser: !!SMTP_USERNAME, hasPass: !!SMTP_PASSWORD });
      return new Response(JSON.stringify({ error: "Email service not configured (SMTP secrets missing)" }), { status: 500, headers: corsHeaders });
    }

    const { bookingId, paymentId, orderId, type } = await req.json();
    if (!bookingId) return new Response(JSON.stringify({ error: "Missing bookingId" }), { status: 400, headers: corsHeaders });
    const emailType: "confirmation" | "cancellation" | "refund" =
      type === "cancellation" || type === "refund" ? type : "confirmation";

    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data: booking, error: dbError } = await supabase.from("bookings").select("*").eq("id", bookingId).single();

    if (dbError || !booking) {
      return new Response(JSON.stringify({ error: "Booking not found", details: dbError?.message }), { status: 404, headers: corsHeaders });
    }

    const recipientEmail = booking.contact_email;
    if (!recipientEmail) {
      return new Response(JSON.stringify({ error: "Missing email in booking record" }), { status: 400, headers: corsHeaders });
    }

    const name = booking.contact_name || "Valued Traveler";
    const tourTitle = booking.tour_name || "Tour Booking";
    const tourSlug = booking.tour_slug || "";
    const destination = detectDestination(tourSlug, tourTitle);
    const rawDate = booking.tour_date || "";
    const tourDate = rawDate
      ? new Date(rawDate).toLocaleDateString("en-IN", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })
      : "TBD";
    const bookedAt = booking.created_at
      ? new Date(booking.created_at).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
      : "-";
    const adultCount = booking.adults || 1;
    const childCount = booking.children || 0;
    const guests = `${adultCount} Adult${adultCount > 1 ? "s" : ""}${childCount > 0 ? `, ${childCount} Child${childCount > 1 ? "ren" : ""}` : ""}`;
    const amount = money(booking.total_price || 0, booking.currency || "INR");
    const status = booking.status || "confirmed";
    const bookingShort = String(bookingId).slice(0, 8).toUpperCase();

    const viewUrl = `${SITE}/booking/${bookingId}`;
    const supportUrl = `mailto:support@yellodae.com?subject=${encodeURIComponent(`Help with booking ${bookingShort}`)}`;
    const exploreUrl = `${SITE}/${(destination || "thailand").toLowerCase().replace(/\s+/g, "-")}`;

    const customerHtml = customerEmail({
      name, tourTitle, destination, bookingId, bookingShort, tourDate, guests, amount, status, viewUrl, supportUrl, exploreUrl,
    });

    const supportHtml = supportEmail({
      name, tourTitle, destination, bookingId, bookingShort, tourDate, guests, amount, status, viewUrl, supportUrl, exploreUrl,
      customerEmail: recipientEmail,
      customerPhone: booking.contact_phone || "",
      paymentId: paymentId || "",
      orderId: orderId || "",
      bookedAt,
      specialRequests: booking.special_requests || "",
    });

    const sendMail = smtpSend;

    // Build subject + body per email type
    let customerSubject = `Booking Confirmed · ${tourTitle} · Yellodae`;
    let customerBody = customerHtml;
    let supportSubject = `🆕 New Booking · ${name} · ${tourTitle}`;

    if (emailType === "cancellation") {
      customerSubject = `Booking Cancelled · ${tourTitle} · Yellodae`;
      supportSubject = `❌ Booking Cancelled · ${name} · ${tourTitle}`;
      customerBody = shell(`
<tr><td style="padding:36px 32px 8px;text-align:center;">
  <div style="display:inline-block;background:#fee2e2;border-radius:999px;padding:10px 18px;color:#b91c1c;font-size:12px;font-weight:700;letter-spacing:0.5px;">BOOKING CANCELLED</div>
  <h1 style="color:${BRAND.ink};margin:18px 0 6px;font-size:24px;font-weight:800;">Your booking has been cancelled</h1>
  <p style="color:${BRAND.muted};margin:0;font-size:15px;line-height:1.6;">Hi ${name}, your booking for <strong>${tourTitle}</strong> (${tourDate}) has been cancelled. If a payment was made, any eligible refund will be processed separately and you'll receive a confirmation once it's initiated.</p>
  <p style="color:${BRAND.muted};margin:16px 0 0;font-size:13px;">Booking ID: <span style="font-family:monospace;">${bookingShort}</span> · Amount: ${amount}</p>
</td></tr>
<tr><td style="padding:16px 32px 32px;">
  <div style="background:${BRAND.surface};border-radius:10px;padding:18px 20px;">
    <p style="margin:0;color:${BRAND.muted};font-size:13px;line-height:1.6;">Questions? Email <a href="mailto:support@yellodae.com" style="color:${BRAND.primaryDark};">support@yellodae.com</a> or WhatsApp <a href="https://wa.me/917061710810" style="color:${BRAND.primaryDark};">+91 7061710810</a>.</p>
  </div>
</td></tr>`, `Your booking for ${tourTitle} has been cancelled.`);
    } else if (emailType === "refund") {
      customerSubject = `Refund Initiated · ${tourTitle} · Yellodae`;
      supportSubject = `💸 Refund Issued · ${name} · ${tourTitle}`;
      customerBody = shell(`
<tr><td style="padding:36px 32px 8px;text-align:center;">
  <div style="display:inline-block;background:#dcfce7;border-radius:999px;padding:10px 18px;color:${BRAND.success};font-size:12px;font-weight:700;letter-spacing:0.5px;">REFUND INITIATED</div>
  <h1 style="color:${BRAND.ink};margin:18px 0 6px;font-size:24px;font-weight:800;">Your refund is on its way</h1>
  <p style="color:${BRAND.muted};margin:0;font-size:15px;line-height:1.6;">Hi ${name}, a refund of <strong>${amount}</strong> for <strong>${tourTitle}</strong> has been initiated to your original payment method. It typically takes 5–7 business days to reflect in your account.</p>
  <p style="color:${BRAND.muted};margin:16px 0 0;font-size:13px;">Booking ID: <span style="font-family:monospace;">${bookingShort}</span></p>
</td></tr>
<tr><td style="padding:16px 32px 32px;">
  <div style="background:${BRAND.surface};border-radius:10px;padding:18px 20px;">
    <p style="margin:0;color:${BRAND.muted};font-size:13px;line-height:1.6;">Questions? Email <a href="mailto:support@yellodae.com" style="color:${BRAND.primaryDark};">support@yellodae.com</a> or WhatsApp <a href="https://wa.me/917061710810" style="color:${BRAND.primaryDark};">+91 7061710810</a>.</p>
  </div>
</td></tr>`, `Refund of ${amount} initiated for ${tourTitle}.`);
    }

    try {
      await sendMail(recipientEmail, customerSubject, customerBody);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`${emailType} customer SMTP send failed:`, msg);
      return new Response(JSON.stringify({ success: false, error: `SMTP send failed: ${msg}` }), { status: 502, headers: corsHeaders });
    }

    // Support notification — best-effort, doesn't block customer success
    sendMail("support@yellodae.com", supportSubject, supportHtml, recipientEmail)
      .catch((err) => console.error("Support SMTP send failed:", err instanceof Error ? err.message : err));


    return new Response(JSON.stringify({ success: true, type: emailType, recipient: recipientEmail }), { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("Send confirmation error:", error);
    return new Response(JSON.stringify({ success: false, error: error instanceof Error ? error.message : "Unknown error" }), { status: 500, headers: corsHeaders });
  }
});
