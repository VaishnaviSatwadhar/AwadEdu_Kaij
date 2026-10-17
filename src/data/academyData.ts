export interface CourseSubjectDetail {
  subject: string;
  icon?: string;
  topics: string[];
  hoursPerWeek: number;
}

export interface CourseSchedule {
  classDays: string;
  timing: string;
  testDay: string;
  doubtSessions: string;
}

export interface CourseItem {
  id: string;
  title: string;
  category: 'neet' | 'academics' | 'foundation' | 'olympiad' | 'boards';
  badge: string;
  description: string;
  features: string[];
  iconName: string;
  popular?: boolean;
  tagline?: string;
  targetExam?: string;
  batchStart?: string;
  duration?: string;
  mode?: string;
  feeDiscountNote?: string;
  subjects?: CourseSubjectDetail[];
  schedule?: CourseSchedule;
  highlightsList?: string[];
  ncertCoveragePercent?: number;
  mockTestsCount?: number;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  studentClass?: string;
  rating: number;
}

export interface StatItem {
  id: string;
  value: string;
  numberValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  editableNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'olympiad' | 'events' | 'infrastructure';
  imageUrl: string;
  caption: string;
}

export interface AchieverItem {
  id: string;
  name: string;
  category: 'boards' | 'olympiad' | 'foundation' | 'neet';
  score: string;
  badge: string;
  exam: string;
  photoUrl: string;
  quote: string;
}

export const ACADEMY_DATA = {
  brand: {
    name: "Awad Educational Academy",
    tagline: "Learn • Practice • Improve • Achieve",
    locationShort: "Kaij, Beed, Maharashtra",
    fullAddress: "Main Road, Near Bus Stand, Kaij, District Beed, Maharashtra - 431123",
    phoneDisplay: "+91 94221 05262",
    phoneRaw: "+919422105262",
    whatsappNumber: "919422105262",
    email: "satwadharvaishnavi1@gmail.com",
    workingHours: "Mon - Sat: 8:00 AM - 8:00 PM",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8402517604554!2d76.0667559!3d18.7150936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc53f740b30ba23%3A0x2c6666615739f84b!2sAwad%20Educational%20Academy%2C%20Kaij!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin",
    googleMapsUrl: "https://www.google.com/maps/place/Awad+Educational+Academy,+Kaij/@18.7150936,76.0667559,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc53f740b30ba23:0x2c6666615739f84b!8m2!3d18.7150936!4d76.0667559!16s%2Fg%2F11ddzyg4tf"
  },

  hero: {
    headline: "Build Strong Foundations. Achieve Bigger Dreams.",
    subheading: "Quality academic coaching for students with the right guidance, personal attention and consistent practice.",
    trustBadge: "NEET UG Coaching • School Academics • Foundation • Olympiad",
    floatingBadges: [
      { text: "Expert Faculty Guidance", icon: "Award" },
      { text: "Personalized Student Care", icon: "HeartHandshake" },
      { text: "Regular Weekly Practice", icon: "CheckCircle2" },
      { text: "Concept-Focused Learning", icon: "Brain" }
    ],
    heroImage: "/images/WhatsApp Image 2026-09-25 at 3.07.15 PM.jpeg",
    heroImages: [
      {
        url: "/images/WhatsApp Image 2026-09-25 at 3.07.15 PM.jpeg",
        title: "NEET Medical Special Batch & Guidance",
        badge: "Interactive Learning"
      },
      {
        url: "/images/WhatsApp Image 2026-09-25 at 3.07.25 PM (2).jpeg",
        title: "Modern Classroom Learning at Kaij",
        badge: "Small Batch Attention"
      },
      {
        url: "/images/WhatsApp Image 2026-09-25 at 3.07.37 PM (2).jpeg",
        title: "Practical Physics, Chemistry & Biology",
        badge: "Concept Clarity"
      },
      {
        url: "/images/WhatsApp Image 2026-09-25 at 3.07.37 PM (1).jpeg",
        title: "NEET & Olympiad Competitive Edge",
        badge: "Top Rank Focus"
      },
      {
        url: "/images/WhatsApp Image 2026-09-25 at 3.07.35 PM.jpeg",
        title: "Dedicated Mentorship & Daily Doubt Desk",
        badge: "Expert Teachers"
      },
      {
        url: "/images/WhatsApp Image 2026-09-25 at 3.07.33 PM (2).jpeg",
        title: "Academic & Medical Achievers",
        badge: "Top Results"
      }
    ]
  },

  about: {
    title: "About Awad Educational Academy",
    descriptionParagraph1: "Awad Educational Academy in Kaij is dedicated to fostering academic excellence by laying rock-solid conceptual foundations. We believe every student possesses unique potential that flourishes when provided with structured mentoring, individual attention, and disciplined practice.",
    descriptionParagraph2: "Our methodology combines curriculum-aligned school coaching with forward-looking NEET & competitive orientation—preparing young minds not only for current school examinations but also for NEET UG, national Olympiads, scholarship tests, and board milestone exams.",
    image: "/images/about_director.jpg",
    pillars: [
      {
        id: "concepts",
        title: "Strong Concepts",
        description: "Build a clear understanding of fundamentals with deep explanation of core principles.",
        icon: "BookOpenCheck"
      },
      {
        id: "attention",
        title: "Personal Attention",
        description: "Support students according to their learning needs through small batch sizes & direct doubt resolution.",
        icon: "Users"
      },
      {
        id: "practice",
        title: "Consistent Practice",
        description: "Regular tests, assignments and revision sessions to improve confidence and exam speed.",
        icon: "Target"
      }
    ]
  },

  courses: [
    {
      id: "neet-super-30",
      title: "NEET UG Target Batch (Class XI, XII & Droppers)",
      category: "neet",
      badge: "Target 680+ Score",
      description: "Comprehensive 360° NEET UG Preparation focusing on 100% NCERT line-by-line mastery in Biology, Physics, & Chemistry with 50+ NTA pattern mock tests.",
      features: [
        "100% NCERT Line-by-Line Botany & Zoology Coverage",
        "Physics Numerical Problem Solving & Shortcut Formula Tricks",
        "Physical, Organic & Inorganic Chemistry Mastery",
        "Weekly OMR Mock Tests with NTA Negative Marking Simulation",
        "Daily Practice Papers (DPP) & Personal Doubt Solving"
      ],
      iconName: "Stethoscope",
      popular: true,
      tagline: "Aim for Govt Medical Colleges (GMC) with High Precision Mentorship",
      targetExam: "NEET UG 2026 / 2027",
      batchStart: "Fresh Batch Starts 1st & 15th of Every Month",
      duration: "1 Year / 2 Year Intensive Program",
      mode: "Offline Classroom @ Kaij Center + AI Digital App Access",
      feeDiscountNote: "Up to 100% ATSE Scholarship available for meritorious students",
      ncertCoveragePercent: 100,
      mockTestsCount: 65,
      subjects: [
        {
          subject: "Botany (Biology)",
          topics: [
            "Plant Physiology & Photosynthesis",
            "Genetics & Biotechnology",
            "Cell Biology & Cell Cycle",
            "Ecology & Environment"
          ],
          hoursPerWeek: 6
        },
        {
          subject: "Zoology (Biology)",
          topics: [
            "Human Physiology & Endocrine System",
            "Human Reproduction & Health",
            "Animal Kingdom & Biomolecules",
            "Evolution & Disease Defense"
          ],
          hoursPerWeek: 6
        },
        {
          subject: "Physics",
          topics: [
            "Mechanics & Rotational Dynamics",
            "Electrostatics & Current Electricity",
            "Optics & Wave Motion",
            "Modern Physics & Semiconductors"
          ],
          hoursPerWeek: 7
        },
        {
          subject: "Chemistry",
          topics: [
            "Physical Chemistry & Mole Concept",
            "Organic Reaction Mechanisms & IUPAC",
            "Inorganic Chemistry (p, d, f blocks & Coordination)",
            "Chemical Kinetics & Equilibrium"
          ],
          hoursPerWeek: 7
        }
      ],
      schedule: {
        classDays: "Monday to Saturday (6 Days/Week)",
        timing: "Morning Batch: 8:00 AM - 1:30 PM | Afternoon: 2:00 PM - 7:30 PM",
        testDay: "Every Sunday (3 Hours Full OMR Test)",
        doubtSessions: "Daily 1 Hour Post-Class Dedicated Doubt Desk"
      },
      highlightsList: [
        "Special focus on Maharashtra domicile GMC Cutoffs & DTE Admissions",
        "30 Students per Batch maximum for personalized faculty monitoring",
        "NCERT Highlighted Handouts & Mind Maps provided",
        "Parent Performance Report Card shared weekly on WhatsApp"
      ]
    },
    {
      id: "neet-dropper-batch",
      title: "NEET Repeater / Achiever Batch",
      category: "neet",
      badge: "Dropper Special",
      description: "Intensive 1-Year FastTrack program for 12th pass students aiming to boost their NEET score from 400+ to 650+.",
      features: [
        "Fast-track complete syllabus revision in 6 months",
        "High-yield NEET question banks (PYQs last 20 years)",
        "Daily 100-question practice test series",
        "Mindset & exam stress management coaching"
      ],
      iconName: "Zap",
      popular: true,
      tagline: "Turn your gap year into a Medical College seat",
      targetExam: "NEET UG 2026",
      batchStart: "Admission Open",
      duration: "1 Year Full Time",
      mode: "Offline Classroom @ Kaij",
      feeDiscountNote: "Special Fee Concession for 500+ scorers in past NEET attempt",
      ncertCoveragePercent: 100,
      mockTestsCount: 80,
      subjects: [
        {
          subject: "Biology Complete",
          topics: ["Full Class 11th & 12th NCERT Biology Revision", "Assertion-Reason Special Series", "Diagram-based questions"],
          hoursPerWeek: 10
        },
        {
          subject: "Physics Speed Mastery",
          topics: ["Formula Tricks & Short Cut Methods", "Mechanics & Electromagnetism Drills"],
          hoursPerWeek: 10
        },
        {
          subject: "Chemistry Precision",
          topics: ["Organic Reactions Roadmap", "Inorganic NCERT Memorization Tips", "Physical Numericals"],
          hoursPerWeek: 10
        }
      ],
      schedule: {
        classDays: "Monday to Saturday",
        timing: "8:30 AM - 3:00 PM (Lecture + Practice)",
        testDay: "Every Sunday 2:00 PM - 5:20 PM (Strict NTA Timed Exam)",
        doubtSessions: "Continuous Doubt Bench 3:00 PM - 5:00 PM"
      },
      highlightsList: [
        "1-on-1 Mentor assigned to track daily accuracy & negative marks",
        "Customized weak area recovery modules",
        "NCERT Audio-Visual memory hacks"
      ]
    },
    {
      id: "school-academics",
      title: "School Academic Coaching",
      category: "academics",
      badge: "Classes V - IX",
      description: "For students who want to strengthen their performance in regular school academics and build solid grade foundations.",
      features: [
        "Concept-based learning in Science & Maths",
        "Subject-wise structured preparation",
        "Regular chapter-end tests & progress tracking",
        "Dedicated revision & doubt solving sessions"
      ],
      iconName: "GraduationCap",
      popular: false,
      tagline: "Build top marks in school exams with clear understanding",
      targetExam: "School Examinations & Annual Boards",
      batchStart: "Ongoing Enrollment",
      duration: "Academic Year Program",
      mode: "Offline @ Kaij",
      feeDiscountNote: "Sibling discount available",
      ncertCoveragePercent: 95,
      mockTestsCount: 30,
      subjects: [
        {
          subject: "Mathematics",
          topics: ["Algebra, Geometry, Mensuration", "Number Systems & Equations"],
          hoursPerWeek: 5
        },
        {
          subject: "Science",
          topics: ["Physics Fundamentals", "Chemistry Basics", "Biology Intro"],
          hoursPerWeek: 5
        }
      ],
      schedule: {
        classDays: "Monday to Friday",
        timing: "4:00 PM - 7:00 PM",
        testDay: "Every Saturday Chapter Test",
        doubtSessions: "3:30 PM - 4:00 PM"
      },
      highlightsList: [
        "Aligned with State Board & CBSE syllabus",
        "Small batch focus",
        "Homework assistance & weak topic coaching"
      ]
    },
    {
      id: "foundation-program",
      title: "Foundation Program (NEET / JEE Prep)",
      category: "foundation",
      badge: "Classes VII - X",
      description: "Helps students develop strong analytical and scientific fundamentals required for future NEET & JEE competitive examinations.",
      features: [
        "Mathematics fundamentals & mental math",
        "Advanced Science concepts & application",
        "Logical reasoning & aptitude training",
        "Problem-solving strategies & speed techniques"
      ],
      iconName: "Compass",
      popular: true,
      tagline: "Early start for future Doctors & Engineers",
      targetExam: "NEET / JEE Foundation & NTSE",
      batchStart: "Fresh Batches Open",
      duration: "1 Year / 2 Year Foundation",
      mode: "Offline @ Kaij",
      feeDiscountNote: "Merit-based ATSE scholarship valid",
      ncertCoveragePercent: 100,
      mockTestsCount: 40,
      subjects: [
        {
          subject: "Foundation Physics & Chem",
          topics: ["Kinematics, Force, Matter, Chemical Reactions"],
          hoursPerWeek: 4
        },
        {
          subject: "Foundation Biology",
          topics: ["Cell Structure, Microorganisms, Life Processes"],
          hoursPerWeek: 3
        },
        {
          subject: "Mental Ability & Math",
          topics: ["Logical Reasoning, Pattern Analysis, Advanced Math"],
          hoursPerWeek: 4
        }
      ],
      schedule: {
        classDays: "4 Days a week",
        timing: "5:00 PM - 7:30 PM",
        testDay: "Alternate Sunday Test",
        doubtSessions: "Post-class 30 mins"
      },
      highlightsList: [
        "Bridge the gap between school curriculum and competitive level",
        "Fosters critical thinking from an early age"
      ]
    },
    {
      id: "olympiad-sof",
      title: "Olympiad / SOF Preparation",
      category: "olympiad",
      badge: "Classes V - X",
      description: "Focused preparation for Science (NSO), Math (IMO), English (IEO), and Cyber Olympiads.",
      features: [
        "Olympiad-oriented specialized practice",
        "Previous years' questions analysis",
        "Higher-order thinking skills (HOTS)",
        "Timed mock tests & paper analysis"
      ],
      iconName: "Trophy",
      popular: false,
      tagline: "Win National & International medals",
      targetExam: "SOF NSO / IMO / IEO / Homi Bhabha",
      batchStart: "Admission Open",
      duration: "6 Months Special Prep",
      mode: "Offline Classroom",
      feeDiscountNote: "Medalist rewards & fee waivers",
      ncertCoveragePercent: 100,
      mockTestsCount: 25,
      subjects: [
        {
          subject: "NSO Science",
          topics: ["HOTS Science Questions", "Achiever Section Practice"],
          hoursPerWeek: 3
        },
        {
          subject: "IMO Mathematics",
          topics: ["Logical Reasoning", "Mathematical Reasoning", "Everyday Math"],
          hoursPerWeek: 3
        }
      ],
      schedule: {
        classDays: "Weekend Special Batch",
        timing: "Saturday & Sunday Sessions",
        testDay: "Monthly National Mock",
        doubtSessions: "Dedicated Mentor Support"
      },
      highlightsList: [
        "Specialized Olympiad workbooks provided",
        "Past 10 years solved paper practice"
      ]
    },
    {
      id: "class-10-12-boards",
      title: "Class X & XII Board Milestone",
      category: "boards",
      badge: "Board Milestone",
      description: "Focused academic preparation for important board examinations with targeted strategy and answer writing techniques.",
      features: [
        "Exam-oriented syllabus completion",
        "Comprehensive revision strategy",
        "Sample papers & full-length mock exams",
        "One-on-one doubt solving & guidance"
      ],
      iconName: "Award",
      popular: false,
      tagline: "Score 95%+ in State Board & CBSE",
      targetExam: "HSC / SSC / CBSE Boards",
      batchStart: "Enrollment Open",
      duration: "Full Academic Session",
      mode: "Offline @ Kaij",
      feeDiscountNote: "Installment options available",
      ncertCoveragePercent: 100,
      mockTestsCount: 35,
      subjects: [
        {
          subject: "Physics & Chemistry",
          topics: ["Board Numericals", "Derivations & Definitions", "Diagram Practice"],
          hoursPerWeek: 6
        },
        {
          subject: "Biology / Mathematics",
          topics: ["Full Syllabus Chapter-wise Revision", "Sample Paper Drills"],
          hoursPerWeek: 6
        }
      ],
      schedule: {
        classDays: "Monday to Saturday",
        timing: "Morning / Evening Batches",
        testDay: "Weekly Written Board Pattern Test",
        doubtSessions: "Daily after batch"
      },
      highlightsList: [
        "Strict answer presentation techniques for board examiners",
        "Previous 15 year paper trends analysis"
      ]
    }
  ] as CourseItem[],

  whyChooseUs: [
    {
      id: "faculty",
      title: "Experienced Faculty",
      description: "Passionate teachers dedicated to explaining complex concepts in simple, relatable ways.",
      icon: "UserCheck"
    },
    {
      id: "concept",
      title: "Concept-Based Teaching",
      description: "We focus on real understanding rather than rote learning, fostering genuine curiosity.",
      icon: "Lightbulb"
    },
    {
      id: "personal",
      title: "Personal Attention",
      description: "Small batch monitoring ensures no student is left behind in comprehension.",
      icon: "Heart"
    },
    {
      id: "assessment",
      title: "Regular Assessments",
      description: "Weekly & monthly evaluation tests with clear feedback to monitor steady progress.",
      icon: "BarChart3"
    },
    {
      id: "doubts",
      title: "Doubt Solving Support",
      description: "Dedicated time slots after classes for individual doubt resolution and personal guidance.",
      icon: "HelpCircle"
    },
    {
      id: "exam-focused",
      title: "Exam-Focused Preparation",
      description: "Strategic exam patterns, time management practice, and mock test papers.",
      icon: "CheckSquare"
    }
  ],

  learningProcess: [
    {
      step: "01",
      title: "Learn",
      description: "Understand the concept clearly through interactive classroom instruction and visual explanations.",
      icon: "BookOpen"
    },
    {
      step: "02",
      title: "Practice",
      description: "Solve structured exercises and problem sets with guided teacher support.",
      icon: "Edit3"
    },
    {
      step: "03",
      title: "Test",
      description: "Attempt regular assessments and mock exams under exam-like conditions.",
      icon: "FileCheck"
    },
    {
      step: "04",
      title: "Analyse",
      description: "Review detailed performance feedback to pinpoint mistakes and identify weak areas.",
      icon: "TrendingUp"
    },
    {
      step: "05",
      title: "Improve",
      description: "Targeted revision, extra guidance, and continuous practice for guaranteed growth.",
      icon: "Zap"
    }
  ],

  stats: [
    {
      id: "students",
      value: "100+",
      numberValue: 100,
      suffix: "+",
      label: "Students Guided",
      sublabel: "Across academic & foundation batches",
      editableNote: "Easily editable in src/data/academyData.ts"
    },
    {
      id: "tests",
      value: "50+",
      numberValue: 50,
      suffix: "+",
      label: "Practice Tests",
      sublabel: "Conducting regular evaluation exams",
      editableNote: "Easily editable in src/data/academyData.ts"
    },
    {
      id: "experience",
      value: "10+",
      numberValue: 10,
      suffix: "+",
      label: "Years Experience",
      sublabel: "Of academic coaching leadership",
      editableNote: "Easily editable in src/data/academyData.ts"
    },
    {
      id: "programs",
      value: "Multiple",
      numberValue: 4,
      suffix: "+",
      label: "Specialized Programs",
      sublabel: "School, Foundation & Olympiad prep",
      editableNote: "Easily editable in src/data/academyData.ts"
    }
  ] as StatItem[],

  achievers: [
    {
      id: "a-neet-1",
      name: "Dr. Aishwarya Deshmukh",
      category: "neet",
      score: "675 / 720",
      badge: "GMC Mumbai Selection",
      exam: "NEET UG Medical Exam",
      photoUrl: "/images/gallery_events_1.jpg",
      quote: "100% NCERT line-by-line preparation at Awad Academy Kaij gave me 355/360 in Biology and secured my MBBS seat."
    },
    {
      id: "a-neet-2",
      name: "Prathamesh Kulkarni",
      category: "neet",
      score: "652 / 720",
      badge: "BJ Medical College Pune",
      exam: "NEET UG Medical Exam",
      photoUrl: "/images/gallery_events_2.jpg",
      quote: "Physics shortcut techniques and weekly OMR mock tests at Kaij center eliminated my exam anxiety."
    },
    {
      id: "a1",
      name: "Aditya Pawar",
      category: "boards",
      score: "98.4%",
      badge: "Class X Board Topper",
      exam: "Class X Board Examination",
      photoUrl: "/images/gallery_events_3.jpg",
      quote: "The regular weekly mock tests and personal guidance at Awad Academy Kaij helped me achieve top score."
    },
    {
      id: "a2",
      name: "Priyanka Patil",
      category: "olympiad",
      score: "Gold Medalist",
      badge: "National Rank 1",
      exam: "SOF Science Olympiad (NSO)",
      photoUrl: "/images/gallery_events_4.jpg",
      quote: "Conceptual clarity in Science and Mathematics made Olympiad problem solving extremely easy."
    },
    {
      id: "a3",
      name: "Rohan Shinde",
      category: "foundation",
      score: "97.8%",
      badge: "Class IX Rank 1",
      exam: "School Academic Excellence",
      photoUrl: "/images/gallery_events_5.jpg",
      quote: "Teacher guidance after class cleared all my doubts. My fundamentals in Physics and Math became super strong."
    },
    {
      id: "a4",
      name: "Karan Jagtap",
      category: "olympiad",
      score: "International Ranker",
      badge: "Math IMO Awardee",
      exam: "SOF International Math Olympiad",
      photoUrl: "/images/gallery_classroom_5.jpg",
      quote: "The HOTS problem practice sessions prepared me to compete at the national and international level."
    }
  ] as AchieverItem[],

  testimonials: [
    {
      id: "t1",
      quote: "Awad Educational Academy helped my child understand Science and Math concepts more clearly. The teachers give personal attention and regular test feedback.",
      author: "Suresh Deshmukh",
      role: "Parent of Class IX Student",
      rating: 5
    },
    {
      id: "t2",
      quote: "The Olympiad foundation batch made a huge difference in my logical reasoning skills. Practice test papers and teacher guidance boosted my confidence.",
      author: "Aditya Pawar",
      role: "Class X Student",
      rating: 5
    },
    {
      id: "t3",
      quote: "Best coaching academy in Kaij for school academics. Regular weekly tests keep students on track with their studies throughout the academic year.",
      author: "Meena Kulkarni",
      role: "Parent of Class VIII Student",
      rating: 5
    },
    {
      id: "t4",
      quote: "Clear concept teaching and friendly teachers who are always ready to clear doubts after class. Highly recommended for foundation preparation!",
      author: "Rohan Shinde",
      role: "Class IX Student",
      rating: 5
    }
  ] as TestimonialItem[],

  gallery: [
    {
      id: "g1",
      title: "Interactive Classroom Session",
      category: "classroom",
      imageUrl: "/images/gallery_classroom_5.jpg",
      caption: "Small batch size ensuring personalized student attention during lectures at Kaij."
    },
    {
      id: "g2",
      title: "Concept Whiteboard Teaching",
      category: "classroom",
      imageUrl: "/images/gallery_classroom_6.jpg",
      caption: "Teachers explaining complex science & math topics with clear step-by-step diagrams."
    },
    {
      id: "g3",
      title: "Active Student Discussion",
      category: "classroom",
      imageUrl: "/images/gallery_classroom_7.jpg",
      caption: "Engaged students participating in interactive problem-solving discussions."
    },
    {
      id: "g4",
      title: "Focused Academic Mentoring",
      category: "classroom",
      imageUrl: "/images/gallery_classroom_8.jpg",
      caption: "Disciplined academic environment promoting high concentration and clear understanding."
    },
    {
      id: "g5",
      title: "Olympiad Mock Exam Hall",
      category: "olympiad",
      imageUrl: "/images/gallery_olympiad_1.jpg",
      caption: "Students attempting timed Olympiad & competitive mock test papers."
    },
    {
      id: "g6",
      title: "Foundation Practice Session",
      category: "olympiad",
      imageUrl: "/images/gallery_olympiad_2.jpg",
      caption: "Higher-order thinking skill (HOTS) practice and competitive evaluation."
    },
    {
      id: "g7",
      title: "Timed Speed & Aptitude Test",
      category: "olympiad",
      imageUrl: "/images/gallery_olympiad_3.jpg",
      caption: "Regular weekly evaluations to build speed, accuracy, and exam stamina."
    },
    {
      id: "g8",
      title: "Competitive Exam Guidance",
      category: "olympiad",
      imageUrl: "/images/gallery_olympiad_4.jpg",
      caption: "Specialized paper strategy and doubt resolution for national Olympiad exams."
    },
    {
      id: "g9",
      title: "SOF Olympiad Prep Batch",
      category: "olympiad",
      imageUrl: "/images/gallery_olympiad_5.jpg",
      caption: "Targeted practice for Science (NSO), Math (IMO), and English (IEO) Olympiads."
    },
    {
      id: "g10",
      title: "Academic Honor Ceremony",
      category: "events",
      imageUrl: "/images/gallery_events_1.jpg",
      caption: "Recognizing top scorers and Olympiad achievers with awards & trophies."
    },
    {
      id: "g11",
      title: "Student Felicitations",
      category: "events",
      imageUrl: "/images/gallery_events_2.jpg",
      caption: "Celebrating student progress and academic achievements with faculty & parents."
    },
    {
      id: "g12",
      title: "Annual Excellence Awards",
      category: "events",
      imageUrl: "/images/gallery_events_3.jpg",
      caption: "Rewarding effort, consistency, and top performances in board & competitive exams."
    },
    {
      id: "g13",
      title: "Merit Certificate Distribution",
      category: "events",
      imageUrl: "/images/gallery_events_4.jpg",
      caption: "Distributing merit certificates to rank holders and top weekly test scorers."
    },
    {
      id: "g14",
      title: "Parent-Teacher Interactive Event",
      category: "events",
      imageUrl: "/images/gallery_events_5.jpg",
      caption: "Regular parent-faculty feedback meetings for individual student tracking."
    },
    {
      id: "g15",
      title: "Modern Kaij Center Campus",
      category: "infrastructure",
      imageUrl: "/images/gallery_infrastructure_1.jpg",
      caption: "Clean, well-lit, ventilated, and comfortable learning environment in Kaij."
    },
    {
      id: "g16",
      title: "Digital & Concept Whiteboards",
      category: "infrastructure",
      imageUrl: "/images/gallery_infrastructure_2.jpg",
      caption: "Equipped classrooms designed for optimal visual teaching and student comfort."
    },
    {
      id: "g17",
      title: "Quiet Study & Doubt Halls",
      category: "infrastructure",
      imageUrl: "/images/gallery_infrastructure_3.jpg",
      caption: "Dedicated spaces for quiet study, self-practice, and post-class doubt resolution."
    }
  ] as GalleryItem[],

  socialLinks: {
    whatsapp: "https://wa.me/919422105262",
    instagram: "https://www.instagram.com/awadeducationalacademy/",
    facebook: "https://www.facebook.com/awadeducationalacademy/",
    youtube: "http://www.youtube.com/@awadeducationalacademyaea5913"
  }
};
