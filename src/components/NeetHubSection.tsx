import React, { useState } from 'react';
import { 
  Stethoscope, Award, Brain, Target, Sparkles, CheckCircle2, 
  ChevronRight, BarChart3, RefreshCw, Flame
} from 'lucide-react';
import { Logo } from './Logo';

interface NeetHubSectionProps {
  onOpenEnquiryModal: (courseName?: string) => void;
}

// Medical Colleges Database for Maharashtra & India Cutoff Predictor
const GMC_COLLEGES = [
  { name: "Grant Medical College (GMC), Mumbai", minScore: 655, seatType: "MBBS Govt", airRank: "AIR 1,200 - 3,500" },
  { name: "B.J. Medical College, Pune", minScore: 645, seatType: "MBBS Govt", airRank: "AIR 3,500 - 6,000" },
  { name: "GMC, Chhatrapati Sambhajinagar (Aurangabad)", minScore: 625, seatType: "MBBS Govt", airRank: "AIR 8,000 - 12,000" },
  { name: "Swami Ramanand Teerth Rural Govt Medical College, Ambajogai (Beed)", minScore: 610, seatType: "MBBS Govt", airRank: "AIR 12,000 - 16,500" },
  { name: "GMC, Latur", minScore: 615, seatType: "MBBS Govt", airRank: "AIR 11,500 - 15,000" },
  { name: "GMC, Nanded", minScore: 608, seatType: "MBBS Govt", airRank: "AIR 13,000 - 17,000" },
  { name: "GMC, Jalgaon / Baramati / Satara", minScore: 595, seatType: "MBBS Govt", airRank: "AIR 18,000 - 24,000" },
  { name: "Top Semi-Govt / Private Medical Colleges (Maharashtra)", minScore: 520, seatType: "MBBS Semi-Govt", airRank: "AIR 35,000 - 65,000" },
  { name: "Govt BAMS / BHMS Colleges (Maharashtra)", minScore: 440, seatType: "BAMS Govt", airRank: "AIR 90,000 - 1,40,000" },
];

// NCERT NEET Daily Practice Questions
const NEET_QUIZ_QUESTIONS = [
  {
    id: 1,
    subject: "Botany",
    question: "Which cell organelle is known as the 'Powerhouse of the Cell' and has its own DNA & Ribosomes?",
    options: ["Golgi Apparatus", "Mitochondria", "Endoplasmic Reticulum", "Lysosome"],
    correctIndex: 1,
    explanation: "Mitochondria produce ATP via oxidative phosphorylation and contain circular DNA & 70S ribosomes (NCERT Class 11)."
  },
  {
    id: 2,
    subject: "Zoology",
    question: "In the human heart, where is the natural pacemaker (SA Node) anatomically located?",
    options: ["Left Atrium", "Right Ventricle", "Upper right corner of Right Atrium", "Interventricular Septum"],
    correctIndex: 2,
    explanation: "The Sino-atrial Node (SAN) is located in the upper right corner of the right atrium (NCERT Class 11 Body Fluids)."
  },
  {
    id: 3,
    subject: "Physics",
    question: "What is the dimensional formula of Universal Gravitational Constant (G)?",
    options: ["[M^-1 L^3 T^-2]", "[M^1 L^2 T^-2]", "[M^-2 L^3 T^-1]", "[M^0 L^1 T^-2]"],
    correctIndex: 0,
    explanation: "From F = G*(m1*m2)/r^2, G = F*r^2 / m^2 => [M^1 L^1 T^-2] * [L^2] / [M^2] = [M^-1 L^3 T^-2]."
  },
  {
    id: 4,
    subject: "Chemistry",
    question: "Which of the following compounds exhibits Maximum Paramagnetism due to unpaired electrons?",
    options: ["O2", "N2", "CO", "CN-"],
    correctIndex: 0,
    explanation: "According to Molecular Orbital Theory (MOT), Oxygen (O2) has 2 unpaired electrons in pi* anti-bonding orbitals (NCERT Class 11 Chem)."
  }
];

export const NeetHubSection: React.FC<NeetHubSectionProps> = ({ onOpenEnquiryModal }) => {
  // Rank Predictor State
  const [targetScore, setTargetScore] = useState<number>(640);
  const [category, setCategory] = useState<string>("open");

  // Quiz State
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Calculated Rank & Eligible Colleges
  const calculatePredictedRank = (score: number) => {
    if (score >= 700) return "AIR 1 - 250";
    if (score >= 670) return "AIR 250 - 1,500";
    if (score >= 640) return "AIR 1,500 - 6,000";
    if (score >= 610) return "AIR 6,000 - 15,000";
    if (score >= 580) return "AIR 15,000 - 28,000";
    if (score >= 520) return "AIR 28,000 - 65,000";
    if (score >= 450) return "AIR 65,000 - 1,30,000";
    return "AIR > 1,50,000";
  };

  const eligibleColleges = GMC_COLLEGES.filter(c => {
    const categoryBonus = category === 'sc' || category === 'st' ? 80 : (category === 'obc' || category === 'ews' ? 15 : 0);
    return (targetScore + categoryBonus) >= c.minScore;
  });

  const handleOptionClick = (idx: number) => {
    setSelectedOption(idx);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setCurrentQuizIdx((prev) => (prev + 1) % NEET_QUIZ_QUESTIONS.length);
  };

  const currentQ = NEET_QUIZ_QUESTIONS[currentQuizIdx];

  return (
    <section id="neet-hub" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 border-y border-slate-200">
      {/* 1. AWAD LOGO BLURRED BACKGROUND WATERMARK (CLEAR & VISIBLE) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] opacity-[0.14] blur-2xl pointer-events-none select-none z-0 flex items-center justify-center">
        <img 
          src="/images/logo.png" 
          alt="Awad Educational Academy Logo Background" 
          className="w-full h-full object-contain filter drop-shadow-[0_10px_40px_rgba(12,140,233,0.3)] scale-125"
        />
      </div>

      {/* 3D Light Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl pointer-events-none z-0 animate-pulse-subtle" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none z-0 animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with Official Awad Academy Logo Card */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Awad Official Glass Logo Pill Header */}
          <div className="inline-flex items-center gap-3 bg-white p-2.5 px-5 rounded-2xl shadow-md border border-slate-200">
            <Logo size="sm" />
            <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest border-l border-slate-200 pl-3 flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-emerald-600" />
              NEET Medical 3D Zone
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-950 leading-tight">
            Transform Your <span className="gradient-text-3d">NEET Medical Dream</span> into Reality
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Advanced DTE Maharashtra rank predictor, NCERT problem-solving drills, and medical admission guidance built for Kaij & Beed region students.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 via-brand-600 to-amber-500 rounded-full mx-auto mt-4" />
        </div>

        {/* 3D Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* LEFT WIDGET: NEET Score & Rank Predictor (7 Cols) */}
          <div className="lg:col-span-7 bg-white/95 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl card-3d-deep flex flex-col justify-between relative overflow-hidden">
            {/* Watermark Logo inside Card */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.08] pointer-events-none">
              <img src="/images/logo.png" alt="Awad Logo" className="w-full h-full object-contain" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold shadow-sm">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-navy-950">NEET 2026 Rank & GMC Predictor</h3>
                    <p className="text-xs text-slate-500 font-medium">Estimate your All India Rank & Govt Medical College options</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200">
                  Awad Rank Engine
                </span>
              </div>

              {/* Slider Input */}
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Expected NEET Score (out of 720):
                    </label>
                    <span className="text-2xl font-extrabold text-emerald-700 bg-emerald-50 px-4 py-1 rounded-xl border border-emerald-200">
                      {targetScore} / 720
                    </span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="720"
                    step="5"
                    value={targetScore}
                    onChange={(e) => setTargetScore(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-semibold">
                    <span>300 (Qualifying)</span>
                    <span>550 (Semi-Govt)</span>
                    <span>600+ (Govt MBBS)</span>
                    <span>720 (AIIMS New Delhi)</span>
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Reservation Category:
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {['open', 'obc', 'ews', 'sc', 'st'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold uppercase transition-all border ${
                          category === cat
                            ? 'bg-emerald-600 text-white border-emerald-600 font-extrabold shadow-md scale-105'
                            : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prediction Results Display */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Estimated All India Rank (AIR)</span>
                    <span className="text-2xl font-extrabold text-amber-400">
                      {calculatePredictedRank(targetScore)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Eligible GMC Options</span>
                    <span className="text-xl font-bold text-emerald-400">
                      {eligibleColleges.length} Medical Institutions
                    </span>
                  </div>
                </div>

                {/* College List Chips */}
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-2">
                    Top Predicted Colleges for {targetScore} Marks:
                  </span>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    {eligibleColleges.length > 0 ? (
                      eligibleColleges.slice(0, 4).map((col, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 border border-white/10 text-xs">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span className="font-semibold text-slate-100">{col.name}</span>
                          </div>
                          <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-400/30">
                            {col.seatType}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="p-3 text-xs text-amber-300 bg-amber-500/10 rounded-xl border border-amber-500/20">
                        Score below 440: Join Awad Academy's NEET Super 30 batch to boost your score by +200 marks!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-600 font-semibold">Want a 1-on-1 NEET Guidance Session with Faculty?</span>
              <button
                onClick={() => onOpenEnquiryModal("NEET Rank & Medical Guidance")}
                className="bg-gradient-to-r from-emerald-600 via-teal-600 to-brand-700 hover:from-emerald-700 hover:to-brand-800 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-1.5"
              >
                <span>Book Faculty Counseling</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT WIDGET: NCERT Daily NEET Practice Quiz Challenge (5 Cols) */}
          <div className="lg:col-span-5 bg-white/95 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl card-3d-deep flex flex-col justify-between relative overflow-hidden">
            {/* Watermark Logo inside Card */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.08] pointer-events-none">
              <img src="/images/logo.png" alt="Awad Logo" className="w-full h-full object-contain" />
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center font-bold shadow-sm">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-navy-950">Daily NCERT NEET Quiz</h3>
                    <p className="text-xs text-slate-500 font-medium">Test your high-yield NCERT concepts</p>
                  </div>
                </div>

                <span className="text-[11px] font-extrabold bg-brand-100 text-brand-800 px-3 py-1 rounded-full border border-brand-200">
                  Q{currentQ.id} of {NEET_QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Subject Tag */}
              <div className="mb-3 flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                  {currentQ.subject} NCERT
                </span>
              </div>

              {/* Question Text */}
              <h4 className="text-base font-bold text-navy-950 mb-5 leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100";
                  if (selectedOption !== null) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = "bg-emerald-50 text-emerald-900 border-emerald-400 font-bold shadow-sm";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-rose-50 text-rose-900 border-rose-300 font-bold";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={selectedOption !== null}
                      onClick={() => handleOptionClick(idx)}
                      className={`w-full p-3.5 rounded-2xl border text-xs sm:text-sm font-medium text-left transition-all duration-200 flex items-center justify-between ${btnStyle}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs shrink-0 text-slate-700">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </span>

                      {selectedOption !== null && idx === currentQ.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Card */}
              {showExplanation && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-1.5 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-emerald-900">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>NCERT Explanation:</span>
                  </div>
                  <p className="text-emerald-800 leading-relaxed font-medium">
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Quiz Navigation */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
              <button
                onClick={nextQuestion}
                className="w-full bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs py-3 px-4 rounded-xl border border-slate-200 flex items-center justify-center gap-2 transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
                <span>Next Practice Question</span>
              </button>
            </div>
          </div>

        </div>

        {/* 3D Visual Cards Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md card-3d">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold mb-4">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-950 mb-2">100% NCERT Medical Focus</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Line-by-line NCERT Biology, Physics derivations, & Organic Chemistry mechanism roadmaps tailored for maximum retention.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md card-3d">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center font-bold mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-950 mb-2">NTA Pattern OMR Test Series</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Weekly 200-question timed mock exams with strict negative marking simulation to build exam stamina and speed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md card-3d">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center font-bold mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-navy-950 mb-2">ATSE Scholarship up to 100%</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Awad Talent Search Exam rewards bright minds with heavy fee concessions to make quality NEET coaching accessible.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
