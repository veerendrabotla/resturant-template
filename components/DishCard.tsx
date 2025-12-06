'use client';

import React from 'react';
import Image from '@/components/Image';
import { Dish } from '@/lib/data';
import { ShoppingBag, Plus } from 'lucide-react';
import { useApp } from '@/lib/context';
import { useRouter } from '@/lib/router-shim';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { addToCart } = useApp();
  const router = useRouter();

  const handleOrderNow = () => {
    addToCart(dish);
    router.push('/order');
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-bold shadow-sm">
          ₹{dish.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{dish.category}</span>
            <h3 className="text-xl font-serif font-bold text-secondary mt-1">{dish.name}</h3>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 min-h-[40px] flex-grow">
          {dish.description}
        </p>
        
        <div className="mt-auto flex gap-3">
          <button 
            onClick={() => addToCart(dish)}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/10 py-2.5 rounded-lg transition-colors font-medium text-sm"
          >
            <Plus size={16} /> Add
          </button>
          <button 
            onClick={handleOrderNow}
            className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-primary text-white py-2.5 rounded-lg transition-colors duration-300 font-medium text-sm"
          >
            <ShoppingBag size={16} /> Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;