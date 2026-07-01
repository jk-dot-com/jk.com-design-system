import React from 'react';

/**
 * StatusReadout — a terminal telemetry chip: a pulsing cyan dot, an ONLINE-style
 * flag, and "//"-separated mono segments. The site's signature status line.
 */
export function StatusReadout({ online = true, segments = [], style = {}, ...props }) {
  return (
    <span className="phos-status" style={style} {...props}>
      <span className="phos-status-dot" aria-hidden="true"></span>
      <span className="phos-status-flag">{online ? 'ONLINE' : 'OFFLINE'}</span>
      {segments.map((s, i) => (
        <React.Fragment key={i}>
          <span className="phos-status-sep" aria-hidden="true">//</span>
          <span className="phos-status-seg">{s}</span>
        </React.Fragment>
      ))}
      <style>{`
        .phos-status{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);
          font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;padding:.45rem 1rem;
          border:1px solid rgba(0,212,255,.15);border-radius:var(--radius-xs);background:rgba(0,212,255,.03);}
        .phos-status-dot{width:6px;height:6px;border-radius:50%;background:var(--color-cyan);flex-shrink:0;
          box-shadow:0 0 6px var(--color-cyan),0 0 12px rgba(0,212,255,.4);animation:phos-status-pulse 2s ease-in-out infinite;}
        .phos-status-flag{color:var(--color-cyan);font-weight:600;}
        .phos-status-seg{color:var(--color-text-dim);}
        .phos-status-sep{opacity:.3;font-size:.6rem;color:var(--color-text-ghost);}
      `}</style>
    </span>
  );
}
