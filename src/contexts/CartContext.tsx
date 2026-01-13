import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export interface CartItem {
  id: string;
  transferId: string;
  title: string;
  vehicleId: string;
  vehicleName: string;
  capacity: string;
  price: number;
  quantity: number;
  numberOfPersons: number;
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  dropLocation: string;
  roomNo: string;
  slug: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getCartTotal: () => number;
  cartCount: number;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Listen to auth changes
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const newUser = session?.user ?? null;
        const previousUser = user;
        setUser(newUser);

        if (newUser && !previousUser) {
          // User just logged in - merge local cart with Supabase cart
          await mergeCartsOnLogin(newUser.id);
        } else if (!newUser && previousUser) {
          // User logged out - keep local cart in localStorage
          const localCart = localStorage.getItem("transferCart");
          if (localCart) {
            setCartItems(JSON.parse(localCart));
          } else {
            setCartItems([]);
          }
        }
      }
    );

    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchCartFromSupabase(session.user.id);
      } else {
        // Load from localStorage for guests
        const saved = localStorage.getItem("transferCart");
        if (saved) {
          setCartItems(JSON.parse(saved));
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Save to localStorage when cart changes (for guests)
  useEffect(() => {
    if (!user) {
      localStorage.setItem("transferCart", JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const fetchCartFromSupabase = async (userId: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;

      const items: CartItem[] = (data || []).map(item => ({
        id: item.id,
        transferId: item.transfer_id,
        title: item.title,
        vehicleId: item.vehicle_id,
        vehicleName: item.vehicle_name,
        capacity: item.capacity,
        price: Number(item.price),
        quantity: item.quantity,
        numberOfPersons: item.number_of_persons,
        pickupDate: item.pickup_date || '',
        pickupTime: item.pickup_time || '',
        pickupLocation: item.pickup_location,
        dropLocation: item.drop_location,
        roomNo: item.room_no || '',
        slug: item.slug,
      }));

      setCartItems(items);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const mergeCartsOnLogin = async (userId: string) => {
    setIsLoading(true);
    try {
      // Get local cart items
      const localCartStr = localStorage.getItem("transferCart");
      const localItems: CartItem[] = localCartStr ? JSON.parse(localCartStr) : [];

      // Get Supabase cart items
      const { data: supabaseItems, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;

      // Add local items to Supabase (if not already present)
      for (const localItem of localItems) {
        const existsInSupabase = supabaseItems?.some(
          si => si.transfer_id === localItem.transferId && si.vehicle_id === localItem.vehicleId
        );

        if (!existsInSupabase) {
          await supabase.from('cart_items').insert({
            user_id: userId,
            transfer_id: localItem.transferId,
            title: localItem.title,
            vehicle_id: localItem.vehicleId,
            vehicle_name: localItem.vehicleName,
            capacity: localItem.capacity,
            price: localItem.price,
            quantity: localItem.quantity || 1,
            number_of_persons: localItem.numberOfPersons,
            pickup_date: localItem.pickupDate || null,
            pickup_time: localItem.pickupTime || null,
            pickup_location: localItem.pickupLocation,
            drop_location: localItem.dropLocation,
            room_no: localItem.roomNo || null,
            slug: localItem.slug,
          });
        }
      }

      // Clear localStorage after merge
      localStorage.removeItem("transferCart");

      // Fetch updated cart
      await fetchCartFromSupabase(userId);
    } catch (error) {
      console.error('Error merging carts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = useCallback(async (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => {
    const newItem: CartItem = {
      ...item,
      id: crypto.randomUUID(),
      quantity: item.quantity || 1,
    };

    if (user) {
      try {
        const { data, error } = await supabase
          .from('cart_items')
          .insert({
            user_id: user.id,
            transfer_id: newItem.transferId,
            title: newItem.title,
            vehicle_id: newItem.vehicleId,
            vehicle_name: newItem.vehicleName,
            capacity: newItem.capacity,
            price: newItem.price,
            quantity: newItem.quantity,
            number_of_persons: newItem.numberOfPersons,
            pickup_date: newItem.pickupDate || null,
            pickup_time: newItem.pickupTime || null,
            pickup_location: newItem.pickupLocation,
            drop_location: newItem.dropLocation,
            room_no: newItem.roomNo || null,
            slug: newItem.slug,
          })
          .select()
          .single();

        if (error) throw error;

        if (data) {
          setCartItems(prev => [...prev, {
            id: data.id,
            transferId: data.transfer_id,
            title: data.title,
            vehicleId: data.vehicle_id,
            vehicleName: data.vehicle_name,
            capacity: data.capacity,
            price: Number(data.price),
            quantity: data.quantity,
            numberOfPersons: data.number_of_persons,
            pickupDate: data.pickup_date || '',
            pickupTime: data.pickup_time || '',
            pickupLocation: data.pickup_location,
            dropLocation: data.drop_location,
            roomNo: data.room_no || '',
            slug: data.slug,
          }]);
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    } else {
      setCartItems(prev => [...prev, newItem]);
    }
  }, [user]);

  const removeFromCart = useCallback(async (id: string) => {
    if (user) {
      try {
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('id', id)
          .eq('user_id', user.id);

        if (error) throw error;
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    }
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, [user]);

  const updateQuantity = useCallback(async (id: string, quantity: number) => {
    if (quantity < 1) return;

    if (user) {
      try {
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity })
          .eq('id', id)
          .eq('user_id', user.id);

        if (error) throw error;
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [user]);

  const clearCart = useCallback(async () => {
    if (user) {
      try {
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('user_id', user.id);

        if (error) throw error;
      } catch (error) {
        console.error('Error clearing cart:', error);
      }
    }
    setCartItems([]);
    localStorage.removeItem("transferCart");
  }, [user]);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        cartCount,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
