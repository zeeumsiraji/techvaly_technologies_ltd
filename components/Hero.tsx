'use client'

import { motion } from 'motion/react'
import { Shield, UserCheck, Lock, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const services = [
    { icon: <Shield className="text-tiger-orange" size={24} />, text: 'Managed Security Services' },
    { icon: <UserCheck className="text-tiger-orange" size={24} />, text: 'Identity and Access Management (IAM)' },
    { icon: <Lock className="text-tiger-orange" size={24} />, text: 'Privileged Account Management (PAM)' },
  ]

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden py-4 sm:py-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-tiger-dark/80 via-tiger-dark/40 to-transparent" />

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-tiger-orange/30 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 border border-blue-400/20 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 w-full relative z-10">
        {/* Grid with exactly 2 columns, each 1fr (50% width) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-12 items-center">
          {/* Left side - Services Card (50% width) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/40 backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl border border-white/10 shadow-2xl min-w-0"
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-tiger-orange tracking-tight">
                Services
              </h2>

              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-tiger-orange flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                <ArrowRight size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 group cursor-pointer"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-tiger-orange transition-all duration-300">
                    {service.icon}
                  </div>

                  <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium tracking-wide group-hover:text-tiger-orange transition-colors truncate">
                    {service.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Hero Image (50% width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <motion.div
              className="relative w-3/4 aspect-square max-w-[80%] overflow-hidden rounded-full border-2 sm:border-3 md:border-4 border-sky-400 shadow-xl"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/hero.png"
                alt="Hero Image"
                fill
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 35vw, (max-width: 1024px) 30vw, 25vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}