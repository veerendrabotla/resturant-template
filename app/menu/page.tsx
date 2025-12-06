
'use client';

import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import DishCard from '@/components/DishCard';
import { useApp } from '@/lib/context';
import { Search, Leaf } from 'lucide-react';

const CATEGORIES = ["All", "Starters", "Main Course", "Biryani", "Drinks", "Desserts"];

export default function MenuPage() {
  const { dishes } = useApp();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);

  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = activeCategory === "All" || dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = vegOnly ? dish.isVeg : true;
    
    return matchesCategory && matchesSearch && matchesVeg;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Page Title - Scrolls away */}
      <div className="pt-8 pb-4 container mx-auto px-4 md:px-6">
        <SectionTitle title="Our Menu" subtitle="Delicious Offerings" center />
      </div>

      {/* Sticky Filter Section */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-sm border-y border-gray-100 py-4 transition-all">
        <div className="container mx-auto px-4 md:px-6 flex flex-col gap-4">
          
          {/* Top Row: Search + Veg Toggle */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-4xl mx-auto items-stretch sm:items-center">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search for dishes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm placeholder:text-gray-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>

            {/* Veg Toggle - Compact on mobile */}
            <button 
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border transition-all font-bold text-sm ${
                vegOnly 
                  ? "bg-green-50 border-green-500 text-green-700 ring-1 ring-green-500" 
                  : "bg-white border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-600"
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                vegOnly ? "border-green-600" : "border-gray-400"
              }`}>
                <div className={`w-2 h-2 rounded-full ${vegOnly ? "bg-green-600" : "bg-transparent"}`}></div>
              </div>
              <span className="whitespace-nowrap">Veg Only</span>
            </button>
          </div>

          {/* Bottom Row: Category Tabs */}
          <div className="w-full overflow-x-auto hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
             <div className="flex flex-nowrap sm:justify-center gap-2 min-w-min pb-1">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 border ${
                    activeCategory === category
                      ? "bg-primary border-primary text-white shadow-md"
                      : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dish Grid */}
      <div className="container mx-auto px-4 md:px-6 mt-8">
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-slide-up">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100 mx-auto max-w-lg">
            <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Search size={24} />
            </div>
            <p className="text-xl text-gray-800 mb-2 font-bold">No dishes found.</p>
            <p className="text-gray-600 text-sm mb-6">We couldn't find what you're looking for.</p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); setVegOnly(false); }}
              className="text-primary font-bold hover:underline px-6 py-2 bg-white border border-primary rounded-lg hover:bg-orange-50 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
