
'use client';

import React, { useState } from 'react';
import Image from '@/components/Image';
import { Dish } from '@/lib/data';
import { ShoppingBag, Plus, Check, Flame } from 'lucide-react';
import { useApp } from '@/lib/context';
import { useRouter } from '@/lib/router-shim';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { addToCart } = useApp();
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(false);

  const handleOrderNow = () => {
    addToCart(dish);
    router.push('/order');
  };

  const handleAddToCart = () => {
    addToCart(dish);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-gray-100">
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-black font-bold shadow-md border border-gray-100">
          ₹{dish.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="w-full">
            <div className="flex items-center justify-between w-full mb-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">{dish.category}</span>
              
              {/* Veg/Non-Veg Indicator */}
              <div className={`border-[2px] p-[2px] rounded-sm ${dish.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                <div className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-serif font-bold text-black">{dish.name}</h3>
              {/* Spiciness Indicator */}
              {dish.spiciness && dish.spiciness > 0 && (
                <div className="flex" title={`Spiciness: ${dish.spiciness}/3`}>
                  {[...Array(dish.spiciness)].map((_, i) => (
                    <Flame key={i} size={14} className="text-red-500 fill-red-500" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-6 line-clamp-2 min-h-[40px] flex-grow font-medium leading-relaxed">
          {dish.description}
        </p>
        
        <div className="mt-auto flex gap-3">
          <button 
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-2 border-2 py-2.5 rounded-lg transition-all font-bold text-sm ${
              isAdded 
                ? "bg-green-600 border-green-600 text-white" 
                : "border-gray-200 text-gray-900 hover:border-primary hover:text-primary hover:bg-orange-50"
            }`}
          >
            {isAdded ? <Check size={16} /> : <Plus size={16} />}
            {isAdded ? "Added" : "Add"}
          </button>
          <button 
            onClick={handleOrderNow}
            className="flex-1 flex items-center justify-center gap-2 bg-black text-white hover:bg-primary py-2.5 rounded-lg transition-colors duration-300 font-bold text-sm shadow-md"
          >
            <ShoppingBag size={16} /> Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
