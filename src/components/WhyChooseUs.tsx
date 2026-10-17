import React from 'react';
import { UserCheck, Lightbulb, Heart, BarChart3, HelpCircle, CheckSquare, Sparkles } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  <UserCheck key="1" className="w-6 h-6 text-brand-600" />,
  <Lightbulb key="2" className="w-6 h-6 text-amber-500" />,
  <Heart key="3" className="w-6 h-6 text-rose-500" />,
  <BarChart3 key="4" className="w-6 h-6 text-emerald-600" />,
  <HelpCircle key="5" className="w-6 h-6 text-purple-600" />,
  <CheckSquare key="6" className="w-6 h-6 text-blue-600" />
];

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const itemsTranslation = t('whyChooseUs.items') || [];
  const items = ACADEMY_DATA.whyChooseUs.map((item, idx) => ({
    ...item,
    title: itemsTranslation[idx]?.title || item.title,
    description: itemsTranslation[idx]?.desc || item.description,
  }));

  return (
    <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full text-emerald-800 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('whyChooseUs.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            {t('whyChooseUs.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t('whyChooseUs.subheading')}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-600 to-emerald-500 rounded-full mx-auto mt-4" />
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-50 hover:bg-white p-8 rounded-3xl border border-slate-200/80 hover:border-brand-300 shadow-xs hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {icons[idx] || <Sparkles className="w-6 h-6 text-brand-600" />}
              </div>
              
              <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-brand-700 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
