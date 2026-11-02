# Wildan Fathur Rohman — Portfolio

Light-themed portfolio with clickable project screenshot galleries, built with **Next.js 16** and TypeScript.

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard
1. Push repo to GitHub
2. vercel.com → New Project → Import repo
3. Click Deploy (auto-detects Next.js)

### Option 3 — Local Dev
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Customize
- `lib/projects.ts` — Featured projects (with screenshots) and other project cards
- `components/Hero.tsx` — Headline, intro, stats
- `components/Experience.tsx` — Work history, education, quick facts
- `components/Skills.tsx` — Skill groups
- `components/Contact.tsx` — Email, social links
- `app/globals.css` — Colors (`--accent`, `--bg`, ...) and fonts

## Project screenshots
Raw material lives in `bahan-portfolio/` (git-ignored). To add or reorder screenshots,
edit `MANIFEST` in `scripts/build-gallery.py` and run:

```bash
python scripts/build-gallery.py   # needs Pillow
```

It writes compressed WebP files to `public/projects/<slug>/` and regenerates `lib/gallery.ts`.

RFID warehouse, calibration and skill matrix screenshots use permanent local blur
on sensitive data in both full-size images and thumbnails. Reviewed regions are
stored in `scripts/gallery-redactions.json`, keyed by the original source path.
Review these regions whenever a source screenshot changes. New source paths in
these galleries require a privacy review before they can be exported.

To re-export only these three galleries from the ignored originals:

```bash
python scripts/redact-gallery.py
```
