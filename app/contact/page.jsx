import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Us",
  description:
    "Have a project in mind? Book a free discovery call with TAG Solutions. Offices in Dubai Silicon Oasis, UAE and Lahore, Pakistan.",
  path: "/contact",
});

const infoCards = [
  { icon: "fas fa-map-marker-alt", title: "Our Offices", lines: contact.offices },
  { icon: "fas fa-phone", title: "Call Us", lines: contact.phones },
  { icon: "fas fa-envelope", title: "Email Us", lines: contact.emails },
  { icon: "fas fa-clock", title: "Working Hours", lines: contact.hours },
];

export default function Page() {
  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* banner */}
      <div className="mil-banner mil-top-space-0">
        <img src="/tags/hero-bg.png" className="mil-background-image" style={{ objectPosition: "center" }} alt="Contact TAG Solutions" />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-9">
                <span className="mil-suptitle mil-mb-60"><span className="mil-light">Get in Touch</span></span>
                <h1 className="mil-mb-60">
                  <span className="mil-uppercase mil-light">Contact</span>{" "}
                  <span className="mil-font-3 mil-accent">Us</span>
                </h1>
                <p className="mil-button-descr mil-light-soft" style={{ maxWidth: "760px" }}>
                  Have a project in mind or want to learn more about our services? We&apos;d love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* contact info + form */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row justify-content-between">
            {/* left — contact info */}
            <div className="col-lg-5 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Contact Details</span>
              <h2 className="mil-mb-60">Let&apos;s <span className="mil-accent">Talk</span></h2>
              {infoCards.map((card) => (
                <div className="mil-icon-box-2 mil-mb-60" key={card.title}>
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>
                    <i className={`${card.icon} mil-accent`} aria-hidden="true"></i>
                  </div>
                  <div className="mil-box-text">
                    <h5 className="mil-mb-15">{card.title}</h5>
                    <ul className="mil-simple-list">
                      {card.lines.map((line) => (
                        <li key={line}><p>{line}</p></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* right — message form */}
            <div className="col-lg-7 mil-mb-60">
              <div
                className="mil-form-panel"
                style={{
                  background: "linear-gradient(180deg, #181e26 0%, #121820 100%)",
                  borderRadius: "8px",
                  position: "relative",
                  overflow: "hidden",
                  padding: "clamp(28px, 4vw, 56px)",
                }}
              >
                <div className="mil-deco mil-deco-accent" style={{ top: "20px", right: "8%" }}></div>
                <h2 className="mil-light mil-mb-15">Send Us a <span className="mil-accent">Message</span></h2>
                <p className="mil-light-soft mil-mb-60">Tell us a little about your project and we&apos;ll get back to you shortly.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact info + form end */}

      <Footer />
    </div>
  );
}
