import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import Markdown from "@/components/Markdown";
import JsonLd from "@/components/JsonLd";
import { getBlog, blogFallbackSlugs } from "@/lib/api";
import { pageMeta, articleSchema, breadcrumbSchema } from "@/lib/seo";

export const dynamicParams = true;

export async function generateStaticParams() {
  return blogFallbackSlugs;
}

export async function generateMetadata({ params }) {
  const p = await getBlog(params.slug);
  if (!p) return pageMeta({ title: "Article", path: `/blog/${params.slug}`, noindex: true });
  return pageMeta({
    title: p.title,
    description: p.excerpt,
    path: `/blog/${p.slug}`,
    image: p.image,
    type: "article",
  });
}

export default async function BlogDetailPage({ params }) {
  const post = await getBlog(params.slug);
  if (!post) notFound();

  const ts = post.text_sections || null;

  const path = `/blog/${post.slug}`;
  const jsonLd = [
    articleSchema({
      title: post.title,
      description: post.excerpt,
      image: post.image,
      author: post.author,
      date: post.date,
      path,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ]),
  ];

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />

      {/* hero */}
      <div className="mil-banner-sm-2 mil-deep-bg" style={{ height: "auto", minHeight: "440px" }}>
        <img src={post.image} className="mil-background-image" style={{ objectPosition: "center" }} alt={post.title} />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
          <div className="container mil-relative">
            <Link href="/blog" className="mil-link link-left mil-light mil-mb-30"><i className="fas fa-arrow-left"></i><span>All Articles</span></Link>
            {post.category && <span className="mil-suptitle mil-accent mil-mb-30">{post.category}</span>}
            <h2 className="mil-up-font mil-light mil-mb-30">{post.title}</h2>
            <p className="mil-light-soft">
              {post.author}{post.author && post.date && " · "}{post.date}
            </p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* article */}
      <section className="mil-blog mil-p-120-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              {post.content && <Markdown content={post.content} />}

              {ts && ts.introduction && (
                <div className="mil-mb-60">
                  <h3 className="mil-mb-30">Introduction</h3>
                  <p>{ts.introduction}</p>
                </div>
              )}

              {ts && ts.current_landscape && (
                <div className="mil-mb-60">
                  <h3 className="mil-mb-30">The Current Landscape</h3>
                  <p>{ts.current_landscape}</p>
                </div>
              )}

              {post.highlight_box && (post.highlight_box.title || post.highlight_box.content) && (
                <div className="mil-icon-box-2 mil-deep-bg mil-mb-60" style={{ padding: "40px", borderLeft: "3px solid var(--accent, #6c4cf1)" }}>
                  {post.highlight_box.title && <h5 className="mil-accent mil-mb-15">{post.highlight_box.title}</h5>}
                  {post.highlight_box.content && <p>{post.highlight_box.content}</p>}
                </div>
              )}

              {ts && ts.my_perspective && (
                <div className="mil-mb-60">
                  <h3 className="mil-mb-30">My Perspective</h3>
                  <p>{ts.my_perspective}</p>
                </div>
              )}

              {Array.isArray(post.steps) && post.steps.length > 0 && (
                <div className="mil-mb-60">
                  <h3 className="mil-mb-30">Steps</h3>
                  <ol className="mil-list-2" style={{ listStyle: "decimal", paddingLeft: "20px" }}>
                    {post.steps.map((s, i) => (
                      <li key={i} className="mil-mb-15">
                        <span className="mil-dark" style={{ fontWeight: 600 }}>{s.title}</span>
                        {s.description && <p className="mil-mb-0">{s.description}</p>}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {Array.isArray(post.info_cards) && post.info_cards.length > 0 && (
                <div className="row mil-mb-30">
                  {post.info_cards.map((card, i) => (
                    <div className="col-md-6 mil-mb-30" key={i}>
                      <div className="mil-icon-box-2 mil-deep-bg" style={{ padding: "30px", height: "100%" }}>
                        {card.title && <h5 className="mil-mb-15">{card.title}</h5>}
                        {card.content && <p>{card.content}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {ts && ts.why_this_matters && (
                <div className="mil-mb-60">
                  <h3 className="mil-mb-30">Why This Matters</h3>
                  <p>{ts.why_this_matters}</p>
                </div>
              )}

              {post.quote && post.quote.content && (
                <blockquote className="mil-mb-60">
                  <p className="mil-text-lg mil-mb-20">{post.quote.content}</p>
                  {post.quote.author && <span className="mil-h4 mil-font-3 mil-accent">-&nbsp;{post.quote.author}</span>}
                </blockquote>
              )}

              {post.cta && (post.cta.title || post.cta.description) && (
                <div className="mil-mb-30">
                  <div className="mil-divider mil-mb-30"></div>
                  {post.cta.title && <h5 className="mil-mb-15">{post.cta.title}</h5>}
                  {post.cta.description && <p>{post.cta.description}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* article end */}

      <CtaBand />

      <Footer />
    </div>
  );
}
