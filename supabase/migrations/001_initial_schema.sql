-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Brands table (multi-tenant)
create table if not exists brands (
  id             uuid primary key default uuid_generate_v4(),
  name           text not null,
  domain         text unique not null,
  plan           text not null default 'pilot'
                   check (plan in ('pilot', 'starter', 'growth', 'enterprise')),
  gmv_monthly    numeric default 0,
  api_key        text unique not null default encode(gen_random_bytes(32), 'hex'),
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

-- Personalization events (behavioral signal stream)
create table if not exists personalization_events (
  id                 uuid primary key default uuid_generate_v4(),
  brand_id           uuid not null references brands(id) on delete cascade,
  session_id         text not null,
  user_id            text,
  event_type         text not null
                       check (event_type in ('page_view','product_view','add_to_cart','purchase','custom')),
  payload            jsonb not null default '{}',
  behavioral_signals jsonb not null default '[]',
  timestamp          timestamptz not null default now()
);

-- Personalization decisions (explainable AI output)
create table if not exists personalization_decisions (
  id             uuid primary key default uuid_generate_v4(),
  brand_id       uuid not null references brands(id) on delete cascade,
  session_id     text not null,
  model_version  text not null,
  decision_type  text not null
                   check (decision_type in ('content','product','offer','layout')),
  payload        jsonb not null default '{}',
  explanation    text not null,
  confidence     numeric not null check (confidence >= 0 and confidence <= 1),
  attributed_lift numeric,
  created_at     timestamptz not null default now()
);

-- Lift metrics (aggregated per brand per period)
create table if not exists lift_metrics (
  id                  uuid primary key default uuid_generate_v4(),
  brand_id            uuid not null references brands(id) on delete cascade,
  period              text not null check (period in ('day','week','month')),
  conversion_lift_pct numeric not null default 0,
  ltv_lift_pct        numeric not null default 0,
  events_processed    bigint not null default 0,
  decisions_made      bigint not null default 0,
  reported_at         timestamptz not null default now(),
  unique(brand_id, period, reported_at)
);

-- RLS: enable row-level security on all tables
alter table brands enable row level security;
alter table personalization_events enable row level security;
alter table personalization_decisions enable row level security;
alter table lift_metrics enable row level security;

-- Performance indexes
create index if not exists idx_events_brand_ts    on personalization_events(brand_id, timestamp desc);
create index if not exists idx_events_session      on personalization_events(session_id);
create index if not exists idx_decisions_brand_ts  on personalization_decisions(brand_id, created_at desc);
create index if not exists idx_lift_brand_period   on lift_metrics(brand_id, period, reported_at desc);
