// app/page.tsx
import ProjectsSection from '@/components/ProjectsSection'; // Adjust path if needed

export default function AppPage() {
  return (
    <main className="min-h-screen bg-gray-950 p-6 md:p-12">
      {/* 
        isEmbedded={false} (Default) 
        - Uses dark theme styles (text-white, dark cards).
        - Shows the "Our Projects" header.
      */}
      <ProjectsSection 
        showHeader={true} 
        isEmbedded={false} 
      />
    </main>
  );
}