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
      title: "Foundation",
      description:
        "Get clean books, accurate financials, and a solid foundation for profit improvement.",
      bullets: [
        "Restaurant-Optimized Chart of Accounts (COA)",
        "Monthly Bookkeeping & Reconciliation",
        "Monthly P&L + Balance Sheet",
        "Basic KPI Dashboard (Limited OS Access)",
        "30-Min Monthly Check-In",
      ],
      setupFee: 500,
      monthlyPrice: 800,
    },
    {
      tier: "Tier 2",
      icon: <FiPieChart />,
      title: "Profit System",
      description:
        "Full Profit Audit System with monthly diagnostics, insights, and strategic guidance.",
      bullets: [
        "Everything in Tier 1",
        "Full Profit Audit System",
        "Prime Cost, Food & Labor KPI Tracking",
        "Monthly Diagnostic Report",
        "Monthly Strategy Meeting + Full OS Access",
      ],
      setupFee: 1500,
      monthlyPrice: 1500,
      featured: true,
    },
    {
      tier: "Tier 3",
      icon: <GiMoneyStack />,
      title: "Profit OS + Automation",
      description:
        "Real-time automation, financial intelligence, and CFO-level support for maximum profitability.",
      bullets: [
        "Everything in Tier 2",
        "Real-Time Opportunity Alerts",
        "Vendor & Menu Margin Optimization",
        "Budgeting & Forecasting",
        "Priority Support + Quarterly Deep-Dive Audit",
      ],
      setupFee: 2500,
      monthlyPrice: 3500,
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container container">
        <h2 className="section-title">Services & Pricing</h2>
        <p className="section-subtitle">
          Most restaurants identify $2,000–$10,000/month in hidden profit opportunities.
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
                  {React.cloneElement(service.icon, { size: 40, color: "#c8102e" })}
                </div>
                <h3>{service.title}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className="service-description">{service.description}</p>

              {/* BULLETS */}
              <ul>
                {service.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="checkmark">✔</span> {b}
                  </li>
                ))}
              </ul>

              {/* SETUP FEE */}
              <div className="setup-fee">
                <strong>Setup Fee:</strong> ${service.setupFee.toLocaleString()}
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
              >
                Get My Free Profit Audit
              </a>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="setup-note">
          Setup fee includes COA setup, bookkeeping cleanup, vendor mapping, delivery platform mapping, and your initial Full Profit Audit.
        </p>
      </div>
    </section>
  );
};

export default Services;
