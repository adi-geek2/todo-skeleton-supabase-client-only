# Todo Skeleton (Supabase client-only)

Minimal Vite + React + TypeScript skeleton wired to Supabase (client-only access).

## Quick start (Codespaces / CodeSandbox / Local)

1. Create a Supabase project at https://app.supabase.com
2. In Supabase SQL Editor, run `sql/schema.sql` to create the `tasks` table.
3. Copy your **Project URL** and **Anon (public) key** from Supabase -> Settings -> API
4. Create environment variables (Codespaces / CodeSandbox / local `.env`):

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON=your_anon_key
```

5. Install & run:

```bash
npm install
npm run dev
```

6. Open http://localhost:5173 (or use Codespaces/CodeSandbox preview)

> Note: This template uses Supabase anon key in the client. It's intended for personal use (option A). For production or shared projects, enable RLS and server-side auth flows.
