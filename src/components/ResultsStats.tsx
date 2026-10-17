import React, { useState } from 'react';
import { Users, CheckCircle2, Award, BookOpen, Sparkles, Trophy, Star, ArrowRight } from 'lucide-react';
import { ACADEMY_DATA, AchieverItem } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';
 
const statIconMap: Record<string, React.ReactNode> = {
  students: <Users className="w-7 h-7 text-brand-500" />,
  tests: <CheckCircle2 className="w-7 h-7 text-emerald-500" />,
  experience: <Award className="w-7 h-7 text-amber-500" />,
  programs: <BookOpen className="w-7 h-7 text-purple-500" />
};

export const ResultsStats: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'neet' | 'boards' | 'olympiad' | 'foundation'>('all');

  const achievers = ACADEMY_DATA.achievers || [];
  const filteredAchievers = activeCategory === 'all'
    ? achievers
    : achievers.filter(item => item.category === activeCategory);

  const stats = ACADEMY_DATA.stats.map((stat) => ({
    ...stat,
    label: t(`results.${stat.id}`),
    sublabel: t(`results.${stat.id}Sub`),
  }));

  return (
    <section id="results" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-600/15 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-500/15 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 px-4 py-1.5 rounded-full text-amber-300 text-xs font-bold tracking-wide uppercase shadow-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>{t('results.badge')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t('results.title')}
          </h2>

          {/* PW Tagline Banner */}
          <div className="pt-1">
            <span className="inline-block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 bg-clip-text text-transparent font-heading font-extrabold text-lg sm:text-xl md:text-2xl drop-shadow-sm">
              &ldquo;{t('results.tagline')}&rdquo;
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            {t('results.subheading')}
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 via-brand-500 to-emerald-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            {t('results.allTab')}
          </button>

          <button
            onClick={() => setActiveCategory('neet')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeCategory === 'neet'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            NEET Medical Rankers
          </button>

          <button
            onClick={() => setActiveCategory('boards')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeCategory === 'boards'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            {t('results.boardsTab')}
          </button>

          <button
            onClick={() => setActiveCategory('olympiad')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeCategory === 'olympiad'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            {t('results.olympiadTab')}
          </button>

          <button
            onClick={() => setActiveCategory('foundation')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeCategory === 'foundation'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
            }`}
          >
            {t('results.foundationTab')}
          </button>
        </div>

        {/* Achievers / Rankers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAchievers.map((achiever: AchieverItem) => (
            <div
              key={achiever.id}
              className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-6 border border-slate-700/70 hover:border-amber-400/60 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Top Badge & Score Chip */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-[11px] font-bold text-amber-300 border border-amber-500/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    {achiever.badge}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs shadow-sm">
                    {achiever.score}
                  </span>
                </div>

                {/* Achiever Photo & Details */}
                <div className="flex items-center gap-3.5 pt-1">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md">
                      <img
                        src={achiever.photoUrl}
                        alt={achiever.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold border border-slate-900">
                      ✓
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                      {achiever.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {achiever.exam}
                    </p>
                    <div className="flex items-center gap-1 text-amber-400 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Student Quote / Testimonial Box */}
                <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-700/50 text-xs text-slate-300 italic leading-relaxed">
                  &ldquo;{achiever.quote}&rdquo;
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50 mt-4 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Awad Academy Achievers</span>
                <span className="text-emerald-400 font-semibold">Verified Result</span>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Impact Strip (PW Style Metrics) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-800/40 backdrop-blur-md p-6 rounded-3xl border border-slate-700/60 text-center hover:border-brand-400/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-slate-700 mx-auto flex items-center justify-center mb-4">
                {statIconMap[stat.id] || <Sparkles className="w-7 h-7 text-brand-400" />}
              </div>
              
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading mb-1 tracking-tight">
                {stat.value}
              </div>

              <h3 className="text-sm font-bold text-slate-200 mb-0.5">
                {stat.label}
              </h3>
              
              <p className="text-[11px] text-slate-400">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout CTA Strip */}
        <div className="bg-gradient-to-r from-brand-900 via-navy-900 to-amber-950 rounded-3xl p-8 sm:p-10 border border-brand-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Admissions Open 2026-27</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to Join Our Next Batch of Top Achievers in Kaij?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get conceptual clarity, weekly tests, and personalized faculty guidance.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all shrink-0 transform hover:-translate-y-0.5"
          >
            <span>Enquire for Admission</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
