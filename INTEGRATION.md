# Integration Guide — Phosphorous

How to consume the Phosphorous design system from another repository (starting with **jk.com**). This repo is the **single source of truth**; downstream projects should never fork tokens — they link or import from here.

---

## 1. Add the dependency

Phosphorous is a private package. Consume it one of two ways:

**A. Git submodule / subtree** (simplest for a Cloudflare/Astro monorepo-adjacent setup)
```bash
# from the jk.com repo root
git submodule add https://github.com/jk-dot-com/jk.com-design-system.git vendor/phosphorous
```

**B. Private npm / GitHub Packages** (if you publish it)
```bash
npm install @jk-dot-com/phosphorous
# package.json is already configured with exports + files
```

---

## 2. Link the CSS (the only required step)

Everything visual — tokens, `@font-face`/Google-font imports, and the shipped utility classes (`.btn`, `.chip`, `.glow-border`, `.iridescent`, `.section-label`, `.gradient-text`, `.grid-overlay`) — flows from one entry file:

```css
/* your app's global stylesheet */
@import "@jk-dot-com/phosphorous/styles.css";
/* or, submodule: @import "../vendor/phosphorous/styles.css"; */
```

`styles.css` is **only** `@import` lines. It pulls in `tokens/colors.css`, `typography.css`, `fonts.css`, `spacing.css`, `effects.css`, and `base.css`. After linking it, every `--color-*`, `--font-*`, `--glow-*`, `--radius-*` token and every utility class is available globally. No build step, no config.

### Using tokens directly
```css
.my-panel {
  background: var(--color-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--glow-cyan-sm);
  font-family: var(--font-mono);
}
```

### Using utility classes
```html
<button class="btn btn-red iridescent">Book Me</button>
<div class="glow-border iridescent">…card…</div>
<div class="section-label">Services</div>
```

---

## 3. Use the React components (optional)

The primitives in `components/core/` are plain React (React 18+, no other deps). Import them directly:

```jsx
import { Button, Card, ServiceCard, StatusReadout } from "@jk-dot-com/phosphorous/components/core";
```

Each component styles itself entirely through the CSS custom properties above, so **step 2 must be done first**. Component contracts live in the sibling `.d.ts` files; usage notes in each `.prompt.md`.

Available: `Button`, `Chip`, `BracketTag`, `SectionLabel`, `Card`, `ServiceCard`, `StatBlock`, `TerminalField`, `StatusReadout`.

> **Svelte / Astro sites (like jk.com today):** you don't need the React layer at all — link `styles.css` and use the utility classes + tokens. The React components are a convenience mirror of the same markup the Svelte sections already produce. Keep the two in sync by treating this repo's tokens as canonical.

---

## 4. Fonts

Phosphorous ships **Space Grotesk** and **JetBrains Mono** via Google Fonts `@import` inside `tokens/fonts.css` (matching the live site). No binaries are vendored. If you need self-hosted `.woff2` for offline/perf, drop them in `public/fonts/` and swap the `@import` in `fonts.css` for `@font-face` rules — do it **here**, so every consumer inherits it.

---

## 5. Keeping downstream repos in sync

- **Tokens, fonts, utilities, and component API changes happen in THIS repo only.**
- Bump `version` in `package.json` on any visual change; note it in `CHANGELOG.md`.
- Downstream repos update the submodule / bump the dependency and re-test.
- The `readme.md` (design guide) + `SKILL.md` travel with the package so design agents and Claude Code stay authoritative.

---

## 6. Design-tooling exports

- **Claude Code / Agent Skills** — `SKILL.md` at the repo root makes this directory a drop-in skill. Point Claude Code at the repo and it can design against the brand.
- **Canva** — export any `guidelines/*.html` specimen card or a `ui_kits/` screen for a Canva-ready brand board / template.
