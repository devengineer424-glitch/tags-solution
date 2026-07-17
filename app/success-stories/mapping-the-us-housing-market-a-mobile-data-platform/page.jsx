import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import CaseJourneyTracker from "@/components/casestudy/CaseJourneyTracker";
import { CaseHero, Section, Body, CardGrid, Gallery, TechStack } from "@/components/casestudy/blocks";
import { pageMeta, caseStudySchema, breadcrumbSchema } from "@/lib/seo";
import data from "@/data/caseStudies/mapping-the-us-housing-market-a-mobile-data-platform";

const path = `/success-stories/${data.slug}`;

export const metadata = pageMeta({ title: data.title, description: data.excerpt, path, image: data.heroImage, type: "article" });

const STEPS = [
  { id: "cs-overview", label: "Overview" },
  { id: "cs-challenge", label: "Challenge" },
  { id: "cs-built", label: "Built" },
  { id: "cs-impact", label: "Impact" },
  { id: "cs-tech", label: "Tech" },
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
  const noNum = (arr) => arr.map((x) => ({ ...x, number: false }));

  return (
    <div className="mil-wrapper">
      <JsonLd data={jsonLd} />
      <Header transparent />
      <CaseJourneyTracker steps={STEPS} />
      <CaseHero kicker={data.kicker} title={data.title} client={data.client} industry={data.industry} image={null} tags={data.tags} />

      <Section id="cs-overview" num={1} kicker="Overview" title="An interactive map of the whole" accent="U.S. housing market">
        <Body paragraphs={data.overview} max="920px" />
      </Section>

      <Section id="cs-challenge" num={2} kicker="The Challenge" deep title="Every U.S. ZIP code," accent="on a phone">
        <Body paragraphs={data.challenge} />
      </Section>

      <Section id="cs-built" num={3} kicker="What We Built" title="The right detail at the" accent="right zoom">
        <CardGrid items={noNum(data.built)} wide />
        <div className="mil-mt-60"><Gallery images={data.gallery} frame="phone" /></div>
      </Section>

      <Section id="cs-impact" num={4} kicker="Impact" deep title="Responsive from the country down to a" accent="single ZIP">
        <CardGrid items={noNum(data.impact)} />
      </Section>

      <Section id="cs-tech" num={5} kicker="Tech Stack" title="What it's" accent="built on">
        <TechStack items={data.tech} />
      </Section>

      <CtaBand title="Ready to Be Our Next" highlight="Success Story?" description="Let's turn your challenge into your next success story." primary={{ label: "Start Your Project", href: "/contact" }} />
      <Footer />
    </div>
  );
}
