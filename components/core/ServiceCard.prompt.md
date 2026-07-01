**ServiceCard** — a consulting-offering tile. Emoji icon, Space Grotesk title, dimmed description, and a row of mono tech tags pinned to the bottom. This is exactly how the Services grid renders on jk.com.

```jsx
<ServiceCard
  icon="☁️"
  title="Azure Solutions Architecture"
  description="End-to-end Azure platform design: landing zones, AKS, identity, FinOps."
  tags={['Azure', 'AKS', 'Bicep', 'FinOps']}
/>
```

Lay them out in a responsive grid with `gap: 1.5rem`. Emoji icons are on-brand here (the one place the system uses them). Built on `Card`, so it inherits the glow + shimmer border.
