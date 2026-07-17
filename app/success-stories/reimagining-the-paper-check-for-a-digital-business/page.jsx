import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import CaseJourneyTracker from "@/components/casestudy/CaseJourneyTracker";
import { CaseHero, Section, Body, Gallery, CardGrid } from "@/components/casestudy/blocks";
import { pageMeta, caseStudySchema, breadcrumbSchema } from "@/lib/seo";
import data from "@/data/caseStudies/reimagining-the-paper-check-for-a-digital-business";

const path = `/success-stories/${data.slug}`;

export const metadata = pageMeta({ title: data.title, description: data.excerpt, path, image: data.heroImage, type: "article" });

const STEPS = [
  { id: "cs-overview", label: "Overview" },
  { id: "cs-experience", label: "Experience" },
  { id: "cs-workflow", label: "Workflow" },
  { id: "cs-manage", label: "Manage" },
  { id: "cs-admin", label: "Admin" },
  { id: "cs-engineering", label: "Engineering" },
];

export default function Page() {
  const jsonLd = [
    caseStudySchema({ title: data.title, description: data.excerpt, image: data.heroImage, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Success Stories", path: "/success-stories" },
      { name: data.title, path },
    ]),
  ];

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />
      <CaseJourneyTracker steps={STEPS} />
      <CaseHero kicker={data.kicker} title={data.title} client={data.client} industry={data.industry} image={data.heroImage} tags={data.tags} />

      <Section id="cs-overview" num={1} kicker="The Challenge" title="A trusted payment method stuck" accent="decades in the past">
        <Body paragraphs={data.challenge} />
        <h3 className="mil-mb-30 mil-mt-30">The Solution</h3>
        <Body paragraphs={data.solution} />
      </Section>

      <Section id="cs-experience" num={2} kicker="Designing the Experience" deep title="Secure without feeling" accent="hostile">
        <Body paragraphs={data.experience} />
        <div className="mil-mt-30"><Gallery images={data.experienceGallery} frame="browser" /></div>
      </Section>

      <Section id="cs-workflow" num={3} kicker="The Core Workflow" title="Write, print, mail —" accent="then reconcile itself">
        <Body paragraphs={data.workflow} />
        <div className="mil-mt-30"><Gallery images={data.workflowGallery} frame="browser" /></div>
      </Section>

      <Section id="cs-manage" num={4} kicker="Records, Security & Connections" deep title="Banks, payees, and the rest of" accent="the business">
        <Body paragraphs={data.manage} />
        <div className="mil-mt-30"><Gallery images={data.manageGallery} frame="browser" /></div>
      </Section>

      <Section id="cs-admin" num={5} kicker="Operating at Scale" title="The admin side, and" accent="billing that gets out of the way">
        <Body paragraphs={data.admin} />
        <div className="mil-mt-30"><Gallery images={data.adminGallery} frame="browser" /></div>
      </Section>

      <Section id="cs-engineering" num={6} kicker="Under the Surface" deep title="The hard problems" accent="underneath">
        <CardGrid items={data.hardProblems} />
        <p className="cs-lead mil-mt-60">{data.result}</p>
      </Section>

      <CtaBand title="Ready to Be Our Next" highlight="Success Story?" description="Let's turn your challenge into your next success story." primary={{ label: "Start Your Project", href: "/contact" }} />
      <Footer />
    </div>
  );
}
