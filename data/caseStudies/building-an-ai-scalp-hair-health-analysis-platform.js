const base = "/case-studies/building-an-ai-scalp-hair-health-analysis-platform";

export const scalpHair = {
  slug: "building-an-ai-scalp-hair-health-analysis-platform",
  title: "Building an AI Scalp & Hair-Health Analysis Platform",
  kicker: "Health Tech & AI Diagnostics",
  client: "Confidential Client",
  industry: "Health Tech & AI Diagnostics",
  excerpt:
    "A no-signup AI platform that turns a few guided phone photos into a Norwood-scale hair-loss read, a dermatological scalp analysis, graft/cost estimates, and a ranked clinic directory — built on Next.js, Firebase, and a hosted multimodal LLM.",
  heroImage: `${base}/01-landing-hero.png`,
  listImage: `${base}/04-results-overview.png`,
  tags: ["AI Diagnostics", "Computer Vision", "Health Tech", "Next.js", "Firebase", "Multimodal LLM", "Face Mesh", "Prompt Engineering"],

  idea: [
    "Hair loss is one of those things people research obsessively but rarely act on — mostly because the first real step, a clinical consultation, feels like a big, expensive commitment just to find out “how bad is it, actually?” We set out to remove that barrier entirely: open the site, take a few guided photos, and get a clinical-style read in under a minute. No sign-up, no waiting room.",
    "The product captures a short set of face and scalp photos, runs them through a multimodal AI vision pipeline, and returns a Norwood-scale classification, a dermatological (“trichoscopy”) read of the scalp, an estimated graft count and cost range, and a ranked list of nearby clinics — all in a tabbed report that can be saved, downloaded as a PDF, or shared with a link. It's a Next.js app on Firebase, with a real-time face-mesh model running client-side for capture guidance and a hosted multimodal LLM doing the clinical reasoning server-side.",
  ],

  walkthrough: [
    { img: `${base}/01-landing-hero.png`, frame: "browser", title: "Landing Page", body: "Sells the promise in one screen — a clinical-grade result from just a camera, in ~30 seconds, photos never stored on a server. Three CTAs cover the three ways people arrive: ready to act, cautious but willing, or just researching." },
    { img: `${base}/02-camera-capture.png`, frame: "phone", title: "Guided Photo Capture", body: "Closer to a face-ID unlock than a photo booth: a live face-mesh model checks the pose against an on-screen guide and fires the shutter after two seconds of stillness — no button. Scalp close-ups invert the logic and wait until no face is detected." },
    { img: `${base}/03-analyzing.png`, frame: "phone", title: "Analysis in Progress", body: "The pipeline chains a face-landmark pass, several AI classification calls, and clinical calculations. Progress is modeled honestly — real pre-flight steps complete visibly, then the bar advances on an estimate that only moves forward and stalls short of 100% until the real response lands." },
    { img: `${base}/04-results-overview.png`, frame: "phone", title: "Results Dashboard", body: "A stage classification with a confidence score front and center, a four-stat summary (graft count, golden-ratio deviation, symmetry, recovery estimate), a cost comparison across geographies, and AI-generated suggestions personalized to the user's stage and intake answers." },
    { img: `${base}/05-trichoscopy.png`, frame: "phone", title: "Trichoscopy — the Dermatological Read", body: "For users who provide a scalp close-up, a deeper AI pass produces a clinical-style trichoscopy report: density and diameter-variation measurements, follicular/vascular findings, and a primary diagnostic impression with differentials. Gated behind a free account." },
    { img: `${base}/06-hairline-design.png`, frame: "phone", title: "Hairline Design", body: "For anyone weighing a transplant, the product renders a proposed hairline — distance from the glabella, temporal angle, transition-zone width — computed against measured facial geometry and Rule-of-Thirds / golden-ratio conventions." },
    { img: `${base}/07-clinics.png`, frame: "phone", title: "Clinic Directory", body: "A searchable, sortable directory ranks clinics by proximity, surfacing specialties, price tier, estimated per-graft cost, and direct call/website actions — turning “I now know my situation” into “here's who to call.”" },
    { img: `${base}/08-onboarding.png`, frame: "phone", title: "Optional Health Intake", body: "A skippable questionnaire — family history, hair-care habits, lifestyle, medical background — feeds directly into the personalization layer: the care-tips generator and AI suggestion cards read from these answers when available." },
  ],

  architecture: [
    "Frontend: Next.js (App Router) + TypeScript + Tailwind, Zustand for client state, and a real-time face-mesh model running entirely in-browser for capture guidance.",
    "Backend: Firebase Auth plus a non-default named Firestore database for accounts and saved reports, with serverless API routes for the AI pipeline, PDF generation, and clinic/location lookups.",
    "AI layer: a hosted multimodal LLM handles both the Norwood classification and the trichoscopy read, driven by heavily engineered prompts rather than a fine-tuned model — the entire clinical behavior lives in prompt design, output validation, and a chain of fallback models.",
  ],
  techChips: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Firebase (Auth + Firestore)", "Multimodal LLM", "In-browser Face Mesh", "PDF generation"],

  challenges: [
    { title: "A deterministic clinical classifier", text: "Rewrote the prompt as an explicit decision tree with hard per-stage criteria, a default to least-severe absent evidence, and a numeric confidence rubric — then validated required clinical fields separately from “valid JSON.”" },
    { title: "A model that was over-cautious", text: "Trichoscopy returned near-zero confidence on legible photos. We added an override: if any scalp/hair is visible, confidence must be ≥3–4/10, with uncertainty expressed via differentials — plus a worked density-counting method." },
    { title: "Fallible external AI dependencies", text: "Every AI capability has a primary model plus an ordered fallback chain, swappable via env vars. A 404 skips to the next candidate; a 429 backs off. Best-effort steps degrade gracefully instead of 500-ing." },
    { title: "Auto-capture without a shutter button", text: "A live face-landmark model checks three signals per frame — face inside the guide, head rotation matching the requested angle, and two continuous seconds of stillness — before firing. Scalp shots invert the face check." },
    { title: "A constraint that only bites on real data", text: "Firestore can't store an array-of-arrays — exactly the density-heatmap shape. A recursive sanitizer now strips those fields (and raw photo data) before every write." },
    { title: "localStorage quota exhaustion", text: "Persisted history with base64 payloads silently hit the browser quota. The fix: exclude the heaviest fields from serialization, cap history by age and count, and retry against a smaller set on quota errors." },
    { title: "An honest progress bar", text: "Modeled as two phases — real, fast pre-flight steps at their true pace, then an estimate-driven phase that only moves forward and stalls short of 100% until the response lands. Never frozen, never lying." },
    { title: "Public sharing on an owner-only model", text: "Rather than loosening strict security rules (how health data goes world-readable), a narrow server endpoint with elevated credentials handles the one legitimate public-read case for share links." },
    { title: "Two measurement systems", text: "A fast in-browser landmark model and a holistic server-side vision model don't fully agree yet. We shipped explicit about which figures come from which, and kept the landmark model independently testable — reconciliation is scheduled follow-up." },
    { title: "Duplicated ranking logic", text: "“Rank clinics by distance” was implemented three times across screens. Flagged as tech debt and the textbook case for extracting shared domain logic the moment a second call site appears." },
  ],

  roadmap: [
    "Internal planning showed a considerably bigger original vision than what shipped first — a useful before/after for anyone building something similar.",
    "Shipped: guided multi-angle capture, Norwood classification, trichoscopy-style analysis, graft/cost estimation, a branded PDF, a public share link, accounts with saved history and trend charts, a clinic directory, and an education library. Deliberately descoped for v1: a community feed, a “simulate my results” editor, in-app booking, a paid tier, a packaged mobile app, and A/B instrumentation.",
  ],
};

export default scalpHair;
