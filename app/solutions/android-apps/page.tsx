'use client'

import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Rocket, 
  Shield, 
  Zap, 
  Code, 
  Layout, 
  GitBranch, 
  Database,
  Cloud,
  Smartphone as SmartphoneIcon,
  Monitor,
  Repeat,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award
} from 'lucide-react'
import Link from 'next/link'

export default function AndroidPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Jetpack Compose UI",
      description: "Modern declarative UI toolkit for building beautiful, responsive interfaces with less code"
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Kotlin Multiplatform (KMP)",
      description: "Share business logic across Android, iOS, and web while maintaining native experiences"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, biometric authentication, and secure data storage"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Modern Architecture",
      description: "Clean Architecture with MVI/MVVM patterns for scalable and testable code"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Integration",
      description: "Seamless Firebase, AWS, or custom backend integration for real-time sync"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "CI/CD Pipeline",
      description: "Automated testing, building, and deployment to Google Play Console"
    }
  ]

  const advantages = [
    { value: "60%", label: "Faster Development", description: "With Jetpack Compose & KMP" },
    { value: "100%", label: "Code Sharing", description: "Between Android & iOS using KMP" },
    { value: "99.9%", label: "Crash-Free Rate", description: "With robust error handling" },
    { value: "4.8★", label: "Average Rating", description: "From 500+ apps delivered" }
  ]

  const techStack = [
    { name: "Kotlin", level: "Expert", color: "from-purple-500 to-pink-500" },
    { name: "Jetpack Compose", level: "Expert", color: "from-green-500 to-emerald-500" },
    { name: "KMP", level: "Advanced", color: "from-blue-500 to-cyan-500" },
    { name: "Coroutines", level: "Expert", color: "from-red-500 to-orange-500" },
    { name: "Room DB", level: "Expert", color: "from-yellow-500 to-amber-500" },
    { name: "Retrofit", level: "Advanced", color: "from-indigo-500 to-purple-500" }
  ]

  const projects = [
    {
      title: "FinTech Banking App",
      description: "Secure banking with biometric auth, real-time transactions, and investment portfolio",
      tech: ["Kotlin", "Compose", "KMP"],
      rating: 4.9
    },
    {
      title: "E-commerce Platform",
      description: "Multi-vendor marketplace with live tracking, AR try-on, and AI recommendations",
      tech: ["Kotlin", "Compose", "Firebase"],
      rating: 4.8
    },
    {
      title: "Healthcare App",
      description: "Telemedicine, appointment booking, prescription management, and health records",
      tech: ["Kotlin", "Compose", "KMP"],
      rating: 4.9
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Smartphone className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">Android Development</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Android Apps
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build powerful Android applications with <span className="text-green-400 font-semibold">Kotlin</span>, 
              <span className="text-emerald-400 font-semibold"> Jetpack Compose</span>, and 
              <span className="text-teal-400 font-semibold"> KMP</span> technology stack
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {advantages.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Modern Android Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Leverage the latest Android technologies for exceptional app experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Expert-level proficiency in modern Android technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700"
              >
                <span className="text-white font-semibold">{tech.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${tech.color} text-white`}>
                  {tech.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KMP Advantage Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Repeat className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">Kotlin Multiplatform</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Share Code Across <span className="text-purple-400">All Platforms</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Write your business logic once and share it across Android, iOS, web, and desktop. 
                KMP reduces development time by up to 60% while maintaining native performance on each platform.
              </p>
              <ul className="space-y-3">
                {[
                  "Share business logic, networking, and data layers",
                  "Maintain native UI on each platform",
                  "Reduced development and maintenance costs",
                  "Full interoperability with existing code"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <SmartphoneIcon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-center text-white font-semibold">Android</div>
                    <div className="text-center text-gray-400 text-sm">Native UI</div>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Monitor className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-center text-white font-semibold">iOS</div>
                    <div className="text-center text-gray-400 text-sm">Native UI</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block px-6 py-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                    <Code className="w-5 h-5 text-purple-400 inline mr-2" />
                    <span className="text-purple-400 font-semibold">Shared Business Logic (KMP)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Successful Android apps delivered to satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">{project.rating}</span>
                  </div>
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-lg bg-gray-700 text-gray-300 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative rounded-3xl bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 p-12 border border-green-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-3xl opacity-10" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Android App?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss your project and turn your idea into a successful Android application
            </p>
            <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}