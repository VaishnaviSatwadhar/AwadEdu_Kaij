import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NeetHubSection } from './components/NeetHubSection';
import { Courses } from './components/Courses';
import { CourseDetailModal } from './components/CourseDetailModal';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LearningProcess } from './components/LearningProcess';
import { ResultsStats } from './components/ResultsStats';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { EnquiryCTA } from './components/EnquiryCTA';
import { ContactSection } from './components/ContactSection';
import { EnquiryModal } from './components/EnquiryModal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CourseItem } from './data/academyData';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);
  
  // State for Course Details Modal
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<CourseItem | null>(null);
  const [isCourseDetailOpen, setIsCourseDetailOpen] = useState(false);

  const handleOpenModal = (courseName?: string) => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(undefined);
  };

  const handleOpenCourseDetail = (course: CourseItem) => {
    setSelectedCourseForDetail(course);
    setIsCourseDetailOpen(true);
  };

  const handleCloseCourseDetail = () => {
    setIsCourseDetailOpen(false);
    setSelectedCourseForDetail(null);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-brand-500 selection:text-white">
        {/* Sticky Header */}
        <Navbar onOpenEnquiryModal={handleOpenModal} />

        {/* Main Page Content */}
        <main className="flex-grow">
          <Hero onOpenEnquiryModal={() => handleOpenModal()} />
          <NeetHubSection onOpenEnquiryModal={(course) => handleOpenModal(course)} />
          <Courses 
            onOpenEnquiryModal={(course) => handleOpenModal(course)} 
            onOpenCourseDetailModal={handleOpenCourseDetail}
          />
          <About />
          <WhyChooseUs />
          <LearningProcess />
          <ResultsStats />
          <Testimonials />
          <Gallery />
          <EnquiryCTA onOpenEnquiryModal={() => handleOpenModal()} />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Call / WhatsApp Widgets */}
        <FloatingWhatsApp />

        {/* Pop-up Enquiry Modal */}
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          defaultCourse={selectedCourse}
        />

        {/* Course Details Modal */}
        <CourseDetailModal
          course={selectedCourseForDetail}
          isOpen={isCourseDetailOpen}
          onClose={handleCloseCourseDetail}
          onOpenEnquiryModal={handleOpenModal}
        />
      </div>
    </LanguageProvider>
  );
};

export default App;
