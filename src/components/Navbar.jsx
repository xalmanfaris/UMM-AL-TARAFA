import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { ArrowUpRight, Menu, X, Globe } from 'lucide-react';

export const Navbar = () => {
  const { lang, isRtl, toggleLanguage } = useLanguage();
  const { totalCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#products', labelEn: 'PRODUCTS', labelAr: 'المنتجات' },
    { href: '#gift-boxes', labelEn: 'GIFT BOXES', labelAr: 'بوكسات الهدايا' },
    { href: '#ingredients', labelEn: 'OUR PROCESS', labelAr: 'طريقة التحميص' },
    { href: '#harvest', labelEn: 'SUSTAINABILITY', labelAr: 'الجودة والأصل' },
    { href: '#recipes', labelEn: 'RECIPE', labelAr: 'وصفات الضيافة' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(36,20,14,0.06)] border-b border-[#24140E]/8'
          : 'bg-[#FAF7F2] py-5 border-b border-[#24140E]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Playfair Display / Cormorant Garamond */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-1.5 group focus:outline-none"
          >
            <span className="font-serif font-black text-xl sm:text-2xl tracking-tight text-[#24140E] uppercase group-hover:text-[#FF6443] transition-colors">
              UMM AL TARAFA.
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs lg:text-[13px] font-sans font-bold tracking-wider text-[#24140E]/80 hover:text-[#24140E] transition-colors uppercase"
              >
                {lang === 'ar' ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Toggle + CART (N) with Orange Arrow Pill */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Switch Language"
              className="px-2.5 py-1.5 rounded-full text-xs font-sans font-bold text-[#24140E]/80 hover:text-[#24140E] hover:bg-[#24140E]/5 transition-colors flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* CART (N) Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center gap-2 group focus:outline-none"
            >
              <span className="font-sans font-bold text-xs sm:text-sm tracking-wider uppercase text-[#24140E]">
                {lang === 'ar' ? `السلة (${totalCount})` : `CART (${totalCount})`}
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F8C868] group-hover:bg-[#FF6443] text-[#24140E] group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#24140E] hover:text-[#FF6443]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#24140E]/10 px-5 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block py-2 text-sm font-display font-bold text-[#24140E] hover:text-[#FF6443] uppercase tracking-wider"
            >
              {lang === 'ar' ? link.labelAr : link.labelEn}
            </a>
          ))}
          <div className="pt-2 border-t border-[#24140E]/10 flex justify-between items-center">
            <span className="text-xs text-[#24140E]/60">
              Souq Al Rolla, Shop 10, Sharjah
            </span>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="text-xs font-bold text-[#FF6443] flex items-center gap-1"
            >
              {lang === 'ar' ? 'عرض السلة' : 'View Cart'}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
