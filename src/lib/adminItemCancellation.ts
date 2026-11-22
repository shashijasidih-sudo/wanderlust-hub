import type { SupabaseClient } from "@supabase/supabase-js";
import type { SavedBookingItem } from "@/lib/adminBookingDisplay";

type Parent = { id: string; status?: unknown; booking_items?: SavedBookingItem[]; items_load_error?: boolean };

export const adminCancellationMode = (booking: Parent) => booking.items_load_error
  ? "unavailable"
  : booking.booking_items?.some(item => item.booking_id === booking.id) ? "items" : "legacy";

export const canCancelAdminItem = (item: SavedBookingItem, booking: Parent) =>
  adminCancellationMode(booking) === "items" && item.booking_id === booking.id &&
  ["pending", "confirmed"].includes(String(item.status || "confirmed")) &&
  !["cancelled", "completed", "refunded"].includes(String(booking.status));

export class AdminItemCancellationError extends Error {
  constructor(message: string, public readonly itemCancelled = false) {
    super(message);
  }
}

/** Uses the existing authenticated production client and RLS; never invokes refund/email functions. */
export async function cancelAdminBookingItem(client: SupabaseClient, bookingId: string, itemId: string) {
  const { data: parent, error: parentError } = await client.from("bookings")
    .select("id,status").eq("id", bookingId).single();
  if (parentError || !parent) throw new AdminItemCancellationError("Could not verify the booking. Refresh and try again.");
  const { data: selected, error: selectedError } = await client.from("booking_items")
    .select("id,booking_id,status").eq("id", itemId).eq("booking_id", bookingId).single();
  if (selectedError || !selected || !canCancelAdminItem(selected, { ...parent, booking_items: [selected] })) {
    throw new AdminItemCancellationError("This item is unavailable or can no longer be cancelled. Refresh to see its current status.");
  }

  let update = client.from("booking_items").update({ status: "cancelled" })
    .eq("id", itemId).eq("booking_id", bookingId);
  // Do not overwrite a status changed by another administrator since the read.
  update = selected.status == null ? update.is("status", null) : update.eq("status", selected.status);
  const { data: updated, error: updateError } = await update.select("id,booking_id,status").single();
  if (updateError || !updated || updated.id !== itemId || updated.booking_id !== bookingId || updated.status !== "cancelled") {
    throw new AdminItemCancellationError("Could not confirm item cancellation. Refresh and try again.");
  }

  const items: { id: string; booking_id: string; status: string | null }[] = [];
  for (let offset = 0; ; offset += 500) {
    const { data: rows, error } = await client.from("booking_items").select("id,booking_id,status")
      .eq("booking_id", bookingId).order("id").range(offset, offset + 499);
    if (error) throw new AdminItemCancellationError("The item was cancelled, but remaining item statuses could not be verified. Booking data will be refreshed.", true);
    items.push(...(rows || []));
    if (!rows || rows.length < 500) break;
  }
  if (!items.some(item => item.id === itemId && item.booking_id === bookingId && item.status === "cancelled") ||
      items.some(item => item.booking_id !== bookingId)) {
    throw new AdminItemCancellationError("The item was cancelled, but the saved item list could not be verified. Booking data will be refreshed.", true);
  }
  const allCancelled = items.length > 0 && items.every(item => item.status === "cancelled");
  if (allCancelled && parent.status !== "cancelled") {
    const { data: cancelledParent, error } = await client.from("bookings").update({ status: "cancelled" })
      .eq("id", bookingId).eq("status", parent.status).select("id,status").single();
    if (error || cancelledParent?.id !== bookingId || cancelledParent.status !== "cancelled") {
      throw new AdminItemCancellationError("The item was cancelled, but the parent booking status could not be updated. Booking data will be refreshed.", true);
    }
  }
  return { allCancelled };
}