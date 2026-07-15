// Animated "growth trajectory" illustration for the About page's Story & Mission
// section, replacing the old stock rocket image. Pure SVG + CSS motion (see the
// .mil-mission-* rules in public/css/tags.css) — no JS, and every animation is
// disabled under prefers-reduced-motion. An ascending curve draws itself over a
// faint grid, milestone nodes pulse in sequence, and a glowing node climbs the
// path via CSS offset-path.

// Single source of truth for the curve: used by the visible line, the shaded
// area beneath it, and the climbing node's offset-path.
const PATH = "M60 472 C 168 455 214 356 292 300 C 372 243 430 176 508 92";

// Milestone dots sit on the curve (endpoints, the C→C join, and the two segment
// midpoints), lighting up on a staggered delay so growth reads as a sequence.
const NODES = [
  { cx: 60, cy: 472, delay: "0s" },
  { cx: 187, cy: 401, delay: "0.55s" },
  { cx: 292, cy: 300, delay: "1.1s" },
  { cx: 401, cy: 206, delay: "1.65s" },
  { cx: 508, cy: 92, delay: "2.2s" },
];

// Background "stars" for depth, twinkling out of phase.
const STARS = [
  { cx: 110, cy: 120, r: 1.4, delay: "0s" },
  { cx: 182, cy: 78, r: 1, delay: "0.8s" },
  { cx: 356, cy: 122, r: 1, delay: "1.7s" },
  { cx: 432, cy: 150, r: 1.6, delay: "1.4s" },
  { cx: 476, cy: 300, r: 1.2, delay: "0.5s" },
  { cx: 150, cy: 250, r: 1, delay: "2s" },
  { cx: 92, cy: 360, r: 1.3, delay: "1.1s" },
  { cx: 500, cy: 420, r: 1.4, delay: "0.3s" },
  { cx: 250, cy: 150, r: 1, delay: "2.3s" },
];

export default function MissionGraphic() {
  return (
    <svg
      className="mil-mission-graphic"
      viewBox="0 0 560 560"
      role="img"
      aria-label="An upward growth trajectory with milestones lighting up as it climbs"
    >
      <defs>
        <linearGradient id="mil-mission-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b222c" />
          <stop offset="1" stopColor="#10151c" />
        </linearGradient>
        <linearGradient id="mil-mission-line" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#f57c00" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ff9d3c" />
        </linearGradient>
        <linearGradient id="mil-mission-area" x1="0" y1="80" x2="0" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f57c00" stopOpacity="0.26" />
          <stop offset="1" stopColor="#f57c00" stopOpacity="0" />
        </linearGradient>
        <filter id="mil-mission-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="mil-mission-clip">
          <rect x="0" y="0" width="560" height="560" rx="16" />
        </clipPath>
      </defs>

      <rect x="0" y="0" width="560" height="560" rx="16" fill="url(#mil-mission-panel)" />

      <g clipPath="url(#mil-mission-clip)">
        {/* faint grid */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          {[70, 140, 210, 280, 350, 420, 490].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="560" />
          ))}
          {[70, 140, 210, 280, 350, 420, 490].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="560" y2={y} />
          ))}
        </g>

        {/* twinkling stars */}
        <g fill="#ffffff">
          {STARS.map((s, i) => (
            <circle key={i} className="mil-mission-star" cx={s.cx} cy={s.cy} r={s.r} style={{ animationDelay: s.delay }} />
          ))}
        </g>

        {/* shaded area under the curve */}
        <path d={`${PATH} L 508 520 L 60 520 Z`} fill="url(#mil-mission-area)" />

        {/* trajectory line (draws itself in) */}
        <path
          className="mil-mission-line"
          d={PATH}
          fill="none"
          stroke="url(#mil-mission-line)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#mil-mission-glow)"
        />

        {/* milestone nodes */}
        {NODES.map((n, i) => (
          <circle
            key={i}
            className="mil-mission-node"
            cx={n.cx}
            cy={n.cy}
            r="6"
            fill="#ff9d3c"
            style={{ animationDelay: n.delay }}
          />
        ))}

        {/* glowing node that climbs the path */}
        <circle
          className="mil-mission-comet"
          cx="0"
          cy="0"
          r="7"
          fill="#ffffff"
          filter="url(#mil-mission-glow)"
          style={{ offsetPath: `path('${PATH}')` }}
        />
      </g>

      {/* labels — real growth metrics rising along the climb, culminating in the
          hero figure at the top (no founding date). */}
      <text
        x="40"
        y="56"
        fill="rgba(255,255,255,0.5)"
        fontFamily="Syne, sans-serif"
        fontSize="15"
        fontWeight="600"
        letterSpacing="2.5"
      >
        OUR TRAJECTORY
      </text>

      {/* supporting milestone tags along the curve */}
      <text
        x="212"
        y="392"
        fill="rgba(255,255,255,0.7)"
        fontFamily="Syne, sans-serif"
        fontSize="15"
        fontWeight="600"
      >
        12 Countries
      </text>
      <text
        x="248"
        y="284"
        textAnchor="end"
        fill="rgba(255,255,255,0.7)"
        fontFamily="Syne, sans-serif"
        fontSize="15"
        fontWeight="600"
      >
        95% Retention
      </text>

      {/* hero metric at the top of the climb */}
      <text
        x="494"
        y="70"
        textAnchor="end"
        fill="#ff9d3c"
        fontFamily="Syne, sans-serif"
        fontSize="30"
        fontWeight="700"
      >
        215+
      </text>
      <text
        x="494"
        y="90"
        textAnchor="end"
        fill="rgba(255,255,255,0.6)"
        fontFamily="Sora, sans-serif"
        fontSize="13"
        fontWeight="400"
      >
        Projects Delivered
      </text>

      {/* subtle border to match the card look */}
      <rect x="0.5" y="0.5" width="559" height="559" rx="16" fill="none" stroke="rgba(255,255,255,0.08)" />
    </svg>
  );
}
