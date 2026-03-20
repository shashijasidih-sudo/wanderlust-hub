import { supabase } from "../lib/supabaseClient";

export interface BookingData {
  user_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  razorpay_payment_id: string;
  razorpay_order_id: string;
  amount: number;
  currency: string;
  status: string;
  items: any[];
  booking_date?: string;
  city?: string;
  pickup_time?: string;
  notes?: string;
}

export const saveBooking = async (booking: BookingData) => {
  const { data, error } = await supabase.from("bookings").insert([{
    user_id: booking.user_id,
    customer_name: booking.customer_name,
    customer_email: booking.customer_email,
    customer_phone: booking.customer_phone,
    razorpay_payment_id: booking.razorpay_payment_id,
    razorpay_order_id: booking.razorpay_order_id,
    amount: booking.amount,
    currency: booking.currency,
    status: booking.status,
    items: booking.items,
    booking_date: booking.booking_date || null,
    city: booking.city || null,
    pickup_time: booking.pickup_time || null,
    notes: booking.notes || null,
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
