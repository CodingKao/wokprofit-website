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
          We Help You Increase Profit in 30 Days — Guaranteed
        </h2>

        <p className="value-subtitle">
          Wok Profit gives you a clear, easy-to-understand breakdown of your numbers —
          showing you exactly where money is slipping away and what’s holding your profit back.
        </p>

        <p className="value-transition">
          Here’s what we make clear for you right away:
        </p>

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
          Most restaurants recover <strong>$3,000–$15,000/month</strong> in preventable losses
          once they implement our system.
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
