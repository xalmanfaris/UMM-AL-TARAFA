import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cravingCategories } from '../data/products';
import { DoodleHeart } from './Doodles';
import { ArrowUpRight } from 'lucide-react';

export const ShopByCraving = ({ selectedCategory, onSelectCategory }) => {
  const { lang } = useLanguage();

  const handleCategoryClick = (catId) => {
    onSelectCategory(catId);
    const target = document.querySelector('#top-picks');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cravings" className="py-12 sm:py-16 bg-[#FFFDF9] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C0121D]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#C0121D]">
                {lang === 'ar' ? 'التصنيفات الرئيسية' : 'Categories • Fresh & Packaged'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#24140E] tracking-tight font-sans">
                {lang === 'ar' ? 'تسوق حسب الرغبة' : 'Shop by Craving'}
              </h2>
              <DoodleHeart className="w-6 h-6 text-[#C0121D]" />
            </div>
          </div>
        </div>

        {/* 4 Square (1:1) Full Picture Boxes Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {cravingCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`group cursor-pointer rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5 active:scale-[0.98] ${
                  isSelected
                    ? 'ring-2 ring-[#C0121D] border-[#C0121D] shadow-lg'
                    : 'border-[#24140E]/8 shadow-sm hover:shadow-xl hover:border-[#C0121D]/30'
                }`}
              >
                {/* 1:1 Square Picture that fills the box entirely */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={cat.image}
                    alt={cat.nameEn}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = cat.icon || './assets/luxury-truffles.jpg';
                    }}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  />

                  {/* Gentle gradient overlay for high contrast readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/20 pointer-events-none" />

                  {/* Top Floating Badge: Items available */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 rtl:left-auto rtl:right-2 rtl:sm:right-3">
                    <span className="bg-white/95 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-black text-[#24140E] shadow-sm border border-white/40">
                      {cat.itemCount} <span className="hidden xs:inline">{lang === 'ar' ? 'صنف' : 'items'}</span>
                    </span>
                  </div>

                  {/* Quick Go Arrow */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 rtl:right-auto rtl:left-2 rtl:sm:left-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#24140E] group-hover:bg-[#C0121D] group-hover:text-white transition-colors shadow-sm">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  {/* Bottom Text Overlaid on the Image Box */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 text-white space-y-0.5">
                    <h3 className="font-black text-xs sm:text-base lg:text-lg tracking-tight font-sans leading-snug drop-shadow-sm group-hover:text-[#FFFDF9] transition-colors line-clamp-1">
                      {lang === 'ar' ? cat.nameAr : cat.nameEn}
                    </h3>
                  </div>
                </div>

                {/* Subtitle / Description Footer below the box */}
                <div className="p-2 sm:p-3.5 bg-white border-t border-[#24140E]/5 flex items-center justify-between">
                  <p className="text-[10px] sm:text-xs text-[#63534B] font-medium line-clamp-1">
                    {cat.description}
                  </p>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#C0121D] shrink-0 ml-1.5 rtl:mr-1.5 rtl:ml-0 group-hover:underline">
                    {lang === 'ar' ? 'تصفح' : 'Browse'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
