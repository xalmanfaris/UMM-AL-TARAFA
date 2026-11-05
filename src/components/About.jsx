import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  User, 
  ShoppingBag, 
  Check, 
  HeartHandshake 
} from 'lucide-react';

export const About = () => {
  const { lang, isRtl, t, businessInfo } = useLanguage();

  const whatsappUrl = `https://wa.me/971558172666?text=${encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً أخي حسين، أود الاستفسار عن أصناف الحلويات والمكسرات المتوفرة في المتجر.'
      : 'Hello Hussain, I would like to inquire about the sweets, nuts, and chocolates available at your shop.'
  )}`;

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#FFF4E3] text-[#2A1008] relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#8DB255]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C9782B]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Video Showcase of the Shop's Specialty */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden bg-[#2A1008] text-[#FFF4E3] border-2 border-[#D4AF37]/40 shadow-2xl group"
            >
              {/* Looping Muted Showcase Video */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                <video
                  src="/assets/showcase-video-1.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1008] via-transparent to-black/30" />

                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A0A04]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-bold shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#8DB255] animate-pulse" />
                    <span>Souq Al Rolla • Sharjah</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-7 relative z-10 bg-[#2A1008]">
                <h3 className="font-serif font-black text-xl sm:text-2xl text-gold-gradient mb-1">
                  {businessInfo.nameEn}
                </h3>
                <p className="font-arabic text-sm sm:text-base text-[#E08B34] font-bold mb-4">
                  {businessInfo.nameAr}
                </p>

                <div className="space-y-2.5 text-xs text-[#FFF4E3]/85 border-t border-white/10 pt-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                    <span>{businessInfo.addressEn}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{lang === 'ar' ? 'المسؤول: حسين' : 'Contact Person: Hussain'}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t('about.contactHussain')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2A1008] tracking-tight">
              {t('about.title')}
            </h2>

            <p className="text-base text-[#C9782B] font-semibold">
              {t('about.subtitle')}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#2A1008]/85 leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* Specialties bullet tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3">
              {[
                { en: 'Fine Chocolates', ar: 'شوكولاتة مختارة' },
                { en: 'Crunchy Nuts', ar: 'مكسرات مقرمشة' },
                { en: 'Dry Fruits & Dates', ar: 'فواكه مجففة وتمور' },
                { en: 'Arabian Sweets', ar: 'حلويات شرقية' },
                { en: 'Fragrant Spices', ar: 'بهارات زكية' },
                { en: 'Custom Gift Hampers', ar: 'بوكسات هدايا' },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-white/70 border border-[#2A1008]/10 text-xs font-semibold text-[#2A1008] flex items-center gap-2 shadow-sm"
                >
                  <Check className="w-3.5 h-3.5 text-[#8DB255]" />
                  <span>{lang === 'ar' ? spec.ar : spec.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
