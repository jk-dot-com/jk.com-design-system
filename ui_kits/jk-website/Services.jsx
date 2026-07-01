// Services.jsx — tabbed services grid with expandable detail panels
function Services() {
  const [tab, setTab] = React.useState('technical');
  const [open, setOpen] = React.useState(null);

  const technical = [
    { icon: '☁️', title: 'Azure Solutions Architecture', description: 'End-to-end Azure platform design: landing zones, AKS clusters, networking, identity (Entra ID), cost optimization, and FinOps. Fluent in ARM, Bicep, and Terraform.', tags: ['Azure', 'AKS', 'Bicep', 'FinOps'], bullets: ['Landing zone design & implementation', 'AKS cluster & node pool sizing', 'FinOps dashboards & budget alerts'] },
    { icon: '🤖', title: 'AI Architecture & Agentic Systems', description: 'End-to-end agentic AI workflow design — multi-agent orchestration, MCP servers, AI gateways, and Agentic Development Environments. Built on Anthropic Claude, deployable to the Cloudflare edge.', tags: ['Claude', 'MCP', 'AI Gateway', 'Agents'], bullets: ['Multi-agent pipelines and tool-use orchestration', 'ADE design & implementation', 'MCP server and AI gateway deployment'] },
    { icon: '🦀', title: 'Rust & WebAssembly', description: 'Deep Rust expertise across the full stack — standalone systems programming, server-side WASM with WASI, and client-side WASM in both Rust and TypeScript.', tags: ['Rust', 'WASM', 'WASI', 'TypeScript'], bullets: ['Standalone Rust systems: CLIs, daemons, libs', 'Server-side WASM components (WASI)', 'Client-side WASM for browser & Workers'] },
    { icon: '🔶', title: 'Cloudflare Platform', description: 'Full Cloudflare stack: Workers, D1, R2, KV, Queues, Zero Trust / SASE, AI Gateway, MCP servers, and Vectorize. This entire site runs on Cloudflare.', tags: ['Workers', 'AI Gateway', 'Zero Trust'], bullets: ['Workers and Durable Objects architecture', 'AI Gateway and MCP at the edge', 'Zero Trust rollout with staged policy'] },
    { icon: '🔒', title: 'Privacy & Security Engineering', description: 'Zero-trust architectures, DNS encryption (DoH/DoT), SASE deployment, security-first SDLC, and compliance-ready infrastructure design.', tags: ['Zero Trust', 'SASE', 'DNS', 'DoH/DoT'], bullets: ['Zero-trust policy modeling', 'Security hardening with compliance controls', 'Threat-informed architecture'] },
    { icon: '🛠️', title: 'Technical Advisory & Fractional CTO', description: 'Senior technical leadership without the full-time overhead. I own the technical roadmap, make build-vs-buy calls, set engineering standards, then step back when you hire full-time.', tags: ['Fractional CTO', 'Advisory', 'Roadmap'], bullets: ['Technical roadmap ownership', 'Architecture reviews & modernization', 'Engineering standards & hiring bar'] },
  ];
  const creative = [
    { icon: '🎨', title: 'Digital Media & Web Design', description: 'Modern, performant web experiences with a strong visual identity. From brand design to full-stack Astro/Svelte builds.', tags: ['Astro', 'Svelte', 'Design'], bullets: ['Brand-aligned design systems', 'Performance-first implementation', 'Conversion-focused UX'] },
    { icon: '🔗', title: 'Microsoft 365 & Teams', description: 'M365 tenant architecture, Teams customization, SharePoint, and OneDrive deployment with governance best practices.', tags: ['M365', 'Teams', 'SharePoint'], bullets: ['Tenant architecture and governance', 'Teams and SharePoint patterns', 'Adoption and enablement plans'] },
  ];
  const list = tab === 'technical' ? technical : creative;

  const ServiceTile = (s, i) => {
    const isOpen = open === `${tab}-${i}`;
    return (
      <div key={s.title} className="glow-border iridescent" onClick={() => setOpen(isOpen ? null : `${tab}-${i}`)}
        style={{ background: 'var(--color-card)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', display: 'flex', flexDirection: 'column', cursor: 'pointer', borderColor: isOpen ? 'var(--color-cyan)' : undefined, boxShadow: isOpen ? 'var(--glow-cyan)' : undefined }}>
        <div style={{ fontSize: '1.875rem', marginBottom: '1rem' }} aria-hidden="true">{s.icon}</div>
        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, margin: '0 0 .75rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{s.title}</h3>
        <p style={{ fontSize: '.875rem', lineHeight: 1.6, flex: 1, marginBottom: '1rem', color: 'var(--color-text-dim)' }}>{s.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: 'auto' }}>
          {s.tags.map(t => <span key={t} style={{ fontSize: '.75rem', padding: '.125rem .5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(0,212,255,0.08)', color: 'var(--color-cyan-dim)', border: '1px solid rgba(0,212,255,0.15)', fontFamily: 'var(--font-mono)' }}>{t}</span>)}
        </div>
        <div style={{ marginTop: '1rem', fontSize: '.75rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>{isOpen ? '▴ Details' : '▾ Details'}</div>
        {isOpen && (
          <div style={{ marginTop: '1rem', borderRadius: 'var(--radius-lg)', padding: '1rem', background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.25)' }}>
            <div style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', marginBottom: '.5rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>Learn More</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.375rem' }}>
              {s.bullets.map(b => <li key={b} style={{ fontSize: '.875rem', display: 'flex', gap: '.5rem', color: 'var(--color-text-dim)' }}><span style={{ color: 'var(--color-cyan)' }}>•</span><span>{b}</span></li>)}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="services" className="section-pad" style={{ background: 'var(--color-bg)' }}>
      <div className="section-container">
        <div className="section-label">Services</div>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-4xl)', margin: '0 0 1rem' }}>What I <span className="gradient-text">Build</span> &amp; <span className="gradient-text">Advise</span></h2>
          <p style={{ fontSize: 'var(--text-lg)', maxWidth: '42rem', color: 'var(--color-text-dim)', margin: 0 }}>From agentic AI platforms to cloud infrastructure and fractional CTO leadership — I partner with teams to design, build, and operate systems that last.</p>
        </div>
        <div style={{ display: 'flex', gap: '.5rem', marginBottom: '2.5rem' }}>
          <button className={`btn ${tab === 'technical' ? 'btn-primary' : 'btn-outline'}`} onClick={() => { setTab('technical'); setOpen(null); }}>Technical</button>
          <button className={`btn ${tab === 'creative' ? 'btn-primary' : 'btn-outline'}`} onClick={() => { setTab('creative'); setOpen(null); }}>Creative &amp; Advisory</button>
        </div>
        <div className="kit-services-grid">{list.map(ServiceTile)}</div>
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p style={{ fontSize: 'var(--text-lg)', marginBottom: '1.5rem', color: 'var(--color-text-dim)' }}>Ready to start something?</p>
          <a href="#contact" className="btn btn-red iridescent">Book a Consultation</a>
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
