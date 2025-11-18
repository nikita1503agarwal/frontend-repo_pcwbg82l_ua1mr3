export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="px-3 py-1.5 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              About
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Crafting modern, playful, pixelated experiences</h2>
            <p className="mt-4 text-slate-300/90 leading-relaxed">
              I blend retro pixel aesthetics with contemporary glassmorphism to create interfaces that feel both nostalgic and futuristic. My focus is on accessibility, performance, and delightful micro‑interactions.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-200/90">
              <li className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 backdrop-blur-md">React & TypeScript</li>
              <li className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 backdrop-blur-md">Framer Motion</li>
              <li className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 backdrop-blur-md">Tailwind CSS</li>
              <li className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 backdrop-blur-md">FastAPI</li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-md bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-white/10" />
                ))}
              </div>
              <p className="mt-4 text-slate-300/80 text-sm">
                A pixel-grid motif representing my love for crisp details and structured design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
