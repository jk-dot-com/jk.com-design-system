**StatusReadout** — the brand's signature telemetry line: a pulsing cyan dot, an `ONLINE` flag, and `//`-separated monospace segments. Sits above the hero headline and in the footer.

```jsx
<StatusReadout segments={['LOCATION: SILICON VALLEY', 'STATUS: AVAILABLE']} />
```

Keep segments short, uppercase, and telemetry-flavored (location, build, node, status). The dot pulses on a 2s loop (stilled under `prefers-reduced-motion`).
