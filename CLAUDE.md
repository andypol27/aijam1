# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost)
npm run build     # TypeScript type-check + Vite build
npm run lint      # ESLint
npm run preview   # Preview production build
```

There are no tests configured in this project.

## Architecture

This is a React 19 single-page landing page app built with Vite, TypeScript, and Tailwind CSS 4. It is deployed to GitHub Pages at the base path `/aijam1/` (configured in `vite.config.ts`).

The app is purely presentational — no routing, no state management, no API calls. All data is hardcoded in components.

**Component layout** (`src/App.tsx` composes these in order):
- `Navbar` — fixed header with logo and CTA button
- `HeroSection` — headline, CTA buttons, product image (`src/assets/hero.png`)
- `FeaturesSection` — 3-column feature cards
- `ComparisonTable` — product variant comparison
- `ReviewsSection` — customer testimonials
- `CTASection` — call-to-action
- `Footer` — copyright and social links

**Styling:** Global design tokens are in `src/index.css` (CSS custom properties for colors, typography). Material Design 3-inspired color palette with dark theme (primary: `#FF3131`, surface: `#0c0e12`). Fonts: Space Grotesk (headings), Manrope (body), Material Symbols Outlined (icons loaded via Google Fonts).

**React Compiler** is enabled via Babel plugin — no need to manually add `useMemo`/`useCallback`.

## Google Stitch MCP

This project is configured to use the Google Stitch MCP server (see `mcp.json`). Stitch generates UI screens that can be applied to this app. Setup guide: `docs/guides/stitch.md`.

The `/update-docs` skill (installed at `.claude/skills/update-docs/SKILL.md`) generates an `AGENTS.md` documentation file from the codebase.
