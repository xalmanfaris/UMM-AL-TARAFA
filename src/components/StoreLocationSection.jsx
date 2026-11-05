import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessInfo } from '../data/translations';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Flame,
  Award,
  Gift,
  Maximize2,
  X,
  ExternalLink,
} from 'lucide-react';

export const StoreLocationSection = () => {
  const { lang, isRtl } = useLanguage();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Souq+Al+Rolla+Building,+Shop+No.+10,+Umm+Al+Tarafa,+Rolla,+Sharjah';

  const whatsappInquiryUrl = `https://wa.me/971558172666?text=${encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً أخي حسين (أم الطرافة)، أود الاستفسار عن التواجد والمنتجات في متجر سوق الرولة.'
      : 'Hello Hussain (UMM AL TARAFA), I would like to inquire about visiting your shop in Souq Al Rolla today.'
  )}`;

  const storeHighlights = [
    {
      icon: <Flame className="w-5 h-5 text-[#C0121D]" />,
      titleEn: 'On-Site Roasting Daily',
      titleAr: 'تحميص طازج يومياً داخل المتجر',
      descEn:
        'Small-batch roasting of California pistachios, jumbo cashews, golden almonds, and spiced chickpeas right before your eyes.',
      descAr:
        'تحميص يومي متواصل لأجود أنواع الفستق والكاجو واللوز والحمص لضمان القرمشة والرائحة الزكية.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#C0121D]" />,
      titleEn: 'Direct-Import Chocolates',
      titleAr: 'شوكولاتة عالمية بأسعار سوق الرولة',
      descEn:
        'Over 100 varieties of Cadbury, Galaxy, Ferrero Rocher, Lindt, KitKat, and European pralines at honest souq pricing.',
      descAr:
        'أكثر من ١٠٠ صنف من أشهر ماركات الشوكولاتة العالمية والويفر المستورد بأسعار الجملة والمفرق.',
    },
    {
      icon: <Gift className="w-5 h-5 text-[#C0121D]" />,
      titleEn: 'Bespoke Trays & Gifting',
      titleAr: 'تجهيز صواني وضيافة المناسبات',
      descEn:
        'Custom packaging, festive trays, and curated sweet boxes hand-assembled for weddings, family visits, and Eid.',
      descAr:
        'تنسيق راقٍ لصواني الضيافة وبوكسات الهدايا المخصصة للأعياد والأعراس والزيارات العائلية بكل إتقان.',
    },
  ];

  return (
    <section id="store-location" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      {/* Anchor for backward compatibility */}
      <span id="recipes" className="sr-only" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with Refined Editorial Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-[#24140E]/8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C0121D]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#C0121D]">
                {lang === 'ar' ? 'المتجر الفعلي في الشارقة' : 'Flagship Store • Souq Al Rolla, Sharjah'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24140E] tracking-tight font-sans">
              {lang === 'ar'
                ? 'متجرنا في قلب سوق الرولة'
                : 'Our Store in Historic Souq Al Rolla'}
            </h2>

            <p className="text-sm sm:text-base text-[#63534B] font-medium leading-relaxed">
              {lang === 'ar'
                ? 'نرحب بكم في متجر أم الطرافة لتجارة الحلويات والمكسرات. تفضلوا بزيارتنا لتذوق أشهى المكسرات المحمصة طازجاً، والحلويات، والشوكولاتة الفاخرة مع كرم الضيافة بإشراف الأخ حسين.'
                : 'Step inside UMM AL TARAFA SWEETS & NUTS in the heart of Sharjah. Experience the rich aroma of daily roasting, traditional Gulf hospitality, and shelves lined with premium chocolates.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#24140E] hover:bg-[#3E2319] text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:shadow-md group"
            >
              <Navigation className="w-4 h-4 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
              <span>{lang === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-8 sm:pt-12 items-stretch">
          
          {/* Left Column (7 cols): Clean Photographic Storefront Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden bg-[#24140E] shadow-[0_16px_40px_rgba(36,20,14,0.08)] border border-[#24140E]/10 group flex-1 h-72 sm:h-96 lg:h-auto min-h-[260px] sm:min-h-[480px]">
              
              {/* Storefront Image */}
              <img
                src="./assets/storefront.jpg"
                alt="UMM AL TARAFA Sweets & Nuts storefront, Souq Al Rolla, Sharjah"
                className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 opacity-95"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = './assets/storefront-real.jpg';
                }}
              />

              {/* Subtle Natural Shadow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />

              {/* Top Corner Pill: Open Status */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rtl:left-auto rtl:right-3 rtl:sm:right-4 z-10">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#24140E] text-[10px] sm:text-xs font-black shadow-md border border-white/40">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                  <span>{lang === 'ar' ? 'مفتوح يومياً' : 'Open Daily'}</span>
                  <span className="text-[#63534B] font-semibold text-[10px] sm:text-[11px] border-l rtl:border-r border-[#24140E]/15 pl-1.5 sm:pl-2 rtl:pr-1.5 rtl:sm:pr-2">
                    8:30 AM – 11:30 PM
                  </span>
                </div>
              </div>

              {/* Top Right Enlarge Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 rtl:right-auto rtl:left-3 rtl:sm:left-4 z-10 p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors shadow-sm"
                aria-label="Enlarge photo"
                title={lang === 'ar' ? 'عرض الصورة بالحجم الكامل' : 'View full-size photo'}
              >
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Bottom Overlay: Clean Store Meta */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 z-10 text-white space-y-1">
                <p className="text-[10px] sm:text-[11px] font-bold text-[#E5A118] tracking-widest uppercase">
                  {lang === 'ar' ? 'الشارقة، الإمارات العربية المتحدة' : 'Sharjah, United Arab Emirates'}
                </p>
                <h3 className="text-lg sm:text-2xl font-black font-sans leading-tight">
                  {lang === 'ar'
                    ? 'مبنى سوق الرولة، محل رقم ١٠'
                    : 'Souq Al Rolla Building, Shop No. 10'}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 font-medium max-w-lg line-clamp-2 sm:line-clamp-none">
                  {lang === 'ar'
                    ? 'بالقرب من حديقة ميدان الرولة وسوق الذهب القديم في منطقة التراث بالشارقة.'
                    : 'Conveniently located near Rolla Square Park and the historic souq quarter.'}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column (5 cols): Highlights & Visit Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6">
            
            {/* 3 Refined Highlight Cards */}
            <div className="space-y-2.5 sm:space-y-3">
              {storeHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-3.5 sm:p-5 border border-[#24140E]/8 shadow-2xs hover:shadow-sm hover:border-[#C0121D]/20 transition-all flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF7F2] border border-[#24140E]/6 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <h4 className="font-extrabold text-xs sm:text-[15px] text-[#24140E]">
                      {lang === 'ar' ? item.titleAr : item.titleEn}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#63534B] leading-relaxed">
                      {lang === 'ar' ? item.descAr : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visit Details Card */}
            <div className="bg-[#FAF7F2] rounded-3xl p-4 sm:p-6 border border-[#24140E]/8 space-y-4 sm:space-y-5">
              
              {/* Address */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C0121D]">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{lang === 'ar' ? 'العنوان' : 'Location'}</span>
                </div>
                <p className="text-xs sm:text-sm font-black text-[#24140E]">
                  {lang === 'ar' ? businessInfo.addressAr : businessInfo.addressEn}
                </p>
              </div>

              {/* Operating Hours */}
              <div className="space-y-2 pt-3 border-t border-[#24140E]/8">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#63534B]">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{lang === 'ar' ? 'أوقات العمل' : 'Store Hours'}</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[#24140E] gap-0.5">
                    <span className="font-bold">{lang === 'ar' ? 'السبت – الخميس:' : 'Saturday – Thursday:'}</span>
                    <span className="font-medium text-[#63534B]">8:30 AM – 1:30 PM & 4:00 PM – 11:30 PM</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[#24140E] gap-0.5">
                    <span className="font-bold">{lang === 'ar' ? 'الجمعة:' : 'Friday:'}</span>
                    <span className="font-medium text-[#63534B]">4:30 PM – 11:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Host & Direct Phone */}
              <div className="pt-3 border-t border-[#24140E]/8 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1.5">
                <div>
                  <span className="text-[#63534B] block text-[11px]">
                    {lang === 'ar' ? 'المسؤول في المحل:' : 'Host / Manager:'}
                  </span>
                  <span className="font-black text-[#24140E]">
                    {businessInfo.contactPerson} (حسين)
                  </span>
                </div>

                <div className="text-left rtl:text-right sm:text-right rtl:sm:text-left">
                  <span className="text-[#63534B] block text-[11px]">
                    {lang === 'ar' ? 'الهاتف / المحل:' : 'Phone Numbers:'}
                  </span>
                  <span className="font-bold text-[#24140E]">
                    {businessInfo.phoneShop} • {businessInfo.phoneMobile}
                  </span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Call */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-black flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-md min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span>{lang === 'ar' ? 'مراسلة عبر واتساب' : 'Inquire on WhatsApp'}</span>
                </a>

                <a
                  href={`tel:${businessInfo.phoneMobileInt}`}
                  className="py-3 px-5 rounded-full bg-white hover:bg-white/80 text-[#24140E] border border-[#24140E]/15 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C0121D] shrink-0" />
                  <span>{lang === 'ar' ? 'اتصال مباشر' : 'Call Store'}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Unobstructed Storefront Viewing */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsLightboxOpen(false)}
          />

          <div className="relative bg-[#1A110D] text-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 border border-white/10 my-8">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-base font-black">
                  UMM AL TARAFA SWEETS & NUTS. TR
                </h4>
                <p className="text-xs text-white/60">
                  {lang === 'ar'
                    ? 'سوق الرولة، الشارقة، الإمارات العربية المتحدة'
                    : 'Souq Al Rolla, Sharjah, United Arab Emirates'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black">
              <img
                src="./assets/storefront.jpg"
                alt="Storefront full view"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = './assets/storefront-real.jpg';
                }}
              />
            </div>

            <div className="p-4 sm:p-5 bg-[#140E0A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-white/80 font-medium">
                {lang === 'ar' ? businessInfo.addressAr : businessInfo.addressEn}
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 rounded-full bg-[#C0121D] hover:bg-[#A30E17] text-white font-bold flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'الاتجاهات' : 'Get Directions'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="py-2 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold"
                >
                  {lang === 'ar' ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
