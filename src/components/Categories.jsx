import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ProductImage } from './ProductImage';

export const categoryCardsData = [
  {
    id: 'chocolates',
    titleEn: 'Chocolates',
    titleAr: 'الشوكولاتة',
    descEn: 'Assorted milk, dark, and caramel-filled chocolate treats.',
    descAr: 'تشكيلة شوكولاتة بالحليب والداكنة وبحشوات الكراميل اللذيذة.',
    image: './assets/luxury-truffles.jpg',
  },
  {
    id: 'nuts',
    titleEn: 'Fresh Nuts',
    titleAr: 'المكسرات الطازجة',
    descEn: 'Pistachios, smoked almonds, cashews, and mixed cocktail nuts.',
    descAr: 'فستق حلبي، لوز مدخن مقرمش، كاجو، ومكسرات مشكلة فاخرة.',
    image: './assets/products/pistachio.jpg',
  },
  {
    id: 'dry-fruits',
    titleEn: 'Dry Fruits & Dates',
    titleAr: 'الفواكه المجففة والتمور',
    descEn: 'Medjool dates stuffed with nuts, dried figs, and soft apricots.',
    descAr: 'تمر مجهول محشي بالمكسرات، تين مجفف، ومشمش طري.',
    image: './assets/products/sweets_4.webp',
  },
  {
    id: 'sweets',
    titleEn: 'Traditional Sweets',
    titleAr: 'الحلويات الشرقية',
    descEn: 'Crispy layered baklava, Turkish delights, and sweet confections.',
    descAr: 'بقلاوة مقرمشة محشوة بالمكسرات، وحلقوم شهي للمناسبات.',
    image: './assets/products/sweets_1.webp',
  },
  {
    id: 'spices',
    titleEn: 'Aromatic Spices',
    titleAr: 'البهارات والزعفران',
    descEn: 'Pure crimson saffron threads, green cardamom, and cinnamon sticks.',
    descAr: 'خيوط زعفران نقية، حبوب هيل أخضر، وأعواد قرفة عطرية.',
    image: './assets/exotic-spices.jpg',
  },
  {
    id: 'gift-boxes',
    titleEn: 'Gift Boxes',
    titleAr: 'بوكسات الهدايا',
    descEn: 'Custom celebratory boxes packed with your choice of sweets and nuts.',
    descAr: 'صناديق هدايا أنيقة للمناسبات والأعياد حسب اختيارك.',
    image: './assets/luxury-hamper.jpg',
  },
];

export const Categories = ({ onSelectCategory }) => {
  const { lang, isRtl, t } = useLanguage();

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const target = document.querySelector('#products');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 lg:py-24 bg-[#2A1008] text-[#FFF4E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#FFF4E3] tracking-tight">
            {t('categories.title')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#D4AF37] font-medium">
            {t('categories.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryCardsData.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative rounded-3xl overflow-hidden bg-[#1F0C05] border border-[#D4AF37]/20 shadow-xl cursor-pointer hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <ProductImage
                  src={cat.image}
                  alt={lang === 'ar' ? cat.titleAr : cat.titleEn}
                  category={cat.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0C05] via-transparent to-transparent" />
              </div>

              {/* Text Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif font-bold text-xl text-[#FFF4E3] group-hover:text-[#F3E5AB] transition-colors">
                    {lang === 'ar' ? cat.titleAr : cat.titleEn}
                  </h3>
                  <span className="w-8 h-8 rounded-full bg-[#2A1008] border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    {isRtl ? (
                      <ArrowLeft className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#FFF4E3]/70 line-clamp-2 leading-relaxed">
                  {lang === 'ar' ? cat.descAr : cat.descEn}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#8DB255] font-semibold">
                  <span>{t('categories.viewAll')}</span>
                  <span className="text-[11px] text-[#FFF4E3]/50">
                    {lang === 'ar' ? 'انقر للاستعراض' : 'Click to view'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
