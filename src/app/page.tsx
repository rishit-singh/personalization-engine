export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-brand-900 mb-4">
          Personalization Engine
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Research-backed DTC personalization platform — behavioral science
          layer for conversion lift and LTV growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <FeatureCard
            title="Behavioral Models"
            desc="Cognitive bias mapping → personalization triggers"
          />
          <FeatureCard
            title="Real-time Events"
            desc="Streaming behavioral signal ingestion"
          />
          <FeatureCard
            title="API-First"
            desc="Plug into any Shopify / headless stack"
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="font-semibold text-brand-900 mb-2">{title}</h2>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}
