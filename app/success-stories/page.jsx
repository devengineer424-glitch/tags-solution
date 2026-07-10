import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { getCaseStudies } from "@/lib/api";

export const metadata = {
  title: "Success Stories",
  description:
    "Real problems, measurable outcomes. See how we've helped companies ship faster, scale further, and grow.",
};

export default async function CaseStudiesPage() {
  const items = await getCaseStudies();

  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* hero */}
      <div className="mil-banner-sm mil-dark-bg">
        <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
        <div className="mil-deco mil-deco-accent" style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}></div>
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <span className="mil-suptitle mil-accent mil-mb-30">Our Work</span>
            <h1 className="mil-uppercase mil-light mil-mb-30">Success Stories</h1>
            <p className="mil-light-soft" style={{ maxWidth: "620px" }}>
              Real problems, measurable outcomes. See how we&apos;ve helped companies ship faster, scale further, and grow.
            </p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* success story grid */}
      <section className="mil-works mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row">
            {items.map((c) => (
              <div className="col-lg-6 mil-mb-60" key={c.slug}>
                <Link href={`/success-stories/${c.slug}`} className="mil-card">
                  <div className="mil-cover-frame">
                    <img src={c.image} alt={c.title} />
                  </div>
                  <div className="mil-description">
                    <div className="mil-card-title">
                      {c.industry && <h6 className="mil-mb-15">industry: <span className="mil-accent">{c.industry}</span></h6>}
                      <h4 className="mil-mb-20">{c.title}</h4>
                    </div>
                    <div className="mil-card-text">
                      <p className="mil-mb-20">{c.excerpt}</p>
                      {Array.isArray(c.tags) && c.tags.length > 0 && (
                        <ul className="mil-tags">
                          {c.tags.map((t) => (
                            <li key={t}><span>{t}</span></li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* success story grid end */}

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
