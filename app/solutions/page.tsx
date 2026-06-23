'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Smartphone, Globe, Apple, Terminal, Cloud, Briefcase, Bot, Monitor, Code2 } from 'lucide-react'

const solutions = [
  { name: 'Android Apps', icon: Smartphone, href: '/solutions/android-apps', gradient: 'from-green-600 to-emerald-600', color: 'green' },
  { name: 'Web Apps', icon: Globe, href: '/solutions/web-applications', gradient: 'from-sky-600 to-cyan-600', color: 'sky' },
  { name: 'iOS Apps', icon: Apple, href: '/solutions/ios-apps', gradient: 'from-slate-700 to-gray-700', color: 'slate' },
  { name: 'Linux Apps', icon: Terminal, href: '/solutions/linux-apps', gradient: 'from-orange-600 to-amber-600', color: 'orange' },
  { name: 'SaaS Platforms', icon: Cloud, href: '/solutions/saas-platforms', gradient: 'from-violet-600 to-purple-600', color: 'violet' },
  { name: 'Business Software', icon: Briefcase, href: '/solutions/business-software', gradient: 'from-indigo-600 to-blue-600', color: 'indigo' },
  { name: 'Automation', icon: Bot, href: '/solutions/automation-systems', gradient: 'from-cyan-600 to-teal-600', color: 'cyan' },
  { name: 'Custom Software', icon: Monitor, href: '/solutions/custom-software', gradient: 'from-pink-600 to-rose-600', color: 'pink' },
  { name: 'API Development', icon: Code2, href: '/solutions/api-development', gradient: 'from-slate-800 to-zinc-800', color: 'slate' },
]

export default function Solution() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Software Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert development services for every platform and business need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={solution.href}>
                <div className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${solution.gradient} p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
                  <solution.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{solution.name}</h3>
                  <p className="text-white/80">Professional development solutions</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}