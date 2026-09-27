import React from 'react';
import { UserCheck, Sparkles, Heart, MapPin, CheckCircle2 } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function WhyChooseUs() {
  const iconMap = {
    UserCheck: UserCheck,
    Sparkles: Sparkles,
    Heart: Heart,
    MapPin: MapPin,
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#F4EFE6]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C58B7E]">
            The Salon Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1412]">
            Why Choose {salonData.shortName}?
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-2" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {salonData.whyChooseUs.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#E8C5BE]/30 shadow-sm hover:shadow-md transition-all duration-300 text-left space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] border border-[#D8A499]/30 flex items-center justify-center text-[#C58B7E] group-hover:bg-[#1A1412] group-hover:text-[#C5A059] transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1A1412] group-hover:text-[#C58B7E] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F4EFE6] flex items-center space-x-2 text-xs font-semibold text-[#C5A059]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
