# Phosphorous — JK.com Design System

> The CRT-cyberpunk design language behind **[jaysonknight.com](https://jaysonknight.com)** — the consulting site and living résumé of **Jayson Knight**, technology & software consultant.
> Tagline: **Unbounded Imagination.**

Phosphorous is named for the phosphor coating of a CRT tube — the source of the warm, persistent cyan glow that defines the whole aesthetic. Think *Blade Runner* terminals: near-black grounds, electric cyan and Azure blue, neon red/pink/purple pops, scanlines, glitch, and a monospace terminal voice.

This repository is the **single source of truth** for the Phosphorous theme across `jk.com` and all future JK / Bloqr-adjacent properties.

---

## Sources

This system was extracted from the live product code. If you have access, read these to go deeper:

- **Site codebase** — `github.com/jk-dot-com/jk.com` (Astro 7 · Svelte 5 · Tailwind CSS 4 · Cloudflare Workers). The design tokens live in `src/styles/global.css` (a Tailwind v4 `@theme` block); the components are Svelte under `src/components/{layout,sections,ui}`.
- **Design-system repo** — `github.com/jk-dot-com/jk.com-design-system` (where this lives).

Explore those repos to recreate or extend designs with higher fidelity — the Svelte sections (`Hero`, `Services`, `Portfolio`, `Contact`, `Footer`) are the ground truth this kit recreates.

---

## Who & what

Jayson Knight is an enterprise cloud architect and AI engineer based in **Silicon Valley**, with 20+ years of software experience. Specialties: **Azure architecture, Cloudflare, .NET, Rust/WASM, TypeScript/Deno, agentic AI (Anthropic Claude, MCP, ADEs), and privacy/security**. Creator of **Bloqr**, an AI-native publishing platform. The site is a one-page scrolling consulting site + blog: hero → about → services → portfolio → contact.

---

## CONTENT FUNDAMENTALS

**Voice:** cutting-edge, direct, confident — never arrogant. Dry, witty, occasionally self-deprecating. Speaks in the **first person ("I")** to the reader as **"you"**. It reads like a senior engineer who has shipped a lot and doesn't need to oversell it.

- **Casing:** Section labels, chips, status readouts, button text, and form labels are **UPPERCASE** monospace. Headings are sentence/title case in Space Grotesk. Body is sentence case.
- **Terminal diction:** system/telemetry framing everywhere — `// INITIALIZING...`, `ONLINE`, `STATUS: AVAILABLE`, `SYS: ONLINE // BUILD: … // NODE: CLT-01`, form submit reads `[ TRANSMIT ]` → `TRANSMITTING...` → `TRANSMISSION_RECEIVED`. Comments are prefixed `//`. Snake_case for "system" strings (`SCHEDULE_SESSION`, `TRANSMISSION_RECEIVED`).
- **Headlines are punchy and short:** "THIS. IS. JK.com", "Work That Ships", "What I Build & Advise", "Enterprise-grade solutions. Human-scale delivery." Gradient-highlight one or two key words, not whole headlines.
- **Body is concrete and technical:** real stacks, real numbers ("40% cost reduction", "200-node migration", ".NET Framework 4.8 → .NET 9"). No fluff, no buzzword soup. Bullets are scannable capability lists.
- **Emoji:** not used anywhere in this system — body copy, headings, UI chrome, and service-card icons all use mono glyphs (`▸ ▾ ▴ • → █ ⌥ 𝕃`) or labels (`TEL`, `LOC`, `CAL`). New emoji usage requires explicit sign-off via a GitHub issue or PR before it's added anywhere in this system or its downstream consumers.
- **CTAs:** confident imperatives — "Book Me", "View Services", "Talk To Me", "Book a Consultation", "[ TRANSMIT ]".

---

## VISUAL FOUNDATIONS

**Color** — Near-black grounds with a blue cast (`#05050a` bg, `#0d1117` surface, `#111827` card). Two structural accents: **Azure blue `#0078d4`** (Microsoft heritage, structure) and **electric cyan `#00d4ff`** (the phosphor glow — the star). Neon pops used sparingly: **red `#ff2d55`** (CTAs / transmit / required), **pink `#f72585`** + **purple `#7b2ff7`** (the iridescent shimmer gradient and gradient-text). Text is cool slate: `#e2e8f0` / `#94a3b8` / `#475569`.

**Type** — **Space Grotesk** for all headings, UI, and buttons (geometric, technical; weights 400–700, plus 900 for the hero glitch). **JetBrains Mono** for labels, chips, status readouts, code, and form fields (uppercased, wide tracking 0.08–0.15em). Long-form body uses the **system-ui stack** (no webfont). Headings are tight (`-0.02em`) and heavy; hero display is `font-weight: 900` at up to 8rem.

**Backgrounds** — Deep solid grounds, never busy. Subtle CRT raster grid (`.grid-overlay`, 48px, cyan @ 3% alpha). Radial glows bleed from the top/corners of the hero. Sections alternate between `--color-bg` and `--color-surface`. No photography; no illustration — the texture is light, grid, and glow.

**Glow, not shadow** — Depth is rendered as **neon bloom** (`box-shadow`/`text-shadow` in the accent color), never a soft gray drop shadow. `--glow-cyan`, `--glow-red`, etc. Text glow (`.text-glow`) gives cyan phosphor persistence. The hero subtitle even has a "phosphor-decay" settle.

**Borders & cards** — Cards are `--color-card` fill, **1px glowing cyan border** (`.glow-border`, `--glow-cyan-sm`), radius **12px** (`--radius-xl`). Radii are otherwise deliberately tight & technical: tags 3px, buttons/inputs 4–6px, panels 8px, chips pill. Many cards add `.iridescent` — a **95%-invisible pink→purple streak** that sweeps the border every 8s (user-pausable via the ShimmerToggle). Borders brighten on hover.

**Motion** — Fast and mechanical, CRT-flavored: glitch displacement on the hero headline, a typewriter CRT subtitle, scanline sweeps, a "signal-lock" sweep on portfolio cards, a CRT power-on (`scaleY`) modal reveal, a slow client marquee, pulsing status dots. Easing is `cubic-bezier(0.23, 1, 0.32, 1)` (a snappy power-on) or plain `ease`. Durations 150/300/600ms. **Everything respects `prefers-reduced-motion`** — decorative loops stop, content stays.

**Hover / press** — Buttons lift `translateY(-1px)` and intensify their glow. Borders go from dim cyan to full cyan. Bracket tags brighten their `[ ]` glyphs and add a glow. No scale-down press state; the lift + glow is the feedback.

**Transparency & blur** — The fixed header uses `backdrop-filter: blur(12px)` over a translucent ground; modals dim the page with `rgba(5,5,10,.85)` + blur. Tinted fills are cyan at very low alpha (0.03–0.1).

**Layout** — Max content width **1280px**, centered, gutters 1.5–2rem. Section vertical rhythm 4rem (mobile) → 6rem (desktop). Header height 64px, fixed. Generous, grid-aligned, lots of breathing room around dense technical content. Decorative **corner brackets** frame the hero and modals (SVG L-shapes, cyan, ~30–40% opacity).

---

## ICONOGRAPHY

Phosphorous is **deliberately glyph-first, not icon-library-driven.**

- **No emoji.** Service-card icons use a plain mono glyph (`▸`) rather than a pictograph. Emoji are not used anywhere in copy, docs, or UI chrome; adding any requires explicit sign-off via a GitHub issue or PR.
- **Monospace Unicode glyphs** do the rest of the work as "icons": `▸` list markers, `▾`/`▴` expand/collapse, `•` bullets, `→` link arrows, `█` terminal cursor, `>` field prompt, `//` separators, and labels like `TEL` / `LOC` / `CAL` / `⌥` (GitHub) / `𝕃` (LinkedIn) standing in for social icons.
- **The logo** is the only bespoke vector: `public/favicon.svg` — a glowing cyan **"JK" monogram** on a CRT grid inside corner brackets, with an outer glow filter. The wordmark is **JK** + gradient-text **.com**. Use it with `filter: drop-shadow(0 0 6px rgba(0,212,255,.6))`.
- **There is no icon font and no SVG icon set.** If a future surface genuinely needs line icons, reach for a thin, technical, single-weight set (e.g. Lucide at ~1.5px stroke in cyan) and **flag it** — it's a net-new decision for this system, not an established pattern.

Assets live in `public/` (`favicon.svg`, `apple-touch-icon.png`, `og-fallback.png`).

---

## INDEX — what's in this system

**Foundations**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `colors.css`, `typography.css`, `fonts.css`, `spacing.css`, `effects.css` (glows, keyframes, gradients), `base.css` (resets + the `.btn` / `.chip` / `.glow-border` / `.iridescent` / `.section-label` / `.gradient-text` utility classes shipped by the live site).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`components/core/`) — React primitives, exported on the bundle namespace:
- `Button` · `Chip` · `BracketTag` · `SectionLabel` · `Card` · `ServiceCard` · `StatBlock` · `TerminalField` · `StatusReadout`

**UI Kits** (`ui_kits/`)
- `jk-website/` — interactive one-page recreation of jaysonknight.com (Header, Hero, About, Services, Portfolio, Contact, Footer). Open `index.html`.

**Other**
- `SKILL.md` — makes this downloadable/usable as an Agent Skill (Claude Code).
- `INTEGRATION.md` — how downstream repos (jk.com, future properties) consume this system.
- `package.json` · `CHANGELOG.md` · `LICENSE` · `.gitignore` — repo distribution scaffolding.
- `public/` — logo + OG assets.
