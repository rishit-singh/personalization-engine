import Link from "next/link";
import { ArrowRight, Brain, BarChart3, Zap, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-emerald-400">■</span> Personalize
        </span>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Start free pilot
          </Link>
        </div>
      </nav>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
          <Brain size={12} /> Research-backed · Not rule-based
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Enterprise-grade personalization.
          <br />
          <span className="text-emerald-400">Without the enterprise price.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Behavioral science models that deliver 10-15% conversion lift and 20-30% LTV improvement
          for mid-market DTC brands — explained, auditable, and deployed in days.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start free pilot <ArrowRight size={16} />
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            View dashboard
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Brain, title: "Behavioral Science Layer", desc: "Cognitive trigger mapping — not just click tracking. Scarcity, social proof, loss aversion built in." },
          { icon: BarChart3, title: "Explainable Decisions", desc: "Every personalization decision comes with a plain-English explanation. No black box." },
          { icon: Zap, title: "Real-Time Ingestion", desc: "Event-driven architecture processes behavioral signals in <50ms. No batch lag." },
          { icon: Shield, title: "API-First Integration", desc: "Plug into your Shopify or headless stack without rebuilding a thing." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <Icon className="text-emerald-400 mb-4" size={24} />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-zinc-400">{desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
