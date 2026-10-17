import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'mobile' | 'footer';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'navbar' }) => {
  const { language, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div className="py-2 border-t border-slate-100">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-1 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-brand-600" />
          <span>Select Language / भाषा</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`py-2 px-3 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition-all ${
                language === lang.code
                  ? 'bg-brand-600 text-white shadow-sm ring-2 ring-brand-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span className="text-sm font-semibold">{lang.nativeLabel}</span>
              <span className="text-[10px] opacity-80">{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs sm:text-sm font-bold px-3 py-2 rounded-xl transition-all border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4 text-brand-600" />
        <span>{currentLang.nativeLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white shadow-xl ring-1 ring-black/10 border border-slate-100 py-1.5 z-50 animate-fade-in focus:outline-none">
          <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
            Language / भाषा
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors ${
                language === lang.code
                  ? 'bg-brand-50 text-brand-700 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{lang.nativeLabel}</span>
                <span className="text-[11px] text-slate-400 font-normal">({lang.label})</span>
              </div>
              {language === lang.code && <Check className="w-4 h-4 text-brand-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
