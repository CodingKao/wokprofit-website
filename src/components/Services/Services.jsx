// src/components/Services/Services.jsx
import React from "react";
import "./Services.css";

// React icons
import { LuCalculator } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      title: "Bookkeeping",
      icon: <LuCalculator />,
      bullets: ["Accurate P&L Tracking", "Balance Sheet Management", "Daily Reconciliations"],
    },
    {
      title: "Controller",
      icon: <FiPieChart />,
      bullets: ["Prime Cost Analysis", "Budget vs Actual Reporting", "Sales Performance Dashboard"],
      featured: true,
    },
    {
      title: "Profit Optimization",
      icon: <GiMoneyStack />,
      bullets: ["Menu Engineering", "Contribution Margin Analysis", "Break-even Strategy"],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container container">
        <h2 className="section-title">Specialized Financial Solutions</h2>
        <p className="section-subtitle">
          Tailored intelligence for the unique demands of Asian hospitality.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card ${service.featured ? "featured" : ""}`}
            >
              {/* ICON */}
              <div className="service-icon-box">
                {React.cloneElement(service.icon, { size: 40, color: "#c8102e" })}
              </div>

              {/* TITLE */}
              <h3>{service.title}</h3>

              {/* BULLETS */}
              <ul>
                {service.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="checkmark">✔</span> {b}
                  </li>
                ))}
              </ul>

              {/* LINK */}
              <a href="#pricing" className="btn btn-link">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;