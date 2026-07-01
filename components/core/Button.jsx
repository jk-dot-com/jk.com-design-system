import React from 'react';

/**
 * Button — Phosphorous CTA button.
 * Three variants mirror the live site: primary (Azure→cyan gradient),
 * outline (cyan stroke + glow), and red (the booking/transmit CTA).
 * Uppercase Space Grotesk, tight radius, neon glow shadow, -1px hover lift.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iridescent = false,
  as = 'button',
  className = '',
  style = {},
  ...props
}) {
  const sizes = {
    sm: { padding: '0.5rem 1.25rem', fontSize: '0.8rem' },
    md: { padding: '0.75rem 1.75rem', fontSize: '0.9rem' },
    lg: { padding: '0.9rem 2.25rem', fontSize: '1rem' },
  };

  const Tag = as;
  const cls = ['btn', `btn-${variant}`, iridescent ? 'iridescent' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={cls} style={{ ...sizes[size], ...style }} {...props}>
      {children}
    </Tag>
  );
}
