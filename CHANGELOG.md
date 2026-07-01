# Changelog

All notable changes to the Phosphorous design system. This repo is the single source of truth for JK.com.

## [1.0.0] — 2026-06-30

Initial extraction of the Phosphorous theme from the live `jk.com` codebase (`github.com/jk-dot-com/jk.com`, `src/styles/global.css` + Svelte sections).

### Added
- **Tokens** — `colors.css`, `typography.css`, `fonts.css`, `spacing.css`, `effects.css` (glows, gradients, keyframes) and `base.css` (resets + shipped utility classes), all wired through `styles.css`.
- **Components** (`components/core/`) — `Button`, `Chip`, `BracketTag`, `SectionLabel`, `Card`, `ServiceCard`, `StatBlock`, `TerminalField`, `StatusReadout`, each with `.d.ts` + `.prompt.md`.
- **UI kit** — `ui_kits/jk-website/`, an interactive one-page recreation of jaysonknight.com.
- **Guidelines** — foundation specimen cards for Colors, Type, Spacing, and Brand.
- **Docs** — `readme.md` (design guide: content fundamentals, visual foundations, iconography), `SKILL.md` (Agent Skill), `INTEGRATION.md`, `package.json`.

### Changed
- Iridescent shimmer border made more pronounced — wider/brighter pink→purple streak, higher opacity, drop-shadow bloom, faster 6s sweep.

### Notes
- Fonts (Space Grotesk, JetBrains Mono) are Google-hosted via `@import`; no binaries vendored yet.
