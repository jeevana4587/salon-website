import React, { useState } from 'react';
import { salonData } from '../data/salonData';
import LightboxModal from './LightboxModal';
import { Camera, Maximize2, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? salonData.galleryImages
    : salonData.galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F4EFE6] text-xs font-semibold uppercase tracking-widest text-[#C58B7E]">
            <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1412]">
            Our Salon Gallery
          </h2>

          <p className="text-xs sm:text-sm text-[#4A3E39] max-w-xl mx-auto font-normal">
            Take a glance into our interior ambiance, styling suites, and beauty services.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {salonData.galleryCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#1A1412] text-white border border-[#C5A059]/40 shadow-sm'
                      : 'bg-[#F4EFE6] text-[#2C221E] hover:bg-[#E8C5BE]/30 border border-[#D8A499]/20'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md bg-[#F4EFE6] border border-[#E8C5BE]/20 focus:outline-none"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              role="button"
              aria-label={`View image: ${image.title}`}
            >
              <div className={`w-full ${image.aspect} overflow-hidden`}>
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/80 via-[#1A1412]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif font-bold text-base text-[#F4E8D1]">
                    {image.title}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <span className="text-xs text-white/80 font-light">
                  {image.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding customizable images */}
        <p className="text-center text-xs text-[#4A3E39] mt-8 italic">
          * Images shown represent salon aesthetic standards and can be replaced with verified client photography.
        </p>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        image={lightboxIndex !== null ? filteredImages[lightboxIndex] : null}
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
