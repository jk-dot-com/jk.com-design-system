**Card** — the surface tile everything sits on. Dark `--color-card` fill, glowing cyan border, and (by default) the slow iridescent shimmer streak.

```jsx
<Card>
  <h3>Azure Solutions Architecture</h3>
  <p>End-to-end Azure platform design…</p>
</Card>

<Card glow={false} radius="lg">Quiet info panel</Card>
```

Defaults to a glowing, shimmering 12px tile. Set `glow={false}` for a plain hairline border, `iridescent={false}` to kill the shimmer. The border brightens on hover. Compose `ServiceCard` / `StatBlock` / chips inside.
