// components/ProjectsSection.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Globe,
  Smartphone,
  X
} from 'lucide-react';
import { useState, CSSProperties } from 'react';

// --- Types ---
interface ProjectFile {
  name: string;
  url: string;
  type: string;
  size?: string;
}

interface DemoLink {
  type: 'app' | 'web';
  url: string;
  label: string;
}

interface Project {
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
}

// --- Project Data ---
const projects: Project[] = [
  // APP Projects
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  // WEB Projects
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
  }
];

// --- Project Card Component ---
interface ProjectCardProps {
  project: Project;
  index: number;
  onHover: (project: Project | null) => void;
}

const ProjectCard = ({ project, index, onHover }: ProjectCardProps) => {
  const getIcon = () => {
    if (project.category === 'app') {
      return <Smartphone className="w-5 h-5 text-purple-400" />;
    }
    return <Globe className="w-5 h-5 text-emerald-400" />;
  };

  const getCategoryColor = () => {
    return project.category === 'app' 
      ? 'bg-linear-to-r from-purple-500 to-pink-500'
      : 'bg-linear-to-r from-emerald-500 to-teal-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="relative group cursor-pointer"
      onClick={() => onHover(project)}
    >
      <motion.div
        className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${project.bgGradient} p-px`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-80 rounded-2xl bg-gray-900/90 backdrop-blur-sm p-6 flex flex-col justify-between">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor()}`}>
              {project.category === 'app' ? <Smartphone size={12} /> : <Globe size={12} />}
              {project.category === 'app' ? 'APP' : 'WEB'}
            </span>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-4">
              <div className={`inline-flex p-2 rounded-lg bg-${project.color}-500/20 backdrop-blur-sm mb-3`}>
                {getIcon()}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm line-clamp-2">{project.shortDesc}</p>
            </div>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.slice(0, 4).map((tech: string, idx: number) => (
                <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          </div>
          
          {/* Hover Indicator */}
          <div className="relative z-10 flex justify-end">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Fullscreen Modal Component ---
interface FullscreenModalProps {
  project: Project;
  onClose: () => void;
}

const FullscreenModal = ({ project, onClose }: FullscreenModalProps) => {
  const [showFileViewer, setShowFileViewer] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl h-[85vh] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="h-full overflow-y-auto">
          {/* Hero Section */}
          <div className={`relative h-64 bg-linear-to-r ${project.bgGradient}`}>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent" />
            <div className="relative z-10 h-full flex items-end p-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${
                    project.category === 'app' 
                      ? 'bg-linear-to-r from-purple-500 to-pink-500'
                      : 'bg-linear-to-r from-emerald-500 to-teal-500'
                  }`}>
                    {project.category === 'app' ? <Smartphone size={12} /> : <Globe size={12} />}
                    {project.category === 'app' ? 'APP PROTOTYPE' : 'WEB PROTOTYPE'}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 text-lg">{project.shortDesc}</p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left Column - Description & Features */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">About Project</h3>
                  <p className="text-gray-400 leading-relaxed">{project.fullDesc}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Tech Stack & Actions */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Demos */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Live Prototypes</h3>
                  <div className="space-y-3">
                    {project.demoLinks.map((demo, idx) => (
                      <motion.a
                        key={idx}
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center justify-between gap-2 w-full px-4 py-3 rounded-xl text-white font-semibold transition-all hover:shadow-lg ${
                          demo.type === 'app'
                            ? 'bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                            : 'bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {demo.type === 'app' ? <Smartphone size={18} /> : <Globe size={18} />}
                          <span>{demo.label}</span>
                        </div>
                        <ExternalLink size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Project Files */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Project Files</h3>
                  {project.projectFile && (
                    <div className="space-y-3">
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <div className="flex items-center gap-3 mb-3">
                          <FileText className="w-8 h-8 text-blue-400" />
                          <div className="flex-1">
                            <p className="text-white font-medium">{project.projectFile.name}</p>
                            <p className="text-gray-400 text-sm">{project.projectFile.size}</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <motion.a
                            href={project.projectFile.url}
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 transition-all"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </motion.a>
                          <motion.button
                            onClick={() => setShowFileViewer(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-gray-700 rounded-lg text-white text-sm font-semibold hover:bg-gray-600 transition-all"
                          >
                            <Eye className="w-4 h-4" />
                            Preview
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="pt-4 border-t border-gray-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{project.features.length}</div>
                      <div className="text-xs text-gray-500">Features</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{project.techStack.length}</div>
                      <div className="text-xs text-gray-500">Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* File Viewer Modal */}
      <AnimatePresence>
        {showFileViewer && project.projectFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setShowFileViewer(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[80vh] bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowFileViewer(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
              
              <iframe
                src={project.projectFile.url}
                className="w-full h-full"
                title={project.projectFile.name}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main Section Component ---
interface ProjectsSectionProps {
  showHeader?: boolean;
  maxHeight?: string;
  isEmbedded?: boolean;
}

export default function ProjectsSection({ 
  showHeader = true, 
  maxHeight = "none",
  isEmbedded = false
}: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'app' | 'web'>('all');

  const filteredProjects = projects.filter(project =>
    activeCategory === 'all' ? true : project.category === activeCategory
  );

  const appProjects = filteredProjects.filter(p => p.category === 'app');
  const webProjects = filteredProjects.filter(p => p.category === 'web');

  // Build container style properly for TypeScript
  const containerStyle: CSSProperties = {};
  if (maxHeight !== "none") {
    containerStyle.maxHeight = maxHeight;
    containerStyle.overflowY = "auto";
  }

  return (
    <div className="relative">
      {/* Header */}
      {showHeader && (
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Explore our innovative solutions across mobile and web platforms
            </p>
          </motion.div>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeCategory === 'all'
              ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              : isEmbedded 
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveCategory('app')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
            activeCategory === 'app'
              ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              : isEmbedded 
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <Smartphone size={18} />
          App Prototypes
        </button>
        <button
          onClick={() => setActiveCategory('web')}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
            activeCategory === 'web'
              ? 'bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
              : isEmbedded 
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <Globe size={18} />
          Web Prototypes
        </button>
      </div>

      {/* Projects Grid - Scrollable Container */}
      <div style={containerStyle} className="pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
        {/* App Projects */}
        {appProjects.length > 0 && (activeCategory === 'all' || activeCategory === 'app') && (
          <div className="mb-12">
            {(activeCategory === 'all') && (
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-linear-to-b from-purple-500 to-pink-500 rounded-full" />
                <h2 className={`text-2xl font-bold flex items-center gap-2 ${isEmbedded ? 'text-slate-800' : 'text-white'}`}>
                  <Smartphone className={isEmbedded ? 'text-purple-600' : 'text-purple-400'} />
                  App Prototypes
                </h2>
                <p className={isEmbedded ? 'text-slate-500 hidden md:inline' : 'text-gray-400 hidden md:inline'}>
                  Built with Kotlin, Jetpack Compose & KMP
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onHover={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}

        {/* Web Projects */}
        {webProjects.length > 0 && (activeCategory === 'all' || activeCategory === 'web') && (
          <div>
            {(activeCategory === 'all') && (
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-linear-to-b from-emerald-500 to-teal-500 rounded-full" />
                <h2 className={`text-2xl font-bold flex items-center gap-2 ${isEmbedded ? 'text-slate-800' : 'text-white'}`}>
                  <Globe className={isEmbedded ? 'text-emerald-600' : 'text-emerald-400'} />
                  Web Prototypes
                </h2>
                <p className={isEmbedded ? 'text-slate-500 hidden md:inline' : 'text-gray-400 hidden md:inline'}>
                  Built with React, Next.js, Node.js & Modern Stack
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onHover={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <FullscreenModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}