"use client";

import Link from "next/link";
import Header from "@/components/Header";

// Shown by the service worker when a navigation can't be served from the
// network or cache. Themed to match the 404 page.
export default function OfflinePage() {
  return (
    <div className="mil-wrapper">
      <Header transparent fluid />

      <div className="mil-dark-bg mil-add-page">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "40vh", right: "10%", transform: "rotate(90deg)" }}
        ></div>
        <img src="/img/deco/map.png" alt="background" className="mil-map-bg" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="mil-text-center mil-mb-30">
                <h5 className="mil-light">Offline</h5>
                <h1 className="mil-light mil-404-number">
                  <i className="far fa-wifi-slash"></i>
                </h1>
                <h5 className="mil-light">
                  You&rsquo;re <span className="mil-accent">offline</span>
                </h5>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-404-text">
                <p className="mil-light-soft mil-mb-30">
                  This page isn&rsquo;t available offline yet. Pages you&rsquo;ve
                  already visited will still load — reconnect to see the rest.
                </p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mil-button mil-border mil-light mil-mb-30"
                >
                  <span>Try again</span>
                </button>
                <div>
                  <Link href="/" className="mil-link mil-light">
                    <span>Back to homepage</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mil-addition-bottom">
        <div className="container-fluid">
          <p className="mil-text-sm mil-light-soft">© TAG Solutions 2022–2026.</p>
          <p className="mil-text-sm mil-light-soft">All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
