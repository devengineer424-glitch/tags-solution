// Data-access layer for TAG Solutions.
// Blogs and case studies come from the live API; if it's unavailable (the
// serverless backend cold-starts and can time out), we fall back to the
// bundled static data so pages always render.
import { blogsFallback } from "@/data/blogsFallback";
import { caseStudiesFallback } from "@/data/caseStudiesFallback";
import { localCaseStudyCards, localCaseStudySlugs } from "@/data/caseStudies";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://tagsb.vercel.app";

const FALLBACK_BLOG_IMG = "/tags/blog-1.jpg";
const FALLBACK_CASE_IMG = "/tags/case-study-1.jpg";

async function fetchJson(path, { timeout = 8000 } = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      signal: controller.signal,
      // Revalidate every 5 minutes so content stays fresh without per-request cost.
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? data : data ? [data] : null;
  } catch {
    return null;
  } finally {
    clearTimeout(id);
  }
}

// ---- Blogs ----------------------------------------------------------------

// Normalize both the rich API shape and the flat fallback shape into one object.
export function normalizeBlog(raw) {
  const meta = raw.meta || {};
  const hero = raw.hero || {};
  return {
    slug: raw.slug,
    title: raw.title || "Untitled",
    excerpt: hero.subtitle || raw.excerpt || raw.description || "",
    image: meta.intro_img || hero.image || raw.image || FALLBACK_BLOG_IMG,
    author: meta.author || raw.author || "TAGS Solutions",
    date: meta.date || raw.date || "",
    category: meta.category || raw.category || "General",
    content: raw.content || null,
    // keep the rich blocks so the detail page can render them if present
    text_sections: raw.text_sections || null,
    highlight_box: raw.highlight_box || null,
    steps: raw.steps || null,
    info_cards: raw.info_cards || null,
    quote: raw.quote || null,
    cta: raw.cta || null,
  };
}

export async function getBlogs() {
  const data = await fetchJson("/blogs/");
  const list = data && data.length ? data : blogsFallback;
  return list.map(normalizeBlog);
}

export async function getBlog(slug) {
  const blogs = await getBlogs();
  const found = blogs.find((b) => b.slug === slug);
  if (found) return found;
  // Fall back to the bundled static set so the guaranteed slugs always resolve
  // even when the live API is up and returns a different set of posts.
  const fb = blogsFallback.find((b) => b.slug === slug);
  return fb ? normalizeBlog(fb) : null;
}

// ---- Case studies ---------------------------------------------------------

export function normalizeCaseStudy(raw) {
  return {
    slug: raw.slug,
    title: raw.title || "Untitled",
    client: raw.client || "",
    industry: raw.industry || "",
    excerpt: raw.excerpt || raw.description || "",
    image: raw.image || raw.hero?.image || FALLBACK_CASE_IMG,
    tags: raw.tags || [],
    challenge: raw.challenge || null,
    solution: raw.solution || null,
    results: raw.results || null,
    content: raw.content || null,
    // The live API delivers the body as a typed sections array; the static
    // fallback uses the flat fields above. Keep whichever is present.
    sections: Array.isArray(raw.sections) && raw.sections.length ? raw.sections : null,
  };
}

export async function getCaseStudies() {
  const data = await fetchJson("/case-studies/");
  const list = data && data.length ? data : caseStudiesFallback;
  // Code-served (local) case studies win: list them first and drop any API
  // entry that shares their slug so there's no duplicate card.
  const apiCards = list
    .map(normalizeCaseStudy)
    .filter((c) => !localCaseStudySlugs.includes(c.slug));
  return [...localCaseStudyCards(), ...apiCards];
}

export async function getCaseStudy(slug) {
  const items = await getCaseStudies();
  const found = items.find((c) => c.slug === slug);
  if (found) return found;
  // Fall back to the bundled static set so the guaranteed slugs always resolve
  // even when the live API is up and returns a different set of case studies.
  const fb = caseStudiesFallback.find((c) => c.slug === slug);
  return fb ? normalizeCaseStudy(fb) : null;
}

// ---- Slugs for static generation (fallback set guarantees a build) --------
export const blogFallbackSlugs = blogsFallback.map((b) => ({ slug: b.slug }));
export const caseStudyFallbackSlugs = caseStudiesFallback.map((c) => ({ slug: c.slug }));
