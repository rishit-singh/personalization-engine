"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { week: "W1", lift: 8.2, ltv: 14.1 },
  { week: "W2", lift: 9.5, ltv: 16.3 },
  { week: "W3", lift: 10.1, ltv: 18.7 },
  { week: "W4", lift: 11.3, ltv: 20.4 },
  { week: "W5", lift: 12.4, ltv: 22.1 },
  { week: "W6", lift: 12.9, ltv: 24.7 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <p className="text-sm text-zinc-500 mt-1">Conversion lift & LTV improvement over time</p>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h2 className="text-sm font-medium mb-6 text-zinc-300">6-Week Performance Trend</h2>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="lift" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="ltv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="week" stroke="#52525b" tick={{ fontSize: 12 }} />
            <YAxis stroke="#52525b" tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#18181b", border: "1px solid #3f3f46", borderRadius: 8 }}
              labelStyle={{ color: "#a1a1aa" }}
            />
            <Area type="monotone" dataKey="lift" stroke="#10b981" fill="url(#lift)" name="Conv. Lift %" />
            <Area type="monotone" dataKey="ltv" stroke="#8b5cf6" fill="url(#ltv)" name="LTV Improvement %" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
