import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { X, Check, Gift, Package } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BuildBoxModal = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const { addToCart } = useCart();

  const boxSizes = [
    { id: 'sampler-3', count: 3, name: 'Snack Sampler', nameAr: 'بوكس التذوق (٣)', priceAED: 62 },
    { id: 'goodness-5', count: 5, name: 'Goodness Box', nameAr: 'بوكس السعادة (٥)', priceAED: 90, popular: true },
    { id: 'family-8', count: 8, name: 'Family Feast', nameAr: 'البوكس العائلي (٨)', priceAED: 135 },
  ];

  const [selectedSize, setSelectedSize] = useState(boxSizes[1]); // default 5
  // Default selected IDs that exist in products
  const [selectedSnacks, setSelectedSnacks] = useState([
    'prod-cadbury-dairy-milk',
    'prod-bayara-jumbo-pistachios',
    'prod-ferrero-rocher',
  ]);
  const [giftNote, setGiftNote] = useState('');

  if (!isOpen) return null;

  // Filter items suitable for gift boxes (chocolates & nuts)
  const boxEligibleProducts = products.filter(
    (p) => p.category === 'chocolates' || p.category === 'nuts'
  ).slice(0, 16);

  const toggleSnack = (prodId) => {
    if (selectedSnacks.includes(prodId)) {
      setSelectedSnacks(selectedSnacks.filter((id) => id !== prodId));
    } else {
      if (selectedSnacks.length < selectedSize.count) {
        setSelectedSnacks([...selectedSnacks, prodId]);
      }
    }
  };

  const handleAddBoxToCart = () => {
    addToCart({
      id: `box-${selectedSize.id}-${Date.now()}`,
      nameEn: `UMM AL TARAFA ${selectedSize.name} (${selectedSnacks.length} Snacks)`,
      nameAr: `بوكس أم الطرافة المميز (${selectedSnacks.length} أصناف)`,
      priceAED: selectedSize.priceAED,
      image: './assets/bitejoy/goodness-box.png',
      weight: `${selectedSize.count} Items`,
    });

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#C0121D', '#E5A118', '#FAF7F2'],
      });
    } catch {
      // safe fallback
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#24140E]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[#FFFDF9] rounded-3xl max-w-2xl w-full p-4 sm:p-7 shadow-2xl border border-[#24140E]/10 z-10 my-auto max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 rounded-full bg-[#FAF7F2] hover:bg-[#FDF1F2] hover:text-[#C0121D] text-[#24140E] transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1 pb-3 sm:pb-4 border-b border-[#24140E]/8 pr-8 pl-8">
          <div className="inline-flex items-center gap-1.5 bg-[#FDF1F2] text-[#C0121D] px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-black">
            <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C0121D]" />
            <span>{lang === 'ar' ? 'اصنع هديتك بنفسك' : 'Custom Gift Builder'}</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-black text-[#24140E] font-sans leading-tight">
            {lang === 'ar' ? 'جهّز بوكس أم الطرافة الخاص بك' : 'Build Your Goodness Box'}
          </h3>

          <p className="text-[11px] sm:text-xs text-[#63534B]">
            {lang === 'ar'
              ? 'اختر حجم البوكس ثم حدد شوكولاتتك ومكسراتك المفضلة وسنغلّفها بكل إتقان.'
              : 'Choose a box size, select your favorite chocolates & nuts, and we will pack them fresh.'}
          </p>
        </div>

        {/* Scrollable Modal Body */}
        <div className="flex-1 overflow-y-auto pr-1 py-2 space-y-3 sm:space-y-4">
          
          {/* Step 1: Select Box Size */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-[#24140E] uppercase tracking-wider">
              <span>{lang === 'ar' ? '١. اختر حجم البوكس' : '1. Choose Box Size'}</span>
              <span className="text-[#C0121D]">
                {selectedSize.count} {lang === 'ar' ? 'أصناف' : 'Items'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {boxSizes.map((size) => {
                const isPicked = selectedSize.id === size.id;
                return (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size);
                      if (selectedSnacks.length > size.count) {
                        setSelectedSnacks(selectedSnacks.slice(0, size.count));
                      }
                    }}
                    className={`p-2 sm:p-3 rounded-2xl border text-center transition-all relative ${
                      isPicked
                        ? 'border-[#C0121D] bg-[#FDF1F2] text-[#24140E] shadow-xs'
                        : 'border-[#24140E]/10 bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {size.popular && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#C0121D] text-white text-[8px] sm:text-[9px] font-black uppercase px-1.5 sm:px-2 py-0.2 rounded-full whitespace-nowrap">
                        {lang === 'ar' ? 'الأكثر طلباً' : 'Popular'}
                      </span>
                    )}
                    <p className="font-extrabold text-[11px] sm:text-xs text-[#24140E] leading-tight truncate">
                      {lang === 'ar' ? size.nameAr : size.name}
                    </p>
                    <p className="text-[10px] text-[#63534B]">{size.count} Packs</p>
                    <p className="font-black text-xs text-[#C0121D] mt-0.5">
                      {lang === 'ar' ? `${size.priceAED} د.إ` : `AED ${size.priceAED}`}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Pick Snacks */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-black text-[#24140E] uppercase tracking-wider">
              <span>{lang === 'ar' ? '٢. اختر الشوكولاتة والمكسرات' : '2. Select Chocolates & Nuts'}</span>
              <span className="text-xs font-black text-[#C0121D]">
                {selectedSnacks.length} / {selectedSize.count}{' '}
                {lang === 'ar' ? 'مختارة' : 'selected'}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#FAF7F2] rounded-full h-1.5 sm:h-2 overflow-hidden border border-[#24140E]/10">
              <div
                className="bg-[#C0121D] h-full transition-all duration-300"
                style={{
                  width: `${Math.min(100, (selectedSnacks.length / selectedSize.count) * 100)}%`,
                }}
              />
            </div>

            {/* Snacks list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-44 sm:max-h-52 overflow-y-auto p-1">
              {boxEligibleProducts.map((product) => {
                const isChecked = selectedSnacks.includes(product.id);
                const isDisabled = !isChecked && selectedSnacks.length >= selectedSize.count;

                return (
                  <div
                    key={product.id}
                    onClick={() => !isDisabled && toggleSnack(product.id)}
                    className={`p-2 rounded-xl border flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-all ${
                      isChecked
                        ? 'border-[#C0121D] bg-[#FDF1F2] shadow-2xs'
                        : isDisabled
                        ? 'opacity-40 border-[#24140E]/5 cursor-not-allowed bg-white'
                        : 'border-[#24140E]/10 bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.nameEn}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = './assets/luxury-truffles.jpg';
                      }}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0 rounded-lg bg-[#FAF7F2] p-0.5"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] sm:text-[11px] font-extrabold text-[#24140E] truncate">
                        {lang === 'ar' ? product.nameAr : product.nameEn}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-[#63534B]/70">{product.weight}</p>
                    </div>
                    <div
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#C0121D] text-white' : 'border border-[#24140E]/20'
                      }`}
                    >
                      {isChecked && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Personalized Gift Note */}
          <div className="pt-1">
            <label className="block text-xs font-black text-[#24140E] uppercase tracking-wider mb-1">
              {lang === 'ar' ? '٣. رسالة إهداء على البطاقة (اختياري)' : '3. Gift Message on Card (Optional)'}
            </label>
            <input
              type="text"
              value={giftNote}
              onChange={(e) => setGiftNote(e.target.value)}
              placeholder={
                lang === 'ar'
                  ? 'اكتب عبارة تهنئة قصيرة للبطاقة...'
                  : 'Write a sweet message to include on the gift card...'
              }
              className="w-full text-xs px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-[#24140E]/15 bg-white focus:outline-none focus:border-[#C0121D]"
            />
          </div>

        </div>

        {/* Footer Actions (Sticky at bottom of modal) */}
        <div className="flex items-center justify-between pt-3 border-t border-[#24140E]/8 mt-1">
          <div>
            <p className="text-[10px] sm:text-[11px] text-[#63534B]">
              {lang === 'ar' ? 'الإجمالي للبوكس:' : 'Total for Box:'}
            </p>
            <p className="text-lg sm:text-xl font-black text-[#24140E]">
              {lang === 'ar' ? `${selectedSize.priceAED} د.إ` : `AED ${selectedSize.priceAED}`}
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddBoxToCart}
            disabled={selectedSnacks.length === 0}
            className="bg-[#C0121D] hover:bg-[#A30E17] disabled:opacity-50 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 sm:gap-2 active:scale-95"
          >
            <Package className="w-4 h-4 shrink-0" />
            <span>
              {lang === 'ar' ? 'أضف البوكس للسلة' : 'Add to Cart'}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
