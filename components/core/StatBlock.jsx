import React from 'react';

/**
 * StatBlock — a gradient-text metric with a mono caption. Used on portfolio case studies.
 */
export function StatBlock({ stat, label, align = 'right', style = {}, ...props }) {
  return (
    <div style={{ textAlign: align, ...style }} {...props}>
      <div className="gradient-text" style={{ font: 'var(--type-h2)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-2xl)' }}>
        {stat}
      </div>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-ghost)', fontFamily: 'var(--font-mono)' }}>
        {label}
      </div>
    </div>
  );
}
