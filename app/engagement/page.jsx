import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import CountUp from "@/components/CountUp";
import { models, factorStats, technologies, comparison, questions, faqGroups } from "@/data/engagement";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Engagement Models",
  description:
    "Choose the engagement model that fits your project — Software Outsourcing, Dedicated Teams, or Staff Augmentation. Compare scope, cost, control, and risk.",
  path: "/engagement",
});

const MODEL_COLS = [
  { key: "outsourcing", label: "Software Outsourcing" },
  { key: "dedicated", label: "Dedicated Teams" },
  { key: "augmentation", label: "Staff Augmentation" },
];

function Yes() {
  return <span className="mil-accent" style={{ fontWeight: 600 }}>Yes</span>;
}
function No() {
  return <span style={{ color: "rgba(18,24,32,.35)" }}>No</span>;
}

const cellStyle = { padding: "16px 18px", borderBottom: "1px solid rgba(18,24,32,.08)", verticalAlign: "top", fontSize: "14px", lineHeight: 1.5 };
const headCellStyle = { padding: "18px", borderBottom: "2px solid rgba(18,24,32,.12)", textAlign: "left", verticalAlign: "bottom" };

export default function Page() {
  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* banner */}
      <div className="mil-banner mil-top-space-0">
        <img src="/tags/hero-bg.png" className="mil-background-image" style={{ objectPosition: "center" }} alt="Engagement models" />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-9">
                <span className="mil-suptitle mil-mb-30"><span className="mil-light">How We Work</span></span>
                <h1 className="mil-light mil-mb-30">
                  <span className="mil-uppercase">Engagement</span>{" "}
                  <span className="mil-font-3 mil-accent">Models</span>
                </h1>
                <p className="mil-light-soft" style={{ maxWidth: "660px", fontSize: "17px", lineHeight: 1.7 }}>
                  Flexible ways to work with us &mdash; pick the model that fits your stage, budget, and timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* why different models */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row justify-content-center mil-text-center mil-mb-90">
            <div className="col-lg-9">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Why Different Engagement Models?</span>
              <h2 className="mil-mb-30">One Size Doesn&apos;t Fit <span className="mil-accent">Every Project</span></h2>
              <p>
                Every project is unique, and so are its needs. We offer three engagement models so you can choose the one that fits your requirements and delivers the best value in terms of time, money, and results. Here&apos;s what each model covers and who it&apos;s for.
              </p>
            </div>
          </div>

          <div className="row">
            {models.map((model) => (
              <div className="col-lg-4 mil-mb-30" key={model.key}>
                <div style={{ display: "flex", flexDirection: "column", height: "100%", position: "relative", padding: "44px 34px", borderRadius: "12px", border: model.featured ? "2px solid #f57c00" : "1px solid rgba(18,24,32,.1)", background: "#fff" }}>
                  {model.featured && (
                    <span style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "#f57c00", color: "#121820", fontSize: "12px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", padding: "6px 18px", borderRadius: "20px", whiteSpace: "nowrap", boxShadow: "0 6px 16px rgba(245,124,0,.35)" }}>Most Popular</span>
                  )}
                  <p className="mil-text-sm mil-mb-15">{model.price}</p>
                  <h4 className="mil-mb-15">{model.title}</h4>
                  <h6 className="mil-accent mil-mb-30">{model.tagline}</h6>
                  <p className="mil-mb-30">{model.description}</p>
                  <ul className="mil-check-icon-list mil-mb-30" style={{ flexGrow: 1 }}>
                    {model.features.map((f) => (
                      <li key={f} className="mil-mb-15"><img src="/img/icons/sm/12.svg" alt="icon" /><span className="mil-dark mil-text-sm">{f}</span></li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`mil-button mil-fw ${model.featured ? "mil-accent-bg" : "mil-border"}`}><span>Book a Discovery Call</span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* why different models end */}

      {/* the TAG Solutions factor */}
      <section className="mil-deep-bg mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, left: "20%" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">The TAG Solutions Factor</span>
          <h2 className="mil-mb-90">Experience You Can <span className="mil-accent">Build On</span></h2>
          <div className="row mil-mb-60">
            {factorStats.map((s) => (
              <div className="col-md-4 mil-mb-30" key={s.label}>
                <h1 className="mil-accent mil-mb-15"><CountUp value={s.value} /></h1>
                <p className="mil-dark">{s.label}</p>
              </div>
            ))}
          </div>
          <h5 className="mil-mb-30">Technologies We Employ</h5>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {technologies.map((t) => (
              <span key={t} className="mil-dark" style={{ padding: "8px 18px", border: "1px solid rgba(18,24,32,.12)", borderRadius: "30px", fontSize: "14px", background: "#fff" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>
      {/* factor end */}

      {/* comparison table */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row justify-content-center mil-text-center mil-mb-60">
            <div className="col-lg-9">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Compare</span>
              <h2 className="mil-mb-30">How to Choose the Right <span className="mil-accent">Engagement Model</span></h2>
              <p>Understand how each model differs by scope, cost, control, and risk — then pick the one that aligns with your goals.</p>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "760px", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ ...headCellStyle, width: "22%" }}><span className="mil-text-sm mil-dark-soft">Criteria</span></th>
                  {MODEL_COLS.map((m) => (
                    <th key={m.key} style={headCellStyle}><h6 className="mil-accent">{m.label}</h6></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.criteria}>
                    <td style={cellStyle}><strong className="mil-dark">{row.criteria}</strong></td>
                    <td style={cellStyle}>{row.outsourcing}</td>
                    <td style={cellStyle}>{row.dedicated}</td>
                    <td style={cellStyle}>{row.augmentation}</td>
                  </tr>
                ))}
                <tr>
                  <td style={cellStyle}><strong className="mil-dark">Best Suited For</strong></td>
                  {MODEL_COLS.map((m) => (
                    <td style={cellStyle} key={m.key}>
                      <ul style={{ listStyle: "disc", paddingLeft: "18px", margin: 0 }}>
                        {models.find((mm) => mm.key === m.key).bestFor.map((b, i) => (
                          <li key={i} style={{ marginBottom: "8px" }}>{b}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* comparison table end */}

      {/* quick questions */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="container">
          <div className="row justify-content-center mil-text-center mil-mb-60">
            <div className="col-lg-9">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Quick Check</span>
              <h2 className="mil-mb-30">Answer a Few Questions to <span className="mil-accent">Find Your Fit</span></h2>
              <p>Based on your preferences for control, management, and project needs, here&apos;s which model fits.</p>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "700px", borderCollapse: "collapse", background: "#fff", borderRadius: "10px", overflow: "hidden" }}>
              <thead>
                <tr>
                  <th style={{ ...headCellStyle, width: "40%" }}><span className="mil-text-sm mil-dark-soft">Your Requirement</span></th>
                  {MODEL_COLS.map((m) => (
                    <th key={m.key} style={{ ...headCellStyle, textAlign: "center" }}><span className="mil-dark mil-text-sm" style={{ fontWeight: 600 }}>{m.label}</span></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {questions.map((row) => (
                  <tr key={row.q}>
                    <td style={cellStyle}><span className="mil-dark">{row.q}</span></td>
                    <td style={{ ...cellStyle, textAlign: "center" }}>{row.outsourcing ? <Yes /> : <No />}</td>
                    <td style={{ ...cellStyle, textAlign: "center" }}>{row.dedicated ? <Yes /> : <No />}</td>
                    <td style={{ ...cellStyle, textAlign: "center" }}>{row.augmentation ? <Yes /> : <No />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* quick questions end */}

      {/* FAQ */}
      <section className="mil-faq mil-p-120-90">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Frequently Asked Questions</span>
          <h2 className="mil-mb-90">Engagement <span className="mil-accent">FAQs</span></h2>
          <div className="row justify-content-between">
            {faqGroups.map((grp) => (
              <div className="col-lg-4 mil-mb-30" key={grp.group}>
                <h5 className="mil-accent mil-mb-30">{grp.group}</h5>
                <ul className="mil-accordion-group">
                  {grp.items.map((item) => (
                    <li key={item.q} style={{ listStyle: "none", marginBottom: "20px" }}>
                      <div className="mil-accordion">
                        <h6>{item.q}</h6>
                      </div>
                      <div className="mil-panel">
                        <div className="mil-window">
                          <p className="mil-text-sm">{item.a}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ end */}

      <CtaBand
        primary={{ label: "Book a Discovery Call", href: "/contact" }}
        secondary={{ label: "See Our Work", href: "/success-stories" }}
      />

      <Footer />
    </div>
  );
}
