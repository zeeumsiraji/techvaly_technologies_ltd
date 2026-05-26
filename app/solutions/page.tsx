// app/solutions/page.tsx
import Link from 'next/link';

const solutions = [
  { name: 'Android Apps', slug: 'android-apps', description: 'Build modern Android applications with excellent performance and intuitive interfaces.' },
  { name: 'Web Applications', slug: 'web-applications', description: 'Scalable web apps with cutting-edge frameworks and responsive design.' },
  { name: 'iOS Apps', slug: 'ios-apps', description: 'Native iOS applications that deliver seamless user experiences on Apple devices.' },
  { name: 'Linux Apps', slug: 'linux-apps', description: 'Robust Linux applications optimized for performance and security.' },
  { name: 'SaaS Platforms', slug: 'saas-platforms', description: 'End-to-end SaaS solutions with multi-tenancy and subscription management.' },
  { name: 'Business Software', slug: 'business-software', description: 'Custom business software to streamline operations and boost productivity.' },
  { name: 'Automation', slug: 'automation', description: 'Intelligent automation solutions to reduce manual work and eliminate errors.' },
  { name: 'Custom Software', slug: 'custom-software', description: 'Tailored software solutions built to meet your unique business requirements.' },
  { name: 'API Development', slug: 'api-development', description: 'Secure, scalable APIs that power your digital ecosystem.' }
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-tiger-orange">Solutions</h1>
        <p className="text-white/70 text-lg leading-8 max-w-3xl mb-12">
          We deliver enterprise-grade software solutions across platforms and technologies.
          Choose your area of interest below.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="group block p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-tiger-orange/50"
            >
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-tiger-orange transition">
                {solution.name}
              </h2>
              <p className="text-white/60 text-sm">{solution.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}