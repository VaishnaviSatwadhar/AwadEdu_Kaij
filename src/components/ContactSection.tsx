import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    studentClass: 'Class 9 / IX',
    course: 'School Academic Coaching (Class 5 - 10 / V - X)',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const targetEmail = 'satwadharvaishnavi1@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Contact Inquiry: ${formData.course} - ${formData.studentName}`;
    const body = 
      `Contact Form Inquiry from Website:\n\n` +
      `Student Name: ${formData.studentName}\n` +
      `Parent Name: ${formData.parentName}\n` +
      `Student Class: ${formData.studentClass}\n` +
      `Selected Course: ${formData.course}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message || 'None'}\n\n` +
      `Sent to Awad Educational Academy (${targetEmail})`;

    try {
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
          message: formData.message || 'No additional message',
          _template: 'table',
          _captcha: 'false'
        })
      });
    } catch (err) {
      console.warn('FormSubmit contact submit:', err);
    }

    try {
      window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } catch (err) {
      console.warn('Mailto open:', err);
    }
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 px-3.5 py-1 rounded-full text-brand-800 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t('contact.subheading')}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-600 to-emerald-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 pb-6">
                <Logo size="md" className="mb-3" />
                <p className="text-sm font-semibold text-brand-600">
                  Location: Kaij, Beed, Maharashtra
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 border border-brand-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('contact.addressLabel')}</h4>
                    <p className="text-sm font-medium text-slate-800 leading-snug">
                      {ACADEMY_DATA.brand.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('contact.phoneLabel')}</h4>
                    <a href={`tel:${ACADEMY_DATA.brand.phoneRaw}`} className="text-sm font-bold text-navy-900 hover:text-brand-600">
                      {ACADEMY_DATA.brand.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('contact.emailLabel')}</h4>
                    <a href={`mailto:${ACADEMY_DATA.brand.email}`} className="text-sm font-medium text-slate-800 hover:text-brand-600">
                      {ACADEMY_DATA.brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('contact.hoursLabel')}</h4>
                    <p className="text-sm font-medium text-slate-800">
                      {t('contact.hoursVal')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4">
                <a
                  href={ACADEMY_DATA.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{t('contact.whatsappBtn')}</span>
                </a>
              </div>

            </div>

            {/* Google Map Embed */}
            <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="h-64 rounded-2xl overflow-hidden relative group">
                <iframe
                  title="Awad Educational Academy Kaij Google Map Location"
                  src={ACADEMY_DATA.brand.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter rounded-2xl"
                />
                <a
                  href={ACADEMY_DATA.brand.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-navy-900/90 hover:bg-navy-950 text-white backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 transition-all border border-white/20 hover:scale-105"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-400" />
                  <span>{t('contact.openMaps')}</span>
                  <ExternalLink className="w-3 h-3 text-slate-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Admission Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
            <h3 className="text-2xl font-bold text-navy-950 mb-2">
              {t('contact.formTitle')}
            </h3>
            <p className="text-sm text-slate-600 mb-8">
              {t('contact.formSub')}
            </p>

            {submitted ? (
              <div className="py-10 px-6 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center shadow-lg animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-emerald-950">
                  {t('contact.successTitle')}
                </h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Your enquiry has been delivered to{' '}
                  <span className="font-bold underline text-emerald-950">{targetEmail}</span>. Our admission team will contact you shortly.
                </p>

                {/* Summary */}
                <div className="max-w-md mx-auto bg-white/80 border border-emerald-300 rounded-xl p-3.5 text-left text-xs text-slate-700 space-y-1">
                  <div><span className="font-bold">Student:</span> {formData.studentName}</div>
                  <div><span className="font-bold">Class:</span> {formData.studentClass}</div>
                  <div><span className="font-bold">Course:</span> {formData.course}</div>
                  <div><span className="font-bold">Phone:</span> {formData.phone}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 max-w-md mx-auto">
                  <a
                    href={`https://wa.me/919422105262?text=${encodeURIComponent(
                      `Hello Awad Academy, I have submitted an admission enquiry:\nStudent: ${formData.studentName}\nClass: ${formData.studentClass}\nCourse: ${formData.course}\nPhone: ${formData.phone}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        studentName: '',
                        parentName: '',
                        studentClass: 'Class 9 / IX',
                        course: 'School Academic Coaching (Class 5 - 10 / V - X)',
                        phone: '',
                        message: ''
                      });
                    }}
                    className="bg-navy-900 hover:bg-navy-950 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="studentName" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      {t('contact.studentName')} *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="parentName" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      {t('contact.parentName')} *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="studentClass" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      {t('contact.currentClass')} (Number & Roman) *
                    </label>
                    <select
                      id="studentClass"
                      name="studentClass"
                      value={formData.studentClass}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-xs sm:text-sm bg-white transition-all"
                    >
                      <option value="Class 1 / I">Class 1 / I</option>
                      <option value="Class 2 / II">Class 2 / II</option>
                      <option value="Class 3 / III">Class 3 / III</option>
                      <option value="Class 4 / IV">Class 4 / IV</option>
                      <option value="Class 5 / V">Class 5 / V</option>
                      <option value="Class 6 / VI">Class 6 / VI</option>
                      <option value="Class 7 / VII">Class 7 / VII</option>
                      <option value="Class 8 / VIII">Class 8 / VIII</option>
                      <option value="Class 9 / IX">Class 9 / IX</option>
                      <option value="10th Standard / X - Board Prep">10th Standard / X - Board Prep</option>
                      <option value="11th Standard / XI - Science & NEET">11th Standard / XI - Science & NEET</option>
                      <option value="12th Standard / XII - HSC & NEET">12th Standard / XII - HSC & NEET</option>
                      <option value="12th Pass / Repeater (NEET Special)">12th Pass / Repeater / Dropper (NEET Special)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      {t('contact.courseInterest')} *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-xs sm:text-sm bg-white transition-all"
                    >
                      <option value="School Academic Coaching (Class 5 - 10 / V - X)">School Academic Coaching (Class 5 to 10 / V - X)</option>
                      <option value="Foundation Program (Class 7 - 10 / VII - X)">Foundation Program (Class 7 to 10 / VII - X)</option>
                      <option value="Olympiad / SOF Preparation (Class 5 - 10 / V - X)">Olympiad / SOF Preparation (Class 5 to 10 / V - X)</option>
                      <option value="Class 10 & 12 Board Prep (Class X / XII)">Class 10 & 12 Board Prep (Class X / XII)</option>
                      <option value="NEET UG Target Batch (Class 11, 12 & Droppers)">NEET UG Target Batch (Class 11, 12 & Droppers)</option>
                      <option value="NEET Repeater / Achiever Batch">NEET Repeater / Achiever Batch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    {t('contact.phoneNumber')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Provide any specific questions about fees, batch timings, or subject coaching..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-800 hover:from-brand-700 hover:to-brand-900 text-white font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>{t('contact.submitting')}</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.submitBtn')}</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
