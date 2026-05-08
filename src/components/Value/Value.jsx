// src/components/Value/Value.jsx

import React from "react";
import "./Value.css";
import { AUDIT_LINK } from "../../config/Links";

const Value = () => {
  return (
    <section id="value" className="value-section">
      <div className="container value-inner">
        <span className="value-eyebrow">Why Restaurants Choose Us</span>

        <h2 className="value-title">
          We Guarantee at Least $3,000 in Profit Opportunities in 30 Days
        </h2>

        <p className="value-subtitle">
          Wok Profit gives you a clear, easy‑to‑understand breakdown of your
          numbers — revealing exactly where money is leaking across food cost,
          labor, menu pricing, and vendors, and what’s holding your profit back.
        </p>

        <h3 className="value-transition">
          Here’s what we make clear for you right away:
        </h3>

        <ul className="value-list">
          <li>
            <span className="checkmark">✔</span>
            Where your money is leaking
          </li>
          <li>
            <span className="checkmark">✔</span>
            What’s hurting your margins
          </li>
          <li>
            <span className="checkmark">✔</span>
            What to fix first
          </li>
          <li>
            <span className="checkmark">✔</span>
            How to keep profit higher every month
          </li>
        </ul>

        <div className="value-statement">
          Most restaurants recover <strong>$3,000–$15,000/month</strong> in
          preventable losses once they implement our system.
        </div>

        <a
          href={AUDIT_LINK}
          className="btn-primary value-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get My Free Profit Audit
        </a>
      </div>
    </section>
  );
};

export default Value;
