"use client";

import { useEffect, useRef, useState } from "react";

// Animated counter. Parses a value like "215+", "95%", "12", "$1B+" into a
// numeric part (animated 0 → target) plus a prefix/suffix that stay fixed.
// Non-numeric values (e.g. "Zero") render as-is. Counts up once, when the
// element first scrolls into view.
export default function CountUp({ value, duration = 1600 }) {
  const match = String(value).match(/^(\D*)(\d[\d,.]*)(.*)$/);
  const prefix = match ? match[1] : "";
  const numStr = match ? match[2].replace(/,/g, "") : "";
  const target = match ? parseFloat(numStr) : null;
  const suffix = match ? match[3] : "";
  // Preserve decimal places (e.g. "4.9/5" must not round to "5/5").
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const format = (n) => (decimals ? n.toFixed(decimals) : String(Math.round(n)));

  const [display, setDisplay] = useState(() => format(0));
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(format(eased * target));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  if (target === null) return <>{value}</>;

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
