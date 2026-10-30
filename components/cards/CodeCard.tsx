import { portfolioData } from "@/data/portfolioData";

export default function CodeCard() {
  const { personal } = portfolioData;

  return (
    <div className="md:col-span-2 lg:col-span-2 p-8 bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors font-mono text-sm text-neutral-300 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
        </div>
        <span className="text-neutral-600 text-xs">profile.ts</span>
      </div>

      <div className="py-6 space-y-1 text-neutral-300">
        <p><span className="text-purple-400">const</span> <span className="text-neutral-100">developer</span> = &#123;</p>
        <p className="pl-4"><span className="text-neutral-500">name:</span> <span className="text-amber-400">&apos;{personal.name}&apos;</span>,</p>
        <p className="pl-4"><span className="text-neutral-500">role:</span> <span className="text-amber-400">&apos;{personal.role}&apos;</span>,</p>
        <p className="pl-4"><span className="text-neutral-500">location:</span> <span className="text-amber-400">&apos;Kediri, Indonesia&apos;</span>,</p>
        <p className="pl-4"><span className="text-neutral-500">stack:</span> [<span className="text-blue-400">&apos;Next.js&apos;</span>, <span className="text-blue-400">&apos;TypeScript&apos;</span>, <span className="text-blue-400">&apos;Tailwind&apos;</span>]</p>
        <p>&#125;;</p>
      </div>

      <div className="text-neutral-600 text-xs pt-4 border-t border-neutral-800">
        Semester 8 — Fokus pada web apps modern
      </div>
    </div>
  );
}