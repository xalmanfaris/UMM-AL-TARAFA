import React, { useState } from 'react';

/**
 * ProductImage component with fallback to elegant illustrated SVGs
 * according to product category and slug.
 */
export const ProductImage = ({ src, alt, category, slug, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  // If error or no src provided, render custom SVG illustration
  if (hasError || !src) {
    return (
      <div className={`w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#2D140A] via-[#200D05] to-[#160803] ${className}`}>
        {category === 'chocolates' ? (
          // Elegant chocolate praline illustration
          <svg className="w-24 h-24 text-[#C9782B] opacity-90 drop-shadow-md" viewBox="0 0 100 100" fill="none">
            <rect x="25" y="25" width="50" height="50" rx="12" fill="#3D1A0D" stroke="#D4AF37" strokeWidth="2.5" />
            <path d="M25 50 Q50 35 75 50 Q50 65 25 50" fill="#240E06" />
            <circle cx="50" cy="50" r="10" fill="#C9782B" />
            <circle cx="50" cy="50" r="4" fill="#D4AF37" />
            <path d="M30 30 Q50 20 70 30" stroke="#FFF4E3" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>
        ) : category === 'nuts' ? (
          // Nut & pistachio illustration
          <svg className="w-24 h-24 text-[#8DB255] opacity-90 drop-shadow-md" viewBox="0 0 100 100" fill="none">
            <ellipse cx="40" cy="50" rx="22" ry="30" transform="rotate(-15 40 50)" fill="#735127" stroke="#D4AF37" strokeWidth="2" />
            <ellipse cx="60" cy="52" rx="18" ry="26" transform="rotate(20 60 52)" fill="#8DB255" stroke="#C9782B" strokeWidth="2" />
            <path d="M48 35 Q55 50 48 68" stroke="#3D1A0D" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="62" cy="45" r="4" fill="#A7CA72" />
          </svg>
        ) : category === 'spices' ? (
          // Saffron & spice jar illustration
          <svg className="w-24 h-24 text-[#C8102E] opacity-90 drop-shadow-md" viewBox="0 0 100 100" fill="none">
            <rect x="35" y="35" width="30" height="45" rx="6" fill="#2B1208" stroke="#D4AF37" strokeWidth="2" />
            <rect x="38" y="24" width="24" height="11" rx="3" fill="#D4AF37" />
            <path d="M45 45 Q50 60 46 70 M50 42 Q52 58 54 68 M55 45 Q51 55 53 72" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="56" r="8" fill="#C8102E" opacity="0.4" />
          </svg>
        ) : category === 'gift-boxes' ? (
          // Gift box with ribbon illustration
          <svg className="w-24 h-24 text-[#D4AF37] opacity-90 drop-shadow-md" viewBox="0 0 100 100" fill="none">
            <rect x="22" y="38" width="56" height="44" rx="6" fill="#3D1A0D" stroke="#D4AF37" strokeWidth="2.5" />
            <rect x="18" y="30" width="64" height="12" rx="3" fill="#C8102E" />
            <path d="M50 30 L50 82" stroke="#D4AF37" strokeWidth="4" />
            <path d="M38 20 C32 10 45 10 50 24 C55 10 68 10 62 20 C56 30 50 28 50 30" fill="none" stroke="#D4AF37" strokeWidth="3" />
          </svg>
        ) : category === 'dry-fruits' ? (
          // Dates / Figs illustration
          <svg className="w-24 h-24 text-[#C9782B] opacity-90 drop-shadow-md" viewBox="0 0 100 100" fill="none">
            <ellipse cx="50" cy="52" rx="20" ry="32" transform="rotate(25 50 52)" fill="#4A1E0D" stroke="#C9782B" strokeWidth="2" />
            <ellipse cx="44" cy="50" rx="6" ry="16" transform="rotate(25 44 50)" fill="#783516" />
            <path d="M48 24 Q52 18 56 16" stroke="#8DB255" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          // Sweets / Baklava illustration
          <svg className="w-24 h-24 text-[#C9782B] opacity-90 drop-shadow-md" viewBox="0 0 100 100" fill="none">
            <polygon points="50,22 80,48 50,74 20,48" fill="#542917" stroke="#D4AF37" strokeWidth="2.5" />
            <polygon points="50,32 70,48 50,64 30,48" fill="#8DB255" opacity="0.8" />
            <circle cx="50" cy="48" r="4" fill="#FFF4E3" />
          </svg>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      loading="lazy"
      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
    />
  );
};
