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
    <section className="relative h-[85vh] min-h-150 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-tiger-dark/80 via-tiger-dark/40 to-transparent" />

        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-tiger-orange/30 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 border border-blue-400/20 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex items-center gap-12">
          {/* Left side - Services Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-xl bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl"
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

          {/* Right side - Hero Image with zoom in/out animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 hidden lg:flex justify-center items-center"
          >
            <motion.div
              className="relative w-[21rem] h-[21rem] md:w-[26rem] md:h-[26rem] aspect-square overflow-hidden rounded-full border-4 border-sky-400 shadow-xl"
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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