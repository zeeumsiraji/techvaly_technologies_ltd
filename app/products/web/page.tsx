// web/page.tsx
import ProjectsSection from '@/components/ProjectsSection'; // Adjust path if needed

export default function WebPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      {/* 
        The ProductDropdown works well on light backgrounds too.
      */}
      <nav className="flex justify-end p-4">
        <ProjectsSection />
      </nav>

      <div className="mt-20 text-center text-slate-800">
        <h1 className="text-4xl font-bold">Web Products Page</h1>
      </div>
    </main>
  );
}