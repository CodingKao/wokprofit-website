// src/components/Analytics/Analytics.jsx

import React from "react";
import "./Analytics.css";

const steps = [
  {
    step: "1",
    title: "Free look at your numbers",
    text: "Share a few figures. We point to food cost, labor, and menu items that may be costing you.",
  },
  {
    step: "2",
    title: "Books that match a restaurant",
    text: "We organize the accounts the way a kitchen actually runs — not a generic shop template.",
  },
  {
    step: "3",
    title: "A monthly sit-down",
    text: "Each month: what came in, what food and labor took, and a short list of what to change.",
  },
  {
    step: "4",
    title: "Fix the expensive problems first",
    text: "Menu, schedule, vendors, waste — we start with the items that move profit this month.",
  },
];

const Analytics = () => {
  return (
    <section id="how-it-works" className="analytics-section">
      <div className="container analytics-inner">
        <span className="analytics-eyebrow">How it works</span>

        <h2 className="analytics-title">Four steps. No new software.</h2>

        <p className="analytics-subtitle">
          You already have a POS and a stack of invoices. I read them with you
          and tell you what to fix next.
        </p>

        <div className="how-steps">
          {steps.map((item) => (
            <article key={item.step} className="how-step">
              <span className="how-step-number">{item.step}</span>
              <h3 className="how-step-title">{item.title}</h3>
              <p className="how-step-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
