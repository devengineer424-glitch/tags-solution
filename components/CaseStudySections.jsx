// Renders the live API's typed case-study `sections` array into ITSulu-styled
// markup. The API serves TWO templates:
//   • design 1: project_overview, challenge, benefits, testimonial,
//     testing_dual, features, metrics, table, solution
//   • design 2: snapshot_strip, about, challenge_v2, solution_v2, analytics,
//     what_we_built, technology, final_cta_v2
// Both are handled below. Unknown types are skipped gracefully. The page
// already renders a hero + closing CTA, so `hero`, `cta`, and `final_cta_v2`
// are intentionally omitted here.

function Paragraphs({ text, className = "mil-mb-30" }) {
  if (!text) return null;
  return String(text)
    .split("\n")
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t, i) => <p key={i} className={className}>{t}</p>);
}

// Render an array of paragraph strings (design 2 encodes body copy this way,
// using empty strings as spacers).
function ParaList({ items, className = "mil-mb-30" }) {
  if (!Array.isArray(items)) return null;
  const cleaned = items.map((t) => (typeof t === "string" ? t.trim() : "")).filter(Boolean);
  if (!cleaned.length) return null;
  return cleaned.map((t, i) => <p key={i} className={className}>{t}</p>);
}

// Two-column image + text block (about / challenge_v2 / analytics).
function ImageText({ eyebrow, title, paragraphs, image, deep, imageRight }) {
  const hasImg = Boolean(image);
  const hasText = title || (Array.isArray(paragraphs) && paragraphs.some((p) => p && p.trim()));
  if (!hasImg && !hasText) return null;
  const textCol = (
    <div className={hasImg ? "col-lg-6 mil-mb-60" : "col-lg-10 col-xl-8 mil-mb-60"} key="t">
      {eyebrow && <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{eyebrow}</span>}
      {title && <h2 className="mil-mb-30">{title}</h2>}
      <ParaList items={paragraphs} />
    </div>
  );
  const imgCol = hasImg ? (
    <div className="col-lg-6 mil-mb-60" key="i">
      <img src={image} alt={title || eyebrow || "case study"} loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: "10px" }} />
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

// Title + body + image gallery (solution_v2 / what_we_built / solution).
function TextGallery({ eyebrow, title, paragraphs, images, deep }) {
  const imgs = (Array.isArray(images) ? images : []).filter(Boolean);
  const hasText = title || (Array.isArray(paragraphs) && paragraphs.some((p) => p && p.trim()));
  if (!hasText && !imgs.length) return null;
  const span = imgs.length === 1 ? 12 : imgs.length === 2 ? 6 : 4;
  return (
    <section className={`${deep ? "mil-deep-bg " : ""}mil-p-120-60`}>
      <div className="container">
        {eyebrow && <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{eyebrow}</span>}
        {title && <h2 className="mil-mb-30">{title}</h2>}
        {hasText && (
          <div className="row">
            <div className="col-lg-10 col-xl-9">
              <ParaList items={paragraphs} />
            </div>
          </div>
        )}
        {imgs.length > 0 && (
          <div className="row mil-mt-30">
            {imgs.map((src, i) => (
              <div className={`col-md-${span} mil-mb-30`} key={i}>
                <img src={src} alt={title || "case study"} loading="lazy" style={{ width: "100%", height: imgs.length > 1 ? "240px" : "auto", objectFit: "cover", display: "block", borderRadius: "10px" }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Heading({ subtitle, title }) {
  // Sections encode headings as an uppercase title + subtitle pair. Render as
  // one h2 with the subtitle accented.
  if (!title && !subtitle) return null;
  return (
    <h2 className="mil-mb-30">
      {title} {subtitle && <span className="mil-accent">{subtitle}</span>}
    </h2>
  );
}

function Section({ section }) {
  const type = section?.type;
  const d = section?.data;
  if (!d) return null;

  switch (type) {
    case "project_overview":
      return (
        <section className="mil-p-120-60">
          <div className="container">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Project Overview</span>
            <div className="row">
              <div className="col-lg-10 col-xl-8">
                <Paragraphs text={d.summary} className="mil-mb-60" />
              </div>
            </div>
            {Array.isArray(d.goals) && (
              <div className="row">
                {d.goals.map((g, i) => (
                  <div className="col-md-6 col-lg-4 mil-mb-60" key={i}>
                    <div className="mil-icon-box-2">
                      <h5 className="mil-mb-15">{g.emoji ? `${g.emoji} ` : ""}{g.heading}</h5>
                      <p>{g.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    case "challenge":
      return (
        <section className="mil-deep-bg mil-p-120-60">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              {d.image && (
                <div className="col-lg-6 mil-mb-60">
                  <img src={d.image} alt={d.title || "Challenge"} style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }} />
                </div>
              )}
              <div className={d.image ? "col-lg-6 mil-mb-60" : "col-lg-10 col-xl-8 mil-mb-60"}>
                <span className="mil-suptitle mil-suptitle-2 mil-mb-30">The Challenge</span>
                <Heading title={d.title} subtitle={d.subtitle} />
                <Paragraphs text={d.content} />
              </div>
            </div>
          </div>
        </section>
      );

    case "benefits":
      return (
        <section className="mil-p-120-60">
          <div className="container">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Benefits</span>
            <Heading title={d.title} subtitle={d.subtitle} />
            {d.description && <p className="mil-mb-60" style={{ maxWidth: "700px" }}>{d.description}</p>}
            <div className="row">
              {(d.benefits || []).map((b, i) => (
                <div className="col-md-6 mil-mb-60" key={i}>
                  <div className="mil-icon-box-2">
                    <h5 className="mil-mb-15">{b.icon ? `${b.icon} ` : ""}{b.title}</h5>
                    <p>{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "features": {
      const items = Array.isArray(d) ? d : d.data || d.features || [];
      if (!items.length) return null;
      return (
        <section className="mil-deep-bg mil-p-120-60">
          <div className="container">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Key Features</span>
            <h2 className="mil-mb-60">What We <span className="mil-accent">Built</span></h2>
            <div className="row">
              {items.map((f, i) => (
                <div className="col-md-6 col-lg-4 mil-mb-60" key={i}>
                  <div className="mil-icon-box-2">
                    {f.icon && <div className="mil-mb-15" style={{ fontSize: "30px" }}>{f.icon}</div>}
                    <h5 className="mil-mb-15">{f.title}</h5>
                    <p>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    case "testing_dual":
      return (
        <section className="mil-p-120-60">
          <div className="container">
            <div className="row justify-content-between">
              {[d.left, d.right].filter(Boolean).map((col, i) => (
                <div className="col-lg-6 mil-mb-60" key={i}>
                  {col.eyebrow && <span className="mil-suptitle mil-suptitle-2 mil-mb-30">{col.eyebrow}</span>}
                  <h3 className="mil-mb-30">{col.title} {col.highlight && <span className="mil-accent">{col.highlight}</span>}</h3>
                  <Paragraphs text={col.description} />
                </div>
              ))}
            </div>
          </div>
        </section>
      );

    case "metrics":
      return (
        <section className="mil-deep-bg mil-p-120-60">
          <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
          <div className="container">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">The Results</span>
            <Heading title={d.title} subtitle={d.subtitle} />
            {d.description && <p className="mil-mb-60" style={{ maxWidth: "720px" }}>{d.description}</p>}
            <div className="row">
              {(d.metrics || []).map((m, i) => (
                <div className="col-md-6 mil-mb-30" key={i}>
                  <div className="mil-icon-box-2" style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span className="mil-accent" style={{ fontSize: "22px", lineHeight: 1 }}>{m.icon || "▹"}</span>
                    <p className="mil-dark">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
            {d.testimonial?.quote && (
              <div className="mil-mt-30" style={{ maxWidth: "760px" }}>
                <p className="mil-quote mil-mb-15" style={{ fontSize: "20px", fontStyle: "italic" }}>&ldquo;{d.testimonial.quote}&rdquo;</p>
                {d.testimonial.author && <h6 className="mil-accent">{d.testimonial.author}</h6>}
              </div>
            )}
          </div>
        </section>
      );

    case "testimonial":
      if (!d.quote) return null;
      return (
        <section className="mil-p-120-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 mil-text-center">
                <img src="/img/icons/sm/11.svg" alt="quote" className="mil-mb-30" />
                <h4 className="mil-mb-30" style={{ fontWeight: 400, lineHeight: 1.5 }}>&ldquo;{d.quote}&rdquo;</h4>
                {d.author && <h6 className="mil-accent">{d.author}</h6>}
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
            {d.title && <h2 className="mil-mb-60">{d.title}</h2>}
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {cols.map((c) => (
                      <th key={c.key} style={{ textAlign: "left", padding: "16px 18px", borderBottom: "2px solid rgba(18,24,32,.1)" }}>
                        <span className="mil-dark" style={{ fontWeight: 600 }}>{c.label}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      {cols.map((c) => {
                        const cell = r[c.key];
                        const val = cell && typeof cell === "object" ? cell.value : cell;
                        return (
                          <td key={c.key} style={{ padding: "16px 18px", borderBottom: "1px solid rgba(18,24,32,.08)" }}>{val}</td>
                        );
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

    // ---- design 2 --------------------------------------------------------

    case "snapshot_strip": {
      const items = Array.isArray(d.items) ? d.items : [];
      if (!items.length) return null;
      return (
        <section className="mil-p-60-30">
          <div className="container">
            <div className="row align-items-center" style={{ border: "1px solid rgba(18,24,32,.1)", borderRadius: "12px", padding: "16px 8px", margin: 0 }}>
              {items.map((it, i) => (
                <div className="col-6 col-md-4 mil-mb-15" key={i} style={{ display: "flex", gap: "14px", alignItems: "center", justifyContent: "center", padding: "12px" }}>
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

    case "about":
      return <ImageText eyebrow={d.label || "About"} title={d.title} paragraphs={d.paragraphs} image={d.image} deep={false} imageRight={false} />;

    case "challenge_v2":
      return <ImageText eyebrow="The Challenge" title={d.title} paragraphs={d.paragraphs} image={d.image} deep imageRight />;

    case "analytics":
      return <ImageText eyebrow="Analytics" title={d.title} paragraphs={d.paragraphs} image={d.image} deep imageRight={false} />;

    case "solution_v2":
      return <TextGallery eyebrow="Our Solution" title={d.title} paragraphs={d.paragraphs} images={d.images} deep={false} />;

    case "solution":
      return <TextGallery eyebrow="Our Solution" title={d.title} paragraphs={d.paragraphs} images={d.images} deep={false} />;

    case "what_we_built":
      return <TextGallery eyebrow="What We Built" title={d.title} paragraphs={d.paragraphs} images={d.images} deep={false} />;

    case "technology":
      return (
        <section className="mil-deep-bg mil-p-120-60">
          <div className="container">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Technology</span>
            {d.title && <h2 className="mil-mb-30">{d.title}</h2>}
            {Array.isArray(d.paragraphs) && (
              <div className="row">
                <div className="col-lg-10 col-xl-9">
                  <ParaList items={d.paragraphs} />
                </div>
              </div>
            )}
            {Array.isArray(d.cards) && d.cards.length > 0 && (
              <div className="row mil-mt-30">
                {d.cards.map((c, i) => (
                  <div className="col-md-6 col-lg-3 mil-mb-30" key={i}>
                    <div className="mil-icon-box-2">
                      {c.icon && <div className="mil-mb-15" style={{ fontSize: "32px", lineHeight: 1 }}>{c.icon}</div>}
                      <h5 className="mil-mb-15">{c.title}</h5>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      );

    // hero / cta / final_cta_v2 are handled by the page (hero banner + CtaBand)
    default:
      return null;
  }
}

export default function CaseStudySections({ sections }) {
  if (!Array.isArray(sections)) return null;
  return sections.map((s, i) => <Section section={s} key={i} />);
}
