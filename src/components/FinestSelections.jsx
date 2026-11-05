import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowUpRight, Eye } from 'lucide-react';

export const FinestSelections = ({ onOpenQuickView }) => {
  const { lang, isRtl } = useLanguage();
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#24140E]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title + Right Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#24140E] tracking-tight">
              {lang === 'ar' ? 'أرقى مختاراتنا' : 'OUR FINEST SELECTIONS'}
            </h2>
            <p className="text-xs sm:text-sm text-[#24140E]/70 font-medium mt-1">
              {lang === 'ar'
                ? 'تشكيلة مميزة من المكسرات المحمصة، الشوكولاتة الفاخرة، وزبدة المكسرات النقية'
                : 'Artisanal nut spreads, oven-roasted nuts, Belgian truffles, and Arabic sweets.'}
            </p>
          </div>

          {/* Right Coral Button with Arrow */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-[#FF6443] hover:bg-[#E95333] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-sm active:scale-95 inline-flex items-center gap-2 group"
            >
              <span>{lang === 'ar' ? 'عرض السلة' : 'ADD TO CART'}</span>
              <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#24140E] text-white shadow-md'
                  : 'bg-white text-[#24140E]/70 hover:text-[#24140E] hover:bg-[#F5EDE2] border border-[#24140E]/10'
              }`}
            >
              {lang === 'ar' ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#24140E]/5 hover:shadow-xl hover:border-[#24140E]/15 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-[#FAF7F2] mb-5 aspect-square flex items-center justify-center p-2">
                  <img
                    src={prod.image}
                    alt={lang === 'ar' ? prod.nameAr : prod.nameEn}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Quick View Button */}
                  {onOpenQuickView && (
                    <button
                      onClick={() => onOpenQuickView(prod)}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-[#24140E] hover:bg-[#FF6443] hover:text-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200"
                      aria-label="Quick view"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}

                  {/* Protein or Origin Tag Pill */}
                  {prod.proteinTag && (
                    <div className="absolute top-3 left-3 bg-[#24140E]/85 backdrop-blur-sm text-white font-sans font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {prod.proteinTag}
                    </div>
                  )}
                </div>

                {/* Product Name & Subtitle */}
                <div className="space-y-1 mb-5">
                  <h3 className="font-serif font-black text-lg sm:text-xl text-[#24140E] tracking-tight leading-snug group-hover:text-[#FF6443] transition-colors">
                    {lang === 'ar' ? prod.nameAr : prod.nameEn}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#24140E]/60 font-semibold uppercase tracking-wider">
                    <span>{prod.weight}</span>
                    <span className="text-[#2C442D] font-bold">
                      {prod.proteinTag || (lang === 'ar' ? 'طبيعي ١٠٠٪' : '100% PURE')}
                    </span>
                  </div>
                  <p className="text-xs text-[#24140E]/70 line-clamp-2 pt-1 font-medium">
                    {lang === 'ar' ? prod.descriptionAr : prod.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Action Bar: Left Pill "ADD TO CART – AED XX" + Right Square Bag Button */}
              <div className="flex items-center gap-2 pt-4 border-t border-[#24140E]/10">
                <button
                  onClick={() => addToCart(prod)}
                  className="flex-1 bg-[#FAF7F2] hover:bg-[#FF6443] text-[#24140E] hover:text-white font-sans font-bold text-xs sm:text-[13px] uppercase tracking-wider py-3 px-4 rounded-xl transition-all duration-200 text-center shadow-sm active:scale-95"
                >
                  {lang === 'ar'
                    ? `إضافة – ${prod.priceAED} د.إ`
                    : `ADD TO CART – AED ${prod.priceAED}`}
                </button>

                <button
                  onClick={() => addToCart(prod)}
                  className="w-11 h-11 bg-[#FAF7F2] hover:bg-[#FF6443] text-[#24140E] hover:text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 group-hover:border-[#FF6443]/20"
                  aria-label="Add to cart"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
