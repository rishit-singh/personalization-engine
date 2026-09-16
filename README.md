# Personalization Engine

> Research-backed behavioral science personalization platform for DTC brands.

**Stack:** Next.js 15 · TypeScript · Supabase (Postgres + Auth) · Tailwind CSS · Render

---

## Architecture

```
src/
├── app/
│   ├── page.tsx                  # Landing / marketing page
│   ├── dashboard/                # Authenticated dashboard
│   │   ├── layout.tsx            # Sidebar nav
│   │   ├── page.tsx              # KPI overview
│   │   ├── lift/page.tsx         # Conversion + LTV lift analytics
│   │   ├── events/page.tsx       # Real-time event stream
│   │   ├── decisions/page.tsx    # Explainable AI decision log
│   │   ├── brands/page.tsx       # Multi-tenant brand management
│   │   └── settings/page.tsx     # Config, API keys
│   └── api/
│       ├── health/route.ts       # Health check endpoint
│       ├── events/route.ts       # Behavioral event ingestion
│       ├── decisions/route.ts    # Personalization decision log
│       └── lift/route.ts         # Lift metrics query
├── lib/
│   ├── supabase/
│   │   ├── client.ts             # Browser Supabase client
│   │   ├── server.ts             # Server Supabase client (RSC)
│   │   └── middleware.ts         # Auth session refresh
│   └── utils.ts                  # cn() helper
├── types/index.ts                # Shared TypeScript types
└── middleware.ts                 # Next.js middleware (auth guard)

supabase/
└── migrations/
    └── 001_initial_schema.sql    # Brands, events, decisions, lift_metrics
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Service health + Supabase connectivity |
| POST | `/api/events` | Ingest a behavioral event |
| GET | `/api/events` | List recent events (last 50) |
| POST | `/api/decisions` | Log a personalization decision |
| GET | `/api/lift?brand_id=&period=` | Query lift metrics |

## Deploy to Render

1. Push to GitHub (auto-deploy on commit)
2. In Render dashboard → New Web Service → connect `rishit-singh/personalization-engine`
3. Set env vars: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXTAUTH_SECRET`
4. Build: `npm install && npm run build` · Start: `npm start`

## Database Setup

Run migration against your Supabase project:

```bash
supabase db push
```

Or paste `supabase/migrations/001_initial_schema.sql` into Supabase SQL editor.

---

Built with behavioral science. Not just behavioral data.
