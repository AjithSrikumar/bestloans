-- BestLoans Database Schema
-- Run this in Supabase SQL Editor

-- Create leads table
create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text not null,
  email text,
  loan_amount text,
  income text,
  city text,
  created_at timestamptz default now() not null
);

-- Add index on phone for deduplication queries
create index if not exists leads_phone_idx on public.leads (phone);

-- Add index on created_at for sorting
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Enable Row Level Security
alter table public.leads enable row level security;

-- Allow public INSERT (anyone can submit a lead)
create policy "Allow public insert" on public.leads
  for insert to anon
  with check (true);

-- Allow authenticated users (admins) to SELECT all leads
create policy "Allow authenticated select" on public.leads
  for select to authenticated
  using (true);

-- Prevent public SELECT (no one can read leads without auth)
-- (The above two policies already handle this — anon cannot SELECT)

-- Comment on table
comment on table public.leads is 'Home loan lead submissions from BestLoans website';
comment on column public.leads.name is 'Full name of the applicant';
comment on column public.leads.phone is '10-digit Indian mobile number';
comment on column public.leads.email is 'Email address (optional)';
comment on column public.leads.loan_amount is 'Desired loan amount range';
comment on column public.leads.income is 'Monthly income range';
comment on column public.leads.city is 'City of the applicant';
