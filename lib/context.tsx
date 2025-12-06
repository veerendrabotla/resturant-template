'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { DISHES, Dish } from '@/lib/data';

// --- Types ---
interface CartItem extends Dish {
  cartId: string; // Unique ID for cart item (in case of variants later)
  quantity: number;
}

interface AppContextType {
  // Menu Data (Persisted)
  dishes: Dish[];
  addDish: (dish: Dish) => void;
  deleteDish: (id: number) => void;
  
  // Cart Data
  cart: CartItem[];
  addToCart: (dish: Dish) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children?: React.ReactNode }) => {
  // --- Menu State ---
  const [dishes, setDishes] = useState<Dish[]>([]);

  // Load dishes from LocalStorage or fallback to static data
  useEffect(() => {
    const savedDishes = localStorage.getItem('spicecraft_menu');
    if (savedDishes) {
      setDishes(JSON.parse(savedDishes));
    } else {
      setDishes(DISHES);
    }
  }, []);

  // Save dishes whenever they change
  useEffect(() => {
    if (dishes.length > 0) {
      localStorage.setItem('spicecraft_menu', JSON.stringify(dishes));
    }
  }, [dishes]);

  const addDish = (dish: Dish) => {
    setDishes(prev => [...prev, dish]);
  };

  const deleteDish = (id: number) => {
    setDishes(prev => prev.filter(d => d.id !== id));
  };

  // --- Cart State ---
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (dish: Dish) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === dish.id);
      if (existing) {
        return prev.map(item => 
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, cartId: `${dish.id}-${Date.now()}`, quantity: 1 }];
    });
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppContext.Provider value={{
      dishes, addDish, deleteDish,
      cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};