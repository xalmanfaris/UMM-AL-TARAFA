import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { products, categories } from '../data/products';
import { ProductQuickView } from './ProductQuickView';
import { ProductImage } from './ProductImage';
import { ShoppingBag, Eye } from 'lucide-react';

export const FeaturedProducts = ({ selectedCategory, onCategoryChange }) => {
  const { lang, isRtl, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(selectedCategory || 'all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      setActiveFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const handleFilterClick = (catId) => {
    setActiveFilter(catId);
    if (onCategoryChange) {
      onCategoryChange(catId);
    }
  };

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter);

  const getWhatsAppLink = (product) => {
    const name = lang === 'ar' ? product.nameAr : product.nameEn;
    const msg = lang === 'ar'
      ? `مرحباً أخي حسين، أود الاستفسار عن سعر وتوفر: "${name}" من متجر أم الطرافة.`
      : `Hello Hussain, I would like to ask for today's price and availability for: "${name}" from UMM AL TARAFA.`;
    return `https://wa.me/971558172666?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="products" className="py-20 lg:py-24 bg-[#1A0A04] text-[#FFF4E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#FFF4E3] tracking-tight">
            {t('products.title')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#D4AF37] font-medium">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleFilterClick(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#C9782B] text-white shadow-md'
                    : 'bg-[#2A1008] text-[#FFF4E3]/70 hover:text-white border border-white/5'
                }`}
              >
                <span>{lang === 'ar' ? cat.nameAr : cat.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Uniform Grid: Same height, aspect ratio, clean wrapping titles, no truncated dots */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const name = lang === 'ar' ? product.nameAr : product.nameEn;
              const desc = lang === 'ar' ? product.descriptionAr : product.descriptionEn;

              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-3xl overflow-hidden bg-[#240E06] border border-[#D4AF37]/25 shadow-xl flex flex-col justify-between h-full hover:border-[#D4AF37]/60 transition-all"
                >
                  <div>
                    {/* Consistent Aspect Ratio Image with ProductImage Fallback */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                      <ProductImage
                        src={product.image}
                        alt={name}
                        category={product.category}
                        slug={product.slug}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#240E06] via-transparent to-transparent opacity-60" />

                      {/* Quick View Button on Hover */}
                      <button
                        type="button"
                        onClick={() => setQuickViewProduct(product)}
                        className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 px-3 py-1.5 rounded-full bg-[#1A0A04]/90 hover:bg-[#D4AF37] text-white hover:text-black text-[11px] font-semibold border border-white/20 transition-all flex items-center gap-1.5 shadow-md"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t('products.quickView')}</span>
                      </button>
                    </div>

                    {/* Product Info: Titles wrap naturally without truncated ellipsis */}
                    <div className="p-5 pb-3">
                      <span className="text-[10px] uppercase tracking-wider text-[#8DB255] font-bold block mb-1">
                        {product.weight}
                      </span>

                      {/* Heading wraps cleanly to two lines if needed */}
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#FFF4E3] group-hover:text-[#F3E5AB] transition-colors leading-snug min-h-[2.6rem] flex items-center">
                        {name}
                      </h3>

                      <p className="text-xs text-[#FFF4E3]/70 leading-relaxed mt-1 line-clamp-2">
                        {desc}
                      </p>
                    </div>
                  </div>

                  {/* Clean Action Button: Ask for today's price */}
                  <div className="p-5 pt-0">
                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#2A1008] hover:bg-[#25D366] text-[#F3E5AB] hover:text-white border border-[#D4AF37]/35 hover:border-transparent text-xs font-bold transition-all shadow-md active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{t('products.askPrice')}</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Helpful pricing note */}
        <div className="mt-12 text-center max-w-xl mx-auto p-3.5 rounded-2xl bg-[#2A1008] border border-white/5">
          <p className="text-xs text-[#FFF4E3]/75">
            {t('products.note')}
          </p>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};
