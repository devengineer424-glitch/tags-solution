// Service worker for the TAG Solutions PWA, powered by Serwist (Workbox-based).
// Compiled by @serwist/next during `next build`; disabled in `next dev`.
import { defaultCache } from "@serwist/next/worker";
import {
  Serwist,
  StaleWhileRevalidate,
  ExpirationPlugin,
  CacheableResponsePlugin,
} from "serwist";

// Cache blog & case-study content from the external API: serve the cached copy
// instantly and refresh it in the background, so content stays visible offline.
// This complements the static fallbacks already bundled in /data.
const apiCache = {
  matcher: ({ url }) => url.hostname.endsWith("tagsb.vercel.app"),
  handler: new StaleWhileRevalidate({
    cacheName: "tags-api",
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 }),
    ],
  }),
};

const serwist = new Serwist({
  // Precache list injected at build time (app shell + static chunks).
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  // Our external-API rule first, then Serwist's Next-tuned defaults (pages,
  // RSC, /_next/static, images, fonts, google fonts, etc.).
  runtimeCaching: [apiCache, ...defaultCache],
  // When a navigation can't be served from network or cache, show the offline page.
  fallbacks: {
    entries: [
      {
        url: "/~offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();
