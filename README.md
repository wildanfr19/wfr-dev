# Wildan Fathur Rohman — Portfolio

Modern dark-themed portfolio built with **Next.js 16**, TypeScript, and Tailwind CSS.

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
- `components/Hero.tsx` — Name, tagline, stats
- `components/About.tsx` — Bio, details
- `components/Projects.tsx` — Add/edit projects
- `components/Skills.tsx` — Skill percentages
- `components/Contact.tsx` — Email, social links
- `app/globals.css` — Change `--accent` color, fonts
