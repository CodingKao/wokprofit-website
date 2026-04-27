// src/components/Services/Services.jsx

import React from "react";
import "./Services.css"; // 👈 use Services.css here

import { LuCalculator } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";

const Services = () => {
  const steps = [
    {
      step: "Step 1",
      icon: <LuCalculator />,
      title: "Profit Audit + Setup",
      price: "$1,500 one-time",
      description:
        "We diagnose your profit leaks, build your baseline, and give you a clear 30‑day plan to increase profit.",
      bullets: [
        "Full profit leak audit (food cost, labor, rent, operating expenses)",
        "Benchmarking against target restaurant cost ranges",
        "Estimated monthly savings + optimized profit potential",
        "Restaurant‑specific dashboard setup",
        "Clear 30‑day profit action plan",
      ],
    },
    {
      step: "Step 2",
      icon: <FiPieChart />,
      title: "Monthly Profit Optimization",
      price: "$1,000/month",
      featured: true,
      description:
        "We help you maintain and grow your margins every month with ongoing monitoring and optimization.",
      bullets: [
        "Monthly profit review & performance tracking",
        "Food cost, labor, and expense leak monitoring",
        "Menu pricing & margin improvement recommendations",
        "Updated action plans based on your numbers",
        "Accountability so improvements don’t fade",
      ],
    },
    {
      step: "Optional Upgrade",
      icon: <GiMoneyStack />,
      title: "Advanced Advisory",
      price: "Custom pricing",
      description:
        "For multi‑location owners or restaurants with growth plans needing deeper financial strategy.",
      bullets: [
        "Budgeting & forecasting",
        "Actuals vs budget analysis",
        "Multi‑location KPI dashboards",
        "Expansion & scaling support",
        "CFO‑level strategy without the full‑time CFO cost",
      ],
    },
  ];

  return (
    <section id="services" className="services-vertical-section">
      <div className="services-vertical-container container">

        <span className="sv-eyebrow">The Wok Profit System</span>

        <h2 className="sv-title">A Clear, Guided Profit Optimization Journey</h2>

        <p className="sv-subtitle">
          Follow a simple, structured path: diagnose your profit leaks, optimize your margins,
          and scale with confidence.
        </p>

        <div className="sv-timeline">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`sv-step-card ${step.featured ? "featured" : ""}`}
            >
              <div className="sv-step-header">
                <div className="sv-step-icon">
                  {React.cloneElement(step.icon, {
                    size: 36,
                    color: "#c8102e",
                  })}
                </div>

                <div className="sv-step-info">
                  <span className="sv-step-label">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p className="sv-step-description">{step.description}</p>
                </div>
              </div>

              <div className="sv-step-price">{step.price}</div>

              <ul className="sv-step-list">
                {step.bullets.map((bullet, i) => (
                  <li key={i}>
                    <span className="checkmark">✔</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {index < steps.length - 1 && (
                <div className="sv-connector">
                  <div className="sv-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="sv-guarantee">
          <strong>Profit Guarantee:</strong> Increase profit by $1,500 in the first 30 days —
          or your first month of ongoing optimization is free.
        </div>

        <a href="#contact" className="sv-cta btn-primary">
          Get Your Free Profit Audit
        </a>

      </div>
    </section>
  );
};

export default Services;
