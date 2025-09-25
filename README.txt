# Bakery Prep & PAR (Supabase + Netlify) — FINAL BUILD

## What this is
- Full mobile UI (Today / Results / Items) — no placeholders
- All categories + items preloaded (Walk-in, Freezer, Dry Prepped Items)
- Supabase persists items, PARs, and settings across devices
- Daily checklist stays local and resets each day

## Setup (one-time)
1) Supabase project → create table `prep_data` with columns:
   - id (int8, primary key)
   - data (jsonb)
   Insert one row: id = 1, data = {}
2) In Supabase → Project Settings → API → copy Project URL + anon public key
3) Open config.js and paste those values inside the quotes
4) Replace files in your existing GitHub repo with everything in this folder and commit
5) Netlify redeploys automatically

## Notes
- If you ever want to back up or restore: use Export/Import buttons in the app.
- If the site shows the seed data once, that’s normal — it seeds Supabase the very first time.
