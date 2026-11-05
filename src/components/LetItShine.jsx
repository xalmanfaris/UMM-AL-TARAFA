import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export const LetItShine = () => {
  const { lang } = useLanguage();

  return (
    <section id="recipes" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#24140E]/8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Giant Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#24140E] uppercase tracking-tight leading-[0.95] mb-12 sm:mb-16">
          {lang === 'ar' ? 'دع النقاء يتألق' : 'LET THE PEANUT SHINE'}
        </h2>

        {/* 3-Part Row: Left Toast Image | Center Call to Action + Pill | Right Honey Drizzle Bowl */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Toast slice holding image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-xl border border-[#24140E]/10 bg-white group">
              <img
                src="/assets/modern/toast_morning.jpg"
                alt="Peanut toast"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Botanical leaves floating */}
              <div className="absolute top-3 left-3 w-6 h-6 text-[#799E47]">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Center Column: Indulge for less up to 30g protein + Shop Now Pill */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#24140E] uppercase tracking-tight max-w-xs mx-auto leading-snug">
              {lang === 'ar'
                ? 'استمتع بأعلى جودة مع ما يصل إلى ٣٠ غرام بروتين'
                : 'INDULGE FOR LESS UP TO 30G PROTEIN'}
            </h3>

            {/* Warm Golden Yellow Action Pill & Arrow */}
            <div className="flex items-center justify-center gap-2">
              <a
                href="#products"
                className="bg-[#F8C868] hover:bg-[#E5B14B] text-[#24140E] font-display font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-sm active:scale-95 inline-flex items-center gap-2"
              >
                <span>{lang === 'ar' ? 'تسوق الآن' : 'SHOP NOW'}</span>
              </a>
              <a
                href="#products"
                aria-label="Shop now"
                className="w-12 h-12 bg-[#F8C868] hover:bg-[#E5B14B] text-[#24140E] rounded-2xl flex items-center justify-center transition-all shadow-sm active:scale-95 group"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Scattered raw nuts graphic accent */}
            <div className="pt-2 flex justify-center items-center gap-2 text-xs font-semibold text-[#24140E]/60 uppercase tracking-widest">
              <span>🌾 Rolla Souq</span>
              <span>•</span>
              <span>Fresh Batch Daily</span>
            </div>
          </div>

          {/* Right Column: Honey & Butter Drizzle Bowl */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-xl border border-[#24140E]/10 bg-white group">
              <img
                src="/assets/modern/honey_drizzle.jpg"
                alt="Honey butter drizzle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
