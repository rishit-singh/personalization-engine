# Personalization Engine

> Research-backed personalization for direct-to-consumer brands.  
> Behavioral science models · Explainable decisions · API-first · Deploys to Render in minutes.

## Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 15 · App Router · Tailwind CSS |
| Backend | Next.js API Routes · Zod validation |
| Database | Supabase (Postgres + RLS) |
| Hosting | Render (Node.js web service) |
| Auth | Supabase Auth (SSR) |

## Local Dev

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Deploy to Render

1. Go to render.com/dashboard
2. New → Web Service → Connect this repo
3. Render auto-detects render.yaml
4. Set env vars: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY

## API

- POST /api/events — ingest behavioral events
- POST /api/decisions — get personalization decision
- GET /api/health — health check

## Roadmap

- [ ] Supabase Auth flows
- [ ] Real ML model (Python microservice)
- [ ] Shopify webhook handler
- [ ] A/B test management
- [ ] Stripe billing
