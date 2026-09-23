import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${salonData.whatsappNumber}?text=${encodeURIComponent(salonData.whatsappDefaultMessage)}`;

  return (
    <aside
      aria-label="Quick mobile action bar"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#1A1412]/95 backdrop-blur-lg border-t border-[#C5A059]/30 px-3 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Action */}
        <a
          href={`tel:${salonData.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#2C221E] text-white hover:bg-[#3A2E29] transition-colors border border-white/10"
        >
          <Phone className="w-4 h-4 text-[#C58B7E] mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">Call Us</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white hover:opacity-95 transition-opacity"
        >
          <MessageCircle className="w-4 h-4 fill-current mb-1" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Directions Action */}
        <a
          href={salonData.mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#F4E8D1] text-[#1A1412] hover:bg-white transition-colors"
        >
          <Navigation className="w-4 h-4 text-[#C5A059] mb-1" />
          <span className="text-[11px] font-semibold tracking-tight">Directions</span>
        </a>

      </div>
    </aside>
  );
}
