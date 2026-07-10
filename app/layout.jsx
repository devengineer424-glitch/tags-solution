import TemplateEffects from "@/components/TemplateEffects";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
  title: {
    default: "TAG Solutions — Technology & Global Solutions",
    template: "%s | TAG Solutions",
  },
  description:
    "Empowering your vision with end-to-end tech solutions. AI, software development, cloud engineering and more — trusted by global leaders.",
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
        {children}
        <TemplateEffects />
        <CookieConsent />
      </body>
    </html>
  );
}
