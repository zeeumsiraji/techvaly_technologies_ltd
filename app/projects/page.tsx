'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  BookOpen,
  Activity,
  CreditCard,
  Cpu,
  Building,
  CheckCircle,
  ArrowRight,
  FileText,
  Download,
  Eye
} from 'lucide-react';

// Types
interface ProjectFile {
  name: string;
  url: string;
  type: string;
  size?: string;
}

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  bgGradient: string;
  image: string;
  features: string[];
  color: string;
  demoLink: string;
  projectFile?: ProjectFile;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onHover: (project: Project | null) => void;
}

interface FullscreenModalProps {
  project: Project;
  onClose: () => void;
}

// Project Data with Files
const projects: Project[] = [
  {
    id: 1,
    title: "Student Support APP",
    shortDesc: "Comprehensive school/college management system",
    fullDesc: "A complete ecosystem for educational institutions that streamlines admissions, academics, finance, and communication. Features include exam management, attendance tracking, online classes, parental communication, and homework submission with live editing capabilities.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
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
    demoLink: "#",
    projectFile: {
      name: "Student_Support_APP_Overview.pdf",
      url: "/projects/student-support-app.pdf",
      type: "application/pdf",
      size: "2.5 MB"
    }
  },
  {
    id: 2,
    title: "Study Management System",
    shortDesc: "Organize academic life, track progress, and manage resources",
    fullDesc: "A powerful academic management platform that helps students organize their study materials, track assignments, monitor performance, and access learning resources efficiently. Features intelligent course planning and detailed analytics.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    bgGradient: "from-emerald-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    features: [
      "Course Planner with Syllabus Upload",
      "Resource Library with Bookmarking",
      "Assignment Tracker with Deadline Reminders",
      "Performance Analytics & GPA Trends",
      "Progress Report Generation",
      "Study Goal Setting",
      "Notes Download & Sharing"
    ],
    color: "emerald",
    demoLink: "#",
    projectFile: {
      name: "Study_Management_System_Documentation.pdf",
      url: "/projects/study-management-system.pdf",
      type: "application/pdf",
      size: "3.1 MB"
    }
  },
  {
    id: 3,
    title: "Mobile Banking System",
    shortDesc: "High security, quick transactions, financial oversight",
    fullDesc: "Enterprise-grade mobile banking solution with biometric authentication, real-time transactions, bill payments, and comprehensive account management. Features advanced security protocols and instant fund transfers.",
    techStack: ["React Native", "Node.js", "Redis", "PostgreSQL", "AWS"],
    bgGradient: "from-cyan-600 to-blue-600",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    features: [
      "Multi-Account Management & Balance Overview",
      "Instant Fund Transfer & Beneficiary Management",
      "Bill Payments with QR Code Scanning",
      "Scheduled Recurring Payments",
      "Card Freeze & PIN Change",
      "Fraud Detection & Reporting",
      "Transaction History & Statements"
    ],
    color: "cyan",
    demoLink: "#",
    projectFile: {
      name: "Mobile_Banking_System_Specs.pdf",
      url: "/projects/mobile-banking-system.pdf",
      type: "application/pdf",
      size: "2.8 MB"
    }
  },
  {
    id: 4,
    title: "Hardware Helping Service",
    shortDesc: "Book technicians, diagnose issues, order parts",
    fullDesc: "On-demand hardware support platform connecting users with certified technicians for troubleshooting, repairs, and parts replacement. Features remote diagnostics, live chat support, and real-time technician tracking.",
    techStack: ["Vue.js", "Django", "WebSocket", "PostgreSQL", "Docker"],
    bgGradient: "from-orange-600 to-red-600",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    features: [
      "Service Booking with Time Slot Selection",
      "AI-Powered Diagnostic Tool",
      "Parts Inventory & Order Tracking",
      "Remote Support with Screen Sharing",
      "Technician Rating System",
      "Real-time Chat Support",
      "Warranty Check & Claim"
    ],
    color: "orange",
    demoLink: "#",
    projectFile: {
      name: "Hardware_Helping_Service_Guide.pdf",
      url: "/projects/hardware-helping-service.pdf",
      type: "application/pdf",
      size: "2.3 MB"
    }
  },
  {
    id: 5,
    title: "Construction Development Site",
    shortDesc: "Track building progress for managers and clients",
    fullDesc: "Comprehensive construction management platform enabling project managers, contractors, and clients to track progress, manage resources, and ensure safety compliance. Features real-time updates and detailed analytics.",
    techStack: ["React", "Firebase", "Material-UI", "Chart.js", "Redux"],
    bgGradient: "from-amber-600 to-yellow-600",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
    features: [
      "Project Timeline with Gantt Charts",
      "Labor Management & Timesheet Approval",
      "Material Tracking & Inventory Management",
      "Site Safety Inspections & Compliance",
      "Milestone Tracking & Deadline Management",
      "Cost Estimation & Budget Tracking",
      "Real-time Progress Reports"
    ],
    color: "amber",
    demoLink: "#",
    projectFile: {
      name: "Construction_Management_System_Overview.pdf",
      url: "/projects/construction-management.pdf",
      type: "application/pdf",
      size: "3.5 MB"
    }
  }
];

// Card Component
const ProjectCard = ({ project, index, onHover }: ProjectCardProps) => {
  const getIcon = () => {
    switch(project.id) {
      case 1: return <BookOpen className="w-5 h-5 text-blue-400" />;
      case 2: return <Activity className="w-5 h-5 text-emerald-400" />;
      case 3: return <CreditCard className="w-5 h-5 text-cyan-400" />;
      case 4: return <Cpu className="w-5 h-5 text-orange-400" />;
      case 5: return <Building className="w-5 h-5 text-amber-400" />;
      default: return <BookOpen className="w-5 h-5 text-blue-400" />;
    }
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
        <div className="relative h-[280px] rounded-2xl bg-gray-900/90 backdrop-blur-sm p-6 flex flex-col justify-between">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          
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
              {project.techStack.slice(0, 3).map((tech: string, idx: number) => (
                <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                  +{project.techStack.length - 3}
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

// Fullscreen Modal Component
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
            <div className="absolute inset-0 bg-gradient-to- from-gray-900 to-transparent" />
            <div className="relative z-10 h-full flex items-end p-8">
              <div>
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

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Live Demo</h3>
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </motion.a>
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

// Main Page Component
export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Split projects into two rows
  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3, 5);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our innovative solutions across education, finance, hardware, and construction
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {firstRow.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onHover={setSelectedProject}
            />
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
            {secondRow.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 3}
                onHover={setSelectedProject}
              />
            ))}
          </div>
        </div>
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

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}