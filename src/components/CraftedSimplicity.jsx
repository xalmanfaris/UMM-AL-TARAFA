import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export const CraftedSimplicity = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#24140E]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline with inline circular badges/icons */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#24140E] tracking-tight leading-[1.05]">
            <span className="inline-flex items-center gap-2">
              {lang === 'ar' ? 'مصنوع ببساطة' : 'CRAFTED'}
              <span className="inline-block w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden align-middle border-2 border-[#24140E]/20 shadow-sm">
                <img
                  src="./assets/modern/toast_morning.jpg"
                  alt="Toast"
                  className="w-full h-full object-cover"
                />
              </span>
              {lang === 'ar' ? '' : 'WITH SIMPLICITY'}
            </span>
            <br />
            <span className="inline-flex items-center gap-2 mt-2">
              {lang === 'ar' ? 'ومحتفى به في كل نكهة' : 'CELEBRATED IN FLAVOR'}
              <span className="inline-block w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden align-middle border-2 border-[#24140E]/20 shadow-sm bg-[#F8C868] p-1.5">
                <img
                  src="./assets/modern/honey_drizzle.jpg"
                  alt="Spoon"
                  className="w-full h-full object-cover rounded-full"
                />
              </span>
            </span>
          </h2>
        </div>

        {/* 3 Columns: Left Story + Center Giant Stacked Sandwich + Right Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Ritual text + Button */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-6">
            <p className="text-sm sm:text-base text-[#24140E]/80 font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
              {lang === 'ar'
                ? 'أكثر من مجرد دهن، إنها طقوس يومية في برطمان محمص ببطء، مطحون حجرياً، ومصنوع بكل شغف وهدوء.'
                : 'More than a spread, this is a daily ritual in a jar slow-roasted, stone-ground, & crafted with calm.'}
            </p>

            {/* Coral Action Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <a
                href="#products"
                className="bg-[#FF6443] hover:bg-[#E95333] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-sm active:scale-95 inline-flex items-center gap-2"
              >
                <span>{lang === 'ar' ? 'مذاق أفضل' : 'TASTE BETTER'}</span>
              </a>
              <a
                href="#products"
                aria-label="Taste better"
                className="w-12 h-12 bg-[#FF6443] hover:bg-[#E95333] text-white rounded-2xl flex items-center justify-center transition-all shadow-sm active:scale-95 group"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Center Column: Giant Sandwich stack oozing with spread */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm group">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#24140E]/10 bg-white">
                <img
                  src="./assets/modern/stacked_sandwich.jpg"
                  alt="Crafted with simplicity stacked toast sandwich"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Punchy Editorial Statement */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h3 className="font-serif font-black text-xl sm:text-2xl lg:text-3xl text-[#24140E] tracking-tight leading-tight max-w-xs mx-auto lg:mx-0">
              {lang === 'ar'
                ? 'مكونات تعرفها بالعين – ومذاق لن تنساه أبداً'
                : 'INGREDIENTS YOU CAN RECOGNIZE – TASTE YOU WON\'T FORGET'}
            </h3>
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-[#FF6443] tracking-widest uppercase">
              <span>100% REAL NUTS</span>
              <span>•</span>
              <span>NO PRESERVATIVES</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
