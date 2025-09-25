# Bakery Prep & PAR (Supabase + Netlify)

## Setup Steps

1. Create a free Supabase project at https://supabase.com
   - In Table Editor, create a table `prep_data` with columns:
     - id (int8, primary key)
     - data (jsonb)
   - Insert one row manually: id = 1, data = {}

2. In your Supabase project:
   - Go to Project Settings → API
   - Copy your Project URL and anon public key

3. Open config.js in this repo and paste those values inside the quotes.

4. Upload all files in this folder to your existing GitHub repo (replace old files).

5. Netlify will redeploy automatically. Your site will now use Supabase for PARs/items.

- Supabase stores: PARs, items, and settings (shared across devices)
- Local storage (per device): daily checklist (resets each day)
