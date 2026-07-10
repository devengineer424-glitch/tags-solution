import TemplateEffects from "@/components/TemplateEffects";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationSchema, websiteSchema } from "@/lib/seo";

const DEFAULT_TITLE = "TAG Solutions — Technology & Global Solutions";
const DEFAULT_DESCRIPTION =
  "Empowering your vision with end-to-end tech solutions. AI, software development, cloud engineering and more — trusted by global leaders.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | TAG Solutions",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TAG Solutions",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/tags/tags-logo.png", width: 1200, height: 630, alt: "TAG Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/tags/tags-logo.png"],
  },
  icons: {
    icon: [
      { url: "/tags/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/tags/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/tags/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/tags/favicon-180.png", sizes: "180x180" },
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* bootstrap grid css */}
        <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
        {/* font awesome css */}
        <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
        {/* swiper css */}
        <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
        {/* itsulu css */}
        <link rel="stylesheet" href="/css/style.css" />
        {/* TAG Solutions overrides (must load after style.css) */}
        <link rel="stylesheet" href="/css/tags.css" />
      </head>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <TemplateEffects />
        <CookieConsent />
      </body>
    </html>
  );
}
