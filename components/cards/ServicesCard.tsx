import { portfolioData } from "@/data/portfolioData";

export default function ServicesCard() {
  return (
    <div className="md:col-span-1 lg:col-span-1 p-8 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
      <div>
        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Layanan</span>
        <h3 className="text-xl font-bold text-neutral-100 mt-3 mb-6">Yang Saya Kerjakan</h3>
        <ul className="space-y-3 text-sm text-neutral-300">
          {portfolioData.services.map((srv, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-neutral-600 mt-1">—</span> 
              <span>{srv}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}