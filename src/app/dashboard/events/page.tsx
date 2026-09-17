import { Zap } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Events Stream</h1>
        <p className="text-sm text-zinc-500 mt-1">Real-time behavioral signal ingestion</p>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap size={16} className="text-emerald-400 animate-pulse" />
          <span className="text-sm font-medium">Live feed</span>
          <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full ml-auto">
            Connected
          </span>
        </div>
        <p className="text-sm text-zinc-500">
          Connect your Shopify store or send events via the REST API to start seeing behavioral signals here.
        </p>
        <pre className="mt-4 bg-zinc-950 rounded-lg p-4 text-xs text-emerald-300 overflow-auto">
{`POST /api/events
{
  "brand_id": "brand_xxx",
  "session_id": "sess_abc123",
  "event_type": "product_view",
  "properties": { "product_id": "prod_001", "price": 89 },
  "behavioral_signals": {
    "recency_score": 0.92,
    "frequency_score": 0.45,
    "monetary_score": 0.78,
    "cognitive_triggers": ["scarcity", "social_proof"]
  }
}`}
        </pre>
      </div>
    </div>
  );
}
