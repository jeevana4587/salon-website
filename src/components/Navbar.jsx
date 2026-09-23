import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Hours & Location', href: '#location' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-3 border-b border-[#E8C5BE]/30'
          : 'bg-[#FDFBF7]/90 backdrop-blur-md py-4 sm:py-5 border-b border-[#E8C5BE]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col focus:outline-none"
            aria-label="Elements Luxury Salon and Spa Home"
          >
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1412] group-hover:text-[#C58B7E] transition-colors">
                Elements
              </span>
              <Sparkles className="w-4 h-4 text-[#C5A059] opacity-80 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase text-[#4A3E39] font-semibold -mt-1">
              Luxury Salon & Spa
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#2C221E] hover:text-[#C58B7E] transition-colors rounded-md hover:bg-[#F4EFE6]/50 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${salonData.phoneRaw}`}
              className="inline-flex items-center space-x-2 px-3 py-2 text-xs font-semibold text-[#1A1412] bg-[#F4EFE6] hover:bg-[#E8C5BE]/30 rounded-full transition-colors border border-[#D8A499]/30"
              title={`Call ${salonData.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C58B7E]" />
              <span>{salonData.phone}</span>
            </a>

            <a
              href="#appointment"
              onClick={(e) => handleNavClick(e, '#appointment')}
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-white bg-[#1A1412] hover:bg-[#2C221E] rounded-full transition-all shadow-sm hover:shadow-md border border-[#C5A059]/30"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${salonData.phoneRaw}`}
              className="p-2 text-[#1A1412] bg-[#F4EFE6] rounded-full sm:hidden"
              aria-label="Call salon"
            >
              <Phone className="w-4 h-4 text-[#C58B7E]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1412] hover:text-[#C58B7E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E8C5BE]/30 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-base font-medium text-[#1A1412] hover:bg-[#F4EFE6] rounded-lg transition-colors border-b border-[#F4EFE6]/60 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#E8C5BE]/30 flex flex-col space-y-3">
            <a
              href="#appointment"
              onClick={(e) => handleNavClick(e, '#appointment')}
              className="w-full text-center py-3 text-sm font-semibold text-white bg-[#1A1412] hover:bg-[#2C221E] rounded-xl shadow-sm"
            >
              Book Appointment
            </a>

            <a
              href={`tel:${salonData.phoneRaw}`}
              className="w-full text-center py-2.5 text-sm font-semibold text-[#1A1412] bg-[#F4EFE6] hover:bg-[#E8C5BE]/40 rounded-xl border border-[#D8A499]/40 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#C58B7E]" />
              <span>Call Us: {salonData.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
