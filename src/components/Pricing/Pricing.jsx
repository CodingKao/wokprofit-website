// src/components/Pricing/Pricing.jsx
import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      name: "Bookkeeping",
      price: "$695/mo",
      features: ["P&L & Balance Sheet", "Cash Flow Tracking", "Monthly Reconciliations", "Standard Monthly Report"],
    },
    {
      name: "Controller",
      price: "$1,850/mo",
      features: ["Budget vs Actual Analysis", "Prime Cost Tracking", "Sales Mix Dashboard", "12-Month Cash Forecast"],
      popular: true,
    },
    {
      name: "Profit Optimization",
      price: "$3,800/mo",
      features: ["Full Menu Engineering", "Contribution Margin Audit", "Live Food Cost Tracking", "Break-even Sensitivity"],
    },
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <h2 className="section-title">Transparent Pricing Tiers</h2>
        <p className="section-subtitle">
          Scalable financial intelligence for every stage of your restaurant's growth.
        </p>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`price-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <div className="popular-tag">Most Popular</div>}
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <button className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}>Choose {plan.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;