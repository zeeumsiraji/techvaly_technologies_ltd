'use client'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  TrendingUp, 
  Users2, 
  FileText, 
  PieChart, 
  Building2,
  ShoppingCart,
  Truck,
  UserCheck,
  Clock,
  DollarSign,
  BarChart3,
  Shield,
  Zap,
  Database,
  Cloud,
  Lock,
  Mail,
  Calendar,
  MessageCircle,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Settings,
  Download,
  Printer,
  QrCode
} from 'lucide-react'

export default function BusinessPage() {
  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Complete ERP System",
      description: "Integrated financial management, supply chain, operations, and reporting"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Real-time stock tracking, multi-warehouse, barcode scanning, and auto-reordering"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "CRM & Sales Automation",
      description: "Lead tracking, pipeline management, customer insights, and sales forecasting"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "HRM & Payroll",
      description: "Employee management, attendance, leave tracking, and payroll processing"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Management",
      description: "Secure document storage, version control, e-signatures, and workflows"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Business Intelligence",
      description: "Real-time dashboards, predictive analytics, and custom reporting"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Supply Chain Management",
      description: "Vendor management, purchase orders, and logistics tracking"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financial Management",
      description: "General ledger, accounts payable/receivable, and tax compliance"
    }
  ]

  const advantages = [
    { value: "40%", label: "Efficiency Gain", description: "Process automation" },
    { value: "30%", label: "Cost Reduction", description: "Operational savings" },
    { value: "99.9%", label: "Data Accuracy", description: "Automated validation" },
    { value: "24/7", label: "System Access", description: "Cloud-based" }
  ]

  const modules = [
    { name: "Financial Management", icon: <DollarSign className="w-5 h-5" />, features: "GL, AP, AR, Tax, Budgeting" },
    { name: "Sales & CRM", icon: <TrendingUp className="w-5 h-5" />, features: "Leads, Opportunities, Quotes, Invoicing" },
    { name: "Inventory & Warehouse", icon: <ShoppingCart className="w-5 h-5" />, features: "Stock, Barcode, Transfers, Reordering" },
    { name: "Manufacturing", icon: <Settings className="w-5 h-5" />, features: "BOM, Work Orders, Quality Control" },
    { name: "HR & Payroll", icon: <Users2 className="w-5 h-5" />, features: "Recruitment, Attendance, Payroll" },
    { name: "Project Management", icon: <Clock className="w-5 h-5" />, features: "Tasks, Time Tracking, Milestones" },
    { name: "Supply Chain", icon: <Truck className="w-5 h-5" />, features: "Vendors, Purchase Orders, Logistics" },
    { name: "Business Intelligence", icon: <PieChart className="w-5 h-5" />, features: "Dashboards, Reports, Analytics" }
  ]

  const techStack = [
    { name: "React/Next.js", level: "Expert", color: "from-cyan-500 to-blue-500" },
    { name: "Node.js/Nest.js", level: "Expert", color: "from-green-600 to-emerald-600" },
    { name: "PostgreSQL", level: "Expert", color: "from-blue-600 to-indigo-600" },
    { name: "Redis/Memcached", level: "Advanced", color: "from-red-600 to-orange-600" },
    { name: "Docker/K8s", level: "Expert", color: "from-blue-500 to-cyan-500" },
    { name: "GraphQL/REST", level: "Expert", color: "from-pink-500 to-rose-500" },
    { name: "Elasticsearch", level: "Advanced", color: "from-yellow-600 to-orange-600" },
    { name: "AWS/Azure/GCP", level: "Expert", color: "from-purple-500 to-pink-500" }
  ]

  const industries = [
    { name: "Retail & E-commerce", icon: <ShoppingCart className="w-5 h-5" />, clients: "150+", description: "Inventory, POS, CRM" },
    { name: "Manufacturing", icon: <Settings className="w-5 h-5" />, clients: "80+", description: "Production, Quality, Supply Chain" },
    { name: "Healthcare", icon: <Shield className="w-5 h-5" />, clients: "60+", description: "Patient Records, Billing, Compliance" },
    { name: "Logistics", icon: <Truck className="w-5 h-5" />, clients: "90+", description: "Fleet, Tracking, Warehousing" },
    { name: "Real Estate", icon: <Building2 className="w-5 h-5" />, clients: "70+", description: "Property Management, CRM" },
    { name: "Education", icon: <Users2 className="w-5 h-5" />, clients: "100+", description: "Student Records, Finance, HR" }
  ]

  const projects = [
    {
      title: "Enterprise Retail ERP",
      description: "Complete ERP solution for 500+ store retail chain",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      metrics: "500+ stores, 10k+ users",
      rating: 4.9,
      roi: "35% cost reduction"
    },
    {
      title: "Manufacturing Management System",
      description: "Production planning, quality control, and supply chain integration",
      tech: ["Next.js", "GraphQL", "MongoDB", "Docker"],
      metrics: "50+ production lines",
      rating: 4.8,
      roi: "25% efficiency gain"
    },
    {
      title: "Logistics & Fleet Management",
      description: "Real-time tracking, route optimization, and warehouse management",
      tech: ["React", "WebSocket", "PostgreSQL", "Redis"],
      metrics: "1000+ vehicles",
      rating: 4.9,
      roi: "20% fuel savings"
    }
  ]

  const complianceFeatures = [
    { name: "GDPR Compliant", status: "Certified", icon: <Lock className="w-4 h-4" /> },
    { name: "Data Encryption", status: "AES-256", icon: <Shield className="w-4 h-4" /> },
    { name: "Audit Trails", status: "Complete", icon: <FileText className="w-4 h-4" /> },
    { name: "Role-based Access", status: "Granular", icon: <Users2 className="w-4 h-4" /> },
    { name: "Backup & Recovery", status: "Automated", icon: <Database className="w-4 h-4" /> },
    { name: "SLA Guarantee", status: "99.9%", icon: <Clock className="w-4 h-4" /> }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-semibold">Business Software</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Business Software
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade ERP, CRM, and management systems that 
              <span className="text-blue-400 font-semibold"> streamline operations</span>, 
              <span className="text-indigo-400 font-semibold"> boost efficiency</span>, and 
              <span className="text-cyan-400 font-semibold"> drive growth</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Schedule Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
              Request Quote
            </button>
          </motion.div>

          {/* Compliance Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto"
          >
            {complianceFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white/5 border border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="text-blue-400">{feature.icon}</div>
                  <span className="text-gray-300 text-xs">{feature.name}</span>
                </div>
                <span className="text-green-400 text-xs font-semibold">{feature.status}</span>
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
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
              Comprehensive Business Solutions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              End-to-end software for every business function
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
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Modules Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Integrated Business Modules
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fully integrated modules that work seamlessly together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    {module.icon}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    {module.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs pl-11">{module.features}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Architecture Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">ERP Architecture</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Modern{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cloud ERP
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Cloud-native ERP solution with real-time data synchronization, 
                automated workflows, and AI-powered insights for better decision-making.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time data across all departments",
                  "Automated approval workflows",
                  "Mobile access for field operations",
                  "AI-powered forecasting and analytics",
                  "Seamless third-party integrations"
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
                <div className="text-center mb-6">
                  <Cloud className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Cloud ERP Benefits</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Deployment Time</span>
                    <span className="text-purple-400 font-bold">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Cost Savings</span>
                    <span className="text-purple-400 font-bold">30-50%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Scalability</span>
                    <span className="text-green-400 font-bold">Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Updates</span>
                    <span className="text-green-400 font-bold">Automatic</span>
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
              Modern technologies powering enterprise business software
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-blue-500/50 transition-colors"
              >
                <span className="text-white font-semibold group-hover:text-blue-400 transition-colors">
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

      {/* Industries Served Section */}
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
              Tailored solutions for diverse business sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{industry.name}</h3>
                    <p className="text-blue-400 text-xs">{industry.clients} clients</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Real results from our business software implementations
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
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">{project.rating}</span>
                  </div>
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>
                <div className="text-xs text-blue-400 mb-3">{project.metrics}</div>
                <div className="text-xs text-green-400 mb-3">ROI: {project.roi}</div>
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

      {/* Business Intelligence Section */}
      <section className="px-6 py-24">
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
                    <PieChart className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Real-time Analytics</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Executive Dashboards",
                      "KPI Tracking",
                      "Predictive Analytics",
                      "Custom Reports",
                      "Data Visualization"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30">
                        <BarChart3 className="w-4 h-4 text-green-400" />
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
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">Business Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data-Driven{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Decision Making
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Transform raw data into actionable insights with powerful BI tools. 
                Make better decisions faster with real-time analytics and predictive modeling.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time operational dashboards",
                  "AI-powered sales forecasting",
                  "Customer behavior analytics",
                  "Financial performance tracking",
                  "Supply chain optimization insights"
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

      {/* Integration & Automation Section */}
      <section className="px-6 py-24 bg-gray-900/30">
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
              Connect with your existing business tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Accounting Software (QuickBooks, Xero)",
              "Payment Gateways (Stripe, PayPal)",
              "E-commerce Platforms (Shopify, WooCommerce)",
              "Email Marketing (Mailchimp, SendGrid)",
              "Customer Support (Zendesk, Freshdesk)",
              "Communication (Slack, Teams)",
              "Calendar (Google, Outlook)",
              "Document Signing (DocuSign, HelloSign)"
            ].map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/30 border border-gray-700"
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
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-600/20 p-12 border border-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-10" />
            <Briefcase className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business Operations
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how our business software can streamline your operations and drive growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}