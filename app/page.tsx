export default function Home() {
  const techStack = [
    { name: "Next.js", category: "Framework", level: "Primary" },
    { name: "React", category: "Library", level: "Primary" },
    { name: "TypeScript", category: "Language", level: "Primary" },
    { name: "Tailwind CSS", category: "Styling", level: "Primary" },
    { name: "Node.js", category: "Backend", level: "Secondary" },
    { name: "PostgreSQL / MySQL", category: "Database", level: "Secondary" },
    { name: "Git / GitHub", category: "Tools", level: "Primary" },
    { name: "RESTful API", category: "Architecture", level: "Primary" },
  ];

  const projects = [
    {
      title: "Sistem Informasi & Web Platform (Final Project)",
      desc: "Aplikasi web full-stack yang dibangun untuk menyelesaikan masalah riil dengan arsitektur modern, performa tinggi, dan UI responsif.",
      tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Interactive Web Dashboard",
      desc: "Dashboard analitik modern dengan visualisasi data interaktif, manajemen autentikasi, dan caching state yang optimal.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 p-4 sm:p-8 md:p-12 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Navbar */}
        <header className="flex items-center justify-between py-4 px-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-sm tracking-wider text-slate-300 font-semibold">PORTFOLIO.DEV</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="#projects" className="text-slate-400 hover:text-white transition">Projects</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition">Skills</a>
            <a
              href="mailto:kontakmu@domain.com"
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
            >
              Hire Me
            </a>
          </div>
        </header>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Main Hero (2x2 span) */}
          <div className="md:col-span-2 lg:col-span-2 md:row-span-2 p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition duration-500" />
            
            <div className="space-y-4 relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Available for New Projects / Roles
              </span>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Crafting Fast, Modern & Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Web Apps</span>
              </h1>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Mahasiswa Semester Akhir & Frontend/Full-Stack Developer yang berfokus membangun produk digital berbasis React & Next.js dengan standar performa dan UI/UX terkini.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-3 relative z-10">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-900 font-semibold hover:bg-cyan-400 transition text-sm"
              >
                Lihat Karya ↗
              </a>
              <a
                href="https://github.com/R12DLO45"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:bg-slate-800 transition text-sm font-medium text-slate-300"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Card 2: Interactive Code Snippet (2 columns) */}
          <div className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition font-mono text-xs text-slate-300 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-500 text-[11px]">DeveloperInfo.ts</span>
            </div>
            
            <div className="py-4 space-y-1 text-slate-300">
              <p><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;</p>
              <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">&apos;Mohammad Ubaidillah Ridlo&apos;</span>,</p>
              <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-300">&apos;Web & Software Engineer&apos;</span>,</p>
              <p className="pl-4"><span className="text-slate-400">coreStack:</span> [<span className="text-amber-300">&apos;Next.js&apos;</span>, <span className="text-amber-300">&apos;React&apos;</span>, <span className="text-amber-300">&apos;TypeScript&apos;</span>],</p>
              <p className="pl-4"><span className="text-slate-400">passionateAbout:</span> <span className="text-emerald-300">&apos;Clean Code & Fast Performance&apos;</span></p>
              <p>&#125;;</p>
            </div>

            <div className="text-slate-500 text-[11px] pt-2 border-t border-slate-800/60 flex items-center justify-between">
              <span>Status: Ready to deploy</span>
              <span className="text-cyan-400 font-medium">⚡ 100% PageSpeed</span>
            </div>
          </div>

          {/* Card 3: What I Offer / Services */}
          <div className="md:col-span-1 lg:col-span-1 p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Services</span>
              <h3 className="text-lg font-bold text-slate-100 mt-2">What I Do</h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✔</span> Frontend UI/UX Slicing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✔</span> Full-Stack Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✔</span> API Design & Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✔</span> Speed & SEO Optimization
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/60 text-[11px] text-slate-400">
              Modern best practices guaranteed.
            </div>
          </div>

          {/* Card 4: Current Focus / Learning */}
          <div className="md:col-span-1 lg:col-span-1 p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Current Focus</span>
              <h3 className="text-lg font-bold text-slate-100 mt-2">Semester 8 & Beyond</h3>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Mempersiapkan rilis Final Project dan mendalami ekosistem Server Components, Cloud Architecture & Headless CMS.
              </p>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-300 bg-slate-800/50 px-3 py-2 rounded-xl border border-slate-700/50">
              <span>📍</span> Indonesia (GMT+7)
            </div>
          </div>

          {/* Card 5: Tech Stack Badges (Full width / 4 columns) */}
          <div id="skills" className="col-span-1 md:col-span-3 lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Technologies</span>
                <h3 className="text-xl font-bold text-slate-100 mt-1">Tech Stack & Tools</h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">Constantly Updated</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/70 hover:border-cyan-500/40 transition flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{tech.name}</p>
                    <p className="text-[11px] text-slate-500">{tech.category}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-slate-800 text-slate-300">
                    {tech.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 6: Featured Projects (2 columns each) */}
          <div id="projects" className="col-span-1 md:col-span-3 lg:col-span-4 space-y-4 pt-4">
            <h3 className="text-xl font-bold text-slate-100">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-slate-100">{proj.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{proj.desc}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map((t) => (
                        <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-800/30">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={proj.link}
                      className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
                    >
                      Explore Details & Demo ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} • Built with Next.js, Tailwind CSS & deployed on Netlify.
        </footer>

      </div>
    </main>
  );
}