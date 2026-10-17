import React, { useState, useRef } from 'react';
import { Star, Sparkles, MessageSquarePlus, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ACADEMY_DATA, TestimonialItem } from '../data/academyData';
import { WriteReviewModal } from './WriteReviewModal';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem('awad_academy_user_reviews');
      if (saved) {
        const userReviews: TestimonialItem[] = JSON.parse(saved);
        return [...userReviews, ...ACADEMY_DATA.testimonials];
      }
    } catch (e) {
      console.error('Failed to load user reviews', e);
    }
    return ACADEMY_DATA.testimonials;
  });

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleAddReview = (newReview: TestimonialItem) => {
    const updated = [newReview, ...testimonials];
    setTestimonials(updated);
    try {
      const existingUserReviewsSaved = localStorage.getItem('awad_academy_user_reviews');
      const existingUserReviews: TestimonialItem[] = existingUserReviewsSaved ? JSON.parse(existingUserReviewsSaved) : [];
      localStorage.setItem('awad_academy_user_reviews', JSON.stringify([newReview, ...existingUserReviews]));
    } catch (e) {
      console.error('Failed to save review to localStorage', e);
    }

    // Scroll to start to show new review
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* 3D Glow Blobs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-brand-200/40 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-200/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full text-amber-800 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('testimonials.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t('testimonials.subheading')}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-600 to-emerald-500 rounded-full mx-auto mt-4" />

          {/* Action Buttons & Scroll Controls */}
          <div className="pt-6 flex items-center justify-between flex-wrap gap-4">
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 hover:from-brand-700 hover:to-brand-900 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-amber-300" />
              <span>{t('testimonials.writeReview')}</span>
            </button>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {testimonials.map((item: TestimonialItem) => {
            const isUserGenerated = item.id.startsWith('user-review-');

            return (
              <div
                key={item.id}
                className={`min-w-[290px] sm:min-w-[360px] max-w-[380px] bg-white p-7 rounded-3xl border ${
                  isUserGenerated ? 'border-brand-400 ring-2 ring-brand-100 shadow-md' : 'border-slate-200'
                } hover:border-brand-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative snap-start card-3d`}
              >
                {isUserGenerated && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Verified Review
                  </span>
                )}

                <div className="space-y-4">
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-brand-200 group-hover:text-brand-400 transition-colors" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-100 to-emerald-100 text-brand-900 flex items-center justify-center font-extrabold text-sm shrink-0 border border-brand-200 shadow-xs">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm group-hover:text-brand-700 transition-colors">
                      {item.author}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Write Review Modal Dialog */}
      <WriteReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </section>
  );
};
