import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function ServiceCard({ service }) {
  const whatsappServiceMessage = `Hi, I would like to inquire about booking an appointment for ${service.name} at Elements Luxury Salon and Spa.`;
  const whatsappUrl = `https://wa.me/${salonData.whatsappNumber}?text=${encodeURIComponent(whatsappServiceMessage)}`;

  return (
    <div className="luxury-card rounded-2xl overflow-hidden flex flex-col h-full group bg-white">
      
      {/* Service Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F4EFE6]">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-[#FDFBF7]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#E8C5BE]/40 text-[11px] font-semibold text-[#1A1412] uppercase tracking-wider">
          {service.categoryName}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between text-left space-y-4">
        
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-xl font-bold text-[#1A1412] group-hover:text-[#C58B7E] transition-colors">
              {service.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#4A3E39] leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Card Footer Action */}
        <div className="pt-4 border-t border-[#F4EFE6] flex items-center justify-between mt-auto">
          <div>
            <span className="text-xs font-medium text-[#4A3E39] block">Pricing</span>
            <span className="text-xs font-semibold text-[#C5A059]">
              {service.price ? service.price : service.priceLabel || 'Call for Pricing'}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold text-[#1A1412] bg-[#F4EFE6] hover:bg-[#1A1412] hover:text-white rounded-xl transition-all border border-[#D8A499]/30 group/btn"
            title={`Book ${service.name} via WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover/btn:text-white transition-colors" />
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>

    </div>
  );
}
