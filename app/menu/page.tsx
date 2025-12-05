'use client';

import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import DishCard from '@/components/DishCard';
import { useApp } from '@/lib/context';
import { Search } from 'lucide-react';

const CATEGORIES = ["All", "Starters", "Main Course", "Biryani", "Drinks", "Desserts"];

export default function MenuPage() {
  const { dishes } = useApp(); // Use dynamic dishes
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = activeCategory === "All" || dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Our Menu" subtitle="Delicious Offerings" center />

        {/* Search and Filters */}
        <div className="mb-12 flex flex-col items-center gap-8">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search dishes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Category Tabs - Horizontal Scroll on Mobile */}
          <div className="w-full overflow-x-auto pb-4 -mb-4 hide-scrollbar">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 px-2 min-w-min">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-md transform scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dish Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="text-xl text-gray-500 mb-2">No dishes found matching your criteria.</p>
            <p className="text-gray-400 text-sm mb-6">Try selecting a different category or search term.</p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="text-primary font-bold hover:underline px-4 py-2 bg-orange-50 rounded-lg"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}