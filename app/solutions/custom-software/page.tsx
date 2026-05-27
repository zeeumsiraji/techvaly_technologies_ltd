'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Clock,
  CloudCog,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Lightbulb,
  Palette,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Terminal,
  TestTube,
  Users
} from 'lucide-react'


export default function CustomSoftwarePage() {
  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Custom Web Applications",
      description: "Tailored web solutions built with modern frameworks for optimal performance and scalability"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences"
    },
    {
      icon: <CloudCog className="w-6 h-6" />,
      title: "Cloud-Native Solutions",
      description: "Scalable cloud applications leveraging AWS, Azure, or GCP with microservices architecture"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Enterprise Software",
      description: "Complex business systems integrating with existing infrastructure and legacy systems"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI & ML Integration",
      description: "Intelligent features including predictive analytics, NLP, computer vision, and automation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Systems",
      description: "Enterprise-grade security with encryption, authentication, and compliance standards"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines, container orchestration, and infrastructure as code"
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: "QA & Testing",
      description: "Comprehensive testing including unit, integration, performance, and security testing"
    }
  ]

  const process = [
    { 
      step: "01", 
      title: "Discovery", 
      description: "Requirements gathering, market research, and technical feasibility analysis",
      duration: "1-2 weeks",
      icon: <Lightbulb className="w-6 h-6" />
    },
    { 
      step: "02", 
      title: "Planning", 
      description: "Architecture design, technology selection, and sprint planning",
      duration: "1-2 weeks",
      icon: <Target className="w-6 h-6" />
    },
    { 
      step: "03", 
      title: "Design", 
      description: "UI/UX design, prototyping, and user experience testing",
      duration: "2-3 weeks",
      icon: <Palette className="w-6 h-6" />
    },
    { 
      step: "04", 
      title: "Development", 
      description: "Agile sprints, continuous integration, and regular demos",
      duration: "4-12 weeks",
      icon: <Terminal className="w-6 h-6" />
    },
    { 
      step: "05", 
      title: "Testing", 
      description: "Quality assurance, security audits, and performance optimization",
      duration: "1-3 weeks",
      icon: <TestTube className="w-6 h-6" />
    },
    { 
      step: "06", 
      title: "Deployment", 
      description: "Production release, monitoring setup, and documentation",
      duration: "1 week",
      icon: <Rocket className="w-6 h-6" />
    }
  ]

  const techStack = [
    { category: "Frontend", technologies: ["React/Next.js", "Vue/Nuxt", "Angular", "Svelte", "TypeScript"], color: "from-blue-500 to-cyan-500" },
    { category: "Backend", technologies: ["Node.js/Nest.js", "Python/Django", "Java/Spring", "Go", ".NET Core"], color: "from-green-500 to-emerald-500" },
    { category: "Mobile", technologies: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Ionic"], color: "from-purple-500 to-pink-500" },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"], color: "from-orange-500 to-red-500" },
    { category: "Cloud & DevOps", technologies: ["AWS", "Azure", "GCP", "Docker/K8s", "Terraform"], color: "from-indigo-500 to-purple-500" },
    { category: "AI/ML", technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain"], color: "from-rose-500 to-orange-500" }
  ]

  const caseStudies = [
    {
      title: "Healthcare AI Platform",
      industry: "Healthcare",
      description: "AI-powered diagnostic assistant reducing diagnosis time by 60%",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      results: ["60% faster diagnosis", "95% accuracy", "50k+ patients served"],
      rating: 4.9,
      image: "🏥"
    },
    {
      title: "FinTech Trading Platform",
      industry: "Finance",
      description: "Real-time trading system handling 100k+ transactions per second",
      tech: ["Go", "React", "Redis", "Kafka"],
      results: ["100k+ TPS", "99.99% uptime", "$2B+ processed"],
      rating: 4.8,
      image: "💰"
    },
    {
      title: "Logistics Optimization Engine",
      industry: "Logistics",
      description: "AI route optimization reducing delivery costs by 35%",
      tech: ["Next.js", "Python", "PostgreSQL", "GraphQL"],
      results: ["35% cost reduction", "25% faster delivery", "10k+ daily routes"],
      rating: 4.9,
      image: "🚚"
    },
    {
      title: "E-Learning Platform",
      industry: "Education",
      description: "Scalable platform serving 1M+ active users with personalized learning",
      tech: ["Vue.js", "Node.js", "MongoDB", "AWS"],
      results: ["1M+ users", "40% engagement increase", "95% retention"],
      rating: 4.7,
      image: "📚"
    }
  ]

  const advantages = [
    { value: "100%", label: "Tailored Solution", description: "Exactly to your needs" },
    { value: "60%", label: "Faster Operations", description: "Process automation" },
    { value: "99.9%", label: "System Reliability", description: "Enterprise-grade" },
    { value: "3x", label: "ROI", description: "Average return on investment" }
  ]

  const industries = [
    { name: "Healthcare", icon: "🏥", count: "45+ projects", tech: "AI, IoT, Telemedicine" },
    { name: "FinTech", icon: "💰", count: "38+ projects", tech: "Blockchain, Trading, Banking" },
    { name: "E-Commerce", icon: "🛒", count: "62+ projects", tech: "Marketplaces, Payments, Analytics" },
    { name: "Logistics", icon: "🚚", count: "31+ projects", tech: "Tracking, Optimization, Fleet" },
    { name: "Real Estate", icon: "🏢", count: "28+ projects", tech: "CRM, Listings, VR Tours" },
    { name: "Education", icon: "🎓", count: "52+ projects", tech: "LMS, Analytics, Mobile" },
    { name: "Manufacturing", icon: "🏭", count: "34+ projects", tech: "IoT, MES, Quality" },
    { name: "Media & Entertainment", icon: "🎬", count: "27+ projects", tech: "Streaming, CMS, Social" }
  ]

  const developmentModels = [
    { name: "Fixed Price", description: "Defined scope, timeline, and budget", bestFor: "Well-defined projects", icon: <Target className="w-5 h-5" /> },
    { name: "Time & Material", description: "Flexible scope with hourly billing", bestFor: "Evolving requirements", icon: <Clock className="w-5 h-5" /> },
    { name: "Dedicated Team", description: "Full-time developers as an extension", bestFor: "Long-term development", icon: <Users className="w-5 h-5" /> },
    { name: "MVP Development", description: "Launch quickly with core features", bestFor: "Startups & validation", icon: <Rocket className="w-5 h-5" /> }
  ]

  const clients = [
    { name: "TechCorp", logo: "🏢", industry: "Enterprise", project: "Cloud ERP System" },
    { name: "MediHealth", logo: "🏥", industry: "Healthcare", project: "AI Diagnostic Platform" },
    { name: "FinSmart", logo: "💳", industry: "FinTech", project: "Trading Platform" },
    { name: "LogiNext", logo: "📦", industry: "Logistics", project: "Route Optimizer" },
    { name: "EduTech", logo: "📖", industry: "Education", project: "LMS Platform" },
    { name: "RetailPro", logo: "🏪", industry: "Retail", project: "Inventory System" }
  ]

  const integrations = [
    "Stripe/PayPal", "Salesforce", "Shopify/Magento", "Slack/Teams",
    "QuickBooks/Xero", "AWS/Azure/GCP", "Twilio/SendGrid", "Zendesk",
    "Google APIs", "Facebook/Instagram", "WordPress/Contentful", "Tableau/PowerBI"
  ]

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-black">
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
              <Code2 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">Custom Software Development</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Build Software
              </span>
              <br />
              <span className="text-white">That Fits Perfectly</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Custom software solutions tailored to your unique business needs. 
              <span className="text-purple-400 font-semibold"> Scalable, secure,</span> and 
              <span className="text-pink-400 font-semibold"> built for growth</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <button className="group px-8 py-4 rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
              Get Free Consultation
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto"
          >
            {["10+ Years Experience", "200+ Projects Delivered", "50+ Expert Developers", "24/7 Support"].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">{badge}</span>
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
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Build
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive software development services for every need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="px-6 py-24 bg-linear-to-b from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology for delivering successful software
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-gray-800/30 border border-gray-700 group hover:border-purple-500/50 transition-all"
              >
                <div className="absolute top-4 right-4 text-4xl font-bold text-purple-500/20">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs">
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modern tech stack for building future-proof applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700"
              >
                <h3 className={`text-xl font-bold bg-linear-to-r ${stack.color} bg-clip-text text-transparent mb-4`}>
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-gray-700/50 text-gray-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real projects delivering real results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{study.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.title}</h3>
                      <p className="text-purple-400 text-sm">{study.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm">{study.rating}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-lg bg-gray-700 text-gray-300 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-700">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-green-400 text-xs font-semibold">{result}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Domain expertise across multiple sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{industry.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold">{industry.name}</h3>
                    <p className="text-purple-400 text-xs">{industry.count}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">{industry.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Models */}
      <section className="px-6 py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the model that fits your project needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  {model.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{model.description}</p>
                <p className="text-purple-400 text-xs">Best for: {model.bestFor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Over 200+ successful deliveries across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700"
              >
                <div className="text-4xl mb-2">{client.logo}</div>
                <div className="text-white font-semibold text-sm">{client.name}</div>
                <div className="text-gray-400 text-xs">{client.industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-24 bg-linear-to-b from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Trusted{' '}
                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Technology Partner
                </span>
              </h2>
              <div className="space-y-4">
                {[
                  "End-to-end development from concept to deployment",
                  "Agile methodology with transparent communication",
                  "Dedicated teams that feel like an extension of yours",
                  "Focus on scalability, security, and performance",
                  "Post-launch support and maintenance",
                  "Competitive pricing with flexible engagement"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white text-center mb-6">Development Highlights</h3>
                <div className="space-y-4">
                  {[
                    { metric: "500+", label: "Sprints Completed", color: "purple" },
                    { metric: "50k+", label: "Code Commits", color: "pink" },
                    { metric: "100%", label: "Client Satisfaction", color: "indigo" },
                    { metric: "24/7", label: "Support Available", color: "purple" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-gray-700/30">
                      <span className="text-gray-300">{item.label}</span>
                      <span className={`text-${item.color}-400 font-bold text-xl`}>{item.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
              Seamless Integrations
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Connect with your favorite tools and services
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-gray-800/30 border border-gray-700"
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300 text-sm">{integration}</span>
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
          <div className="relative rounded-3xl bg-linear-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 p-12 border border-purple-500/30">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-10" />
            <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let&apos;s discuss your idea and turn it into reality
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
                Schedule Discovery Call
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}