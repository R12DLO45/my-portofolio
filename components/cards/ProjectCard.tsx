import { portfolioData } from "@/data/portfolioData";

export default function ProjectCard() {
  const { projects } = portfolioData;

  return (
    <div id="projects" className="col-span-1 md:col-span-3 lg:col-span-4 space-y-6 pt-4">
      <div>
        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Portofolio</span>
        <h3 className="text-2xl font-bold text-neutral-100 mt-2">Proyek yang Pernah Dikerjakan</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col overflow-hidden"
          >
            {/* Project Image */}
            {proj.image && (
              <div className="w-full h-64 bg-neutral-900 overflow-hidden border-b border-neutral-800">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            {/* Project Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-between space-y-6 flex-1">
              <div className="space-y-4">
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">{proj.category}</span>
                <h4 className="text-xl font-bold text-neutral-100">{proj.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{proj.description}</p>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-neutral-800 text-neutral-300 border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-2">
                  {proj.demoUrl && proj.demoUrl !== "#" && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-neutral-200 hover:text-white transition underline"
                    >
                      Lihat Demo
                    </a>
                  )}
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-neutral-500 hover:text-neutral-300 transition"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}