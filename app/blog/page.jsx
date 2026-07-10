import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import { getBlogs } from "@/lib/api";

export const metadata = {
  title: "Blog",
  description:
    "Perspectives on AI, software, cloud, and building products that scale.",
};

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <div className="mil-wrapper">
      <Header transparent />

      {/* hero */}
      <div className="mil-banner-sm mil-dark-bg">
        <img src="/img/deco/map.png" alt="background" className="mil-background-image" />
        <div className="mil-deco mil-deco-accent" style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}></div>
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <span className="mil-suptitle mil-accent mil-mb-30">Our Blog</span>
            <h1 className="mil-uppercase mil-light mil-mb-30">Insights &amp; Thinking</h1>
            <p className="mil-light-soft" style={{ maxWidth: "620px" }}>
              Perspectives on AI, software, cloud, and building products that scale.
            </p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* blog grid */}
      <section className="mil-blog mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
        <div className="container">
          <div className="row">
            {posts.map((b) => (
              <div className="col-lg-6 mil-mb-60" key={b.slug}>
                <Link href={`/blog/${b.slug}`} className="mil-card">
                  <div className="mil-cover-frame">
                    <img src={b.image} alt={b.title} />
                  </div>
                  <div className="mil-description">
                    <div className="mil-card-title">
                      {b.category && (
                        <ul className="mil-dot-list mil-text-sm mil-mb-15">
                          <li className="mil-accent">{b.category}</li>
                        </ul>
                      )}
                      <h4 className="mil-mb-20">{b.title}</h4>
                    </div>
                    <div className="mil-card-text">
                      <p className="mil-mb-20">{b.excerpt}</p>
                      <p className="mil-text-sm">
                        {b.author}{b.author && b.date && " · "}{b.date}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* blog grid end */}

      <CtaBand />

      <Footer />
    </div>
  );
}
