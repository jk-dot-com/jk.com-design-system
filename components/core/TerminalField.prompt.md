**TerminalField** — the contact-form input, styled like a terminal line: a cyan `>` prompt, monospace text, and a border that lights up cyan (with a soft glow) on focus.

```jsx
<TerminalField label="Name" required placeholder="Jane Smith" />
<TerminalField label="Message" required multiline rows={5}
  placeholder="Tell me about your needs…" error={errors.message} />
```

Single-line by default; pass `multiline` for a resizable textarea. `error` shows a red message and reddens the border. Submit buttons in this context read like `[ TRANSMIT ]` — use a red `Button`.
