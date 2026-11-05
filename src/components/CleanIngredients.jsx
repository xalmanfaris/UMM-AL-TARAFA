import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ArrowUpRight } from 'lucide-react';

export const CleanIngredients = () => {
  const { lang } = useLanguage();
  const { addToCart } = useCart();

  return (
    <section id="ingredients" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#24140E]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header row: Big Bold Title + Right Stat Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#24140E] leading-[1.05] tracking-tight">
              {lang === 'ar' ? (
                <>
                  مكونات نقية <br /> نكهة أصيلة عميقة
                </>
              ) : (
                <>
                  CLEAN INGREDIENTS <br /> DEEP FLAVOR
                </>
              )}
            </h2>
          </div>

          {/* Top Right Stat Pill */}
          <div className="inline-flex items-center gap-4 sm:gap-6 bg-white px-5 sm:px-7 py-3 rounded-2xl border border-[#24140E]/15 shadow-sm">
            <div className="text-center">
              <span className="block font-sans font-bold text-sm sm:text-base text-[#24140E]">
                30ML
              </span>
              <span className="block text-[11px] text-[#24140E]/60 uppercase tracking-wider font-semibold">
                {lang === 'ar' ? 'فول سوداني نقي' : 'Peanut Butter'}
              </span>
            </div>

            {/* Nut doodle separator */}
            <div className="w-6 h-6 text-[#F8C868]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C9 2 7 4 7 7C7 8.5 7.5 9.8 8.4 10.8C7.5 11.9 7 13.2 7 15C7 18.9 10.1 22 14 22C17.9 22 21 18.9 21 15C21 13.2 20.5 11.9 19.6 10.8C20.5 9.8 21 8.5 21 7C21 3.1 17.9 2 14 2C13.3 2 12.6 2.1 12 2Z" />
              </svg>
            </div>

            <div className="text-center">
              <span className="block font-display font-black text-sm sm:text-base text-[#24140E]">
                19G
              </span>
              <span className="block text-[11px] text-[#24140E]/60 uppercase tracking-wider font-semibold">
                {lang === 'ar' ? 'بروتين نباتي نقي' : 'Solid Protein'}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Warm Golden Yellow */}
          <div className="bg-[#F8C868] text-[#24140E] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md border border-[#24140E]/10 group hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif font-black text-xl sm:text-2xl tracking-tight max-w-[220px] leading-tight">
                  {lang === 'ar' ? 'أساس مؤنة محبي النقاء' : "A PURIST'S PANTRY ESSENTIAL"}
                </h3>
                {/* Botanical leaf icon */}
                <span className="text-[#2C442D] opacity-80">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                  </svg>
                </span>
              </div>

              {/* Basket of Nuts photo */}
              <div className="rounded-2xl overflow-hidden my-4 shadow-sm bg-white/40">
                <img
                  src="./assets/modern/nut_basket.jpg"
                  alt="A Purist's Pantry Essential"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-xs sm:text-sm text-[#24140E] hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>{lang === 'ar' ? 'اختبر النقاء' : 'TEST PURITY'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Deep Olive Forest Green */}
          <div className="bg-[#2C442D] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md border border-[#24140E]/10 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-black text-xl sm:text-2xl tracking-tight leading-tight">
                  {lang === 'ar' ? 'حصاد مستدام ونقي' : 'SUSTAINABLY HARVESTED'}
                </h3>
              </div>

              {/* Artisan Jar / Product photo */}
              <div className="rounded-2xl overflow-hidden my-4 shadow-sm bg-black/20">
                <img
                  src="./assets/modern/hero_jars.jpg"
                  alt="Sustainably Harvested"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-[#F8C868]">
                {lang === 'ar' ? 'بدون سكر مضاف' : 'GUILT FREE CHOCOLATE'}
              </span>
              <button
                onClick={() =>
                  addToCart({
                    id: 'prod-pb-2',
                    nameEn: 'Cacao & Peanut Spread',
                    nameAr: 'شوكولاتة الفول السوداني',
                    priceAED: 28,
                    weight: '350g',
                    image: './assets/modern/hero_jars.jpg',
                  })
                }
                className="w-9 h-9 rounded-xl bg-[#F8C868] text-[#24140E] hover:bg-white flex items-center justify-center transition-colors shadow-sm"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Soft Sand / Biscuit Cream */}
          <div className="bg-[#F5EDE2] text-[#24140E] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md border border-[#24140E]/10 group hover:shadow-xl transition-all duration-300">
            <div>
              <h3 className="font-serif font-black text-xl sm:text-2xl tracking-tight mb-2 leading-tight">
                {lang === 'ar' ? 'فطور نقي بالزبدة الطبيعية' : 'A PURIST BREAKFAST WITH BUTTER'}
              </h3>
              <p className="text-xs text-[#24140E]/70 font-medium mb-4">
                {lang === 'ar'
                  ? 'مذاق نقي، حرفية صادقة، ومكافأة تدوم طوال اليوم.'
                  : 'Pure taste honest craft lasting reward.'}
              </p>

              {/* Breakfast Toast photo */}
              <div className="rounded-2xl overflow-hidden my-2 shadow-sm bg-white/50">
                <img
                  src="./assets/modern/toast_morning.jpg"
                  alt="A Purist Breakfast with Butter"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-[#24140E]/10">
              <a
                href="#products"
                className="inline-flex items-center gap-1.5 font-sans font-bold text-xs sm:text-sm text-[#24140E] hover:text-[#FF6443] uppercase tracking-wider transition-colors"
              >
                <span>{lang === 'ar' ? 'اطلب للمائدة' : 'CHECK OUT'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
