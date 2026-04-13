-- BestLoans Database Schema v2
-- Run this in the Supabase SQL Editor
-- Safe to run on a fresh DB OR on an existing DB from v1

-- ─────────────────────────────────────────────────────────────────────────────
-- TABLE: leads  (create fresh, or migrate existing v1 table)
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.leads (
  id          uuid        default gen_random_uuid() primary key,
  name        text        not null,
  phone       text        not null,
  email       text,
  loan_amount text,
  income      text,
  city        text,
  created_at  timestamptz default now() not null
);

-- Add v2 columns only if they don't exist yet (safe migration)
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name   = 'leads'
      and column_name  = 'employment_type'
  ) then
    alter table public.leads add column employment_type text;
  end if;

  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name   = 'leads'
      and column_name  = 'score'
  ) then
    alter table public.leads add column score smallint default 2;
  end if;

  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name   = 'leads'
      and column_name  = 'intent_level'
  ) then
    alter table public.leads add column intent_level text default 'low';
  end if;

  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name   = 'leads'
      and column_name  = 'source'
  ) then
    alter table public.leads add column source text default 'direct';
  end if;
end $$;

-- Add intent_level check constraint if it doesn't already exist
do $$
begin
  if not exists (
    select 1 from information_schema.table_constraints
    where table_schema     = 'public'
      and table_name       = 'leads'
      and constraint_name  = 'leads_intent_level_check'
  ) then
    alter table public.leads
      add constraint leads_intent_level_check
      check (intent_level in ('low', 'medium', 'high'));
  end if;
end $$;

-- Indexes
create index if not exists leads_phone_idx       on public.leads (phone);
create index if not exists leads_created_at_idx  on public.leads (created_at desc);
create index if not exists leads_intent_idx      on public.leads (intent_level);
create index if not exists leads_score_idx       on public.leads (score desc);

-- Row Level Security
alter table public.leads enable row level security;

-- Policies (drop first so re-running is safe)
drop policy if exists "public_insert_leads"         on public.leads;
drop policy if exists "authenticated_select_leads"  on public.leads;

create policy "public_insert_leads" on public.leads
  for insert to anon with check (true);

create policy "authenticated_select_leads" on public.leads
  for select to authenticated using (true);

comment on table  public.leads              is 'Home loan lead submissions from BestLoans website';
comment on column public.leads.score        is 'Lead score 2–10 (loan_amount_score + income_score)';
comment on column public.leads.intent_level is 'Derived intent: low (2–4), medium (5–7), high (8–10)';
comment on column public.leads.source       is 'Traffic source: utm_source param or referrer hostname';


-- ─────────────────────────────────────────────────────────────────────────────
-- TABLE: events  (analytics / funnel tracking)
-- ─────────────────────────────────────────────────────────────────────────────
create table if not exists public.events (
  id          uuid        default gen_random_uuid() primary key,
  event_name  text        not null,
  session_id  text,
  metadata    jsonb       default '{}',
  created_at  timestamptz default now() not null
);

create index if not exists events_name_idx       on public.events (event_name);
create index if not exists events_session_idx    on public.events (session_id);
create index if not exists events_created_at_idx on public.events (created_at desc);

alter table public.events enable row level security;

drop policy if exists "public_insert_events"        on public.events;
drop policy if exists "authenticated_select_events" on public.events;

create policy "public_insert_events" on public.events
  for insert to anon with check (true);

create policy "authenticated_select_events" on public.events
  for select to authenticated using (true);

comment on table  public.events            is 'Frontend funnel events';
comment on column public.events.event_name is 'form_started | form_submitted | whatsapp_clicked | exit_intent_shown | ...';
comment on column public.events.session_id is 'Browser session ID (bl_<timestamp>_<random>)';
comment on column public.events.metadata   is 'Extra context: city, loan_amount, intent_level, score, source, etc.';


-- ─────────────────────────────────────────────────────────────────────────────
-- USEFUL ADMIN QUERIES
-- ─────────────────────────────────────────────────────────────────────────────

-- Top leads by score:
-- select name, phone, city, loan_amount, income, score, intent_level, source, created_at
-- from leads order by score desc, created_at desc limit 50;

-- Funnel analysis:
-- select event_name, count(*) from events group by event_name order by count desc;

-- Conversion rate:
-- with s as (select count(*) n from events where event_name = 'form_started'),
--      c as (select count(*) n from events where event_name = 'form_submitted')
-- select s.n started, c.n submitted,
--        round(c.n * 100.0 / nullif(s.n,0), 1) conversion_pct from s, c;
