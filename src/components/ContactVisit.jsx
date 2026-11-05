import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  Phone, 
  ShoppingBag, 
  Navigation, 
  User, 
  ExternalLink,
  Clock 
} from 'lucide-react';

export const ContactVisit = () => {
  const { lang, isRtl, t, businessInfo } = useLanguage();

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Souq+Al+Rolla+Building,+Shop+No.+10,+Umm+Al+Tarafa,+Rolla,+Sharjah';
  const iframeMapSrc = 'https://maps.google.com/maps?q=Souq+Al+Rolla+Building,+Umm+Al+Tarafa,+Rolla,+Sharjah&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const whatsappUrl = `https://wa.me/971558172666?text=${encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً أخي حسين، أود الاستفسار عن موقع المحل والمكسرات والشوكولاتة المتوفرة.'
      : 'Hello Hussain, I would like to inquire about your shop location in Souq Al Rolla and available sweets & nuts.'
  )}`;

  return (
    <section id="visit" className="py-20 lg:py-24 bg-[#2A1008] text-[#FFF4E3] relative overflow-hidden">
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#FFF4E3] tracking-tight">
            {t('visit.title')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#D4AF37] font-medium">
            {t('visit.subtitle')}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Details & Tap-to-call buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-[#1F0C05] border border-[#D4AF37]/25 shadow-xl">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-2xl bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/30 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                    {t('visit.addressTitle')}
                  </h3>
                  <p className="text-sm font-semibold text-[#FFF4E3] leading-snug">
                    {businessInfo.addressEn}
                  </p>
                  <p className="text-xs text-[#FFF4E3]/70 font-arabic mt-1">
                    {businessInfo.addressAr}
                  </p>
                </div>
              </div>

              {/* Get Directions CTA Button */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#C9782B] hover:bg-[#E08B34] text-white font-bold text-xs shadow-md transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t('visit.getDirections')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Tap-to-call Phone Numbers Card */}
            <div className="p-6 rounded-3xl bg-[#1F0C05] border border-[#D4AF37]/25 shadow-xl space-y-4">
              {/* Hussain WhatsApp / Mobile */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#FFF4E3]/70 flex items-center gap-1">
                      <User className="w-3 h-3 text-[#D4AF37]" />
                      <span>{businessInfo.contactPerson} (Mobile / WhatsApp)</span>
                    </div>
                    <div className="font-bold text-sm text-[#FFF4E3] font-mono mt-0.5">
                      {businessInfo.phoneMobile}
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${businessInfo.phoneMobileInt}`}
                  className="px-3.5 py-1.5 rounded-full bg-[#2A1008] hover:bg-[#25D366] text-[#F3E5AB] hover:text-white border border-[#D4AF37]/30 text-xs font-bold transition-all shadow-sm"
                >
                  {lang === 'ar' ? 'اتصال' : 'Call'}
                </a>
              </div>

              {/* Shop Landline */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#FFF4E3]/70">
                      {t('visit.callShop')}
                    </div>
                    <div className="font-bold text-sm text-[#FFF4E3] font-mono mt-0.5">
                      {businessInfo.phoneShop}
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${businessInfo.phoneShopInt}`}
                  className="px-3.5 py-1.5 rounded-full bg-[#2A1008] hover:bg-[#C8102E] text-[#F3E5AB] hover:text-white border border-[#D4AF37]/30 text-xs font-bold transition-all shadow-sm"
                >
                  {lang === 'ar' ? 'اتصال' : 'Call'}
                </a>
              </div>
            </div>

            {/* Clean Hours Note (No invented hours) */}
            <div className="p-4 rounded-2xl bg-[#1A0A04]/80 border border-white/5 flex items-center gap-3 text-xs text-[#FFF4E3]/75">
              <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>{t('visit.hoursNote')}</span>
            </div>
          </div>

          {/* Right: Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/35 shadow-2xl bg-[#1F0C05] p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-black">
                <iframe
                  title="UMM AL TARAFA SWEETS & NUTS TR. Map"
                  src={iframeMapSrc}
                  className="w-full h-full border-0 filter contrast-125 saturate-110"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#1A0A04] rounded-xl mt-2 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-medium text-[#FFF4E3]">
                  <Navigation className="w-4 h-4 text-[#8DB255]" />
                  <span>Souq Al Rolla Building, Shop No. 10, Rolla, Sharjah</span>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#E08B34] hover:text-[#FFF4E3] flex items-center gap-1 transition-colors"
                >
                  <span>{lang === 'ar' ? 'عرض على خرائط Google' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
