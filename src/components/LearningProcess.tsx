import React from 'react';
import { BookOpen, Edit3, FileCheck, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <BookOpen key="1" className="w-6 h-6 text-brand-600" />,
  <Edit3 key="2" className="w-6 h-6 text-emerald-600" />,
  <FileCheck key="3" className="w-6 h-6 text-amber-600" />,
  <TrendingUp key="4" className="w-6 h-6 text-purple-600" />,
  <Zap key="5" className="w-6 h-6 text-rose-600" />
];

export const LearningProcess: React.FC = () => {
  const { t } = useLanguage();

  const stepsTranslation = t('process.steps') || [];
  const steps = ACADEMY_DATA.learningProcess.map((step, idx) => ({
    ...step,
    title: stepsTranslation[idx]?.title || step.title,
    description: stepsTranslation[idx]?.desc || step.description,
  }));

  return (
    <section id="process" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-600/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-brand-900/80 border border-brand-700/60 px-3.5 py-1 rounded-full text-brand-300 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>{t('process.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {t('process.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A systematic learning path designed to transition students from basic comprehension to exam mastery.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full mx-auto mt-4" />
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-navy-800/80 backdrop-blur-md p-6 rounded-3xl border border-slate-700/80 hover:border-brand-500 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Step Number Bubble */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-brand-400 bg-brand-950/80 border border-brand-800 px-3 py-1 rounded-full">
                  Step {step.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {icons[idx] || <Sparkles className="w-5 h-5 text-brand-400" />}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line Indicator for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-brand-400 text-xs flex items-center justify-center font-bold">
                    →
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
