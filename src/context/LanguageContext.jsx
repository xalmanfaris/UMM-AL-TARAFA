import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, businessInfo } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('uat_language');
      return saved === 'ar' ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  });

  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('uat_language', lang);
    } catch {
      // storage disabled
    }
  }, [lang, isRtl]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const setLanguage = (newLang) => {
    if (newLang === 'en' || newLang === 'ar') {
      setLang(newLang);
    }
  };

  // Helper to get nested translation keys e.g. t('hero.tagline')
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English
        let fallback = translations.en;
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        isRtl,
        toggleLanguage,
        setLanguage,
        t,
        businessInfo,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
