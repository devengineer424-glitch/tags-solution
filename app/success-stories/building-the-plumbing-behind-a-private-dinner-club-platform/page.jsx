import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import CaseJourneyTracker from "@/components/casestudy/CaseJourneyTracker";
import { CaseHero, Section, Kicker, Body, CardGrid, Gallery, Quote, Callout, Snapshot } from "@/components/casestudy/blocks";
import { pageMeta, caseStudySchema, breadcrumbSchema } from "@/lib/seo";
import data from "@/data/caseStudies/building-the-plumbing-behind-a-private-dinner-club-platform";

const path = `/success-stories/${data.slug}`;

export const metadata = pageMeta({ title: data.title, description: data.excerpt, path, image: data.heroImage, type: "article" });

const STEPS = [
  { id: "cs-overview", label: "Overview" },
  { id: "cs-roles", label: "Roles" },
  { id: "cs-payments", label: "Payments" },
  { id: "cs-reminders", label: "Reminders" },
  { id: "cs-admin", label: "Admin" },
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

      <Section id="cs-overview" num={1} kicker="The Problem" title="Dinner parties don't scale like" accent="social products">
        <Body paragraphs={data.problem} />
        <Snapshot items={data.snapshot} />
      </Section>

      <Section id="cs-roles" num={2} kicker="Roles" deep title="Five roles," accent="three independent axes" lead={data.rolesLead}>
        <CardGrid items={data.roles.map((r) => ({ ...r, number: false }))} />
        <div className="mil-mt-60"><Gallery images={data.rolesGallery} frame="phone" /></div>
        <div className="mil-mt-30"><Gallery images={data.onboardingGallery} frame="phone" /></div>
      </Section>

      <Section id="cs-payments" num={3} kicker="Payments" title="One price slider," accent="two ways to pay">
        <Body paragraphs={data.payments} />
        <div className="mil-mt-30 mil-mb-30"><Gallery images={data.paymentsGallery} frame="phone" /></div>
        <Quote quote={data.paymentsQuote} />
      </Section>

      <Section id="cs-reminders" num={4} kicker="Reminders" deep title="Nothing forgets to" accent="remind anyone">
        <Body paragraphs={data.reminders} />
        <div className="mil-mt-30"><Gallery images={data.remindersGallery} frame="phone" /></div>
      </Section>

      <Section id="cs-admin" num={5} kicker="Admin & Analytics" title="A back office that" accent="earns its keep">
        <Body paragraphs={data.admin} />
        <div className="mil-mt-30 cs-imgwrap"><img src={data.adminImage} alt="Admin dashboard" loading="lazy" /></div>
      </Section>

      <Section id="cs-roadmap" num={6} kicker="What's Next" title="Being straight about" accent="where we are">
        <Callout icon="🧭">{data.roadmap}</Callout>
      </Section>

      <CtaBand title="Ready to Be Our Next" highlight="Success Story?" description="Let's turn your challenge into your next success story." primary={{ label: "Start Your Project", href: "/contact" }} />
      <Footer />
    </div>
  );
}
