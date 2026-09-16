import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const stats = [
    { label: 'Events Processed', value: '—', sub: 'last 7 days' },
    { label: 'Decisions Made',   value: '—', sub: 'last 7 days' },
    { label: 'Conversion Lift',  value: '—%', sub: 'vs. control' },
    { label: 'LTV Lift',         value: '—%', sub: 'vs. control' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome{user ? `, ${user.email}` : ''}
        </h1>
        <p className="text-gray-500 mt-1">
          Personalization Engine — real-time behavioral decisioning dashboard
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
            <p className="text-3xl font-bold text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Activity Placeholder */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <h2 className="font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="flex items-center justify-center h-48 text-gray-300 text-sm">
          Connect your event stream to see live data
        </div>
      </div>
    </div>
  )
}
