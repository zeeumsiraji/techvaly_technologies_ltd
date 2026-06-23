// app/projects/app/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Layout, 
  GitBranch, 
  Cpu, 
  Shield, 
  Zap, 
  Users, 
  CreditCard, 
  BookOpen, 
  Building,
  Apple,
  DollarSign,
  Monitor
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'App Development Projects',
  description: 'Explore our cross-platform mobile app projects built with Kotlin, Jetpack Compose, and Kotlin Multiplatform (KMP) for Android, iOS, macOS, and Linux',
}

export default function AppProjectsPage() {
  const appProjects = [
    {
      id: 1,
      title: 'Student Support APP',
      description: 'Comprehensive school/college management system with cross-platform support',
      fullDescription: 'A complete ecosystem for educational institutions that streamlines admissions, academics, finance, and communication. Features include exam management, attendance tracking, online classes, parental communication, and homework submission with live editing capabilities. Built with modern Kotlin and KMP for cross-platform compatibility across Android, iOS, macOS, and Linux.',
      tech: ['Kotlin', 'Jetpack Compose', 'KMP', 'Android', 'iOS', 'macOS', 'Linux'],
      features: [
        'Student Admission & Admit Card Download',
        'Exam Updates (Routine, Semester, Results)',
        'Class Monitoring with Daily Updates',
        'Financial Updates & Multiple Payment Gateways',
        'Attendance Monitoring System',
        'Online Classes Integration',
        'Parental Chat Box',
        'Homework Submit & Live Edit'
      ],
      platforms: ['Android', 'iOS', 'macOS', 'Linux'],
      icon: BookOpen,
      gradient: 'from-blue-600 to-purple-600',
      link: '/projects/student-support-app'
    },
    {
      id: 2,
      title: 'Mobile Banking System',
      description: 'Enterprise-grade mobile banking with high security and quick transactions',
      fullDescription: 'Enterprise-grade mobile banking solution with biometric authentication, real-time transactions, bill payments, and comprehensive account management. Features advanced security protocols and instant fund transfers. Built with Kotlin Multiplatform for seamless cross-platform experience across all major platforms.',
      tech: ['Kotlin', 'Jetpack Compose', 'KMP', 'iOS', 'macOS', 'Security'],
      features: [
        'Multi-Account Management & Balance Overview',
        'Instant Fund Transfer & Beneficiary Management',
        'Bill Payments with QR Code Scanning',
        'Scheduled Recurring Payments',
        'Card Freeze & PIN Change',
        'Fraud Detection & Reporting',
        'Transaction History & Statements',
        'Biometric Authentication'
      ],
      platforms: ['Android', 'iOS', 'macOS', 'Linux'],
      icon: CreditCard,
      gradient: 'from-cyan-600 to-blue-600',
      link: '/projects/mobile-banking'
    },
    {
      id: 3,
      title: 'Hardware Helping Service',
      description: 'On-demand hardware support with AI-powered diagnostics',
      fullDescription: 'On-demand hardware support platform connecting users with certified technicians for troubleshooting, repairs, and parts replacement. Features remote diagnostics, live chat support, and real-time technician tracking. Cross-platform app for all devices with AI-powered diagnostic tools.',
      tech: ['Kotlin', 'Jetpack Compose', 'KMP', 'WebSocket', 'Android', 'iOS'],
      features: [
        'Service Booking with Time Slot Selection',
        'AI-Powered Diagnostic Tool',
        'Parts Inventory & Order Tracking',
        'Remote Support with Screen Sharing',
        'Technician Rating System',
        'Real-time Chat Support',
        'Warranty Check & Claim',
        'Push Notifications'
      ],
      platforms: ['Android', 'iOS', 'macOS', 'Linux'],
      icon: Cpu,
      gradient: 'from-orange-600 to-red-600',
      link: '/projects/hardware-helping'
    },
    {
      id: 4,
      title: 'Healthcare Management App',
      description: 'Complete healthcare solution for patients and providers',
      fullDescription: 'Comprehensive healthcare platform connecting patients with healthcare providers. Features appointment scheduling, telemedicine, prescription management, health records, and medication reminders. Built with KMP for seamless cross-platform experience.',
      tech: ['Kotlin', 'Jetpack Compose', 'KMP', 'WebRTC', 'Android', 'iOS'],
      features: [
        'Appointment Scheduling',
        'Telemedicine Video Calls',
        'Prescription Management',
        'Digital Health Records',
        'Medication Reminders',
        'Lab Results Integration',
        'Insurance Claims',
        'Health Analytics Dashboard'
      ],
      platforms: ['Android', 'iOS', 'macOS', 'Linux'],
      icon: Shield,
      gradient: 'from-green-600 to-teal-600',
      link: '/projects/healthcare-management'
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      description: 'Multi-vendor e-commerce solution with real-time tracking',
      fullDescription: 'Feature-rich e-commerce platform supporting multiple vendors, real-time order tracking, payment integration, and AI-powered recommendations. Includes vendor dashboards, inventory management, and customer analytics.',
      tech: ['Kotlin', 'Jetpack Compose', 'KMP', 'GraphQL', 'Android', 'iOS'],
      features: [
        'Multi-Vendor Support',
        'Real-time Order Tracking',
        'Multiple Payment Gateways',
        'AI Product Recommendations',
        'Vendor Dashboard',
        'Inventory Management',
        'Customer Reviews & Ratings',
        'Push Notifications'
      ],
      platforms: ['Android', 'iOS', 'macOS', 'Linux'],
      icon: Zap,
      gradient: 'from-yellow-600 to-orange-600',
      link: '/projects/ecommerce-platform'
    },
    {
      id: 6,
      title: 'Social Networking App',
      description: 'Modern social platform with real-time messaging and content sharing',
      fullDescription: 'Feature-rich social networking platform with real-time messaging, content sharing, live streaming, and community features. Built with KMP for consistent experience across all platforms with native performance.',
      tech: ['Kotlin', 'Jetpack Compose', 'KMP', 'WebSocket', 'Android', 'iOS'],
      features: [
        'Real-time Messaging',
        'Photo & Video Sharing',
        'Live Streaming',
        'News Feed Algorithm',
        'Group Chats & Communities',
        'Story Updates',
        'Push Notifications',
        'End-to-End Encryption'
      ],
      platforms: ['Android', 'iOS', 'macOS', 'Linux'],
      icon: Users,
      gradient: 'from-pink-600 to-rose-600',
      link: '/projects/social-networking'
    }
  ]

  // Updated getPlatformIcon with larger, more visible icons
  const getPlatformIcon = (platform: string) => {
    switch(platform.toLowerCase()) {
      case 'android':
        return (
          <div className="relative group/tooltip">
            <div className="text-xl sm:text-2xl">🤖</div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Android
            </div>
          </div>
        )
      case 'ios':
        return (
          <div className="relative group/tooltip">
            <Apple className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              iOS
            </div>
          </div>
        )
      case 'macos':
        return (
          <div className="relative group/tooltip">
            <Monitor className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              macOS
            </div>
          </div>
        )
      case 'linux':
        return (
          <div className="relative group/tooltip">
            <div className="text-xl sm:text-2xl">🐧</div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Linux
            </div>
          </div>
        )
      default:
        return (
          <div className="relative group/tooltip">
            <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Mobile
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-4">
            <Smartphone className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">Cross-Platform Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            App Development Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Built with <span className="text-purple-400 font-semibold">Kotlin</span>,{' '}
            <span className="text-pink-400 font-semibold">Jetpack Compose</span>, and{' '}
            <span className="text-blue-400 font-semibold">Kotlin Multiplatform (KMP)</span>
            <br />
            One codebase. All platforms. Native performance.
          </p>
        </div>

        {/* Tech Stack Showcase */}
        <div className="mb-12 p-6 bg-gray-800/30 rounded-2xl border border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <Code className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Kotlin</h3>
              <p className="text-gray-500 text-sm">Modern, Concise, Safe</p>
            </div>
            <div className="p-4">
              <Layout className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Jetpack Compose</h3>
              <p className="text-gray-500 text-sm">Declarative UI</p>
            </div>
            <div className="p-4">
              <GitBranch className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">KMP</h3>
              <p className="text-gray-500 text-sm">Cross-Platform</p>
            </div>
            <div className="p-4">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Native Performance</h3>
              <p className="text-gray-500 text-sm">Platform-Specific</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {appProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={project.id}
                className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient}/20 mb-3`}>
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex gap-2">
                      {project.platforms.map((platform) => (
                        <div key={platform}>
                          {getPlatformIcon(platform)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-400">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {project.features.length > 4 && (
                        <div className="text-sm text-purple-400 mt-2">
                          +{project.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Link */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all mt-2"
                  >
                    View Project Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* KMP Benefits Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Why Kotlin Multiplatform (KMP)?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Single Codebase</h3>
              <p className="text-gray-400 text-sm">Write business logic once, use it everywhere</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Native UI</h3>
              <p className="text-gray-400 text-sm">Platform-specific UI with Compose Multiplatform</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Perfect Performance</h3>
              <p className="text-gray-400 text-sm">Native performance on every platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}