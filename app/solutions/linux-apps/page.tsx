'use client'

import { motion } from 'framer-motion'
import { 
  Terminal, 
  ShieldCheck, 
  Gauge, 
  Cpu,
  Cloud,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  GitBranch,
  Database,
  Lock,
  Container,
  Server,
  Network,
  HardDrive,
  Workflow} from 'lucide-react'

export default function LinuxPage() {
  const features = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Bash & ZSH",
      description: "Advanced shell scripting with powerful command-line utilities and automation"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Kernel 6.x",
      description: "Latest Linux kernel with enhanced performance, security, and hardware support"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security Hardening",
      description: "SELinux, AppArmor, firewalls, and comprehensive system protection"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance Tuning",
      description: "Optimized for low latency, high throughput, and maximum efficiency"
    },
    {
      icon: <Container className="w-6 h-6" />,
      title: "Containerization",
      description: "Docker, Podman, Kubernetes for scalable microservices deployment"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Native",
      description: "AWS, Azure, GCP integration and hybrid cloud deployments"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Server Management",
      description: "Nginx, Apache, MySQL, PostgreSQL, Redis optimization"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Networking Stack",
      description: "Advanced routing, iptables, and network security configurations"
    }
  ]

  const advantages = [
    { value: "99.99%", label: "Uptime", description: "Enterprise-grade reliability" },
    { value: "60%", label: "Cost Savings", description: "Compared to proprietary OS" },
    { value: "24/7", label: "Support", description: "Global community and experts" },
    { value: "10M+", label: "Servers", description: "Running Linux worldwide" }
  ]

  const techStack = [
    { name: "Ubuntu Server", level: "Expert", color: "from-orange-500 to-red-500" },
    { name: "Red Hat Enterprise", level: "Advanced", color: "from-red-600 to-red-800" },
    { name: "Debian", level: "Expert", color: "from-pink-500 to-rose-500" },
    { name: "Alpine Linux", level: "Advanced", color: "from-blue-500 to-cyan-500" },
    { name: "Kubernetes", level: "Expert", color: "from-blue-600 to-purple-600" },
    { name: "Docker", level: "Expert", color: "from-sky-500 to-blue-500" },
    { name: "Ansible", level: "Advanced", color: "from-red-500 to-orange-500" },
    { name: "Terraform", level: "Advanced", color: "from-purple-500 to-indigo-500" }
  ]

  const distributions = [
    {
      name: "Ubuntu",
      description: "Most popular for cloud and development",
      icon: <Terminal className="w-5 h-5" />,
      useCase: "Cloud, Development, AI/ML"
    },
    {
      name: "Red Hat",
      description: "Enterprise standard with premium support",
      icon: <ShieldCheck className="w-5 h-5" />,
      useCase: "Enterprise, Finance, Government"
    },
    {
      name: "Debian",
      description: "Rock-solid stability for servers",
      icon: <Server className="w-5 h-5" />,
      useCase: "Web Servers, Databases"
    },
    {
      name: "Alpine",
      description: "Minimal and security-focused",
      icon: <Container className="w-5 h-5" />,
      useCase: "Containers, IoT, Edge"
    },
    {
      name: "CentOS Stream",
      description: "RHEL-compatible rolling release",
      icon: <Cpu className="w-5 h-5" />,
      useCase: "Development, Testing"
    },
    {
      name: "Rocky Linux",
      description: "RHEL-compatible community edition",
      icon: <HardDrive className="w-5 h-5" />,
      useCase: "Production Servers"
    }
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description: "High-traffic e-commerce serving 1M+ monthly users with 99.99% uptime",
      tech: ["Ubuntu", "Kubernetes", "PostgreSQL"],
      rating: 4.9,
      uptime: "99.99%"
    },
    {
      title: "Financial Trading System",
      description: "Low-latency trading platform with sub-millisecond response times",
      tech: ["Red Hat", "Redis", "Kafka"],
      rating: 4.8,
      uptime: "99.999%"
    },
    {
      title: "Healthcare Data Platform",
      description: "HIPAA-compliant data processing for major hospital network",
      tech: ["Debian", "Docker", "Ansible"],
      rating: 4.9,
      uptime: "99.99%"
    }
  ]

  const useCases = [
    { name: "Web Servers", icon: <Globe className="w-5 h-5" />, description: "Nginx, Apache, Caddy" },
    { name: "Databases", icon: <Database className="w-5 h-5" />, description: "MySQL, PostgreSQL, MongoDB" },
    { name: "Containers", icon: <Container className="w-5 h-5" />, description: "Docker, Kubernetes, LXC" },
    { name: "DevOps", icon: <Workflow className="w-5 h-5" />, description: "CI/CD, Jenkins, GitLab" },
    { name: "Cloud", icon: <Cloud className="w-5 h-5" />, description: "AWS, GCP, Azure" },
    { name: "Edge", icon: <Network className="w-5 h-5" />, description: "IoT, CDN, 5G Edge" }
  ]

  const performanceMetrics = [
    { metric: "CPU Efficiency", value: 95, improvement: "+40%", color: "from-amber-500 to-red-500" },
    { metric: "Memory Usage", value: 30, improvement: "-50%", color: "from-green-500 to-emerald-500" },
    { metric: "Boot Time", value: 85, improvement: "-60%", color: "from-blue-500 to-cyan-500" },
    { metric: "Network Throughput", value: 98, improvement: "+80%", color: "from-purple-500 to-pink-500" }
  ]

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse delay-1000" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <Terminal className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">Linux Development</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-linear-to-r from-amber-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
                Linux Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade 
              <span className="text-amber-400 font-semibold"> Linux systems</span>, 
              <span className="text-red-400 font-semibold"> cloud infrastructure</span>, and 
              <span className="text-purple-400 font-semibold"> container orchestration</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <button className="group px-8 py-4 rounded-2xl bg-linear-to-r from-amber-500 to-red-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Your Linux Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
              View Infrastructure Portfolio
            </button>
          </motion.div>

          {/* Distribution Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {distributions.slice(0, 4).map((distro, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-gray-700">
                <div className="text-amber-400">{distro.icon}</div>
                <div>
                  <div className="text-white text-sm font-semibold">{distro.name}</div>
                  <div className="text-gray-400 text-xs">{distro.useCase}</div>
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
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-amber-400 to-red-400 bg-clip-text text-transparent mb-2">
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
              Enterprise Linux Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive Linux solutions for modern infrastructure
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
                className="group p-6 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Advantage Section */}
      <section className="px-6 py-24 bg-linear-to-b from-amber-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Gauge className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">Performance Optimized</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Unmatched{' '}
                <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Performance & Efficiency
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Linux powers 90% of the cloud and 100% of supercomputers. 
                Our optimized configurations deliver maximum performance with minimal resource usage.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom kernel tuning for your workload",
                  "CPU isolation and NUMA optimization",
                  "Low-latency real-time patches available",
                  "IO scheduler optimization for storage"
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
              <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Performance Metrics</h3>
                </div>
                <div className="space-y-4">
                  {performanceMetrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{metric.metric}</span>
                        <span>
                          <span className="text-green-400">{metric.improvement}</span>
                          <span className="text-gray-500 ml-2">{metric.value}%</span>
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-linear-to-r ${metric.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Linux Distributions Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Supported Distributions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Multi-distribution expertise for any environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {distributions.map((distro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-amber-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-amber-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {distro.icon}
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold">{distro.name}</div>
                  <div className="text-gray-400 text-sm">{distro.description}</div>
                </div>
                <div className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">
                  {distro.useCase.split(',')[0]}
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
              Expert-level proficiency in Linux technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700 group hover:border-amber-500/50 transition-colors"
              >
                <span className="text-white font-semibold group-hover:text-amber-400 transition-colors">
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

      {/* Use Cases Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise Use Cases
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Linux powers the world&apos;s most critical infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-red-500 flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{useCase.name}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="px-6 py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-red-500 to-amber-500 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-linear-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🛡️</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Security Features</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "SELinux / AppArmor Mandatory Access Control",
                      "Firewall & IDS/IPS Integration",
                      "Full Disk Encryption Support",
                      "Auditd System Auditing"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30">
                        <Lock className="w-4 h-4 text-amber-400" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-semibold">Security First</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade{' '}
                <span className="bg-linear-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">
                  Security Hardening
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Linux provides the most secure foundation for your infrastructure. 
                We implement defense-in-depth strategies to protect your systems.
              </p>
              <ul className="space-y-3">
                {[
                  "CIS Benchmark Compliance",
                  "PCI-DSS & HIPAA Ready",
                  "Automated Security Patching",
                  "Zero-Trust Architecture Support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
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
              Infrastructure Deployments
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enterprise-scale Linux implementations we&apos;ve delivered
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
                className="group p-6 rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold">{project.rating}</span>
                  </div>
                  <div className="text-xs text-amber-400 bg-amber-400/10 px-2 py-1 rounded-full">
                    {project.uptime} uptime
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed">{project.description}</p>
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

      {/* DevOps & Automation Section */}
      <section className="px-6 py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <GitBranch className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">DevOps Automation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Infrastructure as{' '}
                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Code
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Automate everything. We implement CI/CD pipelines, configuration 
                management, and infrastructure automation for repeatable deployments.
              </p>
              <ul className="space-y-3">
                {[
                  "Terraform for cloud provisioning",
                  "Ansible for configuration management",
                  "GitLab CI / GitHub Actions pipelines",
                  "Prometheus + Grafana monitoring"
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
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold text-white mb-2">Automation Benefits</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Deployment Time</span>
                    <span className="text-green-400 font-bold">-85%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Recovery Time (MTTR)</span>
                    <span className="text-green-400 font-bold">-70%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-gray-700/30">
                    <span className="text-gray-300">Human Error</span>
                    <span className="text-green-400 font-bold">-95%</span>
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
          <div className="relative rounded-3xl bg-linear-to-r from-amber-600/20 via-red-600/20 to-purple-600/20 p-12 border border-amber-500/30">
            <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-red-500 rounded-3xl blur-3xl opacity-10" />
            <Terminal className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Linux Infrastructure?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let&apos;s build a robust, scalable, and secure Linux environment for your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-4 rounded-2xl bg-linear-to-r from-amber-500 to-red-500 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Start Your Linux Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-gray-600 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300">
                View Infrastructure Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}