import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const { lang } = useLanguage();

  const defaultMessage = lang === 'ar'
    ? 'مرحباً أخي حسين، أود الاستفسار والطلب من متجر أم الطرافة.'
    : 'Hello Hussain, I would like to inquire about ordering chocolates and nuts from UMM AL TARAFA.';

  const whatsappUrl = `https://wa.me/971558172666?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 rtl:right-auto rtl:left-5 z-40 pointer-events-auto">
      {/* Exactly ONE floating WhatsApp button without popup */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-full bg-[#25D366] opacity-60 blur-md group-hover:opacity-100 animate-pulse pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp with Hussain"
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30"
        >
          <MessageCircle className="w-7 h-7 fill-white/20" />
        </a>
      </div>
    </div>
  );
};
