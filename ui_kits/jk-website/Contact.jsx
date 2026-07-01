// Contact.jsx — "TALK TO ME" terminal contact form with transmit states
function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', company: '', message: '' });
  const [state, setState] = React.useState('idle'); // idle | submitting | success
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const quickStarts = [
    { title: 'Visual Refresh Sprint', brief: 'I want a visual refresh sprint focused on hierarchy, spacing, motion polish, and premium UI consistency.' },
    { title: 'Structural IA Overhaul', brief: 'I want to restructure the site architecture so services, proof, and outcomes are easier to navigate and convert.' },
    { title: 'Feature Expansion Build', brief: 'I want to add interactive case studies, downloadable assets, and smarter intake flows for higher-quality leads.' },
    { title: 'Technical Hardening Pass', brief: 'I want Core Web Vitals optimization, accessibility QA automation, and schema/SEO technical hardening.' },
  ];

  const submit = (e) => {
    e.preventDefault();
    setState('submitting');
    setTimeout(() => setState('success'), 1100);
  };

  const Field = ({ label, k, type = 'text', multiline, placeholder, required }) => (
    <div>
      <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', marginBottom: '.5rem', color: 'var(--color-text-dim)' }}>
        {label}{required && <span style={{ color: 'var(--color-red)' }}> *</span>}
      </label>
      <div className={`kit-tf${multiline ? ' kit-tf-multi' : ''}`}>
        <span className="kit-tf-prompt" aria-hidden="true">&gt;</span>
        {multiline
          ? <textarea className="kit-tf-input" rows={5} value={form[k]} onChange={set(k)} placeholder={placeholder} style={{ resize: 'vertical', minHeight: '120px' }} />
          : <input className="kit-tf-input" type={type} value={form[k]} onChange={set(k)} placeholder={placeholder} />}
      </div>
    </div>
  );

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--color-bg)' }}>
      <div className="section-container">
        <div className="section-label">Contact</div>
        <div className="kit-contact-grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-4xl)', margin: '0 0 1.5rem', lineHeight: 1.1 }}>Let's Build<br /><span className="gradient-text">Something Great</span></h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-dim)', lineHeight: 1.8, marginBottom: '1.5rem' }}>Whether you're planning a cloud migration, need an architecture review, or want to ship something that's never been built — I'm interested.</p>

            <div className="iridescent" style={{ borderRadius: 'var(--radius-xl)', padding: '1.25rem', marginBottom: '1.5rem', background: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', marginBottom: '.75rem', color: 'var(--color-cyan)' }}>Fast-Track Website Upgrades</h3>
              <div className="kit-quickstart-grid">
                {quickStarts.map(q => (
                  <button key={q.title} type="button" onClick={() => setForm(f => ({ ...f, message: q.brief }))}
                    style={{ textAlign: 'left', borderRadius: 'var(--radius-lg)', padding: '.75rem', background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.2)', cursor: 'pointer' }}>
                    <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', marginBottom: '.25rem', color: 'var(--color-cyan)' }}>Quick Start</div>
                    <div style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--color-text)' }}>{q.title}</div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem' }}>
              <a href="#" className="btn btn-outline" style={{ padding: '.5rem 1.25rem', fontSize: '.8rem' }}>GitHub</a>
              <a href="#" className="btn btn-outline" style={{ padding: '.5rem 1.25rem', fontSize: '.8rem' }}>LinkedIn</a>
              <a href="#contact" className="btn btn-red iridescent" style={{ padding: '.5rem 1.25rem', fontSize: '.8rem' }}>Book Me</a>
            </div>
          </div>

          <div>
            {state === 'success' ? (
              <div style={{ borderRadius: 'var(--radius-xl)', padding: '2rem', textAlign: 'center', background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.3)' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, fontFamily: 'var(--font-heading)', margin: '0 0 .5rem' }}>TRANSMISSION_RECEIVED</h3>
                <p style={{ color: 'var(--color-text-dim)' }}>Signal confirmed. Standing by for response.</p>
                <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => { setState('idle'); setForm({ name: '', email: '', company: '', message: '' }); }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="glow-border iridescent" style={{ borderRadius: 'var(--radius-xl)', padding: '2rem', background: 'var(--color-card)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Field label="Name" k="name" required placeholder="Jane Smith" />
                  <Field label="Company" k="company" placeholder="Acme Corp (optional)" />
                </div>
                <Field label="Email" k="email" type="email" required placeholder="jane@company.com" />
                <Field label="Message" k="message" multiline required placeholder="Tell me about your needs, timeline, and budget..." />
                <button type="submit" disabled={state === 'submitting'} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: state === 'submitting' ? .7 : 1 }}>
                  {state === 'submitting' ? '⟳ TRANSMITTING...' : '[ TRANSMIT ]'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
