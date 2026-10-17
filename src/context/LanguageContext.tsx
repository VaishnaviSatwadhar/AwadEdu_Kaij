import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, LANGUAGES } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('awad_academy_lang') as Language;
      if (saved && (saved === 'en' || saved === 'hi' || saved === 'mr')) {
        return saved;
      }
    } catch (e) {
      console.error('Failed to read language from localStorage', e);
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('awad_academy_lang', lang);
    } catch (e) {
      console.error('Failed to save language to localStorage', e);
    }
  };

  // Helper function to resolve nested keys like "hero.subheading"
  const t = (path: string): any => {
    const keys = path.split('.');
    
    // Attempt current language lookup
    let result: any = translations[language];
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        result = undefined;
        break;
      }
    }

    // Fallback to English if not found
    if (result === undefined) {
      let fallback: any = translations.en;
      for (const key of keys) {
        if (fallback && typeof fallback === 'object' && key in fallback) {
          fallback = fallback[key];
        } else {
          return path;
        }
      }
      return fallback;
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
