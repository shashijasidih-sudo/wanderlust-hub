import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { bookingBodySchema } from "../_shared/bookingValidation.ts";
import { normaliseCurrency, toMinor, itemsTotalMinor, checkoutFingerprint, orderAgeValid } from "../_shared/checkoutPricing.ts";

const responseHeaders = { ...corsHeaders, "Content-Type": "application/json", "Access-Control-Allow-Methods": "POST, OPTIONS" };
const MAX_ITEMS = 10;

const maskRef = (v: unknown) => {
  const s = typeof v === "string" ? v : "";
  return s.length > 6 ? `…${s.slice(-6)}` : (s ? "…" : "none");
};
const log = (level: "info" | "warn" | "error", event: string, fields: Record<string, unknown> = {}) => {
  const line = JSON.stringify({ fn: "save-booking", level, event, ...fields });
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
};

const fail = (status: number, code: string, message: string, ref?: Record<string, unknown>) => {
  log(status >= 500 ? "error" : "warn", "rejected", { code, status, ...(ref ?? {}) });
  // Raw database/Razorpay error text is no longer returned to the browser.
  return new Response(JSON.stringify({ success: false, error: message, code }), {
    status,
    headers: responseHeaders,
  });
};

export async function handleRequest(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") return new Response("ok", { headers: responseHeaders });
  if (req.method !== "POST") return fail(405, "method_not_allowed", "Method not allowed");

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!supabaseUrl || !supabaseServiceKey || !supabaseAnonKey) {
    return fail(503, "booking_config_missing", "Booking is temporarily unavailable. Please contact support if already paid.");
  }
  const supabase = createClient(supabaseUrl, supabaseServiceKey, { auth: { persistSession: false, autoRefreshToken: false } });

  let ref: Record<string, unknown> = {};

  try {

    let input: unknown;
    try { input = await req.json(); } catch { return fail(400, "invalid_request", "Invalid booking request."); }
    const parsed = bookingBodySchema.safeParse(input);
    if (!parsed.success) return fail(400, "invalid_booking", "Check the booking details and travel dates, including eSIM. If already paid, contact support before paying again.");
    const body = parsed.data;

    const {
      payment_id, order_id, checkout_ref, razorpay_signature,
      tour_name, tour_slug, tour_date, total_price,
      contact_name, contact_email, contact_phone,
      adults, children, currency: rawCurrency, special_requests,
      items,
    } = body;
    ref = { payment: maskRef(payment_id), order: maskRef(order_id) };

    if (!tour_name || !total_price || !contact_email || !contact_name) {
      return fail(400, "missing_fields", "Missing required booking fields (tour name, amount, lead traveller name or contact email).", ref);
    }

    if (!payment_id || !order_id) {
      return fail(400, "payment_details_missing",
        "Payment reference is incomplete. No booking was created — please contact support with your payment details.", ref);
    }

    // Currency is required and explicitly supported; there is no fallback.
    const currency = normaliseCurrency(rawCurrency);
    if (!currency) {
      return fail(400, "unsupported_currency",
        "This payment currency is not supported. No booking was created — please contact support with your payment ID.", ref);
    }

    const expectedTotal = Number(total_price);
    if (!Number.isFinite(expectedTotal) || expectedTotal <= 0) {
      return fail(400, "invalid_amount", "The booking amount is invalid. No booking was created.", ref);
    }

    // ---- Ownership: derive the user from the bearer token, never from the body ----
    const authHeader = req.headers.get("Authorization") || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    if (!token || token === supabaseAnonKey || token === supabaseServiceKey) {
      return fail(401, "sign_in_required",
        "Please sign in before paying so your booking is saved to your account. If you already paid, do not pay again; contact support.", ref);
    }
    const authClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: userData } = await authClient.auth.getUser();
    const ownerId: string | null = userData?.user?.id ?? null;
    if (!ownerId || userData.user?.is_anonymous) {
      return fail(401, "invalid_session",
        "Your session has expired. Please sign in again and retry — your payment has not been lost.", ref);
    }

    // ---- Build item rows (always at least one) BEFORE verification, so the
    //      cart reconciliation below uses exactly what will be stored ----
    const rawItems: typeof body.items = Array.isArray(items) ? items : [];
    if (rawItems.length > MAX_ITEMS) {
      return fail(400, "too_many_items", `A booking can contain at most ${MAX_ITEMS} items. Please split your order.`, ref);
    }

    const itemRows = rawItems.map((it) => ({
      product_id: it.product_id ?? null,
      product_type: it.product_type === "esim" ? "activity" : it.product_type || "activity",
      activity_name: it.activity_name || tour_name,
      activity_slug: it.activity_slug || null,
      image_url: it.image_url ?? null,
      destination: it.destination ?? null,
      travel_date: it.travel_date,
      quantity: it.quantity ?? 1,
      adults: it.adults ?? 1,
      children: it.children ?? 0,
      price: Number(it.price ?? 0),
      currency: it.currency ? String(it.currency).trim().toUpperCase() : currency,
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

    // Checkout total = sum(cart price * quantity) (CartContext.getCartTotal), and each
    // stored item.price is already that line total (bookingItems.ts: price × quantity).
    // The checkout applies no fees, discounts or coupons today, so
    // Σ(item.price) must equal total_price exactly, in minor units.
    const itemsValid = itemRows.every((it) =>
      Number.isFinite(it.price) && it.price >= 0 &&
      Number.isInteger(Number(it.quantity)) && Number(it.quantity) >= 1 &&
      it.currency === currency);
    if (!itemsValid) {
      return fail(400, "invalid_items",
        "One or more booked items has an invalid price, quantity or currency. No booking was created — please contact support with your payment ID.", ref);
    }
    const expectedMinor = toMinor(expectedTotal, currency);
    const itemsMinor = itemsTotalMinor(itemRows, currency);
    if (itemsMinor !== expectedMinor) {
      return fail(400, "cart_total_mismatch",
        "The booked items do not add up to the amount paid. No booking was created — please contact support with your payment ID.",
        { ...ref, items_minor: itemsMinor, expected_minor: expectedMinor, item_count: itemRows.length });
    }

    // ---- Payment verification against Razorpay's own records (capture-only) ----
    const rzKeyId = Deno.env.get("RAZORPAY_KEY_ID")?.trim();
    const rzKeySecret = Deno.env.get("RAZORPAY_KEY_SECRET")?.trim();
    if (!rzKeyId || !rzKeySecret) {
      return fail(500, "payment_config_missing",
        "Payment verification is temporarily unavailable. Your payment is safe — please contact support with your payment ID.", ref);
    }
    // Verify the checkout callback independently of the public verify-payment caller.
    const signatureKey = await crypto.subtle.importKey(
      "raw", new TextEncoder().encode(rzKeySecret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"],
    );
    const signatureBytes = Uint8Array.from(razorpay_signature.match(/.{2}/g) ?? [], pair => parseInt(pair, 16));
    const signatureValid = await crypto.subtle.verify(
      "HMAC", signatureKey, signatureBytes, new TextEncoder().encode(`${order_id}|${payment_id}`),
    );
    if (!signatureValid) return fail(400, "invalid_signature", "Payment could not be verified. Please contact support.", ref);
    const rzAuth = btoa(`${rzKeyId}:${rzKeySecret}`);

    const rzPayRes = await fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(payment_id)}`, {
      headers: { Authorization: `Basic ${rzAuth}` },
    });
    if (!rzPayRes.ok) {
      return fail(400, "payment_not_found",
        "We could not confirm your payment with Razorpay. No booking was created — please contact support with your payment ID.",
        { ...ref, razorpay_status: rzPayRes.status });
    }
    const rzPayment = await rzPayRes.json();

    const rzOrderRes = await fetch(`https://api.razorpay.com/v1/orders/${encodeURIComponent(order_id)}`, {
      headers: { Authorization: `Basic ${rzAuth}` },
    });
    if (!rzOrderRes.ok) {
      return fail(400, "order_not_found",
        "We could not confirm your order with Razorpay. No booking was created — please contact support with your payment ID.",
        { ...ref, razorpay_status: rzOrderRes.status });
    }
    const rzOrder = await rzOrderRes.json();

    const payCurrency = normaliseCurrency(rzPayment.currency);
    const orderCurrency = normaliseCurrency(rzOrder.currency);

    // Mandatory owner and exact checkout snapshot binding. Missing notes fail closed.
    const notesUser = rzOrder?.notes?.user_id;
    if (typeof notesUser !== "string" || !notesUser) {
      return fail(400, "order_owner_missing", "This order cannot be linked to your account. No booking was created; if already paid, contact support before paying again.", ref);
    }
    if (notesUser !== ownerId) {
      return fail(403, "order_owner_mismatch", "This payment order belongs to another account. Please use the account that started this checkout.", ref);
    }
    const fingerprint = await checkoutFingerprint(itemRows, currency);
    if (rzOrder.notes.checkout_ref !== checkout_ref || rzOrder.notes.checkout_hash !== fingerprint || rzOrder.notes.checkout_version !== "6") {
      return fail(400, "checkout_mismatch", "The payment does not match this checkout. If already paid, contact support before paying again.", ref);
    }
    const nowSec = Math.floor(Date.now() / 1000);
    const ageValid = orderAgeValid(rzOrder.created_at, nowSec);

    const checks = {
      captured: rzPayment.status === "captured" && rzPayment.id === payment_id,
      order_matches: rzPayment.order_id === order_id && rzOrder.id === order_id,
      order_paid: rzOrder.status === "paid" && rzOrder.amount_due === 0 &&
                  rzOrder.amount_paid === rzOrder.amount,
      currency_matches: !!payCurrency && !!orderCurrency &&
                        payCurrency === currency && orderCurrency === currency,
      amount_matches: rzPayment.amount === expectedMinor &&
                      rzOrder.amount === expectedMinor &&
                      rzPayment.amount === rzOrder.amount,
      order_age_valid: ageValid,
      order_owner_matches: notesUser === ownerId,
    };
    const failed = Object.entries(checks).filter(([, ok]) => !ok).map(([k]) => k);
    if (failed.length > 0) {
      return fail(400, "payment_not_verified",
        "Your payment could not be verified as captured for this order and amount. No booking was created — please contact support with your payment ID.",
        { ...ref, failed_checks: failed });
    }

    // Read-only duplicate guard: neither old records nor cross-account bookings are returned.
    const { data: existingRows, error: existingError } = await supabase
      .from("bookings").select("*")
      .or(`item_details->>payment_id.eq.${payment_id},item_details->>order_id.eq.${order_id}`);
    if (existingError) return fail(503, "booking_lookup_failed", "Could not check your booking. If already paid, contact support before paying again.", ref);
    const existing = existingRows?.[0];
    if (existingRows && existingRows.length > 1) return fail(409, "payment_reference_conflict", "This payment needs a support review. No new booking was created.", ref);
    if (existing && (existing.user_id !== ownerId || existing.item_details?.payment_id !== payment_id ||
        existing.item_details?.order_id !== order_id || existing.item_details?.checkout_ref !== checkout_ref || existing.item_details?.checkout_hash !== fingerprint)) {
      return fail(409, "payment_reference_conflict", "This payment is already linked to another booking or checkout. No new booking was created.", ref);
    }
    if (existing) {
      const { data: storedItems, error: itemReadError } = await supabase.from("booking_items").select("*").eq("booking_id", existing.id).order("created_at");
      if (itemReadError || !storedItems?.length) return fail(503, "booking_readback_failed", "Your booking exists but its details could not be loaded. Please contact support; do not pay again.", ref);
      return new Response(JSON.stringify({ success: true, booking: existing, items: storedItems, idempotent: true, confirmation: "not_retried" }), { status: 200, headers: responseHeaders });
    }

    const earliestItemDate = itemRows
      .map((it) => it.travel_date)
      .filter((d): d is string => !!d)
      .sort()[0] ?? null;

    const parentInsert: Record<string, unknown> = {
      user_id: ownerId,                        // always from Supabase Auth, never from the request body
      contact_name,
      contact_email,
      contact_phone: contact_phone || null,
      total_price: expectedTotal,
      currency,
      status: "confirmed",
      tour_name,
      tour_slug: tour_slug || "",
      tour_date: earliestItemDate,
      adults: adults ?? itemRows.reduce((sum, it) => sum + it.adults, 0),
      children: children ?? itemRows.reduce((sum, it) => sum + it.children, 0),
      special_requests: special_requests || null,
      item_details: {
        payment_id,
        order_id,
        checkout_ref,
        checkout_hash: fingerprint,
        items_summary: itemRows.map((it) => ({ name: it.activity_name, slug: it.activity_slug, price: it.price })),
      },
    };

    // The transactional RPC is the ONLY write path.
    // Parent booking and all items are inserted in one database transaction, or
    // nothing is inserted. There is no fallback to separate inserts: if the RPC is
    // missing or fails, a safe error is returned and no booking row is written.
    const { data: rpcBooking, error: rpcErr } = await supabase.rpc("create_booking_with_items", {
      _booking: parentInsert,
      _items: itemRows,
    });

    if (rpcErr) {
      const rpcMissing = /could not find the function|does not exist|PGRST202/i.test(
        `${rpcErr.message} ${(rpcErr as any).code ?? ""}`,
      );
      return fail(500, rpcMissing ? "booking_rpc_unavailable" : "booking_transaction_failed",
        "We could not save your booking. No booking was created — your payment is safe, please contact support with your payment ID.",
        { ...ref, db_code: (rpcErr as any).code ?? null });
    }

    const booking: any = Array.isArray(rpcBooking) ? rpcBooking[0] : rpcBooking;
    const bookingId: string | null = booking?.id ?? null;
    if (!bookingId) {
      return fail(500, "booking_missing_id",
        "The booking was not saved correctly. Please contact support with your payment ID.", ref);
    }
    // Covers the concurrent retry returned by the SQL advisory-lock path too.
    if (booking.user_id !== ownerId || booking.item_details?.payment_id !== payment_id ||
        booking.item_details?.order_id !== order_id || booking.item_details?.checkout_ref !== checkout_ref || booking.item_details?.checkout_hash !== fingerprint) {
      return fail(409, "payment_reference_conflict", "This payment needs a support review. Do not pay again.", ref);
    }
    ref = { ...ref, booking_id: bookingId, booking_number: booking?.booking_number ?? null };
    log("info", "booking_committed", { ...ref, item_count: itemRows.length, currency });

    // ---- Confirmation email / voucher (non-fatal: the booking is already committed) ----

    // HTTP and network failures use safe logs. Neither alters or deletes the booking,
    // and the client still receives success: true.
    let confirmation: "sent" | "failed" = "failed";
    try {
      const confRes = await fetch(`${supabaseUrl}/functions/v1/send-confirmation`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${supabaseServiceKey}` },
        body: JSON.stringify({ bookingId, paymentId: payment_id, orderId: order_id }),
      });
      if (confRes.ok) {
        confirmation = "sent";
        log("info", "confirmation_sent", { ...ref, http_status: confRes.status });
      } else {
        // Use a fixed error code; never log an upstream response body.
        const errCode = "confirmation_delivery_failed";
        log("error", "confirmation_http_error", { ...ref, http_status: confRes.status, error_code: errCode });
      }
    } catch (e) {
      log("error", "confirmation_network_error", {
        ...ref, error_name: e instanceof Error ? e.name : "unknown",
      });
    }

    // A readback failure cannot undo a committed booking or trigger a second payment.
    let storedItems: unknown[] | null = null;
    let readError = false;
    try {
      const result = await supabase.from("booking_items").select("*").eq("booking_id", bookingId).order("created_at");
      storedItems = result.data;
      readError = !!result.error || !storedItems?.length;
    } catch { readError = true; }
    if (readError) log("error", "booking_readback_failed", { booking_id: bookingId });
    return new Response(JSON.stringify({ success: true, booking, items: storedItems, confirmation, readback: readError ? "failed" : "complete" }), { status: 200, headers: responseHeaders });
  } catch (error) {

    // Never attempt separate inserts, cleanup deletes, or historical recovery.
    return fail(500, "unexpected_error",
      "Something went wrong while saving your booking. Your payment is safe — please contact support with your payment ID.",
      { ...ref, error_name: error instanceof Error ? error.name : "unknown" });
  }
}
if (import.meta.main) Deno.serve(handleRequest);
