-- Minimal tasks table for client-only usage (no RLS)
create table if not exists tasks (
  id bigint generated always as identity primary key,
  user_id uuid,
  title text not null,
  deadline date,
  priority text,
  category text,
  status text default 'pending',
  created_at timestamp default now()
);
