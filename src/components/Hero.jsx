import React from 'react';
import { Star, Navigation, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { salonData } from '../data/salonData';
import heroImage from '../assets/images/hero.png';

export default function Hero() {
  const handleLocationClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#location');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#FDFBF7]">
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#F4E8D1]/40 via-[#E8C5BE]/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Editorial Content Side */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            
            {/* Location Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#E8C5BE]/50 text-xs font-semibold uppercase tracking-wider text-[#2C221E]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Chittoor, Andhra Pradesh</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C58B7E]" />
              <span className="text-[#4A3E39]">Ganganapalli Road</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1412] leading-[1.15]">
                {salonData.name} <br />
                <span className="italic font-normal text-[#C58B7E]">{salonData.subtitle}</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4A3E39] max-w-xl font-normal leading-relaxed">
                {salonData.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={salonData.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-7 py-4 text-sm font-semibold text-white bg-[#1A1412] hover:bg-[#2C221E] rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group border border-[#C5A059]/40"
              >
                <Navigation className="w-4 h-4 text-[#C5A059] group-hover:rotate-12 transition-transform" />
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#location"
                onClick={handleLocationClick}
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 text-sm font-semibold text-[#1A1412] bg-[#FAF7F2] hover:bg-[#F4EFE6] rounded-full transition-all border border-[#D8A499]/50 shadow-sm hover:shadow-md"
              >
                <MapPin className="w-4 h-4 text-[#C58B7E]" />
                <span>View Location</span>
              </a>
            </div>

            {/* Trust Indicator Banner */}
            <div className="pt-4 border-t border-[#E8C5BE]/30 flex items-center space-x-6 sm:space-x-8">
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="font-serif text-2xl font-bold text-[#1A1412]">{salonData.rating}</span>
                  <div className="flex items-center text-[#C5A059] ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-[#4A3E39] font-medium mt-0.5">
                  {salonData.reviewCount} on Google
                </span>
              </div>

              <div className="h-9 w-px bg-[#E8C5BE]/40" />

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#1A1412]">{salonData.name}</span>
                <span className="text-xs text-[#4A3E39] font-normal">Kannaiah Naidu Colony</span>
              </div>
            </div>

          </div>

          {/* Editorial Visual Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame border */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#C5A059]/30 transform rotate-1 pointer-events-none" />
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#E8C5BE]/40 transform -rotate-1 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] bg-[#F4EFE6]">
                <img
                  src={heroImage}
                  alt={`${salonData.name} Interior & Styling Station`}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412]/50 via-transparent to-transparent opacity-80" />

                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-nav border border-white/40 shadow-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                        {salonData.subtitle}
                      </p>
                      <p className="text-sm font-serif font-bold text-[#1A1412]">
                        Ganganapalli Road, Near Thenabanda Dargah
                      </p>
                    </div>
                    <a
                      href={salonData.mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-[#1A1412] text-white rounded-full hover:bg-[#C58B7E] transition-colors shadow-md"
                      title="Get Directions"
                    >
                      <Navigation className="w-5 h-5 text-[#C5A059]" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
