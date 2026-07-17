import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import CaseJourneyTracker from "@/components/casestudy/CaseJourneyTracker";
import { CaseHero, Kicker, Body, Split, StatBand, Gallery, Callout } from "@/components/casestudy/blocks";
import { pageMeta, caseStudySchema, breadcrumbSchema } from "@/lib/seo";
import data from "@/data/caseStudies/building-for-teams-not-just-prompts";

const path = `/success-stories/${data.slug}`;

export const metadata = pageMeta({
  title: data.title,
  description: data.excerpt,
  path,
  image: data.heroImage,
  type: "article",
});

const STEPS = [
  { id: "cs-overview", label: "Overview" },
  { id: "cs-problem", label: "Challenge" },
  { id: "cs-win-1", label: "Storage" },
  { id: "cs-win-2", label: "Cost" },
  { id: "cs-win-3", label: "Reliability" },
  { id: "cs-gallery", label: "Inside" },
];

// Snapshot strip — equal-growing flex cells so it fills evenly.
function Snapshot({ items }) {
  if (!Array.isArray(items) || !items.length) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", border: "1px solid rgba(18,24,32,.1)", borderRadius: "14px", padding: "8px", marginTop: "50px" }}>
      {items.map((it, i) => (
        <div key={i} style={{ flex: "1 1 180px", display: "flex", gap: "14px", alignItems: "center", justifyContent: "center", padding: "16px 12px" }}>
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

function Win({ id, num, kicker, win, reverse }) {
  return (
    <section id={id} className={`${num % 2 === 1 ? "mil-deep-bg " : ""}mil-p-120-60`}>
      <div className="container">
        <Kicker num={num}>{kicker}</Kicker>
        <h2 className="mil-mb-30" style={{ maxWidth: "22ch" }}>{win.title}</h2>
        <Split image={win.image} alt={win.title} frame="browser" reverse={reverse}>
          <p className="mil-mb-30" style={{ color: "rgba(18,24,32,.6)" }}>{win.pitch}</p>
          <h6 className="mil-mb-15" style={{ color: "var(--cs-a, #f57c00)" }}>What we built</h6>
          <p className="mil-mb-30">{win.built}</p>
          <p className="mil-mb-0" style={{ fontWeight: 600 }}>{win.result}</p>
        </Split>
        <div className="mil-mt-30"><StatBand stats={[win.stat]} /></div>
      </div>
    </section>
  );
}

export default function Page() {
  const jsonLd = [
    caseStudySchema({ title: data.title, description: data.excerpt, image: data.heroImage, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Success Stories", path: "/success-stories" },
      { name: data.title, path },
    ]),
  ];

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />
      <CaseJourneyTracker steps={STEPS} />

      <CaseHero kicker={data.kicker} title={data.title} client={data.client} industry={data.industry} image={data.heroImage} tags={data.tags} />

      {/* Overview */}
      <section id="cs-overview" className="mil-p-120-60">
        <div className="container">
          <Kicker num={1}>Project Overview</Kicker>
          <div className="row"><div className="col-lg-10 col-xl-9"><Body paragraphs={data.summary} className="mil-mb-30" max="920px" /></div></div>
          <Snapshot items={data.snapshot} />
        </div>
      </section>

      {/* Challenge */}
      <section id="cs-problem" className="mil-deep-bg mil-p-120-60">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 mil-mb-60"><img className="cs-plainshot" src={data.problem.image} alt={data.problem.title} loading="lazy" /></div>
            <div className="col-lg-6 mil-mb-60">
              <Kicker num={2}>The Challenge</Kicker>
              <h2 className="mil-mb-30">{data.problem.title}</h2>
              <Body paragraphs={data.problem.paragraphs} />
            </div>
          </div>
        </div>
      </section>

      {/* Three wins */}
      <Win id="cs-win-1" num={3} kicker="Win #1 · Storage" win={data.wins[0]} reverse={false} />
      <Win id="cs-win-2" num={4} kicker="Win #2 · Cost" win={data.wins[1]} reverse={true} />
      <Win id="cs-win-3" num={5} kicker="Win #3 · Reliability" win={data.wins[2]} reverse={false} />

      {/* Honest pitch + disclaimer (connector, not a tracker step) */}
      <section className="mil-p-120-60">
        <div className="container">
          <Kicker>The Pitch, Stated Honestly</Kicker>
          <h2 className="mil-mb-30" style={{ maxWidth: "22ch" }}>{data.pitch.title}</h2>
          <div className="row mil-mb-60"><div className="col-lg-10 col-xl-8"><Body paragraphs={data.pitch.paragraphs} /></div></div>
          <Callout icon="ℹ️">
            <strong>A note on the numbers.</strong> {data.disclaimer}
          </Callout>
        </div>
      </section>

      {/* Inside the Builder gallery */}
      <section id="cs-gallery" className="mil-deep-bg mil-p-120-60">
        <div className="container">
          <Kicker num={6}>Inside the Builder</Kicker>
          <h2 className="mil-mb-60">A look at the <span className="mil-accent">product</span></h2>
          <Gallery images={data.gallery} frame="browser" />
        </div>
      </section>

      <CtaBand
        title="Ready to Be Our Next"
        highlight="Success Story?"
        description="Let's turn your challenge into your next success story."
        primary={{ label: "Start Your Project", href: "/contact" }}
      />
      <Footer />
    </div>
  );
}
