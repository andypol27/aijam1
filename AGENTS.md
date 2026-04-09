# AGENTS.md

> AI agent documentation for the **ThermoSync** landing page. See `CLAUDE.md` for Claude Code–specific guidance — this file covers what isn't already there.

## 1. Project Overview

ThermoSync product landing page — a purely presentational React 19 SPA deployed to GitHub Pages.

**Stack:** React 19.2, TypeScript 6, Vite 8, Tailwind CSS 4, React Compiler (Babel)  
**Type:** SPA, no routing, no state management, no API calls

## 2. Commands

| Command           | Does                                                    | When                  |
| ----------------- | ------------------------------------------------------- | --------------------- |
| `npm run dev`     | Vite dev server at `localhost:5173` (or next free port) | Development           |
| `npm run build`   | `tsc -b` + Vite production build → `dist/`              | Before deploy         |
| `npm run lint`    | ESLint on `**/*.{ts,tsx}`                               | Before commit         |
| `npm run preview` | Serve `dist/` locally                                   | Test production build |

No test runner configured.

## 3. Project Structure

```
src/
  main.tsx              # Entry point — renders <App /> into #root
  App.tsx               # Composes all page sections in order
  index.css             # @theme tokens (colors, fonts), global styles, utility classes
  assets/
    hero.png            # Product hero image
  components/
    Navbar.tsx          # Fixed header, logo, CTA button
    HeroSection.tsx     # Headline, description, CTA buttons, hero image
    FeaturesSection.tsx # 3-column feature cards (data hardcoded in component)
    ComparisonTable.tsx # Lite/Pro/Ultra comparison table
    ReviewsSection.tsx  # Customer testimonials with star ratings
    CTASection.tsx      # Final call-to-action block
    Footer.tsx          # Copyright, social links
docs/
  prompts/update-docs.md  # Human-readable version of the /update-docs skill
.claude/
  skills/update-docs/SKILL.md  # /update-docs slash command
mcp.json                # Google Stitch MCP server config (API key inside — do not commit)
```

## 4. Architecture

```
index.html → src/main.tsx → src/App.tsx
                                 └─ Navbar, HeroSection, FeaturesSection,
                                    ComparisonTable, ReviewsSection, CTASection, Footer
```

- All page data (feature cards, table rows, reviews) is **hardcoded** inside each component — no props, no store.
- **React Compiler** is active — do not add `useMemo`/`useCallback` manually; the compiler handles it.
- **Tailwind v4**: config is in `src/index.css` via `@theme {}`, not `tailwind.config.js`. Color tokens follow Material Design 3 naming (`--color-surface-container`, `--color-on-surface`, etc.).
- Base path `/aijam1/` is set in `vite.config.ts` for GitHub Pages deployment.

## 5. Conventions

```ts
// Named exports, no default exports in components
export function FeaturesSection() { ... }

// Hardcoded data stays in the component file, typed inline
const features = [
  { icon: 'device_thermostat', title: 'Sledování teploty', ... },
]
```

- `verbatimModuleSyntax` is on — use `import type` for type-only imports.
- `noUnusedLocals` + `noUnusedParameters` are errors — clean up after changes.
- CSS utility classes like `gradient-bg`, `heading-vibrant`, `gradient-text` are defined in `src/index.css`.

## 6. Boundaries

✅ **Always do**

- Run `npm run lint` before committing — ESLint errors block CI
- Keep component data hardcoded in the component (no external data files)

⚠️ **Ask first**

- Adding new npm dependencies
- Changing `base` in `vite.config.ts` (affects GitHub Pages URL)
- Modifying `src/index.css` `@theme` tokens (cascades to all components)

🚫 **Never do**

- Commit `mcp.json` — it contains a Google API key (already in `.gitignore` if not yet, add it)
- Add routing, global state, or API calls — this is intentionally static
- Manually add `useMemo`/`useCallback` — React Compiler handles it
