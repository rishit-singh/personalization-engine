-- Behavioral events table
create table if not exists public.behavioral_events (
  id uuid default gen_random_uuid() primary key,
  visitor_id text not null,
  event_type text,
  page text,
  signals jsonb default '{}'::jsonb,
  properties jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create index if not exists idx_behavioral_events_visitor on public.behavioral_events (visitor_id);
create index if not exists idx_behavioral_events_created on public.behavioral_events (created_at desc);

-- Personalization decisions table
create table if not exists public.personalization_decisions (
  id uuid default gen_random_uuid() primary key,
  visitor_id text not null,
  page text not null,
  recommendations jsonb default '[]'::jsonb,
  cognitive_triggers jsonb default '[]'::jsonb,
  confidence float default 0,
  created_at timestamptz default now()
);

create index if not exists idx_personalization_visitor on public.personalization_decisions (visitor_id);

-- Row Level Security
alter table public.behavioral_events enable row level security;
alter table public.personalization_decisions enable row level security;

-- Service role can do everything
create policy "Service role full access to behavioral_events"
  on public.behavioral_events for all
  using (auth.role() = 'service_role');

create policy "Service role full access to personalization_decisions"
  on public.personalization_decisions for all
  using (auth.role() = 'service_role');
