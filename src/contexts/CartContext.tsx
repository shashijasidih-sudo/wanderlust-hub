import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export interface CartItem {
  id: string;
  itemType: 'transfer' | 'activity';
  title: string;
  price: number;
  quantity: number;
  slug: string;
  // Transfer-specific fields
  transferId?: string;
  vehicleId?: string;
  vehicleName?: string;
  capacity?: string;
  numberOfPersons?: number;
  pickupDate?: string;
  pickupTime?: string;
  pickupLocation?: string;
  dropLocation?: string;
  roomNo?: string;
  // Activity-specific fields
  adults?: number;
  children?: number;
  childPrice?: number;
  selectedDate?: string;
  selectedTime?: string;
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
          const localCart = localStorage.getItem("cartItems");
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
        const saved = localStorage.getItem("cartItems");
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
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
        itemType: (item.item_type as 'transfer' | 'activity') || 'transfer',
        title: item.title,
        price: Number(item.price),
        quantity: item.quantity,
        slug: item.slug,
        // Transfer fields
        transferId: item.transfer_id || undefined,
        vehicleId: item.vehicle_id || undefined,
        vehicleName: item.vehicle_name || undefined,
        capacity: item.capacity || undefined,
        numberOfPersons: item.number_of_persons,
        pickupDate: item.pickup_date || undefined,
        pickupTime: item.pickup_time || undefined,
        pickupLocation: item.pickup_location || undefined,
        dropLocation: item.drop_location || undefined,
        roomNo: item.room_no || undefined,
        // Activity fields
        adults: item.adults || undefined,
        children: item.children || undefined,
        childPrice: item.child_price ? Number(item.child_price) : undefined,
        selectedDate: item.selected_date || undefined,
        selectedTime: item.selected_time || undefined,
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
      const localCartStr = localStorage.getItem("cartItems");
      const localItems: CartItem[] = localCartStr ? JSON.parse(localCartStr) : [];

      // Get Supabase cart items
      const { data: supabaseItems, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;

      // Add local items to Supabase (if not already present)
      for (const localItem of localItems) {
        const existsInSupabase = supabaseItems?.some(si => {
          if (localItem.itemType === 'transfer') {
            return si.transfer_id === localItem.transferId && si.vehicle_id === localItem.vehicleId;
          } else {
            return si.slug === localItem.slug && si.item_type === 'activity';
          }
        });

        if (!existsInSupabase) {
          await supabase.from('cart_items').insert({
            user_id: userId,
            item_type: localItem.itemType,
            title: localItem.title,
            price: localItem.price,
            quantity: localItem.quantity || 1,
            slug: localItem.slug,
            // Transfer fields
            transfer_id: localItem.transferId || null,
            vehicle_id: localItem.vehicleId || null,
            vehicle_name: localItem.vehicleName || null,
            capacity: localItem.capacity || null,
            number_of_persons: localItem.numberOfPersons || 1,
            pickup_date: localItem.pickupDate || null,
            pickup_time: localItem.pickupTime || null,
            pickup_location: localItem.pickupLocation || null,
            drop_location: localItem.dropLocation || null,
            room_no: localItem.roomNo || null,
            // Activity fields
            adults: localItem.adults || 0,
            children: localItem.children || 0,
            child_price: localItem.childPrice || 0,
            selected_date: localItem.selectedDate || null,
            selected_time: localItem.selectedTime || null,
          });
        }
      }

      // Clear localStorage after merge
      localStorage.removeItem("cartItems");

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
            item_type: newItem.itemType,
            title: newItem.title,
            price: newItem.price,
            quantity: newItem.quantity,
            slug: newItem.slug,
            // Transfer fields
            transfer_id: newItem.transferId || null,
            vehicle_id: newItem.vehicleId || null,
            vehicle_name: newItem.vehicleName || null,
            capacity: newItem.capacity || null,
            number_of_persons: newItem.numberOfPersons || 1,
            pickup_date: newItem.pickupDate || null,
            pickup_time: newItem.pickupTime || null,
            pickup_location: newItem.pickupLocation || null,
            drop_location: newItem.dropLocation || null,
            room_no: newItem.roomNo || null,
            // Activity fields
            adults: newItem.adults || 0,
            children: newItem.children || 0,
            child_price: newItem.childPrice || 0,
            selected_date: newItem.selectedDate || null,
            selected_time: newItem.selectedTime || null,
          })
          .select()
          .single();

        if (error) throw error;

        if (data) {
          setCartItems(prev => [...prev, {
            id: data.id,
            itemType: (data.item_type as 'transfer' | 'activity') || 'transfer',
            title: data.title,
            price: Number(data.price),
            quantity: data.quantity,
            slug: data.slug,
            transferId: data.transfer_id || undefined,
            vehicleId: data.vehicle_id || undefined,
            vehicleName: data.vehicle_name || undefined,
            capacity: data.capacity || undefined,
            numberOfPersons: data.number_of_persons,
            pickupDate: data.pickup_date || undefined,
            pickupTime: data.pickup_time || undefined,
            pickupLocation: data.pickup_location || undefined,
            dropLocation: data.drop_location || undefined,
            roomNo: data.room_no || undefined,
            adults: data.adults || undefined,
            children: data.children || undefined,
            childPrice: data.child_price ? Number(data.child_price) : undefined,
            selectedDate: data.selected_date || undefined,
            selectedTime: data.selected_time || undefined,
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
