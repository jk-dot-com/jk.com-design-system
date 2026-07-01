/* @ds-bundle: {"format":3,"namespace":"PhosphorousDesignSystem_97d119","components":[{"name":"BracketTag","sourcePath":"components/core/BracketTag.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"StatusReadout","sourcePath":"components/core/StatusReadout.jsx"},{"name":"TerminalField","sourcePath":"components/core/TerminalField.jsx"}],"sourceHashes":{"components/core/BracketTag.jsx":"bc5155c33a35","components/core/Button.jsx":"0ae8ebc5c9f3","components/core/Card.jsx":"827ab5b2ea11","components/core/Chip.jsx":"866b6fa3be70","components/core/SectionLabel.jsx":"5a6915f8d8d4","components/core/ServiceCard.jsx":"b3f072443383","components/core/StatBlock.jsx":"b35203700b15","components/core/StatusReadout.jsx":"82cf76994b36","components/core/TerminalField.jsx":"bd90803ffda6","ui_kits/jk-website/About.jsx":"eea74ae60ab1","ui_kits/jk-website/Contact.jsx":"71fc598c08ed","ui_kits/jk-website/Footer.jsx":"eb2fb2e6b3ed","ui_kits/jk-website/Header.jsx":"44193d3f6452","ui_kits/jk-website/Hero.jsx":"684bf27fbcf0","ui_kits/jk-website/Portfolio.jsx":"fbfcecb39637","ui_kits/jk-website/Services.jsx":"5b05a97d59b3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PhosphorousDesignSystem_97d119 = window.PhosphorousDesignSystem_97d119 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/BracketTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BracketTag — a [BRACKETED] mono tag. The bracket glyphs glow brighter on hover.
 * Used for hero role tokens and portfolio tech tags.
 */
function BracketTag({
  children,
  className = '',
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `phos-bracket-tag ${className}`.trim(),
    style: style
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "phos-bracket",
    "aria-hidden": "true"
  }, "["), /*#__PURE__*/React.createElement("span", {
    className: "phos-bracket-label"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "phos-bracket",
    "aria-hidden": "true"
  }, "]"), /*#__PURE__*/React.createElement("style", null, `
        .phos-bracket-tag{display:inline-flex;align-items:center;gap:.3rem;padding:.3rem .7rem;border-radius:3px;
          border:1px solid rgba(0,212,255,.2);background:rgba(0,212,255,.04);color:var(--color-cyan-dim);
          font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;
          transition:border-color .25s ease,color .25s ease,box-shadow .25s ease;cursor:default;}
        .phos-bracket-tag:hover{border-color:rgba(0,212,255,.5);color:var(--color-cyan);box-shadow:0 0 10px rgba(0,212,255,.15);}
        .phos-bracket{color:var(--color-cyan);opacity:.5;font-weight:300;font-size:.85em;transition:opacity .25s ease;}
        .phos-bracket-tag:hover .phos-bracket{opacity:1;}
      `));
}
Object.assign(__ds_scope, { BracketTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BracketTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Phosphorous CTA button.
 * Three variants mirror the live site: primary (Azure→cyan gradient),
 * outline (cyan stroke + glow), and red (the booking/transmit CTA).
 * Uppercase Space Grotesk, tight radius, neon glow shadow, -1px hover lift.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iridescent = false,
  as = 'button',
  className = '',
  style = {},
  ...props
}) {
  const sizes = {
    sm: {
      padding: '0.5rem 1.25rem',
      fontSize: '0.8rem'
    },
    md: {
      padding: '0.75rem 1.75rem',
      fontSize: '0.9rem'
    },
    lg: {
      padding: '0.9rem 2.25rem',
      fontSize: '1rem'
    }
  };
  const Tag = as;
  const cls = ['btn', `btn-${variant}`, iridescent ? 'iridescent' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: {
      ...sizes[size],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the Phosphorous surface tile. Dark card fill, glowing cyan edge,
 * optional iridescent shimmer border. The base for service, portfolio & info tiles.
 */
function Card({
  children,
  iridescent = true,
  glow = true,
  radius = 'xl',
  className = '',
  style = {},
  ...props
}) {
  const radii = {
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const cls = [glow ? 'glow-border' : '', iridescent ? 'iridescent' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      background: 'var(--color-card)',
      borderRadius: radii[radius] || radius,
      padding: '1.5rem',
      ...(glow ? {} : {
        border: '1px solid var(--color-border)'
      }),
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — mono, uppercase, pill-shaped tag with a faint cyan fill.
 * The site's go-to for tech labels and small status markers.
 */
function Chip({
  children,
  color,
  borderColor,
  className = '',
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `chip ${className}`.trim(),
    style: {
      ...(color ? {
        color
      } : {}),
      ...(borderColor ? {
        borderColor
      } : {}),
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the "// LABEL" divider that opens every section.
 * Mono, uppercase, widest tracking, with a cyan tick and a fading rule.
 */
function SectionLabel({
  children,
  className = '',
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `section-label ${className}`.trim(),
    style: style
  }, props), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceCard — an offering tile: emoji icon, title, description, and mono tech tags.
 * Mirrors the Services grid on jk.com.
 */
function ServiceCard({
  icon,
  title,
  description,
  tags = [],
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      ...style
    }
  }, props), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.875rem',
      marginBottom: '1rem'
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--color-text)',
      margin: '0 0 .75rem'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.875rem',
      lineHeight: 1.6,
      color: 'var(--color-text-dim)',
      flex: 1,
      margin: '0 0 1rem'
    }
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '.5rem',
      marginTop: 'auto'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: '.75rem',
      padding: '.125rem .5rem',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(0,212,255,.08)',
      color: 'var(--color-cyan-dim)',
      border: '1px solid rgba(0,212,255,.15)',
      fontFamily: 'var(--font-mono)'
    }
  }, t))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — a gradient-text metric with a mono caption. Used on portfolio case studies.
 */
function StatBlock({
  stat,
  label,
  align = 'right',
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "gradient-text",
    style: {
      font: 'var(--type-h2)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-2xl)'
    }
  }, stat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-ghost)',
      fontFamily: 'var(--font-mono)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusReadout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusReadout — a terminal telemetry chip: a pulsing cyan dot, an ONLINE-style
 * flag, and "//"-separated mono segments. The site's signature status line.
 */
function StatusReadout({
  online = true,
  segments = [],
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "phos-status",
    style: style
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "phos-status-dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "phos-status-flag"
  }, online ? 'ONLINE' : 'OFFLINE'), segments.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "phos-status-sep",
    "aria-hidden": "true"
  }, "//"), /*#__PURE__*/React.createElement("span", {
    className: "phos-status-seg"
  }, s))), /*#__PURE__*/React.createElement("style", null, `
        .phos-status{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);
          font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;padding:.45rem 1rem;
          border:1px solid rgba(0,212,255,.15);border-radius:var(--radius-xs);background:rgba(0,212,255,.03);}
        .phos-status-dot{width:6px;height:6px;border-radius:50%;background:var(--color-cyan);flex-shrink:0;
          box-shadow:0 0 6px var(--color-cyan),0 0 12px rgba(0,212,255,.4);animation:phos-status-pulse 2s ease-in-out infinite;}
        .phos-status-flag{color:var(--color-cyan);font-weight:600;}
        .phos-status-seg{color:var(--color-text-dim);}
        .phos-status-sep{opacity:.3;font-size:.6rem;color:var(--color-text-ghost);}
      `));
}
Object.assign(__ds_scope, { StatusReadout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusReadout.jsx", error: String((e && e.message) || e) }); }

// components/core/TerminalField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TerminalField — a monospace input framed like a terminal line, with a cyan ">" prompt.
 * Border lights up cyan on focus. Supports single-line and multiline (textarea).
 */
function TerminalField({
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
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      marginBottom: '.5rem',
      color: 'var(--color-text-dim)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-red)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: "phos-tf",
    "data-multiline": multiline || undefined,
    "data-error": error ? true : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "phos-tf-prompt",
    "aria-hidden": "true"
  }, ">"), /*#__PURE__*/React.createElement(Input, _extends({
    id: fieldId,
    className: "phos-tf-input"
  }, props))), error && /*#__PURE__*/React.createElement("p", {
    role: "alert",
    style: {
      marginTop: '.25rem',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-red)'
    }
  }, error), /*#__PURE__*/React.createElement("style", null, `
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
      `));
}
Object.assign(__ds_scope, { TerminalField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TerminalField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jk-website/About.jsx
try { (() => {
// About.jsx — "WHO I AM" two-column section with expandable expertise cards
function About() {
  const [open, setOpen] = React.useState(null);
  const whatIDo = ['AI Architecture & Agentic Workflow Design', 'Enterprise Solutions Architecture & Implementation', 'AI Engineering, MCP Servers & Platform Design', 'Software Design, Development & Deployment', 'Technology & Cloud Consulting', 'Enterprise Network Architecture', 'Digital Media & Web Design'];
  const expertise = [{
    label: 'AI Architecture & Agentic Systems',
    detail: 'Multi-agent orchestration, tool-use pipelines, ADEs, and production AI systems — including Bloqr, an AI-native publishing platform.'
  }, {
    label: 'AI Engineering',
    detail: 'Anthropic Claude (primary), LLM integration, prompt engineering, MCP servers, and AI gateway design for edge deployment.'
  }, {
    label: 'Azure Architecture',
    detail: 'Landing zones, AKS, App Services, Azure Networking & VWAN, Entra ID, FinOps.'
  }, {
    label: '.NET & TypeScript/Deno',
    detail: '.NET 9/10, C#, ASP.NET Core, Blazor, Orleans — plus TypeScript-first development with Deno.'
  }, {
    label: 'Rust & WebAssembly',
    detail: 'Standalone systems, server-side WASM (WASI), and client-side WASM in Rust and TypeScript.'
  }, {
    label: 'Cloudflare Platform',
    detail: 'Workers, D1, R2, KV, Queues, Zero Trust / SASE, Tunnels, Pages, MCP servers, AI Gateway.'
  }];
  const philosophy = ['Technology should drive innovation', 'Embracing technology should be painless', 'Great teams build great products', 'Software should anticipate your needs'];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "section-pad",
    style: {
      background: 'var(--color-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Who I Am"), /*#__PURE__*/React.createElement("div", {
    className: "kit-about-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-4xl)',
      margin: '0 0 1.5rem',
      lineHeight: 1.1
    }
  }, "Enterprise-grade solutions.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Human-scale delivery.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--color-text-dim)',
      lineHeight: 1.8,
      marginBottom: '2rem'
    }
  }, "Twenty-plus years of building software across enterprise stacks \u2014 from legacy monoliths to bleeding-edge Cloudflare Workers and AI-native platforms. I design and build agentic AI systems end-to-end."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.75rem',
      marginBottom: '2.5rem'
    }
  }, whatIDo.map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '.75rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: '2px',
      flexShrink: 0,
      width: '20px',
      height: '20px',
      borderRadius: '3px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '.7rem',
      background: 'rgba(0,212,255,0.1)',
      color: 'var(--color-cyan)',
      border: '1px solid rgba(0,212,255,0.2)'
    }
  }, "\u25B8"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-dim)'
    }
  }, item)))), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-outline"
  }, "Talk To Me ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kit-expertise-grid"
  }, expertise.map((e, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: e.label,
      className: "glow-border iridescent",
      onClick: () => setOpen(isOpen ? null : i),
      style: {
        background: 'var(--color-card)',
        borderRadius: 'var(--radius-lg)',
        padding: '1rem',
        cursor: 'pointer',
        borderColor: isOpen ? 'var(--color-pink)' : undefined,
        boxShadow: isOpen ? 'var(--glow-pink)' : undefined
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '.75rem'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '.8rem',
        fontWeight: 600,
        margin: 0,
        color: 'var(--color-cyan)',
        fontFamily: 'var(--font-mono)'
      }
    }, e.label), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--color-cyan)'
      }
    }, isOpen ? '▴' : '▾')), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? '140px' : '0',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height .25s ease, opacity .25s ease'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.72rem',
        lineHeight: 1.5,
        paddingTop: '.5rem',
        color: 'var(--color-text-dim)',
        margin: 0
      }
    }, e.detail)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "iridescent",
    style: {
      borderRadius: 'var(--radius-xl)',
      padding: '1.5rem',
      marginTop: '1.5rem',
      background: 'rgba(0,120,212,0.05)',
      border: '1px solid rgba(0,120,212,0.2)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      marginBottom: '1rem',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-mono)'
    }
  }, "Why I Do It"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem'
    }
  }, philosophy.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.75rem',
      fontSize: '.875rem',
      color: 'var(--color-text-dim)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--color-cyan)'
    }
  }), p))))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jk-website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jk-website/Contact.jsx
try { (() => {
// Contact.jsx — "TALK TO ME" terminal contact form with transmit states
function Contact() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [state, setState] = React.useState('idle'); // idle | submitting | success
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const quickStarts = [{
    title: 'Visual Refresh Sprint',
    brief: 'I want a visual refresh sprint focused on hierarchy, spacing, motion polish, and premium UI consistency.'
  }, {
    title: 'Structural IA Overhaul',
    brief: 'I want to restructure the site architecture so services, proof, and outcomes are easier to navigate and convert.'
  }, {
    title: 'Feature Expansion Build',
    brief: 'I want to add interactive case studies, downloadable assets, and smarter intake flows for higher-quality leads.'
  }, {
    title: 'Technical Hardening Pass',
    brief: 'I want Core Web Vitals optimization, accessibility QA automation, and schema/SEO technical hardening.'
  }];
  const submit = e => {
    e.preventDefault();
    setState('submitting');
    setTimeout(() => setState('success'), 1100);
  };
  const Field = ({
    label,
    k,
    type = 'text',
    multiline,
    placeholder,
    required
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      marginBottom: '.5rem',
      color: 'var(--color-text-dim)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-red)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    className: `kit-tf${multiline ? ' kit-tf-multi' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-tf-prompt",
    "aria-hidden": "true"
  }, ">"), multiline ? /*#__PURE__*/React.createElement("textarea", {
    className: "kit-tf-input",
    rows: 5,
    value: form[k],
    onChange: set(k),
    placeholder: placeholder,
    style: {
      resize: 'vertical',
      minHeight: '120px'
    }
  }) : /*#__PURE__*/React.createElement("input", {
    className: "kit-tf-input",
    type: type,
    value: form[k],
    onChange: set(k),
    placeholder: placeholder
  })));
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section-pad",
    style: {
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: "kit-contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-4xl)',
      margin: '0 0 1.5rem',
      lineHeight: 1.1
    }
  }, "Let's Build", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Something Great")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--color-text-dim)',
      lineHeight: 1.8,
      marginBottom: '1.5rem'
    }
  }, "Whether you're planning a cloud migration, need an architecture review, or want to ship something that's never been built \u2014 I'm interested."), /*#__PURE__*/React.createElement("div", {
    className: "iridescent",
    style: {
      borderRadius: 'var(--radius-xl)',
      padding: '1.25rem',
      marginBottom: '1.5rem',
      background: 'var(--color-card)',
      border: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '.8rem',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      marginBottom: '.75rem',
      color: 'var(--color-cyan)'
    }
  }, "Fast-Track Website Upgrades"), /*#__PURE__*/React.createElement("div", {
    className: "kit-quickstart-grid"
  }, quickStarts.map(q => /*#__PURE__*/React.createElement("button", {
    key: q.title,
    type: "button",
    onClick: () => setForm(f => ({
      ...f,
      message: q.brief
    })),
    style: {
      textAlign: 'left',
      borderRadius: 'var(--radius-lg)',
      padding: '.75rem',
      background: 'rgba(0,212,255,0.06)',
      border: '1px solid rgba(0,212,255,0.2)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      marginBottom: '.25rem',
      color: 'var(--color-cyan)'
    }
  }, "Quick Start"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.875rem',
      fontWeight: 600,
      color: 'var(--color-text)'
    }
  }, q.title))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '.75rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-outline",
    style: {
      padding: '.5rem 1.25rem',
      fontSize: '.8rem'
    }
  }, "GitHub"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-outline",
    style: {
      padding: '.5rem 1.25rem',
      fontSize: '.8rem'
    }
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-red iridescent",
    style: {
      padding: '.5rem 1.25rem',
      fontSize: '.8rem'
    }
  }, "Book Me"))), /*#__PURE__*/React.createElement("div", null, state === 'success' ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      padding: '2rem',
      textAlign: 'center',
      background: 'rgba(0,212,255,0.05)',
      border: '1px solid rgba(0,212,255,0.3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      fontFamily: 'var(--font-heading)',
      margin: '0 0 .5rem'
    }
  }, "TRANSMISSION_RECEIVED"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-text-dim)'
    }
  }, "Signal confirmed. Standing by for response."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline",
    style: {
      marginTop: '1.5rem'
    },
    onClick: () => {
      setState('idle');
      setForm({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }
  }, "Send Another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    className: "glow-border iridescent",
    style: {
      borderRadius: 'var(--radius-xl)',
      padding: '2rem',
      background: 'var(--color-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    k: "name",
    required: true,
    placeholder: "Jane Smith"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Company",
    k: "company",
    placeholder: "Acme Corp (optional)"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    k: "email",
    type: "email",
    required: true,
    placeholder: "jane@company.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    k: "message",
    multiline: true,
    required: true,
    placeholder: "Tell me about your needs, timeline, and budget..."
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: state === 'submitting',
    className: "btn btn-primary",
    style: {
      width: '100%',
      justifyContent: 'center',
      opacity: state === 'submitting' ? .7 : 1
    }
  }, state === 'submitting' ? '⟳ TRANSMITTING...' : '[ TRANSMIT ]'))))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jk-website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jk-website/Footer.jsx
try { (() => {
// Footer.jsx — site footer with built-with block + SYS:ONLINE status bar
function Footer() {
  const links = ['About', 'Services', 'Portfolio', 'Blog', 'Contact', 'Privacy'];
  const social = [{
    label: 'GitHub',
    icon: '⌥'
  }, {
    label: 'LinkedIn',
    icon: '𝕃'
  }, {
    label: 'Book Me',
    icon: 'CAL'
  }];
  const year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-container",
    style: {
      paddingTop: '3rem',
      paddingBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-footer-grid",
    style: {
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: 'var(--text-2xl)',
      marginBottom: '.75rem'
    }
  }, "JK", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, ".com")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.875rem',
      marginBottom: '1rem',
      color: 'var(--color-text-ghost)',
      lineHeight: 1.7
    }
  }, "Jayson Knight \u2014 Enterprise Cloud Architect.", /*#__PURE__*/React.createElement("br", null), "Azure \xB7 Cloudflare \xB7 .NET \xB7 Privacy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.875rem',
      color: 'var(--color-text-ghost)',
      margin: 0
    }
  }, "Charlotte, North Carolina"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: '.875rem',
      color: 'var(--color-cyan-dim)',
      textDecoration: 'none'
    }
  }, "704.408.2471")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      marginBottom: '1rem',
      color: 'var(--color-text-ghost)'
    }
  }, "Navigation"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '.5rem'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: '.875rem',
      color: 'var(--color-text-dim)',
      textDecoration: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      marginBottom: '1rem',
      color: 'var(--color-text-ghost)'
    }
  }, "Connect"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '.75rem',
      marginBottom: '1.5rem'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.75rem',
      fontSize: '.875rem',
      color: 'var(--color-text-dim)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '32px',
      height: '32px',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '.75rem',
      background: 'rgba(0,212,255,0.08)',
      border: '1px solid rgba(0,212,255,0.15)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--color-cyan)'
    },
    "aria-hidden": "true"
  }, s.icon), s.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      borderRadius: 'var(--radius-lg)',
      padding: '.75rem',
      background: 'var(--color-card)',
      border: '1px solid var(--color-border)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--color-text-ghost)',
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-cyan-dim)'
    }
  }, "// built with"), /*#__PURE__*/React.createElement("br", null), "Astro 7 \xB7 Svelte 5 \xB7 Cloudflare", /*#__PURE__*/React.createElement("br", null), "EmDash \xB7 Hono \xB7 TailwindCSS v4"))), /*#__PURE__*/React.createElement("div", {
    className: "kit-footer-bar",
    style: {
      borderTop: '1px solid var(--color-border)',
      paddingTop: '2rem',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-ghost)',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " Jayson Knight \xB7 JK.com \xB7 All rights reserved"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-cyan-dim)'
    }
  }, "Powered by Cloudflare Workers ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-border)'
    }
  }, "\xB7"), " Charlotte, NC"))), /*#__PURE__*/React.createElement("div", {
    className: "kit-sys-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-sys-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "kit-sys-text"
  }, "SYS: ONLINE"), /*#__PURE__*/React.createElement("span", {
    className: "kit-sys-sep"
  }, "//"), /*#__PURE__*/React.createElement("span", {
    className: "kit-sys-text"
  }, "BUILD: LOCAL"), /*#__PURE__*/React.createElement("span", {
    className: "kit-sys-sep"
  }, "//"), /*#__PURE__*/React.createElement("span", {
    className: "kit-sys-text"
  }, "NODE: CLT-01"), /*#__PURE__*/React.createElement("span", {
    className: "kit-sys-sep"
  }, "//"), /*#__PURE__*/React.createElement("span", {
    className: "kit-sys-text"
  }, "STACK: ASTRO\xB7SVELTE\xB7CLOUDFLARE")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jk-website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jk-website/Header.jsx
try { (() => {
// Header.jsx — JK.com fixed site header with scroll-active nav + mobile menu
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState('#home');
  const links = [{
    href: '#home',
    label: 'Home'
  }, {
    href: '#about',
    label: 'About'
  }, {
    href: '#services',
    label: 'Services'
  }, {
    href: '#portfolio',
    label: 'Portfolio'
  }, {
    href: '#blog',
    label: 'Blog'
  }, {
    href: '#contact',
    label: 'Contact'
  }];
  React.useEffect(() => {
    const scroller = document.getElementById('kit-scroll') || window;
    const onScroll = () => {
      const y = scroller === window ? window.scrollY : scroller.scrollTop;
      setScrolled(y > 20);
    };
    onScroll();
    scroller.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 'var(--header-height)',
      background: scrolled ? 'rgba(5,5,10,0.92)' : 'rgba(5,5,10,0.7)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
      boxShadow: scrolled ? 'var(--shadow-header)' : 'none',
      transition: 'all .3s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-container",
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: () => setActive('#home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.75rem',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../public/favicon.svg",
    alt: "JK logo",
    width: "40",
    height: "40",
    style: {
      filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.6))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      fontSize: '1.125rem',
      letterSpacing: '-.02em',
      color: 'var(--color-text)'
    }
  }, "JK", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, ".com"))), /*#__PURE__*/React.createElement("nav", {
    className: "kit-desktop-nav",
    style: {
      alignItems: 'center',
      gap: '2rem'
    }
  }, links.map(({
    href,
    label
  }) => {
    const isActive = active === href;
    return /*#__PURE__*/React.createElement("a", {
      key: href,
      href: href,
      onClick: () => setActive(href),
      style: {
        position: 'relative',
        fontSize: '.875rem',
        fontWeight: 500,
        textDecoration: 'none',
        fontFamily: 'var(--font-heading)',
        color: isActive ? 'var(--color-text)' : 'var(--color-text-dim)'
      }
    }, label, isActive && /*#__PURE__*/React.createElement("span", {
      className: "kit-nav-cursor"
    }, "_"), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        bottom: '-4px',
        height: '1px',
        background: isActive ? 'var(--color-purple)' : 'var(--color-cyan)',
        width: isActive ? '100%' : '0',
        transition: 'width .3s ease'
      }
    }));
  }), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-red",
    style: {
      padding: '.4rem 1rem',
      fontSize: '.8rem'
    }
  }, "Book Me")), /*#__PURE__*/React.createElement("button", {
    className: "kit-burger",
    onClick: () => setMenuOpen(v => !v),
    "aria-label": "Menu",
    style: {
      flexDirection: 'column',
      gap: '5px',
      background: 'transparent',
      border: '1px solid var(--color-border)',
      borderRadius: '4px',
      padding: '8px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '18px',
      height: '1px',
      background: 'var(--color-text)',
      transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
      transition: 'transform .3s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '18px',
      height: '1px',
      background: 'var(--color-text)',
      opacity: menuOpen ? 0 : 1,
      transition: 'opacity .3s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '18px',
      height: '1px',
      background: 'var(--color-text)',
      transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
      transition: 'transform .3s'
    }
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "kit-mobile-menu",
    style: {
      background: 'rgba(5,5,10,0.98)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "section-container",
    style: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, links.map(({
    href,
    label
  }) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    onClick: () => {
      setActive(href);
      setMenuOpen(false);
    },
    style: {
      fontSize: '1.125rem',
      fontWeight: 500,
      padding: '.5rem 0',
      textDecoration: 'none',
      color: 'var(--color-text-dim)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, label)), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-red",
    style: {
      marginTop: '.5rem',
      justifyContent: 'center'
    }
  }, "Book Me"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jk-website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jk-website/Hero.jsx
try { (() => {
// Hero.jsx — "THIS. IS. JK.com" full-screen hero with glitch headline + role tags
function Hero() {
  const roles = ['Azure Architect', 'AI Engineer', 'Cloudflare Specialist', 'Rust & WASM', 'Privacy & Security'];
  const Corner = ({
    d,
    style
  }) => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    style: {
      position: 'absolute',
      width: '48px',
      height: '48px',
      opacity: .3,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: "var(--color-cyan)",
    strokeWidth: "1.5"
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "grid-overlay",
    style: {
      position: 'relative',
      minHeight: 'calc(100vh - var(--header-height))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(0,120,212,0.12) 0%, rgba(5,5,10,0) 70%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(0,212,255,0.06) 0%, transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '30%',
      height: '1px',
      opacity: .3,
      background: 'linear-gradient(to right, transparent, var(--color-cyan-dim), transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '70%',
      height: '1px',
      opacity: .15,
      background: 'linear-gradient(to right, transparent, var(--color-primary), transparent)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '2rem',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Corner, {
    d: "M 0 24 L 0 0 L 24 0",
    style: {
      top: 0,
      left: 0
    }
  }), /*#__PURE__*/React.createElement(Corner, {
    d: "M 24 0 L 48 0 L 48 24",
    style: {
      top: 0,
      right: 0
    }
  }), /*#__PURE__*/React.createElement(Corner, {
    d: "M 0 24 L 0 48 L 24 48",
    style: {
      bottom: 0,
      left: 0
    }
  }), /*#__PURE__*/React.createElement(Corner, {
    d: "M 24 48 L 48 48 L 48 24",
    style: {
      bottom: 0,
      right: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "section-container",
    style: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-status",
    style: {
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-status-dot"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-cyan)',
      fontWeight: 600
    }
  }, "ONLINE"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .3,
      fontSize: '.6rem'
    }
  }, "//"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-dim)'
    }
  }, "LOCATION: CHARLOTTE, NC"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .3,
      fontSize: '.6rem'
    }
  }, "//"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-dim)'
    }
  }, "STATUS: AVAILABLE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "kit-glitch",
    "data-text": "THIS. IS.",
    style: {
      position: 'relative',
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      letterSpacing: '-.02em',
      color: '#fff',
      margin: 0,
      lineHeight: .95
    }
  }, "THIS. IS."), /*#__PURE__*/React.createElement("div", {
    className: "gradient-text text-glow",
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 900,
      letterSpacing: '-.02em',
      lineHeight: .95
    }
  }, "JK.com")), /*#__PURE__*/React.createElement("p", {
    className: "kit-crt-line",
    style: {
      marginTop: '1.5rem'
    }
  }, "Unbounded Imagination", /*#__PURE__*/React.createElement("span", {
    className: "kit-crt-cursor"
  }, "\u2588")), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: '2rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '.75rem',
      listStyle: 'none',
      padding: 0
    }
  }, roles.map(r => /*#__PURE__*/React.createElement("li", {
    key: r,
    className: "kit-bracket-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-bracket"
  }, "["), r, /*#__PURE__*/React.createElement("span", {
    className: "kit-bracket"
  }, "]")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3rem',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-red iridescent"
  }, "Book Me"), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "btn btn-outline"
  }, "View Services ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      opacity: .5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '.5rem',
      color: 'var(--color-text-ghost)',
      fontFamily: 'var(--font-mono)',
      fontSize: '.65rem',
      letterSpacing: '.15em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "SCROLL"), /*#__PURE__*/React.createElement("div", {
    className: "kit-bounce",
    style: {
      width: '1px',
      height: '32px',
      background: 'linear-gradient(to bottom, var(--color-cyan-dim), transparent)'
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jk-website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jk-website/Portfolio.jsx
try { (() => {
// Portfolio.jsx — case-study cards + "Clients I Adore" marquee
function Portfolio() {
  const studies = [{
    label: 'Azure Migration',
    title: 'Fortune 500 On-Prem → Azure',
    description: 'Led architecture and phased migration of a 200-node on-premises data center to Azure Landing Zones. Achieved 40% cost reduction and 99.99% SLA on critical workloads.',
    tags: ['Azure', 'Landing Zones', 'AKS', 'Bicep'],
    stat: '40%',
    statLabel: 'Cost reduction'
  }, {
    label: 'Zero Trust',
    title: 'Cloudflare ZeroTrust SASE Rollout',
    description: 'Designed and deployed Cloudflare One (ZTNA/SASE) for a 1,200-seat professional services firm. Replaced legacy VPN and cut remote-access complexity.',
    tags: ['Cloudflare', 'Zero Trust', 'ZTNA', 'SASE'],
    stat: '1,200',
    statLabel: 'Users secured'
  }, {
    label: '.NET Modernization',
    title: '.NET Framework 4.x → .NET 9',
    description: 'Modernized a 14-year-old enterprise LOB application — ported from .NET Framework 4.8 + WCF to .NET 9 minimal APIs, with CI/CD on GitHub Actions + Azure DevOps.',
    tags: ['.NET 9', 'C#', 'Azure DevOps'],
    stat: '14yr',
    statLabel: 'Legacy app modernized'
  }, {
    label: 'Privacy Engineering',
    title: 'Adblock Compiler (OSS)',
    description: 'Built a compiler-as-a-service that processes ad-filter list DSLs through a custom IR pipeline. Compiles to optimized DNS blocklists at edge speed.',
    tags: ['Rust', 'Compiler', 'DNS', 'Workers'],
    stat: '∞',
    statLabel: 'Filter rules compiled',
    link: '#'
  }];
  const clients = ['Paycom', 'Microsoft', 'Paylocity', 'AvidXchange', 'Care Innovations', 'Sogeti', 'Deloitte Consulting', 'Tempur-Sealy Intl', 'Skanska'];
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    className: "section-pad",
    style: {
      background: 'var(--color-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Portfolio"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-4xl)',
      margin: '0 0 1rem'
    }
  }, "Work That ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Ships")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      maxWidth: '42rem',
      color: 'var(--color-text-dim)',
      margin: 0
    }
  }, "A selection of projects \u2014 enterprise migrations, security deployments, and open-source work that reflects what I care about most.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-portfolio-grid",
    style: {
      marginBottom: '5rem'
    }
  }, studies.map(s => /*#__PURE__*/React.createElement("article", {
    key: s.title,
    className: "glow-border iridescent",
    style: {
      background: 'var(--color-card)',
      borderRadius: 'var(--radius-xl)',
      padding: '1.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      color: 'var(--color-primary)',
      borderColor: 'rgba(0,120,212,0.3)'
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gradient-text",
    style: {
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      fontFamily: 'var(--font-heading)'
    }
  }, s.stat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-ghost)',
      fontFamily: 'var(--font-mono)'
    }
  }, s.statLabel))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      fontFamily: 'var(--font-heading)',
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.875rem',
      lineHeight: 1.6,
      flex: 1,
      color: 'var(--color-text-dim)',
      margin: 0
    }
  }, s.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '.5rem',
      marginTop: 'auto'
    }
  }, s.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "kit-bracket-tag",
    style: {
      fontSize: '.68rem',
      padding: '.2rem .5rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-bracket"
  }, "["), t, /*#__PURE__*/React.createElement("span", {
    className: "kit-bracket"
  }, "]"))), s.link && /*#__PURE__*/React.createElement("a", {
    href: s.link,
    style: {
      marginLeft: 'auto',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-cyan)'
    }
  }, "View on GitHub \u2192"))))), /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Clients I Adore"), /*#__PURE__*/React.createElement("div", {
    className: "kit-marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-marquee-track"
  }, [...clients, ...clients].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: '0 0 auto',
      borderRadius: 'var(--radius-lg)',
      padding: '.625rem 1.25rem',
      fontSize: '.875rem',
      background: 'var(--color-card)',
      border: '1px solid var(--color-border)',
      color: 'var(--color-cyan)'
    }
  }, c))))));
}
window.Portfolio = Portfolio;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jk-website/Portfolio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/jk-website/Services.jsx
try { (() => {
// Services.jsx — tabbed services grid with expandable detail panels
function Services() {
  const [tab, setTab] = React.useState('technical');
  const [open, setOpen] = React.useState(null);
  const technical = [{
    icon: '☁️',
    title: 'Azure Solutions Architecture',
    description: 'End-to-end Azure platform design: landing zones, AKS clusters, networking, identity (Entra ID), cost optimization, and FinOps. Fluent in ARM, Bicep, and Terraform.',
    tags: ['Azure', 'AKS', 'Bicep', 'FinOps'],
    bullets: ['Landing zone design & implementation', 'AKS cluster & node pool sizing', 'FinOps dashboards & budget alerts']
  }, {
    icon: '🤖',
    title: 'AI Architecture & Agentic Systems',
    description: 'End-to-end agentic AI workflow design — multi-agent orchestration, MCP servers, AI gateways, and Agentic Development Environments. Built on Anthropic Claude, deployable to the Cloudflare edge.',
    tags: ['Claude', 'MCP', 'AI Gateway', 'Agents'],
    bullets: ['Multi-agent pipelines and tool-use orchestration', 'ADE design & implementation', 'MCP server and AI gateway deployment']
  }, {
    icon: '🦀',
    title: 'Rust & WebAssembly',
    description: 'Deep Rust expertise across the full stack — standalone systems programming, server-side WASM with WASI, and client-side WASM in both Rust and TypeScript.',
    tags: ['Rust', 'WASM', 'WASI', 'TypeScript'],
    bullets: ['Standalone Rust systems: CLIs, daemons, libs', 'Server-side WASM components (WASI)', 'Client-side WASM for browser & Workers']
  }, {
    icon: '🔶',
    title: 'Cloudflare Platform',
    description: 'Full Cloudflare stack: Workers, D1, R2, KV, Queues, Zero Trust / SASE, AI Gateway, MCP servers, and Vectorize. This entire site runs on Cloudflare.',
    tags: ['Workers', 'AI Gateway', 'Zero Trust'],
    bullets: ['Workers and Durable Objects architecture', 'AI Gateway and MCP at the edge', 'Zero Trust rollout with staged policy']
  }, {
    icon: '🔒',
    title: 'Privacy & Security Engineering',
    description: 'Zero-trust architectures, DNS encryption (DoH/DoT), SASE deployment, security-first SDLC, and compliance-ready infrastructure design.',
    tags: ['Zero Trust', 'SASE', 'DNS', 'DoH/DoT'],
    bullets: ['Zero-trust policy modeling', 'Security hardening with compliance controls', 'Threat-informed architecture']
  }, {
    icon: '🛠️',
    title: 'Technical Advisory & Fractional CTO',
    description: 'Senior technical leadership without the full-time overhead. I own the technical roadmap, make build-vs-buy calls, set engineering standards, then step back when you hire full-time.',
    tags: ['Fractional CTO', 'Advisory', 'Roadmap'],
    bullets: ['Technical roadmap ownership', 'Architecture reviews & modernization', 'Engineering standards & hiring bar']
  }];
  const creative = [{
    icon: '🎨',
    title: 'Digital Media & Web Design',
    description: 'Modern, performant web experiences with a strong visual identity. From brand design to full-stack Astro/Svelte builds.',
    tags: ['Astro', 'Svelte', 'Design'],
    bullets: ['Brand-aligned design systems', 'Performance-first implementation', 'Conversion-focused UX']
  }, {
    icon: '🔗',
    title: 'Microsoft 365 & Teams',
    description: 'M365 tenant architecture, Teams customization, SharePoint, and OneDrive deployment with governance best practices.',
    tags: ['M365', 'Teams', 'SharePoint'],
    bullets: ['Tenant architecture and governance', 'Teams and SharePoint patterns', 'Adoption and enablement plans']
  }];
  const list = tab === 'technical' ? technical : creative;
  const ServiceTile = (s, i) => {
    const isOpen = open === `${tab}-${i}`;
    return /*#__PURE__*/React.createElement("div", {
      key: s.title,
      className: "glow-border iridescent",
      onClick: () => setOpen(isOpen ? null : `${tab}-${i}`),
      style: {
        background: 'var(--color-card)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        borderColor: isOpen ? 'var(--color-cyan)' : undefined,
        boxShadow: isOpen ? 'var(--glow-cyan)' : undefined
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1.875rem',
        marginBottom: '1rem'
      },
      "aria-hidden": "true"
    }, s.icon), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-lg)',
        fontWeight: 600,
        margin: '0 0 .75rem',
        fontFamily: 'var(--font-heading)',
        color: 'var(--color-text)'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.875rem',
        lineHeight: 1.6,
        flex: 1,
        marginBottom: '1rem',
        color: 'var(--color-text-dim)'
      }
    }, s.description), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.5rem',
        marginTop: 'auto'
      }
    }, s.tags.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        fontSize: '.75rem',
        padding: '.125rem .5rem',
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(0,212,255,0.08)',
        color: 'var(--color-cyan-dim)',
        border: '1px solid rgba(0,212,255,0.15)',
        fontFamily: 'var(--font-mono)'
      }
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem',
        fontSize: '.75rem',
        color: 'var(--color-cyan)',
        fontFamily: 'var(--font-mono)'
      }
    }, isOpen ? '▴ Details' : '▾ Details'), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem',
        borderRadius: 'var(--radius-lg)',
        padding: '1rem',
        background: 'rgba(0,212,255,0.06)',
        border: '1px solid rgba(0,212,255,0.25)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-xs)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-widest)',
        marginBottom: '.5rem',
        color: 'var(--color-cyan)',
        fontFamily: 'var(--font-mono)'
      }
    }, "Learn More"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '.375rem'
      }
    }, s.bullets.map(b => /*#__PURE__*/React.createElement("li", {
      key: b,
      style: {
        fontSize: '.875rem',
        display: 'flex',
        gap: '.5rem',
        color: 'var(--color-text-dim)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-cyan)'
      }
    }, "\u2022"), /*#__PURE__*/React.createElement("span", null, b))))));
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "section-pad",
    style: {
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-label"
  }, "Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '3rem'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 'var(--text-4xl)',
      margin: '0 0 1rem'
    }
  }, "What I ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Build"), " & ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Advise")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      maxWidth: '42rem',
      color: 'var(--color-text-dim)',
      margin: 0
    }
  }, "From agentic AI platforms to cloud infrastructure and fractional CTO leadership \u2014 I partner with teams to design, build, and operate systems that last.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '.5rem',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: `btn ${tab === 'technical' ? 'btn-primary' : 'btn-outline'}`,
    onClick: () => {
      setTab('technical');
      setOpen(null);
    }
  }, "Technical"), /*#__PURE__*/React.createElement("button", {
    className: `btn ${tab === 'creative' ? 'btn-primary' : 'btn-outline'}`,
    onClick: () => {
      setTab('creative');
      setOpen(null);
    }
  }, "Creative & Advisory")), /*#__PURE__*/React.createElement("div", {
    className: "kit-services-grid"
  }, list.map(ServiceTile)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      marginBottom: '1.5rem',
      color: 'var(--color-text-dim)'
    }
  }, "Ready to start something?"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-red iridescent"
  }, "Book a Consultation"))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/jk-website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BracketTag = __ds_scope.BracketTag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StatusReadout = __ds_scope.StatusReadout;

__ds_ns.TerminalField = __ds_scope.TerminalField;

})();
