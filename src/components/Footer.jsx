import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const { lang, t, businessInfo } = useLanguage();

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#24140E] text-white pt-16 pb-24 md:pb-12 border-t border-[#24140E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display font-black text-2xl tracking-tighter uppercase text-white">
              UMM AL TARAFA.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              {lang === 'ar'
                ? 'متجركم المفضل في سوق الرولة بالشارقة للشوكولاتة، المكسرات المحمصة الطازجة، زبدة الفول السوداني الطبيعية، الفواكه المجففة، والحلويات والبهارات.'
                : 'Crafted with devotion. Your neighborhood shop in Souq Al Rolla, Sharjah for fresh nuts, pure nut spreads, chocolates, dry fruits, and festive gift boxes.'}
            </p>
            <div className="pt-2 text-xs font-semibold text-[#F8C868] flex items-center gap-2">
              <span>📍 Souq Al Rolla Building, Shop No. 10, Sharjah</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#F8C868]">
              {lang === 'ar' ? 'أقسام المتجر' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { href: '#products', label: lang === 'ar' ? 'المنتجات' : 'Products' },
                { href: '#gift-boxes', label: lang === 'ar' ? 'بوكسات الهدايا' : 'Gift Boxes' },
                { href: '#ingredients', label: lang === 'ar' ? 'المكونات والنقاء' : 'Our Ingredients' },
                { href: '#recipes', label: lang === 'ar' ? 'وصفات وتقديم' : 'Recipes' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#F8C868]">
              {lang === 'ar' ? 'تواصل وطلب سريع' : 'Get In Touch'}
            </h4>

            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F8C868]" />
                <span>Shop Phone: {businessInfo.phoneShop}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#FF6443]" />
                <span>Hussain (WhatsApp): {businessInfo.phoneMobile}</span>
              </div>
            </div>

            <a
              href="https://wa.me/971558172666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6443] hover:bg-[#E95333] text-white px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>{lang === 'ar' ? 'مراسلة عبر واتساب' : 'Chat with Hussain'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-3 text-center sm:text-start">
          <div>
            © {new Date().getFullYear()} UMM AL TARAFA SWEETS & NUTS TR. {t('footer.rights')}
          </div>
          <div className="text-[11px] text-[#F8C868]">
            Sharjah, United Arab Emirates
          </div>
        </div>

      </div>
    </footer>
  );
};
