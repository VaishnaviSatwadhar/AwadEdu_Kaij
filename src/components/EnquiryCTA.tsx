import React from 'react';
import { Phone, Send, ShieldCheck } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';

interface EnquiryCTAProps {
  onOpenEnquiryModal: () => void;
}

export const EnquiryCTA: React.FC<EnquiryCTAProps> = ({ onOpenEnquiryModal }) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-brand-900 via-navy-900 to-navy-950 text-white relative overflow-hidden shadow-xl">
      {/* Decorative Glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 rounded-full text-emerald-300 text-xs font-bold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('cta.badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {t('cta.title')}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t('cta.subheading')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href={`tel:${ACADEMY_DATA.brand.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-navy-950 font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5 text-brand-600" />
              <span>Call Now</span>
            </a>

            <a
              href={ACADEMY_DATA.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={onOpenEnquiryModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-5 h-5" />
              <span>{t('cta.button')}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
