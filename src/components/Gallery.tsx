import React, { useState } from 'react';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { ACADEMY_DATA, GalleryItem } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'classroom' | 'olympiad' | 'events' | 'infrastructure'>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? ACADEMY_DATA.gallery
    : ACADEMY_DATA.gallery.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full text-purple-800 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>{t('gallery.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            {t('gallery.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A visual glimpse into our classrooms, test sessions, academic events, and prize distribution.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-600 to-emerald-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t('gallery.categories.all')}
          </button>

          <button
            onClick={() => setActiveCategory('classroom')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'classroom'
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t('gallery.categories.classroom')}
          </button>

          <button
            onClick={() => setActiveCategory('olympiad')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'olympiad'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t('gallery.categories.olympiad')}
          </button>

          <button
            onClick={() => setActiveCategory('events')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'events'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t('gallery.categories.events')}
          </button>

          <button
            onClick={() => setActiveCategory('infrastructure')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === 'infrastructure'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t('gallery.categories.infrastructure')}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white border border-slate-200/80"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="eager"
                decoding="async"
                className="w-full h-64 sm:h-72 object-cover object-center brightness-[1.04] contrast-[1.06] saturate-[1.04] group-hover:scale-105 transition-transform duration-500 opacity-100"
              />
              
              {/* Subtle Bottom Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-base sm:text-lg text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-brand-600 transition-all border border-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-slate-200 line-clamp-2 font-normal drop-shadow-xs">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src={lightboxImage.imageUrl}
              alt={lightboxImage.title}
              className="w-full max-h-[75vh] object-contain bg-black brightness-[1.04] contrast-[1.06] opacity-100"
            />
            <div className="p-6 text-white space-y-1 bg-slate-900 border-t border-slate-800">
              <h3 className="font-heading font-bold text-xl text-white">
                {lightboxImage.title}
              </h3>
              <p className="text-sm text-slate-300">
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
