import { supabase } from "../lib/supabaseClient";

export const addToCart = async (item: any) => {
  const { data: userData } = await supabase.auth.getUser();

  if (!userData.user) throw new Error("Please login first");

  const { error } = await supabase.from("cart").insert([
    {
      user_id: userData.user.id,
      product_id: item.id,
      title: item.title,
      price: item.price,
      quantity: 1,
    },
  ]);

  if (error) throw error;
};
