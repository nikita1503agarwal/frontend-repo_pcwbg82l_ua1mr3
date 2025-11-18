import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectDetails({ project, onBack }) {
  if (!project) return null;

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl p-4">
      <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-slate-100">
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          <div className="flex items-center gap-3">
            <a className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200" href={project.link} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4"/> Live</a>
            <a className="inline-flex items-center gap-1 text-slate-300 hover:text-white" href={project.repo} target="_blank" rel="noreferrer"><Github className="w-4 h-4"/> Code</a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-0">
          <div className="p-4 sm:p-6">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 text-slate-200/85">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2 text-xs">
              {project.tags?.map((t) => (
                <li key={t} className="px-2 py-1 rounded bg-white/10 border border-white/15 text-slate-200">{t}</li>
              ))}
            </ul>
          </div>
          <div className="h-56 sm:h-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20" />
        </div>
      </div>
    </section>
  );
}
