import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Award, HeartHandshake, CheckCircle2, Brain, Sparkles, BookOpen, Star, Pause, Play, Stethoscope } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenEnquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiryModal }) => {
  const { t } = useLanguage();

  const rawImages = ACADEMY_DATA.hero.heroImages || [];
  const slideTranslations = t('hero.slides') || [];

  const images = rawImages.map((img, idx) => ({
    url: img.url,
    title: slideTranslations[idx]?.title || img.title,
    badge: slideTranslations[idx]?.badge || img.badge,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play slider every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 gradient-bg-hero">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-brand-100/50 to-emerald-100/40 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-brand-200/40 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Logo Banner */}
            <div className="flex justify-center lg:justify-start mb-2">
              <Logo size="lg" />
            </div>

            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-50 to-emerald-50 border border-brand-200/60 px-4 py-1.5 rounded-full text-brand-900 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-brand-600 animate-spin-slow" />
              <span>{t('hero.trustBadge')}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 leading-[1.15] tracking-tight">
              {t('hero.headlineMain')}{' '}
              <span className="block gradient-text mt-1">{t('hero.headlineSub')}</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subheading')}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#neet-hub"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-base px-7 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ring-2 ring-emerald-400/30 card-3d"
              >
                <Stethoscope className="w-5 h-5 text-emerald-300 animate-bounce" />
                <span>NEET 3D Rank Predictor</span>
              </a>

              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-950 text-white font-bold text-base px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <BookOpen className="w-5 h-5 text-brand-400" />
                <span>{t('hero.exploreCourses')}</span>
              </a>

              <button
                onClick={onOpenEnquiryModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-brand-600 text-slate-800 hover:text-white font-bold text-base px-6 py-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>{t('hero.enquireNow')}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Key Value Micro Features */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">{t('hero.expertFaculty')}</h4>
                  <p className="text-[11px] text-slate-500">{t('hero.expertFacultySub')}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">{t('hero.conceptFirst')}</h4>
                  <p className="text-[11px] text-slate-500">{t('hero.conceptFirstSub')}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">{t('hero.olympiadPrep')}</h4>
                  <p className="text-[11px] text-slate-500">{t('hero.olympiadPrepSub')}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">{t('hero.smallBatches')}</h4>
                  <p className="text-[11px] text-slate-500">{t('hero.smallBatchesSub')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Movable Header Image Slider (Changes every 3 sec) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 via-emerald-500 to-brand-700 rounded-3xl blur-lg opacity-40 animate-pulse-subtle" />
              
              {/* Main Image Container Slider */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Timer progress line at the top (resets every 3s) */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/20 z-20 overflow-hidden">
                  <div 
                    key={currentIndex + (isPaused ? '-paused' : '-active')} 
                    className={`h-full bg-gradient-to-r from-brand-400 via-amber-400 to-emerald-400 ${isPaused ? 'w-full opacity-60' : 'animate-timer-progress'}`}
                    style={{ animationDuration: '3000ms' }}
                  />
                </div>

                {/* Images Stack with Smooth Fade / Transition */}
                <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px]">
                  {images.map((img, idx) => (
                    <div
                      key={img.url}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover object-center brightness-[1.04] contrast-[1.06] saturate-[1.04] transform transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Image Overlay Gradient & Dynamic Caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent flex flex-col justify-end p-6 text-white">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-600/90 backdrop-blur-md text-[11px] font-bold text-white shadow-sm border border-brand-400/30">
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            {img.badge}
                          </span>
                          <span className="text-[11px] font-medium text-slate-300 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                            {idx + 1} / {images.length}
                          </span>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">
                          {img.title}
                        </h3>

                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                            ))}
                          </div>
                          <span className="text-xs font-semibold text-amber-300">Awad Academy Kaij</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Left & Right Manual Navigation Controls */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous Image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-navy-900/90 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next Image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-navy-900/90 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Interactive Pagination Dots & Pause Indicator */}
                <div className="absolute bottom-3 right-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    title={isPaused ? "Resume auto play" : "Pause auto play (3s)"}
                    className="text-white/80 hover:text-white transition-colors mr-1"
                  >
                    {isPaused ? <Play className="w-3 h-3 text-emerald-400" /> : <Pause className="w-3 h-3 text-amber-300" />}
                  </button>

                  <div className="flex items-center gap-1.5">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentIndex
                            ? 'w-6 bg-gradient-to-r from-brand-400 to-amber-400'
                            : 'w-2 bg-white/40 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Floating Card 1: Top Right - Expert Guidance */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float hidden sm:flex z-20">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-950">{t('hero.expertFaculty')}</h4>
                  <p className="text-[10px] text-slate-500 font-medium">{t('hero.expertFacultySub')}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

