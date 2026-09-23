import React from 'react';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F4EFE6]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Rating Summary Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C58B7E]">
            Client Experiences
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1412]">
            What Our Visitors Say
          </h2>

          {/* Rating Summary Card */}
          <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-2xl bg-white border border-[#E8C5BE]/40 shadow-sm mt-2">
            <div className="flex items-center space-x-1.5 text-[#C5A059]">
              <span className="font-serif text-3xl font-bold text-[#1A1412] mr-1">{salonData.rating}</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="h-8 w-px bg-[#E8C5BE]/40" />
            <div className="text-left">
              <span className="block text-xs font-bold text-[#1A1412] uppercase tracking-wider">
                {salonData.reviewCount} Public Ratings
              </span>
              <span className="text-[11px] text-[#4A3E39]">Verified Online Listing</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {salonData.reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl border border-[#E8C5BE]/30 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between space-y-6 relative"
            >
              <Quote className="w-10 h-10 text-[#E8C5BE]/40 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-1 text-[#C5A059]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#2C221E] leading-relaxed italic font-serif">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4EFE6] flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm text-[#1A1412]">{review.author}</h4>
                  <span className="text-xs text-[#4A3E39] block">{review.location}</span>
                </div>

                <div className="flex items-center space-x-1 text-[11px] font-medium text-[#C58B7E] bg-[#F4EFE6] px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-[#C5A059]" />
                  <span>Public Highlight</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Link */}
        <div className="mt-12 text-center">
          <a
            href={salonData.googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#1A1412] bg-white hover:bg-[#F4EFE6] rounded-full border border-[#D8A499]/40 shadow-sm transition-all hover:shadow-md group"
          >
            <span>Read More Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#C58B7E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
