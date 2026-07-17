"use client";

// Sticky, scroll-spying step tracker for the custom case-study pages. Given a
// list of { id, label } steps (each `id` matching a section's DOM id), it fixes
// a progress bar below the header, highlights the section in view, and lets the
// visitor jump between chapters. Mirrors the tracker used by the API-driven
// journey layout so all case studies feel like one system.
//
// Fixed (not sticky) because the template wraps pages in .mil-wrapper{overflow:
// hidden}, which disables position:sticky.

import { useEffect, useRef, useState } from "react";

export default function CaseJourneyTracker({ steps = [] }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [headerH, setHeaderH] = useState(100);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const measure = () => {
      const h = document.querySelector(".mil-top-panel");
      if (h) setHeaderH(Math.round(h.getBoundingClientRect().height));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const trackH = trackRef.current ? trackRef.current.getBoundingClientRect().height : 54;
      const line = headerH + trackH + 24;
      let pos = 0;
      let firstTop = Infinity;
      let lastBottom = -Infinity;
      steps.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (i === 0) firstTop = r.top;
        lastBottom = r.bottom;
        if (r.top <= line) pos = i;
      });
      setActive(pos);
      setVisible(firstTop <= line && lastBottom > headerH + trackH);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps, headerH]);

  const jump = (i) => {
    const el = document.getElementById(steps[i]?.id);
    const trackH = trackRef.current ? trackRef.current.getBoundingClientRect().height : 54;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH - trackH - 16, behavior: "smooth" });
  };

  if (!steps || steps.length < 2) return null;
  const pct = ((active + 1) / steps.length) * 100;

  return (
    <nav ref={trackRef} className="cs-track" style={{ "--cs-hh": `${headerH}px`, display: visible ? "block" : "none" }} aria-label="Case study progress">
      <ol>
        {steps.map((s, i) => (
          <li key={s.id} className={i === active ? "is-active" : i < active ? "is-done" : ""}>
            <button type="button" onClick={() => jump(i)}>
              <span className="cs-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="cs-lab">{s.label}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="cs-track-m">
        <span className="cs-mnum">STEP {active + 1}/{steps.length}</span>
        <span className="cs-mlab">{steps[active]?.label}</span>
        <span className="cs-mbar"><i style={{ width: `${pct}%` }} /></span>
      </div>
    </nav>
  );
}
