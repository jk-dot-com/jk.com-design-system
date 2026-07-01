// Portfolio.jsx — case-study cards + "Clients I Adore" marquee
function Portfolio() {
  const studies = [
    { label: 'Azure Migration', title: 'Fortune 500 On-Prem → Azure', description: 'Led architecture and phased migration of a 200-node on-premises data center to Azure Landing Zones. Achieved 40% cost reduction and 99.99% SLA on critical workloads.', tags: ['Azure', 'Landing Zones', 'AKS', 'Bicep'], stat: '40%', statLabel: 'Cost reduction' },
    { label: 'Zero Trust', title: 'Cloudflare ZeroTrust SASE Rollout', description: 'Designed and deployed Cloudflare One (ZTNA/SASE) for a 1,200-seat professional services firm. Replaced legacy VPN and cut remote-access complexity.', tags: ['Cloudflare', 'Zero Trust', 'ZTNA', 'SASE'], stat: '1,200', statLabel: 'Users secured' },
    { label: '.NET Modernization', title: '.NET Framework 4.x → .NET 9', description: 'Modernized a 14-year-old enterprise LOB application — ported from .NET Framework 4.8 + WCF to .NET 9 minimal APIs, with CI/CD on GitHub Actions + Azure DevOps.', tags: ['.NET 9', 'C#', 'Azure DevOps'], stat: '14yr', statLabel: 'Legacy app modernized' },
    { label: 'Privacy Engineering', title: 'Adblock Compiler (OSS)', description: 'Built a compiler-as-a-service that processes ad-filter list DSLs through a custom IR pipeline. Compiles to optimized DNS blocklists at edge speed.', tags: ['Rust', 'Compiler', 'DNS', 'Workers'], stat: '∞', statLabel: 'Filter rules compiled', link: '#' },
  ];
  const clients = ['Paycom', 'Microsoft', 'Paylocity', 'AvidXchange', 'Care Innovations', 'Sogeti', 'Deloitte Consulting', 'Tempur-Sealy Intl', 'Skanska'];

  return (
    <section id="portfolio" className="section-pad" style={{ background: 'var(--color-surface)' }}>
      <div className="section-container">
        <div className="section-label">Portfolio</div>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-4xl)', margin: '0 0 1rem' }}>Work That <span className="gradient-text">Ships</span></h2>
          <p style={{ fontSize: 'var(--text-lg)', maxWidth: '42rem', color: 'var(--color-text-dim)', margin: 0 }}>A selection of projects — enterprise migrations, security deployments, and open-source work that reflects what I care about most.</p>
        </div>

        <div className="kit-portfolio-grid" style={{ marginBottom: '5rem' }}>
          {studies.map(s => (
            <article key={s.title} className="glow-border iridescent" style={{ background: 'var(--color-card)', borderRadius: 'var(--radius-xl)', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <span className="chip" style={{ color: 'var(--color-primary)', borderColor: 'rgba(0,120,212,0.3)' }}>{s.label}</span>
                <div style={{ textAlign: 'right' }}>
                  <div className="gradient-text" style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{s.stat}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-ghost)', fontFamily: 'var(--font-mono)' }}>{s.statLabel}</div>
                </div>
              </div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, fontFamily: 'var(--font-heading)', margin: 0 }}>{s.title}</h3>
              <p style={{ fontSize: '.875rem', lineHeight: 1.6, flex: 1, color: 'var(--color-text-dim)', margin: 0 }}>{s.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '.5rem', marginTop: 'auto' }}>
                {s.tags.map(t => (
                  <span key={t} className="kit-bracket-tag" style={{ fontSize: '.68rem', padding: '.2rem .5rem' }}>
                    <span className="kit-bracket">[</span>{t}<span className="kit-bracket">]</span>
                  </span>
                ))}
                {s.link && <a href={s.link} style={{ marginLeft: 'auto', fontSize: 'var(--text-xs)', color: 'var(--color-cyan)' }}>View on GitHub →</a>}
              </div>
            </article>
          ))}
        </div>

        <div className="section-label">Clients I Adore</div>
        <div className="kit-marquee">
          <div className="kit-marquee-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} style={{ flex: '0 0 auto', borderRadius: 'var(--radius-lg)', padding: '.625rem 1.25rem', fontSize: '.875rem', background: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-cyan)' }}>{c}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Portfolio = Portfolio;
