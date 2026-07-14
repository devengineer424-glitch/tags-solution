import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { industries } from "@/data/industries";
import { CALENDLY_URL } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Industries",
  description:
    "TAG Solutions builds technology that understands your industry's realities — its constraints, its compliance needs, and its opportunities.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* hero */}
      <div className="mil-banner mil-top-space-0">
        <img src="/tags/hero-bg.png" className="mil-background-image" style={{ objectPosition: "center" }} alt="background" />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-9 mil-text-center">
                <span className="mil-suptitle mil-light mil-mb-30"><span className="mil-light">Industries We Serve</span></span>
                <h1 className="mil-light mil-mb-30">Deep Expertise Across <span className="mil-font-3 mil-accent">Every Vertical</span></h1>
                <p className="mil-light-soft" style={{ maxWidth: "660px", margin: "0 auto" }}>
                  We build technology that understands your industry&rsquo;s realities — its constraints, its compliance needs, and its opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* industries grid */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Where We Work</span>
          <h2 className="mil-mb-60">Industries We <span className="mil-accent">Serve</span></h2>
          <div className="row">
            {industries.map((ind) => (
              <div className="col-lg-4 col-md-6 mil-mb-60" key={ind.slug}>
                <div style={{ display: "flex", flexDirection: "column", height: "100%", border: "1px solid rgba(18,24,32,.08)", borderRadius: "10px", overflow: "hidden", background: "#fff" }}>
                  <Link href={`/industries/${ind.slug}`} className="mil-cover-frame" style={{ display: "block" }}>
                    <img src={ind.image} alt={ind.title} />
                  </Link>
                  <div style={{ padding: "34px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h4 className="mil-mb-15"><span aria-hidden="true" style={{ marginRight: "10px" }}>{ind.icon}</span>{ind.title}</h4>
                    <p className="mil-mb-30">{ind.excerpt}</p>
                    <ul className="mil-check-icon-list mil-mb-30" style={{ flexGrow: 1 }}>
                      {ind.solutions.slice(0, 3).map((s) => (
                        <li key={s.title} className="mil-mb-15">
                          <img src="/img/icons/sm/12.svg" alt="icon" />
                          <span className="mil-dark mil-text-sm">{s.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/industries/${ind.slug}`} className="mil-link"><span>Discover More</span><i className="fas fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* industries grid end */}

      <CtaBand
        title="Don't See Your"
        highlight="Industry?"
        description="We work across many more verticals. Tell us about your business and we'll show you what's possible."
        primary={{ label: "Book a Discovery Call", href: CALENDLY_URL }}
      />

      <Footer />
    </div>
  );
}
