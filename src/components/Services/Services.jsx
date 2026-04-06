import React, { useState } from "react";
import "./Services.css";

// React icons
import { LuCalculator } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";

const Services = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly

  const services = [
    {
      icon: <LuCalculator />,
      title: "Profit Visibility",
      description: "We build and manage a custom financial dashboard that gives you complete visibility into your restaurant’s performance—so you can make smarter, faster decisions.",
      bullets: [
        "Monthly Bookkeeping (accurate, clean, and investor-ready)",
        "Food Cost Tracking (identify hidden leaks and control margins)",
        "Prime Cost Tracking (your most important metric, simplified)",
        "Expense & Cost Category Analysis (see exactly where your money is going each month)",
        "Monthly Profit Reports (clear, actionable breakdown of performance)",
      ],
      monthlyPrice: 800,
    },
    {
      icon: <FiPieChart />,
      title: "Profit Optimization",
      description:
        "We go beyond tracking and actively optimize your restaurant’s pricing, costs, and operations to increase margins and eliminate inefficiencies.",
      bullets: [
        "Everything in Profit Visibility",
        "Menu Pricing Optimization (price for profit, not guesswork)",
        "Food Cost Reduction Strategy (cut unnecessary expenses)",
        "Labor Cost Optimization (align staffing with revenue)",
        "High-Margin Item Identification (push what makes you money)",
      ],
      monthlyPrice: 1500,
      featured: true,
    },
    {
      icon: <GiMoneyStack />,
      title: "Profit Advisory",
      description: "For restaurant owners serious about scaling profit, reducing inefficiencies, and building a predictable, high-margin operation.",
      bullets: [
        "Everything in Profit Optimization",
        "Advanced Menu Engineering (profit-focused pricing & item performance)",
        "Budgeting & Forecasting (monthly + quarterly projections)",
        "Actuals vs Budget Analysis 🔥 (track performance vs plan, identify gaps fast)",
        "KPI Financial Dashboard (real-time performance tracking)",
      ],
      monthlyPrice: 3500,
    },
  ];

  const getPriceDisplay = (monthly) => {
    if (billingCycle === "monthly") {
      return <span className="price-main">${monthly.toLocaleString()}/mo</span>;
    } else {
      const yearlyPrice = monthly * 12;
      const discounted = Math.round(yearlyPrice * 0.9);
      return (
        <>
          <span className="price-original">${yearlyPrice.toLocaleString()}/yr</span>
          <span className="price-discounted">${discounted.toLocaleString()}/yr</span>
        </>
      );
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container container">
        <h2 className="section-title">Services & Pricing</h2>
        <p className="section-subtitle">
          Most restaurants identify $2,000–$10,000/month in hidden profit opportunities.
        </p>

        {/* MONTHLY / YEARLY TOGGLE */}
        <div className="pricing-toggle">
          <span
            className={billingCycle === "monthly" ? "active" : ""}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </span>

          <div
            className={`toggle-switch ${billingCycle === "yearly" ? "active" : ""}`}
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
          >
            <div className="toggle-circle"></div>
          </div>

          <span
            className={billingCycle === "yearly" ? "active" : ""}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly <span className="discount">10% Off</span>
          </span>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card ${service.featured ? "featured" : ""}`}
            >
              {service.featured && (
                <div className="recommended-tag">Recommended</div>
              )}

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

              {/* PRICE */}
              <div className="service-price">{getPriceDisplay(service.monthlyPrice)}</div>

              {/* CTA BUTTON */}
              <a href="#pricing" className="btn-primary">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
