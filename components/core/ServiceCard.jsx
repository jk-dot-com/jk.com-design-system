import React from 'react';
import { Card } from './Card.jsx';

/**
 * ServiceCard — an offering tile: mono-glyph icon, title, description, and mono tech tags.
 * Mirrors the Services grid on jk.com.
 */
export function ServiceCard({ icon, title, description, tags = [], style = {}, ...props }) {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', height: '100%', ...style }} {...props}>
      {icon && <div style={{ fontSize: '1.875rem', marginBottom: '1rem' }} aria-hidden="true">{icon}</div>}
      <h3 style={{ font: 'var(--type-h3)', color: 'var(--color-text)', margin: '0 0 .75rem' }}>{title}</h3>
      <p style={{ fontSize: '.875rem', lineHeight: 1.6, color: 'var(--color-text-dim)', flex: 1, margin: '0 0 1rem' }}>
        {description}
      </p>
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: 'auto' }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '.75rem', padding: '.125rem .5rem', borderRadius: 'var(--radius-sm)',
                background: 'rgba(0,212,255,.08)', color: 'var(--color-cyan-dim)',
                border: '1px solid rgba(0,212,255,.15)', fontFamily: 'var(--font-mono)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
}
