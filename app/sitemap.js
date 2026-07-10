import { SITE_URL } from "@/lib/seo";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { getBlogs, getCaseStudies } from "@/lib/api";

// Revalidate the sitemap alongside the content it lists (5 min, matching lib/api).
export const revalidate = 300;

export default async function sitemap() {
  const now = new Date();

  // Static routes with rough priority weighting.
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
    { path: "/success-stories", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/engagement", priority: 0.7, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
    { path: "/sled", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${SITE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Dynamic content — falls back to the bundled set if the API is unavailable.
  const [blogs, cases] = await Promise.all([getBlogs(), getCaseStudies()]);

  const blogRoutes = blogs.map((b) => {
    const parsed = b.date ? new Date(b.date) : null;
    const lastModified = parsed && !isNaN(parsed.getTime()) ? parsed : now;
    return {
      url: `${SITE_URL}/blog/${b.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  const caseRoutes = cases.map((c) => ({
    url: `${SITE_URL}/success-stories/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...caseRoutes,
  ];
}
