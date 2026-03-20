import { supabase } from "../lib/supabaseClient";

export const addToWishlist = async (item: any) => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error("Please login first");

  const { error } = await supabase.from("wishlist").insert([
    {
      user_id: userData.user.id,
      product_id: item.id,
      title: item.title,
    },
  ]);

  if (error) throw error;
};

export const removeFromWishlist = async (productId: string) => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error("Please login first");

  const { error } = await supabase
    .from("wishlist")
    .delete()
    .eq("user_id", userData.user.id)
    .eq("product_id", productId);

  if (error) throw error;
};

export const fetchWishlist = async (): Promise<string[]> => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) return [];

  const { data, error } = await supabase
    .from("wishlist")
    .select("product_id")
    .eq("user_id", userData.user.id);

  if (error) throw error;
  return (data || []).map((row) => row.product_id);
};

export const isInWishlist = async (productId: string): Promise<boolean> => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) return false;

  const { data, error } = await supabase
    .from("wishlist")
    .select("id")
    .eq("user_id", userData.user.id)
    .eq("product_id", productId)
    .maybeSingle();

  if (error) return false;
  return !!data;
};
