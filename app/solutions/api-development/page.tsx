'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Lock,
  Zap,
  GitMerge,
  ShieldCheck,
  Server,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Activity,
  Gauge,
  Globe,
  BookOpen,
  Settings,
  Bell,
  FileJson,
  Key,
  Clock,
  BarChart3,
  Download,
} from 'lucide-react'

export default function APIPage() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'High-Performance APIs',
      description:
        'Sub-50ms response times with optimized endpoints and caching strategies',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Enterprise Security',
      description:
        'OAuth 2.0, JWT, API keys, rate limiting, and request validation',
    },
    {
      icon: <GitMerge className="h-6 w-6" />,
      title: 'REST & GraphQL',
      description: 'Both RESTful and GraphQL APIs with schema-first design',
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Microservices Architecture',
      description:
        'Scalable, decoupled services with API gateways and service discovery',
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: 'Real-time APIs',
      description:
        'WebSocket, Server-Sent Events, and real-time data streaming',
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Interactive Documentation',
      description:
        'OpenAPI/Swagger docs, Postman collections, and API explorers',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Analytics & Monitoring',
      description: 'Real-time metrics, logging, and performance monitoring',
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'API Versioning',
      description:
        'Semantic versioning with backward compatibility guarantees',
    },
  ]

  const advantages = [
    {
      value: '50ms',
      label: 'Avg Response Time',
      description: 'Optimized performance',
    },
    {
      value: '99.99%',
      label: 'Uptime SLA',
      description: 'Enterprise reliability',
    },
    {
      value: '1M+',
      label: 'Requests/Second',
      description: 'Scalable capacity',
    },
    {
      value: '24/7',
      label: 'Monitoring',
      description: 'Real-time alerts',
    },
  ]

  const apiTypes = [
    {
      name: 'REST API',
      icon: <Code2 className="h-5 w-5" />,
      features: 'HTTP methods, CRUD operations, Stateless',
    },
    {
      name: 'GraphQL',
      icon: <FileJson className="h-5 w-5" />,
      features: 'Schema-first, Type-safe, Flexible queries',
    },
    {
      name: 'WebSocket',
      icon: <Activity className="h-5 w-5" />,
      features: 'Real-time, Bidirectional, Persistent',
    },
    {
      name: 'gRPC',
      icon: <Zap className="h-5 w-5" />,
      features: 'High-performance, Protocol buffers, Streaming',
    },
    {
      name: 'Webhooks',
      icon: <Bell className="h-5 w-5" />,
      features: 'Event-driven, Callbacks, Async',
    },
    {
      name: 'SOAP',
      icon: <Globe className="h-5 w-5" />,
      features: 'Enterprise, WS-Security, Legacy',
    },
  ]

  const techStack = [
    { name: 'Node.js / Express', level: 'Expert', color: 'from-green-600 to-emerald-600' },
    { name: 'Python / FastAPI', level: 'Expert', color: 'from-blue-500 to-cyan-500' },
    { name: 'GraphQL / Apollo', level: 'Advanced', color: 'from-pink-500 to-rose-500' },
    { name: 'PostgreSQL / MongoDB', level: 'Expert', color: 'from-indigo-500 to-purple-500' },
    { name: 'Redis', level: 'Expert', color: 'from-red-600 to-orange-600' },
    { name: 'Kong / NGINX', level: 'Advanced', color: 'from-green-500 to-teal-500' },
    { name: 'Docker / K8s', level: 'Expert', color: 'from-blue-500 to-cyan-500' },
    { name: 'Prometheus / Grafana', level: 'Advanced', color: 'from-orange-600 to-yellow-600' },
  ]

  const securityFeatures = [
    {
      name: 'OAuth 2.0',
      status: 'Implemented',
      icon: <Key className="h-4 w-4" />,
    },
    {
      name: 'JWT Auth',
      status: 'Supported',
      icon: <Lock className="h-4 w-4" />,
    },
    {
      name: 'API Keys',
      status: 'Auto',
      icon: <Key className="h-4 w-4" />,
    },
    {
      name: 'Rate Limits',
      status: 'Configurable',
      icon: <Gauge className="h-4 w-4" />,
    },
    {
      name: 'CORS',
      status: 'Secured',
      icon: <ShieldCheck className="h-4 w-4" />,
    },
    {
      name: 'Validation',
      status: 'Strict',
      icon: <CheckCircle className="h-4 w-4" />,
    },
  ]

  const projects = [
    {
      title: 'Payment Gateway API',
      description: 'Secure payment processing API handling millions of transactions',
      tech: ['Node.js', 'Redis', 'PostgreSQL', 'Docker'],
      metrics: '10M+ requests/day',
      latency: '<100ms',
      rating: 4.9,
    },
    {
      title: 'Real-time Analytics API',
      description: 'WebSocket API for real-time data streaming and analytics',
      tech: ['Python', 'WebSocket', 'Kafka', 'MongoDB'],
      metrics: '1M+ concurrent users',
      latency: '<50ms',
      rating: 4.8,
    },
    {
      title: 'SaaS Platform API',
      description: 'Multi-tenant GraphQL API for enterprise SaaS platform',
      tech: ['GraphQL', 'Node.js', 'PostgreSQL', 'Redis'],
      metrics: '500+ tenants',
      latency: '<75ms',
      rating: 4.9,
    },
  ]

  const endpoints = [
    { method: 'GET', path: '/api/users', description: 'Retrieve user list', auth: 'JWT' },
    { method: 'POST', path: '/api/users', description: 'Create new user', auth: 'JWT' },
    { method: 'GET', path: '/api/users/:id', description: 'Get user by ID', auth: 'JWT' },
    { method: 'PUT', path: '/api/users/:id', description: 'Update user', auth: 'JWT' },
    { method: 'DELETE', path: '/api/users/:id', description: 'Delete user', auth: 'JWT' },
    { method: 'POST', path: '/api/auth/login', description: 'User authentication', auth: 'Public' },
  ]

  const monitoringStats = [
    {
      metric: 'Requests/sec',
      value: '1M+',
      icon: <Activity className="h-6 w-6 text-blue-400" />,
      card: 'bg-blue-500/20',
      text: 'text-blue-400',
    },
    {
      metric: 'Error Rate',
      value: '0.01%',
      icon: <Gauge className="h-6 w-6 text-green-400" />,
      card: 'bg-green-500/20',
      text: 'text-green-400',
    },
    {
      metric: 'Avg Latency',
      value: '45ms',
      icon: <Clock className="h-6 w-6 text-purple-400" />,
      card: 'bg-purple-500/20',
      text: 'text-purple-400',
    },
    {
      metric: 'Availability',
      value: '99.99%',
      icon: <Globe className="h-6 w-6 text-orange-400" />,
      card: 'bg-orange-500/20',
      text: 'text-orange-400',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-purple-600 blur-3xl delay-1000" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-cyan-500 blur-3xl delay-500" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
              <Code2 className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">
                API Development
              </span>
            </div>

            <h1 className="mb-6 text-6xl font-bold md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                API Development
              </span>
            </h1>

            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-300 md:text-2xl">
              Build scalable, secure, and high-performance APIs that{' '}
              <span className="font-semibold text-blue-400">
                power modern applications
              </span>
              ,{' '}
              <span className="font-semibold text-cyan-400">
                enable integrations
              </span>
              , and{' '}
              <span className="font-semibold text-purple-400">
                drive innovation
              </span>
              .
            </p>
          </motion.div>

          <div className="mb-20 flex flex-wrap justify-center gap-4">
            <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Start API Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="rounded-2xl border border-gray-600 bg-white/5 px-8 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              View API Docs
            </button>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.name}
                className="flex items-center justify-between gap-2 rounded-xl border border-gray-700 bg-white/5 p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="text-blue-400">{feature.icon}</div>
                  <span className="text-xs text-gray-300">{feature.name}</span>
                </div>
                <span className="text-xs font-semibold text-green-400">
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-800 bg-black/30 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          {advantages.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                {stat.value}
              </div>
              <div className="mb-1 font-semibold text-white">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Enterprise API Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Modern API development with best practices and enterprise standards.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-900/20 to-transparent px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              API Protocols & Standards
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Choose the right API architecture for your business needs.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {apiTypes.map((api) => (
              <div
                key={api.name}
                className="group rounded-xl border border-gray-700 bg-gray-800/30 p-4 transition-all hover:border-blue-500/50"
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    {api.icon}
                  </div>
                  <h3 className="font-semibold text-white transition-colors group-hover:text-blue-400">
                    {api.name}
                  </h3>
                </div>
                <p className="pl-11 text-xs text-gray-400">{api.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Technology Stack
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Modern tools and frameworks for API development.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center justify-between rounded-xl border border-gray-700 bg-gray-800/30 p-4 transition-colors hover:border-blue-500/50"
              >
                <span className="font-semibold text-white transition-colors group-hover:text-blue-400">
                  {tech.name}
                </span>
                <span
                  className={`rounded-full bg-gradient-to-r ${tech.color} px-3 py-1 text-xs font-bold text-white`}
                >
                  {tech.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              RESTful API Design
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Clean, consistent, and well-documented endpoints.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/50">
            <div className="border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-4">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-blue-400" />
                <span className="font-semibold text-white">
                  API Endpoints Example
                </span>
              </div>
            </div>

            <div className="divide-y divide-gray-700">
              {endpoints.map((endpoint) => (
                <div
                  key={`${endpoint.method}-${endpoint.path}`}
                  className="flex flex-col gap-3 p-4 transition-colors hover:bg-gray-800/30 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <span
                      className={`rounded px-2 py-1 text-xs font-bold ${
                        endpoint.method === 'GET'
                          ? 'bg-green-500/20 text-green-400'
                          : endpoint.method === 'POST'
                            ? 'bg-blue-500/20 text-blue-400'
                            : endpoint.method === 'PUT'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : endpoint.method === 'DELETE'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {endpoint.method}
                    </span>

                    <code className="font-mono text-sm text-gray-300">
                      {endpoint.path}
                    </code>

                    <span className="text-sm text-gray-400">
                      {endpoint.description}
                    </span>
                  </div>

                  <span className="text-xs text-purple-400">
                    {endpoint.auth}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">
                <Lock className="h-4 w-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">
                  API Security
                </span>
              </div>

              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Enterprise-Grade{' '}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  API Security
                </span>
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                Protect your APIs with multiple security layers including
                authentication, authorization, encryption, and threat detection.
              </p>

              <ul className="space-y-3">
                {[
                  'OAuth 2.0 / OpenID Connect integration',
                  'JWT with refresh tokens',
                  'Rate limiting and DDoS protection',
                  'Input validation and sanitization',
                  'Security headers and CORS policies',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 opacity-20 blur-3xl" />
              <div className="relative rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                <div className="mb-6 text-center">
                  <ShieldCheck className="mx-auto mb-4 h-16 w-16 text-red-400" />
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Security Layers
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    'SSL/TLS Encryption',
                    'API Key Rotation',
                    'IP Whitelisting',
                    'Request Signing',
                    'Penetration Testing',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg bg-gray-700/30 p-3"
                    >
                      <Lock className="h-4 w-4 text-red-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Developer Experience
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Comprehensive documentation and developer tools.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <BookOpen className="mx-auto mb-4 h-12 w-12 text-blue-400" />,
                title: 'Interactive Docs',
                desc: 'Swagger/OpenAPI with try-it-out functionality',
              },
              {
                icon: <Download className="mx-auto mb-4 h-12 w-12 text-blue-400" />,
                title: 'SDK Generation',
                desc: 'Auto-generated client SDKs for multiple languages',
              },
              {
                icon: <Activity className="mx-auto mb-4 h-12 w-12 text-blue-400" />,
                title: 'API Explorer',
                desc: 'Interactive testing environment with request builder',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-center transition-all hover:border-blue-500/50"
              >
                <div className="transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              API Success Stories
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Enterprise APIs we have built and scaled.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-white">
                      {project.rating}
                    </span>
                  </div>
                  <Award className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-3 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="mb-3 flex justify-between text-xs">
                  <span className="text-blue-400">{project.metrics}</span>
                  <span className="text-green-400">
                    Latency: {project.latency}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-gray-700 px-2 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              API Monitoring & Analytics
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Real-time insights into API performance and usage.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {monitoringStats.map((item) => (
              <div
                key={item.metric}
                className="rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-center"
              >
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.card}`}
                >
                  {item.icon}
                </div>

                <div className={`mb-1 text-2xl font-bold ${item.text}`}>
                  {item.value}
                </div>

                <div className="text-sm text-gray-400">{item.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20 p-12">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 blur-3xl" />

            <div className="relative">
              <Code2 className="mx-auto mb-6 h-16 w-16 text-blue-400" />

              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to Build Your API?
              </h2>

              <p className="mb-8 text-lg text-gray-300">
                Let&apos;s design and build a scalable, secure API for your application.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  Start API Consultation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button className="rounded-2xl border border-gray-600 bg-white/5 px-8 py-4 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                  View API Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}