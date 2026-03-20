import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { useAuth, AppUser } from "@/lib/auth";
import { fetchCart, addToCartDB, removeFromCartDB, updateCartQuantityDB, clearCartDB } from "@/services/cart";

export interface CartItem {
  id: string;
  itemType: 'transfer' | 'activity';
  title: string;
  price: number;
  quantity: number;
  slug: string;
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
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Load cart: from Supabase if logged in, otherwise from localStorage
  useEffect(() => {
    const loadCart = async () => {
      if (user) {
        setIsLoading(true);
        try {
          const items = await fetchCart(user.id);
          setCartItems(items);
          // Clear localStorage since we're now using Supabase
          localStorage.removeItem("cartItems");
        } catch (err) {
          console.error("Failed to fetch cart from Supabase:", err);
          // Fallback to localStorage
          const saved = localStorage.getItem("cartItems");
          if (saved) setCartItems(JSON.parse(saved));
        } finally {
          setIsLoading(false);
        }
      } else {
        const saved = localStorage.getItem("cartItems");
        if (saved) setCartItems(JSON.parse(saved));
      }
    };
    loadCart();
  }, [user]);

  // Persist to localStorage only when not logged in
  useEffect(() => {
    if (!user) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = useCallback(async (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => {
    if (user) {
      try {
        const newId = await addToCartDB(user.id, item);
        const newItem: CartItem = {
          ...item,
          id: newId,
          quantity: item.quantity || 1,
        };
        setCartItems(prev => [...prev, newItem]);
      } catch (err) {
        console.error("Failed to add to cart:", err);
        throw err;
      }
    } else {
      const newItem: CartItem = {
        ...item,
        id: crypto.randomUUID(),
        quantity: item.quantity || 1,
      };
      setCartItems(prev => [...prev, newItem]);
    }
  }, [user]);

  const removeFromCart = useCallback(async (id: string) => {
    if (user) {
      try {
        await removeFromCartDB(id);
      } catch (err) {
        console.error("Failed to remove from cart:", err);
        throw err;
      }
    }
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, [user]);

  const updateQuantity = useCallback(async (id: string, quantity: number) => {
    if (quantity < 1) return;
    if (user) {
      try {
        await updateCartQuantityDB(id, quantity);
      } catch (err) {
        console.error("Failed to update quantity:", err);
        throw err;
      }
    }
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    );
  }, [user]);

  const clearCart = useCallback(async () => {
    if (user) {
      try {
        await clearCartDB(user.id);
      } catch (err) {
        console.error("Failed to clear cart:", err);
        throw err;
      }
    }
    setCartItems([]);
    localStorage.removeItem("cartItems");
    localStorage.removeItem("transferCart");
  }, [user]);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, cartCount, isLoading }}
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
