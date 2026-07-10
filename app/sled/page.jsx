import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { sled } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "U.S. SLED Delivery Partner",
  description:
    "TAG Solutions delivers secure, compliant, cloud-native software for U.S. State, Local & Education organisations — FedRAMP-aware, NIST 800-53 and CMMC Level 1 aligned.",
  path: "/sled",
});

const highlightIcons = [
  "fas fa-landmark",
  "fas fa-cloud",
  "fas fa-shield-alt",
  "fas fa-file-contract",
];

export default function Page() {
  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* banner */}
      <div className="mil-banner mil-top-space-0">
        <img src="/tags/hero-bg.png" className="mil-background-image" style={{ objectPosition: "center" }} alt="U.S. SLED delivery partner" />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-9">
                <span className="mil-suptitle mil-mb-60"><span className="mil-light">{sled.subtitle}</span></span>
                <h1 className="mil-mb-60">
                  <span className="mil-uppercase mil-light">U.S. SLED</span>{" "}
                  <span className="mil-font-3 mil-accent">Delivery Partner</span>
                </h1>
                <p className="mil-button-descr mil-light-soft" style={{ maxWidth: "760px" }}>
                  {sled.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* highlights */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Why Partner With Us</span>
          <h2 className="mil-mb-120">Built for the <span className="mil-accent">Public Sector</span></h2>
          <div className="row">
            {sled.highlights.map((h, i) => (
              <div className="col-md-6 col-lg-3" key={h.title}>
                <div className="mil-icon-box-2 mil-mb-60">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>
                    <i className={`${highlightIcons[i % highlightIcons.length]} mil-accent`} aria-hidden="true"></i>
                  </div>
                  <div className="mil-box-text">
                    <h5 className="mil-mb-15">{h.title}</h5>
                    <p>{h.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* highlights end */}

      {/* positioning */}
      <section className="mil-deep-bg mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, left: "35%" }}></div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Compliance-Aware Delivery</span>
              <h2 className="mil-mb-30">Secure, Compliant, <span className="mil-accent">Cloud-Native</span></h2>
            </div>
            <div className="col-lg-7 mil-mb-60">
              <p className="mil-mb-30">
                TAG Solutions serves U.S. State, Local, and Education organisations &mdash; agencies, municipalities, and institutions &mdash; with software delivery engineered for the public sector. From modernising legacy systems to standing up net-new platforms, we design cloud-native architectures that hold up to public-sector scrutiny.
              </p>
              <p className="mil-mb-0">
                Our delivery is compliance-aware from day one: cloud environments designed with <span className="mil-accent">FedRAMP</span> baselines in mind, controls aligned to <span className="mil-accent">NIST 800-53</span> and <span className="mil-accent">CMMC Level 1</span>, and registration under <span className="mil-accent">NAICS 541511</span> (Custom Computer Programming Services) &mdash; so procurement and security teams have a defensible, auditable partner.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* positioning end */}

      <CtaBand
        title="Delivering for the"
        highlight="Public Sector"
        description="Talk to us about your SLED modernization or net-new build."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={null}
      />

      <Footer />
    </div>
  );
}
