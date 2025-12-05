import React from 'react';
import Image from '@/components/Image';
import SectionTitle from '@/components/SectionTitle';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="About SpiceCraft" subtitle="Our Journey" center />

        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-serif font-bold text-secondary mb-4">A Legacy of Taste</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Started in 2010 by the Sharma family, SpiceCraft Kitchen was born out of a desire to share the warmth of Indian hospitality and the richness of its cuisine. What began as a small 10-table eatery has now grown into a beloved destination for food lovers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in the power of food to bring people together. That's why we strictly stick to traditional cooking methods—slow-cooking gravies, hand-grinding spices, and using only the freshest local produce.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/id/431/800/600"
              alt="Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Chef Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-serif font-bold text-secondary mb-4">Meet Our Head Chef</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Chef Vikram Malhotra brings over 20 years of culinary experience, having worked in some of the finest kitchens across India and Dubai. His philosophy is simple: "Respect the ingredients."
            </p>
            <p className="text-gray-600 leading-relaxed">
              Vikram specializes in blending regional Indian flavors with contemporary plating styles, ensuring that every dish looks as good as it tastes.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/id/64/800/600"
              alt="Chef Portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold text-secondary">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary font-serif text-xl font-bold mb-2">Authenticity</div>
              <p className="text-gray-500">We never compromise on traditional recipes.</p>
            </div>
            <div className="text-center">
              <div className="text-primary font-serif text-xl font-bold mb-2">Quality</div>
              <p className="text-gray-500">Only the best ingredients enter our kitchen.</p>
            </div>
            <div className="text-center">
              <div className="text-primary font-serif text-xl font-bold mb-2">Hospitality</div>
              <p className="text-gray-500">Every guest is treated like family.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}