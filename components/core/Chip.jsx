import React from 'react';

/**
 * Chip — mono, uppercase, pill-shaped tag with a faint cyan fill.
 * The site's go-to for tech labels and small status markers.
 */
export function Chip({ children, color, borderColor, className = '', style = {}, ...props }) {
  return (
    <span
      className={`chip ${className}`.trim()}
      style={{
        ...(color ? { color } : {}),
        ...(borderColor ? { borderColor } : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
