import React, { useState } from 'react';
import { 
  GraduationCap, Compass, Trophy, Award, CheckCircle2, ChevronRight, 
  Sparkles, Filter, Stethoscope, Zap, BookOpen, Layers
} from 'lucide-react';
import { ACADEMY_DATA, CourseItem } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface CoursesProps {
  onOpenEnquiryModal: (courseName?: string) => void;
  onOpenCourseDetailModal: (course: CourseItem) => void;
}

const iconComponentMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-7 h-7 text-emerald-500 animate-pulse-subtle" />,
  Zap: <Zap className="w-7 h-7 text-amber-500" />,
  GraduationCap: <GraduationCap className="w-7 h-7 text-brand-600" />,
  Compass: <Compass className="w-7 h-7 text-emerald-600" />,
  Trophy: <Trophy className="w-7 h-7 text-amber-600" />,
  Award: <Award className="w-7 h-7 text-purple-600" />,
};

export const Courses: React.FC<CoursesProps> = ({ 
  onOpenEnquiryModal,
  onOpenCourseDetailModal
}) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'neet' | 'academics' | 'foundation' | 'olympiad' | 'boards'>('all');

  const filteredCourses = activeFilter === 'all'
    ? ACADEMY_DATA.courses
    : ACADEMY_DATA.courses.filter(course => course.category === activeFilter);

  return (
    <section id="courses" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* 3D Ambient Background Blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-brand-200/30 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-100 to-emerald-100 border border-brand-200 px-4 py-1.5 rounded-full text-brand-900 text-xs font-extrabold tracking-widest uppercase shadow-xs">
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span>Academic & Medical Programs 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            {t('courses.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Structured NEET Medical, Foundation, and Board coaching with 100% NCERT emphasis in Kaij.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-600 via-emerald-500 to-amber-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-14">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeFilter === 'all'
                ? 'bg-navy-900 text-white shadow-lg scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>All Courses</span>
          </button>
          
          <button
            onClick={() => setActiveFilter('neet')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeFilter === 'neet'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105 ring-2 ring-emerald-400/40'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <Stethoscope className="w-4 h-4 text-emerald-500" />
            <span>NEET UG Special</span>
          </button>

          <button
            onClick={() => setActiveFilter('foundation')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeFilter === 'foundation'
                ? 'bg-brand-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Foundation (7th-10th)
          </button>

          <button
            onClick={() => setActiveFilter('academics')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeFilter === 'academics'
                ? 'bg-navy-800 text-white shadow-lg scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            School Academics
          </button>

          <button
            onClick={() => setActiveFilter('olympiad')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeFilter === 'olympiad'
                ? 'bg-amber-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Olympiad / SOF
          </button>

          <button
            onClick={() => setActiveFilter('boards')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              activeFilter === 'boards'
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Class X / XII Boards
          </button>
        </div>

        {/* Courses Cards Grid with 3D Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between relative group card-3d ${
                course.popular
                  ? 'border-brand-400 shadow-xl ring-2 ring-brand-500/20'
                  : 'border-slate-200 hover:border-brand-300 shadow-md hover:shadow-2xl'
              }`}
            >
              {/* Popular Tag */}
              {course.popular && (
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-600 via-brand-600 to-amber-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
                  {course.category === 'neet' ? '★ High Target Medical' : t('courses.popularBadge')}
                </div>
              )}

              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-brand-50/50 border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {iconComponentMap[course.iconName] || <GraduationCap className="w-8 h-8 text-brand-600" />}
                  </div>
                  <span className="text-xs font-extrabold text-navy-900 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
                    {course.badge}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-extrabold text-navy-950 mb-2 group-hover:text-brand-700 transition-colors leading-snug">
                  {course.title}
                </h3>

                {/* Target Exam Tagline */}
                {course.tagline && (
                  <p className="text-xs font-bold text-emerald-600 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{course.tagline}</span>
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
                  {course.features.slice(0, 4).map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                {/* Primary Button: Open Full Details Modal */}
                <button
                  onClick={() => onOpenCourseDetailModal(course)}
                  className="w-full bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <BookOpen className="w-4 h-4 text-brand-400" />
                  <span>View Full Syllabus & Schedule</span>
                </button>

                {/* Secondary Button: Enquire Now */}
                <button
                  onClick={() => onOpenEnquiryModal(course.title)}
                  className="w-full bg-slate-100 hover:bg-brand-600 text-slate-800 hover:text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl border border-slate-200 hover:border-brand-600 flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Enquire & Reserve Seat</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
