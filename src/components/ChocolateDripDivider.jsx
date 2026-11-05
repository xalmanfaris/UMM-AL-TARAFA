import React from 'react';
import { motion } from 'framer-motion';

export const ChocolateDripDivider = ({
  flip = false,
  fillColor = '#180903',
  accentColor = '#2B1208',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none pointer-events-none select-none z-10 ${className} ${
        flip ? 'rotate-180 -scale-x-100' : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-10 md:h-20 lg:h-24 block"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chocFlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3E1C0F" />
            <stop offset="50%" stopColor="#2B1208" />
            <stop offset="100%" stopColor="#180903" />
          </linearGradient>
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="35%" stopColor="rgba(212, 175, 55, 0.4)" />
            <stop offset="70%" stopColor="rgba(200, 120, 42, 0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Golden highlight contour */}
        <path
          d="M0,32 C180,75 320,10 520,60 C720,110 880,25 1100,75 C1280,115 1380,45 1440,55"
          fill="none"
          stroke="url(#goldRim)"
          strokeWidth="3"
        />

        {/* Back dark chocolate wave */}
        <path
          d="M0,45 C200,85 360,15 560,70 C760,120 920,35 1140,85 C1300,120 1390,55 1440,65 L1440,120 L0,120 Z"
          fill={accentColor}
          opacity="0.8"
        />

        {/* Foreground main chocolate wave with drips */}
        <path
          d="M0,20 C160,65 300,0 480,50 C580,78 620,115 650,115 C680,115 710,75 800,45 C940,0 1060,95 1200,65 C1320,40 1380,80 1440,40 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>

      {/* Animated falling drip teardrop 1 */}
      <motion.div
        className="absolute left-[45%] top-1/2 w-3 h-5 md:w-4 md:h-6 rounded-full bg-[#180903] shadow-md border-b border-[#D4AF37]/40"
        initial={{ y: 0, scaleY: 1, opacity: 0.9 }}
        animate={{
          y: [0, 18, 28, 0],
          scaleY: [1, 1.4, 0.8, 1],
          opacity: [0.9, 1, 0, 0.9],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated falling drip teardrop 2 */}
      <motion.div
        className="absolute left-[78%] top-1/3 w-2.5 h-4 md:w-3 md:h-5 rounded-full bg-[#2B1208] shadow-md border-b border-[#C8782A]/30"
        initial={{ y: 0, scaleY: 1, opacity: 0.8 }}
        animate={{
          y: [0, 14, 22, 0],
          scaleY: [1, 1.3, 0.9, 1],
          opacity: [0.8, 0.95, 0, 0.8],
        }}
        transition={{
          duration: 3.8,
          delay: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
