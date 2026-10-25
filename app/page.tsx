'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import About from '@/components/About'
import Hero from '@/components/Hero'
import Integrations from '@/components/Integrations'
import SolutionCard from '@/components/SolutionCard' // ✅ SolutionCard ইমপোর্ট
import { solutionsData } from '@/lib/solutionsData' // ✅ ডেটা ইমপোর্ট

export default function Home() {
  return (
    <>
      {/* Background Image - Only covers the initial viewport */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/backgroundImage/backgroundImage1.png)',
          height: '100vh',
          maxHeight: '100vh',
          overflow: 'hidden'
        }}
        aria-hidden="true"
      />
      
      {/* Dark Overlay - Only covers the initial viewport */}
      <div 
        className="absolute inset-0 -z-10 bg-black/20"
        style={{ 
          height: '100vh',
          maxHeight: '100vh'
        }}
        aria-hidden="true"
      />

      <Hero />
      
      {/* Additional stats section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Global Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Countries', value: '25+' },
              { label: 'Identities Managed', value: '100M+' },
              { label: 'Projects Completed', value: '500+' },
              { label: 'Team Members', value: '200+' },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-tiger-orange mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* ✅ Solutions Section (About-এর ঠিক নিচে) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Solutions That Drive Results
            </h2>
            <p className="text-slate-600 text-lg">
              We don&apos;t just write code; we solve business problems. Discover how our expertise can help you grow.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsData.map((sol) => (
              <SolutionCard key={sol.slug} solution={sol} variant="home" />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link 
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Solutions
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <Integrations />
    </>
  )
}