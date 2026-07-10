import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { aboutStats } from "@/data/site";

export const metadata = { title: "About Us" };

const values = [
  {
    title: "Value Over Delivery",
    icon: "/img/icons/md/1.svg",
    description:
      "We optimise for the outcome, not the invoice. Every decision is measured against the value it creates for your business, not the hours it fills.",
  },
  {
    title: "Transparency Over Bureaucracy",
    icon: "/img/icons/md/2.svg",
    description:
      "Clear communication, no black boxes. You always know where your project stands, what we are working on, and why we are making each call.",
  },
  {
    title: "Engineering Excellence",
    icon: "/img/icons/md/3.svg",
    description:
      "We hold a high bar for architecture, code quality, and testing so the software we ship stays resilient, secure, and easy to build on.",
  },
  {
    title: "Partnership Mindset",
    icon: "/img/icons/md/4.svg",
    description:
      "We embed as an extension of your team, sharing ownership of your goals and staying accountable to your success long after launch.",
  },
];

const whyChooseUs = [
  {
    icon: "/img/icons/md/6.svg",
    title: "Deep Technical Architecture",
    text: "We design systems, not just screens. From data models to cloud infrastructure, our architecture decisions are built to scale with your ambitions and hold up under real-world load.",
  },
  {
    icon: "/img/icons/md/10.svg",
    title: "Business Outcomes First",
    text: "Technology is a means, not the goal. We align every sprint to measurable business results—efficiency gained, value unlocked, revenue enabled—so your investment pays back.",
  },
  {
    icon: "/img/icons/md/5.svg",
    title: "Agile Technology Partner",
    text: "We move with you. As a fast-growing startup or mid-market enterprise, you get an embedded partner who adapts quickly, communicates openly, and delivers with zero technical debt.",
  },
];

export default function Page() {
  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* banner */}
      <div className="mil-banner mil-top-space-0">
        <img src="/tags/about-story.jpg" className="mil-background-image" style={{ objectPosition: "center" }} alt="TAG Solutions team" />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-9">
                <span className="mil-suptitle mil-mb-60"><span className="mil-light">About Us</span></span>
                <h1 className="mil-mb-60">
                  <span className="mil-uppercase mil-light">Engineering Your Vision Into</span>{" "}
                  <span className="mil-font-3 mil-accent">Global</span>{" "}
                  <span className="mil-uppercase mil-light">Growth</span>
                </h1>
                <p className="mil-light-soft" style={{ maxWidth: "660px", fontSize: "18px", lineHeight: 1.7 }}>
                  We&apos;re a cross-border technology partner that turns complex business challenges into scalable, high-performance software &mdash; for fast-growing startups and mid-market enterprises across the UAE and Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* story / mission */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "35%" }}></div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <img
                src="/tags/about-mission.jpg"
                alt="Our mission"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
              />
            </div>
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Story &amp; Mission</span>
              <h2 className="mil-mb-30">A Partner Built to <span className="mil-accent">Scale With You</span></h2>
              <p className="mil-mb-30">
                Founded in 2022 out of Dubai, TAG Solutions engineers high-performance digital products designed to turn complex business challenges into scalable global growth. Our philosophy bridges the gap between deep technical architecture and definitive business outcomes.
              </p>
              <p className="mil-mb-30">
                We don&apos;t just ship code or hand off static deliverables &mdash; we embed ourselves as an agile technology partner for fast-growing startups and mid-market enterprises across the UAE and Pakistan, building resilient software that drives efficiency, unlocks value, and scales alongside your ambitions.
              </p>
              <p className="mil-mb-50">
                Our mission is to empower businesses with technology that drives growth, efficiency, and digital transformation &mdash; building lasting partnerships and delivering results that exceed expectations.
              </p>
              <div className="mil-buttons-frame">
                <Link href="/services" className="mil-button mil-border"><span>Discover Our Services</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* story / mission end */}

      {/* stats band */}
      <section className="mil-p-120-120">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row justify-content-center mil-text-center">
            {aboutStats.map((s) => (
              <div className="col-6 col-md-3" key={s.label}>
                <h2 className="mil-accent mil-mb-15">{s.value}</h2>
                <h6 className="mil-upper">{s.label}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* stats band end */}

      {/* values */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "25%" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">What We Stand For</span>
          <h2 className="mil-mb-120">We Live by <span className="mil-accent">Powerful</span> Values</h2>
          <div className="row">
            {values.map((v) => (
              <div className="col-md-6" key={v.title}>
                <div className="mil-icon-box-2 mil-mb-60">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src={v.icon} alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h4 className="mil-mb-30">{v.title}</h4>
                    <p className="mil-box-text">{v.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* values end */}

      {/* why choose us */}
      <section className="mil-p-120-120">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Why Choose Us</span>
          <h2 className="mil-mb-120">Built for <span className="mil-accent">Definitive Outcomes</span></h2>

          <div className="mil-divider"></div>
          {whyChooseUs.map((item) => (
            <div key={item.title}>
              <div className="mil-line-icon-box">
                <div className="row align-items-center">
                  <div className="col-xl-2">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <img src={item.icon} alt="icon" />
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <h4 className="mil-mb-30">{item.title}</h4>
                  </div>
                  <div className="col-xl-6">
                    <p className="mil-box-text mil-mb-30">{item.text}</p>
                  </div>
                </div>
              </div>
              <div className="mil-divider"></div>
            </div>
          ))}
        </div>
      </section>
      {/* why choose us end */}

      {/* services teaser */}
      <section className="mil-deep-bg mil-p-120-120">
        <div className="mil-deco" style={{ top: 0, left: "25%" }}></div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">What We Do</span>
              <h2 className="mil-mb-30">From Idea to <span className="mil-accent">Scalable Platform</span></h2>
              <p className="mil-mb-15">
                Software engineering, AI &amp; data, cloud, and product design&mdash;delivered end to end by one accountable team. Explore how we can help turn your vision into resilient, high-performance software.
              </p>
            </div>
            <div className="col-lg-4 mil-mb-60">
              <div className="mil-adaptive-right">
                <Link href="/services" className="mil-button mil-border"><span>Explore Our Services</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services teaser end */}

      <CtaBand />

      <Footer />
    </div>
  );
}
