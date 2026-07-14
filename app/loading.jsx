import Loader from "@/components/Loader";

// Global route-level loading UI. Next.js renders this automatically as a
// Suspense fallback during navigation and server data fetching, sitewide.
export default function Loading() {
  return <Loader />;
}
