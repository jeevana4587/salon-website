import React from 'react';
import { Star, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { salonData } from '../data/salonData';
import aboutImage from '../assets/images/about.png';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F4EFE6]/60 relative overflow-hidden">
      {/* Background decorative swirl */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#E8C5BE]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-[#FDFBF7]">
              <img
                src={aboutImage}
                alt="About Elements Luxury Salon and Spa"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/30 via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#E8C5BE]/40 max-w-xs text-left">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#F4EFE6] rounded-xl text-[#C58B7E]">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1A1412]">Welcoming Ambiance</h4>
                  <p className="text-xs text-[#4A3E39]">Designed for personal care & relaxation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C58B7E]">
                Welcome To Our Salon
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1412] leading-tight">
                About Elements
              </h2>
              <div className="w-16 h-0.5 bg-[#C5A059] mt-2" />
            </div>

            <p className="text-base sm:text-lg text-[#2C221E] leading-relaxed font-normal">
              Elements Luxury Salon and Spa brings professional salon and beauty services together in a comfortable and elegant setting in Chittoor.
            </p>

            <p className="text-sm sm:text-base text-[#4A3E39] leading-relaxed">
              From everyday hair and beauty care to specialized bridal services, our salon offers a range of services designed around different occasions and personal styles. Listed with several years of operation in Chittoor, we prioritize client satisfaction and a relaxing experience for every visitor.
            </p>

            {/* Verified Statistics Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8C5BE]/40">
              <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E8C5BE]/30 text-center">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#1A1412]">
                  {salonData.reviewCount}
                </span>
                <span className="text-xs text-[#4A3E39] font-medium mt-1 block">
                  Customer Ratings
                </span>
              </div>

              <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E8C5BE]/30 text-center">
                <div className="flex items-center justify-center space-x-1">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1412]">
                    {salonData.rating}
                  </span>
                  <Star className="w-4 h-4 text-[#C5A059] fill-current" />
                </div>
                <span className="text-xs text-[#4A3E39] font-medium mt-1 block">
                  Public Rating
                </span>
              </div>

              <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E8C5BE]/30 text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#1A1412]">
                  Chittoor
                </span>
                <span className="text-xs text-[#4A3E39] font-medium mt-1 block">
                  Local Salon & Spa
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
