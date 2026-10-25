"use client";
import { solutionsData } from '@/lib/solutionsData';
import SolutionCard from '@/components/SolutionCard';


export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black bg-linear-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-6">
            Software Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We solve your business challenges with tailored digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((sol) => (
            <SolutionCard key={sol.slug} solution={sol} variant="solutions" />
          ))}
        </div>
      </div>
    </main>
  );
}