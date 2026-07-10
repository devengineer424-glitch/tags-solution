"use client";

import { useEffect, useState } from "react";

// Lightweight cookie-consent notice. Remembers the visitor's choice in
// localStorage so it only shows until they act. Styling is fully inline so it
// is self-contained and unaffected by external CSS caching.
const KEY = "tags-cookie-consent";
const ACCENT = "#f57c00";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const persist = (choice) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ ...choice, ts: new Date().toISOString() }));
    } catch {
      /* storage unavailable — dismiss for this session anyway */
    }
    setVisible(false);
  };

  if (!visible) return null;

  const acceptAll = () => persist({ essential: true, marketing: true });
  const rejectAll = () => persist({ essential: true, marketing: false });
  const savePrefs = () => persist({ essential: true, marketing });
  // Closing without choosing = continue without accepting (essential only),
  // per the notice copy. We don't store it, so it reappears next visit.
  const dismiss = () => setVisible(false);

  return (
    <div role="dialog" aria-label="Cookie notice" style={styles.wrap}>
      <div style={styles.header}>
        <h6 style={styles.title}>Notice</h6>
        <button type="button" onClick={dismiss} aria-label="Close" style={styles.close}>×</button>
      </div>

      <p style={styles.text}>
        We use cookies for essential functions and marketing. Click &ldquo;Accept&rdquo; or
        close this message to continue without accepting.
      </p>

      {customizing && (
        <div style={styles.prefs}>
          <label style={styles.prefRow}>
            <span style={styles.prefLabel}>Essential<span style={styles.prefHint}> · always on</span></span>
            <input type="checkbox" checked readOnly disabled style={styles.checkbox} />
          </label>
          <label style={styles.prefRow}>
            <span style={styles.prefLabel}>Marketing</span>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              style={{ ...styles.checkbox, accentColor: ACCENT }}
            />
          </label>
        </div>
      )}

      <div style={styles.actions}>
        {customizing ? (
          <button type="button" onClick={savePrefs} style={styles.btnGhost}>Save</button>
        ) : (
          <button type="button" onClick={() => setCustomizing(true)} style={styles.btnGhost}>Customize</button>
        )}
        <button type="button" onClick={rejectAll} style={styles.btnGhost}>Reject</button>
        <button type="button" onClick={acceptAll} style={styles.btnAccent}>Accept</button>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    right: "20px",
    maxWidth: "400px",
    zIndex: 9999,
    background: "#181e26",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "22px 24px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
    fontFamily: "Sora, sans-serif",
    color: "rgba(255,255,255,0.75)",
  },
  header: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" },
  title: { color: "#fff", fontFamily: "Syne, sans-serif", fontSize: "18px", fontWeight: 600, margin: 0 },
  close: {
    background: "none", border: "none", color: "rgba(255,255,255,0.5)",
    fontSize: "24px", lineHeight: 1, cursor: "pointer", padding: 0, marginLeft: "12px",
  },
  text: { fontSize: "13.5px", lineHeight: 1.6, margin: "0 0 18px" },
  prefs: { margin: "0 0 18px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "14px" },
  prefRow: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", padding: "6px 0" },
  prefLabel: { color: "#fff", fontSize: "14px" },
  prefHint: { color: "rgba(255,255,255,0.4)", fontSize: "12px" },
  checkbox: { width: "16px", height: "16px", cursor: "pointer" },
  actions: { display: "flex", flexWrap: "wrap", gap: "10px" },
  btnGhost: {
    flex: "1 1 auto", padding: "10px 14px", borderRadius: "40px", cursor: "pointer",
    background: "transparent", border: "1px solid rgba(255,255,255,0.25)", color: "#fff",
    fontFamily: "Sora, sans-serif", fontSize: "13px", fontWeight: 500,
  },
  btnAccent: {
    flex: "1 1 auto", padding: "10px 14px", borderRadius: "40px", cursor: "pointer",
    background: ACCENT, border: `1px solid ${ACCENT}`, color: "#121820",
    fontFamily: "Sora, sans-serif", fontSize: "13px", fontWeight: 600,
  },
};
