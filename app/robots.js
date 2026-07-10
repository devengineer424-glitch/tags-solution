import { SITE_URL } from "@/lib/seo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Internal / non-indexable routes.
        disallow: ["/coming-soon", "/404"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
