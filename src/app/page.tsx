import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <div className="max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-600 mb-4">
          DTC Personalization Platform
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Stop optimizing for the transaction.
          <br />
          <span className="text-sky-500">Start personalizing for the lifetime.</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10">
          Research-backed behavioral science layer for DTC brands — explainable,
          attribution-ready, enterprise-grade without the enterprise price.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard"
            className="px-8 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/api/health"
            className="px-8 py-3 border border-gray-200 rounded-lg font-semibold text-gray-600 hover:bg-gray-50 transition"
          >
            API Health →
          </Link>
        </div>
      </div>
    </main>
  )
}
