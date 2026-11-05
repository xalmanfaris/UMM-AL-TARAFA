import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export const ZeroTricks = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#24140E]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Narrow Olive Green Vertical Card with Rotated Title */}
          <div className="md:col-span-3 bg-[#2C442D] text-white rounded-3xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden group">
            {/* Rotated Sideways Headline */}
            <div className="pt-2">
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wider md:[writing-mode:vertical-rl] md:rotate-180 leading-none">
                {lang === 'ar' ? 'بلا إضافات.. مذاق خالص' : 'ZERO TRICKS JUST TASTE'}
              </h3>
            </div>

            {/* Bottom mini image */}
            <div className="rounded-2xl overflow-hidden mt-6 bg-black/20 shadow-sm">
              <img
                src="./assets/modern/toast_morning.jpg"
                alt="Zero tricks toast"
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Center Warm Golden Yellow Square Card */}
          <div className="md:col-span-4 bg-[#F8C868] text-[#24140E] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md group">
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight leading-tight mb-4">
                {lang === 'ar' ? 'بلا حيل، فقط الطعم الحقيقي' : 'ZERO TRICKS JUST TASTE'}
              </h3>
              
              {/* Plate with toast and ramekins photo */}
              <div className="rounded-2xl overflow-hidden my-3 shadow-md bg-white/40">
                <img
                  src="./assets/modern/bento_plate.jpg"
                  alt="Aesthetic Breakfast Bento Plate"
                  className="w-full h-52 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-[#24140E]/80">
                {lang === 'ar' ? 'نقاء المكونات أولاً' : 'PURE INGREDIENTS ONLY'}
              </span>
            </div>
          </div>

          {/* Column 3: Right Fuel with Real & Healthy & Pure Card */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-display font-black text-2xl sm:text-4xl text-[#24140E] uppercase tracking-tight leading-[1.05]">
                {lang === 'ar'
                  ? 'تغذى بالطبيعة.. واشعر بالفرق حقاً'
                  : 'FUEL WITH REAL FEEL THE DIFFERENCE NATURALLY'}
              </h3>

              <a
                href="#products"
                className="inline-flex items-center gap-1.5 font-display font-black text-xs sm:text-sm text-[#24140E] hover:text-[#FF6443] uppercase tracking-wider transition-colors group"
              >
                <span>{lang === 'ar' ? 'تذوق الصنعة' : 'TASTE THE CRAFT'}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* White Rounded Card: Peanut Graphic + HEALTHY & PURE */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#24140E]/10 flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-[#FAF7F2] p-1">
                <img
                  src="./assets/modern/nut_basket.jpg"
                  alt="Healthy and pure"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h4 className="font-display font-black text-base sm:text-lg text-[#24140E] uppercase tracking-tight">
                  {lang === 'ar' ? 'صحي ونقي تماماً' : 'HEALTHY & PURE'}
                </h4>
                <p className="text-xs text-[#24140E]/60 font-semibold tracking-wider uppercase mt-0.5">
                  {lang === 'ar' ? 'فول سوداني ومكسرات عضوية' : 'Organic peanut and more'}
                </p>
              </div>
            </div>

            {/* Paragraph at bottom */}
            <p className="text-xs sm:text-sm text-[#24140E]/70 font-medium leading-relaxed">
              {lang === 'ar'
                ? 'برطمان من المتعة الواعية المصنوعة بكل عناية، محمصة ببطء، وناعمة بقوام طبيعي فائق الجودة.'
                : 'A jar of mindful indulgence thoughtfully crafted, slow-roasted, and smooth by nature.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
