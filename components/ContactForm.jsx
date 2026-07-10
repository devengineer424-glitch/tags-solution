"use client";

import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";

// Contact form — POSTs to the live API `/contact-messages/` with a light retry
// for serverless cold-starts, and shows inline success / error states.
const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | loading | done | error

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    let attempt = 0;
    while (attempt < 2) {
      try {
        const res = await fetch(`${API_BASE_URL}/contact-messages/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setStatus("done");
          setForm(EMPTY);
          return;
        }
      } catch {
        /* retry once for cold start */
      }
      attempt += 1;
    }
    setStatus("error");
  };

  if (status === "done") {
    return (
      <div className="mil-complete-message">
        <h4 className="mil-mb-15">Thank you! 🎉</h4>
        <p className="mil-text-lg">We&apos;ve received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="mil-contact-form" onSubmit={submit}>
      <div className="row">
        <div className="col-md-6">
          <div className="mil-input-frame mil-mb-30">
            <label><span className="mil-light">Name</span><span className="mil-accent">Required</span></label>
            <input type="text" placeholder="Your name" value={form.name} onChange={update("name")} required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mil-input-frame mil-mb-30">
            <label><span className="mil-light">Email Address</span><span className="mil-accent">Required</span></label>
            <input type="email" placeholder="you@company.com" value={form.email} onChange={update("email")} required />
          </div>
        </div>
        <div className="col-12">
          <div className="mil-input-frame mil-mb-30">
            <label><span className="mil-light">Subject</span><span className="mil-light-soft">Optional</span></label>
            <input type="text" placeholder="How can we help?" value={form.subject} onChange={update("subject")} />
          </div>
        </div>
        <div className="col-12">
          <div className="mil-input-frame mil-mb-30">
            <label><span className="mil-light">Message</span><span className="mil-accent">Required</span></label>
            <textarea placeholder="Tell us about your project" value={form.message} onChange={update("message")} required style={{ minHeight: "140px", paddingTop: "15px" }}></textarea>
          </div>
        </div>
        <div className="col-12">
          <p className="mil-text-sm mil-light-soft mil-mb-30">We will process your personal information in accordance with our Privacy Policy.</p>
          <button type="submit" className="mil-button mil-accent-bg mil-fw" disabled={status === "loading"}>
            <span>{status === "loading" ? "Sending…" : "Send Message Now"}</span>
          </button>
          {status === "error" && (
            <p className="mil-text-sm mil-light mil-mt-15">Something went wrong. Please try again or email us directly.</p>
          )}
        </div>
      </div>
    </form>
  );
}
