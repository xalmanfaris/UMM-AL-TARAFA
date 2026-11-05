import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Heart, Menu, X, Globe } from 'lucide-react';

export const BiteJoyNavbar = ({ onOpenBuildBox, wishlistCount = 0 }) => {
  const { lang, toggleLanguage } = useLanguage();
  const { totalCount, totalPriceAED, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#cravings', labelEn: 'Categories', labelAr: 'التصنيفات' },
    { href: '#top-picks', labelEn: 'All Products', labelAr: 'جميع الأصناف' },
    { href: '#discover', labelEn: 'Discover', labelAr: 'اكتشف جديدنا' },
    { href: '#build-box', labelEn: 'Build Your Box', labelAr: 'اصنع بوكس هداياك', action: onOpenBuildBox },
    { href: '#store-location', labelEn: 'Visit Our Shop', labelAr: 'زيارة المحل' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (link.action) {
      link.action();
      return;
    }
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div className="max-w-[1440px] mx-auto pointer-events-auto">
        
        {/* iOS-Style Curved Floating Glass Bar */}
        <div
          className={`rounded-full transition-all duration-300 px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between backdrop-blur-xl border ${
            isScrolled
              ? 'bg-white/95 border-[#C0121D]/20 shadow-[0_12px_36px_rgba(192,18,29,0.12)]'
              : 'bg-white/85 border-white/60 shadow-[0_8px_32px_rgba(36,20,14,0.06)]'
          }`}
        >
          {/* Storefront Brand Name with Arabic text on top */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col justify-center group focus:outline-none min-w-0"
          >
            {/* Arabic shop text on top */}
            <span className="text-[9px] sm:text-[11px] font-black text-[#C0121D] tracking-wide leading-tight truncate">
              ام الطرافة لتجارة الحلويات والمكسرات
            </span>

            {/* English shop name */}
            <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 whitespace-nowrap">
              <span className="font-black text-xs sm:text-base lg:text-xl text-[#24140E] tracking-tight font-sans leading-none">
                UMM AL TARAFA
              </span>
              <span className="hidden sm:inline-block text-[9px] sm:text-[10px] font-black uppercase text-[#C0121D] bg-[#FDF1F2] px-2 py-0.5 rounded-full border border-[#C0121D]/20 leading-none">
                SWEETS & NUTS. TR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-7 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-xs lg:text-[13px] font-bold text-[#63534B] hover:text-[#C0121D] transition-colors relative py-1 group whitespace-nowrap"
              >
                {lang === 'ar' ? link.labelAr : link.labelEn}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0121D] transition-all group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Lang, Wishlist, Cart, Menu */}
          <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
            
            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-full text-xs font-bold text-[#63534B] hover:text-[#24140E] hover:bg-[#FDF1F2] transition-colors flex items-center gap-1 min-h-[36px]"
              title="Switch language"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C0121D]" />
              <span className="text-[11px] sm:text-xs font-bold">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Wishlist Pill */}
            <a
              href="#top-picks"
              className="p-1.5 sm:p-2 text-[#63534B] hover:text-[#C0121D] hover:bg-[#FDF1F2] rounded-full transition-colors relative min-h-[36px] min-w-[36px] flex items-center justify-center"
              title="Saved items"
              aria-label="View saved items"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C0121D] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Cart Button Pill in Signature Storefront Red */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1 sm:gap-2 bg-[#C0121D] hover:bg-[#A30E17] text-white px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold shadow-sm hover:shadow-md transition-all active:scale-95 group min-h-[36px]"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">
                {lang === 'ar' ? 'السلة' : 'Cart'}
              </span>
              <span className="bg-white/20 px-1.5 py-0.2 sm:py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold">
                {totalCount}
              </span>
              {totalPriceAED > 0 && (
                <span className="hidden lg:inline pl-1 border-l border-white/30 text-[11px] font-bold">
                  {lang === 'ar' ? `${totalPriceAED} د.إ` : `AED ${totalPriceAED}`}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 text-[#24140E] hover:bg-[#FDF1F2] rounded-full transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C0121D]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu as an iOS Card with Full Touch Targets */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 bg-white/98 backdrop-blur-2xl border border-white/80 shadow-[0_16px_40px_rgba(36,20,14,0.12)] rounded-3xl flex flex-col space-y-1 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="min-h-[44px] flex items-center px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-[#63534B] hover:text-[#C0121D] hover:bg-[#FDF1F2] active:bg-[#FDF1F2] transition-colors"
              >
                {lang === 'ar' ? link.labelAr : link.labelEn}
              </a>
            ))}
            
            {/* Quick Mobile Store Contact Bar inside Menu */}
            <div className="pt-2 mt-1 border-t border-[#24140E]/8 flex items-center justify-between px-2 text-xs">
              <span className="text-[#63534B] font-semibold text-[11px]">
                {lang === 'ar' ? 'سوق الرولة، الشارقة' : 'Souq Al Rolla, Sharjah'}
              </span>
              <a
                href="https://wa.me/971558172666"
                target="_blank"
                rel="noreferrer"
                className="text-[#C0121D] font-black text-[11px] hover:underline"
              >
                055 817 2666
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
