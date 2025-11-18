import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="relative">
        {/* soft background accents */}
        <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute top-96 -right-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        <Hero />
        <div className="max-w-6xl mx-auto px-4">
          <About />
          <Projects />
          <Contact />
        </div>

        <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400/80">
          © {new Date().getFullYear()} PixelGlass — All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
