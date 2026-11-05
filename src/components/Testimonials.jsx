import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Star, MessageSquare, ExternalLink, MapPin } from 'lucide-react';

export const Testimonials = () => {
  const { lang, isRtl, t, businessInfo } = useLanguage();

  return (
    <section id="reviews" className="py-16 lg:py-20 bg-[#FFF4E3] text-[#2A1008] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Star Badges */}
        <div className="flex items-center justify-center gap-1.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#C9782B] text-[#C9782B]" />
          ))}
        </div>

        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2A1008] tracking-tight mb-3">
          {t('reviews.title')}
        </h2>

        <p className="text-base text-[#C9782B] font-semibold mb-4">
          {t('reviews.subtitle')}
        </p>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#2A1008]/80 leading-relaxed mb-8">
          {t('reviews.desc')}
        </p>

        {/* Clean "Review us on Google" CTA Button */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block">
          <a
            href={businessInfo.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#2A1008] text-[#FFF4E3] hover:text-[#D4AF37] font-bold text-sm sm:text-base border border-[#D4AF37]/40 shadow-lg hover:shadow-xl transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#8DB255]" />
            <span>{t('reviews.buttonText')}</span>
            <ExternalLink className="w-4 h-4 text-[#C9782B]" />
          </a>
        </motion.div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#2A1008]/60">
          <MapPin className="w-3.5 h-3.5 text-[#C8102E]" />
          <span>Souq Al Rolla Building, Shop No. 10, Sharjah</span>
        </div>
      </div>
    </section>
  );
};
