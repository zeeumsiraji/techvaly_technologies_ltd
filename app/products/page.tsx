// app/products/page.tsx
'use client';

import ProjectsSection from '../components/ProjectsSection';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <ProjectsSection showHeader={true} isEmbedded={false} />
      </div>
    </div>
  );
}