// lib/projects.ts

// --- Types ---
export interface ProjectFile {
  name: string;
  url: string;
  type: string;
  size?: string;
}

export interface DemoLink {
  type: 'app' | 'web';
  url: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'app' | 'web';
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  bgGradient: string;
  image: string;
  features: string[];
  color: string;
  demoLinks: DemoLink[];
  projectFile?: ProjectFile;
  featured?: boolean;
}

// --- Project Data ---
export const projects: Project[] = [
  // ==================== 🆕 1. Nursing Care ====================
  {
    id: 1,
    title: "Nursing Care",
    category: 'web',
    shortDesc: "Professional nursing & home care service platform",
    fullDesc:
      "A complete nursing care management platform connecting patients with certified nurses, caretakers, and home-care attendants. Features include nurse booking, shift scheduling, patient health records, service packages, and secure online payment with 24/7 emergency support.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe"],
    bgGradient: "from-teal-600 to-emerald-600",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    features: [
      "Certified Nurse & Caretaker Booking",
      "Shift & Duty Scheduling",
      "Patient Health Record Management",
      "Service Packages (Daily / Weekly / Monthly)",
      "24/7 Emergency Support",
      "Secure Online Payment",
      "Nurse Rating & Review",
      "Live Service Tracking"
    ],
    color: "teal",
    demoLinks: [
      { type: 'web', url: 'https://nursing-care.bdsoft.org/', label: 'Live Website' },
      { type: 'web', url: '#', label: 'Admin Panel' }
    ],
    projectFile: {
      name: "Nursing_Care_Overview.pdf",
      url: "/projects/nursing-care.pdf",
      type: "application/pdf",
      size: "2.6 MB"
    }
  },

  // ==================== 🆕 2. Electric Services ====================
  {
    id: 2,
    title: "Electric Services",
    category: 'web',
    shortDesc: "On-demand electrician & electrical service booking",
    fullDesc:
      "A modern electrician service booking platform (SparQ) where customers can book verified electricians for home & office electrical work. Features include instant booking, live technician tracking, service warranty, cost estimation, and secure payment.",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Google Maps", "SSLCommerz"],
    bgGradient: "from-yellow-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
    features: [
      "Instant Electrician Booking",
      "Verified & Certified Technicians",
      "Live Technician Tracking",
      "Cost Estimation Tool",
      "Service Warranty & Guarantee",
      "Multiple Payment Methods",
      "Customer Rating & Feedback",
      "Emergency 24/7 Service"
    ],
    color: "orange",
    demoLinks: [
      { type: 'web', url: 'https://sparq.bdsoft.org/', label: 'Live Website' },
      { type: 'web', url: '#', label: 'Admin Panel' }
    ],
    projectFile: {
      name: "Electric_Services_Guide.pdf",
      url: "/projects/electric-services.pdf",
      type: "application/pdf",
      size: "2.4 MB"
    }
  },

  // ==================== 🆕 3. Hajj & Umrah ====================
  {
    id: 3,
    title: "Hajj & Umrah",
    category: 'web',
    shortDesc: "Complete Hajj & Umrah package management system",
    fullDesc:
      "A comprehensive Hajj & Umrah management portal for pilgrims and travel agencies. Features include package booking, group management, visa processing, flight & hotel booking, guide assignment, and real-time pilgrimage tracking.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    bgGradient: "from-green-700 to-emerald-800",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=400&fit=crop",
    features: [
      "Hajj & Umrah Package Booking",
      "Group & Family Management",
      "Visa Processing Assistance",
      "Flight & Hotel Booking Integration",
      "Certified Guide Assignment",
      "Real-time Pilgrim Tracking",
      "Digital Document Management",
      "Multi-language Support (Arabic/English/Bangla)"
    ],
    color: "green",
    demoLinks: [
      { type: 'web', url: 'https://hajj-umrah.bdsoft.org/', label: 'Live Website' },
      { type: 'web', url: '#', label: 'Admin Panel' }
    ],
    projectFile: {
      name: "Hajj_Umrah_System_Docs.pdf",
      url: "/projects/hajj-umrah.pdf",
      type: "application/pdf",
      size: "2.8 MB"
    }
  },

  // ==================== APP Projects ====================
  {
    id: 4,
    title: "Student Support APP",
    category: 'app',
    shortDesc: "Comprehensive school/college management system",
    fullDesc: "A complete ecosystem for educational institutions that streamlines admissions, academics, finance, and communication. Features include exam management, attendance tracking, online classes, parental communication, and homework submission with live editing capabilities. Built with modern Kotlin and KMP for cross-platform compatibility.",
    techStack: ["Kotlin", "Jetpack Compose", "KMP", "Android", "iOS", "MacOS", "Linux"],
    bgGradient: "from-blue-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    features: [
      "Student Admission & Admit Card Download",
      "Exam Updates (Routine, Semester, Results)",
      "Class Monitoring with Daily Updates",
      "Financial Updates & Multiple Payment Gateways",
      "Attendance Monitoring System",
      "Online Classes Integration",
      "Parental Chat Box",
      "Homework Submit & Live Edit"
    ],
    color: "blue",
    demoLinks: [
      { type: 'app', url: '#', label: 'Android App Demo' },
      { type: 'web', url: '#', label: 'Web Dashboard Demo' }
    ],
    projectFile: {
      name: "Student_Support_APP_Overview.pdf",
      url: "/projects/student-support-app.pdf",
      type: "application/pdf",
      size: "2.5 MB"
    }
  },
  {
    id: 5,
    title: "Mobile Banking System",
    category: 'app',
    shortDesc: "High security, quick transactions, financial oversight",
    fullDesc: "Enterprise-grade mobile banking solution with biometric authentication, real-time transactions, bill payments, and comprehensive account management. Features advanced security protocols and instant fund transfers. Built with Kotlin Multiplatform for seamless cross-platform experience.",
    techStack: ["Kotlin", "Jetpack Compose", "KMP", "iOS", "MacOS", "Security"],
    bgGradient: "from-cyan-600 to-blue-600",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    features: [
      "Multi-Account Management & Balance Overview",
      "Instant Fund Transfer & Beneficiary Management",
      "Bill Payments with QR Code Scanning",
      "Scheduled Recurring Payments",
      "Card Freeze & PIN Change",
      "Fraud Detection & Reporting",
      "Transaction History & Statements",
      "Biometric Authentication"
    ],
    color: "cyan",
    demoLinks: [
      { type: 'app', url: '#', label: 'Mobile Banking App' },
      { type: 'web', url: '#', label: 'Admin Web Portal' }
    ],
    projectFile: {
      name: "Mobile_Banking_System_Specs.pdf",
      url: "/projects/mobile-banking-system.pdf",
      type: "application/pdf",
      size: "2.8 MB"
    }
  },
  {
    id: 6,
    title: "Hardware Helping Service",
    category: 'app',
    shortDesc: "Book technicians, diagnose issues, order parts",
    fullDesc: "On-demand hardware support platform connecting users with certified technicians for troubleshooting, repairs, and parts replacement. Features remote diagnostics, live chat support, and real-time technician tracking. Cross-platform app for all devices.",
    techStack: ["Kotlin", "Jetpack Compose", "KMP", "WebSocket", "Android", "iOS"],
    bgGradient: "from-orange-600 to-red-600",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    features: [
      "Service Booking with Time Slot Selection",
      "AI-Powered Diagnostic Tool",
      "Parts Inventory & Order Tracking",
      "Remote Support with Screen Sharing",
      "Technician Rating System",
      "Real-time Chat Support",
      "Warranty Check & Claim",
      "Push Notifications"
    ],
    color: "orange",
    demoLinks: [
      { type: 'app', url: '#', label: 'Customer App' },
      { type: 'web', url: '#', label: 'Technician Portal' }
    ],
    projectFile: {
      name: "Hardware_Helping_Service_Guide.pdf",
      url: "/projects/hardware-helping-service.pdf",
      type: "application/pdf",
      size: "2.3 MB"
    }
  },
  {
    id: 7,
    title: "Doctor Appointment System",
    category: 'app',
    shortDesc: "Book doctors, video consult, manage prescriptions",
    fullDesc: "A complete healthcare booking platform connecting patients with verified doctors. Features include real-time slot booking, video consultations, digital prescriptions, medical history tracking, and medicine reminders. Built with Kotlin Multiplatform for seamless Android, iOS, and desktop experience.",
    techStack: ["Kotlin", "Jetpack Compose", "KMP", "WebRTC", "Firebase", "Android", "iOS"],
    bgGradient: "from-teal-600 to-cyan-600",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    features: [
      "Doctor Search by Specialization & Location",
      "Real-time Slot Booking & Rescheduling",
      "Video Consultation with WebRTC",
      "Digital Prescription Generation",
      "Medical History & Report Storage",
      "Medicine Reminder Notifications",
      "Lab Test Booking Integration",
      "Insurance Claim Support"
    ],
    color: "teal",
    demoLinks: [
      { type: 'app', url: '#', label: 'Patient App' },
      { type: 'web', url: '#', label: 'Doctor Dashboard' }
    ],
    projectFile: {
      name: "Doctor_Appointment_System_Overview.pdf",
      url: "/projects/doctor-appointment-system.pdf",
      type: "application/pdf",
      size: "2.6 MB"
    }
  },
  {
    id: 8,
    title: "Food Delivery Platform",
    category: 'app',
    shortDesc: "Order food, live tracking, multi-restaurant support",
    fullDesc: "On-demand food delivery ecosystem connecting customers, restaurants, and delivery partners. Features real-time order tracking, multi-restaurant cart, dynamic pricing, and integrated payment gateways with live rider location updates.",
    techStack: ["Kotlin", "Jetpack Compose", "KMP", "Google Maps", "WebSocket", "Stripe"],
    bgGradient: "from-red-600 to-orange-600",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    features: [
      "Multi-Restaurant Cart & Ordering",
      "Live Rider Tracking on Map",
      "Real-time Order Status Updates",
      "Multiple Payment Options (Card, Wallet, COD)",
      "Restaurant Ratings & Reviews",
      "Coupon & Discount Engine",
      "Push Notifications for Offers",
      "Order History & Reorder"
    ],
    color: "red",
    demoLinks: [
      { type: 'app', url: '#', label: 'Customer App' },
      { type: 'app', url: '#', label: 'Rider App' },
      { type: 'web', url: '#', label: 'Restaurant Panel' }
    ],
    projectFile: {
      name: "Food_Delivery_Platform_Guide.pdf",
      url: "/projects/food-delivery-platform.pdf",
      type: "application/pdf",
      size: "3.2 MB"
    }
  },
  {
    id: 9,
    title: "Fitness & Workout Tracker",
    category: 'app',
    shortDesc: "Track workouts, diet plans, and health metrics",
    fullDesc: "Comprehensive fitness companion tracking workouts, calories, sleep, and hydration. Features AI-powered workout plans, real-time heart rate monitoring via wearables, and social challenges with friends.",
    techStack: ["Kotlin", "Jetpack Compose", "KMP", "HealthKit", "Google Fit", "WearOS"],
    bgGradient: "from-lime-600 to-green-600",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    features: [
      "AI-Powered Personalized Workout Plans",
      "Real-time Heart Rate via Wearables",
      "Calorie & Macro Tracking",
      "Sleep & Hydration Monitoring",
      "Step Counter & GPS Running Tracker",
      "Social Challenges with Friends",
      "Progress Charts & Body Measurements",
      "Diet Plan Recommendations"
    ],
    color: "lime",
    demoLinks: [
      { type: 'app', url: '#', label: 'Android App' },
      { type: 'app', url: '#', label: 'WearOS Companion' }
    ],
    projectFile: {
      name: "Fitness_Tracker_Documentation.pdf",
      url: "/projects/fitness-tracker.pdf",
      type: "application/pdf",
      size: "2.4 MB"
    }
  },
  {
    id: 10,
    title: "Ride Sharing Platform",
    category: 'app',
    shortDesc: "Book rides, track drivers, cashless payments",
    fullDesc: "Uber-like ride hailing platform with real-time GPS tracking, fare estimation, driver rating, and multiple ride categories (bike, car, premium). Features SOS emergency button and trip sharing with family.",
    techStack: ["Kotlin", "Jetpack Compose", "KMP", "Google Maps", "Socket.io", "Razorpay"],
    bgGradient: "from-indigo-600 to-blue-600",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
    features: [
      "Real-time GPS Tracking",
      "Multiple Ride Categories (Bike/Car/Premium)",
      "Instant Fare Estimation",
      "Cashless Payment & Wallet",
      "Driver Rating & Feedback",
      "SOS Emergency Button",
      "Trip Sharing with Family",
      "Scheduled Rides & Ride History"
    ],
    color: "indigo",
    demoLinks: [
      { type: 'app', url: '#', label: 'Rider App' },
      { type: 'app', url: '#', label: 'Driver App' },
      { type: 'web', url: '#', label: 'Admin Panel' }
    ],
    projectFile: {
      name: "Ride_Sharing_Platform_Specs.pdf",
      url: "/projects/ride-sharing.pdf",
      type: "application/pdf",
      size: "3.0 MB"
    }
  },
  {
    id: 11,
    title: "Multi-Vendor E-Commerce App",
    category: 'app',
    shortDesc: "Shop across vendors, AR try-on, instant checkout",
    fullDesc: "Feature-rich mobile shopping app with multi-vendor support, AR product preview, wishlist sync, and one-click checkout. Includes live order tracking, easy returns, and personalized recommendations.",
    techStack: ["Kotlin", "Jetpack Compose", "KMP", "ARCore", "Stripe", "Algolia"],
    bgGradient: "from-fuchsia-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop",
    features: [
      "Multi-Vendor Marketplace",
      "AR Product Try-On (ARCore)",
      "AI-Powered Recommendations",
      "Wishlist & Cart Sync Across Devices",
      "One-Click Checkout",
      "Live Order Tracking",
      "Easy Returns & Refunds",
      "Loyalty Points & Rewards"
    ],
    color: "fuchsia",
    demoLinks: [
      { type: 'app', url: '#', label: 'Customer App' },
      { type: 'app', url: '#', label: 'Vendor App' },
      { type: 'web', url: '#', label: 'Seller Dashboard' }
    ],
    projectFile: {
      name: "ECommerce_App_Overview.pdf",
      url: "/projects/ecommerce-app.pdf",
      type: "application/pdf",
      size: "3.4 MB"
    }
  },

  // ==================== WEB Projects ====================
  {
    id: 12,
    title: "Study Management System",
    category: 'web',
    shortDesc: "Organize academic life, track progress, and manage resources",
    fullDesc: "A powerful academic management platform that helps students organize their study materials, track assignments, monitor performance, and access learning resources efficiently. Features intelligent course planning and detailed analytics with real-time collaboration.",
    techStack: ["React", "Next.js", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
    bgGradient: "from-emerald-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    features: [
      "Course Planner with Syllabus Upload",
      "Resource Library with Bookmarking",
      "Assignment Tracker with Deadline Reminders",
      "Performance Analytics & GPA Trends",
      "Progress Report Generation",
      "Study Goal Setting",
      "Notes Download & Sharing",
      "Real-time Collaboration"
    ],
    color: "emerald",
    demoLinks: [
      { type: 'web', url: '#', label: 'Student Dashboard' },
      { type: 'web', url: '#', label: 'Admin Panel' }
    ],
    projectFile: {
      name: "Study_Management_System_Documentation.pdf",
      url: "/projects/study-management-system.pdf",
      type: "application/pdf",
      size: "3.1 MB"
    }
  },
  {
    id: 13,
    title: "Construction Development Site",
    category: 'web',
    shortDesc: "Track building progress for managers and clients",
    fullDesc: "Comprehensive construction management platform enabling project managers, contractors, and clients to track progress, manage resources, and ensure safety compliance. Features real-time updates and detailed analytics with cloud integration.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "Tailwind CSS"],
    bgGradient: "from-amber-600 to-yellow-600",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
    features: [
      "Project Timeline with Gantt Charts",
      "Labor Management & Timesheet Approval",
      "Material Tracking & Inventory Management",
      "Site Safety Inspections & Compliance",
      "Milestone Tracking & Deadline Management",
      "Cost Estimation & Budget Tracking",
      "Real-time Progress Reports",
      "Cloud Document Storage"
    ],
    color: "amber",
    demoLinks: [
      { type: 'web', url: '#', label: 'Client Portal' },
      { type: 'web', url: '#', label: 'Manager Dashboard' }
    ],
    projectFile: {
      name: "Construction_Management_System_Overview.pdf",
      url: "/projects/construction-management.pdf",
      type: "application/pdf",
      size: "3.5 MB"
    }
  },
  {
    id: 14,
    title: "E-Learning Platform",
    category: 'web',
    shortDesc: "Interactive online learning with live classes and assessments",
    fullDesc: "Modern e-learning platform featuring live streaming classes, interactive quizzes, progress tracking, and certification management. Built with modern web technologies for optimal performance.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redis"],
    bgGradient: "from-rose-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    features: [
      "Live Streaming Classes",
      "Interactive Quizzes & Assessments",
      "Progress Tracking & Analytics",
      "Certificate Generation",
      "Discussion Forums",
      "Video Library",
      "Mobile Responsive Design",
      "Payment Integration"
    ],
    color: "rose",
    demoLinks: [
      { type: 'web', url: '#', label: 'Student Portal' },
      { type: 'web', url: '#', label: 'Instructor Dashboard' }
    ],
    projectFile: {
      name: "E-Learning_Platform_Guide.pdf",
      url: "/projects/elearning-platform.pdf",
      type: "application/pdf",
      size: "2.9 MB"
    }
  },
  {
    id: 15,
    title: "Real Estate Listing Portal",
    category: 'web',
    shortDesc: "List, search, and tour properties virtually",
    fullDesc: "Comprehensive property listing platform with advanced search filters, virtual 360° tours, mortgage calculator, and agent-buyer chat. Features map-based search and price trend analytics.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Mapbox", "Prisma", "Three.js"],
    bgGradient: "from-sky-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    features: [
      "Advanced Search with Map Filters",
      "360° Virtual Property Tours",
      "Mortgage Calculator",
      "Agent-Buyer Real-time Chat",
      "Price Trend Analytics",
      "Saved Searches & Alerts",
      "Property Comparison Tool",
      "Document Verification System"
    ],
    color: "sky",
    demoLinks: [
      { type: 'web', url: '#', label: 'Buyer Portal' },
      { type: 'web', url: '#', label: 'Agent Dashboard' }
    ],
    projectFile: {
      name: "Real_Estate_Portal_Docs.pdf",
      url: "/projects/real-estate-portal.pdf",
      type: "application/pdf",
      size: "3.3 MB"
    }
  },
  {
    id: 16,
    title: "Hospital Management System",
    category: 'web',
    shortDesc: "Manage patients, staff, billing, and inventory",
    fullDesc: "Enterprise hospital ERP handling patient records, doctor scheduling, pharmacy inventory, lab reports, and billing. Features role-based access control and HIPAA-compliant data storage.",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    bgGradient: "from-green-600 to-emerald-600",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    features: [
      "Patient Registration & EMR",
      "Doctor Scheduling & Appointments",
      "Pharmacy Inventory Management",
      "Lab Report Integration",
      "Automated Billing & Insurance",
      "Role-Based Access Control",
      "Staff Attendance & Payroll",
      "Analytics Dashboard"
    ],
    color: "green",
    demoLinks: [
      { type: 'web', url: '#', label: 'Admin Panel' },
      { type: 'web', url: '#', label: 'Doctor Portal' }
    ],
    projectFile: {
      name: "Hospital_Management_System.pdf",
      url: "/projects/hospital-management.pdf",
      type: "application/pdf",
      size: "4.1 MB"
    }
  },
  {
    id: 17,
    title: "Social Media Analytics Dashboard",
    category: 'web',
    shortDesc: "Track engagement across all social platforms",
    fullDesc: "Unified analytics dashboard connecting Facebook, Instagram, Twitter, LinkedIn, and YouTube. Features post scheduling, competitor analysis, sentiment tracking, and automated reporting.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Chart.js", "OpenAI API", "Tailwind CSS"],
    bgGradient: "from-pink-600 to-rose-600",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    features: [
      "Multi-Platform Integration",
      "Post Scheduling & Auto-Publishing",
      "Engagement Analytics & Charts",
      "Competitor Benchmarking",
      "AI Sentiment Analysis",
      "Automated PDF Reports",
      "Hashtag Performance Tracker",
      "Team Collaboration Tools"
    ],
    color: "pink",
    demoLinks: [
      { type: 'web', url: '#', label: 'Analytics Dashboard' },
      { type: 'web', url: '#', label: 'Scheduler Panel' }
    ],
    projectFile: {
      name: "Social_Analytics_Dashboard.pdf",
      url: "/projects/social-analytics.pdf",
      type: "application/pdf",
      size: "2.7 MB"
    }
  },
  {
    id: 18,
    title: "Freelancing Marketplace",
    category: 'web',
    shortDesc: "Connect freelancers with clients, secure payments",
    fullDesc: "Upwork/Fiverr-style marketplace with escrow payment system, milestone tracking, dispute resolution, and skill-based matching. Features video portfolio and instant messaging.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe Connect", "Socket.io", "AWS S3"],
    bgGradient: "from-violet-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    features: [
      "Escrow Payment System",
      "Milestone-Based Project Tracking",
      "Dispute Resolution Center",
      "AI Skill-Based Matching",
      "Video Portfolio Showcase",
      "Real-time Messaging",
      "Time Tracking & Invoicing",
      "Multi-Currency Support"
    ],
    color: "violet",
    demoLinks: [
      { type: 'web', url: '#', label: 'Freelancer Portal' },
      { type: 'web', url: '#', label: 'Client Dashboard' }
    ],
    projectFile: {
      name: "Freelancing_Marketplace_Specs.pdf",
      url: "/projects/freelancing-marketplace.pdf",
      type: "application/pdf",
      size: "3.6 MB"
    }
  },
  {
    id: 19,
    title: "Restaurant POS & Management",
    category: 'web',
    shortDesc: "Order taking, kitchen display, inventory tracking",
    fullDesc: "Complete restaurant management suite with POS terminal, kitchen display system (KDS), table management, and inventory tracking. Features offline mode and multi-branch support.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "PWA"],
    bgGradient: "from-yellow-600 to-orange-600",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    features: [
      "Touch-Optimized POS Terminal",
      "Kitchen Display System (KDS)",
      "Table & Floor Management",
      "Real-time Inventory Tracking",
      "Multi-Branch Support",
      "Offline Mode with Sync",
      "Daily Sales & Revenue Reports",
      "Staff Shift & Tip Management"
    ],
    color: "yellow",
    demoLinks: [
      { type: 'web', url: '#', label: 'POS Terminal' },
      { type: 'web', url: '#', label: 'Kitchen Display' },
      { type: 'web', url: '#', label: 'Admin Dashboard' }
    ],
    projectFile: {
      name: "Restaurant_POS_System_Guide.pdf",
      url: "/projects/restaurant-pos.pdf",
      type: "application/pdf",
      size: "3.8 MB"
    }
  }
];

// --- Helper Functions ---
export const getAppProjects = () => projects.filter(p => p.category === 'app');
export const getWebProjects = () => projects.filter(p => p.category === 'web');
export const getProjectById = (id: number) => projects.find(p => p.id === id);
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getSortedProjects = () =>
  [...projects].sort(
    (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
  );