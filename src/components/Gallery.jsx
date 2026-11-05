import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2, Play } from 'lucide-react';

export const Gallery = () => {
  const { lang, isRtl, t } = useLanguage();
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  // Gallery items including new motion videos and high-res product visuals
  const galleryItems = [
    {
      src: './assets/showcase-video-2.mp4',
      isVideo: true,
      titleEn: 'Fresh Confectionery in Motion',
      titleAr: 'حلويات ومكسرات طازجة بالفيديو',
      categoryEn: 'Motion Showcase',
      categoryAr: 'عرض بالفيديو',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      src: './assets/luxury-truffles.jpg',
      isVideo: false,
      titleEn: 'Chocolate Truffles',
      titleAr: 'ترافل الشوكولاتة الفاخرة',
      categoryEn: 'Chocolates',
      categoryAr: 'شوكولاتة',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: './assets/products/pistachio.jpg',
      isVideo: false,
      titleEn: 'Roasted In-Shell Pistachios',
      titleAr: 'فستق حلبي محمص ومملح',
      categoryEn: 'Fresh Nuts',
      categoryAr: 'مكسرات',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: './assets/products/sweets_4.webp',
      isVideo: false,
      titleEn: 'Stuffed Medjool Dates',
      titleAr: 'تمر مجهول محشي بالمكسرات',
      categoryEn: 'Dry Fruits & Dates',
      categoryAr: 'تمور وفواكه',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: './assets/exotic-spices.jpg',
      isVideo: false,
      titleEn: 'Pure Saffron Threads',
      titleAr: 'خيوط زعفران نقية',
      categoryEn: 'Spices',
      categoryAr: 'بهارات وزعفران',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      src: './assets/luxury-hamper.jpg',
      isVideo: false,
      titleEn: 'Celebration Gift Hamper',
      titleAr: 'صندوق هدايا المناسبات والأعياد',
      categoryEn: 'Gift Box',
      categoryAr: 'بوكسات هدايا',
      span: 'md:col-span-2 md:row-span-1',
    },
  ];

  const handleNext = () => {
    setActivePhotoIdx((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setActivePhotoIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-[#1F0C05] text-[#FFF4E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#FFF4E3] tracking-tight">
            {lang === 'ar' ? 'مختارات من متجرنا' : 'A Glimpse of Our Treats'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#D4AF37] font-medium">
            {lang === 'ar' ? 'شاهد تشكيلات الشوكولاتة والمكسرات والحلويات الطازجة' : 'Watch and explore our fresh chocolates, roasted nuts, and festive boxes'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setActivePhotoIdx(idx)}
              className={`group relative rounded-3xl overflow-hidden bg-[#240E06] border border-[#D4AF37]/20 shadow-xl cursor-pointer ${item.span} min-h-[220px]`}
            >
              {item.isVideo ? (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <img
                  src={item.src}
                  alt={lang === 'ar' ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {item.isVideo ? <Play className="w-3.5 h-3.5 fill-current" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8DB255]">
                  {lang === 'ar' ? item.categoryAr : item.categoryEn}
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#FFF4E3]">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setActivePhotoIdx(null)}
              aria-label="Close"
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#2A1008] text-white hover:bg-[#C8102E] border border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Item"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#2A1008]/80 text-white hover:bg-[#D4AF37] hover:text-black border border-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Item"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#2A1008]/80 text-white hover:bg-[#D4AF37] hover:text-black border border-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={activePhotoIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl max-h-[85vh] flex flex-col items-center"
            >
              {galleryItems[activePhotoIdx].isVideo ? (
                <video
                  src={galleryItems[activePhotoIdx].src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  controls
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain border-2 border-[#D4AF37]/40 shadow-2xl"
                />
              ) : (
                <img
                  src={galleryItems[activePhotoIdx].src}
                  alt={
                    lang === 'ar'
                      ? galleryItems[activePhotoIdx].titleAr
                      : galleryItems[activePhotoIdx].titleEn
                  }
                  className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain border-2 border-[#D4AF37]/40 shadow-2xl"
                />
              )}
              <div className="mt-3 text-center">
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#F3E5AB]">
                  {lang === 'ar'
                    ? galleryItems[activePhotoIdx].titleAr
                    : galleryItems[activePhotoIdx].titleEn}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
