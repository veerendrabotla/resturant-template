import Image from "@/components/Image";
import Link from "@/lib/router-shim";
import { ArrowRight, Star, Clock, ShieldCheck, Truck, Utensils } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import DishCard from "@/components/DishCard";
import { DISHES, TESTIMONIALS } from "@/lib/data";

export default function Home() {
  const featuredDishes = DISHES.filter(dish => dish.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/id/429/1920/1080"
            alt="Delicious Food Spread"
            fill
            className="object-cover"
          />
          {/* White Overlay for Contrast */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-secondary mb-6 animate-slide-up">
            Taste the <span className="text-primary">Tradition</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-800 font-medium mb-10 max-w-2xl mx-auto animate-slide-up [animation-delay:200ms]">
            Authentic recipes, fresh ingredients, and a passion for culinary excellence. Experience the finest dining in town.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:400ms]">
            <Link 
              href="/menu"
              className="px-8 py-4 bg-secondary text-white rounded-lg font-bold text-lg hover:bg-black transition-colors flex items-center gap-2 shadow-xl"
            >
              View Menu <ArrowRight size={20} />
            </Link>
            <Link 
              href="/order"
              className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors shadow-xl"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Signature Dishes" 
            subtitle="Our Chef's Specials" 
            center 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/menu" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors border-b-2 border-primary pb-1"
            >
              View Full Menu <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 text-center group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Fresh Ingredients</h3>
              <p className="text-gray-800 font-medium">We source only the freshest produce and authentic spices daily.</p>
            </div>
            <div className="p-6 text-center group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Hygienic Kitchen</h3>
              <p className="text-gray-800 font-medium">Our kitchen follows strict safety and hygiene protocols.</p>
            </div>
            <div className="p-6 text-center group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Authentic Recipes</h3>
              <p className="text-gray-800 font-medium">Generations-old recipes passed down by our master chefs.</p>
            </div>
            <div className="p-6 text-center group hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Fast Delivery</h3>
              <p className="text-gray-800 font-medium">Hot and fresh food delivered to your doorstep in no time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background text-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="What Our Customers Say" subtitle="Testimonials" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F1C40F" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic font-medium leading-relaxed">"{review.text}"</p>
                <h4 className="font-bold text-lg text-black">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://picsum.photos/id/1060/800/600" 
                alt="Chef Cooking"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionTitle title="Our Story" subtitle="About Us" />
              <p className="text-gray-800 mb-6 leading-relaxed font-medium">
                Founded in 2010, SpiceCraft Kitchen began with a simple mission: to bring the authentic flavors of royal Indian heritage to your plate. Our chefs blend traditional techniques with modern presentation to create an unforgettable dining experience.
              </p>
              <p className="text-gray-800 mb-8 leading-relaxed font-medium">
                Every dish is a masterpiece, crafted with passion and precision using hand-picked spices and locally sourced ingredients.
              </p>
              <Link 
                href="/about"
                className="inline-block px-8 py-3 bg-secondary text-white rounded-lg font-bold hover:bg-primary transition-colors shadow-md"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}