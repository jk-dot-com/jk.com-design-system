// About.jsx — "WHO I AM" two-column section with expandable expertise cards
function About() {
  const [open, setOpen] = React.useState(null);
  const whatIDo = [
    'AI Architecture & Agentic Workflow Design',
    'Enterprise Solutions Architecture & Implementation',
    'AI Engineering, MCP Servers & Platform Design',
    'Software Design, Development & Deployment',
    'Technology & Cloud Consulting',
    'Enterprise Network Architecture',
    'Digital Media & Web Design',
  ];
  const expertise = [
    { label: 'AI Architecture & Agentic Systems', detail: 'Multi-agent orchestration, tool-use pipelines, ADEs, and production AI systems — including Bloqr, an AI-native publishing platform.' },
    { label: 'AI Engineering', detail: 'Anthropic Claude (primary), LLM integration, prompt engineering, MCP servers, and AI gateway design for edge deployment.' },
    { label: 'Azure Architecture', detail: 'Landing zones, AKS, App Services, Azure Networking & VWAN, Entra ID, FinOps.' },
    { label: '.NET & TypeScript/Deno', detail: '.NET 9/10, C#, ASP.NET Core, Blazor, Orleans — plus TypeScript-first development with Deno.' },
    { label: 'Rust & WebAssembly', detail: 'Standalone systems, server-side WASM (WASI), and client-side WASM in Rust and TypeScript.' },
    { label: 'Cloudflare Platform', detail: 'Workers, D1, R2, KV, Queues, Zero Trust / SASE, Tunnels, Pages, MCP servers, AI Gateway.' },
  ];
  const philosophy = ['Technology should drive innovation', 'Embracing technology should be painless', 'Great teams build great products', 'Software should anticipate your needs'];

  return (
    <section id="about" className="section-pad" style={{ background: 'var(--color-surface)' }}>
      <div className="section-container">
        <div className="section-label">Who I Am</div>
        <div className="kit-about-grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-4xl)', margin: '0 0 1.5rem', lineHeight: 1.1 }}>
              Enterprise-grade solutions.<br /><span className="gradient-text">Human-scale delivery.</span>
            </h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-dim)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Twenty-plus years of building software across enterprise stacks — from legacy monoliths to bleeding-edge Cloudflare Workers and AI-native platforms. I design and build agentic AI systems end-to-end.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2.5rem' }}>
              {whatIDo.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem' }}>
                  <span style={{ marginTop: '2px', flexShrink: 0, width: '20px', height: '20px', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', background: 'rgba(0,212,255,0.1)', color: 'var(--color-cyan)', border: '1px solid rgba(0,212,255,0.2)' }}>▸</span>
                  <span style={{ color: 'var(--color-text-dim)' }}>{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-outline">Talk To Me <span aria-hidden="true">→</span></a>
          </div>

          <div>
            <div className="kit-expertise-grid">
              {expertise.map((e, i) => {
                const isOpen = open === i;
                return (
                  <div key={e.label} className="glow-border iridescent" onClick={() => setOpen(isOpen ? null : i)}
                    style={{ background: 'var(--color-card)', borderRadius: 'var(--radius-lg)', padding: '1rem', cursor: 'pointer', borderColor: isOpen ? 'var(--color-pink)' : undefined, boxShadow: isOpen ? 'var(--glow-pink)' : undefined }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem' }}>
                      <h3 style={{ fontSize: '.8rem', fontWeight: 600, margin: 0, color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>{e.label}</h3>
                      <span aria-hidden="true" style={{ color: 'var(--color-cyan)' }}>{isOpen ? '▴' : '▾'}</span>
                    </div>
                    <div style={{ maxHeight: isOpen ? '140px' : '0', opacity: isOpen ? 1 : 0, overflow: 'hidden', transition: 'max-height .25s ease, opacity .25s ease' }}>
                      <p style={{ fontSize: '.72rem', lineHeight: 1.5, paddingTop: '.5rem', color: 'var(--color-text-dim)', margin: 0 }}>{e.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="iridescent" style={{ borderRadius: 'var(--radius-xl)', padding: '1.5rem', marginTop: '1.5rem', background: 'rgba(0,120,212,0.05)', border: '1px solid rgba(0,120,212,0.2)' }}>
              <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '1rem', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>Why I Do It</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                {philosophy.map(p => (
                  <li key={p} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', fontSize: '.875rem', color: 'var(--color-text-dim)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, background: 'var(--color-cyan)' }} />{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
