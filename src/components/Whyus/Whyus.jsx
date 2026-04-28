import React from "react";
import "./Whyus.css";

const Whyus = () => {
  const points = [
    "We show you exactly where profit is leaking — in minutes, not months",
    "Clear, restaurant‑specific dashboards that turn numbers into decisions",
    "A profit‑first system built to improve margins every single month",
    "Weekly visibility into food cost, labor, pricing, and operating expenses",
    "Actionable recommendations — not generic reports or accounting jargon",
  ];

  return (
    <section id="whyus" className="whyus-section">
      <div className="whyus-container container">

        <span className="whyus-eyebrow">Why Restaurants Choose Wok Profit</span>

        <h2 className="whyus-title">
          You don’t need more reports.<br />
          <span className="highlight">You need clarity — and a system that shows what to fix next.</span>
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
