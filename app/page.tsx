'use client'

import About from './components/About'
import Hero from './components/Hero'
export default function Home() {
  return (
    <>
      <Hero/>
      <About />
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
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-tiger-orange mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}