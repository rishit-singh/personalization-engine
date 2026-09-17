-- Personalization Engine Initial Schema
create table if not exists brands (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  plan text not null default 'pilot' check (plan in ('pilot', 'starter', 'growth', 'enterprise')),
  api_key text unique not null default encode(gen_random_bytes(32), 'hex'),
  created_at timestamptz default now()
);

create table if not exists event_stream (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid references brands(id) on delete cascade,
  session_id text not null,
  event_type text not null,
  properties jsonb default '{}'::jsonb,
  behavioral_signals jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create index if not exists event_stream_brand_id_idx on event_stream(brand_id);
create index if not exists event_stream_session_id_idx on event_stream(session_id);
create index if not exists event_stream_created_at_idx on event_stream(created_at desc);

create table if not exists personalization_decisions (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid references brands(id) on delete cascade,
  session_id text not null,
  model_version text not null,
  decision_type text not null,
  decision_payload jsonb default '{}'::jsonb,
  explanation text,
  confidence_score float check (confidence_score >= 0 and confidence_score <= 1),
  outcome text,
  created_at timestamptz default now()
);

create index if not exists decisions_brand_id_idx on personalization_decisions(brand_id);
create index if not exists decisions_session_id_idx on personalization_decisions(session_id);

alter table brands enable row level security;
alter table event_stream enable row level security;
alter table personalization_decisions enable row level security;
