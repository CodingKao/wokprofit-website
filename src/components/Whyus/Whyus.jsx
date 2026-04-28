// src/components/Whyus/Whyus.jsx

import React from "react";
import "./Whyus.css";

const Whyus = () => {
  const points = [
    "Controller‑level financial expertise",
    "Master’s in Finance + 5+ years in accounting & analysis",
    "Profit‑first approach focused on margins & cash flow",
    "Restaurant‑specific dashboards & decision systems",
    "CFO‑level strategy without the full‑time overhead",
  ];

  return (
    <section id="whyus" className="whyus-section">
      <div className="whyus-container container">

        <span className="whyus-eyebrow">Why Restaurant Owners Choose WokProfit</span>

        <h2 className="whyus-title">
          Most accountants tell you what happened.<br />
          <span className="highlight">WokProfit tells you what’s hurting your margins — and what to fix next.</span>
        </h2>

        <ul className="whyus-list">
          {points.map((point, index) => (
            <li key={index}>
              <span className="checkmark">✔</span>
              {point}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Whyus;
