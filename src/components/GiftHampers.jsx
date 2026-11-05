import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { Gift, Plus, Trash2, ArrowUpRight } from 'lucide-react';

export const GiftHampers = () => {
  const { lang, isRtl, t } = useLanguage();
  const [selectedItems, setSelectedItems] = useState([
    { id: 'pb', nameEn: 'Organic Peanut Butter', nameAr: 'زبدة فول سوداني عضوية', icon: '🥜' },
    { id: 'truffles', nameEn: 'Chocolate Truffles', nameAr: 'ترافل شوكولاتة', icon: '🍫' },
    { id: 'pistachio', nameEn: 'Roasted Pistachios', nameAr: 'فستق حلبي محمص', icon: '✨' },
  ]);

  const availableItems = [
    { id: 'pb', nameEn: 'Organic Peanut Butter', nameAr: 'زبدة فول سوداني عضوية', icon: '🥜' },
    { id: 'cacao-spread', nameEn: 'Cacao Nut Spread', nameAr: 'شوكولاتة قابلة للدهن', icon: '🍯' },
    { id: 'truffles', nameEn: 'Chocolate Truffles', nameAr: 'ترافل شوكولاتة فاخرة', icon: '🍫' },
    { id: 'pistachio', nameEn: 'Roasted Pistachios', nameAr: 'فستق حلبي محمص', icon: '✨' },
    { id: 'almonds', nameEn: 'Smoked Almonds', nameAr: 'لوز مدخن مقرمش', icon: '🌰' },
    { id: 'mixed-nuts', nameEn: 'Mixed Cocktail Nuts', nameAr: 'مشكل مكسرات فاخرة', icon: '🥣' },
    { id: 'dates', nameEn: 'Stuffed Medjool Dates', nameAr: 'تمر مجهول محشي باللوز', icon: '🌴' },
    { id: 'baklava', nameEn: 'Assorted Sweets Platter', nameAr: 'حلويات شرقية مشكلة', icon: '🥐' },
    { id: 'saffron', nameEn: 'Pure Saffron Threads', nameAr: 'خيوط زعفران نقية', icon: '🔴' },
  ];

  const handleAddItem = (item) => {
    if (selectedItems.length >= 8) return;
    setSelectedItems((prev) => [...prev, { ...item, uniqueKey: Date.now() + Math.random() }]);

    try {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#FF6443', '#F8C868', '#2C442D', '#24140E'],
      });
    } catch {
      // ignore
    }
  };

  const handleRemoveItem = (index) => {
    setSelectedItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearBox = () => {
    setSelectedItems([]);
  };

  const handleSendWhatsApp = () => {
    if (selectedItems.length === 0) return;

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6443', '#F8C868', '#2C442D'],
      });
    } catch {
      // ignore
    }

    const itemsList = selectedItems
      .map((item, i) => `${i + 1}. ${lang === 'ar' ? item.nameAr : item.nameEn}`)
      .join('\n');

    const msg = lang === 'ar'
      ? `مرحباً أخي حسين (أم الطرافة)، أود طلب بوكس هدية مخصص يحتوي على:\n${itemsList}\n\nيرجى إفادتي بالسعر والتوفر للتجهيز. شكراً!`
      : `Hello Hussain (UMM AL TARAFA), I would like to order a custom gift box with these selected items:\n${itemsList}\n\nPlease let me know pricing and preparation time. Thank you!`;

    const url = `https://wa.me/971558172666?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="gift-boxes" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#24140E]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#24140E] uppercase tracking-tight">
            {lang === 'ar' ? 'صمم بوكس الهدية بنفسك' : 'CUSTOM GIFT BOX'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#24140E]/70 font-medium">
            {lang === 'ar'
              ? 'اختر من تشكيلات المكسرات والحلويات والشوكولاتة وزبدة الفول السوداني لتجهيز بوكس راقٍ'
              : 'Curate your favorite nuts, spreads, Belgian truffles, and dates in an artisanal wooden gift hamper.'}
          </p>
        </div>

        {/* Builder Interactive Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Available Items to Tap */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#24140E]/10 shadow-sm">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#24140E]/10">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF6443]">
                {lang === 'ar' ? 'انقر على الصنف لإضافته إلى الصندوق' : 'Tap treats to add to your box'}
              </span>
              <span className="text-xs font-semibold text-[#24140E]/60">
                {selectedItems.length}/8 {lang === 'ar' ? 'أصناف كحد أقصى' : 'items max'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableItems.map((item) => {
                const countInBox = selectedItems.filter((i) => i.id === item.id).length;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleAddItem(item)}
                    disabled={selectedItems.length >= 8}
                    className="p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F5EDE2] border border-[#24140E]/10 hover:border-[#FF6443] text-start flex flex-col justify-between transition-all shadow-sm group disabled:opacity-50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <span className="w-6 h-6 rounded-full bg-white group-hover:bg-[#FF6443] group-hover:text-white flex items-center justify-center text-[#24140E] transition-colors shadow-sm">
                        <Plus className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div>
                      <div className="font-display font-bold text-xs sm:text-[13px] text-[#24140E] leading-tight">
                        {lang === 'ar' ? item.nameAr : item.nameEn}
                      </div>
                      {countInBox > 0 && (
                        <div className="text-[10px] font-bold text-[#FF6443] mt-1">
                          ✓ {countInBox} {lang === 'ar' ? 'في الصندوق' : 'in box'}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: The Live Gift Box View */}
          <div className="lg:col-span-5 bg-[#24140E] text-white rounded-3xl p-6 sm:p-8 border border-[#24140E] shadow-xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#F8C868]" />
                <h3 className="font-display font-black text-base sm:text-lg uppercase tracking-wider text-[#F8C868]">
                  {lang === 'ar' ? 'محتويات الصندوق' : 'YOUR GIFT HAMPER'}
                </h3>
              </div>

              {selectedItems.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearBox}
                  className="text-xs text-white/60 hover:text-[#FF6443] flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'تفريغ' : 'Clear'}</span>
                </button>
              )}
            </div>

            {/* Selected Items Live Box Display */}
            <div className="min-h-[220px] max-h-[300px] overflow-y-auto space-y-2 pr-1">
              <AnimatePresence>
                {selectedItems.length === 0 ? (
                  <div className="h-44 flex flex-col items-center justify-center text-center p-4 rounded-2xl border-2 border-dashed border-white/15 text-white/50">
                    <span className="text-3xl mb-2">🎁</span>
                    <p className="text-xs max-w-xs">
                      {lang === 'ar'
                        ? 'الصندوق فارغ حالياً. اضغط على الأصناف في اليسار لإضافتها!'
                        : 'Your hamper is empty. Tap items on the left to pack your box!'}
                    </p>
                  </div>
                ) : (
                  selectedItems.map((item, idx) => (
                    <motion.div
                      key={item.uniqueKey || idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="p-3 rounded-xl bg-white/10 border border-white/5 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-white">
                            {lang === 'ar' ? item.nameAr : item.nameEn}
                          </div>
                          <span className="text-[10px] text-[#F8C868]">
                            {lang === 'ar' ? 'جاهز للتعبئة' : 'Packed in box'}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveItem(idx)}
                        aria-label="Remove item"
                        className="p-1 rounded-full text-white/40 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Bottom summary and WhatsApp Action Button */}
            <div className="pt-5 border-t border-white/10 mt-4 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/70">
                  {selectedItems.length} {lang === 'ar' ? 'أصناف مختارة' : 'items selected'}
                </span>
                <span className="font-bold text-[#F8C868]">
                  {selectedItems.length > 0 ? (lang === 'ar' ? 'جاهز للتجهيز' : 'Ready to pack') : ''}
                </span>
              </div>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                disabled={selectedItems.length === 0}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#FF6443] hover:bg-[#E95333] text-white font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              >
                <span>
                  {lang === 'ar' ? 'إرسال البوكس عبر واتساب' : 'SEND MY BOX VIA WHATSAPP'}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
