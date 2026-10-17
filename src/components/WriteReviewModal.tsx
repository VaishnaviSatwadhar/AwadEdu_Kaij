import React, { useState } from 'react';
import { X, Star, Send, CheckCircle2, MessageSquarePlus, User, GraduationCap } from 'lucide-react';
import { TestimonialItem } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: TestimonialItem) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview,
}) => {
  const { t } = useLanguage();
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('Parent of Student');
  const [customRole, setCustomRole] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [quote, setQuote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!author.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!quote.trim() || quote.trim().length < 10) {
      setError('Please write at least a few words (minimum 10 characters) for your review.');
      return;
    }

    const finalRole = role === 'Other' ? (customRole.trim() || 'Student / Parent') : role;

    const newReview: TestimonialItem = {
      id: `user-review-${Date.now()}`,
      author: author.trim(),
      role: finalRole,
      rating: rating,
      quote: quote.trim(),
    };

    onAddReview(newReview);
    setIsSubmitted(true);
    setError('');

    // Auto reset after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setAuthor('');
      setQuote('');
      setCustomRole('');
      setRating(5);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-brand-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close review modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-500/30 text-amber-300 flex items-center justify-center border border-brand-400/40">
              <MessageSquarePlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{t('testimonials.modalTitle')}</h3>
              <p className="text-xs text-slate-300">{t('testimonials.modalSubtitle')}</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-extrabold text-navy-950">{t('testimonials.thankYou')}</h4>
            <p className="text-sm text-slate-600">
              {t('testimonials.thankYouSub')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="p-3 text-xs font-semibold text-rose-700 bg-rose-50 rounded-xl border border-rose-200">
                {error}
              </div>
            )}

            {/* Author Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('testimonials.yourName')} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Rajesh Deshmukh"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            {/* Role Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t('testimonials.iAmA')}
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all appearance-none"
                  >
                    <option value="Parent of Student">{t('testimonials.parent')}</option>
                    <option value="Class X Student">{t('testimonials.classX')}</option>
                    <option value="Class IX Student">{t('testimonials.classIX')}</option>
                    <option value="Olympiad Student">{t('testimonials.olympiad')}</option>
                    <option value="Alumni Student">{t('testimonials.alumni')}</option>
                    <option value="Other">{t('testimonials.other')}</option>
                  </select>
                </div>
              </div>

              {role === 'Other' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Specify Designation
                  </label>
                  <input
                    type="text"
                    value={customRole}
                    onChange={(e) => setCustomRole(e.target.value)}
                    placeholder="e.g. Class VIII Parent"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                  />
                </div>
              )}
            </div>

            {/* Rating Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('testimonials.rating')}
              </label>
              <div className="flex items-center gap-2 bg-amber-50/60 border border-amber-200/80 px-4 py-2.5 rounded-xl">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none transform hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoverRating || rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-xs font-bold text-amber-900 ml-2">
                  {rating === 5 ? '⭐⭐⭐⭐⭐ Excellent (5/5)' : `${rating} / 5 Stars`}
                </span>
              </div>
            </div>

            {/* Review Comment */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('testimonials.feedback')} <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder={t('testimonials.placeholderFeedback')}
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                required
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors"
              >
                {t('testimonials.cancel')}
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-brand-800 hover:from-brand-700 hover:to-brand-900 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <span>{t('testimonials.submit')}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
