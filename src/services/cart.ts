import { supabase } from "../lib/supabaseClient";
import type { CartItem } from "@/contexts/CartContext";

export const fetchCart = async (userId: string): Promise<CartItem[]> => {
  const { data, error } = await supabase
    .from("cart_items")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  if (error) throw error;

  return (data || []).map((row) => ({
    id: row.id,
    itemType: row.item_type as "transfer" | "activity",
    title: row.title,
    price: row.price,
    quantity: row.quantity,
    slug: row.slug,
    transferId: row.transfer_id ?? undefined,
    vehicleId: row.vehicle_id ?? undefined,
    vehicleName: row.vehicle_name ?? undefined,
    capacity: row.capacity ?? undefined,
    numberOfPersons: row.number_of_persons ?? undefined,
    pickupDate: row.pickup_date ?? undefined,
    pickupTime: row.pickup_time ?? undefined,
    pickupLocation: row.pickup_location ?? undefined,
    dropLocation: row.drop_location ?? undefined,
    roomNo: row.room_no ?? undefined,
    adults: row.adults ?? undefined,
    children: row.children ?? undefined,
    childPrice: row.child_price ?? undefined,
    selectedDate: row.selected_date ?? undefined,
    selectedTime: row.selected_time ?? undefined,
  }));
};

export const addToCartDB = async (
  userId: string,
  item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }
): Promise<string> => {
  const { data, error } = await supabase
    .from("cart_items")
    .insert({
      user_id: userId,
      item_type: item.itemType,
      title: item.title,
      price: item.price,
      quantity: item.quantity || 1,
      slug: item.slug,
      transfer_id: item.transferId ?? null,
      vehicle_id: item.vehicleId ?? null,
      vehicle_name: item.vehicleName ?? null,
      capacity: item.capacity ?? null,
      number_of_persons: item.numberOfPersons ?? 0,
      pickup_date: item.pickupDate ?? null,
      pickup_time: item.pickupTime ?? null,
      pickup_location: item.pickupLocation ?? null,
      drop_location: item.dropLocation ?? null,
      room_no: item.roomNo ?? null,
      adults: item.adults ?? null,
      children: item.children ?? null,
      child_price: item.childPrice ?? null,
      selected_date: item.selectedDate ?? null,
      selected_time: item.selectedTime ?? null,
    })
    .select("id")
    .single();

  if (error) throw error;
  return data.id;
};

export const removeFromCartDB = async (id: string) => {
  const { error } = await supabase.from("cart_items").delete().eq("id", id);
  if (error) throw error;
};

export const updateCartQuantityDB = async (id: string, quantity: number) => {
  const { error } = await supabase
    .from("cart_items")
    .update({ quantity })
    .eq("id", id);
  if (error) throw error;
};

export const clearCartDB = async (userId: string) => {
  const { error } = await supabase
    .from("cart_items")
    .delete()
    .eq("user_id", userId);
  if (error) throw error;
};
