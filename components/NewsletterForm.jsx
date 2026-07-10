"use client";

import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";

// Newsletter subscribe form used in the footer. POSTs to the live API and
// shows an inline success/error state.
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done | error

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return <p className="mil-light mil-accent">Thanks — you&apos;re subscribed! 🎉</p>;
  }

  return (
    <form className="mil-subscribe-form" onSubmit={submit}>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="mil-button mil-accent-bg" disabled={status === "loading"}>
        {status === "loading" ? "Subscribing…" : "Subscribe Now"}
      </button>
      {status === "error" && (
        <p className="mil-text-sm mil-light" style={{ marginTop: "10px" }}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
