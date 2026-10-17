export type Language = 'en' | 'hi' | 'mr';

export const LANGUAGES: { code: Language; label: string; nativeLabel: string; flag: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी', flag: '🇮🇳' },
];

export const translations = {
  en: {
    topBar: {
      admissionsOpen: "Admissions Open 2026-27",
      location: "Kaij, Beed, Maharashtra",
    },
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      whyChooseUs: "Why Choose Us",
      process: "Process",
      results: "Results",
      gallery: "Gallery",
      testimonials: "Testimonials",
      contact: "Contact",
      enquireNow: "Enquire Now",
      selectLanguage: "Language",
    },
    hero: {
      trustBadge: "School Academics • Foundation • Olympiad Preparation",
      headlineMain: "Build Strong Foundations.",
      headlineSub: "Achieve Bigger Dreams.",
      subheading: "Quality academic coaching for students with the right guidance, personal attention and consistent practice.",
      exploreCourses: "Explore Courses",
      enquireNow: "Enquire Now",
      expertFaculty: "Expert Faculty",
      expertFacultySub: "Experienced Teachers",
      conceptFirst: "Concept First",
      conceptFirstSub: "Deep Understanding",
      olympiadPrep: "Olympiad Prep",
      olympiadPrepSub: "Competitive Edge",
      smallBatches: "Small Batches",
      smallBatchesSub: "Personal Attention",
      slides: [
        { title: "Personalized Student Guidance", badge: "Interactive Learning" },
        { title: "Modern Classroom Learning", badge: "Small Batch Attention" },
        { title: "Practical Science & Mathematics", badge: "Concept Clarity" },
        { title: "Olympiad & Competitive Prep", badge: "Competitive Edge" },
        { title: "Dedicated Faculty Mentorship", badge: "Expert Teachers" },
        { title: "Academic Achievers & Winners", badge: "Top Results" }
      ]
    },
    about: {
      badge: "About Awad Academy",
      title: "About Awad Educational Academy",
      paragraph1: "Awad Educational Academy (AEA), located in Kaij, Beed, Maharashtra, is an educational center focused on academic learning, student development and conceptual understanding. The academy offers coaching and structured programs in school-level subjects with an emphasis on Mathematics and Science.",
      paragraph2: "Through its foundation and Olympiad-oriented courses, AEA supports students in building clear fundamentals, logical thinking and the confidence needed for academic and competitive examinations. The academy uses conceptual videos, adaptive learning and collaborative methods to make classes more effective.",
      highlightsTitle: "Key Academic Highlights",
      highlights: [
        "Academic education across core school subjects",
        "Foundation preparation for young learners",
        "Olympiad-oriented learning and practice",
        "Focus on Mathematics and Science",
        "Conceptual videos & adaptive learning methods",
        "Student development and academic discipline"
      ],
      pillars: [
        {
          title: "Strong Concepts",
          desc: "Build a clear understanding of fundamentals with deep explanation of core principles."
        },
        {
          title: "Personal Attention",
          desc: "Support students according to their learning needs through small batch sizes & direct doubt resolution."
        },
        {
          title: "Consistent Practice",
          desc: "Regular tests, assignments and revision sessions to improve confidence and exam speed."
        }
      ]
    },
    courses: {
      badge: "Academic Offerings",
      title: "Specialized Courses & Batches",
      subheading: "Tailored coaching programs designed for school success, competitive exams, and board milestones in Kaij.",
      popularBadge: "Most Popular",
      enrollNow: "Enroll Now / Enquire",
      items: [
        {
          title: "School Academic Coaching",
          badge: "Classes V - IX",
          desc: "For students who want to strengthen their performance in regular school academics and build solid grade foundations.",
          features: [
            "Concept-based learning in Science & Maths",
            "Subject-wise structured preparation",
            "Regular chapter-end tests & progress tracking",
            "Dedicated revision & doubt solving sessions"
          ]
        },
        {
          title: "Foundation Program",
          badge: "Classes VII - X",
          desc: "Helps students develop strong analytical and scientific fundamentals required for future competitive examinations.",
          features: [
            "Mathematics fundamentals & mental math",
            "Advanced Science concepts & application",
            "Logical reasoning & aptitude training",
            "Problem-solving strategies & speed techniques"
          ]
        },
        {
          title: "Olympiad / SOF Preparation",
          badge: "Classes V - X",
          desc: "Focused preparation for Science (NSO), Math (IMO), English (IEO), and Cyber Olympiads.",
          features: [
            "Olympiad-oriented specialized practice",
            "Previous years' questions analysis",
            "Higher-order thinking skills (HOTS)",
            "Timed mock tests & paper analysis"
          ]
        },
        {
          title: "Class X & XII Board Prep",
          badge: "Board Milestone",
          desc: "Focused academic preparation for important board examinations with targeted strategy and answer writing techniques.",
          features: [
            "Exam-oriented syllabus completion",
            "Comprehensive revision strategy",
            "Sample papers & full-length mock exams",
            "One-on-one doubt solving & guidance"
          ]
        }
      ]
    },
    whyChooseUs: {
      badge: "Why Awad Academy",
      title: "Why Parents Trust Awad Academy",
      subheading: "We combine academic rigor with supportive mentoring to give every student the competitive edge.",
      items: [
        {
          title: "Experienced Faculty",
          desc: "Passionate teachers dedicated to explaining complex concepts in simple, relatable ways."
        },
        {
          title: "Concept-Based Teaching",
          desc: "We focus on real understanding rather than rote learning, fostering genuine curiosity."
        },
        {
          title: "Personal Attention",
          desc: "Small batch monitoring ensures no student is left behind in comprehension."
        },
        {
          title: "Regular Assessments",
          desc: "Weekly & monthly evaluation tests with clear feedback to monitor steady progress."
        },
        {
          title: "Doubt Solving Support",
          desc: "Dedicated time slots after classes for individual doubt resolution and personal guidance."
        },
        {
          title: "Exam-Focused Preparation",
          desc: "Strategic exam patterns, time management practice, and mock test papers."
        }
      ]
    },
    process: {
      badge: "Methodology",
      title: "Our 5-Step Success Framework",
      steps: [
        {
          step: "01",
          title: "Learn",
          desc: "Understand the concept clearly through interactive classroom instruction and visual explanations."
        },
        {
          step: "02",
          title: "Practice",
          desc: "Solve structured exercises and problem sets with guided teacher support."
        },
        {
          step: "03",
          title: "Test",
          desc: "Attempt regular assessments and mock exams under exam-like conditions."
        },
        {
          step: "04",
          title: "Analyse",
          desc: "Review detailed performance feedback to pinpoint mistakes and identify weak areas."
        },
        {
          step: "05",
          title: "Improve",
          desc: "Targeted revision, extra guidance, and continuous practice for guaranteed growth."
        }
      ]
    },
    results: {
      badge: "Academic Excellence : Results",
      title: "Academic Excellence & Top Achievers",
      tagline: "Giving wings to a million dreams, a million more to go",
      subheading: "Celebrating student determination, top board scores, and Olympiad gold medals at Awad Educational Academy Kaij.",
      allTab: "All Achievers",
      boardsTab: "Board Milestones (X & XII)",
      olympiadTab: "Olympiad Champions",
      foundationTab: "Foundation Toppers",
      students: "Students Guided",
      studentsSub: "Across academic & foundation batches",
      tests: "Practice Tests",
      testsSub: "Conducting regular evaluation exams",
      experience: "Years Experience",
      experienceSub: "Of academic coaching leadership",
      programs: "Specialized Programs",
      programsSub: "School, Foundation & Olympiad prep"
    },
    testimonials: {
      badge: "Community Feedback",
      title: "What Parents & Students Say",
      subheading: "Real feedback from parents and students experiencing conceptual learning at Awad Educational Academy, Kaij.",
      writeReview: "Write & Post Your Review",
      verifiedUser: "Verified User Review",
      modalTitle: "Write Your Review",
      modalSubtitle: "Share your genuine experience with Awad Academy Kaij",
      yourName: "Your Name",
      iAmA: "I am a...",
      parent: "Parent of Student",
      classX: "Class X Student",
      classIX: "Class IX Student",
      olympiad: "Olympiad Student",
      alumni: "Alumni Student",
      other: "Other",
      rating: "Rating",
      feedback: "Your Feedback / Experience",
      placeholderFeedback: "Share how Awad Educational Academy helped in building strong concepts, school exams or Olympiad preparation...",
      cancel: "Cancel",
      submit: "Post Review",
      thankYou: "Thank You!",
      thankYouSub: "Your review has been published directly on our website!"
    },
    gallery: {
      badge: "Campus & Events",
      title: "Life at Awad Academy Kaij",
      categories: {
        all: "All Photos",
        classroom: "Classrooms",
        olympiad: "Olympiad & Tests",
        events: "Events & Awards",
        infrastructure: "Infrastructure"
      }
    },
    cta: {
      badge: "Take the First Step",
      title: "Ready to Strengthen Your Academics & Excel in Exams?",
      subheading: "Admissions open for School Academics, Foundation, and Olympiad batches at Awad Educational Academy, Kaij.",
      button: "Enquire for Admission Now",
      callUs: "Or Call Us:"
    },
    contact: {
      badge: "Get in Touch",
      title: "Contact Awad Educational Academy",
      subheading: "Visit our Kaij center, call us directly, or send an enquiry online to discuss admissions.",
      addressLabel: "Address",
      phoneLabel: "Phone Number",
      emailLabel: "Email",
      hoursLabel: "Center Hours",
      hoursVal: "Mon - Sat: 8:00 AM - 8:00 PM",
      whatsappBtn: "Chat on WhatsApp Directly",
      openMaps: "Open in Google Maps",
      formTitle: "Send Admission Enquiry",
      formSub: "Fill out the form below and our team will get in touch with you shortly.",
      studentName: "Student Name",
      parentName: "Parent Name",
      currentClass: "Current Class",
      courseInterest: "Course Interested In",
      phoneNumber: "Phone Number",
      message: "Message / Questions",
      submitBtn: "Submit Enquiry",
      submitting: "Submitting Enquiry...",
      successTitle: "Thank you! We will contact you soon.",
      successSub: "Your enquiry has been received. Our counselor will call you shortly."
    },
    enquiryModal: {
      title: "Admission & Course Enquiry",
      subtitle: "Awad Educational Academy, Kaij",
      close: "Close"
    },
    footer: {
      tagline: "Learn • Practice • Improve • Achieve",
      aboutText: "Awad Educational Academy in Kaij, Beed offers structured school coaching, foundation building, and Olympiad prep with conceptual learning and individual focus.",
      quickLinks: "Quick Links",
      academicPrograms: "Academic Programs",
      kaijCenter: "Kaij Center",
      rights: "© 2026 Awad Educational Academy. All Rights Reserved."
    }
  },

  hi: {
    topBar: {
      admissionsOpen: "प्रवेश प्रारंभ 2026-27",
      location: "कैज, बीड, महाराष्ट्र",
    },
    nav: {
      home: "मुख्य पृष्ठ",
      about: "हमारे बारे में",
      courses: "कोर्सेस",
      whyChooseUs: "हमें क्यों चुनें",
      process: "प्रक्रिया",
      results: "परिणाम",
      gallery: "गैलरी",
      testimonials: "समीक्षाएं",
      contact: "संपर्क करें",
      enquireNow: "पूछताछ करें",
      selectLanguage: "भाषा",
    },
    hero: {
      trustBadge: "स्कूली शिक्षा • फाउंडेशन • ओलंपियाड तैयारी",
      headlineMain: "मजबूत नींव का निर्माण करें।",
      headlineSub: "बड़े सपनों को साकार करें।",
      subheading: "सही मार्गदर्शन, व्यक्तिगत ध्यान और निरंतर अभ्यास के साथ छात्रों के लिए गुणवत्तापूर्ण शैक्षणिक कोचिंग।",
      exploreCourses: "कोर्सेस देखें",
      enquireNow: "प्रवेश पूछताछ",
      expertFaculty: "विशेषज्ञ शिक्षक",
      expertFacultySub: "अनुभवी अध्यापन",
      conceptFirst: "अवधारणा स्पष्टता",
      conceptFirstSub: "गहरी समझ",
      olympiadPrep: "ओलंपियाड तैयारी",
      olympiadPrepSub: "प्रतिस्पर्धी क्षमता",
      smallBatches: "छोटे बैच",
      smallBatchesSub: "व्यक्तिगत ध्यान",
      slides: [
        { title: "व्यक्तिगत छात्र मार्गदर्शन", badge: "इंटरैक्टिव शिक्षण" },
        { title: "कैज में आधुनिक कक्षाएं", badge: "छोटे बैच पर विशेष ध्यान" },
        { title: "व्यावहारिक विज्ञान एवं गणित", badge: "संकल्पना स्पष्टता" },
        { title: "ओलंपियाड और प्रतियोगी तैयारी", badge: "प्रतिस्पर्धी बढ़त" },
        { title: "समर्पित शिक्षक मार्गदर्शन", badge: "विशेषज्ञ शिक्षक" },
        { title: "मेधावी छात्र और विजेता", badge: "सर्वश्रेष्ठ परिणाम" }
      ]
    },
    about: {
      badge: "आवाद अकादमी के बारे में",
      title: "आवाद एजुकेशनल अकादमी के बारे में",
      paragraph1: "आवाद एजुकेशनल अकादमी (AEA), कैज, बीड, महाराष्ट्र में स्थित एक शैक्षणिक केंद्र है जो अकादमिक शिक्षण, छात्र विकास और अवधारणात्मक समझ पर केंद्रित है। अकादमी गणित और विज्ञान पर विशेष जोर देने के साथ स्कूल स्तर के विषयों में कोचिंग और संरचित कार्यक्रम प्रदान करती है।",
      paragraph2: "अपने फाउंडेशन और ओलंपियाड-उन्मुख पाठ्यक्रमों के माध्यम से, AEA छात्रों को स्पष्ट बुनियादी बातें, तार्किक सोच और शैक्षणिक एवं प्रतिस्पर्धी परीक्षाओं के लिए आवश्यक आत्मविश्वास का निर्माण करने में सहायता करता है। अकादमी कक्षाओं को अधिक प्रभावी बनाने के लिए अवधारणात्मक वीडियो, अनुकूली शिक्षण और सहयोगात्मक तरीकों का उपयोग करती है।",
      highlightsTitle: "मुख्य शैक्षणिक विशेषताएं",
      highlights: [
        "प्रमुख स्कूली विषयों में शैक्षणिक शिक्षा",
        "युवा छात्रों के लिए फाउंडेशन तैयारी",
        "ओलंपियाड-उन्मुख शिक्षण और अभ्यास",
        "गणित और विज्ञान पर विशेष ध्यान",
        "अवधारणात्मक वीडियो और अनुकूली शिक्षण पद्धतियां",
        "छात्र विकास और शैक्षणिक अनुशासन"
      ],
      pillars: [
        {
          title: "मजबूत अवधारणाएं",
          desc: "मूलभूत सिद्धांतों की स्पष्ट समझ और गहराई से व्याख्या विकसित करें।"
        },
        {
          title: "व्यक्तिगत ध्यान",
          desc: "छोटे बैच और शंका समाधान के माध्यम से प्रत्येक छात्र की आवश्यकता पर ध्यान।"
        },
        {
          title: "निरंतर अभ्यास",
          desc: "आत्मविश्वास और परीक्षा गति बढ़ाने के लिए नियमित परीक्षण और रिवीजन सत्र।"
        }
      ]
    },
    courses: {
      badge: "हमारे शैक्षणिक कार्यक्रम",
      title: "विशेष पाठ्यक्रम एवं बैच",
      subheading: "स्कूली सफलता, प्रतियोगी परीक्षाओं और बोर्ड मील के पत्थरों के लिए डिज़ाइन किए गए विशेष कोचिंग कार्यक्रम।",
      popularBadge: "सर्वाधिक लोकप्रिय",
      enrollNow: "प्रवेश / पूछताछ करें",
      items: [
        {
          title: "स्कूली शैक्षणिक कोचिंग",
          badge: "कक्षा 5वीं - 9वीं",
          desc: "उन छात्रों के लिए जो नियमित स्कूली शिक्षा में उत्कृष्ट प्रदर्शन करना चाहते हैं और मजबूत नींव बनाना चाहते हैं।",
          features: [
            "विज्ञान और गणित में अवधारणा-आधारित शिक्षण",
            "विषय-वार संरचित तैयारी",
            "नियमित अध्याय-अंत परीक्षण और प्रगति ट्रैकिंग",
            "समर्पित रिवीजन और शंका समाधान सत्र"
          ]
        },
        {
          title: "फाउंडेशन प्रोग्राम",
          badge: "कक्षा 7वीं - 10वीं",
          desc: "भविष्य की प्रतियोगी परीक्षाओं के लिए आवश्यक विश्लेषणात्मक और वैज्ञानिक क्षमताओं का विकास करता है।",
          features: [
            "गणित की बुनियादी बातें और वैदिक गणित",
            "उन्नत विज्ञान अवधारणाएं और अनुप्रयोग",
            "तार्किक तर्क और योग्यता प्रशिक्षण",
            "समस्या समाधान तकनीकें और गति"
          ]
        },
        {
          title: "ओलंपियाड / SOF तैयारी",
          badge: "कक्षा 5वीं - 10वीं",
          desc: "विज्ञान (NSO), गणित (IMO), अंग्रेजी (IEO) और साइबर ओलंपियाड के लिए केंद्रित तैयारी।",
          features: [
            "ओलंपियाड-उन्मुख विशेष अभ्यास",
            "पिछली परीक्षाओं के प्रश्नों का विश्लेषण",
            "उच्च-स्तरीय सोच कौशल (HOTS)",
            "समयबद्ध मॉक टेस्ट और उत्तर विश्लेषण"
          ]
        },
        {
          title: "कक्षा 10वीं एवं 12वीं बोर्ड तैयारी",
          badge: "बोर्ड परीक्षा विशेष",
          desc: "लक्षित रणनीति और उत्तर लेखन तकनीकों के साथ बोर्ड परीक्षाओं की केंद्रित तैयारी।",
          features: [
            "परीक्षा-उन्मुख पाठ्यक्रम समय पर पूरा करना",
            "व्यापक रिवीजन रणनीति",
            "नमूना प्रश्न पत्र और पूर्ण-लंबाई मॉक परीक्षा",
            "व्यक्तिगत शंका समाधान और मार्गदर्शन"
          ]
        }
      ]
    },
    whyChooseUs: {
      badge: "आवाद अकादमी ही क्यों",
      title: "अभिभावक आवाद अकादमी पर भरोसा क्यों करते हैं",
      subheading: "हम प्रत्येक छात्र को प्रतियोगी बढ़त देने के लिए शैक्षणिक गुणवत्ता और सही मार्गदर्शन का संयोजन करते हैं।",
      items: [
        {
          title: "अनुभवी शिक्षक",
          desc: "जटिल अवधारणाओं को सरल और सहज भाषा में समझाने वाले समर्पित शिक्षक।"
        },
        {
          title: "अवधारणा-आधारित शिक्षण",
          desc: "हम रटने के बजाय वास्तविक समझ पर ध्यान केंद्रित करते हैं।"
        },
        {
          title: "व्यक्तिगत ध्यान",
          desc: "छोटे बैच आकार से यह सुनिश्चित होता है कि हर छात्र समझे।"
        },
        {
          title: "नियमित मूल्यांकन",
          desc: "निरंतर प्रगति की निगरानी के लिए साप्ताहिक और मासिक मूल्यांकन परीक्षाएं।"
        },
        {
          title: "शंका समाधान सहायता",
          desc: "कक्षाओं के बाद व्यक्तिगत शंका निवारण के लिए विशेष समय।"
        },
        {
          title: "परीक्षा-उन्मुख तैयारी",
          desc: "रणनीतिक परीक्षा पैटर्न, समय प्रबंधन अभ्यास और मॉक टेस्ट पेपर।"
        }
      ]
    },
    process: {
      badge: "शिक्षण पद्धति",
      title: "हमारा 5-चरणीय सफलता ढांचा",
      steps: [
        {
          step: "01",
          title: "सीखें",
          desc: "इंटरैक्टिव कक्षा शिक्षण और दृश्य व्याख्याओं के माध्यम से अवधारणा को समझें।"
        },
        {
          step: "02",
          title: "अभ्यास करें",
          desc: "शिक्षकों के मार्गदर्शन में प्रश्नों और अभ्यासों को हल करें।"
        },
        {
          step: "03",
          title: "परीक्षा दें",
          desc: "परीक्षा जैसे माहौल में नियमित मूल्यांकन और मॉक परीक्षा दें।"
        },
        {
          step: "04",
          title: "विश्लेषण करें",
          desc: "गलतियों को सुधारने के लिए विस्तृत प्रदर्शन प्रतिक्रिया की समीक्षा करें।"
        },
        {
          step: "05",
          title: "सुधार करें",
          desc: "निश्चित वृद्धि के लिए लक्षित रिवीजन, अतिरिक्त मार्गदर्शन और निरंतर अभ्यास।"
        }
      ]
    },
    results: {
      badge: "शैक्षणिक उत्कृष्टता : परिणाम",
      title: "शैक्षणिक उत्कृष्टता और हमारे मेधावी छात्र",
      tagline: "लाखों सपनों को पंख दिए हैं, लाखों और सपनों को साकार करना है",
      subheading: "आवाद एजुकेशनल अकादमी कैज के छात्रों के उत्कृष्ट बोर्ड अंकों और ओलंपियाड स्वर्ण पदकों का उत्सव।",
      allTab: "सभी मेधावी छात्र",
      boardsTab: "बोर्ड परीक्षा (10वीं एवं 12वीं)",
      olympiadTab: "ओलंपियाड विजेता",
      foundationTab: "फाउंडेशन टॉपर्स",
      students: "मार्गदर्शित छात्र",
      studentsSub: "स्कूली व फाउंडेशन बैचों में",
      tests: "अभ्यास परीक्षाएं",
      testsSub: "नियमित मूल्यांकन परीक्षाएं आयोजित की जा रही हैं",
      experience: "वर्षों का अनुभव",
      experienceSub: "शैक्षणिक कोचिंग नेतृत्व का",
      programs: "विशेष कार्यक्रम",
      programsSub: "स्कूल, फाउंडेशन और ओलंपियाड"
    },
    testimonials: {
      badge: "अभिभावक व छात्र समीक्षाएं",
      title: "अभिभावक और छात्र क्या कहते हैं",
      subheading: "आवाद एजुकेशनल अकादमी कैज में अवधारणात्मक शिक्षा प्राप्त कर रहे अभिभावकों और छात्रों की वास्तविक प्रतिक्रिया।",
      writeReview: "अपनी समीक्षा लिखें और पोस्ट करें",
      verifiedUser: "सत्यापित समीक्षा",
      modalTitle: "अपनी समीक्षा लिखें",
      modalSubtitle: "आवाद अकादमी कैज के साथ अपना अनुभव साझा करें",
      yourName: "आपका नाम",
      iAmA: "मैं हूँ...",
      parent: "छात्र के अभिभावक",
      classX: "कक्षा 10वीं का छात्र",
      classIX: "कक्षा 9वीं का छात्र",
      olympiad: "ओलंपियाड छात्र",
      alumni: "पूर्व छात्र",
      other: "अन्य",
      rating: "रेटिंग",
      feedback: "आपकी प्रतिक्रिया / अनुभव",
      placeholderFeedback: "आवाद एजुकेशनल अकादमी ने अवधारणाओं, स्कूली परीक्षाओं या ओलंपियाड की तैयारी में कैसे मदद की...",
      cancel: "रद्द करें",
      submit: "समीक्षा पोस्ट करें",
      thankYou: "धन्यवाद!",
      thankYouSub: "आपकी समीक्षा सीधे हमारी वेबसाइट पर प्रकाशित हो गई है!"
    },
    gallery: {
      badge: "कैंपस और गतिविधियां",
      title: "आवाद अकादमी कैज में शिक्षण जीवन",
      categories: {
        all: "सभी तस्वीरें",
        classroom: "कक्षाएं",
        olympiad: "ओलंपियाड और टेस्ट",
        events: "कार्यक्रम और पुरस्कार",
        infrastructure: "सुविधाएं"
      }
    },
    cta: {
      badge: "पहला कदम बढ़ाएं",
      title: "क्या आप अपनी शिक्षा मजबूत करने और परीक्षाओं में उत्कृष्ट प्रदर्शन के लिए तैयार हैं?",
      subheading: "आवाद एजुकेशनल अकादमी कैज में स्कूली शिक्षा, फाउंडेशन और ओलंपियाड बैचों के लिए प्रवेश प्रारंभ।",
      button: "प्रवेश के लिए पूछताछ करें",
      callUs: "या कॉल करें:"
    },
    contact: {
      badge: "संपर्क करें",
      title: "आवाद एजुकेशनल अकादमी से संपर्क करें",
      subheading: "प्रवेश के विषय में चर्चा के लिए हमारे कैज केंद्र पर आएं, कॉल करें या ऑनलाइन पूछताछ भेजें।",
      addressLabel: "पता",
      phoneLabel: "फोन नंबर",
      emailLabel: "ईमेल",
      hoursLabel: "केंद्र समय",
      hoursVal: "सोम - शनि: सुबह 8:00 से शाम 8:00 बजे",
      whatsappBtn: "व्हाट्सएप पर सीधे बात करें",
      openMaps: "गूगल मैप्स में खोलें",
      formTitle: "प्रवेश पूछताछ भेजें",
      formSub: "नीचे दिया गया फॉर्म भरें और हमारी टीम जल्द ही आपसे संपर्क करेगी।",
      studentName: "छात्र का नाम",
      parentName: "अभिभावक का नाम",
      currentClass: "वर्तमान कक्षा",
      courseInterest: "इच्छुक कोर्स",
      phoneNumber: "फोन नंबर",
      message: "संदेश / प्रश्न",
      submitBtn: "पूछताछ भेजें",
      submitting: "पूछताछ भेजी जा रही है...",
      successTitle: "धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।",
      successSub: "आपकी पूछताछ प्राप्त हो गई है। हमारे सलाहकार जल्द ही आपको कॉल करेंगे।"
    },
    enquiryModal: {
      title: "प्रवेश एवं कोर्स पूछताछ",
      subtitle: "आवाद एजुकेशनल अकादमी, कैज",
      close: "बंद करें"
    },
    footer: {
      tagline: "सीखें • अभ्यास करें • सुधारें • हासिल करें",
      aboutText: "कैज, बीड स्थित आवाद एजुकेशनल अकादमी अवधारणात्मक शिक्षण और व्यक्तिगत ध्यान के साथ स्कूली कोचिंग, फाउंडेशन और ओलंपियाड की तैयारी प्रदान करती है।",
      quickLinks: "त्वरित लिंक्स",
      academicPrograms: "शैक्षणिक कार्यक्रम",
      kaijCenter: "कैज केंद्र",
      rights: "© 2026 आवाद एजुकेशनल अकादमी। सर्वाधिकार सुरक्षित।"
    }
  },

  mr: {
    topBar: {
      admissionsOpen: "प्रवेश सुरू 2026-27",
      location: "केज, बीड, महाराष्ट्र",
    },
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      courses: "कोर्सेस",
      whyChooseUs: "आम्हाला का निवडावे",
      process: "अभ्यास पद्धती",
      results: "निकाल",
      gallery: "गॅलरी",
      testimonials: "प्रतिक्रिया",
      contact: "संपर्क",
      enquireNow: "चौकशी करा",
      selectLanguage: "भाषा",
    },
    hero: {
      trustBadge: "शालेय अभ्यासक्रम • फाउंडेशन • ऑलिम्पियाड तयारी",
      headlineMain: "पक्का पाया रचा.",
      headlineSub: "मोठी स्वप्ने पूर्ण करा.",
      subheading: "योग्य मार्गदर्शन, वैयक्तिक लक्ष आणि सातत्यपूर्ण सरावासह विद्यार्थ्यांसाठी दर्जेदार शैक्षणिक कोचिंग.",
      exploreCourses: "कोर्सेस पहा",
      enquireNow: "प्रवेश चौकशी",
      expertFaculty: "तज्ज्ञ शिक्षक",
      expertFacultySub: "अनुभवी शिक्षक वृंद",
      conceptFirst: "संकल्पना स्पष्टता",
      conceptFirstSub: "सखोल समज",
      olympiadPrep: "ऑलिम्पियाड तयारी",
      olympiadPrepSub: "स्पर्धात्मक तयारी",
      smallBatches: "मर्यादित तुकड्या",
      smallBatchesSub: "वैयक्तिक लक्ष",
      slides: [
        { title: "वैयक्तिक विद्यार्थी मार्गदर्शन", badge: "संवादात्मक शिक्षण" },
        { title: "केजमधील आधुनिक वर्ग खोल्या", badge: "वैयक्तिक लक्ष" },
        { title: "प्रात्यक्षिक विज्ञान आणि गणित", badge: "संकल्पना स्पष्टता" },
        { title: "ऑलिम्पियाड व स्पर्धा परीक्षा तयारी", badge: "स्पर्धात्मक तयारी" },
        { title: "समर्पित शिक्षक मार्गदर्शन", badge: "तज्ज्ञ शिक्षक" },
        { title: "गुणवंत विद्यार्थी व विजेते", badge: "उत्कृष्ट निकाल" }
      ]
    },
    about: {
      badge: "आवाद अकॅडमीबद्दल",
      title: "आवाद एज्युकेशनल अकॅडमीबद्दल",
      paragraph1: "आवाद एज्युकेशनल अकॅडमी (AEA), केज, बीड, महाराष्ट्र येथे स्थित एक शैक्षणिक केंद्र आहे जे शैक्षणिक शिक्षण, विद्यार्थी विकास आणि संकल्पनात्मक समजावर लक्ष केंद्रित करते. अकॅडमी गणित आणि विज्ञानावर विशेष भर देऊन शालेय स्तरावरील विषयांमध्ये कोचिंग आणि संरचित कार्यक्रम प्रदान करते.",
      paragraph2: "आपल्या फाउंडेशन आणि ऑलिम्पियाड-केंद्रित कोर्सेसद्वारे, AEA विद्यार्थ्यांना स्पष्ट पाया, तार्किक विचार आणि शैक्षणिक व स्पर्धा परीक्षांसाठी आवश्यक असलेला आत्मविश्वास निर्माण करण्यास मदत करते. अकॅडमी वर्ग अधिक प्रभावी करण्यासाठी संकल्पनात्मक व्हिडिओ, ॲडॉप्टिव्ह लर्निंग आणि सहकार्यात्मक पद्धतींचा वापर करते.",
      highlightsTitle: "प्रमुख शैक्षणिक वैशिष्ट्ये",
      highlights: [
        "मुख्य शालेय विषयांमध्ये शैक्षणिक शिक्षण",
        "लहान विद्यार्थ्यांसाठी पायाभूत (फाउंडेशन) तयारी",
        "ऑलिम्पियाड-केंद्रित शिक्षण आणि सराव",
        "गणित आणि विज्ञानावर विशेष भर",
        "संकल्पनात्मक व्हिडिओ आणि ॲडॉप्टिव्ह लर्निंग पद्धती",
        "विद्यार्थी विकास आणि शैक्षणिक शिस्त"
      ],
      pillars: [
        {
          title: "भक्कम संकल्पना",
          desc: "मूलभूत तत्त्वांची सखोल स्पष्टता आणि समज निर्माण करणे."
        },
        {
          title: "वैयक्तिक लक्ष",
          desc: "मर्यादित तुकड्या व थेट शंका निरसनाद्वारे प्रत्येक विद्यार्थ्याकडे वैयक्तिक लक्ष."
        },
        {
          title: "सातत्यपूर्ण सराव",
          desc: "आत्मविश्वास आणि परीक्षेतील वेग वाढवण्यासाठी नियमित चाचण्या व उजळणी."
        }
      ]
    },
    courses: {
      badge: "आमचे शैक्षणिक कार्यक्रम",
      title: "विशेष कोर्सेस आणि तुकड्या",
      subheading: "शालेय यश, स्पर्धा परीक्षा आणि बोर्ड परीक्षांसाठी डिझाइन केलेले विशेष कोचिंग कार्यक्रम.",
      popularBadge: "सर्वाधिक लोकप्रिय",
      enrollNow: "प्रवेश घ्या / चौकशी करा",
      items: [
        {
          title: "शालेय शैक्षणिक कोचिंग",
          badge: "इयत्ता 5वी ते 9वी",
          desc: "नियमित शालेय अभ्यासात उत्तम कामगिरी व पाया मजबूत करू इच्छिणाऱ्या विद्यार्थ्यांसाठी.",
          features: [
            "विज्ञान आणि गणितात संकल्पना-आधारित अध्यापन",
            "विषयनिहाय संरचित तयारी",
            "घटकनिहाय चाचण्या आणि प्रगती अहवाल",
            "विशेष उजळणी व शंका निरसन सत्रे"
          ]
        },
        {
          title: "फाउंडेशन प्रोग्राम",
          badge: "इयत्ता 7वी ते 10वी",
          desc: "भविष्यातील स्पर्धा परीक्षांसाठी आवश्यक विश्लेषणात्मक व वैज्ञानिक क्षमता विकसित करण्यास मदत करते.",
          features: [
            "गणिताचा पाया आणि वेदिक गणित",
            "प्रगत विज्ञान संकल्पना आणि उपयोग",
            "तार्किक विचार आणि बुद्धिमत्ता सराव",
            "प्रश्न सोडवण्याची तंत्रे आणि वेग"
          ]
        },
        {
          title: "ऑलिम्पियाड / SOF तयारी",
          badge: "इयत्ता 5वी ते 10वी",
          desc: "विज्ञान (NSO), गणित (IMO), इंग्रजी (IEO) आणि सायबर ऑलिम्पियाडसाठी विशेष तयारी.",
          features: [
            "ऑलिम्पियाड-केंद्रित विशेष सराव",
            "मागील वर्षांच्या प्रश्नपत्रिकांचे विश्लेषण",
            "उच्च-स्तरीय विचार कौशल्य (HOTS)",
            "वेळबद्ध मॉक चाचण्या आणि विश्लेषण"
          ]
        },
        {
          title: "इयत्ता 10वी व 12वी बोर्ड परीक्षा तयारी",
          badge: "बोर्ड परीक्षा विशेष",
          desc: "योग्य रणनीती आणि उत्तरलेखन कौशल्यासह बोर्ड परीक्षांची परिपूर्ण तयारी.",
          features: [
            "परीक्षानिहाय अभ्यासक्रम वेळेत पूर्ण करणे",
            "सर्वसमावेशक उजळणी रणनीती",
            "सराव प्रश्नपत्रिका व पूर्ण मॉक परीक्षा",
            "वैयक्तिक शंका निरसन व मार्गदर्शन"
          ]
        }
      ]
    },
    whyChooseUs: {
      badge: "आवाद अकॅडमीच का",
      title: "पालक आवाद अकॅडमीवर विश्वास का ठेवतात",
      subheading: "प्रत्येक विद्यार्थ्याच्या उज्ज्वल भविष्यासाठी आम्ही शैक्षणिक गुणवत्ता आणि योग्य मार्गदर्शनाचा मेळ घालतो.",
      items: [
        {
          title: "अनुभवी शिक्षक वृंद",
          desc: "कठीण विषय सोप्या भाषेत समजून सांगणारे समर्पित शिक्षक."
        },
        {
          title: "संकल्पना-आधारित अध्यापन",
          desc: "पाठांतराऐवजी विषयाच्या सखोल आकलनावर भर."
        },
        {
          title: "वैयक्तिक लक्ष",
          desc: "मर्यादित विद्यार्थ्यांमुळे प्रत्येक विद्यार्थ्याच्या प्रगतीवर लक्ष."
        },
        {
          title: "नियमित चाचण्या व मूल्यमापन",
          desc: "सतत प्रगती तपासण्यासाठी साप्ताहिक व मासिक परीक्षा आणि अभिप्राय."
        },
        {
          title: "शंका निरसन सत्र",
          desc: "तासिकेनंतर वैयक्तिक शंका निरसनासाठी स्वतंत्र वेळ."
        },
        {
          title: "परीक्षा-केंद्रित तयारी",
          desc: "परीक्षेचे स्वरूप, वेळ व्यवस्थापन आणि मॉक चाचणी सराव."
        }
      ]
    },
    process: {
      badge: "अध्यापन पद्धती",
      title: "आमचा 5-टप्प्यांचा यशस्वी मार्ग",
      steps: [
        {
          step: "01",
          title: "शिकणे",
          desc: "संवादात्मक तासिका आणि प्रात्यक्षिकांद्वारे संकल्पना स्पष्ट समजून घेणे."
        },
        {
          step: "02",
          title: "सराव करणे",
          desc: "शिक्षकांच्या मार्गदर्शनाखाली विविध प्रश्नांचा सराव करणे."
        },
        {
          step: "03",
          title: "चाचणी देणे",
          desc: "परीक्षेच्या वातावरणात नियमित चाचण्या व मॉक परीक्षा देणे."
        },
        {
          step: "04",
          title: "विश्लेषण करणे",
          desc: "चुका सुधारण्यासाठी आणि कच्चा दुवा ओळखण्यासाठी विश्लेषणात्मक अभिप्राय."
        },
        {
          step: "05",
          title: "प्रगती साधणे",
          desc: "शाश्वत प्रगतीसाठी विशेष उजळणी, अतिरिक्त मार्गदर्शन व सतत सराव."
        }
      ]
    },
    results: {
      badge: "शैक्षणिक गुणवत्ता : निकाल",
      title: "शैक्षणिक गुणवत्ता आणि गुणवंत विद्यार्थी",
      tagline: "लाखो स्वप्नांना दिले पंख, आणखी लाखो स्वप्ने साकार करायची आहेत",
      subheading: "आवाद एज्युकेशनल अकॅडमी केजच्या विद्यार्थ्यांचे उत्कृष्ट बोर्ड गुण आणि ऑलिम्पियाड सुवर्णपदकांचे यश.",
      allTab: "सर्व गुणवंत विद्यार्थी",
      boardsTab: "बोर्ड परीक्षा (10वी व 12वी)",
      olympiadTab: "ऑलिम्पियाड विजेते",
      foundationTab: "फाउंडेशन टॉपर्स",
      students: "मार्गदर्शन केलेले विद्यार्थी",
      studentsSub: "शालेय व पायाभूत तुकड्यांमध्ये",
      tests: "सराव परीक्षा",
      testsSub: "नियमित मूल्यमापन चाचण्या घेतल्या जात आहेत",
      experience: "वर्षांचा अनुभव",
      experienceSub: "शैक्षणिक मार्गदर्शनाचा",
      programs: "विशेष कोर्सेस",
      programsSub: "शालेय, फाउंडेशन व ऑलिम्पियाड"
    },
    testimonials: {
      badge: "पालक व विद्यार्थी प्रतिक्रिया",
      title: "पालक आणि विद्यार्थी काय म्हणतात",
      subheading: "आवाद एज्युकेशनल अकॅडमी केज मधील शिक्षण अनुभवाबद्दल पालक व विद्यार्थ्यांच्या प्रामाणिक प्रतिक्रिया.",
      writeReview: "तुमची प्रतिक्रिया लिहा व पोस्ट करा",
      verifiedUser: "प्रमाणित प्रतिक्रिया",
      modalTitle: "तुमची प्रतिक्रिया लिहा",
      modalSubtitle: "आवाद अकॅडमी केजबद्दलचा तुमचा अनुभव सामायिक करा",
      yourName: "तुमचे नाव",
      iAmA: "मी आहे...",
      parent: "विद्यार्थ्याचे पालक",
      classX: "इयत्ता 10वीचा विद्यार्थी",
      classIX: "इयत्ता 9वीचा विद्यार्थी",
      olympiad: "ऑलिम्पियाड विद्यार्थी",
      alumni: "माजी विद्यार्थी",
      other: "इतर",
      rating: "रेटिंग",
      feedback: "तुमची प्रतिक्रिया / अनुभव",
      placeholderFeedback: "आवाद अकॅडमीने संकल्पना स्पष्टतेत, शालेय परीक्षेत किंवा ऑलिम्पियाड तयारीत कशी मदत केली ते सांगा...",
      cancel: "रद्द करा",
      submit: "प्रतिक्रिया पोस्ट करा",
      thankYou: "धन्यवाद!",
      thankYouSub: "तुमची प्रतिक्रिया थेट आमच्या वेबसाइटवर प्रकाशित झाली आहे!"
    },
    gallery: {
      badge: "परिसर आणि उपक्रम",
      title: "आवाद अकॅडमी केजमधील शैक्षणिक वातावरण",
      categories: {
        all: "सर्व फोटो",
        classroom: "वर्ग खोल्या",
        olympiad: "ऑलिम्पियाड व चाचण्या",
        events: "कार्यक्रम व पुरस्कार",
        infrastructure: "सुविधा व पायाभूत सुविधा"
      }
    },
    cta: {
      badge: "पहिले पाऊल उचला",
      title: "तुमच्या शैक्षणिक प्रगतीसाठी आणि उत्तम यशासाठी तयार आहात का?",
      subheading: "आवाद एज्युकेशनल अकॅडमी केजमध्ये शालेय अभ्यासक्रम, फाउंडेशन आणि ऑलिम्पियाड तुकड्यांसाठी प्रवेश सुरू.",
      button: "प्रवेशासाठी आजच चौकशी करा",
      callUs: "किंवा कॉल करा:"
    },
    contact: {
      badge: "संपर्क साधा",
      title: "आवाद एज्युकेशनल अकॅडमीशी संपर्क साधा",
      subheading: "प्रवेशासंदर्भात माहितीसाठी आमच्या केज केंद्रास भेट द्या, कॉल करा किंवा ऑनलाइन चौकशी पाठवा.",
      addressLabel: "पत्ता",
      phoneLabel: "फोन नंबर",
      emailLabel: "ईमेल",
      hoursLabel: "केंद्र वेळ",
      hoursVal: "सोम - शनी: सकाळी 8:00 ते संध्याकाळी 8:00",
      whatsappBtn: "व्हॉट्सॲपवर थेट बोला",
      openMaps: "गूगल मॅप्सवर पहा",
      formTitle: "प्रवेश चौकशी पाठवा",
      formSub: "खालील फॉर्म भरा आणि आमची टीम लवकरच तुमच्याशी संपर्क साधेल.",
      studentName: "विद्यार्थ्याचे नाव",
      parentName: "पालकांचे नाव",
      currentClass: "सध्याची इयत्ता",
      courseInterest: "इच्छुक कोर्स",
      phoneNumber: "फोन नंबर",
      message: "संदेश / प्रश्न",
      submitBtn: "चौकशी सबमिट करा",
      submitting: "चौकशी पाठवत आहे...",
      successTitle: "धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.",
      successSub: "तुमची चौकशी प्राप्त झाली आहे. आमचे समुपदेशक लवकरच तुम्हाला संपर्क करतील."
    },
    enquiryModal: {
      title: "प्रवेश व कोर्स चौकशी",
      subtitle: "आवाद एज्युकेशनल अकॅडमी, केज",
      close: "बंद करा"
    },
    footer: {
      tagline: "शिका • सराव करा • प्रगती साधा • यश मिळवा",
      aboutText: "केज, बीड येथील आवाद एज्युकेशनल अकॅडमी संकल्पनात्मक शिक्षण आणि वैयक्तिक लक्ष देऊन शालेय कोचिंग, फाउंडेशन आणि ऑलिम्पियाडची तयारी करून घेते.",
      quickLinks: "महत्त्वाच्या लिंक्स",
      academicPrograms: "शैक्षणिक कार्यक्रम",
      kaijCenter: "केज केंद्र",
      rights: "© 2026 आवाद एज्युकेशनल अकॅडमी. सर्व हक्क सुरक्षित."
    }
  }
};
