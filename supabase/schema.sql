-- BestLoans Database Schema v2
-- Run this in the Supabase SQL Editor

-- ─────────────────────────────────────────────────────────────────────────────
-- TABLE: leads
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.leads (
  id              uuid          default gen_random_uuid() primary key,
  name            text          not null,
  phone           text          not null,
  email           text,
  loan_amount     text,
  income          text,
  city            text,
  employment_type text,
  -- Lead scoring
  score           smallint      default 2,       -- 2–10; higher = better lead
  intent_level    text          default 'low'    -- 'low' | 'medium' | 'high'
                    check (intent_level in ('low', 'medium', 'high')),
  source          text          default 'direct', -- utm_source or referrer hostname
  created_at      timestamptz   default now() not null
);

-- Indexes
create index if not exists leads_phone_idx       on public.leads (phone);
create index if not exists leads_created_at_idx  on public.leads (created_at desc);
create index if not exists leads_intent_idx      on public.leads (intent_level);
create index if not exists leads_score_idx       on public.leads (score desc);

-- Row Level Security
alter table public.leads enable row level security;

-- Public: INSERT only (anyone can submit a lead)
create policy "public_insert_leads" on public.leads
  for insert to anon
  with check (true);

-- Authenticated (admins): SELECT all leads
create policy "authenticated_select_leads" on public.leads
  for select to authenticated
  using (true);

comment on table  public.leads              is 'Home loan lead submissions from BestLoans website';
comment on column public.leads.score        is 'Lead score 2–10 (loan_amount_score + income_score)';
comment on column public.leads.intent_level is 'Derived intent: low (2–4), medium (5–7), high (8–10)';
comment on column public.leads.source       is 'Traffic source: utm_source param or referrer hostname';


-- ─────────────────────────────────────────────────────────────────────────────
-- TABLE: events  (analytics / funnel tracking)
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.events (
  id          uuid          default gen_random_uuid() primary key,
  event_name  text          not null,
  session_id  text,
  metadata    jsonb         default '{}',
  created_at  timestamptz   default now() not null
);

create index if not exists events_name_idx       on public.events (event_name);
create index if not exists events_session_idx    on public.events (session_id);
create index if not exists events_created_at_idx on public.events (created_at desc);

alter table public.events enable row level security;

-- Public: INSERT (anyone can log an event)
create policy "public_insert_events" on public.events
  for insert to anon
  with check (true);

-- Authenticated: SELECT
create policy "authenticated_select_events" on public.events
  for select to authenticated
  using (true);

comment on table  public.events            is 'Frontend funnel events: form_started, form_submitted, whatsapp_clicked, etc.';
comment on column public.events.event_name is 'Event identifier (form_started | form_submitted | whatsapp_clicked | exit_intent_shown | ...)';
comment on column public.events.session_id is 'Browser session ID (bl_<timestamp>_<random>)';
comment on column public.events.metadata   is 'Additional context: city, loan_amount, intent_level, score, source, etc.';


-- ─────────────────────────────────────────────────────────────────────────────
-- USEFUL ADMIN QUERIES (for reference)
-- ─────────────────────────────────────────────────────────────────────────────

-- Top leads by score:
-- select name, phone, city, loan_amount, income, score, intent_level, source, created_at
-- from leads
-- order by score desc, created_at desc
-- limit 50;

-- Funnel analysis:
-- select event_name, count(*) as count
-- from events
-- group by event_name
-- order by count desc;

-- Conversion rate (form_started → form_submitted):
-- with started  as (select count(*) as n from events where event_name = 'form_started'),
--      submitted as (select count(*) as n from events where event_name = 'form_submitted')
-- select
--   started.n  as started,
--   submitted.n as submitted,
--   round(submitted.n * 100.0 / nullif(started.n, 0), 1) as conversion_pct
-- from started, submitted;
