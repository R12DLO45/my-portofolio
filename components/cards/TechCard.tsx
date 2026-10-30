import { portfolioData } from "@/data/portfolioData";

export default function TechCard() {
  const { techStack } = portfolioData;

  return (
    <div id="skills" className="col-span-1 md:col-span-3 lg:col-span-4 p-8 lg:p-10 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Stack</span>
          <h3 className="text-2xl font-bold text-neutral-100 mt-2">Teknologi yang Saya Gunakan</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="p-4 bg-neutral-950/60 border border-neutral-800 hover:border-neutral-600 transition-colors"
          >
            <p className="text-base font-semibold text-neutral-200 break-words">{tech.name}</p>
            <p className="text-xs text-neutral-500 mt-1">{tech.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}