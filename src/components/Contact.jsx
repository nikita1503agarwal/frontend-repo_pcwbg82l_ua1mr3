import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.25),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="px-3 py-1.5 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs text-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Contact
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s build something memorable</h2>
        <p className="mt-2 text-slate-300/85 max-w-2xl">Reach out for collaborations, freelance work, or just to say hi.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="grid grid-cols-1 gap-4">
              <input placeholder="Your name" className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
              <input placeholder="Email" type="email" className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
              <textarea placeholder="Message" rows="4" className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
            </div>
            <button type="button" className="mt-4 px-5 py-2.5 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors">Send</button>
          </form>

          <div className="space-y-4">
            <a href="mailto:hello@example.com" className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white">
              <Mail className="w-5 h-5" /> hello@example.com
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white">
              <Github className="w-5 h-5" /> github.com/yourname
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white">
              <Linkedin className="w-5 h-5" /> linkedin.com/in/yourname
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
