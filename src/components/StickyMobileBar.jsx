import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

export const StickyMobileBar = () => {
  const { lang, businessInfo } = useLanguage();

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Souq+Al+Rolla+Building,+Shop+No.+10,+Umm+Al+Tarafa,+Rolla,+Sharjah';

  const defaultMessage = lang === 'ar'
    ? 'مرحباً أخي حسين، أود الاستفسار والطلب من متجر أم الطرافة.'
    : 'Hello Hussain, I would like to inquire about ordering chocolates and nuts from UMM AL TARAFA.';

  const whatsappUrl = `https://wa.me/971558172666?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#1A0A04]/95 backdrop-blur-lg border-t border-[#D4AF37]/30 shadow-[0_-5px_20px_rgba(0,0,0,0.6)] px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))]">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        {/* 1. Call */}
        <a
          href={`tel:${businessInfo.phoneMobileInt}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#2A1008] border border-white/10 active:bg-[#C8102E] text-white transition-colors"
        >
          <Phone className="w-4 h-4 text-[#D4AF37] mb-1" />
          <span className="text-[11px] font-bold tracking-tight">
            {lang === 'ar' ? 'اتصال' : 'Call'}
          </span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white/20 mb-1" />
          <span className="text-[11px] font-bold tracking-tight">
            {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
          </span>
        </a>

        {/* 3. Directions */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#2A1008] border border-white/10 active:bg-[#C9782B] text-white transition-colors"
        >
          <Navigation className="w-4 h-4 text-[#C9782B] mb-1" />
          <span className="text-[11px] font-bold tracking-tight">
            {lang === 'ar' ? 'الاتجاهات' : 'Directions'}
          </span>
        </a>
      </div>
    </div>
  );
};
