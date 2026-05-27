'use client'

import { motion } from 'framer-motion'
import { 
  Bot,
  Workflow,
  Zap,
  TrendingUp,
  Users,
  Shield,
  Clock,
  DollarSign,
  Settings,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Database,
  Cloud,
  Lock,
  Mail,
  MessageCircle,
  Calendar,
  FileText,
  GitBranch,
  TestTube,
  Cpu,
  Globe,
  Smartphone,
  Server,
  Gauge,
  Infinity,
  Target,
  Lightbulb,
  Rocket,
  Sparkles,
  Braces,
  Boxes,
  Layers,
  Terminal,
  PieChart,
  Activity,
  Bell,
  RefreshCw,
  Filter,
  Search,
  Sliders,
  ToggleLeft,
  Radio,
  Wifi,
  Bluetooth,
  Cctv,
  Thermometer,
  Droplet,
  Wind,
  Sun,
  Moon,
  Battery,
  Car,
  Truck,
  Package,
  ShoppingCart
} from 'lucide-react'

export default function AutomationPage() {
  const automationTypes = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Business Process Automation",
      description: "Streamline repetitive tasks, approvals, and workflows across departments"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Robotic Process Automation (RPA)",
      description: "Software robots that mimic human actions to automate routine digital tasks"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered Automation",
      description: "Intelligent automation with machine learning for complex decision-making"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "IT & Infrastructure Automation",
      description: "Automated provisioning, monitoring, and management of IT systems"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Supply Chain Automation",
      description: "End-to-end automation of procurement, inventory, and logistics"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "HR & Workforce Automation",
      description: "Automated onboarding, payroll, attendance, and performance tracking"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Marketing Automation",
      description: "Automated email campaigns, lead scoring, and customer journeys"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Customer Service Automation",
      description: "Chatbots, ticket routing, and automated response systems"
    }
  ]

  const benefits = [
    { value: "70%", label: "Time Savings", description: "On routine tasks" },
    { value: "50%", label: "Cost Reduction", description: "Operational expenses" },
    { value: "99.9%", label: "Error Reduction", description: "Compared to manual" },
    { value: "24/7", label: "Operations", description: "Non-stop productivity" },
    { value: "3x", label: "Faster Processing", description: "Workflow efficiency" },
    { value: "100%", label: "Compliance", description: "Consistent rule following" }
  ]

  const useCases = [
    {
      title: "Invoice Processing",
      description: "Automated extraction, validation, and approval of invoices",
      metrics: "80% faster processing",
      roi: "70% cost reduction",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Customer Onboarding",
      description: "Automated KYC, document verification, and account setup",
      metrics: "90% faster onboarding",
      roi: "60% reduction in manual work",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Inventory Management",
      description: "Real-time stock tracking and auto-reordering",
      metrics: "95% inventory accuracy",
      roi: "40% reduction in stockouts",
      icon: <Package className="w-5 h-5" />
    },
    {
      title: "Email Marketing",
      description: "Automated campaigns, segmentation, and personalization",
      metrics: "3x engagement rate",
      roi: "50% higher conversion",
      icon: <Mail className="w-5 h-5" />
    },
    {
      title: "Data Entry & Migration",
      description: "Automated data extraction, validation, and migration",
      metrics: "99.9% accuracy",
      roi: "85% time saved",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Report Generation",
      description: "Automated data aggregation and report creation",
      metrics: "Real-time reporting",
      roi: "80% faster insights",
      icon: <BarChart3 className="w-5 h-5" />
    }
  ]

  const technologies = [
    { category: "RPA Tools", tools: ["UiPath", "Automation Anywhere", "Blue Prism", "Power Automate"], color: "from-blue-500 to-cyan-500" },
    { category: "Workflow Engines", tools: ["Apache Airflow", "Temporal", "Camunda", "Zapier"], color: "from-green-500 to-emerald-500" },
    { category: "AI/ML Platforms", tools: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"], color: "from-purple-500 to-pink-500" },
    { category: "Integration Tools", tools: ["MuleSoft", "Dell Boomi", "Workato", "Tray.io"], color: "from-orange-500 to-red-500" },
    { category: "Monitoring & Analytics", tools: ["Datadog", "Splunk", "Dynatrace", "New Relic"], color: "from-indigo-500 to-purple-500" },
    { category: "Cloud Platforms", tools: ["AWS Step Functions", "Azure Logic Apps", "Google Workflows"], color: "from-rose-500 to-orange-500" }
  ]

  const industries = [
    { name: "Banking & Finance", icon: "🏦", automation: "Loan processing, fraud detection, compliance" },
    { name: "Healthcare", icon: "🏥", automation: "Patient scheduling, claims processing, records" },
    { name: "Manufacturing", icon: "🏭", automation: "Production lines, quality control, maintenance" },
    { name: "Retail & E-commerce", icon: "🛒", automation: "Order processing, inventory, pricing" },
    { name: "Logistics & Supply Chain", icon: "🚚", automation: "Route optimization, tracking, warehousing" },
    { name: "Insurance", icon: "📋", automation: "Claims processing, underwriting, policy management" },
    { name: "Telecommunications", icon: "📡", automation: "Network monitoring, customer service, billing" },
    { name: "Real Estate", icon: "🏢", automation: "Lead management, document processing, scheduling" }
  ]

  const process = [
    { step: "01", title: "Assessment", description: "Identify automation opportunities and ROI potential", duration: "2-3 weeks", icon: <Search className="w-6 h-6" /> },
    { step: "02", title: "Design", description: "Process mapping and solution architecture", duration: "2-4 weeks", icon: <Workflow className="w-6 h-6" /> },
    { step: "03", title: "Development", description: "Build and configure automation workflows", duration: "4-8 weeks", icon: <Bot className="w-6 h-6" /> },
    { step: "04", title: "Testing", description: "Validation, error handling, and optimization", duration: "2-3 weeks", icon: <TestTube className="w-6 h-6" /> },
    { step: "05", title: "Deployment", description: "Production rollout and monitoring setup", duration: "1-2 weeks", icon: <Rocket className="w-6 h-6" /> },
    { step: "06", title: "Optimization", description: "Continuous improvement and scaling", duration: "Ongoing", icon: <Gauge className="w-6 h-6" /> }
  ]

  const successStories = [
    {
      title: "Banking Giant - Loan Processing",
      description: "Automated loan application processing and underwriting",
      results: ["75% faster approvals", "60% cost reduction", "99% accuracy"],
      metrics: "10,000+ loans/month",
      rating: 4.9,
      icon: "🏦"
    },
    {
      title: "E-commerce Leader - Order Management",
      description: "End-to-end order processing automation",
      results: ["80% faster fulfillment", "50% fewer errors", "3x order volume"],
      metrics: "50,000+ orders/day",
      rating: 4.8,
      icon: "🛒"
    },
    {
      title: "Healthcare Provider - Claims Processing",
      description: "Automated insurance claims processing and verification",
      results: ["90% faster processing", "85% cost reduction", "99.5% accuracy"],
      metrics: "5,000+ claims/day",
      rating: 4.9,
      icon: "🏥"
    },
    {
      title: "Manufacturing - Supply Chain",
      description: "End-to-end supply chain automation from PO to delivery",
      results: ["60% faster procurement", "40% inventory reduction", "95% on-time delivery"],
      metrics: "$500M+ managed",
      rating: 4.7,
      icon: "🏭"
    }
  ]

  const features = [
    { name: "Intelligent Document Processing", description: "Extract data from PDFs, invoices, forms", icon: <FileText className="w-4 h-4" /> },
    { name: "Workflow Orchestration", description: "Complex multi-step process automation", icon: <Workflow className="w-4 h-4" /> },
    { name: "Real-time Monitoring", description: "Dashboards and analytics for automation", icon: <Activity className="w-4 h-4" /> },
    { name: "Exception Handling", description: "Smart error management and escalation", icon: <Bell className="w-4 h-4" /> },
    { name: "Audit Trails", description: "Complete logging and compliance tracking", icon: <FileText className="w-4 h-4" /> },
    { name: "API Integration", description: "Connect with any system or application", icon: <GitBranch className="w-4 h-4" /> }
  ]

  const integrations = [
    "Salesforce", "SAP", "Oracle", "Microsoft Dynamics",
    "QuickBooks", "Xero", "Shopify", "Magento",
    "Slack", "Teams", "Gmail", "Outlook",
    "Zendesk", "HubSpot", "Marketo", "Mailchimp"
  ]

  const automationMaturity = [
    { level: "Basic", description: "Simple task automation", icon: <ToggleLeft className="w-5 h-5" /> },
    { level: "Advanced", description: "Cross-system workflows", icon: <GitBranch className="w-5 h-5" /> },
    { level: "Intelligent", description: "AI-powered decision making", icon: <Cpu className="w-5 h-5" /> },
    { level: "Cognitive", description: "Self-learning automation", icon: <Brain className="w-5 h-5" /> }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full blur-3xl animate-pulse delay-500" />
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
              <Bot className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">Intelligent Automation</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Automate Smarter
              </span>
              <br />
              <span className="text-white">Not Harder</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with intelligent automation. 
              <span className="text-cyan-400 font-semibold"> Reduce costs</span>, 
              <span className="text-blue-400 font-semibold"> eliminate errors</span>, and 
              <span className="text-teal-400 font-semibold"> scale operations</span> with cutting-edge automation solutions
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
              Start Automation Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
              Get Free Assessment
            </button>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto"
          >
            {["500+ Processes Automated", "40+ Enterprise Clients", "85% Avg Efficiency Gain", "24/7 Operations"].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Stats Section */}
      <section className="px-6 py-16 border-t border-b border-gray-800 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-gray-400 text-xs">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Grid */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Automation Solutions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive automation for every aspect of your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-24 bg-gradient-to-b from-cyan-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Popular Use Cases
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proven automation solutions delivering measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700 group hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">{useCase.description}</p>
                <div className="flex justify-between text-xs">
                  <span className="text-cyan-400">{useCase.metrics}</span>
                  <span className="text-green-400">{useCase.roi}</span>
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
              Automation Technology Stack
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enterprise-grade tools for robust automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700"
              >
                <h3 className={`text-xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent mb-4`}>
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-gray-700/50 text-gray-300 text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="px-6 py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industries We Automate
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Industry-specific automation solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{industry.icon}</span>
                  <h3 className="text-white font-semibold">{industry.name}</h3>
                </div>
                <p className="text-gray-400 text-xs">{industry.automation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Automation Implementation Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Structured approach to successful automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-gray-800/30 border border-gray-700 group hover:border-cyan-500/50 transition-all"
              >
                <div className="absolute top-4 right-4 text-4xl font-bold text-cyan-500/20">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs">
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 py-24 bg-gradient-to-b from-cyan-900/20 to-transparent">
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
              Real results from our automation implementations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{story.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{story.title}</h3>
                      <p className="text-gray-400 text-sm">{story.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm">{story.rating}</span>
                  </div>
                </div>
                <div className="text-cyan-400 text-sm mb-3">{story.metrics}</div>
                <div className="flex flex-wrap gap-2">
                  {story.results.map((result, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-lg bg-green-500/10 text-green-400 text-xs">
                      {result}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">Platform Features</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Automation Platform
                </span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-gray-800/30">
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{feature.name}</div>
                      <div className="text-gray-400 text-xs">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white text-center mb-6">Automation Maturity Model</h3>
                <div className="space-y-4">
                  {automationMaturity.map((level, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gray-700/30">
                      <div className="flex items-center gap-3">
                        {level.icon}
                        <span className="text-white font-semibold">{level.level}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{level.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
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
              Connect with your existing ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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

      {/* ROI Calculator Preview */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-teal-600/20 rounded-3xl p-12 border border-cyan-500/30 text-center"
          >
            <DollarSign className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Calculate Your Automation ROI
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              See how much you can save with intelligent automation
            </p>
            <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              Calculate Savings
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative rounded-3xl bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-teal-600/20 p-12 border border-cyan-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-10" />
            <Bot className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's identify the best automation opportunities for your organization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Start Automation Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
                Get Free Assessment
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

// Helper component for Brain icon (since it was missing)
function Brain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4a4 4 0 0 1 3.5 6A4 4 0 0 1 12 18a4 4 0 0 1-3.5-6A4 4 0 0 1 12 4z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}