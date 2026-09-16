# Personalization Engine

> Research-backed DTC personalization platform — behavioral science layer for conversion lift and LTV growth.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Database | Supabase (Postgres + RLS) |
| Deployment | Render (Node, Oregon) |
| Styling | Tailwind CSS |

## Architecture

```
Browser / Shopify Storefront
        │
        ▼ POST /api/events
┌────────────────────────┐
│  Next.js API Routes    │  ◄── /api/health
│  (App Router)          │  ◄── /api/personalize
│                        │  ◄── /api/events
└────────┬───────────────┘
         │
         ▼
  Supabase Postgres
  (behavioral_events, personalization_decisions)
         │
         ▼
  Behavioral Model Layer  (coming soon: Python/FastAPI sidecar)
```

## Quick Start

```bash
# 1. Clone
git clone https://github.com/rishit-singh/personalization-engine.git
cd personalization-engine

# 2. Install
npm install

# 3. Environment
cp .env.example .env.local
# Fill in your Supabase project URL + keys

# 4. Run Supabase migrations
# via Supabase CLI: supabase db push
# or paste supabase/migrations/001_init.sql into your SQL editor

# 5. Dev
npm run dev
```

## API Reference

### `GET /api/health`
Returns `{ status: "ok", timestamp }`.

### `POST /api/events`
```json
{ "visitor_id": "v_123", "event_type": "page_view", "properties": {} }
```

### `POST /api/personalize`
```json
{ "visitor_id": "v_123", "page": "/products", "signals": {} }
```
Returns a `PersonalizationDecision` with recommendations and cognitive triggers.

## Deploy to Render

1. Push this repo to GitHub
2. In Render dashboard: **New → Web Service → Connect this repo**
3. Render will auto-detect `render.yaml` — click **Apply**
4. Add env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
5. Deploy 🚀

Or use the `render.yaml` in this repo for one-click deploy.

## Roadmap

- [ ] Behavioral model layer (Python/FastAPI sidecar)
- [ ] Cognitive trigger engine (loss aversion, social proof, scarcity)
- [ ] A/B testing framework
- [ ] Shopify webhook integration
- [ ] Analytics dashboard
- [ ] SDK for storefront embedding
