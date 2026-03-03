import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { useAuth, AppUser } from "@/lib/auth";

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

  // Load cart from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback(async (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => {
    const newItem: CartItem = {
      ...item,
      id: crypto.randomUUID(),
      quantity: item.quantity || 1,
    };
    setCartItems(prev => [...prev, newItem]);
  }, []);

  const removeFromCart = useCallback(async (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback(async (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    );
  }, []);

  const clearCart = useCallback(async () => {
    setCartItems([]);
    localStorage.removeItem("transferCart");
  }, []);

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
