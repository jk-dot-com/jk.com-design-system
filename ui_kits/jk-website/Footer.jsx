// Footer.jsx — site footer with built-with block + SYS:ONLINE status bar
function Footer() {
  const links = ['About', 'Services', 'Portfolio', 'Blog', 'Contact', 'Privacy'];
  const social = [{ label: 'GitHub', icon: '⌥' }, { label: 'LinkedIn', icon: '𝕃' }, { label: 'Book Me', icon: 'CAL' }];
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
      <div className="section-container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="kit-footer-grid" style={{ marginBottom: '2.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'var(--text-2xl)', marginBottom: '.75rem' }}>JK<span className="gradient-text">.com</span></div>
            <p style={{ fontSize: '.875rem', marginBottom: '1rem', color: 'var(--color-text-ghost)', lineHeight: 1.7 }}>Jayson Knight — Enterprise Cloud Architect.<br />Azure · Cloudflare · .NET · Privacy</p>
            <p style={{ fontSize: '.875rem', color: 'var(--color-text-ghost)', margin: 0 }}>Silicon Valley</p>
            <a href="#" style={{ fontSize: '.875rem', color: 'var(--color-cyan-dim)', textDecoration: 'none' }}>628.377.2567</a>
          </div>
          <div>
            <h3 style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', marginBottom: '1rem', color: 'var(--color-text-ghost)' }}>Navigation</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {links.map(l => <li key={l}><a href="#" style={{ fontSize: '.875rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', marginBottom: '1rem', color: 'var(--color-text-ghost)' }}>Connect</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1.5rem' }}>
              {social.map(s => (
                <a key={s.label} href="#" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', fontSize: '.875rem', color: 'var(--color-text-dim)', textDecoration: 'none' }}>
                  <span style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan)' }} aria-hidden="true">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
            <div style={{ fontSize: 'var(--text-xs)', borderRadius: 'var(--radius-lg)', padding: '.75rem', background: 'var(--color-card)', border: '1px solid var(--color-border)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-ghost)', lineHeight: 1.8 }}>
              <span style={{ color: 'var(--color-cyan-dim)' }}>// built with</span><br />Astro 7 · Svelte 5 · Cloudflare<br />EmDash · Hono · TailwindCSS v4
            </div>
          </div>
        </div>
        <div className="kit-footer-bar" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', fontSize: 'var(--text-xs)', color: 'var(--color-text-ghost)', fontFamily: 'var(--font-mono)' }}>
          <span>© {year} Jayson Knight · JK.com · All rights reserved</span>
          <span style={{ color: 'var(--color-cyan-dim)' }}>Powered by Cloudflare Workers <span style={{ color: 'var(--color-border)' }}>·</span> Silicon Valley</span>
        </div>
      </div>
      <div className="kit-sys-status">
        <span className="kit-sys-dot" />
        <span className="kit-sys-text">SYS: ONLINE</span><span className="kit-sys-sep">//</span>
        <span className="kit-sys-text">BUILD: LOCAL</span><span className="kit-sys-sep">//</span>
        <span className="kit-sys-text">NODE: SJC-01</span><span className="kit-sys-sep">//</span>
        <span className="kit-sys-text">STACK: ASTRO·SVELTE·CLOUDFLARE</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
