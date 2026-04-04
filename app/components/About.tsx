'use client'

import { motion } from 'motion/react'
export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-slate-800 mb-8 tracking-tight">
              About Softvaly
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-900">Softvaly</span> provides{' '}
              <span className="font-bold text-slate-900 underline decoration-tiger-orange/30 underline-offset-4">
                end-to-end credential management solutions
              </span>{' '}
              for government and state agencies. It combines state of the art solution design, robust back-end systems with efficient
              project management in a single turnkey solution for national IT infrastructure undertakings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center h-full"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-tiger-orange leading-tight">
                  18+ Years of Experience
                </h3>
                <p className="text-lg text-slate-500 mt-2 font-medium">
                  in Biometric Research.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-5xl md:text-6xl font-bold text-tiger-orange tracking-tighter">
                  Extensive Expertise
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}