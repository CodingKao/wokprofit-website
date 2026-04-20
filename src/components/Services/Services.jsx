// src/components/Services/Services.jsx
import React, { useState } from "react";
import "./Services.css";

// React icons
import { LuCalculator } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";

const Services = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const services = [
    {
      icon: <LuCalculator />,
      title: "Profit Visibility",
      badge: "Starter",
      bestFor: "Best for new or smaller restaurants that need clear financial visibility",
      roi: "Typically uncovers $2K–$4K/month in hidden profit leaks",
      description:
        "Get a clear view of where your restaurant is making money, losing money, and what needs attention first.",
      bullets: [
        "Monthly bookkeeping that keeps your numbers clean and decision-ready",
        "Food cost tracking to uncover hidden leaks and protect margins",
        "Prime cost tracking so you can control your most important metric",
        "Expense analysis to see exactly where your cash is going each month",
        "Monthly profit reporting with clear insights, not just spreadsheets",
      ],
      monthlyPrice: 800,
      cta: "Start With Visibility",
    },
    {
      icon: <FiPieChart />,
      title: "Profit Optimization",
      badge: "Most Popular",
      bestFor: "Best for restaurants doing $30K–$100K/month that want real margin improvement",
      roi: "Typically identifies $3K–$8K/month in profit opportunities",
      description:
        "This is our core growth service for restaurant owners who want to actively increase profit, not just track performance.",
      bullets: [
        "Everything in Profit Visibility",
        "Menu pricing optimization so you stop underpricing profitable items",
        "Food cost reduction strategy to cut waste and protect margins",
        "Labor cost optimization to align staffing with revenue",
        "High-margin item strategy so you can push what actually makes money",
        "Monthly action plan focused on specific profit improvements",
      ],
      monthlyPrice: 1500,
      featured: true,
      cta: "Get My Free Profit Audit",
    },
    {
      icon: <GiMoneyStack />,
      title: "Profit Advisory",
      badge: "Advanced",
      bestFor: "Best for operators serious about scaling with CFO-level strategy",
      roi: "Designed to build a predictable, high-margin operation",
      description:
        "For restaurant owners who want deeper financial strategy, forecasting, and profit systems without hiring a full-time CFO.",
      bullets: [
        "Everything in Profit Optimization",
        "Advanced menu engineering focused on profitability and item performance",
        "Budgeting and forecasting with monthly and quarterly projections",
        "Actuals vs budget analysis to spot performance gaps quickly",
        "KPI dashboard for ongoing financial and operational decision-making",
      ],
      monthlyPrice: 3500,
      cta: "Request Advisory Call",
    },
  ];

  const getPriceDisplay = (monthly) => {
    if (billingCycle === "monthly") {
      return <span className="price-main">${monthly.toLocaleString()}/mo</span>;
    }

    const yearlyPrice = monthly * 12;
    const discounted = Math.round(yearlyPrice * 0.9);

    return (
      <>
        <span className="price-original">${yearlyPrice.toLocaleString()}/yr</span>
        <span className="price-discounted">${discounted.toLocaleString()}/yr</span>
      </>
    );
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container container">
        <h2 className="section-title">Services Built to Increase Profit</h2>
        <p className="section-subtitle">
          Most restaurants are sitting on $2,000–$10,000/month in hidden profit
          opportunities. The question is whether you can see them and fix them.
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
                <div className="recommended-tag">{service.badge}</div>
              )}

              {!service.featured && service.badge && (
                <div className="service-badge">{service.badge}</div>
              )}

              {/* ICON + TITLE */}
              <div className="service-header">
                <div className="service-icon-box">
                  {React.cloneElement(service.icon, {
                    size: 40,
                    color: "#c8102e",
                  })}
                </div>
                <div className="service-title-wrap">
                  <h3>{service.title}</h3>
                  <p className="service-best-for">{service.bestFor}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="service-description">{service.description}</p>

              {/* ROI / VALUE */}
              <div className="service-roi">{service.roi}</div>

              {/* BULLETS */}
              <ul>
                {service.bullets.map((bullet, i) => (
                  <li key={i}>
                    <span className="checkmark">✔</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* PRICE */}
              <div className="service-price">{getPriceDisplay(service.monthlyPrice)}</div>

              {/* CTA BUTTON */}
              <a href="#contact" className="btn-primary">
                {service.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="services-guarantee">
          <p>
            <strong>Guarantee:</strong> Increase profits by $1,500 in 30 days —
            or your first month is free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;