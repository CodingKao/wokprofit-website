// src/components/Services/Services.jsx

import React from "react";
import "./Services.css";
import { AUDIT_LINK } from "../../config/Links";

import { LuCalculator } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";

const steps = [
  {
    step: "Step 1",
    icon: LuCalculator,
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
    icon: FiPieChart,
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
    icon: GiMoneyStack,
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

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container services-inner">

        <span className="services-eyebrow">The Wok Profit System</span>

        <h2 className="services-title">
          A Clear, Guided Profit Optimization Journey
        </h2>

        <p className="services-subtitle">
          Follow a simple, structured path: diagnose your profit leaks, optimize your margins,
          and scale with confidence.
        </p>

        <div className="services-timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className={`services-card ${step.featured ? "featured" : ""}`}
              >
                <div className="services-header">
                  <div className="services-icon">
                    <Icon size={32} color="#c8102e" />
                  </div>

                  <div className="services-info">
                    <span className="services-step">{step.step}</span>
                    <h3>{step.title}</h3>
                    <p className="services-description">{step.description}</p>
                  </div>
                </div>

                <div className="services-price">{step.price}</div>

                <ul className="services-list">
                  {step.bullets.map((bullet, i) => (
                    <li key={i}>
                      <span className="checkmark">✔</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {index < steps.length - 1 && (
                  <div className="services-connector">
                    <div className="services-line"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="services-guarantee">
          <strong>Profit Guarantee:</strong> Increase profit by $1,500 in the first 30 days —
          or your first month of ongoing optimization is free.
        </div>

        <a
          href={AUDIT_LINK}
          className="btn-primary services-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get My Free Profit Audit
        </a>

      </div>
    </section>
  );
};

export default Services;
