import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { stats } from "@/data/site";
import { benefits, jobOpenings } from "@/data/careers";

export const metadata = { title: "Careers" };

export default function Page() {
  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* banner */}
      <div className="mil-banner mil-top-space-0">
        <img src="/tags/hero-bg.png" className="mil-background-image" style={{ objectPosition: "center" }} alt="Careers at TAG Solutions" />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-9">
                <span className="mil-suptitle mil-mb-60"><span className="mil-light">Careers</span></span>
                <h1 className="mil-mb-60">
                  <span className="mil-uppercase mil-light">Shape the Future of Technology</span>{" "}
                  <span className="mil-font-3 mil-accent">with Us</span>
                </h1>
                <p className="mil-button-descr mil-light-soft" style={{ maxWidth: "760px" }}>
                  Join a team of engineers, designers, and strategists building resilient software for clients across the UAE, Pakistan, and beyond. Grow your craft, own real impact, and do the best work of your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* stats band */}
      <section className="mil-p-120-120">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row justify-content-center mil-text-center">
            {stats.map((s) => (
              <div className="col-6 col-md-3" key={s.label}>
                <h2 className="mil-accent mil-mb-15">{s.value}</h2>
                <h6 className="mil-upper">{s.label}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* stats band end */}

      {/* why work with us */}
      <section className="mil-deep-bg mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, left: "35%" }}></div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Work With Us</span>
              <h2 className="mil-mb-30">Why Work <span className="mil-accent">With Us</span></h2>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <p>
                We are an agile technology partner where great work is recognised and craft is taken seriously. You will work alongside senior engineers on real products, ship to real users, and grow faster than you thought possible&mdash;backed by mentorship, flexibility, and a culture that says &ldquo;we&rdquo; because success is shared.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* why work with us end */}

      {/* benefits */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "25%" }}></div>
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">We Offer You</span>
            <h2 className="mil-mb-30">Great Benefits for <span className="mil-accent">Working</span> With Us</h2>
          </div>
          <div className="row">
            {benefits.map((b) => (
              <div className="col-md-6 col-xl-4" key={b.title}>
                <div className="mil-icon-box-2 mil-mb-60">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30" style={{ fontSize: "34px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span aria-hidden="true">{b.icon}</span>
                  </div>
                  <div className="mil-box-text">
                    <h4 className="mil-mb-30">{b.title}</h4>
                    <p className="mil-box-text">{b.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* benefits end */}

      {/* open positions */}
      <section className="mil-careers mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row justify-content-between mil-mb-90">
            <div className="col-xl-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Join the Team</span>
              <h2 className="mil-mb-30">Open <span className="mil-accent">Positions</span></h2>
            </div>
            <div className="col-xl-4">
              <p>Find a role that fits your craft. Don&apos;t see the perfect match? Send us your CV anyway&mdash;we are always looking for exceptional people.</p>
            </div>
          </div>
          <ul className="mil-vacancies-frame">
            {jobOpenings.map((job) => (
              <li className="mil-vacancy" key={job.id}>
                <div className="row align-items-center">
                  <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                    <div className="mil-vacancy-head mil-mb-15">
                      <span className="mil-badge">{job.type}</span>
                      <span className="mil-text-sm mil-dark">{job.location}</span>
                    </div>
                    <h4 className="mil-mb-15">{job.title}</h4>
                    <p className="mil-text-sm mil-mb-15">{job.department} &middot; {job.location} &middot; {job.type}</p>
                    <div className="mil-tags-frame">
                      {job.tags.map((tag) => (
                        <span className="mil-badge mil-badge-dark mil-mr-15 mil-mb-15" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                    <p>{job.description}</p>
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                    <div className="mil-adaptive-right">
                      <Link href="/contact" className="mil-button mil-border"><span>Apply Now</span></Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* open positions end */}

      <CtaBand
        title="Sounds"
        highlight="Good?"
        description="We'd love to meet you. Send us your CV and tell us what you want to build."
        primary={{ label: "Apply Now", href: "/contact" }}
        secondary={{ label: "See Our Work", href: "/success-stories" }}
      />

      <Footer />
    </div>
  );
}
