import React, { useState } from 'react';
import Image from '@/components/Image';
import SectionTitle from '@/components/SectionTitle';
import { GALLERY_IMAGES } from '@/lib/data';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Our Gallery" subtitle="Moments & Ambience" center />

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md cursor-pointer bg-gray-100"
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={`Gallery image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2">
                <ZoomIn className="text-white opacity-80" size={32} />
                <span className="text-white font-bold tracking-widest uppercase border-2 border-white px-4 py-2 text-sm">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
             <Image 
               src={selectedImage} 
               alt="Full size preview" 
               className="w-full h-full object-contain max-h-[90vh]"
             />
          </div>
        </div>
      )}
    </div>
  );
}