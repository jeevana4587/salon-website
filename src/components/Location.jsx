import React from 'react';
import { MapPin, Navigation, Building2, Clock } from 'lucide-react';
import { salonData } from '../data/salonData';
import OpeningHours from './OpeningHours';

export default function Location() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F4EFE6] text-xs font-semibold uppercase tracking-widest text-[#C58B7E]">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Visit Us In Chittoor</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1412]">
            Location & Opening Hours
          </h2>

          <p className="text-xs sm:text-sm text-[#4A3E39] max-w-xl mx-auto font-normal">
            Find us on Ganganapalli Road, Kannaiah Naidu Colony near Thenabanda Dargah in Chittoor.
          </p>
        </div>

        {/* Grid: Contact & Location Info | Opening Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Location & Address Info (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8C5BE]/40 shadow-sm text-left flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                  {salonData.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1412]">
                  {salonData.name}
                </h3>
              </div>

              {/* Address Details */}
              <div className="space-y-4 pt-4 border-t border-[#F4EFE6]">
                <div className="flex items-start space-x-3 text-[#2C221E]">
                  <Building2 className="w-5 h-5 text-[#C58B7E] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs sm:text-sm">
                    <p className="font-bold text-[#1A1412]">{salonData.locationShort}</p>
                    <p className="text-[#4A3E39]">{salonData.addressLine1}</p>
                    <p className="text-[#4A3E39]">{salonData.addressLine2}</p>
                    <p className="font-semibold text-[#1A1412] pt-1">{salonData.cityStatePincode}</p>
                  </div>
                </div>

                {/* Landmark info */}
                <div className="flex items-center space-x-3 text-[#2C221E] pt-2">
                  <MapPin className="w-5 h-5 text-[#C58B7E] shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <span className="text-[#4A3E39] block text-[11px]">Nearby Landmark:</span>
                    <span className="font-bold text-[#1A1412]">{salonData.landmark}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="pt-6 border-t border-[#F4EFE6] flex flex-wrap items-center gap-3">
              
              <a
                href={salonData.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1A1412] hover:bg-[#2C221E] rounded-full transition-all shadow-md hover:shadow-lg"
              >
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                <span>Get Directions on Google Maps</span>
              </a>

            </div>

          </div>

          {/* Opening Hours Component (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <OpeningHours />
          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-md border border-[#E8C5BE]/40 bg-[#F4EFE6] aspect-[16/9] sm:aspect-[21/9] max-h-[400px]">
          <iframe
            title={`${salonData.name} Location Map`}
            src={salonData.mapEmbedIframeUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] contrast-[1.05] hover:grayscale-0 transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
}
