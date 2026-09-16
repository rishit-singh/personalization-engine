# Personalization Engine — DTC Platform

A research-backed personalization engine for direct-to-consumer brands.  
Built on **Next.js 15** (App Router) + **TypeScript**, deployed on **Render**.

## Stack
- **Frontend**: Next.js 15 · React 19 · TypeScript
- **Infra**: Render (Node.js web service)
- **DB**: Supabase (Postgres + Auth)
- **Data**: Event-driven behavioral pipeline (API-first)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Render

The `render.yaml` in this repo wires up deployment automatically.

1. Push to GitHub
2. Create a new Web Service on Render → link this repo
3. Render detects `render.yaml` and configures everything

- **Build**: `pnpm install; pnpm build`
- **Start**: `pnpm start`
- **Port**: 10000

## Project Structure

```
app/
  layout.tsx        — Root layout + metadata
  page.tsx          — Landing page (placeholder)
  dashboard/        — (next) Analytics dashboard
  api/              — (next) Personalization API routes
components/         — (next) Shared UI components
lib/                — (next) Supabase client, helpers
```

## Roadmap
- [ ] Supabase auth + multi-tenant setup
- [ ] Behavioral event ingestion API
- [ ] Personalization scoring engine
- [ ] Dashboard with lift metrics
- [ ] Shopify webhook integration
