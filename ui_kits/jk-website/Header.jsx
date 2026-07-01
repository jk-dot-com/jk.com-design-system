// Header.jsx — JK.com fixed site header with scroll-active nav + mobile menu
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState('#home');
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  React.useEffect(() => {
    const scroller = document.getElementById('kit-scroll') || window;
    const onScroll = () => {
      const y = scroller === window ? window.scrollY : scroller.scrollTop;
      setScrolled(y > 20);
    };
    onScroll();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 40, height: 'var(--header-height)',
        background: scrolled ? 'rgba(5,5,10,0.92)' : 'rgba(5,5,10,0.7)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
        boxShadow: scrolled ? 'var(--shadow-header)' : 'none',
        transition: 'all .3s ease',
      }}
    >
      <div className="section-container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" onClick={() => setActive('#home')} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', textDecoration: 'none' }}>
          <img src="../../public/favicon.svg" alt="JK logo" width="40" height="40" style={{ filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.6))' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.125rem', letterSpacing: '-.02em', color: 'var(--color-text)' }}>
            JK<span className="gradient-text">.com</span>
          </span>
        </a>

        <nav className="kit-desktop-nav" style={{ alignItems: 'center', gap: '2rem' }}>
          {links.map(({ href, label }) => {
            const isActive = active === href;
            return (
              <a key={href} href={href} onClick={() => setActive(href)}
                style={{
                  position: 'relative', fontSize: '.875rem', fontWeight: 500, textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  color: isActive ? 'var(--color-text)' : 'var(--color-text-dim)',
                }}>
                {label}{isActive && <span className="kit-nav-cursor">_</span>}
                <span style={{
                  position: 'absolute', left: 0, bottom: '-4px', height: '1px',
                  background: isActive ? 'var(--color-purple)' : 'var(--color-cyan)',
                  width: isActive ? '100%' : '0', transition: 'width .3s ease',
                }} />
              </a>
            );
          })}
          <a href="#contact" className="btn btn-red" style={{ padding: '.4rem 1rem', fontSize: '.8rem' }}>Book Me</a>
        </nav>

        <button className="kit-burger" onClick={() => setMenuOpen(v => !v)} aria-label="Menu"
          style={{ flexDirection: 'column', gap: '5px', background: 'transparent', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '8px', cursor: 'pointer' }}>
          <span style={{ display: 'block', width: '18px', height: '1px', background: 'var(--color-text)', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none', transition: 'transform .3s' }} />
          <span style={{ display: 'block', width: '18px', height: '1px', background: 'var(--color-text)', opacity: menuOpen ? 0 : 1, transition: 'opacity .3s' }} />
          <span style={{ display: 'block', width: '18px', height: '1px', background: 'var(--color-text)', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none', transition: 'transform .3s' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="kit-mobile-menu" style={{ background: 'rgba(5,5,10,0.98)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--color-border)' }}>
          <nav className="section-container" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {links.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => { setActive(href); setMenuOpen(false); }}
                style={{ fontSize: '1.125rem', fontWeight: 500, padding: '.5rem 0', textDecoration: 'none', color: 'var(--color-text-dim)', borderBottom: '1px solid var(--color-border)' }}>
                {label}
              </a>
            ))}
            <a href="#contact" className="btn btn-red" style={{ marginTop: '.5rem', justifyContent: 'center' }}>Book Me</a>
          </nav>
        </div>
      )}
    </header>
  );
}
window.Header = Header;
