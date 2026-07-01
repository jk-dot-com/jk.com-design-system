import React from 'react';

/**
 * Card — the Phosphorous surface tile. Dark card fill, glowing cyan edge,
 * optional iridescent shimmer border. The base for service, portfolio & info tiles.
 */
export function Card({
  children,
  iridescent = true,
  glow = true,
  radius = 'xl',
  className = '',
  style = {},
  ...props
}) {
  const radii = { lg: 'var(--radius-lg)', xl: 'var(--radius-xl)' };
  const cls = [glow ? 'glow-border' : '', iridescent ? 'iridescent' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <div
      className={cls}
      style={{
        background: 'var(--color-card)',
        borderRadius: radii[radius] || radius,
        padding: '1.5rem',
        ...(glow ? {} : { border: '1px solid var(--color-border)' }),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
