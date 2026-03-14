// src/components/Services/Services.jsx
import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Bookkeeping",
      bullets: ["Accurate P&L Tracking", "Balance Sheet Management", "Daily Reconciliations"],
    },
    {
      title: "Controller",
      bullets: ["Prime Cost Analysis", "Budget vs Actual Reporting", "Sales Performance Dashboard"],
      featured: true,
    },
    {
      title: "Profit Optimization",
      bullets: ["Menu Engineering", "Contribution Margin Analysis", "Break-even Strategy"],
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">Specialized Financial Solutions</h2>
        <p className="section-subtitle">
          Tailored intelligence for the unique demands of Asian hospitality.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className={`service-card ${service.featured ? "featured" : ""}`}>
              <h3>{service.title}</h3>
              <ul>
                {service.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <a href="#pricing" className="btn btn-link">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;