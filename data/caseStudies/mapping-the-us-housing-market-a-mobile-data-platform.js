const base = "/case-studies/mapping-the-us-housing-market-a-mobile-data-platform";

export const housingMarket = {
  slug: "mapping-the-us-housing-market-a-mobile-data-platform",
  title: "Mapping the U.S. Housing Market — A Mobile Data Platform",
  kicker: "Real Estate Analytics · React Native",
  client: "Confidential Client",
  industry: "Real Estate & PropTech",
  excerpt:
    "A real-estate market-intelligence app that turns official U.S. housing data into an interactive map — 90+ metrics for every state, metro, county and ZIP, from a national view down to a single ZIP code.",
  heroImage: `${base}/00-hero-banner.png`,
  listImage: `${base}/00-hero-banner.png`,
  tags: ["React Native", "Data Visualization", "Mapbox GL", "GraphQL", "PropTech"],

  overview: [
    "A real-estate market-intelligence app that turns official U.S. housing data into an interactive map — not listings, but the underlying market itself: home values, rents, inventory, and affordability trends for every state, metro area, county, and ZIP code in the country.",
    "Users zoom from a national view down to a single ZIP code and see a decade of historical trends, national rankings, and 90+ tracked metrics, all rendered live on a touch-friendly map. We led the mobile engineering end-to-end — architecture, data layer, and the map itself.",
  ],

  challenge: [
    "Most map apps show a manageable number of points — restaurants, listings, stores. This app had to show every U.S. ZIP code (30,000+) at once, each carrying dozens of statistics, on a device with a fraction of a server's memory and no guarantee of a fast connection.",
    "The map also had to feel instant: switching metrics, zooming from country to neighborhood, and filtering by value range all without a loading spinner. The honest engineering question was never “can we build a map with data on it” — it was “how much can we responsibly hold in memory on a phone, and how do we hide the rest until it's actually needed.”",
  ],

  built: [
    { title: "Four-tier geographic map", text: "State → Metro → County → ZIP, automatically switching resolution as the user zooms, rendered on self-hosted vector tiles — the right layer of detail at the right zoom level, no marker clustering." },
    { title: "A tiered data strategy", text: "State, metro and county data is fetched once and cached locally with a daily refresh. ZIP-level data — too large to ever fully cache — is streamed live and scoped to exactly what's on screen." },
    { title: "One shared map, ninety views", text: "Color coding is computed on-device from live data, so switching from “Home Value” to “Population Growth” is instant — no new map style to load." },
    { title: "A semantic GraphQL layer", text: "Cube.js powers both the map and a national leaderboard/ranking screen, plus downloadable PDF market reports." },
    { title: "Feed, subscriptions & push", text: "A market-focused news feed, native in-app-purchase subscriptions, and a push system with multi-device support and a remote-triggered force-update safety net." },
  ],

  gallery: [
    { src: `${base}/03-map.png`, alt: "Interactive map" },
    { src: `${base}/05-scorecard.png`, alt: "Market scorecard" },
    { src: `${base}/06-ranking.png`, alt: "National rankings" },
    { src: `${base}/04-map-search.png`, alt: "Map search" },
    { src: `${base}/07-filters.png`, alt: "Metric filters" },
    { src: `${base}/08-feed.png`, alt: "Market news feed" },
  ],

  impact: [
    { title: "Responsive at every zoom", text: "Went from “can we even show this much data on a phone” to a map that stays responsive from the whole country down to a single ZIP." },
    { title: "Bounded cold start", text: "Tiered caching cut cold-start loading to three small, bounded datasets — the unbounded ZIP layer never blocks the app from being usable." },
    { title: "Zero cost per metric", text: "A single rendering pipeline supports 90+ metrics with zero incremental infrastructure per metric — adding a data point is a data change, not a map change." },
  ],

  tech: ["React Native", "TypeScript", "Mapbox GL", "Apollo / GraphQL (Cube.js)", "Firebase", "Zustand + MMKV", "React Native IAP", "PostHog", "Sentry"],
};

export default housingMarket;
