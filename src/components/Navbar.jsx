import { Menu, Github, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />
          <span className="font-semibold tracking-tight text-white">PixelGlass</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo('about')} className="text-slate-200 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollTo('projects')} className="text-slate-200 hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollTo('contact')} className="text-slate-200 hover:text-white transition-colors">Contact</button>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
            <Github className="w-4 h-4" /> GitHub
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/60 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col gap-3">
            <button onClick={() => scrollTo('about')} className="text-left text-slate-200">About</button>
            <button onClick={() => scrollTo('projects')} className="text-left text-slate-200">Projects</button>
            <button onClick={() => scrollTo('contact')} className="text-left text-slate-200">Contact</button>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-slate-200"><Mail className="w-4 h-4"/> Email</a>
          </div>
        </div>
      )}
    </header>
  );
}
