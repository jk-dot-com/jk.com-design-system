import React from 'react';

/**
 * SectionLabel — the "// LABEL" divider that opens every section.
 * Mono, uppercase, widest tracking, with a cyan tick and a fading rule.
 */
export function SectionLabel({ children, className = '', style = {}, ...props }) {
  return (
    <div className={`section-label ${className}`.trim()} style={style} {...props}>
      {children}
    </div>
  );
}
