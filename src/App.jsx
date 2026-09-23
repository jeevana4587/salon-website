import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1412] font-sans antialiased selection:bg-[#E8C5BE]/40 flex flex-col">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Location />
      </main>

      {/* Footer & Mobile Navigation Actions */}
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
