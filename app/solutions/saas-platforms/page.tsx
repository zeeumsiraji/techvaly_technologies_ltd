'use client'

import { motion } from 'framer-motion'
import { 
  Cloud, 
  BarChart3, 
  CreditCard, 
  Users, 
  Lock,
  Globe2,
  Zap,
  Database,
  Rocket,
  Settings,
  Bell,
  Mail,
  FileText,
  Shield,
  ArrowRight,
  Star,
  Award,
  CheckCircle,
  TrendingUp,
  Activity,
  Gauge,
  Server,
  Layers,
  ShoppingCart,
  MessageCircle,
  Calendar,
  Download
} from 'lucide-react'

export default function SaaSPage() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-tenant Architecture",
      description: "Isolated databases with shared infrastructure for optimal resource utilization"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Subscription Management",
      description: "Flexible billing cycles, usage-based pricing, and automated invoicing"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Real-time metrics, custom reports, and data visualization"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SSO, RBAC, audit logs, and compliance (SOC2, GDPR, HIPAA)"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto-scaling Infrastructure",
      description: "Dynamic resource allocation based on demand patterns"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global CDN",
      description: "Multi-region deployment for low-latency access worldwide"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-time Notifications",
      description: "Email, SMS, push, and webhook notifications"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Isolation",
      description: "Row-level security and encrypted data storage per tenant"
    }
  ]

  const advantages = [
    { value: "99.95%", label: "Uptime SLA", description: "Enterprise reliability" },
    { value: "10M+", label: "API Calls/Day", description: "Scalable infrastructure" },
    { value: "50k+", label: "Active Tenants", description: "Multi-tenant platform" },
    { value: "<100ms", label: "Response Time", description: "Global average" }
  ]

  const pricingModels = [
    { name: "Freemium", icon: <Users className="w-5 h-5" />, description: "Free tier with limited features" },
    { name: "Subscription", icon: <CreditCard className="w-5 h-5" />, description: "Monthly/Annual recurring billing" },
    { name: "Usage-based", icon: <Activity className="w-5 h-5" />, description: "Pay for what you use" },
    { name: "Tiered", icon: <Layers className="w-5 h-5" />, description: "Feature-based pricing tiers" },
    { name: "Enterprise", icon: <Shield className="w-5 h-5" />, description: "Custom enterprise plans" },
    { name: "Lifetime", icon: <Award className="w-5 h-5" />, description: "One-time payment options" }
  ]

  const techStack = [
    { name: "Next.js 15", level: "Expert", color: "from-black to-gray-800" },
    { name: "Node.js", level: "Expert", color: "from-green-600 to-emerald-600" },
    { name: "PostgreSQL", level: "Expert", color: "from-blue-600 to-indigo-600" },
    { name: "Redis", level: "Expert", color: "from-red-600 to-orange-600" },
    { name: "Kubernetes", level: "Advanced", color: "from-blue-500 to-cyan-500" },
    { name: "AWS/Azure/GCP", level: "Expert", color: "from-yellow-600 to-orange-600" },
    { name: "Stripe", level: "Expert", color: "from-purple-500 to-pink-500" },
    { name: "GraphQL", level: "Advanced", color: "from-pink-500 to-rose-500" }
  ]

  const integrations = [
    { name: "Payment Gateways", icon: <CreditCard className="w-5 h-5" />, tools: "Stripe, PayPal, Paddle" },
    { name: "Communication", icon: <Mail className="w-5 h-5" />, tools: "SendGrid, Twilio, Slack" },
    { name: "Analytics", icon: <BarChart3 className="w-5 h-5" />, tools: "Mixpanel, Segment, Amplitude" },
    { name: "CRM", icon: <Users className="w-5 h-5" />, tools: "Salesforce, HubSpot, Pipedrive" },
    { name: "Storage", icon: <Database className="w-5 h-5" />, tools: "AWS S3, Cloudinary, Supabase" },
    { name: "Monitoring", icon: <Activity className="w-5 h-5" />, tools: "Datadog, New Relic, Sentry" }
  ]

  const projects = [
    {
      title: "Enterprise CRM Platform",
      description: "Multi-tenant CRM with AI-powered analytics and automation",
      tech: ["Next.js", "PostgreSQL", "Redis", "Stripe"],
      metrics: "500+ enterprise clients",
      rating: 4.9
    },
    {
      title: "Marketing Automation",
      description: "Email marketing platform with segmentation and campaign management",
      tech: ["Node.js", "GraphQL", "AWS", "SendGrid"],
      metrics: "1M+ emails/month",
      rating: 4.8
    },
    {
      title: "Project Management SaaS",
      description: "Collaboration platform with real-time updates and integrations",
      tech: ["React", "WebSocket", "MongoDB", "Redis"],
      metrics: "50k+ active users",
      rating: 4.9
    }
  ]

  const complianceStandards = [
    { name: "SOC 2 Type II", status: "Compliant", icon: <Shield className="w-4 h-4" /> },
    { name: "GDPR", status: "Compliant", icon: <Lock className="w-4 h-4" /> },
    { name: "HIPAA", status: "Ready", icon: <Shield className="w-4 h-4" /> },
    { name: "PCI DSS", status: "Compliant", icon: <CreditCard className="w-4 h-4" /> }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Cloud className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">SaaS Platform</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                SaaS Platforms
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Scalable multi-tenant SaaS platforms with 
              <span className="text-purple-400 font-semibold"> subscription billing</span>, 
              <span className="text-pink-400 font-semibold"> real-time analytics</span>, and 
              <span className="text-indigo-400 font-semibold"> enterprise-grade security</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Launch Your SaaS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
              View Platform Demo
            </button>
          </motion.div>

          {/* Compliance Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            {complianceStandards.map((standard, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-gray-700">
                <div className="text-green-400">{standard.icon}</div>
                <span className="text-white text-sm font-semibold">{standard.name}</span>
                <span className="text-green-400 text-xs">{standard.status}</span>
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
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
              Enterprise SaaS Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete platform for building scalable SaaS applications
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
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Flexible Pricing Models
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Monetization strategies that scale with your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-purple-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {model.icon}
                </div>
                <div>
                  <div className="text-white font-semibold">{model.name}</div>
                  <div className="text-gray-400 text-sm">{model.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-tenant Architecture Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Layers className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold">Architecture</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-tenant{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Architecture
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Design scalable multi-tenant systems that isolate data while maximizing 
                resource efficiency. Support thousands of customers on a single infrastructure.
              </p>
              <ul className="space-y-3">
                {[
                  "Database per tenant for maximum isolation",
                  "Shared database with row-level security",
                  "Custom domain support for white-labeling",
                  "Tenant-aware caching strategies"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <Layers className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Tenant Isolation</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Data Isolation Level</span>
                    <span className="text-blue-400 font-bold">Row-Level Security</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Max Tenants</span>
                    <span className="text-blue-400 font-bold">Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Custom Domains</span>
                    <span className="text-green-400 font-bold">Supported</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Modern technologies powering enterprise SaaS platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-purple-500/50 transition-colors"
              >
                <span className="text-white font-semibold group-hover:text-purple-400 transition-colors">
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

      {/* Integrations Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Third-party Integrations
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Seamless integration with popular services and APIs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    {integration.icon}
                  </div>
                  <h3 className="text-white font-bold">{integration.name}</h3>
                </div>
                <p className="text-orange-400 text-xs mb-2">{integration.tools}</p>
                <p className="text-gray-400 text-sm">Pre-built integrations and webhook support</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Billing Section */}
      <section className="px-6 py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                  <div className="text-center mb-6">
                    <CreditCard className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Subscription Management</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Recurring billing automation",
                      "Usage-based metering",
                      "Invoice generation",
                      "Payment recovery (dunning)",
                      "Tax compliance (VAT/GST)"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30">
                        <CheckCircle className="w-4 h-4 text-green-400" />
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
                <CreditCard className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">Payment Processing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Smart{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Subscription Billing
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Implement sophisticated billing logic with multiple pricing models, 
                trial periods, coupons, and automated payment processing.
              </p>
              <ul className="space-y-3">
                {[
                  "Multiple payment gateways (Stripe, PayPal, Paddle)",
                  "Automated tax calculation and compliance",
                  "Flexible proration and refund policies",
                  "Revenue analytics and churn prediction"
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
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SaaS Success Stories
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Platforms we've built for successful SaaS companies
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
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">{project.rating}</span>
                  </div>
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>
                <div className="text-xs text-purple-400 mb-3">{project.metrics}</div>
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

      {/* Scalability Section */}
      <section className="px-6 py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for Scale
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Infrastructure that grows with your user base
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-center">
              <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Auto-scaling</h3>
              <p className="text-gray-400 text-sm">Dynamic resource allocation based on traffic patterns</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-center">
              <Globe2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Global CDN</h3>
              <p className="text-gray-400 text-sm">Multi-region deployment for low latency worldwide</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-center">
              <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Database Sharding</h3>
              <p className="text-gray-400 text-sm">Horizontal partitioning for massive data volumes</p>
            </div>
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
          <div className="relative rounded-3xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 p-12 border border-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-10" />
            <Cloud className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Launch Your SaaS Platform?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's build a scalable, secure, and profitable SaaS solution
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Start Your SaaS Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
                View SaaS Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}