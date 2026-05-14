'use client'

import { motion } from 'motion/react'
import { Shield, UserCheck, Lock, ArrowRight } from 'lucide-react'

export default function Hero() {
  const services = [
    { icon: <Shield className="text-tiger-orange" size={24} />, text: 'Managed Security Services' },
    { icon: <UserCheck className="text-tiger-orange" size={24} />, text: 'Identity and Access Management (IAM)' },
    { icon: <Lock className="text-tiger-orange" size={24} />, text: 'Privileged Account Management (PAM)' },
  ]

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/tech-security/1920/1080?blur=2"
          alt="Security Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-tiger-dark/80 via-tiger-dark/40 to-transparent" />

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-tiger-orange/30 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 border border-blue-400/20 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-tiger-orange tracking-tight">
              Services
            </h2>

            <div className="w-10 h-10 rounded-full bg-tiger-orange flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
              <ArrowRight size={20} />
            </div>
          </div>

          <div className="space-y-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-tiger-orange transition-all duration-300">
                  {service.icon}
                </div>

                <span className="text-white text-lg md:text-xl font-medium tracking-wide group-hover:text-tiger-orange transition-colors">
                  {service.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === 1 ? 'w-12 bg-tiger-orange' : 'w-6 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}