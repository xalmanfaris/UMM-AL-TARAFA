import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag, ArrowUpRight, Star } from 'lucide-react';
import { TransparentVideo } from './TransparentVideo';

export const ProductQuickView = ({ product, isOpen, onClose }) => {
  const { lang } = useLanguage();
  const { addToCart } = useCart();
  const [selectedPack, setSelectedPack] = useState(product?.weight || 'Standard Pack');

  if (!isOpen || !product) return null;

  const productName = lang === 'ar' ? product.nameAr : product.nameEn;
  const productDesc = lang === 'ar' ? product.descriptionAr : product.descriptionEn;

  // Custom pack options related to product
  const packOptions = [
    product.weight || 'Single Pack',
    'Bundle x 3',
    'Gift Box Pack',
  ];

  const orderMessage = lang === 'ar'
    ? `مرحباً متجر أم الطرافة، أود الاستفسار عن: ${productName} (${selectedPack}) بسعر ${product.priceAED} د.إ.`
    : `Hello UMM AL TARAFA, I would like to order: ${productName} (${selectedPack}) for AED ${product.priceAED}.`;

  const whatsappUrl = `https://wa.me/971558172666?text=${encodeURIComponent(orderMessage)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#24140E]/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-[#FFFDF9] border border-[#24140E]/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col text-[#24140E]"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3.5 right-3.5 rtl:right-auto rtl:left-3.5 z-20 p-2 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FDF1F2] hover:text-[#C0121D] text-[#24140E] transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto flex-1">
            {/* Media Preview */}
            <div className="relative aspect-[4/3] sm:aspect-square max-h-56 sm:max-h-none md:h-full bg-[#FAF7F2] p-4 sm:p-6 flex items-center justify-center shrink-0">
              {product.video ? (
                <TransparentVideo
                  src={product.video}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={product.image}
                  alt={productName}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = './assets/luxury-truffles.jpg';
                  }}
                  className="w-full h-full object-contain drop-shadow-md rounded-2xl"
                />
              )}
            </div>

            {/* Product Details */}
            <div className="p-4 sm:p-6 md:p-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C0121D] font-black mb-1 block">
                  {product.category}
                </span>

                <h3 className="font-sans font-black text-lg sm:text-2xl text-[#24140E] mb-1.5 leading-tight">
                  {productName}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center text-[#E5A118]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#E5A118]" />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#63534B]">
                    ({product.reviews || '480'} reviews)
                  </span>
                </div>

                <div className="font-sans font-black text-lg sm:text-xl text-[#24140E] mb-2.5">
                  {lang === 'ar' ? `${product.priceAED} د.إ` : `AED ${product.priceAED}`}
                </div>

                <p className="text-xs text-[#63534B] leading-relaxed mb-3">
                  {productDesc}
                </p>

                {/* Pack Selector */}
                <div className="mb-3">
                  <label className="block text-[10px] sm:text-[11px] font-black uppercase text-[#24140E] tracking-wider mb-1.5">
                    {lang === 'ar' ? 'اختر الحجم' : 'Select Size'}
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {packOptions.map((pack) => (
                      <button
                        key={pack}
                        type="button"
                        onClick={() => setSelectedPack(pack)}
                        className={`py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-xl text-xs font-bold border transition-all ${
                          selectedPack === pack
                            ? 'bg-[#C0121D] text-white border-[#C0121D]'
                            : 'bg-white text-[#63534B] border-[#24140E]/10 hover:border-[#C0121D]/30'
                        }`}
                      >
                        {pack}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Add to Cart + WhatsApp */}
              <div className="space-y-2 pt-2 border-t border-[#24140E]/10">
                <button
                  type="button"
                  onClick={() => {
                    addToCart({ ...product, weight: selectedPack });
                    onClose();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#C0121D] hover:bg-[#A30E17] text-white font-sans font-black text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95 min-h-[44px]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'إضافة إلى السلة' : 'Add to Cart'}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#FDF1F2] text-[#24140E] font-sans font-bold text-xs uppercase tracking-wider border border-[#24140E]/10 transition-colors min-h-[40px]"
                >
                  <span>{lang === 'ar' ? 'طلب فوري عبر واتساب' : 'Inquire on WhatsApp'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
