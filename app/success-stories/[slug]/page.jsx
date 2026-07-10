import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import Markdown from "@/components/Markdown";
import CaseStudySections from "@/components/CaseStudySections";
import JsonLd from "@/components/JsonLd";
import { getCaseStudy, caseStudyFallbackSlugs } from "@/lib/api";
import { pageMeta, caseStudySchema, breadcrumbSchema } from "@/lib/seo";

export const dynamicParams = true;

export async function generateStaticParams() {
  return caseStudyFallbackSlugs;
}

export async function generateMetadata({ params }) {
  const c = await getCaseStudy(params.slug);
  if (!c) return pageMeta({ title: "Success Story", path: `/success-stories/${params.slug}`, noindex: true });
  return pageMeta({
    title: c.title,
    description: c.excerpt,
    path: `/success-stories/${c.slug}`,
    image: c.image,
    type: "article",
  });
}

export default async function CaseStudyDetailPage({ params }) {
  const cs = await getCaseStudy(params.slug);
  if (!cs) notFound();

  const path = `/success-stories/${cs.slug}`;
  const jsonLd = [
    caseStudySchema({ title: cs.title, description: cs.excerpt, image: cs.image, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Success Stories", path: "/success-stories" },
      { name: cs.title, path },
    ]),
  ];

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />

      {/* hero */}
      <div className="mil-banner-sm-2 mil-deep-bg" style={{ height: "auto", minHeight: "440px" }}>
        <img src={cs.image} className="mil-background-image" style={{ objectPosition: "center" }} alt={cs.title} />
        <div className="mil-overlay"></div>
        <div className="mil-banner-content" style={{ paddingTop: "160px", paddingBottom: "70px" }}>
          <div className="container mil-relative">
            <Link href="/success-stories" className="mil-link link-left mil-light mil-mb-30"><i className="fas fa-arrow-left"></i><span>All Success Stories</span></Link>
            <h2 className="mil-uppercase mil-light mil-mb-30">{cs.title}</h2>
            <p className="mil-light-soft">
              {cs.client && <>Client: <span className="mil-light">{cs.client}</span></>}
              {cs.client && cs.industry && " · "}
              {cs.industry && <>Industry: <span className="mil-light">{cs.industry}</span></>}
            </p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* live API: typed sections body */}
      {cs.sections && <CaseStudySections sections={cs.sections} />}

      {/* results band (static fallback shape) */}
      {Array.isArray(cs.results) && cs.results.length > 0 && (
        <section className="mil-deep-bg mil-p-120-120">
          <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
          <div className="container">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">The Numbers</span>
            <h2 className="mil-mb-60">Results That <span className="mil-accent">Matter</span></h2>
            <div className="row justify-content-center mil-text-center">
              {cs.results.map((r, i) => (
                <div className="col-6 col-md-3 mil-mb-30" key={i}>
                  <h2 className="mil-accent mil-mb-15">{r.value}</h2>
                  <h6 className="mil-upper">{r.metric}</h6>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* results band end */}

      {/* challenge & solution */}
      {(cs.challenge || cs.solution) && (
        <section className="mil-p-120-90">
          <div className="container">
            <div className="row justify-content-between">
              {cs.challenge && (
                <div className="col-lg-6 mil-mb-60">
                  <h3 className="mil-mb-30">The Challenge</h3>
                  <p>{cs.challenge}</p>
                </div>
              )}
              {cs.solution && (
                <div className="col-lg-6 mil-mb-60">
                  <h3 className="mil-mb-30">Our Solution</h3>
                  <p>{cs.solution}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {/* challenge & solution end */}

      {/* article content */}
      {cs.content && (
        <section className="mil-p-0-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <Markdown content={cs.content} />
              </div>
            </div>
          </div>
        </section>
      )}
      {/* article content end */}

      {/* tags */}
      {Array.isArray(cs.tags) && cs.tags.length > 0 && (
        <div className="container mil-mb-120">
          <div className="mil-divider mil-mb-60"></div>
          <ul className="mil-tags">
            <li className="mil-h6">Tags:&nbsp;&nbsp; </li>
            {cs.tags.map((t) => (
              <li key={t}><span>{t}</span></li>
            ))}
          </ul>
        </div>
      )}
      {/* tags end */}

      <CtaBand />

      <Footer />
    </div>
  );
}
