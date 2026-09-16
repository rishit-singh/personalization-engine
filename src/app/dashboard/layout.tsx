import Link from 'next/link'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <span className="font-bold text-gray-900 text-lg">⚡ PEngine</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <NavLink href="/dashboard">Overview</NavLink>
          <NavLink href="/dashboard/lift">Lift Analytics</NavLink>
          <NavLink href="/dashboard/events">Events</NavLink>
          <NavLink href="/dashboard/decisions">Decisions</NavLink>
          <NavLink href="/dashboard/brands">Brands</NavLink>
          <NavLink href="/dashboard/settings">Settings</NavLink>
        </nav>
        <div className="p-4 border-t border-gray-100 text-xs text-gray-400">
          Personalization Engine v0.1
        </div>
      </aside>
      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-700 transition font-medium"
    >
      {children}
    </Link>
  )
}
