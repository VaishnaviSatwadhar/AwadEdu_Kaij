import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

const CLASS_OPTIONS = [
  { value: 'Class 1 / I', label: 'Class 1 / I' },
  { value: 'Class 2 / II', label: 'Class 2 / II' },
  { value: 'Class 3 / III', label: 'Class 3 / III' },
  { value: 'Class 4 / IV', label: 'Class 4 / IV' },
  { value: 'Class 5 / V', label: 'Class 5 / V' },
  { value: 'Class 6 / VI', label: 'Class 6 / VI' },
  { value: 'Class 7 / VII', label: 'Class 7 / VII' },
  { value: 'Class 8 / VIII', label: 'Class 8 / VIII' },
  { value: 'Class 9 / IX', label: 'Class 9 / IX' },
  { value: '10th Standard / X - Board Prep', label: '10th Standard / X - Board Prep' },
  { value: '11th Standard / XI - Science & NEET', label: '11th Standard / XI - Science & NEET' },
  { value: '12th Standard / XII - HSC & NEET', label: '12th Standard / XII - HSC & NEET' },
  { value: '12th Pass / Repeater (NEET Special)', label: '12th Pass / Repeater / Dropper (NEET Special)' },
];

const COURSE_OPTIONS = [
  'School Academic Coaching (Class 5 - 10 / V - X)',
  'Foundation Program (Class 7 - 10 / VII - X)',
  'Olympiad / SOF Preparation (Class 5 - 10 / V - X)',
  'Class 10 & 12 Board Prep (Class X / XII)',
  'NEET UG Target Batch (Class 11, 12 & Droppers)',
  'NEET Repeater / Achiever Batch'
];

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'School Academic Coaching (Class 5 - 10 / V - X)'
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    studentClass: 'Class 9 / IX',
    course: defaultCourse,
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setFormData(prev => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const targetEmail = 'satwadharvaishnavi1@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `New Admission Enquiry: ${formData.course} - ${formData.studentName}`;
    const bodyText =
      `New Admission Enquiry from Website:\n\n` +
      `Student Name: ${formData.studentName}\n` +
      `Parent Name: ${formData.parentName}\n` +
      `Student Class: ${formData.studentClass}\n` +
      `Selected Course: ${formData.course}\n` +
      `Contact Phone: ${formData.phone}\n` +
      `Message / Query: ${formData.message || 'None'}\n\n` +
      `Sent to Awad Educational Academy (${targetEmail})`;

    try {
      // Direct background AJAX forwarding to satwadharvaishnavi1@gmail.com
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: subject,
          studentName: formData.studentName,
          parentName: formData.parentName,
          studentClass: formData.studentClass,
          course: formData.course,
          phone: formData.phone,
          message: formData.message || 'No additional query',
          _template: 'table',
          _captcha: 'false'
        })
      });
    } catch (err) {
      console.warn('FormSubmit forwarding notice:', err);
    }

    // Trigger mailto link directly addressing satwadharvaishnavi1@gmail.com
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.warn('Mailto launch:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Awad Academy Kaij, I am submitting an admission enquiry:\n` +
    `• Student: ${formData.studentName}\n` +
    `• Parent: ${formData.parentName}\n` +
    `• Class: ${formData.studentClass}\n` +
    `• Course: ${formData.course}\n` +
    `• Phone: ${formData.phone}\n` +
    (formData.message ? `• Query: ${formData.message}` : '')
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-800 to-navy-900 text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <Logo variant="on-dark" size="sm" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
              Kaij Center
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-white">
            {t('enquiryModal.title')}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {t('enquiryModal.subtitle')}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center shadow-lg animate-bounce-short">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-navy-950">
                Enquiry Sent Successfully!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Your admission enquiry has been forwarded to{' '}
                <span className="font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200 block mt-1 break-all">
                  {targetEmail}
                </span>
              </p>

              {/* Enquiry Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-1.5 text-slate-700">
                <div><span className="font-bold text-navy-900">Student:</span> {formData.studentName}</div>
                <div><span className="font-bold text-navy-900">Parent:</span> {formData.parentName}</div>
                <div><span className="font-bold text-navy-900">Class:</span> <span className="text-brand-700 font-semibold">{formData.studentClass}</span></div>
                <div><span className="font-bold text-navy-900">Course:</span> {formData.course}</div>
                <div><span className="font-bold text-navy-900">Phone:</span> {formData.phone}</div>
              </div>

              {/* Quick follow-up action buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/919422105262?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Also Send on WhatsApp (+91 94221 05262)</span>
                </a>

                <div className="flex gap-2">
                  <a
                    href={`mailto:${targetEmail}?subject=${encodeURIComponent(`Enquiry: ${formData.course} - ${formData.studentName}`)}`}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border border-slate-200 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-600" />
                    <span>Open Email App</span>
                  </a>

                  <button
                    onClick={handleClose}
                    className="flex-1 bg-navy-900 hover:bg-navy-950 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  required
                  placeholder="Enter student's full name"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Parent Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  required
                  placeholder="Enter parent's full name"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Class (Number & Roman) *
                  </label>
                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-600 outline-none text-xs sm:text-sm bg-white"
                  >
                    {CLASS_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Course Interested In *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-600 outline-none text-xs sm:text-sm bg-white"
                >
                  {COURSE_OPTIONS.map(crs => (
                    <option key={crs} value={crs}>
                      {crs}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Questions or timing preference..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-brand-600 outline-none text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-600 to-brand-800 hover:from-brand-700 hover:to-brand-900 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 mt-2 transition-all disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Sending Enquiry to Academy...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
