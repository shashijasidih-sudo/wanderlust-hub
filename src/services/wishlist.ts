import { supabase } from "@/lib/supabaseClient";

interface WishlistItem {
  tourSlug: string;
  tourName: string;
  tourImage?: string;
  tourPrice?: number;
}

export const addToWishlist = async (item: WishlistItem) => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error("Please login first");

  const { error } = await supabase.from("wishlists").insert([
    {
      user_id: userData.user.id,
      tour_slug: item.tourSlug,
      tour_name: item.tourName,
      tour_image: item.tourImage || null,
      tour_price: item.tourPrice || null,
    },
  ]);

  if (error) throw error;
};

export const removeFromWishlist = async (tourSlug: string) => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) throw new Error("Please login first");

  const { error } = await supabase
    .from("wishlists")
    .delete()
    .eq("user_id", userData.user.id)
    .eq("tour_slug", tourSlug);

  if (error) throw error;
};

export const fetchWishlist = async () => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) return [];

  const { data, error } = await supabase
    .from("wishlists")
    .select("*")
    .eq("user_id", userData.user.id);

  if (error) throw error;
  return data || [];
};

export const isInWishlist = async (tourSlug: string): Promise<boolean> => {
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) return false;

  const { data, error } = await supabase
    .from("wishlists")
    .select("id")
    .eq("user_id", userData.user.id)
    .eq("tour_slug", tourSlug)
    .maybeSingle();

  if (error) return false;
  return !!data;
};
