import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { TransparentVideo } from './TransparentVideo';

export const Hero = () => {
  const { lang, isRtl } = useLanguage();
  const { addToCart } = useCart();
  const [selectedCoreIdx, setSelectedCoreIdx] = useState(0);

  const coreProducts = [
    {
      id: 'prod-2',
      nameEn: 'Pistachio Chocostick',
      nameAr: 'فستق شوكو ستيك الفاخر',
      priceAED: 38,
      video: '/assets/pistachio-chocostick.webm',
      image: '/assets/products/pistachio.jpg',
      badgeColor: 'border-[#2C442D]',
    },
    {
      id: 'prod-bounty',
      nameEn: 'Bounty Chocolate',
      nameAr: 'شوكولاتة باونتي الفاخرة',
      priceAED: 24,
      video: '/assets/bounty.webm',
      image: '/assets/modern/artisan_jar.jpg',
      badgeColor: 'border-[#1E4D6B]',
    },
    {
      id: 'prod-kunafa',
      nameEn: 'Pistachio Kunafa Chocolate',
      nameAr: 'شوكولاتة كنافة بالفستق الحلبي',
      priceAED: 28,
      video: '/assets/kunafa.webm',
      image: '/assets/products/pistachio.jpg',
      badgeColor: 'border-[#55722F]',
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Headline across top */}
        <div className="text-center md:text-left mb-8 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.05] tracking-tight text-[#24140E] select-none"
          >
            {lang === 'ar' ? 'مصنوعة بوعي وإتقان' : 'CRAFTED FOR CONSCIOUS'}
          </motion.h1>
        </div>

        {/* 2. Hero Layout: Left Info | Right Video Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Description + Buttons + Core Products */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm sm:text-base text-[#24140E]/80 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
              {lang === 'ar'
                ? 'مصنوع بعناية فائقة، كل ملعقة تقدم مكونات نقية ومذاقاً طبيعياً غنياً يبهج حواسك ويغذي يومك.'
                : 'Crafted with care, every spoonful deliver pure ingredients, simple pleasures, and quiet luxury.'}
            </p>

            {/* Coral Action Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <a
                href="#products"
                className="bg-[#FF6443] hover:bg-[#E95333] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-sm active:scale-95 inline-flex items-center gap-2"
              >
                <span>{lang === 'ar' ? 'استكشف الآن' : 'EXPLORE NOW'}</span>
              </a>
              <a
                href="#products"
                aria-label="Explore products"
                className="w-12 h-12 bg-[#FF6443] hover:bg-[#E95333] text-white rounded-2xl flex items-center justify-center transition-all shadow-sm active:scale-95 group"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* OUR CORE PRODUCTS with interactive circular thumbnails */}
            <div className="pt-2 sm:pt-4">
              <h3 className="font-sans font-bold text-xs sm:text-sm text-[#24140E] uppercase tracking-wider mb-3">
                {lang === 'ar' ? 'منتجاتنا الأساسية' : 'OUR CORE PRODUCTS'}
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {coreProducts.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedCoreIdx(idx)}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 border-2 transition-all overflow-hidden bg-[#FAF7F2] ${
                      selectedCoreIdx === idx
                        ? 'border-[#FF6443] scale-110 shadow-md ring-2 ring-[#FF6443]/30'
                        : 'border-[#24140E]/20 hover:border-[#24140E]/50'
                    }`}
                  >
                    {p.video ? (
                      <TransparentVideo
                        src={p.video}
                        isMuted={true}
                        className="w-full h-full rounded-full object-cover pointer-events-none"
                      />
                    ) : (
                      <img
                        src={p.image}
                        alt={p.nameEn}
                        className="w-full h-full rounded-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Showcase Column: High-Res Video Showcase Box */}
          <div className="lg:col-span-7 relative flex items-center justify-center order-1 lg:order-2">
            
            {/* Floating Doodled Botanical Leaf 1 */}
            <div className="absolute -top-6 left-8 sm:left-12 w-8 h-8 text-[#55722F] animate-bounce pointer-events-none opacity-80 z-20">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>

            {/* Floating Doodled Leaf 2 */}
            <div className="absolute top-10 right-4 sm:right-8 w-6 h-6 text-[#799E47] animate-pulse pointer-events-none opacity-75 z-20">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </div>

            {/* Main Product Showcase - Pure Floating (No Background Box) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl group flex flex-col items-center justify-center"
            >
              <div className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
                {coreProducts[selectedCoreIdx].video ? (
                  <div className="relative w-full flex items-center justify-center">
                    <TransparentVideo
                      key={coreProducts[selectedCoreIdx].id}
                      src={coreProducts[selectedCoreIdx].video}
                      isMuted={true}
                      className="w-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <img
                    src={coreProducts[selectedCoreIdx].image || '/assets/modern/hero_jars.jpg'}
                    alt="Umm Al Tarafa Core Product"
                    className="w-full h-auto max-h-[460px] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Clean Naked Product Info and Price Tag below the item */}
              <div className="w-full mt-4 flex items-center justify-between px-3">
                <div className="space-y-0.5">
                  <h4 className="font-serif font-black text-lg sm:text-xl text-[#24140E] tracking-tight">
                    {lang === 'ar' ? coreProducts[selectedCoreIdx].nameAr : coreProducts[selectedCoreIdx].nameEn}
                  </h4>
                  <div className="font-sans font-extrabold text-sm sm:text-base text-[#FF6443]">
                    AED {coreProducts[selectedCoreIdx].priceAED}
                  </div>
                </div>
                <button
                  onClick={() => addToCart(coreProducts[selectedCoreIdx])}
                  className="bg-[#FF6443] hover:bg-[#E95333] text-white px-5 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <span>{lang === 'ar' ? 'إضافة إلى السلة' : 'Add to Cart'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
