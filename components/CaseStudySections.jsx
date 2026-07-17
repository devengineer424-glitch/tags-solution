"use client";

// Renders the live API's typed case-study `sections` array as a guided
// "user journey": a sticky step tracker (which stage you're in) rides along the
// top and highlights as you scroll, while the body is grouped into five
// canonical chapters — Overview, Challenge, Approach, Build, Results.
//
// The API serves TWO section templates; both map onto the same journey:
//   • design 1: project_overview, challenge, benefits, testimonial,
//     testing_dual, features, metrics, table, solution
//   • design 2: snapshot_strip, about, challenge_v2, solution_v2, analytics,
//     what_we_built, technology, final_cta_v2
// Unknown/structural types (hero, cta, final_cta_v2) render nothing here —
// the page owns the hero banner and the closing CTA.

import { useEffect, useMemo, useRef, useState } from "react";

// ---- Journey stages -------------------------------------------------------
const STAGES = [
  { key: "overview", label: "Overview" },
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Approach" },
  { key: "build", label: "Build" },
  { key: "results", label: "Results" },
];
const STAGE_INDEX = STAGES.reduce((m, s, i) => ((m[s.key] = i), m), {});

// Section type -> journey stage. `testimonial` is intentionally omitted: it can
// appear mid-page, so it renders but never drives the tracker (keeps progress
// moving forward, never jumping backward).
const STAGE_OF = {
  snapshot_strip: "overview",
  project_overview: "overview",
  about: "overview",
  challenge: "challenge",
  challenge_v2: "challenge",
  benefits: "approach",
  testing_dual: "approach",
  solution: "approach",
  solution_v2: "approach",
  technology: "approach",
  table: "approach",
  features: "build",
  what_we_built: "build",
  metrics: "results",
  analytics: "results",
};

// ---- Small building blocks ------------------------------------------------
function Kicker({ num, children }) {
  return (
    <div className="cs-eyebrow">
      {num != null && <span className="cs-idx">{String(num).padStart(2, "0")}</span>}
      <span className="cs-kick">{children}</span>
    </div>
  );
}

function Paragraphs({ text, className = "mil-mb-30" }) {
  if (!text) return null;
  return String(text)
    .split("\n")
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t, i) => <p key={i} className={className}>{t}</p>);
}

// design 2 encodes body copy as an array of strings (empty strings = spacers).
function ParaList({ items, className = "mil-mb-30" }) {
  if (!Array.isArray(items)) return null;
  const cleaned = items.map((t) => (typeof t === "string" ? t.trim() : "")).filter(Boolean);
  if (!cleaned.length) return null;
  return cleaned.map((t, i) => <p key={i} className={className}>{t}</p>);
}

function Heading({ subtitle, title }) {
  if (!title && !subtitle) return null;
  return (
    <h2 className="mil-mb-30">
      {title} {subtitle && <span className="mil-accent">{subtitle}</span>}
    </h2>
  );
}

// Two-column image + text (about / challenge / challenge_v2 / analytics).
function ImageText({ num, eyebrow, title, subtitle, body, image, deep, imageRight }) {
  const hasImg = Boolean(image);
  const hasText = title || subtitle || body;
  if (!hasImg && !hasText) return null;
  const textCol = (
    <div className={hasImg ? "col-lg-6 mil-mb-60" : "col-lg-10 col-xl-8 mil-mb-60"} key="t">
      <Kicker num={num}>{eyebrow}</Kicker>
      {(title || subtitle) && <Heading title={title} subtitle={subtitle} />}
      {body}
    </div>
  );
  const imgCol = hasImg ? (
    <div className="col-lg-6 mil-mb-60 cs-imgwrap" key="i">
      <img src={image} alt={title || eyebrow || "case study"} loading="lazy" />
    </div>
  ) : null;
  return (
    <section className={`${deep ? "mil-deep-bg " : ""}mil-p-120-60`}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {imageRight ? [textCol, imgCol] : [imgCol, textCol]}
        </div>
      </div>
    </section>
  );
}

// Title + body + screenshot gallery (solution / solution_v2 / what_we_built).
function TextGallery({ num, eyebrow, title, paragraphs, images, deep }) {
  const imgs = (Array.isArray(images) ? images : []).filter(Boolean);
  const hasText = title || (Array.isArray(paragraphs) && paragraphs.some((p) => p && p.trim()));
  if (!hasText && !imgs.length) return null;
  const solo = imgs.length === 1;
  return (
    <section className={`${deep ? "mil-deep-bg " : ""}mil-p-120-60`}>
      <div className="container">
        <Kicker num={num}>{eyebrow}</Kicker>
        {title && <h2 className="mil-mb-30">{title}</h2>}
        {hasText && (
          <div className="row">
            <div className="col-lg-10 col-xl-9">
              <ParaList items={paragraphs} />
            </div>
          </div>
        )}
        {imgs.length > 0 && (
          <div className={`cs-gallery${imgs.length === 2 ? " cs-gallery-2" : ""} mil-mt-30`}>
            {imgs.map((src, i) => (
              <img key={i} src={src} alt={title || "case study"} loading="lazy" className={`cs-shot${solo ? " cs-shot-solo" : ""}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ---- Per-section renderer -------------------------------------------------
function renderSection(section, num, { suppressMetricTestimonial } = {}) {
  const type = section?.type;
  const d = section?.data;
  if (!d) return null;

  switch (type) {
    case "snapshot_strip": {
      const items = Array.isArray(d.items) ? d.items : [];
      if (!items.length) return null;
      // Equal-growing flex items so 4-6 stats fill the strip evenly (no orphan).
      return (
        <section className="mil-p-60-30">
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", border: "1px solid rgba(18,24,32,.1)", borderRadius: "14px", padding: "8px" }}>
              {items.map((it, i) => (
                <div key={i} style={{ flex: "1 1 170px", display: "flex", gap: "14px", alignItems: "center", justifyContent: "center", padding: "16px 12px" }}>
                  {it.icon && <span style={{ fontSize: "32px", lineHeight: 1 }}>{it.icon}</span>}
                  <div>
                    <span className="mil-upper" style={{ color: "rgba(18,24,32,.45)", letterSpacing: "0.06em", fontSize: "12px", display: "block", marginBottom: "2px" }}>{it.label}</span>
                    <span className="mil-dark" style={{ fontWeight: 600, fontSize: "17px" }}>{it.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    case "project_overview":
      return (
        <section className="mil-p-120-60">
          <div className="container">
            <Kicker num={num}>Project Overview</Kicker>
            <div className="row mil-mb-30">
              <div className="col-lg-10 col-xl-8">
                <Paragraphs text={d.summary} className="mil-mb-30" />
              </div>
            </div>
            {Array.isArray(d.goals) && d.goals.length > 0 && (
              <div className="cs-cards">
                {d.goals.map((g, i) => (
                  <div className="cs-card" key={i}>
                    {g.emoji && <span className="cs-cic">{g.emoji}</span>}
                    <h5>{g.heading}</h5>
                    <p>{g.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    case "about":
      return (
        <ImageText num={num} eyebrow={d.label || "About"} title={d.title} image={d.image} imageRight={false}
          body={<ParaList items={d.paragraphs} />} />
      );

    case "challenge":
      return (
        <ImageText num={num} eyebrow="The Challenge" title={d.title} subtitle={d.subtitle} image={d.image} deep imageRight
          body={<Paragraphs text={d.content} />} />
      );

    case "challenge_v2":
      return (
        <ImageText num={num} eyebrow="The Challenge" title={d.title} image={d.image} deep imageRight
          body={<ParaList items={d.paragraphs} />} />
      );

    case "analytics":
      return (
        <ImageText num={num} eyebrow="The Outcome" title={d.title} image={d.image} deep imageRight={false}
          body={<ParaList items={d.paragraphs} />} />
      );

    case "benefits":
      return (
        <section className="mil-p-120-60">
          <div className="container">
            <Kicker num={num}>Benefits</Kicker>
            <Heading title={d.title} subtitle={d.subtitle} />
            {d.description && <p className="mil-mb-60" style={{ maxWidth: "720px" }}>{d.description}</p>}
            <div className="cs-cards">
              {(d.benefits || []).map((b, i) => (
                <div className="cs-card" key={i}>
                  {b.icon && <span className="cs-cic">{b.icon}</span>}
                  <h5>{b.title}</h5>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "testing_dual":
      return (
        <section className="mil-deep-bg mil-p-120-60">
          <div className="container">
            <Kicker num={num}>Testing &amp; Implementation</Kicker>
            <div className="cs-cards cs-cards-wide">
              {[d.left, d.right].filter(Boolean).map((col, i) => (
                <div className="cs-card" key={i}>
                  {col.eyebrow && <span className="cs-cnum">{col.eyebrow}</span>}
                  <h5>{col.title} {col.highlight && <span className="mil-accent">{col.highlight}</span>}</h5>
                  <Paragraphs text={col.description} className="mil-mb-15" />
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "solution":
      return (
        <TextGallery num={num} eyebrow="Our Solution" title={d.title} paragraphs={d.paragraphs} images={d.images} deep={false} />
      );

    case "solution_v2":
      return (
        <TextGallery num={num} eyebrow="Our Solution" title={d.title} paragraphs={d.paragraphs} images={d.images} deep={false} />
      );

    case "what_we_built":
      return (
        <TextGallery num={num} eyebrow="What We Built" title={d.title} paragraphs={d.paragraphs} images={d.images} deep />
      );

    case "features": {
      const items = Array.isArray(d) ? d : d.data || d.features || [];
      if (!items.length) return null;
      return (
        <section className="mil-deep-bg mil-p-120-60">
          <div className="container">
            <Kicker num={num}>Key Features</Kicker>
            <h2 className="mil-mb-60">What We <span className="mil-accent">Built</span></h2>
            <div className="cs-cards">
              {items.map((f, i) => {
                // icon is sometimes a plain digit (redundant with our index) and
                // sometimes an emoji — only show it when it's a real glyph.
                const glyph = f.icon && !/^\d+$/.test(String(f.icon).trim()) ? f.icon : null;
                return (
                  <div className="cs-card" key={i}>
                    <span className="cs-cnum">{String(i + 1).padStart(2, "0")}</span>
                    {glyph && <span className="cs-cic">{glyph}</span>}
                    <h5>{f.title}</h5>
                    <p>{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    }

    case "technology":
      return (
        <section className="mil-deep-bg mil-p-120-60">
          <div className="container">
            <Kicker num={num}>Technology</Kicker>
            {d.title && <h2 className="mil-mb-30">{d.title}</h2>}
            {Array.isArray(d.paragraphs) && (
              <div className="row mil-mb-30">
                <div className="col-lg-10 col-xl-9">
                  <ParaList items={d.paragraphs} />
                </div>
              </div>
            )}
            {Array.isArray(d.cards) && d.cards.length > 0 && (
              <div className="cs-cards">
                {d.cards.map((c, i) => (
                  <div className="cs-card" key={i}>
                    {c.icon && <span className="cs-cic">{c.icon}</span>}
                    <h5>{c.title}</h5>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    case "metrics":
      return (
        <section className="mil-p-120-60">
          <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
          <div className="container">
            <Kicker num={num}>The Results</Kicker>
            <Heading title={d.title} subtitle={d.subtitle} />
            {d.description && <p className="mil-mb-60" style={{ maxWidth: "740px" }}>{d.description}</p>}
            <div className="cs-cards">
              {(d.metrics || []).map((m, i) => (
                <div className="cs-stat" key={i}>
                  <span className="cs-sic">{m.icon || "▹"}</span>
                  <p>{m.label}</p>
                </div>
              ))}
            </div>
            {!suppressMetricTestimonial && d.testimonial?.quote && (
              <div className="cs-quote mil-mt-60">
                <p>&ldquo;{d.testimonial.quote}&rdquo;</p>
                {d.testimonial.author && <h6>{d.testimonial.author}</h6>}
              </div>
            )}
          </div>
        </section>
      );

    case "testimonial":
      if (!d.quote) return null;
      return (
        <section className="mil-deep-bg mil-p-120-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="cs-quote" style={{ margin: "0 auto" }}>
                  <p>&ldquo;{d.quote}&rdquo;</p>
                  {d.author && <h6>{d.author}</h6>}
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    case "table": {
      const cols = d.columns || [];
      const rows = d.rows || [];
      if (!cols.length || !rows.length) return null;
      return (
        <section className="mil-p-120-60">
          <div className="container">
            <Kicker num={num}>How It Compares</Kicker>
            {d.title && <h2 className="mil-mb-60">{d.title}</h2>}
            <div className="cs-table-wrap">
              <table className="cs-table">
                <thead>
                  <tr>{cols.map((c) => <th key={c.key}>{c.label}</th>)}</tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      {cols.map((c) => {
                        const cell = r[c.key];
                        const val = cell && typeof cell === "object" ? cell.value : cell;
                        return <td key={c.key}>{val}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      );
    }

    // hero / cta / final_cta_v2 handled by the page (hero banner + CtaBand)
    default:
      return null;
  }
}

// ---- Sticky tracker -------------------------------------------------------
function Tracker({ steps, active, onJump, headerH, visible, trackRef }) {
  if (steps.length < 2) return null;
  const pct = ((active + 1) / steps.length) * 100;
  return (
    <nav ref={trackRef} className="cs-track" style={{ "--cs-hh": `${headerH}px`, display: visible ? "block" : "none" }} aria-label="Case study progress">
      <ol>
        {steps.map((st, i) => (
          <li key={st.key} className={i === active ? "is-active" : i < active ? "is-done" : ""}>
            <button type="button" onClick={() => onJump(i)}>
              <span className="cs-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="cs-lab">{st.label}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="cs-track-m">
        <span className="cs-mnum">STEP {active + 1}/{steps.length}</span>
        <span className="cs-mlab">{steps[active]?.label}</span>
        <span className="cs-mbar"><i style={{ width: `${pct}%` }} /></span>
      </div>
    </nav>
  );
}

// ---- Main -----------------------------------------------------------------
export default function CaseStudySections({ sections }) {
  const list = Array.isArray(sections) ? sections : [];

  // A standalone testimonial wins over the one nested in `metrics` (design 1
  // ships both with the same quote) — avoid rendering the duplicate.
  const hasStandaloneTestimonial = list.some((s) => s?.type === "testimonial" && s?.data?.quote);

  // Build the journey: tag each section with its stage, then reorder into the
  // canonical Overview -> Challenge -> Approach -> Build -> Results sequence so
  // the page always reads forward, no matter how the API ordered the sections.
  const built = useMemo(() => {
    // 1) Tag each section with its journey stage.
    const items = list.map((s) => {
      const stageKey = STAGE_OF[s?.type];
      return { section: s, stageKey, trackable: Boolean(stageKey) };
    });
    // 2) Order key: canonical stage index; untrackable sections (e.g. a
    //    testimonial) inherit the preceding section's key to stay in context.
    let prev = 0;
    items.forEach((it) => {
      const k = it.trackable ? STAGE_INDEX[it.stageKey] : prev;
      it.orderKey = k;
      prev = k;
    });
    // 3) Stable sort into canonical order (preserving each section's original
    //    position within its stage).
    const ordered = items
      .map((it, i) => ({ it, i }))
      .sort((a, b) => a.it.orderKey - b.it.orderKey || a.i - b.i)
      .map((x) => x.it);
    // 4) Tracker steps = the canonical stages actually present.
    const present = [];
    ordered.forEach((it) => { if (it.trackable && !present.includes(it.stageKey)) present.push(it.stageKey); });
    const steps = present
      .slice()
      .sort((a, b) => STAGE_INDEX[a] - STAGE_INDEX[b])
      .map((key) => STAGES[STAGE_INDEX[key]]);
    const trackerPos = (key) => steps.findIndex((st) => st.key === key);
    // 5) Render; numbering follows the (now monotonic) tracker position.
    const rendered = ordered.map((it) => {
      const pos = it.trackable ? trackerPos(it.stageKey) : -1;
      const num = pos >= 0 ? pos + 1 : null;
      const node = renderSection(it.section, num, {
        suppressMetricTestimonial: hasStandaloneTestimonial,
      });
      return { ...it, pos, node };
    }).filter((it) => it.node);
    return { steps, rendered };
  }, [list, hasStandaloneTestimonial]);

  const { steps, rendered } = built;
  const refs = useRef([]);
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [headerH, setHeaderH] = useState(100);
  const [visible, setVisible] = useState(false);

  // Track the fixed header height so the tracker sits right below it.
  useEffect(() => {
    const measure = () => {
      const h = document.querySelector(".mil-top-panel");
      if (h) setHeaderH(Math.round(h.getBoundingClientRect().height));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Scroll-spy: active = furthest tracker step whose section has crossed the
  // reading line (running max → progress only moves forward). Also decides when
  // the fixed tracker is on screen: from entering the first section to leaving
  // the last one (it disappears at the closing CTA / footer).
  useEffect(() => {
    const onScroll = () => {
      const trackH = trackRef.current ? trackRef.current.getBoundingClientRect().height : 54;
      const line = headerH + trackH + 24;
      let pos = 0;
      const first = refs.current[0];
      const last = refs.current[rendered.length - 1];
      rendered.forEach((it, i) => {
        if (it.pos < 0) return; // skip testimonials etc.
        const el = refs.current[i];
        if (el && el.getBoundingClientRect().top <= line) pos = Math.max(pos, it.pos);
      });
      setActive(pos);
      const firstIn = first && first.getBoundingClientRect().top <= line;
      const lastOut = last && last.getBoundingClientRect().bottom <= headerH + trackH;
      setVisible(Boolean(firstIn && !lastOut));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [rendered, headerH]);

  const jump = (stepIdx) => {
    const target = rendered.findIndex((it) => it.pos === stepIdx);
    const el = refs.current[target];
    const trackH = trackRef.current ? trackRef.current.getBoundingClientRect().height : 54;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH - trackH - 16, behavior: "smooth" });
  };

  if (!rendered.length) return null;

  return (
    <>
      <Tracker steps={steps} active={active} onJump={jump} headerH={headerH} visible={visible} trackRef={trackRef} />
      {rendered.map((it, i) => (
        <div key={i} ref={(el) => (refs.current[i] = el)}>
          {it.node}
        </div>
      ))}
    </>
  );
}
