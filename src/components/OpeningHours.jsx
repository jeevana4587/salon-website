import React from 'react';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { salonData } from '../data/salonData';

export default function OpeningHours() {
  // Get current day name to highlight today
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8C5BE]/40 shadow-sm text-left flex flex-col justify-between h-full">
      <div className="space-y-6">
        
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-[#F4EFE6] pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-[#F4EFE6] text-[#C58B7E]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1A1412]">Opening Hours</h3>
              <p className="text-xs text-[#4A3E39]">Weekly salon & spa schedule</p>
            </div>
          </div>

          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#25D366]/10 text-[#20ba5a] border border-[#25D366]/20">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Open Daily</span>
          </span>
        </div>

        {/* Days List */}
        <ul className="space-y-2.5 text-xs sm:text-sm">
          {salonData.openingHours.map((item) => {
            const isToday = item.day.toLowerCase() === todayName.toLowerCase();
            return (
              <li
                key={item.day}
                className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                  isToday
                    ? 'bg-[#F4EFE6] font-semibold text-[#1A1412] border border-[#D8A499]/40'
                    : 'text-[#2C221E] hover:bg-[#FDFBF7]'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[#C58B7E]" />
                  <span>{item.day}</span>
                  {isToday && (
                    <span className="text-[10px] bg-[#C58B7E] text-white px-2 py-0.5 rounded-full font-bold uppercase">
                      Today
                    </span>
                  )}
                </div>
                <span className="font-medium text-[#1A1412]">{item.hours}</span>
              </li>
            );
          })}
        </ul>

      </div>

      <div className="mt-6 pt-4 border-t border-[#F4EFE6] text-xs text-[#4A3E39] flex items-center space-x-2">
        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
        <span>Timings can be updated directly via <code>salonData.js</code></span>
      </div>
    </div>
  );
}
