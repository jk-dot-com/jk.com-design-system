// Hero.jsx — "THIS. IS. JK.com" full-screen hero with glitch headline + role tags
function Hero() {
  const roles = ['Azure Architect', 'AI Engineer', 'Cloudflare Specialist', 'Rust & WASM', 'Privacy & Security'];
  const Corner = ({ d, style }) => (
    <svg viewBox="0 0 48 48" fill="none" style={{ position: 'absolute', width: '48px', height: '48px', opacity: .3, ...style }}>
      <path d={d} stroke="var(--color-cyan)" strokeWidth="1.5" />
    </svg>
  );
  return (
    <section id="home" className="grid-overlay" style={{ position: 'relative', minHeight: 'calc(100vh - var(--header-height))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(0,120,212,0.12) 0%, rgba(5,5,10,0) 70%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(0,212,255,0.06) 0%, transparent 60%)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: '30%', height: '1px', opacity: .3, background: 'linear-gradient(to right, transparent, var(--color-cyan-dim), transparent)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, top: '70%', height: '1px', opacity: .15, background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)' }} />
      </div>
      <div aria-hidden="true" style={{ position: 'absolute', inset: '2rem', pointerEvents: 'none' }}>
        <Corner d="M 0 24 L 0 0 L 24 0" style={{ top: 0, left: 0 }} />
        <Corner d="M 24 0 L 48 0 L 48 24" style={{ top: 0, right: 0 }} />
        <Corner d="M 0 24 L 0 48 L 24 48" style={{ bottom: 0, left: 0 }} />
        <Corner d="M 24 48 L 48 48 L 48 24" style={{ bottom: 0, right: 0 }} />
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div className="kit-status" style={{ marginBottom: '2rem' }}>
          <span className="kit-status-dot" />
          <span style={{ color: 'var(--color-cyan)', fontWeight: 600 }}>ONLINE</span>
          <span style={{ opacity: .3, fontSize: '.6rem' }}>//</span>
          <span style={{ color: 'var(--color-text-dim)' }}>LOCATION: SILICON VALLEY</span>
          <span style={{ opacity: .3, fontSize: '.6rem' }}>//</span>
          <span style={{ color: 'var(--color-text-dim)' }}>STATUS: AVAILABLE</span>
        </div>

        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <h1 className="kit-glitch" data-text="THIS. IS." style={{ position: 'relative', fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-.02em', color: '#fff', margin: 0, lineHeight: .95 }}>THIS. IS.</h1>
          <div className="gradient-text text-glow" style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, letterSpacing: '-.02em', lineHeight: .95 }}>JK.com</div>
        </div>

        <p className="kit-crt-line" style={{ marginTop: '1.5rem' }}>Unbounded Imagination<span className="kit-crt-cursor">█</span></p>

        <ul style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '.75rem', listStyle: 'none', padding: 0 }}>
          {roles.map(r => (
            <li key={r} className="kit-bracket-tag">
              <span className="kit-bracket">[</span>{r}<span className="kit-bracket">]</span>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <a href="#contact" className="btn btn-red iridescent">Book Me</a>
          <a href="#services" className="btn btn-outline">View Services <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div aria-hidden="true" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: .5 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', color: 'var(--color-text-ghost)', fontFamily: 'var(--font-mono)', fontSize: '.65rem', letterSpacing: '.15em' }}>
          <span>SCROLL</span>
          <div className="kit-bounce" style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--color-cyan-dim), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
