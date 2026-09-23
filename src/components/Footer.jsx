import React from 'react';
import { Sparkles, MapPin, Phone, Clock, Share2, Globe, MessageCircle } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact & Directions', href: '#location' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1412] text-[#FDFBF7] pt-16 pb-24 sm:pb-12 border-t border-[#C5A059]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10 text-left">
          
          {/* Brand Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FDFBF7]">
                Elements
              </span>
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold -mt-2">
              Luxury Salon & Spa
            </p>

            <p className="text-xs sm:text-sm text-[#E8C5BE]/80 leading-relaxed font-light">
              Elevated beauty, hair grooming, and bridal experiences in Chittoor. Crafted for your personal care and grand occasions.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-[#C5A059]">
              <span className="text-xs font-semibold text-[#E8C5BE]/90">Follow Us:</span>
              <a
                href={`https://wa.me/${salonData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#2C221E] hover:bg-[#25D366] text-white transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={salonData.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#2C221E] hover:bg-[#C58B7E] text-white transition-colors"
                title="Google Listing"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#social"
                onClick={(e) => e.preventDefault()}
                className="p-2 rounded-full bg-[#2C221E] hover:bg-[#C58B7E] text-white transition-colors"
                title="Share Salon"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#F4E8D1]">Quick Links</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#E8C5BE]/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#F4E8D1]">Contact & Location</h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#E8C5BE]/80">
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{salonData.locationShort}</p>
                  <p>{salonData.addressLine1}</p>
                  <p>{salonData.cityStatePincode}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Phone: <a href={`tel:${salonData.phoneRaw}`} className="text-white hover:underline">{salonData.phone}</a></span>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Hours: 9:00 AM – 8:00 PM (Daily)</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8C5BE]/60 gap-4">
          <p>© {currentYear} Elements Luxury Salon and Spa. All rights reserved.</p>
          <p className="text-[11px]">Designed for Elements Luxury Salon & Spa, Chittoor.</p>
        </div>

      </div>
    </footer>
  );
}
