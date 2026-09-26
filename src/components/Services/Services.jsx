// src/components/Services/Services.jsx
import React from "react";
import "./Services.css";

import { LuCalculator } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";

const coreServices = [
  {
    tier: "Tier 1",
    icon: <LuCalculator />,
    title: "See the numbers",
    bullets: [
      "Monthly books that match a restaurant",
      "Food, labor, and leftover profit — in one page",
      "A short call to walk the month",
      "What changed vs. last month",
    ],
    setupFee: 1000,
    monthlyPrice: 800,
  },
  {
    tier: "Tier 2",
    icon: <FiPieChart />,
    title: "Fix the leaks",
    bullets: [
      "Everything in See the numbers",
      "Which dishes make money — and which don’t",
      "Schedule and vendor cost review",
      "A written list of what to change this month",
    ],
    setupFee: 1000,
    monthlyPrice: 1500,
    featured: true,
  },
  {
    tier: "Tier 3",
    icon: <GiMoneyStack />,
    title: "Plan ahead",
    bullets: [
      "Everything in Fix the leaks",
      "Budget and forecast for the next quarter",
      "Help negotiating vendors",
      "Priority support when something breaks",
    ],
    setupFee: 1000,
    monthlyPrice: 3500,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container container">
        <h2 className="section-title">Services & pricing</h2>

        <p className="section-subtitle">
          First month: we clean the books and do the first review — $1,000 on
          every plan. Most owners start with Fix the leaks. We can scale up or
          down after the first 90 days.
        </p>

        <div className="services-grid">
          {coreServices.map((service) => (
            <div
              key={service.title}
              className={`service-card ${service.featured ? "featured" : ""}`}
            >
              {service.featured && (
                <div className="recommended-tag">Most owners start here</div>
              )}

              <div className="tier-label">{service.tier}</div>

              <div className="service-header">
                <div className="service-icon-box">
                  {React.cloneElement(service.icon, {
                    size: 36,
                    color: "#c8102e",
                  })}
                </div>

                <h3>{service.title}</h3>
              </div>

              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className="checkmark">✔</span> {bullet}
                  </li>
                ))}
              </ul>

              <div className="setup-fee">
                First month: we clean the books and do the first review — $
                {service.setupFee.toLocaleString()}
              </div>

              <div className="service-price">
                <span className="price-label">Monthly:</span>{" "}
                <span className="price-main">
                  ${service.monthlyPrice.toLocaleString()}
                </span>
              </div>

              <a href="/#contact" className="btn-outline service-card-cta">
                Ask about this plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
