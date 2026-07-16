import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  // Service worker source and output location.
  swSrc: "app/sw.js",
  swDest: "public/sw.js",
  // Auto-register the service worker on the client; disabled in `next dev`.
  register: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // This is a converted static template: it deliberately uses plain <img> tags
  // and inline HTML entities. Don't fail production builds on those lint rules.
  eslint: { ignoreDuringBuilds: true },
  // "Case Studies" was renamed to "Success Stories"; keep old links working.
  async redirects() {
    return [
      { source: "/case-studies", destination: "/success-stories", permanent: true },
      { source: "/case-studies/:slug", destination: "/success-stories/:slug", permanent: true },
    ];
  },
};

export default withSerwist(nextConfig);
