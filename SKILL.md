---
name: jk-design
description: Use this skill to generate well-branded interfaces and assets for JK.com (Jayson Knight Consulting) using the Phosphorous theme — a CRT-cyberpunk design language (near-black grounds, electric cyan + Azure blue, neon pops, terminal typography, phosphor glow). For production code or throwaway prototypes/mocks/slides. Contains design guidelines, colors, type, fonts, assets, and UI kit components.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Where things are
- `readme.md` — brand context, content fundamentals, visual foundations, iconography. **Read this first.**
- `styles.css` — the single CSS entry point. Link it (or its `@import`ed `tokens/*.css`) to inherit all tokens, fonts, and the `.btn` / `.chip` / `.glow-border` / `.iridescent` / `.section-label` / `.gradient-text` utility classes.
- `tokens/` — colors, typography, fonts, spacing, effects (glows + keyframes), base resets.
- `components/core/` — React primitives (`Button`, `Chip`, `BracketTag`, `SectionLabel`, `Card`, `ServiceCard`, `StatBlock`, `TerminalField`, `StatusReadout`). Each has a `.prompt.md` with usage.
- `ui_kits/jk-website/` — a full interactive recreation of jaysonknight.com to reference or lift from.
- `guidelines/` — visual specimen cards.
- `public/` — logo (`favicon.svg`) and OG images.

## Quick rules of thumb
- Dark always: `--color-bg` ground, `--color-card` surfaces, cyan glow for depth (never gray drop shadows).
- Space Grotesk headings (tight, heavy), JetBrains Mono for UPPERCASE labels/chips/status, system-ui body.
- Terminal voice: `//` comments, `ONLINE`/`STATUS:` readouts, `[ TRANSMIT ]`-style CTAs. First person, confident, dry.
- Emoji only as service icons; everything else uses mono glyphs (`▸ ▾ • → █ >`).
- Use `.glow-border` + `.iridescent` for cards; respect `prefers-reduced-motion`.
