import React from 'react';
import { BookOpenCheck, Users, Target, CheckCircle2, Sparkles, Award, Quote, ShieldCheck } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <BookOpenCheck key="1" className="w-6 h-6 text-brand-600" />,
  <Users key="2" className="w-6 h-6 text-emerald-600" />,
  <Target key="3" className="w-6 h-6 text-amber-600" />
];

export const About: React.FC = () => {
  const { t } = useLanguage();
  const pillars = t('about.pillars') || [];
  const highlights = t('about.highlights') || [];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-50 to-emerald-50 border border-brand-200/80 px-4 py-1.5 rounded-full text-brand-900 text-xs font-bold tracking-wide uppercase shadow-2xs">
            <Sparkles className="w-4 h-4 text-brand-600 animate-pulse-subtle" />
            <span>{t('about.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Dedicated to empowering young minds in Kaij with conceptual depth, individual attention, and disciplined practice.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-600 via-emerald-500 to-amber-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Executive Director & About Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Director Leadership Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Decorative Outer Ring Shadow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-600 via-emerald-500 to-amber-400 rounded-3xl blur-lg opacity-30 animate-pulse-subtle" />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <img
                  src={ACADEMY_DATA.about.image}
                  alt="Prof. Awad - Director of Awad Educational Academy Kaij"
                  loading="eager"
                  decoding="async"
                  className="w-full h-[440px] sm:h-[480px] object-cover object-top brightness-[1.04] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                {/* Top Badge: Leadership Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold text-emerald-300 border border-emerald-400/30 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Founder
                  </span>
                </div>

                {/* Bottom Director Quote Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/60 text-slate-800 space-y-2">
                  <div className="flex items-start gap-2">
                    <Quote className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-slate-700 italic leading-snug">
                      Our goal is to build rock-solid concepts and self-confidence in every student in Kaij.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-extrabold text-navy-950">Dr.Vithal Awad</h4>
                      <p className="text-[10px] text-slate-500 font-semibold">Director & Founder • AEA Kaij</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-[11px] border border-brand-200">
                      AEA
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill Badge */}
              <div className="absolute -bottom-4 -right-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-navy-950">10+ Years Coaching</h5>
                  <p className="text-[10px] text-slate-500 font-semibold">Leadership in Academic Care</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Highlights & Pillars */}
          <div className="lg:col-span-7 space-y-6">

            {/* Leadership Overview Paragraphs */}
            <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-3 font-normal">
              <p className="text-slate-700 leading-relaxed m-0">{t('about.paragraph1')}</p>
              <p className="text-slate-700 leading-relaxed m-0">{t('about.paragraph2')}</p>
            </div>

            {/* Key Academic Highlights Grid */}
            {highlights && highlights.length > 0 && (
              <div className="bg-gradient-to-br from-brand-50/70 via-white to-emerald-50/70 border border-brand-200/70 rounded-2xl p-5 shadow-2xs space-y-3">
                <h3 className="font-heading font-bold text-navy-950 text-base flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  <span>{t('about.highlightsTitle')}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
                  {highlights.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-2 bg-white/90 p-2.5 rounded-xl border border-slate-100 shadow-2xs hover:border-brand-200 transition-colors">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3 Core Educational Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
              {pillars.map((pillar: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-4.5 rounded-2xl border border-slate-200/80 hover:border-brand-400 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-0.5"
                >
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-brand-50 shadow-2xs border border-slate-100 group-hover:border-brand-200 flex items-center justify-center transition-colors">
                      {icons[index] || <CheckCircle2 className="w-5 h-5 text-brand-600" />}
                    </div>
                    <h3 className="font-heading font-bold text-base text-navy-950 group-hover:text-brand-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
