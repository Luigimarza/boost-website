# AGENTS.md — Boost Creative Studio

Non-discoverable landmines and intentional choices. Keep short.

## Landmines / do-not-touch

- **Hotlinked third-party assets.** Hero portrait (`shrug-person-78902957.figma.site`), 21 marquee gifs (`motionsites.ai`), and 9 project images (`images.higgs.ai` → cloudfront) are referenced by absolute URL in `src/sections/*.tsx`. Owner accepted the risk that links may break. Do **not** download to `/public` or replace with placeholders unless the user provides replacement files.
- **`AnimatedText` uses one `useMotionValueEvent` + `useState` array, not per-character `useTransform`.** Per-char `useTransform` inside a `.map()` would call hooks in a loop and break rules-of-hooks. Keep the single-subscriber pattern in `src/components/AnimatedText.tsx`.
- **`Magnet` listens on `window`, not the element.** Required so the effect activates inside a `padding`-sized halo around the bbox (mouse never enters the image itself). Do not "fix" by scoping the listener to the element — it kills the effect.
- **Navbar `Price` link points to `#services` on purpose.** There is no Price section by design. Do not scaffold one without an explicit request.

## Copy / branding

- Studio voice is **plural ("we're Boost", "we focus on")**. The original visual spec used solo voice ("Hi, i'm jack", "i focus on"). Do not revert to solo voice when re-reading the spec.
- About heading stays **"About me"** verbatim per spec — not "About us". Leave it alone.
- **Positioning (Nov 2026): Boost works ONLY on immersive formats and experiences.** Two models: proprietary formats (`horror-drive-in` under the Horror Days brand, and `oktoberdays`) and commissioned formats (all other events, **including `oktoberland`**), with 360° marketing limited to the event. No generic branding/web/AI/ads services; do not reintroduce them in copy.
- Posters for `horror-drive-in` / `oktoberdays` (`public/events/*.webp`) were composed from the official horrordays.it / oktoberdays.it photos and logos; there was no original vertical poster. Replace them if the owner supplies real ones.
- Homepage "I NUMERI" totals are derived from `EVENT_TOTALS` in `src/data/events.ts` and rounded **down** so claims stay true. Only the "28 sold-out shows" stat is hardcoded.
- The marquee under the hero (`src/sections/MarqueeSection.tsx`) is now a poster belt built from every event `cover`; the old `public/marquee/*` gifs are unused.
- Branding portfolio (Nocte, Trovauto, Riserva) was removed on purpose: `/progetti*` redirects to `/eventi`. Images remain in `public/projects/`; code is in git history.
- `EventItem.model` (`src/data/events.ts`) drives the "Format proprietario / Su commissione" badge (`src/components/ModelBadge.tsx`).
- Homepage `#contact` is the **client** lead form (`ClientFormSection`). The job-application form (`ContactFormSection`) lives only on `/contatti`.
- Contact action is `mailto:boostcreativeai@gmail.com`. No form, no API route.

## Non-discoverable commands

- **Deploy needs Vercel CLI installed globally:** `npm i -g vercel`, then `vercel` from project root. The CLI is **not** a project dep and not in `package.json`.
- `vercel.ts` (not `vercel.json`) drives config — uses `@vercel/config/v1`. Do not regenerate as `vercel.json`.

## Version pins to respect

- **Tailwind v3**, not v4. Spec was authored against v3 utility/syntax (e.g. arbitrary `text-[14vw]`, `rounded-t-[60px]`). Do not upgrade casually.
- React **18** (not 19). Framer Motion **12.x** API used (`motion.create`, `useMotionValueEvent`).
