/**
 * Extracts booking ID from save-booking edge function response.
 * Handles both array and single object formats.
 */
export function extractBookingId(saveResult: any): { booking: any; bookingId: string } {
  const returnedBooking = Array.isArray(saveResult?.booking)
    ? saveResult.booking[0]
    : saveResult?.booking ?? null;
  const bookingId = returnedBooking?.id || "";
  console.log("Returned booking:", returnedBooking);
  console.log("Booking ID extracted:", bookingId);
  return { booking: returnedBooking, bookingId };
}

const SUPABASE_URL = "https://cymzgmfnhtnqledwwojt.supabase.co/functions/v1";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bXpnbWZuaHRucWxlZHd3b2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNzE5MzQsImV4cCI6MjA4Mjk0NzkzNH0.-qkr1VSNdsLnFHfqH6P-HOlYtJG69PNHB2WAgxtVlso";

/**
 * Sends booking confirmation email via edge function.
 * Only calls if bookingId is truthy.
 */
export async function sendBookingConfirmation(bookingId: string): Promise<void> {
  if (!bookingId) {
    console.warn("No bookingId provided, skipping send-confirmation");
    return;
  }
  console.log("Calling send-confirmation with bookingId:", bookingId);
  try {
    const res = await fetch(`${SUPABASE_URL}/send-confirmation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ bookingId }),
    });
    const data = await res.text();
    console.log("send-confirmation response:", res.status, data);
  } catch (err) {
    console.error("send-confirmation failed:", err);
  }
}
