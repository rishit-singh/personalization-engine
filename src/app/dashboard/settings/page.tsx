export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
      <p className="text-gray-500 mb-8">API keys, Supabase connection, model configuration.</p>
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center justify-center h-72 text-gray-300">
        Settings panel — env vars managed via Render dashboard
      </div>
    </div>
  )
}
