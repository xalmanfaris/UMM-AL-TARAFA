import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DoodleHeart, DoodleStar } from './Doodles';
import { Gift, Award, Cookie, ArrowRight } from 'lucide-react';

export const RewardsStrip = () => {
  const { lang } = useLanguage();

  return (
    <section id="rewards" className="py-8 sm:py-12 bg-[#FFFDF9] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Soft Mint/Cream Banner Container */}
        <div className="relative rounded-3xl bg-[#E4F3EC] p-5 sm:p-7 border border-[#4E9F88]/20 shadow-xs overflow-hidden">
          
          {/* Background subtle doodle stars */}
          <div className="absolute top-2 right-12 text-[#4E9F88]/20 hidden sm:block pointer-events-none">
            <DoodleStar className="w-10 h-10 text-[#4E9F88]" />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
            
            {/* Mascot & Headline */}
            <div className="flex items-center gap-3 sm:gap-4 text-left rtl:text-right">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center p-1 transform hover:rotate-6 transition-transform shrink-0">
                <img
                  src="./assets/bitejoy/rewards-mascot.png"
                  alt="Umm Al Tarafa Rewards Mascot"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base sm:text-xl font-black text-[#24140E] font-sans">
                    {lang === 'ar' ? 'مكافآت أم الطرافة' : 'UMM AL TARAFA Rewards'}
                  </h3>
                  <DoodleHeart className="w-4 h-4 text-[#C0121D]" />
                </div>
                <p className="text-xs sm:text-sm text-[#63534B] font-medium leading-tight sm:leading-normal">
                  {lang === 'ar'
                    ? 'تسوق أكثر. اجمع نقاطاً أكثر. استمتع بمكافآت حصرية مع كل طلب!'
                    : 'Snack more. Earn more. Exclusive member perks with every order!'}
                </p>
              </div>
            </div>

            {/* 3 Step Perks in center */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/60 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-full">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center text-[#4E9F88] shadow-2xs">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-extrabold text-[#24140E]">
                  {lang === 'ar' ? 'اكسب نقاطاً' : 'Earn Points'}
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/60 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-full">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center text-[#C0121D] shadow-2xs">
                  <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-extrabold text-[#24140E]">
                  {lang === 'ar' ? 'افتح هدايا' : 'Unlock Gifts'}
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/60 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-full">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center text-[#E5A118] shadow-2xs">
                  <Cookie className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-extrabold text-[#24140E]">
                  {lang === 'ar' ? 'سناك مجاني' : 'Free Treats'}
                </span>
              </div>
            </div>

            {/* Join & Earn Direct WhatsApp Button */}
            <a
              href={`https://wa.me/971558172666?text=${encodeURIComponent(
                lang === 'ar'
                  ? 'مرحباً، أود الانضمام إلى نادي مكافآت أم الطرافة والحصول على خصم الترحيب ١٠٪.'
                  : 'Hello, I would like to join the UMM AL TARAFA rewards club and claim the 10% welcome discount.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center bg-[#C0121D] hover:bg-[#A30E17] text-white px-6 sm:px-7 py-3 rounded-full font-black text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
            >
              <span>{lang === 'ar' ? 'انضم واكسب الآن' : 'Join & Earn'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
