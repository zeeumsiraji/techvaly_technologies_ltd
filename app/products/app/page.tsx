// app/page.tsx
import AppProjectsSection from '@/components/project/AppProjectsSection';

export default function AppPage() {
  return (
    <main className="min-h-screen bg-gray-950 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-purple-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
            Our App Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our innovative mobile solutions built with Kotlin & KMP
          </p>
        </div>

        {/* ✅ শুধু App Projects — Web কিছুই load/render হবে না */}
        <AppProjectsSection />
      </div>
    </main>
  );
}