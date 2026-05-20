import React from "react";
import "./EcosystemSection.css";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { LuCalculator } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi";
import { AUDIT_LINK } from "../../config/Links";

const stages = [
  {
    step: 1,
    badge: "Optional Add-On",
    icon: HiOutlineDeviceMobile,
    title: "Revenue Engine",
    description: "Modern tools that increase sales and reduce labor.",
    features: [
      "Mobile Ordering Website",
      "QR Code Ordering",
      "Loyalty & Rewards",
      "AI Upsell Engine",
      "POS Integration",
      "Website Analytics",
    ],
  },
  {
    step: 2,
    badge: "Tier 1",
    icon: LuCalculator,
    title: "Financial Visibility",
    description: "Clear visibility into food, labor, and prime cost.",
    features: [
      "Clean books",
      "Food cost tracking",
      "Labor cost tracking",
      "Prime cost visibility",
      "KPI dashboard",
    ],
  },
  {
    step: 3,
    badge: "Tier 2",
    icon: FiPieChart,
    title: "Profit Optimization",
    description: "Fix margin leaks and recover $3,000–$15,000/month.",
    features: [
      "Menu margin analysis",
      "Pricing optimization",
      "Labor scheduling improvements",
      "Vendor cost review",
      "Waste reduction",
    ],
  },
  {
    step: 4,
    badge: "Tier 3",
    icon: GiMoneyStack,
    title: "Profit Advisory",
    description: "Future-focused financial strategy and long-term support.",
    features: [
      "Forecasting",
      "Budgeting",
      "Actual vs. budget",
      "Vendor negotiation strategy",
      "Quarterly deep-dive audits",
    ],
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="ecosystem-section">
      <div className="container ecosystem-inner">
        <header className="ecosystem-header">
          <h2 className="ecosystem-title">The Wok Profit Ecosystem</h2>
          <div className="ecosystem-title-divider" aria-hidden="true" />
          <p className="ecosystem-subtitle">
            A complete system to help Asian restaurants increase revenue, control
            costs, and maximize profit.
          </p>
        </header>

        <div className="ecosystem-grid-container">
          <div className="ecosystem-grid">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <article key={stage.title} className="ecosystem-card">
                  <div className="ecosystem-card-accent" aria-hidden="true" />

                  <div className="ecosystem-card-header">
                    <span
                      className="ecosystem-step"
                      aria-label={`Stage ${stage.step}`}
                    >
                      {stage.step}
                    </span>

                    <div className="ecosystem-icon-box">
                      <Icon size={36} color="#c8102e" aria-hidden="true" />
                    </div>

                    <span className="ecosystem-badge">{stage.badge}</span>
                  </div>

                  <div className="ecosystem-card-body">
                    <h3 className="ecosystem-card-title">{stage.title}</h3>

                    <p className="ecosystem-card-description">
                      {stage.description}
                    </p>

                    <ul className="ecosystem-features">
                      {stage.features.map((feature) => (
                        <li key={feature}>
                          <span className="checkmark">✔</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="#services" className="ecosystem-learn-more">
                    Learn More
                    <FiArrowRight size={16} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <a
          href={AUDIT_LINK}
          className="btn-primary ecosystem-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get My Free Profit Audit
        </a>
      </div>
    </section>
  );
};

export default EcosystemSection;
