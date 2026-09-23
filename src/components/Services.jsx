import React, { useState } from 'react';
import { salonData } from '../data/salonData';
import ServiceCard from './ServiceCard';
import { Sparkles, Calendar } from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? salonData.services
    : salonData.services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F4EFE6] text-xs font-semibold uppercase tracking-widest text-[#C58B7E]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Our Offerings</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1412]">
            Services Designed Around You
          </h2>

          <p className="text-sm sm:text-base text-[#4A3E39] max-w-2xl mx-auto font-normal">
            From everyday beauty care to special occasions, explore our salon and spa services.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {salonData.serviceCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#1A1412] text-white shadow-md border border-[#C5A059]/40 scale-105'
                      : 'bg-[#F4EFE6] text-[#2C221E] hover:bg-[#E8C5BE]/30 border border-[#D8A499]/20'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1A1412] to-[#2C221E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#C5A059]/30 text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-[#F4E8D1]">
              Looking for a custom beauty package?
            </h3>
            <p className="text-xs sm:text-sm text-[#E8C5BE]/90 font-light">
              Contact Elements Luxury Salon and Spa for bridal trials, special event styling, and personalized treatments.
            </p>
          </div>

          <a
            href="#appointment"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#1A1412] bg-[#F4E8D1] hover:bg-white rounded-full transition-colors shrink-0 shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>Book Your Appointment</span>
          </a>
        </div>

      </div>
    </section>
  );
}
