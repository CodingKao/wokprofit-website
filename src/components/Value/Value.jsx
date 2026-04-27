// src/components/Value/Value.jsx

import React from "react";
import "./Value.css";

const Value = () => {
  const valuePoints = [
    "Where your money is leaking",
    "What’s hurting your margins",
    "What to fix first",
    "How to maintain higher profit every month",
  ];

  return (
    <section id="value" className="value-section">
      <div className="value-container container">

        <span className="value-eyebrow">Why It Works</span>

        <h2 className="value-title">
          We Help You Increase Profit in 30 Days — Guaranteed.
        </h2>

        <p className="value-subtitle">
          WokProfit gives you controller‑level financial analysis, restaurant‑specific dashboards,
          and a profit‑first system that reveals exactly what’s hurting your margins.
        </p>

        <ul className="value-list">
          {valuePoints.map((point, index) => (
            <li key={index}>
              <span className="checkmark">✔</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="value-statement">
          <strong>Most restaurants recover $3,000–$15,000/month</strong> in preventable losses.
        </div>

        <a href="#contact" className="value-cta btn-primary">
          Get Your Free Profit Audit
        </a>

      </div>
    </section>
  );
};

export default Value;
