import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import CaseJourneyTracker from "@/components/casestudy/CaseJourneyTracker";
import { CaseHero, Section, Body, Steps, CardGrid, TechStack, Callout } from "@/components/casestudy/blocks";
import { pageMeta, caseStudySchema, breadcrumbSchema } from "@/lib/seo";
import data from "@/data/caseStudies/building-an-ai-scalp-hair-health-analysis-platform";

const path = `/success-stories/${data.slug}`;

export const metadata = pageMeta({ title: data.title, description: data.excerpt, path, image: data.heroImage, type: "article" });

const STEPS = [
  { id: "cs-overview", label: "The Idea" },
  { id: "cs-walkthrough", label: "Walkthrough" },
  { id: "cs-arch", label: "Architecture" },
  { id: "cs-challenges", label: "Challenges" },
  { id: "cs-roadmap", label: "Roadmap" },
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
      <CaseHero kicker={data.kicker} title={data.title} client={data.client} industry={data.industry} image={null} tags={data.tags} />

      <Section id="cs-overview" num={1} kicker="The Idea" title="A clinical-style read from" accent="a few phone photos">
        <Body paragraphs={data.idea} max="920px" />
      </Section>

      <Section id="cs-walkthrough" num={2} kicker="Product Walkthrough" deep title="From landing to" accent="a saved report">
        <Steps steps={data.walkthrough} />
      </Section>

      <Section id="cs-arch" num={3} kicker="Under the Hood" title="Next.js, Firebase, and a" accent="multimodal LLM">
        <Body paragraphs={data.architecture} />
        <div className="mil-mt-30"><TechStack items={data.techChips} /></div>
      </Section>

      <Section id="cs-challenges" num={4} kicker="Engineering Challenges" deep title="Ten problems, and how we" accent="solved them">
        <CardGrid items={data.challenges} />
      </Section>

      <Section id="cs-roadmap" num={5} kicker="From Ambition to Shipped" title="What shipped, and what we" accent="descoped">
        <Body paragraphs={data.roadmap} />
        <Callout icon="🧭">A full cross-browser QA pass, a formal performance audit, and deployment docs remain explicitly unfinished internally, despite the product already running live — a realistic state for a fast-moving first release, not a hidden one.</Callout>
      </Section>

      <CtaBand title="Ready to Be Our Next" highlight="Success Story?" description="Let's turn your challenge into your next success story." primary={{ label: "Start Your Project", href: "/contact" }} />
      <Footer />
    </div>
  );
}
