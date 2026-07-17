// Registry of code-served (local) case studies. These are rendered by their own
// custom pages under app/success-stories/<slug>/ and take precedence over the
// API. Everything not listed here still comes from the live API.

import buildingForTeams from "./building-for-teams-not-just-prompts";
import dinnerClub from "./building-the-plumbing-behind-a-private-dinner-club-platform";
import scalpHair from "./building-an-ai-scalp-hair-health-analysis-platform";
import paperCheck from "./reimagining-the-paper-check-for-a-digital-business";
import housingMarket from "./mapping-the-us-housing-market-a-mobile-data-platform";

export const localCaseStudies = [
  buildingForTeams,
  dinnerClub,
  scalpHair,
  paperCheck,
  housingMarket,
];

export const localCaseStudySlugs = localCaseStudies.map((c) => c.slug);

// Listing-card shape (matches what the /success-stories grid consumes).
export function localCaseStudyCards() {
  return localCaseStudies.map((c) => ({
    slug: c.slug,
    title: c.title,
    client: c.client || "",
    industry: c.industry || "",
    excerpt: c.excerpt || "",
    image: c.listImage || c.heroImage,
    tags: c.tags || [],
  }));
}
