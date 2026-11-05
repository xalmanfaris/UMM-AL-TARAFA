import React from 'react';

export const DoodleHeart = ({ className = "w-5 h-5 text-[#C0121D]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  </svg>
);

export const DoodleSunburst = ({ className = "w-6 h-6 text-[#C0121D]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    className={className}
  >
    <line x1="12" y1="3" x2="12" y2="8" />
    <line x1="4.5" y1="6" x2="8.5" y2="9.5" />
    <line x1="19.5" y1="6" x2="15.5" y2="9.5" />
  </svg>
);

export const DoodleSparkle = ({ className = "w-5 h-5 text-[#E5A118]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2L14.3 9.7L22 12L14.3 14.3L12 22L9.7 14.3L2 12L9.7 9.7L12 2Z" />
  </svg>
);

export const DoodleStar = ({ className = "w-5 h-5 text-[#E5A118]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const DoodleSquiggleArrow = ({ className = "w-16 h-10 text-[#4E9F88]" }) => (
  <svg
    viewBox="0 0 80 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 32 C 16 12, 30 10, 42 24 C 52 34, 62 26, 72 16" />
    <path d="M64 12 L72 16 L68 24" />
  </svg>
);

export const DoodleLeaf = ({ className = "w-6 h-6 text-[#4E9F88]" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 4 13C4 7 11 2 20 2C20 11 15 20 11 20Z" />
    <path d="M4 13L15 2" />
  </svg>
);
