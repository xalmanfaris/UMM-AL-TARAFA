import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const BilingualRibbon = () => {
  const { isRtl } = useLanguage();

  const items = [
    { en: 'Chocolate', ar: 'شوكولاتة' },
    { en: 'Fresh Nuts', ar: 'مكسرات طازجة' },
    { en: 'Sweets', ar: 'حلويات' },
    { en: 'Dry Fruits', ar: 'فواكه مجففة' },
    { en: 'Aromatic Spices', ar: 'بهارات زكية' },
    { en: 'Gift Boxes', ar: 'بوكسات هدايا' },
  ];

  // Repeat for continuous marquee
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#C9782B] via-[#E08B34] to-[#C9782B] text-[#1A0A04] py-3 shadow-md border-y border-[#D4AF37]/40 z-20 select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee space-x-6 rtl:space-x-reverse font-medium text-xs sm:text-sm tracking-wide">
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 whitespace-nowrap">
            <span className="font-bold uppercase tracking-wider">{item.en}</span>
            <span className="text-[#8DB255] font-black text-xs">✦</span>
            <span className="font-arabic font-semibold">{item.ar}</span>
            <span className="text-[#C8102E] font-black text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
