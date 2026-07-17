import Link from "next/link";

// Shared building blocks for the code-served custom case-study pages. All are
// presentational (server) components styled with the site design system
// (mil- type, accent #f57c00, .cs-* helpers in tags.css). Custom pages compose
// these in a bespoke order, so each page is unique but on-brand.

// Dark hero banner with title + client/industry meta and a back link.
export function CaseHero({ kicker, title, client, industry, image, tags }) {
  return (
    <div className="mil-banner-sm-2 mil-deep-bg" style={{ height: "auto", minHeight: "460px", background: "linear-gradient(180deg, #181e26 0%, #0e1218 100%)" }}>
      {image && <img src={image} className="mil-background-image" style={{ objectPosition: "center", opacity: 0.5 }} alt={title} />}
      <div className="mil-overlay"></div>
      <div className="mil-banner-content" style={{ paddingTop: "170px", paddingBottom: "80px" }}>
        <div className="container mil-relative">
          <Link href="/success-stories" className="mil-link link-left mil-light mil-mb-30"><i className="fas fa-arrow-left"></i><span>All Success Stories</span></Link>
          {kicker && <span className="mil-suptitle mil-accent mil-mb-30" style={{ display: "block" }}>{kicker}</span>}
          <h1 className="mil-uppercase mil-light mil-mb-30" style={{ maxWidth: "20ch" }}>{title}</h1>
          <p className="mil-light-soft">
            {client && <>Client: <span className="mil-light">{client}</span></>}
            {client && industry && " · "}
            {industry && <>Industry: <span className="mil-light">{industry}</span></>}
          </p>
          {Array.isArray(tags) && tags.length > 0 && (
            <ul className="mil-tags mil-mt-30">
              {tags.map((t) => <li key={t}><span>{t}</span></li>)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// Numbered chapter eyebrow (matches the journey layout's .cs-eyebrow).
export function Kicker({ num, children }) {
  return (
    <div className="cs-eyebrow">
      {num != null && <span className="cs-idx">{String(num).padStart(2, "0")}</span>}
      <span className="cs-kick">{children}</span>
    </div>
  );
}

// Section wrapper: assigns the DOM id the tracker scroll-spies, an optional
// numbered eyebrow, heading, lead paragraph, then children.
export function Section({ id, num, kicker, title, accent, lead, deep, children, className = "" }) {
  return (
    <section id={id} className={`${deep ? "mil-deep-bg " : ""}mil-p-120-60 ${className}`}>
      <div className="container">
        {kicker && <Kicker num={num}>{kicker}</Kicker>}
        {title && (
          <h2 className="mil-mb-30" style={{ maxWidth: "24ch" }}>
            {title} {accent && <span className="mil-accent">{accent}</span>}
          </h2>
        )}
        {lead && <p className="cs-lead mil-mb-60">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

// Body paragraphs from an array of strings.
export function Body({ paragraphs, className = "mil-mb-30", max = "760px" }) {
  if (!Array.isArray(paragraphs)) return null;
  return paragraphs.filter(Boolean).map((p, i) => (
    <p key={i} className={className} style={{ maxWidth: max }}>{p}</p>
  ));
}

// Device-framed screenshot. kind: "phone" | "browser" | "plain".
export function DeviceFrame({ src, alt = "", kind = "plain" }) {
  if (kind === "phone") {
    return <div className="cs-phone"><img src={src} alt={alt} loading="lazy" /></div>;
  }
  if (kind === "browser") {
    return (
      <div className="cs-browser">
        <div className="cs-browser-bar"><i /><i /><i /><span className="cs-browser-url" /></div>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    );
  }
  return <img className="cs-plainshot" src={src} alt={alt} loading="lazy" />;
}

// Two-column image + copy. `reverse` puts the image on the right.
export function Split({ image, alt, frame = "plain", reverse = false, children }) {
  const img = (
    <div className="col-lg-6 mil-mb-60" key="i">
      <DeviceFrame src={image} alt={alt} kind={frame} />
    </div>
  );
  const text = (
    <div className="col-lg-6 mil-mb-60" key="t">{children}</div>
  );
  return (
    <div className="row justify-content-between align-items-center">
      {reverse ? [text, img] : [img, text]}
    </div>
  );
}

// Numbered screen walkthrough: alternating image/copy rows in device frames.
export function Steps({ steps, frame = "phone" }) {
  if (!Array.isArray(steps)) return null;
  return steps.map((s, i) => (
    <div key={i} className={i === steps.length - 1 ? "" : "mil-mb-60"}>
      <Split image={s.img} alt={s.title} frame={s.frame || frame} reverse={i % 2 === 1}>
        <span className="cs-step-index">{String(i + 1).padStart(2, "0")}</span>
        <h4 className="mil-mb-15">{s.title}</h4>
        <p style={{ color: "rgba(18,24,32,.62)", margin: 0 }}>{s.body}</p>
      </Split>
    </div>
  ));
}

// Big before/after (or headline) metrics.
export function StatBand({ stats }) {
  if (!Array.isArray(stats) || !stats.length) return null;
  return (
    <div className="cs-statband">
      {stats.map((s, i) => (
        <div className="cs-bigstat" key={i}>
          <div className="cs-big">{s.big}</div>
          <p className="cs-biglabel">{s.label}</p>
          {s.sub && <p className="cs-bigsub">{s.sub}</p>}
        </div>
      ))}
    </div>
  );
}

// Numbered problem→solution / feature cards (auto-filling grid).
export function CardGrid({ items, wide = false }) {
  if (!Array.isArray(items) || !items.length) return null;
  return (
    <div className={`cs-cards${wide ? " cs-cards-wide" : ""}`}>
      {items.map((it, i) => (
        <div className="cs-card" key={i}>
          {it.number !== false && <span className="cs-cnum">{String(it.n ?? i + 1).padStart(2, "0")}</span>}
          {it.icon && <span className="cs-cic">{it.icon}</span>}
          <h5>{it.title}</h5>
          {it.text && <p>{it.text}</p>}
        </div>
      ))}
    </div>
  );
}

// Screenshot gallery in device frames (auto-fill, no crop).
export function Gallery({ images, frame = "browser" }) {
  const imgs = (Array.isArray(images) ? images : []).filter(Boolean);
  if (!imgs.length) return null;
  const phone = frame === "phone";
  return (
    <div className="cs-gallery" style={phone ? { gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))" } : undefined}>
      {imgs.map((im, i) => (
        <DeviceFrame key={i} src={im.src || im} alt={im.alt || ""} kind={frame} />
      ))}
    </div>
  );
}

// Pull quote.
export function Quote({ quote, author }) {
  if (!quote) return null;
  return (
    <div className="cs-quote">
      <p>&ldquo;{quote}&rdquo;</p>
      {author && <h6>{author}</h6>}
    </div>
  );
}

// Honest-framing / note callout.
export function Callout({ icon = "ℹ️", children }) {
  return (
    <div className="cs-callout">
      <span className="cs-callout-ic">{icon}</span>
      <p>{children}</p>
    </div>
  );
}

// Snapshot strip — equal-growing flex cells so 4-6 facts fill it evenly.
export function Snapshot({ items }) {
  if (!Array.isArray(items) || !items.length) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", border: "1px solid rgba(18,24,32,.1)", borderRadius: "14px", padding: "8px", marginTop: "50px" }}>
      {items.map((it, i) => (
        <div key={i} style={{ flex: "1 1 170px", display: "flex", gap: "14px", alignItems: "center", justifyContent: "center", padding: "16px 12px" }}>
          {it.icon && <span style={{ fontSize: "30px", lineHeight: 1 }}>{it.icon}</span>}
          <div>
            <span className="mil-upper" style={{ color: "rgba(18,24,32,.45)", letterSpacing: "0.06em", fontSize: "12px", display: "block", marginBottom: "2px" }}>{it.label}</span>
            <span className="mil-dark" style={{ fontWeight: 600, fontSize: "16px" }}>{it.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Tech-stack chips.
export function TechStack({ items }) {
  if (!Array.isArray(items) || !items.length) return null;
  return (
    <div className="cs-chips">
      {items.map((t, i) => (
        <span className="cs-chip" key={i}>{t.icon && <span className="cs-chip-ic">{t.icon}</span>}{t.label || t}</span>
      ))}
    </div>
  );
}
