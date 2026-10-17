import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onOpenEnquiryModal: (courseName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: t('nav.home'), href: '#home', id: 'home' },
    { name: 'NEET 3D Zone', href: '#neet-hub', id: 'neet-hub' },
    { name: t('nav.courses'), href: '#courses', id: 'courses' },
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.whyChooseUs'), href: '#why-choose-us', id: 'why-choose-us' },
    { name: t('nav.process'), href: '#process', id: 'process' },
    { name: t('nav.results'), href: '#results', id: 'results' },
    { name: t('nav.gallery'), href: '#gallery', id: 'gallery' },
    { name: t('nav.testimonials'), href: '#testimonials', id: 'testimonials' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-navy-950 text-slate-300 py-1.5 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {t('topBar.admissionsOpen')}
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline text-slate-300">{t('topBar.location')}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${ACADEMY_DATA.brand.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>{ACADEMY_DATA.brand.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white py-3 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <Logo size="md" className="group-hover:scale-105 transition-transform" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-brand-700 bg-brand-50 font-bold'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Selector & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop & Tablet Language Selector */}
            <LanguageSelector variant="navbar" />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Language Selector */}
              <LanguageSelector variant="mobile" />

              <div className="flex flex-col gap-1 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                      activeSection === link.id
                        ? 'text-brand-700 bg-brand-50 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="w-full bg-brand-700 hover:bg-brand-800 text-white font-semibold py-3 px-4 rounded-xl shadow text-center block"
              >
                {t('nav.enquireNow')}
              </button>
              <a
                href={`tel:${ACADEMY_DATA.brand.phoneRaw}`}
                className="w-full border border-slate-300 hover:bg-white text-navy-900 font-semibold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call {ACADEMY_DATA.brand.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
