"use client";


const sections = [
  {
    title: 'Our Mission',
    description:
      'Our mission is to empower freshers with real-world software development experience and transform them into skilled senior developers. We aim to build innovative digital products, deliver high-quality software solutions, and create a collaborative environment where developers grow through teamwork, mentorship, and continuous learning.',
  },
  {
    title: 'What We Do',
    description:
      'BdSoft.org develops modern software solutions including web applications, mobile apps, SaaS platforms, business management systems, APIs, automation tools, and custom software products. We work on both client projects and in-house products while maintaining modern development standards, scalable architecture, and user-focused experiences.',
  },
  {
    title: 'Our Learning & Growth Culture',
    description:
      'At BdSoft.org, learning happens through practical work, real projects, and team collaboration. We focus on mentorship, clean coding practices, agile workflows, communication skills, and problem-solving abilities. Our developers gain hands-on experience by working in teams, contributing to live projects, participating in code reviews, and continuously improving their technical and professional skills.',
  },
  {
    title: 'Why Choose BdSoft.org',
    description:
      'BdSoft.org combines innovation, teamwork, and practical experience to build both great software and great developers. We provide a supportive environment for learning, modern technologies for scalable solutions, collaborative team culture, and a strong focus on quality, growth, and long-term success.',
  },
]

export default function About() {
  return (
    <>
      <section className="py-24 bg-white-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-bold text-slate-800 mb-8 tracking-tight">
                About BdSoft.org
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                <span className="font-semibold text-slate-900">BdSoft.org</span>{' '}
                is a modern software company focused on building innovative
                digital solutions while helping freshers become skilled and
                confident{' '}
                <span className="font-bold text-slate-900 underline decoration-tiger-orange/30 underline-offset-4">
                  senior developers
                </span>
                .
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We believe real growth comes through practical experience,
                teamwork, mentorship, and continuous learning. Our goal is not
                only to create high-quality software products but also to build
                future technology leaders through real-world development
                environments.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                BdSoft.org works on web applications, mobile apps, SaaS
                platforms, business software, APIs, automation systems, and
                custom software solutions. Alongside client projects, we also
                develop our own innovative products designed to solve real-world
                problems.
              </p>
            </div>

            <div className="flex flex-col justify-center h-full">
              <div className="space-y-10">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-tiger-orange leading-tight">
                    Fresher to Senior Developer
                  </h3>

                  <p className="text-lg text-slate-500 mt-3 font-medium leading-relaxed">
                    Practical learning, mentorship, real projects, and
                    team-based development experience.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-5xl md:text-6xl font-bold text-tiger-orange tracking-tighter leading-none">
                    Innovation <br /> Teamwork <br /> Growth
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h4 className="text-3xl font-bold text-slate-800">Real</h4>
                    <p className="text-slate-500 mt-2">
                      Industry-level software development experience.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h4 className="text-3xl font-bold text-slate-800">Team</h4>
                    <p className="text-slate-500 mt-2">
                      Collaborative workflow and agile development culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg graw-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 tracking-tight">
              Building Software & Future Developers
            </h2>

            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              BdSoft.org is focused on innovation, teamwork, practical learning,
              and building scalable digital solutions for the modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-tiger-orange/10 text-tiger-orange text-2xl font-bold">
                  
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-slate-800 mb-5 leading-tight">
                  {section.title}
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}