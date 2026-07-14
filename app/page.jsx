import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import CountUp from "@/components/CountUp";
import { hero, stats, trustLogos, CALENDLY_URL } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { getCaseStudies, getBlogs } from "@/lib/api";
import { models as engagementModels } from "@/data/engagement";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "TAG Solutions — Technology & Global Solutions",
  titleAbsolute: true,
  description:
    "Empowering your vision with end-to-end tech solutions. AI, software development, cloud engineering and more — trusted by global leaders.",
  path: "/",
});

export default async function HomePage() {
  const [caseStudies, blogs] = await Promise.all([getCaseStudies(), getBlogs()]);
  const featuredCases = caseStudies.slice(0, 4);
  const latestBlogs = blogs.slice(0, 6);
  const leftServices = services.slice(0, 4);
  const rightServices = services.slice(4);
  // Clamp every service blurb to a fixed 3-line block so all items align to the
  // same height regardless of copy length.
  const serviceDescStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    lineHeight: 1.6,
    height: "4.8em",
    marginBottom: 0,
  };
  // Clamp testimonial quotes to a fixed 5-line block so every review card is
  // the same height regardless of quote length.
  const reviewQuoteStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    lineHeight: 1.7,
    height: "8.5em",
  };

  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* banner */}
      <div className="mil-banner mil-top-space-0">
        <div className="swiper-container mil-banner-slideshow">
          <div className="swiper-wrapper">
            {[
              { src: "/img/hero/hero-1-global.svg", alt: "Global connected network illustration" },
              { src: "/img/hero/hero-2-ai.svg", alt: "AI neural network illustration" },
              { src: "/img/hero/hero-3-cloud.svg", alt: "Cloud microservices architecture illustration" },
            ].map((img, i) => (
              <div className="swiper-slide" key={i}>
                <img src={img.src} className="mil-background-image" style={{ objectPosition: "center" }} data-swiper-parallax="-100" data-swiper-parallax-scale="1.1" alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="mil-overlay"></div>

        <div className="mil-banner-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8">
                <span className="mil-suptitle mil-mb-30"><span className="mil-light">{hero.eyebrow}</span></span>
                <h1 className="mil-mb-30"><span className="mil-uppercase mil-light">{hero.titlePrefix}</span> <span className="mil-font-3 mil-accent">{hero.titleHighlight}</span> <span className="mil-uppercase mil-light">{hero.titleSuffix}</span></h1>
                <p className="mil-light-soft mil-mb-30" style={{ maxWidth: "600px", fontSize: "17px", lineHeight: 1.7 }}>{hero.description}</p>
                <div className="mil-buttons-frame" style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mil-button mil-accent-bg"><span>Book a Discovery Call</span></a>
                  <Link href="/services" className="mil-button mil-border mil-light"><span>Explore Services</span></Link>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="mil-illustration-1">
                  {[
                    { title: "Dedicated Team", text: "A full squad of engineers and designers, embedded in your mission." },
                    { title: "AI & Data Experts", text: "ML models, analytics and automation that turn data into decisions." },
                    { title: "Cloud Engineers", text: "Resilient, secure, cost-efficient architectures that scale with you." },
                  ].map((it, i) => (
                    <div className={`mil-item mil-item-${i + 1}`} key={i}>
                      <div className="mil-plus">
                        <div className="mil-hover-window">
                          <div className="mil-window-content">
                            <h5 className="mil-dark mil-mb-15">{it.title}</h5>
                            <div className="mil-divider mil-divider-left mil-mb-15"></div>
                            <p className="mil-text-sm">{it.text}</p>
                          </div>
                        </div>
                        <div className="mil-item-hover">
                          <div className="mil-plus-icon">+</div>
                          <h6 className="mil-light">{it.title}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* trust strip */}
      <div className="mil-partners mil-p-90-60">
        <div className="container">
          <p className="mil-text-center mil-mb-30 mil-upper mil-suptitle-2">Our Employees are Certified by Big Companies</p>
          {/* desktop: static grid */}
          <div className="mil-partners-frame mil-trust-desktop">
            {trustLogos.map((logo) => (
              <a href="#" key={logo.name}><img src={logo.src} alt={logo.name} style={{ maxHeight: "34px", width: "auto" }} /></a>
            ))}
          </div>
          {/* mobile: seamless left-to-right marquee (logos duplicated for the loop) */}
          <div className="mil-trust-marquee" aria-hidden="true">
            <div className="mil-trust-track">
              {[...trustLogos, ...trustLogos].map((logo, i) => (
                <a href="#" key={`${logo.name}-${i}`}><img src={logo.src} alt={logo.name} /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* trust strip end */}

      <div className="container"><div className="mil-divider"></div></div>

      {/* industries */}
      <section className="mil-p-120-90">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Industries We Serve</span>
          <h2 className="mil-mb-60">Deep Expertise, <span className="mil-accent">Every Vertical</span></h2>
          <div className="row">
            {industries.map((ind) => (
              <div className="col-md-6 col-lg-4" key={ind.slug}>
                <Link href={`/industries/${ind.slug}`} className="mil-icon-box-2 mil-mb-60" style={{ display: "block" }}>
                  <div className="mil-icon-frame mil-icon-frame-md mil-mb-30" style={{ fontSize: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span aria-hidden="true">{ind.icon}</span>
                  </div>
                  <h5 className="mil-mb-15">{ind.title}</h5>
                  <p>{ind.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* industries end */}

      <div className="container"><div className="mil-divider"></div></div>

      {/* services */}
      <section className="mil-services mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Core Services</span>
          <h2 className="mil-mb-30">How We Can <span className="mil-accent">Help You</span></h2>
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <h4 className="mil-mb-60 mil-mt-30">Build &amp; Engineer</h4>
              <div className="mil-divider mil-divider-left"></div>
              {leftServices.map((s, i) => (
                <div key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="mil-service-item">
                    <div className="mil-service-icon">
                      <div className="mil-icon-frame mil-icon-frame-md">
                        <img src={`/img/icons/md/${(i % 6) + 1}.svg`} alt="icon" />
                      </div>
                    </div>
                    <div className="mil-service-text">
                      <h5 className="mil-mb-30"><span className="mil-accent">{String(i + 1).padStart(2, "0")}</span> {s.shortTitle}</h5>
                      <p style={serviceDescStyle}>{s.description}</p>
                    </div>
                  </Link>
                  <div className="mil-divider mil-divider-left"></div>
                </div>
              ))}
            </div>
            <div className="col-lg-6 col-xl-6">
              <h4 className="mil-mb-60 mil-mt-30">Scale &amp; Optimize</h4>
              <div className="mil-divider mil-divider-left"></div>
              {rightServices.map((s, i) => (
                <div key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="mil-service-item">
                    <div className="mil-service-icon">
                      <div className="mil-icon-frame mil-icon-frame-md">
                        <img src={`/img/icons/md/${((i + 4) % 6) + 1}.svg`} alt="icon" />
                      </div>
                    </div>
                    <div className="mil-service-text">
                      <h5 className="mil-mb-30"><span className="mil-accent">{String(leftServices.length + i + 1).padStart(2, "0")}</span> {s.shortTitle}</h5>
                      <p style={serviceDescStyle}>{s.description}</p>
                    </div>
                  </Link>
                  <div className="mil-divider mil-divider-left"></div>
                </div>
              ))}
              <Link href="/services" className="mil-link mil-mt-30"><span>View All Services</span><i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
      {/* services end */}

      {/* stats band */}
      <section className="mil-deep-bg mil-p-120-120">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row justify-content-center mil-text-center">
            {stats.map((s) => (
              <div className="col-6 col-md-3 mil-mb-30" key={s.label}>
                <h2 className="mil-accent mil-mb-15"><CountUp value={s.value} /></h2>
                <h6 className="mil-upper">{s.label}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* stats band end */}

      {/* engagement models */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, left: "20%" }}></div>
        <div className="container">
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-8">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">How We Work</span>
              <h2 className="mil-mb-0">Engagement Models That <span className="mil-accent">Fit You</span></h2>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <Link href="/engagement" className="mil-link"><span>Compare All Models</span><i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="row">
            {engagementModels.map((m, i) => (
              <div className="col-lg-4 mil-mb-30" key={m.key}>
                <Link
                  href="/engagement"
                  className="mil-svc-card"
                  style={{ display: "flex", flexDirection: "column", height: "100%", padding: "40px 34px", background: "#fff", borderRadius: "14px", border: m.featured ? "2px solid #f57c00" : "1px solid rgba(18,24,32,.08)", position: "relative" }}
                >
                  {m.featured && (
                    <span style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: "#f57c00", color: "#121820", fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", padding: "6px 16px", borderRadius: "20px", whiteSpace: "nowrap", boxShadow: "0 6px 16px rgba(245,124,0,.35)" }}>Most Popular</span>
                  )}
                  <span className="mil-accent" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "22px", marginBottom: "14px" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="mil-mb-15">{m.title}</h4>
                  <h6 className="mil-accent mil-mb-15">{m.tagline}</h6>
                  <p className="mil-mb-30" style={{ flexGrow: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{m.description}</p>
                  <span className="mil-link"><span>Learn More</span><i className="fas fa-arrow-right"></i></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* engagement models end */}

      {/* portfolio / success stories */}
      <section className="mil-works mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "40%" }}></div>
        <div className="container">
          <div className="row align-items-center mil-mb-60-adapt">
            <div className="col-md-6 col-xl-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Work</span>
              <h2 className="mil-mb-30">Latest Success Stories</h2>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                <div className="mil-slider-nav mil-mb-30">
                  <div className="mil-slider-btn-prev mil-works-prev"><i className="fas fa-arrow-left"></i><span className="mil-h6">Prev</span></div>
                  <div className="mil-slider-btn-next mil-works-next"><span className="mil-h6">Next</span><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-container mil-works-slider mil-mb-90">
            <div className="swiper-wrapper">
              {featuredCases.map((c) => (
                <div className="swiper-slide" key={c.slug}>
                  <Link href={`/success-stories/${c.slug}`} className="mil-card">
                    <div className="mil-cover-frame">
                      <img src={c.image} alt={c.title} />
                    </div>
                    <div className="mil-description">
                      <div className="mil-card-title">
                        <h4 className="mil-mb-20">{c.title}</h4>
                        <h6>industry: <span className="mil-accent">{c.industry}</span></h6>
                      </div>
                      <div className="mil-card-text">
                        <p>{c.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <Link href="/success-stories" className="mil-link mil-mb-30"><span>View All Stories</span><i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mil-button mil-border mil-mb-30"><span>Start a Project</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* portfolio end */}

      <div className="container"><div className="mil-divider"></div></div>

      {/* blog */}
      <section className="mil-blog mil-p-120-120">
        <div className="mil-deco" style={{ top: 0, right: "30%" }}></div>
        <div className="container">
          <div className="row align-items-center mil-mb-90">
            <div className="col-md-6 col-xl-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Our Latest News</span>
              <h2>Insights &amp; Thinking</h2>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right mil-mt-60-adapt">
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-prev mil-blog-prev"><i className="fas fa-arrow-left"></i><span className="mil-h6">Prev</span></div>
                  <div className="mil-slider-btn-next mil-blog-next"><span className="mil-h6">Next</span><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-container mil-blog-slider mil-mb-90">
            <div className="swiper-wrapper">
              {latestBlogs.map((b) => (
                <div className="swiper-slide mil-slide-50" key={b.slug}>
                  <Link href={`/blog/${b.slug}`} className="mil-card">
                    <div className="mil-cover-frame">
                      <img src={b.image} alt={b.title} />
                    </div>
                    <div className="mil-description">
                      <div className="mil-card-title">
                        <h4 className="mil-mb-20">{b.title}</h4>
                        <h6>by: <span className="mil-accent">{b.author}</span></h6>
                      </div>
                      <div className="mil-card-text">
                        <p>{b.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12">
              <Link href="/blog" className="mil-link"><span>View More Insights</span><i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}

      {/* reviews */}
      <section className="mil-reviews mil-deep-bg mil-p-120-120">
        <div className="mil-deco" style={{ top: 0, right: "30%" }}></div>
        <div className="container">
          <div className="row align-items-center mil-mb-90">
            <div className="col-md-6 col-xl-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Testimonials</span>
              <h2>What Our <span className="mil-accent">Clients</span> Say</h2>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right mil-mt-60-adapt">
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-prev mil-revi-prev"><i className="fas fa-arrow-left"></i><span className="mil-h6">Prev</span></div>
                  <div className="mil-slider-btn-next mil-revi-next"><span className="mil-h6">Next</span><i className="fas fa-arrow-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-container mil-revi-slider">
            <div className="swiper-wrapper">
              {testimonials.map((r, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="mil-review">
                    <div className="mil-stars mil-mb-30">
                      <img src="/img/icons/sm/11.svg" alt="quote" />
                      <ul>
                        {[...Array(5)].map((_, j) => <li key={j}><i className="fas fa-star"></i></li>)}
                      </ul>
                    </div>
                    <p className="mil-mb-30" style={reviewQuoteStyle}>{r.quote}</p>
                    <div className="mil-author">
                      <img src={r.img} alt={r.name} />
                      <div className="mil-name">
                        <h6 className="mil-mb-5">{r.name}</h6>
                        <span className="mil-text-sm">{r.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* reviews end */}

      <CtaBand
        title="Empowering Your Vision with"
        highlight="End-to-End Tech"
        description="Unlock new levels of innovation and efficiency with our AI and software services — trusted by global leaders to turn business challenges into reality."
        primary={{ label: "Book a Discovery Call", href: CALENDLY_URL }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />

      <Footer />
    </div>
  );
}
