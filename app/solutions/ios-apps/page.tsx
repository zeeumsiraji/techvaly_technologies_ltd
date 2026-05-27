'use client'

import { motion } from 'framer-motion'
import { 
  Apple, 
  Sparkles, 
  ShieldCheck, 
  Gauge, 
  Cpu,
  Layout,
  Cloud,
  Smartphone,
  Watch,
  Laptop,
  ArrowRight,
  Star,
  Award,
  CheckCircle,
  QrCode,
  TrendingUp,
  Lock
} from 'lucide-react'

export default function IOSPage() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "SwiftUI 6",
      description: "Modern declarative UI framework with iOS 18 features and improved performance"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Swift 6",
      description: "Latest Swift language with enhanced concurrency and safety features"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Apple Security",
      description: "Face ID, Touch ID, Keychain, App Sandbox, and end-to-end encryption"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Metal Performance",
      description: "GPU-accelerated graphics and 120Hz ProMotion smoothness"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Adaptive Layout",
      description: "Dynamic Type, Dark Mode, and seamless iPad multitasking support"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "iCloud Integration",
      description: "CloudKit, iCloud sync, and seamless data across Apple devices"
    },
    {
      icon: <Watch className="w-6 h-6" />,
      title: "Apple Ecosystem",
      description: "Seamless integration with iPhone, iPad, Mac, Watch, and TV"
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "Core ML & ARKit",
      description: "On-device machine learning and augmented reality experiences"
    }
  ]

  const advantages = [
    { value: "4.9★", label: "App Store Rating", description: "From 200+ apps delivered" },
    { value: "99.9%", label: "Crash-Free Rate", description: "Enterprise-grade quality" },
    { value: "24h", label: "Review Time", description: "Average App Store approval" },
    { value: "10M+", label: "Downloads", description: "Across all apps" }
  ]

  const techStack = [
    { name: "Swift 6", level: "Expert", color: "from-orange-500 to-red-500" },
    { name: "SwiftUI 6", level: "Expert", color: "from-blue-500 to-cyan-500" },
    { name: "UIKit", level: "Expert", color: "from-purple-500 to-pink-500" },
    { name: "Combine", level: "Advanced", color: "from-green-500 to-emerald-500" },
    { name: "CoreData", level: "Expert", color: "from-indigo-500 to-purple-500" },
    { name: "CloudKit", level: "Advanced", color: "from-yellow-500 to-orange-500" },
    { name: "Swift Package Manager", level: "Expert", color: "from-red-600 to-orange-600" },
    { name: "TestFlight", level: "Expert", color: "from-cyan-500 to-blue-500" }
  ]

  const frameworks = [
    {
      name: "SwiftUI",
      description: "Declarative UI framework for all Apple platforms",
      icon: <Layout className="w-5 h-5" />
    },
    {
      name: "Core ML",
      description: "On-device machine learning and AI",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      name: "ARKit",
      description: "Augmented reality experiences",
      icon: <QrCode className="w-5 h-5" />
    },
    {
      name: "WidgetKit",
      description: "Home screen and lock screen widgets",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      name: "StoreKit",
      description: "In-app purchases and subscriptions",
      icon: <Apple className="w-5 h-5" />
    },
    {
      name: "MapKit",
      description: "Apple Maps integration",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ]

  const projects = [
    {
      title: "Premium Finance App",
      description: "Banking app with biometric security, real-time transactions, and investment tracking",
      tech: ["SwiftUI", "CoreData", "CloudKit"],
      rating: 4.9,
      downloads: "500k+"
    },
    {
      title: "Health & Fitness",
      description: "Health tracking with HealthKit integration, workouts, and nutrition planning",
      tech: ["SwiftUI", "HealthKit", "WidgetKit"],
      rating: 4.8,
      downloads: "1M+"
    },
    {
      title: "E-commerce Platform",
      description: "Shopping app with AR product preview, Apple Pay, and order tracking",
      tech: ["SwiftUI", "ARKit", "StoreKit"],
      rating: 4.9,
      downloads: "2M+"
    }
  ]

  const appleDevices = [
    { name: "iPhone", icon: <Smartphone className="w-5 h-5" />, support: "iOS 15-18" },
    { name: "iPad", icon: <Laptop className="w-5 h-5" />, support: "iPadOS 15-18" },
    { name: "Apple Watch", icon: <Watch className="w-5 h-5" />, support: "watchOS 8-11" },
    { name: "Mac", icon: <Laptop className="w-5 h-5" />, support: "macOS 12-15" }
  ]

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse delay-1000" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <Apple className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-semibold">iOS Development</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-linear-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                iOS Applications
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Premium iPhone and iPad apps built with 
              <span className="text-orange-400 font-semibold"> Swift 6</span>, 
              <span className="text-pink-400 font-semibold"> SwiftUI 6</span>, and 
              <span className="text-purple-400 font-semibold"> Apple&apos;s latest technologies</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <button className="group px-8 py-4 rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Your iOS Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
              View App Portfolio
            </button>
          </motion.div>

          {/* Apple Devices Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            {appleDevices.map((device, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-gray-700">
                <div className="text-orange-400">{device.icon}</div>
                <div>
                  <div className="text-white text-sm font-semibold">{device.name}</div>
                  <div className="text-gray-400 text-xs">{device.support}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 border-t border-b border-gray-800 bg-black/30">
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
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2">
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
              Modern iOS Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Leverage the latest Apple technologies for exceptional iOS experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SwiftUI Advantage Section */}
      <section className="px-6 py-24 bg-linear-to-b from-orange-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold">SwiftUI 6</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Modern UI Development with{' '}
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  SwiftUI
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Build beautiful, responsive interfaces with less code. SwiftUI provides 
                automatic dark mode, dynamic type, and accessibility support out of the box.
              </p>
              <ul className="space-y-3">
                {[
                  "Declarative syntax for intuitive UI development",
                  "Live previews with hot-reload functionality",
                  "Automatic state management and data binding",
                  "Seamless animations and transitions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
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
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">⚡️</div>
                  <h3 className="text-2xl font-bold text-white mb-2">SwiftUI Benefits</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Development Speed</span>
                    <span className="text-green-400 font-bold">+50%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Code Reduction</span>
                    <span className="text-green-400 font-bold">-40%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Bug Reduction</span>
                    <span className="text-green-400 font-bold">-60%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apple Frameworks Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Apple Frameworks
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Leveraging the full power of Apple&apos;s ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-orange-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {framework.icon}
                </div>
                <div>
                  <div className="text-white font-semibold">{framework.name}</div>
                  <div className="text-gray-400 text-sm">{framework.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 py-24 bg-gray-900/30">
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
              Expert-level proficiency in iOS technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-orange-500/50 transition-colors"
              >
                <span className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                  {tech.name}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-linear-to-r ${tech.color} text-white`}>
                  {tech.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🔒</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise Security</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Face ID & Touch ID Biometrics",
                      "End-to-end Encryption",
                      "Secure Enclave Protection",
                      "App Transport Security"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30">
                        <Lock className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">Security First</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built with{' '}
                <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Enterprise Security
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Your users&apos; data is protected with Apple&apos;s industry-leading security 
                features. From biometric authentication to encrypted storage, we build 
                security into every layer.
              </p>
              <ul className="space-y-3">
                {[
                  "GDPR & CCPA Compliance Ready",
                  "Secure User Authentication",
                  "Encrypted Data Storage",
                  "Regular Security Audits"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
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
              Featured iOS Apps
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Successful iOS applications delivered to satisfied clients
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
                className="group p-6 rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">{project.rating}</span>
                  </div>
                  <Award className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>
                <div className="text-xs text-orange-400 mb-3">{project.downloads} downloads</div>
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

      {/* App Store Optimization Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">App Store Optimization</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Maximize Your{' '}
                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  App Store Success
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We optimize your app for higher visibility, better conversion rates, 
                and increased downloads through strategic ASO practices.
              </p>
              <ul className="space-y-3">
                {[
                  "Keyword optimization for better ranking",
                  "A/B tested screenshots and preview videos",
                  "Compelling app descriptions and metadata",
                  "Review management and rating strategy"
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
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <div className="text-center">
                  <div className="text-5xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-white mb-4">ASO Results</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Visibility Increase</span>
                        <span className="text-green-400">+156%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-linear-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Conversion Rate</span>
                        <span className="text-green-400">+42%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-linear-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '72%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
          <div className="relative rounded-3xl bg-linear-to-r from-orange-600/20 via-pink-600/20 to-purple-600/20 p-12 border border-orange-500/30">
            <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-pink-500 rounded-3xl blur-3xl opacity-10" />
            <Apple className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your iOS App?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let&apos;s create a premium iOS experience that your users will love
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Start Your iOS Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
                View App Store Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}