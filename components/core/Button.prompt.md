**Button** — the Phosphorous CTA. Uppercase, glowing, tight-radius. Reach for it for any primary action; use `red` for the high-intent "Book Me / Transmit" actions and `outline` for secondary.

```jsx
<Button variant="primary">View Services</Button>
<Button variant="red" iridescent>Book Me</Button>
<Button variant="outline" size="sm" as="a" href="/blog">Blog →</Button>
```

Variants: `primary` (Azure→cyan gradient), `outline` (cyan stroke + soft glow), `red` (booking/transmit CTA). Sizes: `sm` / `md` / `lg`. Add `iridescent` for the shimmer border on hero CTAs. All buttons lift 1px and intensify their glow on hover.
