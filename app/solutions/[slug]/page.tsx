// app/solutions/[slug]/page.tsx
import { notFound } from 'next/navigation';

// Define the solution data structure
interface SolutionData {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  icon: string;
}

// Solution database
const solutionsData: Record<string, SolutionData> = {
  'android-apps': {
    title: 'Android Apps',
    description: 'Build modern Android applications with excellent performance and intuitive interfaces.',
    longDescription: 'We develop native Android applications using Kotlin and Jetpack Compose, delivering high-performance apps with Material Design principles. Our team focuses on creating seamless user experiences that work flawlessly across the diverse Android ecosystem, from phones and tablets to foldables and Wear OS devices.',
    features: [
      'Native Kotlin & Java development',
      'Jetpack Compose modern UI',
      'Offline-first architecture',
      'Push notifications & cloud messaging',
      'Google Play Store deployment',
      'Material Design 3 compliance'
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Retrofit', 'Firebase', 'Coroutines', 'Dagger Hilt'],
    benefits: [
      'Reach billions of Android users worldwide',
      'Optimized battery and data usage',
      'Seamless integration with Google services',
      'Regular updates and maintenance'
    ],
    icon: '📱'
  },
  'web-applications': {
    title: 'Web Applications',
    description: 'Scalable web apps with cutting-edge frameworks and responsive design.',
    longDescription: 'Our web application development services combine modern frameworks like Next.js, React, and Vue.js with robust backend technologies. We build progressive web apps (PWAs) that deliver native-like experiences across all devices, ensuring fast load times and optimal SEO performance.',
    features: [
      'Responsive & mobile-first design',
      'Server-side rendering (SSR)',
      'Real-time data synchronization',
      'Progressive Web App (PWA) support',
      'SEO-optimized architecture',
      'Third-party API integrations'
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'PostgreSQL'],
    benefits: [
      'Cross-platform compatibility',
      'Reduced development costs',
      'Instant updates without app stores',
      'Lower maintenance overhead'
    ],
    icon: '🌐'
  },
  'ios-apps': {
    title: 'iOS Apps',
    description: 'Native iOS applications that deliver seamless user experiences on Apple devices.',
    longDescription: 'We craft premium iOS applications using Swift and SwiftUI, following Apple\'s Human Interface Guidelines to create intuitive and beautiful experiences. From iPhones to iPads, Apple Watch to Mac, our apps leverage the full power of the Apple ecosystem.',
    features: [
      'Swift & SwiftUI native development',
      'Apple design guidelines compliance',
      'Core Data & CloudKit integration',
      'Apple Pay & In-App Purchases',
      'App Store optimization & deployment',
      'ARKit & Core ML capabilities'
    ],
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Combine', 'TestFlight', 'App Store Connect'],
    benefits: [
      'Premium user experience',
      'High performance & security',
      'Loyal & high-spending user base',
      'Seamless Apple ecosystem integration'
    ],
    icon: '🍎'
  },
  'linux-apps': {
    title: 'Linux Apps',
    description: 'Robust Linux applications optimized for performance and security.',
    longDescription: 'Our Linux application development focuses on creating lightweight, secure, and efficient software for enterprise environments. We build both GUI and CLI applications using modern frameworks, ensuring compatibility across major distributions like Ubuntu, RHEL, and Debian.',
    features: [
      'GTK & Qt framework development',
      'Command-line interface (CLI) tools',
      'System daemon and service development',
      'Snap, Flatpak, and AppImage packaging',
      'Secure by design architecture',
      'POSIX compliance'
    ],
    technologies: ['Python', 'C++', 'Rust', 'GTK', 'Qt', 'Bash', 'Docker', 'Systemd'],
    benefits: [
      'High stability and uptime',
      'Superior security and access control',
      'Cost-effective (no licensing fees)',
      'Ideal for server and embedded systems'
    ],
    icon: '🐧'
  },
  'saas-platforms': {
    title: 'SaaS Platforms',
    description: 'End-to-end SaaS solutions with multi-tenancy and subscription management.',
    longDescription: 'We build scalable Software-as-a-Service platforms with robust multi-tenancy architecture, subscription billing, and user management. Our solutions are designed to handle thousands of customers while maintaining data isolation and security.',
    features: [
      'Multi-tenant architecture',
      'Subscription & payment processing',
      'User authentication & RBAC',
      'Analytics & usage tracking',
      'API-first design',
      'Automated onboarding workflows'
    ],
    technologies: ['Next.js', 'Node.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
    benefits: [
      'Recurring revenue model',
      'Automatic scalability',
      'Rapid feature deployment',
      'Lower customer acquisition costs'
    ],
    icon: '☁️'
  },
  'business-software': {
    title: 'Business Software',
    description: 'Custom business software to streamline operations and boost productivity.',
    longDescription: 'We develop tailored business applications that automate workflows, integrate with existing systems, and provide actionable insights. From CRM and ERP to inventory management and HR platforms, our solutions are built to scale with your business.',
    features: [
      'Custom workflow automation',
      'Legacy system integration',
      'Role-based access control',
      'Advanced reporting & dashboards',
      'Document management',
      'Audit trail & compliance'
    ],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Power BI'],
    benefits: [
      'Increased operational efficiency',
      'Data-driven decision making',
      'Reduced manual errors',
      'Scalable as your business grows'
    ],
    icon: '🏢'
  },
  'automation': {
    title: 'Automation',
    description: 'Intelligent automation solutions to reduce manual work and eliminate errors.',
    longDescription: 'Our automation services leverage RPA, workflow engines, and AI to streamline repetitive tasks. We help businesses reduce operational costs by automating data entry, report generation, email responses, and complex business processes.',
    features: [
      'Robotic Process Automation (RPA)',
      'Workflow orchestration',
      'Document processing (OCR/IDP)',
      'Email & notification automation',
      'Scheduled task automation',
      'Integration with 100+ tools'
    ],
    technologies: ['Python', 'Zapier', 'Make', 'n8n', 'UiPath', 'Selenium', 'Airflow', 'Lambda Functions'],
    benefits: [
      'Up to 80% time savings',
      'Zero manual errors',
      '24/7 operation capability',
      'Fast ROI (typically 3-6 months)'
    ],
    icon: '⚡'
  },
  'custom-software': {
    title: 'Custom Software',
    description: 'Tailored software solutions built to meet your unique business requirements.',
    longDescription: 'No two businesses are alike, so why settle for off-the-shelf software? We build custom solutions from the ground up, designed specifically for your workflows, integrations, and growth plans. Our agile process ensures you get exactly what you need.',
    features: [
      'Requirements-first development',
      'Custom UI/UX design',
      'Legacy system modernization',
      'Third-party API integrations',
      'Cloud or on-premise deployment',
      'Ongoing support & evolution'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python', 'Java', 'Go', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure'],
    benefits: [
      'Perfect fit for your processes',
      'Competitive advantage',
      'No feature bloat or limitations',
      'Full ownership of IP'
    ],
    icon: '🔧'
  },
  'api-development': {
    title: 'API Development',
    description: 'Secure, scalable APIs that power your digital ecosystem.',
    longDescription: 'We design and build RESTful and GraphQL APIs that serve as the backbone for your web, mobile, and third-party integrations. Our APIs are secure, well-documented, and built for high throughput with low latency.',
    features: [
      'REST & GraphQL APIs',
      'OpenAPI/Swagger documentation',
      'OAuth2 & JWT authentication',
      'Rate limiting & throttling',
      'API versioning strategy',
      'Developer portal & SDKs'
    ],
    technologies: ['Node.js', 'Python FastAPI', 'Go', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS API Gateway'],
    benefits: [
      'Enable third-party integrations',
      'Decouple frontend and backend',
      'Improve system scalability',
      'Create new revenue streams (API-as-a-Product)'
    ],
    icon: '🔌'
  }
};

// Generate static paths for all solutions
export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutionsData[slug];

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="text-6xl mb-4">{solution.icon}</div>
          <h1 className="text-5xl font-bold mb-4 text-tiger-orange">
            {solution.title}
          </h1>
          <p className="text-white/70 text-lg leading-8 border-l-4 border-tiger-orange pl-4">
            {solution.description}
          </p>
        </div>

        {/* Long Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3 text-white/90">Overview</h2>
          <p className="text-white/70 leading-7">{solution.longDescription}</p>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white/90">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {solution.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/80">
                <span className="text-tiger-orange">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white/90">Technologies We Use</h2>
          <div className="flex flex-wrap gap-2">
            {solution.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-tiger-orange/10 to-transparent border border-tiger-orange/20">
          <h2 className="text-2xl font-semibold mb-4 text-tiger-orange">Why Choose This Solution?</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {solution.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/80">
                <span className="text-tiger-orange text-xl">✦</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-tiger-orange text-black font-semibold rounded-lg hover:bg-tiger-orange/90 transition"
          >
            Discuss Your {solution.title} Project
          </a>
        </div>
      </div>
    </main>
  );
}