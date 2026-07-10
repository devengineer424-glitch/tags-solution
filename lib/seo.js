// Centralised SEO helpers for TAG Solutions.
// One place to build Next.js Metadata objects (OpenGraph, Twitter, canonical)
// and JSON-LD structured data so every page stays consistent.
import { company, contact, social } from "@/data/site";

// Production canonical origin. Override via env for previews/staging.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.tagsolutionsltd.com"
).replace(/\/$/, "");

export const SITE_NAME = company.name;

// Default social share image. TODO: replace with a purpose-built 1200x630
// /tags/og-default.jpg for better link previews; using the logo for now.
const DEFAULT_OG_IMAGE = "/tags/tags-logo.png";

// Build an absolute URL from a site-relative path (or pass through absolutes).
export function absoluteUrl(path = "/") {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

// Build a full Next.js Metadata object for a page.
// `title` is a plain string; the root template appends "| TAG Solutions".
// Pass `titleAbsolute: true` for the home page to skip the template.
export function pageMeta({
  title,
  description,
  path = "/",
  image,
  type = "website",
  titleAbsolute = false,
  noindex = false,
} = {}) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE);
  const desc = description || company.description;

  return {
    title: titleAbsolute && title ? { absolute: title } : title,
    description: desc,
    alternates: { canonical: url },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: title || SITE_NAME,
      description: desc,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title || SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: title || SITE_NAME,
      description: desc,
      images: [ogImage],
    },
  };
}

// ---- JSON-LD builders -----------------------------------------------------

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    alternateName: company.short,
    url: SITE_URL,
    logo: absoluteUrl(company.logo),
    description: company.description,
    foundingDate: company.founded,
    email: contact.emails?.[0],
    telephone: contact.phones?.[0],
    address: (contact.offices || []).map((office) => ({
      "@type": "PostalAddress",
      addressLocality: office,
    })),
    sameAs: (social || [])
      .map((s) => s.href)
      .filter((href) => href && href !== "#"),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    description: company.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

// BreadcrumbList from an ordered list of { name, path } crumbs.
export function breadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description || service.heroDescription,
    url: absoluteUrl(path),
    image: absoluteUrl(service.image),
    serviceType: service.shortTitle || service.title,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: (contact.offices || []).map((o) => o),
  };
}

export function articleSchema({ title, description, image, author, date, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: image ? absoluteUrl(image) : undefined,
    author: { "@type": author && author !== company.name ? "Person" : "Organization", name: author || company.name },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: { "@type": "ImageObject", url: absoluteUrl(company.logo) },
    },
    datePublished: date || undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
  };
}

export function caseStudySchema({ title, description, image, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? absoluteUrl(image) : undefined,
    author: { "@type": "Organization", name: company.name },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: { "@type": "ImageObject", url: absoluteUrl(company.logo) },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
  };
}

export function faqSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
