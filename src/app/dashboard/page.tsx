import { Brain, Zap, TrendingUp, Users } from "lucide-react";

const metrics = [
  { label: "Conversion Lift", value: "+12.4%", sub: "vs. baseline (last 30d)", icon: TrendingUp, color: "text-emerald-400" },
  { label: "Decisions Served", value: "48,291", sub: "this month", icon: Brain, color: "text-blue-400" },
  { label: "Avg LTV Improvement", value: "+24.7%", sub: "vs. control group", icon: Users, color: "text-violet-400" },
  { label: "Events Ingested", value: "1.2M", sub: "real-time, last 30d", icon: Zap, color: "text-amber-400" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
        <p className="text-sm text-zinc-500 mt-1">Your personalization engine performance</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map(({ label, value, sub, icon: Icon, color }) => (
          <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-zinc-500 uppercase tracking-wider">{label}</span>
              <Icon size={16} className={color} />
            </div>
            <p className={`text-3xl font-bold tracking-tight ${color}`}>{value}</p>
            <p className="text-xs text-zinc-600 mt-1">{sub}</p>
          </div>
        ))}
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h2 className="font-semibold mb-4">Recent Personalization Decisions</h2>
        <div className="space-y-3">
          {[
            { session: "sess_8f3a1", type: "Product Recommendation", trigger: "Loss Aversion", confidence: "94%", result: "Add to cart" },
            { session: "sess_2b9c4", type: "Content Variant", trigger: "Social Proof", confidence: "87%", result: "Engaged" },
            { session: "sess_7d1e0", type: "Timing Optimization", trigger: "Recency Signal", confidence: "91%", result: "Purchase" },
            { session: "sess_4a5f2", type: "Offer Personalization", trigger: "Frequency Score", confidence: "82%", result: "Converted" },
          ].map((d) => (
            <div key={d.session} className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0">
              <div className="flex items-center gap-4">
                <code className="text-xs text-zinc-500 font-mono">{d.session}</code>
                <span className="text-sm">{d.type}</span>
                <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">{d.trigger}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-emerald-400">{d.confidence} conf.</span>
                <span className="text-xs text-zinc-400">{d.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
