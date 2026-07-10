import Link from "next/link";
import { cta as defaultCta } from "@/data/site";

// Reusable closing call-to-action band (Arbisoft-style). Drop at the bottom of
// any page. Props override the site-wide default copy.
export default function CtaBand({
  title = defaultCta.title,
  highlight = defaultCta.highlight,
  description = defaultCta.description,
  primary = defaultCta.primary,
  secondary = defaultCta.secondary,
}) {
  return (
    <section className="mil-gradient-bg mil-p-120-120" style={{ position: "relative", overflow: "hidden" }}>
      <div className="mil-deco mil-deco-accent" style={{ top: "50px", right: "6%", opacity: 1 }}></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8 mil-text-center">
            <h2 className="mil-light mil-mb-30" style={{ textWrap: "balance", margin: "0 auto 30px", maxWidth: "18ch" }}>
              {title} <span className="mil-accent">{highlight}</span>
            </h2>
            <p className="mil-light-soft mil-mb-60" style={{ maxWidth: "620px", margin: "0 auto 60px" }}>
              {description}
            </p>
            <div className="mil-buttons-frame mil-center mil-cta-buttons" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
              <Link href={primary.href} className="mil-button mil-accent-bg">
                <span>{primary.label}</span>
              </Link>
              {secondary && (
                <Link href={secondary.href} className="mil-button mil-border mil-light-border">
                  <span className="mil-light">{secondary.label}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
