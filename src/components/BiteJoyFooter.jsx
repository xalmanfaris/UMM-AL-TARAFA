import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DoodleHeart } from './Doodles';
import { ArrowRight, Check, MessageCircle, MapPin, Phone } from 'lucide-react';

export const BiteJoyFooter = ({ onOpenBuildBox }) => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-[#C0121D] text-white pt-14 pb-8 sm:pt-16 sm:pb-12 relative overflow-hidden border-t-4 border-[#8A0B13]">
      
      {/* Expansive Container with improved width matching modern layout */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Storefront Signboard Title */}
            <div>
              <p className="text-xs font-black text-white/90 tracking-wider">
                ام الطرافة لتجارة الحلويات والمكسرات
              </p>
              <h3 className="font-black text-2xl sm:text-3xl text-white tracking-tight font-sans mt-0.5">
                UMM AL TARAFA
              </h3>
              <p className="text-xs font-bold text-white/80 uppercase tracking-widest mt-0.5">
                SWEETS & NUTS. TR
              </p>
            </div>

            <p className="text-sm text-white/90 max-w-sm leading-relaxed font-medium">
              {lang === 'ar'
                ? 'متجركم الموثوق في سوق الرولة بالشارقة للشوكولاتة الفاخرة، والمكسرات المحمصة طازجاً، والتمور والحلويات العربية الأصيلة.'
                : 'Your trusted neighborhood shop in Souq Al Rolla, Sharjah for quality chocolates, oven-fresh nuts, exotic dry fruits, and festive gift boxes.'}
            </p>

            {/* Quick Contact & Store Location Info */}
            <div className="space-y-1.5 text-xs text-white/90 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/70 shrink-0" />
                <span>Souq Al Rolla Building, Shop No. 10, Rolla, Sharjah, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white/70 shrink-0" />
                <span>055 537 3788 / +971 55 817 2666</span>
              </div>
            </div>
          </div>

          {/* Nav Column 1: Shop */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-black text-sm uppercase tracking-wider text-white">
              {lang === 'ar' ? 'التسوق' : 'Shop'}
            </h4>
            <ul className="space-y-2 text-xs font-bold text-white/85">
              <li>
                <a href="#top-picks" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'الشوكولاتة الفاخرة' : 'Chocolates'}
                </a>
              </li>
              <li>
                <a href="#top-picks" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'المكسرات المحمصة' : 'Fresh Nuts'}
                </a>
              </li>
              <li>
                <a href="#top-picks" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'الويفر والبسكويت' : 'Wafers & Spreads'}
                </a>
              </li>
              <li>
                <a href="#top-picks" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'المقرمشات والتسالي' : 'Crunchy Snacks'}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBuildBox}
                  className="hover:text-white transition-colors text-left rtl:text-right"
                >
                  {lang === 'ar' ? 'اصنع بوكس هداياك' : 'Build Your Box'}
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-black text-sm uppercase tracking-wider text-white">
              {lang === 'ar' ? 'روابط المتجر' : 'Explore'}
            </h4>
            <ul className="space-y-2 text-xs font-bold text-white/85">
              <li>
                <a href="#discover" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'اكتشف جديدنا' : 'Discover New'}
                </a>
              </li>
              <li>
                <a href="#top-picks" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'الأكثر طلباً' : 'Top Picks'}
                </a>
              </li>
              <li>
                <a href="#store-location" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'زيارة المحل بالرولة' : 'Visit Our Shop in Rolla'}
                </a>
              </li>
              <li>
                <a href="#rewards" className="hover:text-white transition-colors">
                  {lang === 'ar' ? 'نادي المكافآت' : 'Rewards Program'}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Direct WhatsApp Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-black text-sm uppercase tracking-wider text-white">
              {lang === 'ar' ? 'انضم إلى عائلة أم الطرافة' : 'Stay Connected'}
            </h4>
            <p className="text-xs text-white/85 leading-relaxed">
              {lang === 'ar'
                ? 'سجل بريدك الإلكتروني أو تواصل معنا عبر واتساب لطلب أسعار اليوم والبوكسات الخاصة.'
                : 'Subscribe for fresh batch arrivals, seasonal discounts, and 10% off your first box!'}
            </p>

            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-full p-1.5 sm:p-1 shadow-sm gap-1.5 sm:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === 'ar' ? 'أدخل بريدك الإلكتروني...' : 'Enter your email...'}
                  className="w-full bg-transparent px-3 py-1 sm:py-0 text-xs text-[#24140E] placeholder-[#63534B]/60 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#24140E] hover:bg-[#3A180C] text-white px-4 py-2 sm:py-2 rounded-full text-xs font-black transition-all flex items-center justify-center gap-1 shrink-0 min-h-[36px]"
                >
                  {isSubscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4E9F88]" />
                      <span>{lang === 'ar' ? 'تم الاشتراك!' : 'Joined!'}</span>
                    </>
                  ) : (
                    <>
                      <span>{lang === 'ar' ? 'اشتراك' : 'Subscribe'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="pt-2">
              <a
                href="https://wa.me/971558172666"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all min-h-[42px]"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>{lang === 'ar' ? 'طلب فوري عبر واتساب (حسين)' : 'WhatsApp Order (Hussain)'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/80 gap-3">
          <p>
            © {new Date().getFullYear()} UMM AL TARAFA SWEETS & NUTS. TR (ام الطرافة لتجارة الحلويات والمكسرات).
          </p>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span>Souq Al Rolla, Sharjah, UAE</span>
            <span>•</span>
            <span>100% Quality Guaranteed</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
