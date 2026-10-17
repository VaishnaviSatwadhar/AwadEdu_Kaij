import React, { useState, useEffect } from 'react';
import { 
  X, Sparkles, CheckCircle2, Clock, Calendar, BookOpen, 
  Award, Stethoscope, Zap, GraduationCap, Compass, ShieldCheck, 
  HelpCircle, ArrowRight, Download, Calculator, Percent, MapPin, Phone, Trophy
} from 'lucide-react';
import { CourseItem, ACADEMY_DATA } from '../data/academyData';

export interface CourseDetailModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiryModal?: (courseName: string) => void;
  onEnquire?: (courseName: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onOpenEnquiryModal,
  onEnquire
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'schedule' | 'highlights' | 'scholarship'>('syllabus');

  // Keyboard Escape key handler & scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const handleEnquireClick = () => {
    onClose();
    if (onOpenEnquiryModal) {
      onOpenEnquiryModal(course.title);
    } else if (onEnquire) {
      onEnquire(course.title);
    }
  };

  // Helper for category badge styling
  const getCategoryBadge = () => {
    switch (course.category) {
      case 'neet':
        return (
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
            NEET Medical
          </span>
        );
      case 'olympiad':
        return (
          <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            Olympiad & SOF
          </span>
        );
      case 'foundation':
        return (
          <span className="px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/40 text-brand-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-brand-400" />
            Foundation Prep
          </span>
        );
      case 'boards':
        return (
          <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            Board Milestone
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 rounded-full bg-slate-500/20 border border-slate-400/40 text-slate-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-slate-300" />
            Academic Program
          </span>
        );
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 dark:bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 sm:py-8 animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="course-modal-title"
    >
      {/* Main Container */}
      <div 
        className="relative bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-5xl overflow-hidden my-auto transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Gradient Line */}
        <div className="h-2 bg-gradient-to-r from-brand-600 via-emerald-500 to-amber-500" />

        {/* Hero Header Section */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-navy-950 via-slate-900 to-brand-950 text-white relative overflow-hidden">
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all border border-white/20 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/40 text-brand-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              {course.badge}
            </span>
            {getCategoryBadge()}
            {course.popular && (
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                ★ Top Enrolled Batch
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <h2 id="course-modal-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight">
            {course.title}
          </h2>

          {course.tagline && (
            <p className="text-sm sm:text-base text-emerald-400 font-semibold mb-6">
              "{course.tagline}"
            </p>
          )}

          {/* Header Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-white/15 text-xs">
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="text-slate-400 block font-medium mb-0.5">Target Exam</span>
              <span className="font-bold text-white text-sm block truncate">{course.targetExam || "Board & Competitive"}</span>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="text-slate-400 block font-medium mb-0.5">Batch Status</span>
              <span className="font-bold text-amber-300 text-sm block truncate">{course.batchStart || "Admissions Open"}</span>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="text-slate-400 block font-medium mb-0.5">NCERT Coverage</span>
              <span className="font-bold text-emerald-400 text-sm block">{course.ncertCoveragePercent || 100}% Aligned</span>
            </div>
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="text-slate-400 block font-medium mb-0.5">Mock Test Series</span>
              <span className="font-bold text-brand-300 text-sm block">{course.mockTestsCount || 40}+ Full Tests</span>
            </div>
          </div>
        </div>

        {/* Pill Navigation Tabs Bar */}
        <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80 px-4 sm:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1" role="tablist" aria-label="Course details navigation">
            <button
              id="tab-syllabus"
              role="tab"
              aria-selected={activeTab === 'syllabus'}
              aria-controls="panel-syllabus"
              onClick={() => setActiveTab('syllabus')}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeTab === 'syllabus'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 ring-2 ring-brand-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>Syllabus & Subjects</span>
            </button>

            <button
              id="tab-schedule"
              role="tab"
              aria-selected={activeTab === 'schedule'}
              aria-controls="panel-schedule"
              onClick={() => setActiveTab('schedule')}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeTab === 'schedule'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 ring-2 ring-brand-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Clock className="w-4 h-4 shrink-0" />
              <span>Class Schedule</span>
            </button>

            <button
              id="tab-highlights"
              role="tab"
              aria-selected={activeTab === 'highlights'}
              aria-controls="panel-highlights"
              onClick={() => setActiveTab('highlights')}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeTab === 'highlights'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 ring-2 ring-brand-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Award className="w-4 h-4 shrink-0" />
              <span>Key Features</span>
            </button>

            <button
              id="tab-scholarship"
              role="tab"
              aria-selected={activeTab === 'scholarship'}
              aria-controls="panel-scholarship"
              onClick={() => setActiveTab('scholarship')}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                activeTab === 'scholarship'
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30 ring-2 ring-brand-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
              }`}
            >
              <Percent className="w-4 h-4 shrink-0 text-amber-400" />
              <span>ATSE Scholarship & Fees</span>
            </button>
          </div>
        </div>

        {/* Main Body: Grid with Tab Panels + Sticky Side Card */}
        <div className="p-6 sm:p-8 max-h-[60vh] sm:max-h-[65vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            
            {/* Left Content Area (2 cols on desktop) */}
            <div className="lg:col-span-2 space-y-6">

              {/* TAB 1: SYLLABUS & SUBJECT CARDS */}
              {activeTab === 'syllabus' && (
                <div id="panel-syllabus" role="tabpanel" aria-labelledby="tab-syllabus" className="space-y-6 animate-fadeIn">
                  <div className="bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-800/50 p-4 rounded-2xl flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">100% NCERT & Board Aligned Curriculum</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Deep conceptual grounding designed for school perfection and national competitive success.
                      </p>
                    </div>
                  </div>

                  {course.subjects && course.subjects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {course.subjects.map((sub, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800/70 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-brand-400 dark:hover:border-brand-500 transition-all">
                          <div className="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                              {sub.subject}
                            </h4>
                            <span className="text-xs font-semibold text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-900/40 px-2.5 py-1 rounded-full">
                              {sub.hoursPerWeek} Hrs/Wk
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {sub.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Key Course Modules & Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {course.features.map((feat, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: CLASS SCHEDULE */}
              {activeTab === 'schedule' && (
                <div id="panel-schedule" role="tabpanel" aria-labelledby="tab-schedule" className="space-y-6 animate-fadeIn">
                  {course.schedule ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                        <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wide">
                          <Calendar className="w-4 h-4" />
                          <span>Classroom Days</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{course.schedule.classDays}</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wide">
                          <Clock className="w-4 h-4" />
                          <span>Daily Timing Batches</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{course.schedule.timing}</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wide">
                          <Zap className="w-4 h-4" />
                          <span>Weekly Mock Exam</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{course.schedule.testDay}</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wide">
                          <HelpCircle className="w-4 h-4" />
                          <span>Personal Doubt Support</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{course.schedule.doubtSessions}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 text-sm">
                      Class schedule details are finalized based on the batch allotment (Morning / Evening). Please enquire to select your preferred batch time at our Kaij center.
                    </div>
                  )}

                  <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h5 className="font-bold text-emerald-950 dark:text-emerald-300 text-sm">Need a Custom Batch Timing?</h5>
                      <p className="text-xs text-emerald-800 dark:text-emerald-400 mt-0.5">We offer special morning batches for outstation students.</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleEnquireClick}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shrink-0 cursor-pointer"
                    >
                      Request Batch Time
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: KEY HIGHLIGHTS & FACULTY */}
              {activeTab === 'highlights' && (
                <div id="panel-highlights" role="tabpanel" aria-labelledby="tab-highlights" className="space-y-6 animate-fadeIn">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60">
                    {course.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">Key Academic Benefits:</h4>
                    <div className="space-y-2.5">
                      {(course.highlightsList || course.features).map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/70 shadow-xs">
                          <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                            {idx + 1}
                          </div>
                          <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: SCHOLARSHIP & FEES */}
              {activeTab === 'scholarship' && (
                <div id="panel-scholarship" role="tabpanel" aria-labelledby="tab-scholarship" className="space-y-6 animate-fadeIn">
                  <div className="bg-gradient-to-r from-amber-500 via-brand-600 to-emerald-600 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                    <div className="absolute right-4 top-4 opacity-10 text-white pointer-events-none">
                      <Award className="w-32 h-32" />
                    </div>
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      ATSE 2026 Scholarship Exam
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold mt-2 mb-1">
                      Awad Talent Search Examination (ATSE)
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-100 max-w-lg mb-4">
                      Appear for our diagnostic scholarship test and win up to 100% fee waiver on NEET & Foundation coaching fees!
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleEnquireClick}
                        className="bg-white text-navy-950 hover:bg-amber-100 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
                      >
                        Register for ATSE Scholarship Test
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                      Fee Structure & Easy Installments
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      We believe high-quality medical and academic coaching should be affordable to every student in Kaij & Beed region. Flexible 3-part installment plans and merit discounts available.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Sticky Side Card (1 col on desktop) */}
            <div className="lg:col-span-1 lg:sticky lg:top-0 space-y-4">
              <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-5 sm:p-6 shadow-xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
                  <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-base">
                    Quick Batch Overview
                  </h4>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                    Admissions Open
                  </span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-xs">Class Range / Target</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{course.badge}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-xs">Batch Commencement</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{course.batchStart || "Fresh Batch Admissions Open"}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-xs">Duration & Mode</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{course.duration || "1 Academic Year"} • {course.mode || "Offline @ Kaij"}</span>
                    </div>
                  </div>

                  {course.feeDiscountNote && (
                    <div className="flex items-start gap-3">
                      <Percent className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block text-xs">Scholarship Benefit</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{course.feeDiscountNote}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-xs">Center Location</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">
                        {ACADEMY_DATA.brand.locationShort}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="pt-2 space-y-2.5">
                  <button
                    type="button"
                    onClick={handleEnquireClick}
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-700 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Enquire & Book Seat</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`tel:${ACADEMY_DATA.brand.phoneRaw}`}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 font-bold text-xs text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                    <span>Call Center: {ACADEMY_DATA.brand.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-100 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5 text-center sm:text-left">
            <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
            <span>{ACADEMY_DATA.brand.fullAddress}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              type="button"
              onClick={handleEnquireClick}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquire & Book Seat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailModal;
