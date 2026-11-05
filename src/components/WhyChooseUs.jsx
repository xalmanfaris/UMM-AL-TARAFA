import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  Layers, 
  BadgePercent, 
  HeartHandshake, 
  CheckCircle,
  ShieldCheck 
} from 'lucide-react';

export const WhyChooseUs = () => {
  const { lang, isRtl, t } = useLanguage();

  const iconList = [CheckCircle, Layers, BadgePercent, HeartHandshake];

  return (
    <section id="why-us" className="py-20 lg:py-24 bg-[#2A1008] text-[#FFF4E3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#FFF4E3] tracking-tight">
            {t('whyUs.title')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#D4AF37] font-medium">
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* 4 Clean Genuine Pillars (Zero invented stats/counters) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t('whyUs.items').map((item, idx) => {
            const Icon = iconList[idx] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-[#1F0C05] border border-[#D4AF37]/20 shadow-xl flex flex-col justify-between hover:border-[#D4AF37]/50 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#2A1008] border border-[#D4AF37]/30 flex items-center justify-center text-[#8DB255] mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#FFF4E3] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#FFF4E3]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#8DB255] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'التزام بالجودة' : 'Our Commitment'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
