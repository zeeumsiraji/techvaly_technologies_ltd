
"use client";
import Link from 'next/link';
import { ArrowRight, Star, MessageCircle, LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  solution: {
    slug: string;
    name: string;
    icon: LucideIcon;
    color: string;
    bg: string;
    gradient: string;
    problem: string;
    solution: string;
    shortDesc: string;
    features: string[];
  };
  variant?: 'home' | 'solutions';
}

export default function SolutionCard({ solution, variant = 'home' }: SolutionCardProps) {
  
  // ==========================================
  // ✅ হোমপেজের জন্য ছোট ডিজাইন
  // ==========================================
  if (variant === 'home') {
    return (
      <Link 
        href={`/solutions/${solution.slug}`}
        className="group flex flex-col p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-xl ${solution.bg} ${solution.color} group-hover:scale-110 transition-transform`}>
            <solution.icon size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
            {solution.name}
          </h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed flex-1">
          {solution.shortDesc}
        </p>
        <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm">
          Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    );
  }

  // ==========================================
  // ✅ সলিউশন পেজের জন্য বড় ডিজাইন
  // ==========================================
  return (
    <div className="group h-full flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      
      {/* Card Header */}
      <Link href={`/solutions/${solution.slug}`} className="block">
        <div className={`bg-linear-to-br ${solution.gradient} p-6 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <solution.icon className="w-12 h-12 mb-4 relative z-10" />
          <h3 className="text-2xl font-bold mb-1 relative z-10">{solution.name}</h3>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col space-y-4">
        <Link href={`/solutions/${solution.slug}`} className="block flex-1">
          <div>
            <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">The Problem</p>
            <p className="text-slate-700 text-sm leading-relaxed">{solution.problem}</p>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Our Solution</p>
            <p className="text-slate-800 text-sm font-medium leading-relaxed">{solution.solution}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {solution.features.map(f => (
              <span key={f} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                {f}
              </span>
            ))}
          </div>
        </Link>
      </div>

      {/* ✅ Card Footer (Details + Chat Button) */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex gap-2 mt-auto">
        <Link 
          href={`/solutions/${solution.slug}`}
          className="flex-1 text-center bg-slate-100 text-slate-700 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
          Details
        </Link>
        
        {/* Chat Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            const chatButton = document.querySelector('button[aria-label="Open chat"]') as HTMLButtonElement;
            if (chatButton) chatButton.click();
          }}
          className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          <MessageCircle size={16} />
          Chat
        </button>
      </div>

    </div>
  );
}