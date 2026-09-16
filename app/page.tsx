export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '640px', margin: '80px auto', padding: '0 24px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Personalization Engine</h1>
      <p style={{ color: '#555', marginTop: '12px', lineHeight: 1.6 }}>
        Research-backed personalization for DTC brands. Behavioral science layer
        for conversion lift and LTV growth.
      </p>
      <div style={{ marginTop: '32px', padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
        <strong>Status:</strong> Platform scaffold live ✅<br />
        <strong>Next:</strong> Supabase auth · Event ingestion API · Dashboard
      </div>
    </main>
  );
}
