import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { DoodleHeart } from './Doodles';
import { X, Plus, Minus, Trash2, ArrowUpRight, ShoppingBag, MessageCircle } from 'lucide-react';

export const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    totalPriceAED,
    sendWhatsAppOrder,
  } = useCart();
  const { lang, isRtl } = useLanguage();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#2E1E17]/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className={`fixed inset-y-0 ${isRtl ? 'left-0' : 'right-0'} max-w-full flex ${isRtl ? 'pr-0 sm:pr-8' : 'pl-0 sm:pl-8'}`}>
        <div className="w-screen max-w-md bg-[#FFFDF9] text-[#24140E] shadow-2xl flex flex-col border-l border-[#24140E]/10">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#24140E]/10 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#E4F3EC] flex items-center justify-center font-bold text-[#4E9F88]">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-sans font-black text-base sm:text-lg text-[#24140E]">
                    {lang === 'ar' ? 'سلة اختياراتك' : 'Your Goodness Bag'}
                  </h3>
                  <DoodleHeart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C0121D]" />
                </div>
                <span className="text-[11px] sm:text-xs text-[#63534B] font-medium">
                  {totalCount} {lang === 'ar' ? 'أصناف مختارة' : 'items selected'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF7F2] hover:bg-[#FDF1F2] hover:text-[#C0121D] flex items-center justify-center text-[#24140E] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-2.5 sm:space-y-3.5">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-[#FAF7F2] flex items-center justify-center text-[#63534B]/40">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="font-sans font-black text-base text-[#24140E]">
                  {lang === 'ar' ? 'سلتك فارغة حالياً' : 'Your bag is empty'}
                </h4>
                <p className="text-xs text-[#63534B] max-w-xs mx-auto">
                  {lang === 'ar'
                    ? 'اختر وجباتك ومكسراتك المحمصة المفضلة من القائمة وأضفها للسلة.'
                    : 'Explore our nutritious snack pouches, roasted nuts, and chocolate treats.'}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 bg-[#C0121D] text-white px-6 py-2.5 rounded-full text-xs font-black hover:bg-[#A30E17] transition-colors shadow-xs"
                >
                  {lang === 'ar' ? 'تصفح الأصناف' : 'Explore Snacks'}
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 sm:p-3.5 bg-white rounded-2xl border border-[#24140E]/8 flex items-center gap-2.5 sm:gap-3 shadow-2xs"
                >
                  <img
                    src={item.image}
                    alt={item.nameEn}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-xl bg-[#FAF7F2] p-1 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-xs sm:text-sm text-[#24140E] truncate">
                      {lang === 'ar' ? item.nameAr || item.nameEn : item.nameEn}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#63534B]/80 font-medium">
                      {item.weight || 'Pack'}
                    </p>
                    <div className="font-black text-xs text-[#C0121D] mt-0.5">
                      {lang === 'ar'
                        ? `${item.priceAED * item.quantity} د.إ`
                        : `AED ${item.priceAED * item.quantity}`}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1 bg-[#FAF7F2] p-0.5 sm:p-1 rounded-full border border-[#24140E]/10 shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center text-[#24140E] hover:bg-[#C0121D] hover:text-white transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </button>
                    <span className="w-4 sm:w-5 text-center text-[11px] sm:text-xs font-black">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center text-[#24140E] hover:bg-[#4E9F88] hover:text-white transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 sm:p-1.5 text-[#63534B]/40 hover:text-[#C0121D] transition-colors shrink-0"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 bg-white border-t border-[#24140E]/10 space-y-3 pb-[calc(1.2rem+env(safe-area-inset-bottom,0px))] sm:pb-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-[#63534B] font-bold block">
                    {lang === 'ar' ? 'الإجمالي المقدر:' : 'Estimated Total:'}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#4E9F88] font-bold">
                    {lang === 'ar' ? 'شامل الضريبة في الإمارات' : 'Taxes included'}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-sans font-black text-xl sm:text-2xl text-[#24140E]">
                    {lang === 'ar' ? `${totalPriceAED} د.إ` : `AED ${totalPriceAED}`}
                  </div>
                </div>
              </div>

              {/* Order via WhatsApp Button */}
              <button
                type="button"
                onClick={() => sendWhatsAppOrder(lang)}
                className="w-full py-3 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>
                  {lang === 'ar' ? 'إرسال الطلب عبر واتساب' : 'Checkout via WhatsApp'}
                </span>
              </button>

              <button
                type="button"
                onClick={clearCart}
                className="w-full text-center text-[11px] font-bold text-[#63534B]/60 hover:text-[#C0121D] transition-colors"
              >
                {lang === 'ar' ? 'تفريغ السلة' : 'Clear Bag'}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
