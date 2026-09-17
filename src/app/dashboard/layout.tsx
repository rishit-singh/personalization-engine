import Link from "next/link";
import { LayoutDashboard, Zap, Settings, Brain, BarChart3 } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/events", label: "Events", icon: Zap },
  { href: "/dashboard/decisions", label: "Decisions", icon: Brain },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-950">
      <aside className="w-56 border-r border-zinc-800 flex flex-col py-6 px-3 gap-1 shrink-0">
        <div className="px-3 mb-6">
          <span className="text-sm font-semibold tracking-tight">
            <span className="text-emerald-400">■</span> PersonalizeHQ
          </span>
        </div>
        {nav.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
          <p className="text-sm text-zinc-500">Personalization Engine Dashboard</p>
          <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            Pilot Active
          </span>
        </header>
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
