'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  Rocket, 
  Shield, 
  Zap, 
  Code, 
  Layout, 
  GitBranch, 
  Database,
  Cloud,
  Smartphone,
  Gauge,
  Search,
  Lock,
  Users,
  TrendingUp,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Palette,
  Server,
  Cpu
} from 'lucide-react'

export default function WebApplicationsPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Next.js 15 App Router",
      description: "Latest App Router architecture with React Server Components for optimal performance and SEO"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Edge Runtime & Streaming",
      description: "Lightning-fast edge deployments with streaming SSR and partial prerendering"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "CSRF protection, XSS prevention, secure headers, and rate limiting"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Full-Stack Capabilities",
      description: "Server Actions, API routes, and database integration with ORMs like Prisma"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Automatic metadata generation, sitemaps, robots.txt, and Open Graph tags"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Mobile-first approach with Tailwind CSS for perfect cross-device experiences"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance First",
      description: "Automatic code splitting, image optimization, and Core Web Vitals compliance"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Ready",
      description: "Vercel, AWS, or self-hosted deployment with CI/CD pipelines"
    }
  ]

  const advantages = [
    { value: "99%", label: "Performance Score", description: "Google Lighthouse" },
    { value: "50ms", label: "Time to First Byte", description: "Edge deployment" },
    { value: "100%", label: "SEO Friendly", description: "Full metadata control" },
    { value: "60%", label: "Faster Development", description: "With modern tooling" }
  ]

  const techStack = [
    { name: "Next.js 15", level: "Expert", color: "from-black to-gray-800" },
    { name: "React 19", level: "Expert", color: "from-cyan-500 to-blue-500" },
    { name: "TypeScript", level: "Expert", color: "from-blue-600 to-indigo-600" },
    { name: "Tailwind CSS", level: "Expert", color: "from-teal-500 to-cyan-500" },
    { name: "Node.js", level: "Expert", color: "from-green-600 to-emerald-600" },
    { name: "PostgreSQL", level: "Advanced", color: "from-indigo-600 to-purple-600" },
    { name: "Prisma", level: "Advanced", color: "from-emerald-500 to-green-500" },
    { name: "Redis", level: "Advanced", color: "from-red-600 to-orange-600" }
  ]

  const architectureLayers = [
    {
      title: "Frontend Layer",
      tech: "Next.js + React + Tailwind",
      description: "Server Components, Client Components, and optimized UI",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "API Layer",
      tech: "Next.js API Routes + tRPC",
      description: "Type-safe API endpoints and Server Actions",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Logic",
      tech: "Server Actions + Edge Functions",
      description: "Secure server-side operations and data mutations",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Layer",
      tech: "Prisma + PostgreSQL + Redis",
      description: "Efficient data access, caching, and real-time updates",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with cart, payments, and real-time inventory",
      tech: ["Next.js", "React", "PostgreSQL", "Stripe"],
      rating: 4.9,
      metrics: "10k+ daily users"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization and reporting",
      tech: ["Next.js", "tRPC", "Prisma", "Chart.js"],
      rating: 4.8,
      metrics: "500+ businesses"
    },
    {
      title: "Social Platform",
      description: "Community platform with real-time chat, notifications, and user engagement",
      tech: ["Next.js", "WebSocket", "Redis", "Tailwind"],
      rating: 4.9,
      metrics: "50k+ active users"
    }
  ]

  const performanceMetrics = [
    { name: "Largest Contentful Paint", value: "< 2.5s", status: "Excellent" },
    { name: "First Input Delay", value: "< 100ms", status: "Excellent" },
    { name: "Cumulative Layout Shift", value: "< 0.1", status: "Excellent" },
    { name: "Time to Interactive", value: "< 3.5s", status: "Good" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">Web Development</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Web Applications
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Modern, scalable, and high-performance web applications built with 
              <span className="text-cyan-400 font-semibold"> Next.js 15</span>, 
              <span className="text-blue-400 font-semibold"> React 19</span>, and 
              <span className="text-purple-400 font-semibold"> cutting-edge technologies</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
              View Portfolio
            </button>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {performanceMetrics.map((metric, idx) => (
              <div key={idx} className="text-center p-3 rounded-xl bg-white/5 border border-gray-700">
                <div className="text-xs text-gray-400 mb-1">{metric.name}</div>
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="text-xs text-green-400">{metric.status}</div>
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
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
              Modern Web Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Leverage the latest web technologies for exceptional user experiences
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
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-cyan-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Modern Architecture
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Scalable full-stack architecture with Next.js App Router
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${layer.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="relative p-6 rounded-2xl bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{layer.title}</h3>
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-cyan-400 font-semibold mb-2">{layer.tech}</p>
                  <p className="text-gray-400">{layer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-6 py-24">
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
              Expert-level proficiency in modern web technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-cyan-500/50 transition-colors"
              >
                <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${tech.color} text-white`}>
                  {tech.level}
                </span>
              </motion.div>
            ))}
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
              Successful web applications delivered to satisfied clients
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
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">{project.rating}</span>
                  </div>
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>
                <div className="text-xs text-cyan-400 mb-3">{project.metrics}</div>
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

      {/* SEO & Performance Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Search className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">SEO Optimized</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for <span className="text-green-400">Search Engines</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Next.js provides automatic SEO optimization with server-side rendering, 
                metadata API, and image optimization. Your web app will rank higher and 
                load faster.
              </p>
              <ul className="space-y-3">
                {[
                  "Automatic metadata and Open Graph tags",
                  "Dynamic sitemap and robots.txt generation",
                  "Structured data for rich snippets",
                  "Optimized Core Web Vitals scores"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold text-white mb-2">SEO Performance</h3>
                  <div className="flex justify-center gap-8 mt-4">
                    <div>
                      <div className="text-2xl font-bold text-green-400">98/100</div>
                      <div className="text-xs text-gray-400">Desktop</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">96/100</div>
                      <div className="text-xs text-gray-400">Mobile</div>
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
          <div className="relative rounded-3xl bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 p-12 border border-cyan-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-10" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let&apos;s discuss your project and build a high-performance web solution
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}