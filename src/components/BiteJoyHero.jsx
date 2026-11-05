import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DoodleSunburst, DoodleHeart, DoodleLeaf } from './Doodles';
import { ArrowRight, Sparkles, ShieldCheck, MapPin } from 'lucide-react';

export const BiteJoyHero = ({ onOpenBuildBox }) => {
  const { lang } = useLanguage();

  const handleShopNow = () => {
    const target = document.querySelector('#top-picks');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-24 sm:pt-36 pb-10 sm:pb-14 lg:pb-20 overflow-hidden bg-[#FFFDF9]">
      
      {/* Background Video with Atmospheric Contrast Overlays */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-102"
        >
          <source src="./assets/background.mp4" type="video/mp4" />
        </video>

        {/* Soft Warm Overlay to ensure clear contrast & brand aesthetic */}
        <div className="absolute inset-0 bg-[#FFFDF9]/80 sm:bg-[#FFFDF9]/75 backdrop-blur-[1px]" />
        
        {/* Seamless top & bottom gradient blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/90 via-transparent to-[#FFFDF9]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left rtl:lg:text-right">
            
            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#24140E] tracking-tight leading-[1.12] sm:leading-[1.08] font-sans">
                {lang === 'ar' ? (
                  <>
                    لقيمات صغيرة، <br />
                    <span className="text-[#C0121D]">
                      بهجة كبيرة.
                    </span>
                  </>
                ) : (
                  <>
                    Small Bites, <br />
                    <span className="text-[#C0121D]">
                      Big Goodness.
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#63534B] font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {lang === 'ar'
                ? 'تشكيلة فاخرة من الشوكولاتة البلجيكية، والمكسرات المحمصة طازجاً، والفواكه المجففة في قلب سوق الرولة، الشارقة.'
                : 'Nutritious snacks, oven-roasted nuts, and handcrafted chocolates made with real ingredients to fuel your everyday adventures.'}
            </p>

            {/* Call to Actions with Storefront Red */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              
              {/* Shop Now Button in Storefront Red */}
              <div className="relative inline-flex items-center group w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleShopNow}
                  className="w-full sm:w-auto justify-center bg-[#C0121D] hover:bg-[#A30E17] text-white px-7 sm:px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
                >
                  <span>{lang === 'ar' ? 'تسوق الآن' : 'Shop Now'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Doodle Rays beside button */}
                <div className="absolute -right-8 -top-3 hidden sm:block pointer-events-none">
                  <DoodleSunburst className="w-7 h-7 text-[#C0121D] rotate-45" />
                </div>
              </div>

              {/* Build Box Secondary CTA */}
              <button
                type="button"
                onClick={onOpenBuildBox}
                className="w-full sm:w-auto justify-center bg-white hover:bg-[#FDF6EE] text-[#24140E] border border-[#24140E]/15 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all hover:border-[#C0121D] shadow-xs min-h-[48px] flex items-center"
              >
                <span>{lang === 'ar' ? 'اصنع بوكس هداياك' : 'Build Your Box'}</span>
              </button>
            </div>

            {/* Quick Micro Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-[#63534B] font-semibold">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C0121D] shrink-0" />
                <span>{lang === 'ar' ? 'سوق الرولة، الشارقة' : 'Souq Al Rolla, Sharjah'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4E9F88] shrink-0" />
                <span>{lang === 'ar' ? 'تحميص طازج يومياً' : 'Always Fresh'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DoodleLeaf className="w-3.5 h-3.5 text-[#4E9F88] shrink-0" />
                <span>{lang === 'ar' ? 'مكونات نقية ١٠٠٪' : '100% Real'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container (Transparent Vector, No Box, No Text) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0 flex items-center justify-center">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-lg group">
              <img
                src="./assets/vectorchoco.png"
                alt="Umm Al Tarafa fresh chocolates and roasted nuts"
                className="w-full h-auto max-h-[480px] object-contain drop-shadow-[0_20px_40px_rgba(36,20,14,0.18)] transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
