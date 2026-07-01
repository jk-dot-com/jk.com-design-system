import React from 'react';

/**
 * BracketTag — a [BRACKETED] mono tag. The bracket glyphs glow brighter on hover.
 * Used for hero role tokens and portfolio tech tags.
 */
export function BracketTag({ children, className = '', style = {}, ...props }) {
  return (
    <span className={`phos-bracket-tag ${className}`.trim()} style={style} {...props}>
      <span className="phos-bracket" aria-hidden="true">[</span>
      <span className="phos-bracket-label">{children}</span>
      <span className="phos-bracket" aria-hidden="true">]</span>
      <style>{`
        .phos-bracket-tag{display:inline-flex;align-items:center;gap:.3rem;padding:.3rem .7rem;border-radius:3px;
          border:1px solid rgba(0,212,255,.2);background:rgba(0,212,255,.04);color:var(--color-cyan-dim);
          font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;
          transition:border-color .25s ease,color .25s ease,box-shadow .25s ease;cursor:default;}
        .phos-bracket-tag:hover{border-color:rgba(0,212,255,.5);color:var(--color-cyan);box-shadow:0 0 10px rgba(0,212,255,.15);}
        .phos-bracket{color:var(--color-cyan);opacity:.5;font-weight:300;font-size:.85em;transition:opacity .25s ease;}
        .phos-bracket-tag:hover .phos-bracket{opacity:1;}
      `}</style>
    </span>
  );
}
