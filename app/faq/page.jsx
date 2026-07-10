import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { faqs } from "@/data/site";
import { pageMeta, faqSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about working with TAG Solutions — engagement models, pricing, quality, security, NDAs, IP ownership, and support.",
  path: "/faq",
});

export default function Page() {
  return (
    <div className="mil-wrapper">
      <JsonLd data={faqSchema(faqs)} />
      <Header transparent />

      {/* banner */}
      <div className="mil-banner mil-top-space-0">
        <img src="/tags/hero-bg.png" className="mil-background-image" style={{ objectPosition: "center" }} alt="Frequently asked questions" />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-9">
                <span className="mil-suptitle mil-mb-60"><span className="mil-light">FAQ</span></span>
                <h1 className="mil-mb-60">
                  <span className="mil-uppercase mil-light">Frequently Asked</span>{" "}
                  <span className="mil-font-3 mil-accent">Questions</span>
                </h1>
                <p className="mil-button-descr mil-light-soft" style={{ maxWidth: "760px" }}>
                  Everything you need to know about working with TAG Solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* faq */}
      <section className="mil-faqs mil-p-120-120">
        <div className="mil-deco" style={{ bottom: 0, left: "10%", transform: "rotate(180deg)" }}></div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <h3 className="mil-up-font mil-mb-30">Answers to the questions we hear <span className="mil-accent">most often</span>.</h3>
              <p className="mil-mb-60">Still have a question? Reach out and our team will get back to you within one business day.</p>
            </div>
            <div className="col-lg-7">
              {faqs.map((item) => (
                <div key={item.q}>
                  <div className="mil-accordion">
                    <h6>{item.q}</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* faq end */}

      <CtaBand />

      <Footer />
    </div>
  );
}
