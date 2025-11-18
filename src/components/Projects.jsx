import { ExternalLink, Github } from "lucide-react";

const demoProjects = [
  {
    title: "Neon Pixels Dashboard",
    tags: ["React", "Tailwind", "Charts"],
    link: "#",
    repo: "#",
    description: "A glassy admin dashboard with pixel-grid accents and smooth charts.",
  },
  {
    title: "Retro Arcade Landing",
    tags: ["Vite", "Framer Motion"],
    link: "#",
    repo: "#",
    description: "Throwback microsite with CRT-style scanlines and modern motion.",
  },
  {
    title: "Shader Toy Showcase",
    tags: ["WebGL", "Shaders"],
    link: "#",
    repo: "#",
    description: "Interactive shader gallery wrapped in a frosted glass UI shell.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:18px_18px]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="px-3 py-1.5 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs text-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Projects
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected work</h2>
        <p className="mt-2 text-slate-300/85 max-w-2xl">A curated set of builds highlighting motion, clarity, and pixel-perfect details.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((p, idx) => (
            <article key={idx} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-cyan-400/20 to-blue-600/20" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300/85">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-1 rounded bg-white/10 border border-white/15 text-slate-200">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200"><ExternalLink className="w-4 h-4"/> Live</a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-slate-300 hover:text-white"><Github className="w-4 h-4"/> Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
