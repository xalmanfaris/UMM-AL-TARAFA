import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const HonestIngredients = () => {
  const { lang } = useLanguage();

  const highlightList = [
    {
      titleEn: 'ORGANIC CHOCOLATE SPREAD',
      titleAr: 'شوكولاتة عضوية قابلة للدهن',
      descEn: 'Pure Cocoa Organic Chocolate Spread',
      descAr: 'كاكاو نقي مع بندق وفول سوداني محمص',
      img: './assets/modern/hero_jars.jpg',
    },
    {
      titleEn: 'NATURAL PEANUT CRUNCH',
      titleAr: 'زبدة فول سوداني مقرمشة',
      descEn: 'Crunchy Natural Peanuts Rich Flavor',
      descAr: 'حبات مقرمشة طبيعية ونكهة غنية',
      img: './assets/modern/stacked_sandwich.jpg',
    },
    {
      titleEn: 'ORGANIC PEANUT BUTTER',
      titleAr: 'زبدة الفول السوداني النقية',
      descEn: 'Simply Made Organic Peanut Butter',
      descAr: 'مصنوعة ببساطة ونقاء تام',
      img: './assets/modern/artisan_jar.jpg',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#24140E]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Headline */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#24140E] uppercase tracking-tight leading-tight">
            {lang === 'ar' ? 'مكونات صادقة لنكهة ترتقي بحواسك' : 'HONEST INGREDIENTS ELEVATED FLAVOR'}
          </h2>
        </div>

        {/* 3 Columns Layout: Left Stacked Pills | Center Artisan Mason Jar | Right Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: 3 Stacked Rounded Pill Cards */}
          <div className="lg:col-span-4 space-y-4">
            {highlightList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#24140E]/10 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-[#24140E]/10 bg-[#FAF7F2]">
                  <img
                    src={item.img}
                    alt={item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-black text-xs sm:text-sm text-[#24140E] uppercase tracking-wider group-hover:text-[#FF6443] transition-colors truncate">
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h4>
                  <p className="text-xs text-[#24140E]/60 font-medium truncate mt-0.5">
                    {lang === 'ar' ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Artisan Glass Jar with Twine & Original Stamp */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm group">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#24140E]/10 bg-white">
                <img
                  src="./assets/modern/artisan_jar.jpg"
                  alt="Artisan Mason Jar with Twine"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Promise Statement + Explore Button */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#24140E] uppercase tracking-tight leading-snug">
              {lang === 'ar'
                ? 'عهدنا بتقديم مكونات حقيقية مختارة بعناية فائقة، ترتقي عبر حرفية متوارثة'
                : 'A PROMISE TO USE REAL, CAREFULLY SELECTED INGREDIENTS, ELEVATED THROUGH THOUGHTFUL CRAFT'}
            </h3>

            {/* Coral Action Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <a
                href="#products"
                className="bg-[#FF6443] hover:bg-[#E95333] text-white font-display font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-sm active:scale-95 inline-flex items-center gap-2"
              >
                <span>{lang === 'ar' ? 'استكشف' : 'EXPLORE'}</span>
              </a>
              <a
                href="#products"
                aria-label="Explore honest ingredients"
                className="w-12 h-12 bg-[#FF6443] hover:bg-[#E95333] text-white rounded-2xl flex items-center justify-center transition-all shadow-sm active:scale-95 group"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p className="text-xs text-[#24140E]/60 font-semibold tracking-wider uppercase">
              {lang === 'ar'
                ? 'فول سوداني ومكسرات مختارة بعناية، مصنوعة بإتقان تام.'
                : 'Real peanuts, chosen with care crafted to perfection'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
