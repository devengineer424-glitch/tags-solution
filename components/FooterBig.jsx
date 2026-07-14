import Link from "next/link";
import { company, contact, social, solutionGroups } from "@/data/site";
import { services as serviceList } from "@/data/services";
import NewsletterForm from "@/components/NewsletterForm";

// TAG Solutions site footer — offices, contacts, and grouped links.
export default function FooterBig() {
  return (
    <footer className="mil-dark-bg">
      <img src="/img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content">
          <div className="row align-items-center mil-p-120-60">
            <div className="col-xl-6 mil-mb-60">
              <h3 className="mil-light mil-mb-15">Let&apos;s Build Something <span className="mil-accent">Great</span></h3>
              <p className="mil-light-soft">Subscribe for insights on AI, software, and cloud — no noise, just what moves your business forward.</p>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <NewsletterForm />
            </div>
          </div>
          <div className="mil-divider mil-light"></div>
          <div className="row justify-content-between mil-p-120-60">
            <div className="col-md-4 col-lg-4 col-xl-4 mil-mb-30">
              <img src={company.logoLight} alt={company.name} className="mil-logo mil-mb-30" style={{ width: "150px" }} />
              <p className="mil-light mil-light-soft" style={{ marginBottom: "30px" }}>
                {contact.offices.map((o, i) => (
                  <span key={i}>{o}<br /></span>
                ))}
              </p>
              <ul className="mil-simple-list mil-mb-15">
                {contact.phones.map((p) => (
                  <li key={p} className="mil-light"><span className="mil-light-soft">{p}</span></li>
                ))}
                {contact.emails.map((e) => (
                  <li key={e}><span className="mil-accent">{e.split("@")[0]}</span><span className="mil-light mil-light-soft">@{e.split("@")[1]}</span></li>
                ))}
              </ul>
            </div>
            <div className="col-md-8 col-lg-8 col-xl-8">
              <div className="row justify-content-end">
                <div className="col-6 col-lg-3 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-30">Solutions</h4>
                  <ul className="mil-hover-link-list mil-light">
                    {solutionGroups.map((g) => (
                      <li key={g.title}><Link href={g.href}>{g.title}</Link></li>
                    ))}
                    <li><Link href="/industries">By Industry</Link></li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-30">Services</h4>
                  <ul className="mil-hover-link-list mil-light">
                    {serviceList.slice(0, 5).map((s) => (
                      <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.shortTitle}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="col-6 col-lg-3 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-30">Company</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/success-stories">Success Stories</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/engagement">Engagement Models</Link></li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-30">Connect</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    {social.slice(0, 3).map((s) => (
                      <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">© {company.name} {company.founded}–2026.</p>
          <p className="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
