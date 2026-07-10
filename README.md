# tags-solution

TAG Solutions — the marketing website for a B2B AI / software / cloud company,
built with **Next.js 14 (App Router)** and JavaScript.

## Tech stack

- Next.js 14 (App Router), React 18
- Plain JS + JSX (no TypeScript)
- Swiper for sliders; the ITSulu template CSS layered with `public/css/tags.css` overrides
- Live content (blogs + success stories) from the API with static fallbacks

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Optional env var: `NEXT_PUBLIC_API_BASE_URL` (defaults to `https://tagsb.vercel.app`).

## Structure

- `app/` — routes (home, about, services + `[slug]`, industries + `[slug]`,
  success-stories + `[slug]`, blog + `[slug]`, careers, contact, engagement,
  faq, sled, coming-soon, 404)
- `components/` — Header (mega-menus + search), Footer, CtaBand, CountUp,
  ContactForm, NewsletterForm, CookieConsent, Markdown, section renderers
- `data/` — services, industries, careers, testimonials, engagement, and the
  central `site.js` (nav, contact, hero, stats, solution/service groups)
- `lib/api.js` — data-access layer (live API + static fallback)
- `public/` — template assets (`/img`, `/css`) and TAGS assets (`/tags`)

## Content

Services, industries, engagement models, and site config are static data in
`data/`. Blogs and success stories load from the live API and fall back to
bundled data when the API is unavailable.
