import HeroCard from "@/components/cards/HeroCard";
import CodeCard from "@/components/cards/CodeCard";
import ServicesCard from "@/components/cards/ServicesCard";
import FocusCard from "@/components/cards/FocusCard";
import TechCard from "@/components/cards/TechCard";
import ProjectCard from "@/components/cards/ProjectCard";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const { personal } = portfolioData;

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-neutral-200 p-6 sm:p-12 lg:p-16 selection:bg-neutral-700 selection:text-white">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Top Navbar */}
        <header className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-neutral-100" />
            <span className="text-sm tracking-wide text-neutral-400 font-medium">{personal.name}</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#projects" className="text-neutral-500 hover:text-neutral-200 transition">Karya</a>
            <a href="#skills" className="text-neutral-500 hover:text-neutral-200 transition">Keahlian</a>
            <a
              href={`mailto:${personal.email}`}
              className="px-4 py-2 bg-neutral-200 text-neutral-900 font-medium hover:bg-white transition"
            >
              Kontak
            </a>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          <HeroCard />
          <CodeCard />
          <ServicesCard />
          <FocusCard />
          <TechCard />
          <ProjectCard />
        </div>

        {/* Footer */}
        <footer className="py-12 flex flex-col sm:flex-row items-center justify-between border-t border-neutral-900 gap-4 text-xs text-neutral-600">
          <p>{new Date().getFullYear()} — Dibuat dengan Next.js dan Tailwind CSS</p>
          <div className="flex gap-5">
            <a href={personal.socials.github} target="_blank" rel="noreferrer" className="hover:text-neutral-400 transition">GitHub</a>
            <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-neutral-400 transition">LinkedIn</a>
            <a href={personal.socials.whatsapp} target="_blank" rel="noreferrer" className="hover:text-neutral-400 transition">WhatsApp</a>
          </div>
        </footer>

      </div>
    </main>
  );
}