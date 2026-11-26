import type { TourData } from "@/data/tourData";

export type SavedBookingItem = Record<string, unknown> & {
  id: string;
  booking_id: string;
  activity_name?: string;
  product_type?: string;
};

export const savedValue = (item: Record<string, unknown>, ...keys: string[]): string => {
  const details = item.item_details && typeof item.item_details === "object"
    ? item.item_details as Record<string, unknown> : {};
  for (const key of keys) {
    for (const value of [item[key], details[key]]) {
      if ((typeof value === "string" || typeof value === "number") && String(value).trim()) return String(value);
    }
  }
  return "";
};

/** Never attach another parent's item, even if an upstream response includes it. */
export const attachBookingItems = <T extends { id: string }>(bookings: T[], items: SavedBookingItem[]) =>
  bookings.map(booking => ({ ...booking, booking_items: items.filter(item => item.booking_id === booking.id) }));

/** Parent-only records are a display fallback, never new database records. */
export const adminDisplayItems = (booking: { id: string; booking_items?: SavedBookingItem[]; tour_name?: string; tour_date?: string; item_details?: unknown; tour_slug?: string }): SavedBookingItem[] => {
  const items = (booking.booking_items || []).filter(item => item.booking_id === booking.id);
  if (items.length) return items;
  return [{ ...booking, id: `legacy-${booking.id}`, booking_id: booking.id,
    activity_name: savedValue(booking, "tour_name"), activity_slug: savedValue(booking, "tour_slug"),
    travel_date: savedValue(booking, "tour_date") }];
};

/** Saved product type is authoritative; pickup and title words are not categories. */
export const adminItemKind = (item: SavedBookingItem) => {
  const type = savedValue(item, "product_type").trim().toLowerCase();
  return type === "transfer" || type.endsWith("_transfer") ? "TRANSFER" : "ACTIVITY";
};

/** Parent pickup data is unambiguous only for a single item or legacy record. */
export const adminPickupValue = (
  item: SavedBookingItem,
  booking: Record<string, unknown> & { id: string; booking_items?: SavedBookingItem[] },
  ...keys: string[]
): string => {
  const value = savedValue(item, ...keys);
  if (value || item.booking_id !== booking.id) return value;
  const siblings = (booking.booking_items || []).filter(row => row.booking_id === booking.id);
  return siblings.length <= 1 ? savedValue(booking, ...keys) : "";
};

export const resolveAdminTour = (item: SavedBookingItem, catalog: Record<string, TourData>): TourData | undefined => {
  if (adminItemKind(item) === "TRANSFER") return undefined;
  for (const key of ["activity_slug", "product_id"]) {
    const slug = savedValue(item, key).replace(/^\/+|\/+$/g, "");
    const direct = catalog[slug] || catalog[slug.split("/").pop() || ""];
    if (direct) return direct;
    const byId = Object.values(catalog).find(tour => tour.id === slug);
    if (slug && byId) return byId;
  }
  const name = savedValue(item, "activity_name").trim().toLowerCase();
  return name ? Object.values(catalog).find(tour => tour.title.trim().toLowerCase() === name) : undefined;
};