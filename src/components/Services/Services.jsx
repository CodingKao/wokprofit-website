// src/components/Services/Services.jsx
import React from "react";
import "./Services.css";
import { AUDIT_LINK } from "../../config/Links";

// Icons
import { LuCalculator } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      tier: "Tier 1",
      icon: <LuCalculator />,
      title: "Profit Visibility",
      description:
        "Get clean books, accurate financials, and a solid foundation for profit improvement.",
      bullets: [
        "Restaurant-Optimized Chart of Accounts (COA)",
        "Monthly Bookkeeping & Reconciliation",
        "Monthly P&L + Balance Sheet",
        "Basic KPI Dashboard",
        "Monthly P&L Review",
      ],
      setupFee: 500,
      monthlyPrice: 800,
    },
    {
      tier: "Tier 2",
      icon: <FiPieChart />,
      title: "Profit Optimization",
      description:
        "Profit Optimization System Built to Identify and Fix Margin Leaks",
      bullets: [
        "Everything in Tier 1",
        "Improve Prime Cost Performance & Overall Profit Margins",
        "Increase Margin on High-Volume Menu Items",
        "Reduce Labor Waste & Scheduling Inefficiencies",
      ],
      setupLabel: "Profit Optimization Implementation",
      setupFee: 1500,
      monthlyPrice: 1500,
      featured: true,
    },
    {
      tier: "Tier 3",
      icon: <GiMoneyStack />,
      title: "Profit Advisory",
      description:
        "A complete restaurant profit advisory system focused on margin growth, operational efficiency, and long-term financial stability.",
      bullets: [
        "Everything in Tier 2",
        "Real-Time Opportunity Alerts",
        "Vendor & Menu Margin Optimization",
        "Budgeting & Forecasting",
        "Priority Support + Quarterly Deep-Dive Audit",
      ],
      setupLabel: "Financial Intelligence Deployment",
      setupFee: 2500,
      monthlyPrice: 3500,
    },
  ];

  const handleAuditClick = (serviceTitle) => {
    // GA4 Event Tracking
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

        {/* SERVICE CARDS */}
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card ${service.featured ? "featured" : ""}`}
            >
              {service.featured && (
                <div className="recommended-tag">Recommended</div>
              )}

              {/* TIER LABEL */}
              <div className="tier-label">{service.tier}</div>

              {/* ICON + TITLE */}
              <div className="service-header">
                <div className="service-icon-box">
                  {React.cloneElement(service.icon, {
                    size: 40,
                    color: "#c8102e",
                  })}
                </div>

                <h3>{service.title}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className="service-description">
                {service.description}
              </p>

              {/* BULLETS */}
              <ul>
                {service.bullets.map((bullet, index) => (
                  <li key={index}>
                    <span className="checkmark">✔</span> {bullet}
                  </li>
                ))}
              </ul>

              {/* SETUP FEE */}
              <div className="setup-fee">
                <strong>
                  {service.setupLabel || "Setup Fee"}:
                </strong>{" "}
                ${service.setupFee.toLocaleString()}
              </div>

              {/* MONTHLY PRICE */}
              <div className="service-price">
                <span className="price-main">
                  ${service.monthlyPrice.toLocaleString()}/mo
                </span>
              </div>

              {/* CTA */}
              <a
                href={AUDIT_LINK}
                className="btn-primary calc-cta"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleAuditClick(service.title)}
              >
                Get My Free Profit Audit
              </a>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="setup-note">
          Setup includes financial onboarding, operational mapping, KPI
          configuration, reporting infrastructure, and implementation of your
          restaurant profit system.
        </p>
      </div>
    </section>
  );
};

export default Services;