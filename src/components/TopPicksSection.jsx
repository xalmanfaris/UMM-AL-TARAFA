import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { DoodleHeart } from './Doodles';
import { Star, Heart, Plus, Check, ArrowRight, Search, X } from 'lucide-react';

export const TopPicksSection = ({
  selectedCategory,
  onSelectCategory,
  onOpenQuickView,
  wishlist = [],
  onToggleWishlist,
}) => {
  const { lang } = useLanguage();
  const { addToCart } = useCart();
  const [addedItemMap, setAddedItemMap] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', labelEn: `All (${products.length})`, labelAr: `الكل (${products.length})` },
    { id: 'chocolates', labelEn: 'Chocolates & Bars', labelAr: 'الشوكولاتة الفاخرة' },
    { id: 'nuts', labelEn: 'Nuts & Kernels', labelAr: 'المكسرات الفاخرة' },
    { id: 'sweets', labelEn: 'Wafers & Spreads', labelAr: 'الويفر والبسكويت' },
    { id: 'crunchy', labelEn: 'Seeds & Crunchy', labelAr: 'المقرمشات والتسالي' },
  ];

  const filteredProducts = products.filter((p) => {
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
    if (!matchCat) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const nameMatch =
      (p.nameEn?.toLowerCase() || '').includes(q) ||
      (p.nameAr || '').includes(q);
    const descMatch =
      (p.descriptionEn?.toLowerCase() || '').includes(q) ||
      (p.descriptionAr || '').includes(q);
    return nameMatch || descMatch;
  });

  const handleQuickAdd = (product, e) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      nameEn: product.nameEn,
      nameAr: product.nameAr,
      priceAED: product.priceAED,
      image: product.image,
      weight: product.weight,
    });
    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1600);
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return price % 1 === 0 ? price.toFixed(2) : price.toFixed(2);
    }
    return price;
  };

  return (
    <section id="top-picks" className="py-10 sm:py-16 bg-[#FFFDF9] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#24140E] tracking-tight font-sans">
              {lang === 'ar' ? 'الأكثر طلباً ومحبة لدى الجميع' : 'Top Picks Loved by All'}
            </h2>
            <DoodleHeart className="w-5 h-5 sm:w-6 sm:h-6 text-[#C0121D]" />
          </div>

          <button
            type="button"
            onClick={() => {
              onSelectCategory('all');
              setSearchQuery('');
            }}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#63534B] hover:text-[#C0121D] px-3.5 py-1.5 rounded-full border border-[#24140E]/10 hover:border-[#C0121D] bg-white transition-all shadow-2xs group"
          >
            <span>{lang === 'ar' ? `عرض كل الأصناف (${products.length})` : `View All (${products.length})`}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Search Bar + Filter Tabs Container */}
        <div className="space-y-3 mb-6 sm:mb-8">
          
          {/* Quick Search Input */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-[#63534B]/60 absolute top-1/2 -translate-y-1/2 left-3.5 rtl:left-auto rtl:right-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'ar'
                  ? 'ابحث بالاسم: شوكولاتة، فستق، كاجو، كندر...'
                  : 'Search by name: Cadbury, Pistachio, Nutella...'
              }
              className="w-full pl-9 pr-9 rtl:pl-9 rtl:pr-9 py-2 rounded-full text-xs font-medium border border-[#24140E]/12 bg-white text-[#24140E] placeholder-[#63534B]/50 focus:outline-none focus:border-[#C0121D] shadow-2xs transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute top-1/2 -translate-y-1/2 right-3 rtl:right-auto rtl:left-3 p-1 text-[#63534B]/60 hover:text-[#C0121D]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Full horizontal edge scroll on mobile) */}
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectCategory(tab.id)}
                  className={`whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-full text-xs font-black transition-all shrink-0 active:scale-95 ${
                    isActive
                      ? 'bg-[#C0121D] text-white shadow-sm'
                      : 'bg-white text-[#63534B] hover:bg-[#FDF1F2] hover:text-[#C0121D] border border-[#24140E]/10'
                  }`}
                >
                  {lang === 'ar' ? tab.labelAr : tab.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty Search Feedback */}
        {filteredProducts.length === 0 && (
          <div className="py-12 text-center space-y-2 bg-white rounded-3xl border border-[#24140E]/8 p-6">
            <p className="text-sm font-bold text-[#24140E]">
              {lang === 'ar'
                ? `لم يتم العثور على نتائج مطابقة لـ "${searchQuery}"`
                : `No products matching "${searchQuery}"`}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="text-xs font-black text-[#C0121D] hover:underline"
            >
              {lang === 'ar' ? 'إعادة ضبط البحث' : 'Reset search & filters'}
            </button>
          </div>
        )}

        {/* Product Cards Grid: 2 cols on mobile, 3 on tablet, 4 on desktop, 5 on wide */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4.5">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            const isJustAdded = addedItemMap[product.id];

            return (
              <div
                key={product.id}
                onClick={() => onOpenQuickView && onOpenQuickView(product)}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 border border-[#24140E]/8 shadow-2xs hover:shadow-md hover:border-[#C0121D]/20 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 active:scale-[0.99]"
              >
                {/* Top Corner: Weight Pill & Wishlist Heart */}
                <div className="flex items-center justify-between mb-1.5 sm:mb-2 gap-1">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#63534B] border border-[#24140E]/5 truncate max-w-[85px] sm:max-w-none">
                    {product.weight}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist && onToggleWishlist(product.id);
                    }}
                    className="p-1 sm:p-1.5 rounded-full hover:bg-[#FDF1F2] transition-colors focus:outline-none shrink-0"
                    aria-label="Save to favorites"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform active:scale-125 ${
                        isWishlisted
                          ? 'fill-[#C0121D] text-[#C0121D]'
                          : 'text-[#63534B]/40 hover:text-[#C0121D]'
                      }`}
                    />
                  </button>
                </div>

                {/* Product Pouch / Image Container */}
                <div className="relative w-full aspect-square mb-2 sm:mb-3 flex items-center justify-center bg-[#FAF7F2]/70 rounded-xl sm:rounded-2xl overflow-hidden p-2 sm:p-2.5">
                  <img
                    src={product.image}
                    alt={product.nameEn}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/luxury-truffles.jpg';
                    }}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-108 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                {/* Info Area */}
                <div className="space-y-1 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-[14px] text-[#24140E] group-hover:text-[#C0121D] transition-colors line-clamp-2 leading-snug">
                      {lang === 'ar' ? product.nameAr : product.nameEn}
                    </h4>
                  </div>

                  <div className="pt-1">
                    {/* Price in AED */}
                    <div className="flex items-baseline gap-1">
                      <span className="font-black text-xs sm:text-base text-[#24140E]">
                        {lang === 'ar' ? `${formatPrice(product.priceAED)} د.إ` : `AED ${formatPrice(product.priceAED)}`}
                      </span>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 pt-0.5">
                      <div className="flex items-center text-[#E5A118]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#E5A118]" />
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#63534B]/70">
                        ({product.reviews?.toLocaleString() || '120'})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Quick Pill Button */}
                <button
                  type="button"
                  onClick={(e) => handleQuickAdd(product, e)}
                  className={`mt-2.5 sm:mt-3 w-full py-1.5 sm:py-2 rounded-full text-xs font-black transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-2xs min-h-[36px] sm:min-h-[40px] active:scale-95 ${
                    isJustAdded
                      ? 'bg-[#C0121D] text-white'
                      : 'bg-[#FDF1F2] text-[#C0121D] hover:bg-[#C0121D] hover:text-white'
                  }`}
                >
                  {isJustAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'تمت!' : 'Added!'}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'أضف' : 'Add to Cart'}</span>
                    </>
                  )}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
