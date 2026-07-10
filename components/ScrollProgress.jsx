"use client";

import { useEffect, useState } from "react";

// Site-wide scroll progress bar. Fixed to the bottom of the viewport, it fills
// left-to-right in the brand orange as the page scrolls down and shrinks back
// as it scrolls up. Purely decorative, so it's hidden from assistive tech.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    // Coalesce scroll/resize events into one update per animation frame.
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="mil-scroll-progress" aria-hidden="true">
      <div className="mil-scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
