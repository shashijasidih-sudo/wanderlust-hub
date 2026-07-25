// Shared helpers for the multi-item booking architecture.
import { toursData } from "@/data/tourData";
import type { CartItem } from "@/contexts/CartContext";

export type ProductType = "activity" | "transfer" | "airport_transfer" | "esim" | "ticket" | "package";

export type PickupType = "airport" | "hotel" | "meeting_point" | null;

export interface BookingItemForm {
  hotelName: string;
  pickupLocation: string;
  country: string;
  pickupTime: string;
  dropLocation: string;
  flightNumber: string;
  airline: string;
  terminal: string;
  meetingPoint: string;
  activationDate: string;
  activationEmail: string;
  visitorName: string;
  entryTime: string;
  specialRequests: string;
}

export const emptyItemForm = (): BookingItemForm => ({
  hotelName: "",
  pickupLocation: "",
  country: "",
  pickupTime: "",
  dropLocation: "",
  flightNumber: "",
  airline: "",
  terminal: "",
  meetingPoint: "",
  activationDate: "",
  activationEmail: "",
  visitorName: "",
  entryTime: "",
  specialRequests: "",
});

const AIRPORT_RE = /(airport|pickup|dropoff|drop-off|arrival|departure|transfer.*airport|airport.*transfer)/i;
const ESIM_RE = /(esim|e-sim|sim.card|travel.sim)/i;
const THEME_PARK_RE = /(universal-studios|gardens-by-the-bay|sentosa|night-safari|ferrari-world|img-worlds|dubai-parks|studio-city|ocean-park)/i;

export const detectProductType = (item: Pick<CartItem, "itemType" | "slug" | "title">): ProductType => {
  const s = `${item.slug || ""} ${item.title || ""}`.toLowerCase();
  if (ESIM_RE.test(s)) return "esim";
  if (item.itemType === "transfer" || AIRPORT_RE.test(s)) {
    if (AIRPORT_RE.test(s)) return "airport_transfer";
    return "transfer";
  }
  if (THEME_PARK_RE.test(s)) return "ticket";
  return "activity";
};

export const pickupRequiredFor = (type: ProductType): boolean =>
  type === "transfer" || type === "airport_transfer" || type === "activity";

export const pickupTypeFor = (type: ProductType): PickupType => {
  if (type === "airport_transfer") return "airport";
  if (type === "transfer" || type === "activity") return "hotel";
  return null;
};

export const destinationFromSlug = (slug?: string): string => {
  if (!slug) return "";
  const s = slug.toLowerCase();
  if (s.includes("bangkok")) return "Bangkok";
  if (s.includes("pattaya")) return "Pattaya";
  if (s.includes("phuket")) return "Phuket";
  if (s.includes("krabi")) return "Krabi";
  if (s.includes("chiang")) return "Chiang Mai";
  if (s.includes("koh-samui") || s.includes("samui")) return "Koh Samui";
  if (s.includes("singapore") || s.includes("sentosa")) return "Singapore";
  if (s.includes("dubai") || s.includes("uae")) return "Dubai";
  if (s.includes("thailand")) return "Thailand";
  return "";
};

const cleanSlug = (slug?: string): string => (slug || "").replace(/^\/+|\/+$/g, "").split("/").pop() || "";

export const getActivityImage = (slug?: string): string | null => {
  const key = cleanSlug(slug);
  const data = key ? (toursData as any)[key] : null;
  if (!data) return null;
  if (data.gallery && Array.isArray(data.gallery) && data.gallery[0]?.src) return data.gallery[0].src;
  if (data.image) return data.image;
  return null;
};

export const getActivityLocation = (slug?: string): string | null => {
  const key = cleanSlug(slug);
  const data = key ? (toursData as any)[key] : null;
  return data?.location || null;
};

export interface BookingItemPayload {
  product_id?: string | null;
  product_type: ProductType;
  activity_name: string;
  activity_slug?: string;
  image_url?: string | null;
  destination?: string;
  travel_date?: string | null;
  quantity: number;
  adults: number;
  children: number;
  price: number;
  currency: string;
  pickup_required: boolean;
  pickup_type: PickupType;
  hotel_name?: string | null;
  pickup_location?: string | null;
  country?: string | null;
  meeting_point?: string | null;
  pickup_time?: string | null;
  drop_location?: string | null;
  flight_number?: string | null;
  airline?: string | null;
  terminal?: string | null;
  special_requests?: string | null;
  item_details?: Record<string, unknown>;
}

export const buildBookingItemsFromCart = (
  cartItems: CartItem[],
  perItem: Record<string, BookingItemForm>,
  currency = "INR",
): BookingItemPayload[] => {
  return cartItems.map((item) => {
    const pt = detectProductType(item);
    const form = perItem[item.id] || emptyItemForm();
    const pickupRequired = pickupRequiredFor(pt);
    return {
      product_id: item.slug || null,
      product_type: pt,
      activity_name: item.title,
      activity_slug: item.slug,
      image_url: getActivityImage(item.slug),
      destination: destinationFromSlug(item.slug),
      travel_date: item.selectedDate || item.pickupDate || null,
      quantity: item.quantity || 1,
      adults: item.adults ?? item.numberOfPersons ?? item.quantity ?? 1,
      children: item.children ?? 0,
      price: (item.price || 0) * (item.quantity || 1),
      currency,
      pickup_required: pickupRequired,
      pickup_type: pickupTypeFor(pt),
      hotel_name: pickupRequired ? form.hotelName || null : null,
      pickup_location: pickupRequired ? form.pickupLocation || item.pickupLocation || null : null,
      country: form.country || null,
      meeting_point: form.meetingPoint || null,
      pickup_time: form.pickupTime || item.pickupTime || item.selectedTime || null,
      drop_location: form.dropLocation || item.dropLocation || null,
      flight_number: pt === "airport_transfer" ? form.flightNumber || null : null,
      airline: pt === "airport_transfer" ? form.airline || null : null,
      terminal: pt === "airport_transfer" ? form.terminal || null : null,
      special_requests: form.specialRequests || null,
      item_details: {
        vehicle_name: item.vehicleName,
        capacity: item.capacity,
        number_of_persons: item.numberOfPersons,
        room_no: item.roomNo,
        child_price: item.childPrice,
        activation_date: form.activationDate || null,
        activation_email: form.activationEmail || null,
        visitor_name: form.visitorName || null,
        entry_time: form.entryTime || null,
      },
    };
  });
};
