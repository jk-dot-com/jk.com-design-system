import React from 'react';

/**
 * TerminalField — a monospace input framed like a terminal line, with a cyan ">" prompt.
 * Border lights up cyan on focus. Supports single-line and multiline (textarea).
 */
export function TerminalField({
  label,
  required = false,
  multiline = false,
  error = '',
  id,
  style = {},
  ...props
}) {
  const fieldId = id || `tf-${Math.random().toString(36).slice(2, 8)}`;
  const Input = multiline ? 'textarea' : 'input';
  return (
    <div style={style}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{
            display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)',
            marginBottom: '.5rem', color: 'var(--color-text-dim)',
          }}
        >
          {label}{required && <span style={{ color: 'var(--color-red)' }}> *</span>}
        </label>
      )}
      <div className="phos-tf" data-multiline={multiline || undefined} data-error={error ? true : undefined}>
        <span className="phos-tf-prompt" aria-hidden="true">&gt;</span>
        <Input id={fieldId} className="phos-tf-input" {...props} />
      </div>
      {error && <p role="alert" style={{ marginTop: '.25rem', fontSize: 'var(--text-xs)', color: 'var(--color-red)' }}>{error}</p>}
      <style>{`
        .phos-tf{display:flex;align-items:center;gap:.5rem;background:var(--color-surface);
          border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0 .75rem;
          transition:border-color .2s ease,box-shadow .2s ease;}
        .phos-tf:focus-within{border-color:var(--color-cyan);box-shadow:0 0 0 1px var(--color-cyan),0 0 8px rgba(0,212,255,.2);}
        .phos-tf[data-error]{border-color:var(--color-red);}
        .phos-tf[data-multiline]{align-items:flex-start;padding-top:.75rem;}
        .phos-tf-prompt{color:var(--color-cyan);font-family:var(--font-mono);font-size:.85rem;opacity:.7;user-select:none;flex-shrink:0;}
        .phos-tf-input{flex:1;width:100%;background:transparent;border:none;outline:none;color:var(--color-text);
          font-family:var(--font-mono);font-size:.875rem;padding:.75rem 0;}
        .phos-tf-input::placeholder{color:var(--color-text-ghost);opacity:.6;}
        textarea.phos-tf-input{resize:vertical;min-height:120px;}
      `}</style>
    </div>
  );
}
