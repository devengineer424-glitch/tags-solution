"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { serviceGroups, solutionGroups } from "@/data/site";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://tagsb.vercel.app";

// Static, always-available part of the search index (services, solutions,
// industries). Blogs and case studies are fetched from the API on first open.
function buildStaticIndex() {
  const seen = new Set();
  const out = [];
  const add = (type, title, href) => {
    const key = `${type}:${title.toLowerCase()}`;
    if (!title || seen.has(key)) return;
    seen.add(key);
    out.push({ type, title, href });
  };
  services.forEach((s) => add("Service", s.shortTitle, `/services/${s.slug}`));
  serviceGroups.forEach((g) => g.items.forEach((it) => add("Service", it.label, it.href)));
  solutionGroups.forEach((g) => g.items.forEach((it) => add("Solution", it.label, it.href)));
  industries.forEach((i) => add("Industry", i.title, `/industries/${i.slug}`));
  return out;
}

const SEARCH_SVG = (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z" />
  </svg>
);

const BADGE_BG = {
  Service: "rgba(245,124,0,.12)",
  Solution: "rgba(245,124,0,.12)",
  Industry: "rgba(18,24,32,.06)",
  Blog: "rgba(18,24,32,.06)",
  "Success Story": "rgba(18,24,32,.06)",
};

export default function SearchWidget() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [remote, setRemote] = useState([]); // blogs + case studies
  const [loaded, setLoaded] = useState(false);
  const inputRef = useRef(null);

  const staticIndex = useMemo(() => buildStaticIndex(), []);

  // Fetch blogs + case studies once, the first time the search opens.
  useEffect(() => {
    if (!open || loaded) return;
    let cancelled = false;
    (async () => {
      const fetchList = async (path) => {
        try {
          const res = await fetch(`${API_BASE_URL}${path}`);
          if (!res.ok) return [];
          const data = await res.json();
          return Array.isArray(data) ? data : [];
        } catch {
          return [];
        }
      };
      const [blogs, cases] = await Promise.all([fetchList("/blogs/"), fetchList("/case-studies/")]);
      if (cancelled) return;
      const entries = [
        ...blogs.filter((b) => b.slug && b.title).map((b) => ({ type: "Blog", title: b.title, href: `/blog/${b.slug}` })),
        ...cases.filter((c) => c.slug && c.title).map((c) => ({ type: "Success Story", title: c.title, href: `/success-stories/${c.slug}` })),
      ];
      setRemote(entries);
      setLoaded(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [open, loaded]);

  // Focus input on open; close on Escape; lock body scroll.
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const q = query.trim().toLowerCase();
  const results = q
    ? [...staticIndex, ...remote].filter((e) => e.title.toLowerCase().includes(q)).slice(0, 12)
    : [];

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <>
      <div className="mil-search-icon" role="button" tabIndex={0} aria-label="Search" style={{ cursor: "pointer" }}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(true)}
      >
        {SEARCH_SVG}
      </div>

      {open && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 10000,
            background: "rgba(18,24,32,.6)", backdropFilter: "blur(4px)",
            display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "12vh 20px 20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(680px, 100%)", background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,.35)", fontFamily: "Sora, sans-serif" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "18px 22px", borderBottom: "1px solid rgba(18,24,32,.08)" }}>
              <span style={{ color: "#f57c00", flexShrink: 0 }}>{SEARCH_SVG}</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, solutions, industries, blogs, success stories…"
                style={{ flex: 1, border: "none", outline: "none", fontSize: "17px", fontFamily: "Sora, sans-serif", color: "#121820", background: "transparent" }}
              />
              <button onClick={close} aria-label="Close search" style={{ border: "none", background: "none", fontSize: "26px", lineHeight: 1, color: "rgba(18,24,32,.5)", cursor: "pointer", flexShrink: 0 }}>×</button>
            </div>

            <div style={{ maxHeight: "52vh", overflowY: "auto" }}>
              {!q && (
                <p style={{ padding: "24px 22px", color: "rgba(18,24,32,.5)", fontSize: "14px", margin: 0 }}>
                  Start typing to search across the site.
                </p>
              )}
              {q && results.length === 0 && (
                <p style={{ padding: "24px 22px", color: "rgba(18,24,32,.5)", fontSize: "14px", margin: 0 }}>
                  No results for &ldquo;{query}&rdquo;{loaded ? "" : " — still loading articles…"}
                </p>
              )}
              {results.map((r, i) => (
                <Link
                  key={`${r.href}-${i}`}
                  href={r.href}
                  onClick={close}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 22px", borderBottom: "1px solid rgba(18,24,32,.05)", textDecoration: "none", color: "#121820" }}
                >
                  <span style={{ fontSize: "15px", fontWeight: 500 }}>{r.title}</span>
                  <span style={{ flexShrink: 0, fontSize: "11px", textTransform: "uppercase", letterSpacing: ".04em", color: r.type === "Service" || r.type === "Solution" ? "#f57c00" : "rgba(18,24,32,.5)", background: BADGE_BG[r.type] || "rgba(18,24,32,.06)", padding: "4px 10px", borderRadius: "20px" }}>{r.type}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
