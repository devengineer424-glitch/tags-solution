"use client";

import { useEffect, useState } from "react";

// Small toast that reflects the connection state: shows a red bar while the
// browser is offline, then a brief green "back online" confirmation. Styling is
// fully inline so it is self-contained and unaffected by external CSS caching.
export default function OfflineIndicator() {
  // null = never been offline this session (render nothing).
  const [state, setState] = useState(null);

  useEffect(() => {
    const goOffline = () => setState("offline");
    const goOnline = () =>
      setState((prev) => (prev === "offline" ? "online" : prev));

    // Reflect the initial state (in case we load while already offline).
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      setState("offline");
    }

    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  // Auto-hide the "back online" confirmation after a few seconds.
  useEffect(() => {
    if (state !== "online") return;
    const id = setTimeout(() => setState(null), 3000);
    return () => clearTimeout(id);
  }, [state]);

  if (!state) return null;

  const offline = state === "offline";
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        ...styles.wrap,
        background: offline ? "#b3261e" : "#1e7d34",
      }}
    >
      <span style={styles.dot} />
      {offline
        ? "You’re offline — showing saved content."
        : "Back online."}
    </div>
  );
}

const styles = {
  wrap: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10000,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 18px",
    borderRadius: "40px",
    color: "#fff",
    fontFamily: "Sora, sans-serif",
    fontSize: "13.5px",
    fontWeight: 500,
    boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#fff",
    opacity: 0.9,
  },
};
