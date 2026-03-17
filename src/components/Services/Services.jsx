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
      description: "Provide foundational clarity on finances.",
      bullets: [
        "Monthly Bookkeeping",
        "Bank & Credit Card Reconciliation",
        "Monthly P&L and Balance Sheet",
        "Cash Flow Summary",
        "Financial Reporting",
      ],
      monthlyPrice: 750,
    },
    {
      icon: <FiPieChart />,
      title: "Profit Optimization",
      description:
        "Use financial data to improve profitability and operational efficiency.",
      bullets: [
        "Everything in Profit Visibility",
        "Prime Cost Tracking",
        "Menu Cost Analysis",
        "Labor Cost Optimization",
        "Monthly Financial Insight",
      ],
      monthlyPrice: 1500,
      featured: true,
    },
    {
      icon: <GiMoneyStack />,
      title: "Profit Advisory",
      description: "Strategic financial guidance and advanced profit improvement.",
      bullets: [
        "Everything in Profit Optimization",
        "Menu Engineering",
        "Budgeting & Forecasting",
        "Monthly Performance Call",
        "KPI Financial Dashboard",
      ],
      monthlyPrice: 3000,
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
        <h2 className="section-title">Take Control of Your Restaurant Finances Today</h2>
        <p className="section-subtitle">
          Gain complete profit visibility, optimize your menu and operations, and receive expert profit advisory to maximize your restaurant’s growth.
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