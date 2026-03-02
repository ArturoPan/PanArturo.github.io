# Portfolio — CLAUDE.md

## Owner
**Arturo Pan** — Software Engineer
Email: artpanloo@gmail.com
GitHub: https://github.com/PanArturo
LinkedIn: https://www.linkedin.com/in/apanloo/

## Project Overview
Personal portfolio website with a dark-first design. Single landing page for now, with routing scaffolded for future pages (About, Projects, Skills, Contact).

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Running the Project
```bash
npm run dev       # dev server at http://localhost:3000
npm run build     # production build
```

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout: ThemeProvider, Navbar, Footer, BackgroundGrid, CursorGlow
│   ├── page.tsx            # Landing page → renders HeroSection
│   └── globals.css         # Tailwind + CSS color tokens (dark + light)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky top bar: logo, PillNav, theme toggle, mobile hamburger
│   │   ├── PillNav.tsx     # Centered pill-shaped tab navigation (active state via usePathname)
│   │   └── Footer.tsx      # Centered social icons + copyright
│   ├── home/
│   │   ├── HeroSection.tsx # Two-column grid wrapper (stacks on mobile)
│   │   ├── HeroText.tsx    # Left: greeting, name (last name in accent blue), title, description
│   │   ├── CodeCard.tsx    # Right: editor-style JS object with glow effect
│   │   └── SocialIcons.tsx # Reusable GitHub/LinkedIn/Email icon row
│   ├── providers/
│   │   └── ThemeProvider.tsx  # next-themes wrapper (dark default, class attribute)
│   └── ui/
│       ├── Button.tsx         # Filled + outlined variants
│       ├── BackgroundGrid.tsx # Subtle fixed grid overlay (opacity 0.03)
│       └── CursorGlow.tsx     # Radial blue gradient that follows cursor (DOM ref, no re-renders)
└── lib/
    ├── constants.ts        # All content: SITE, NAV_LINKS, SOCIAL_LINKS, CODE_CARD
    └── fonts.ts            # Inter font via next/font/google
```

## Design Tokens (globals.css)
All colors are CSS custom properties consumed by Tailwind via `@theme inline`.

| Token | Dark | Light |
|-------|------|-------|
| `--background` | `#0a0a1a` | `#f8fafc` |
| `--foreground` | `#e2e8f0` | `#0f172a` |
| `--accent` | `#3b82f6` | `#3b82f6` |
| `--surface` | `#111827` | `#f1f5f9` |
| `--surface-light` | `#1e293b` | `#e2e8f0` |
| `--muted` | `#94a3b8` | `#64748b` |

Syntax colors: `--syntax-keyword` (purple), `--syntax-string` (green), `--syntax-property` (blue), `--syntax-comment` (gray).

## Key Decisions
- **Dark-first**: Default theme is dark. Light mode uses `:root.light` CSS class via next-themes `attribute="class"`.
- **No syntax highlighting library**: Code card uses manual `<span>` coloring against CODE_CARD constants.
- **Cursor glow**: Uses direct DOM ref (`useRef`) to update position — avoids React re-renders on every mousemove.
- **Theme toggle hydration**: `mounted` state guard in Navbar prevents SSR/client mismatch on sun/moon icon.
- **Content lives in `lib/constants.ts`**: All personal info, nav links, social links, and code card lines are centralized here — edit this file to update site content.

## Content — Update Here
`src/lib/constants.ts` controls everything visible on the site:
- `SITE` — name, title, description, email
- `NAV_LINKS` — navigation tabs
- `SOCIAL_LINKS` — GitHub / LinkedIn / Email URLs
- `CODE_CARD` — the editor card content on the landing page

## User Preferences
- Concise responses, no fluff
- Dark-first design — light mode is a toggle, not the default
- No emoji in code or UI unless explicitly requested
- Keep solutions simple; avoid over-engineering
