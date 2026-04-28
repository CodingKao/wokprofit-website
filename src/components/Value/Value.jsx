import React from "react";
import "./Value.css";

const Value = () => {
  return (
    <section className="value-section">
      <div className="value-container">

        <span className="value-eyebrow">Why Restaurants Choose Us</span>

        <h2 className="value-title">
          We Help You Increase Profit in 30 Days — Guaranteed
        </h2>

        <p className="value-subtitle">
          Wok Profit gives you controller‑level financial analysis, restaurant‑specific dashboards,
          and a profit‑first system that reveals exactly where your money is leaking.
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
            How to maintain higher profit every month
          </li>
        </ul>

        <div className="value-statement">
          Most restaurants recover <strong>$3,000–$15,000/month</strong> in preventable losses
          once they implement our system.
        </div>

        <a href="#onboarding" className="value-cta btn-primary">
          Start Your Profit Audit
        </a>

      </div>
    </section>
  );
};

export default Value;
