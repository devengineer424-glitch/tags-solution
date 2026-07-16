// Web App Manifest for the TAG Solutions PWA.
// Served by Next at /manifest.webmanifest and linked automatically from <head>.
export default function manifest() {
  return {
    name: "TAG Solutions — Technology & Global Solutions",
    short_name: "TAG Solutions",
    description:
      "Empowering your vision with end-to-end tech solutions. AI, software development, cloud engineering and more.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/tags/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/tags/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/tags/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
