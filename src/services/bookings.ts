import { supabase } from "../lib/supabaseClient";

export interface BookingData {
  user_id: string;
  contact_name: string;
  contact_email: string;
  contact_phone?: string;
  total_price: number;
  currency: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  tour_name: string;
  tour_slug: string;
  tour_date: string;
  adults: number;
  children: number;
  special_requests?: string;
}

export const saveBooking = async (booking: BookingData) => {
  const { data, error } = await supabase.from("bookings").insert([{
    user_id: booking.user_id,
    contact_name: booking.contact_name,
    contact_email: booking.contact_email,
    contact_phone: booking.contact_phone || null,
    total_price: booking.total_price,
    currency: booking.currency,
    status: booking.status,
    tour_name: booking.tour_name,
    tour_slug: booking.tour_slug,
    tour_date: booking.tour_date,
    adults: booking.adults,
    children: booking.children,
    special_requests: booking.special_requests || null,
  }]).select().single();

  if (error) throw error;
  return data;
};

export const fetchBookings = async () => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("user_id", userData.user.id)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};
