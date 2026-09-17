export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-zinc-500 mt-1">API keys, integrations, and plan management</p>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
        <h2 className="font-semibold text-sm">API Credentials</h2>
        <div className="space-y-3">
          {["API Key", "Brand ID", "Webhook Secret"].map((label) => (
            <div key={label}>
              <label className="text-xs text-zinc-500 block mb-1">{label}</label>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-xs text-zinc-400 font-mono">
                  {"•".repeat(32)}
                </code>
                <button className="text-xs border border-zinc-700 text-zinc-400 hover:text-white px-3 py-2 rounded transition-colors">
                  Reveal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-3">
        <h2 className="font-semibold text-sm">Current Plan</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Pilot</p>
            <p className="text-xs text-zinc-500">Free · Up to 50,000 events/mo</p>
          </div>
          <button className="text-sm bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-lg transition-colors">
            Upgrade to Starter
          </button>
        </div>
      </div>
    </div>
  );
}
