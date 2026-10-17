// app/products/web/page.tsx
import WebProjectsSection from '@/components/project/WebProjectsSection';

export default function WebProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-950 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Web Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our innovative web solutions built with modern stack
          </p>
        </div>

        {/* ✅ prop ছাড়া */}
        <WebProjectsSection />
      </div>
    </main>
  );
}