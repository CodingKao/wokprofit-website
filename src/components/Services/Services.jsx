// src/components/Services/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { AUDIT_LINK, REVENUE_ENGINE_PATH } from "../../config/Links";

import { LuCalculator } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";

const coreServices = [
  {
    tier: "Tier 1",
    icon: <LuCalculator />,
    title: "Profit Visibility",
    bullets: [
      "Restaurant-optimized chart of accounts",
      "Monthly bookkeeping & reconciliation",
      "Monthly P&L + balance sheet",
      "Food cost, labor cost, and prime cost tracking",
      "Basic KPI dashboard",
      "Monthly P&L review",
    ],
    setupLabel: "Setup Fee",
    setupFee: 500,
    monthlyPrice: 800,
  },
  {
    tier: "Tier 2",
    icon: <FiPieChart />,
    title: "Profit Optimization",
    bullets: [
      "Everything in Tier 1",
      "Prime cost improvement",
      "Menu margin optimization",
      "High-volume item pricing strategy",
      "Labor scheduling efficiency",
      "Vendor cost review",
      "Waste reduction",
      "Profit improvement roadmap",
    ],
    setupLabel: "Implementation Fee",
    setupFee: 1500,
    monthlyPrice: 1500,
    featured: true,
  },
  {
    tier: "Tier 3",
    icon: <GiMoneyStack />,
    title: "Profit Advisory",
    bullets: [
      "Everything in Tier 2",
      "Forecasting",
      "Budgeting",
      "Actual vs. budget tracking",
      "Vendor negotiation strategy",
      "Quarterly deep-dive audits",
      "Real-time opportunity alerts",
      "Priority support",
    ],
    setupLabel: "Deployment Fee",
    setupFee: 2500,
    monthlyPrice: 3500,
  },
];

const Services = () => {
  const handleAuditClick = (serviceTitle) => {
    if (window.gtag) {
      window.gtag("event", "profit_audit_cta_click", {
        event_category: "Lead Generation",
        event_label: serviceTitle,
      });
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container container">
        <h2 className="section-title">Services & Pricing</h2>

        <p className="section-subtitle">
          Most restaurants identify $2,000–$10,000/month in hidden profit
          opportunities.
        </p>


        <div className="services-grid">
          {coreServices.map((service) => (
            <div
              key={service.title}
              className={`service-card ${service.featured ? "featured" : ""}`}
            >
              {service.featured && (
                <div className="recommended-tag">Recommended</div>
              )}

              <div className="tier-label">{service.tier}</div>

              <div className="service-header">
                <div className="service-icon-box">
                  {React.cloneElement(service.icon, {
                    size: 40,
                    color: "#c8102e",
                  })}
                </div>

                <h3>{service.title}</h3>
              </div>

              <ul>
                {service.bullets.map((bullet, index) => (
                  <li key={index}>
                    <span className="checkmark">✔</span> {bullet}
                  </li>
                ))}
              </ul>

              <div className="setup-fee">
                <strong>{service.setupLabel}:</strong> $
                {service.setupFee.toLocaleString()}
              </div>

              <div className="service-price">
                <span className="price-label">Monthly:</span>{" "}
                <span className="price-main">
                  ${service.monthlyPrice.toLocaleString()}
                </span>
              </div>

              <a
                href={AUDIT_LINK}
                className="btn-primary service-card-cta"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleAuditClick(service.title)}
              >
                Get My Free Profit Audit
              </a>
            </div>
          ))}
        </div>

        <div className="services-divider" aria-hidden="true" />

        <div className="revenue-engine-cta-wrap">
          <Link to={REVENUE_ENGINE_PATH} className="btn-outline revenue-engine-link">
            Explore more services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
