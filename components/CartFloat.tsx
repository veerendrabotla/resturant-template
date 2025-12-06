'use client';

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useApp } from '@/lib/context';
import { useRouter } from '@/lib/router-shim';

const CartFloat = () => {
  const { cartCount, cartTotal } = useApp();
  const router = useRouter();

  if (cartCount === 0) return null;

  return (
    <button
      onClick={() => router.push('/order')}
      className="fixed bottom-6 right-6 z-40 bg-primary text-white px-6 py-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center gap-4 animate-slide-up"
    >
      <div className="relative">
        <ShoppingBag size={24} />
        <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      </div>
      <div className="text-left hidden sm:block">
        <div className="text-xs opacity-90">Total</div>
        <div className="font-bold">₹{cartTotal}</div>
      </div>
      <span className="font-bold sm:hidden">₹{cartTotal}</span>
    </button>
  );
};

export default CartFloat;