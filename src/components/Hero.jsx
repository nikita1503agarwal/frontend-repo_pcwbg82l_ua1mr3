import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-950/90 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 pt-36 pb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Pixelated. Glass. Modern.
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Digital Portfolio with a Pixel-Glass Aesthetic
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200/85 text-lg">
            Showcasing projects with crisp pixels, soft neon glows, and glassy surfaces. Built for focus and flair.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors">Explore Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold backdrop-blur-md transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
