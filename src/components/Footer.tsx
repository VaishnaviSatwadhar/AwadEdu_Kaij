import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <Logo variant="on-dark" size="md" />
              <span className="bg-brand-900 text-brand-300 border border-brand-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Kaij
              </span>
            </a>

            <p className="text-sm text-slate-400 font-medium italic">
              &ldquo;{t('footer.tagline')}&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              {t('footer.aboutText')}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ACADEMY_DATA.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_DATA.socialLinks.instagram}
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_DATA.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_DATA.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: t('nav.home'), href: '#home' },
                { name: t('nav.about'), href: '#about' },
                { name: t('nav.courses'), href: '#courses' },
                { name: t('nav.whyChooseUs'), href: '#why-choose-us' },
                { name: t('nav.results'), href: '#results' },
                { name: t('nav.gallery'), href: '#gallery' },
                { name: t('nav.testimonials'), href: '#testimonials' },
                { name: t('nav.contact'), href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs (Col 8-10) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              {t('footer.academicPrograms')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                'School Academic Coaching',
                'Foundation Program',
                'Olympiad / SOF Preparation',
                'Class X Board Examination',
                'Class XII Board Examination',
              ].map((program) => (
                <li key={program}>
                  <a
                    href="#courses"
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{program}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary (Col 11-12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              {t('footer.kaijCenter')}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <a 
                href={ACADEMY_DATA.brand.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors group"
              >
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Kaij, Beed District, Maharashtra</span>
              </a>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${ACADEMY_DATA.brand.phoneRaw}`} className="hover:text-white">
                  {ACADEMY_DATA.brand.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${ACADEMY_DATA.brand.email}`} className="hover:text-white truncate">
                  {ACADEMY_DATA.brand.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t('footer.rights')}</p>
          <p className="text-[11px] text-slate-600">
            Awad Educational Academy, Kaij, Beed, Maharashtra.
          </p>
        </div>

      </div>
    </footer>
  );
};
