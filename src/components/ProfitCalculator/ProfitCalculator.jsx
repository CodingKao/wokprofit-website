// src/components/Calculator/ProfitCalculator.jsx

import React, { useState } from "react";
import "./ProfitCalculator.css";

const ProfitCalculator = () => {
  const [inputs, setInputs] = useState({
    monthlyRevenue: "",
    foodCost: "",
    laborCost: "",
    rent: "",
    otherExpenses: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const calculateProfitLeak = () => {
    const revenue = Number(inputs.monthlyRevenue);
    const food = Number(inputs.foodCost);
    const labor = Number(inputs.laborCost);
    const rent = Number(inputs.rent);
    const other = Number(inputs.otherExpenses);

    if (!revenue) return;

    const totalCosts = food + labor + rent + other;
    const idealCost = revenue * 0.65; // Ideal restaurant cost structure
    const leak = totalCosts - idealCost;

    setResult(leak > 0 ? leak : 0);
  };

  return (
    <section id="calculator" className="calc-section">
      <div className="calc-container container">

        <span className="calc-eyebrow">Profit Leak Calculator</span>

        <h2 className="calc-title">
          Estimate How Much Profit You’re Losing Each Month
        </h2>

        <p className="calc-subtitle">
          Enter a few numbers — we’ll estimate your preventable monthly losses.
        </p>

        <div className="calc-grid">

          <div className="calc-field">
            <label>Monthly Revenue ($)</label>
            <input
              type="number"
              name="monthlyRevenue"
              value={inputs.monthlyRevenue}
              onChange={handleChange}
              placeholder="e.g., 85,000"
            />
          </div>

          <div className="calc-field">
            <label>Food Cost ($)</label>
            <input
              type="number"
              name="foodCost"
              value={inputs.foodCost}
              onChange={handleChange}
              placeholder="e.g., 28,000"
            />
          </div>

          <div className="calc-field">
            <label>Labor Cost ($)</label>
            <input
              type="number"
              name="laborCost"
              value={inputs.laborCost}
              onChange={handleChange}
              placeholder="e.g., 22,000"
            />
          </div>

          <div className="calc-field">
            <label>Rent ($)</label>
            <input
              type="number"
              name="rent"
              value={inputs.rent}
              onChange={handleChange}
              placeholder="e.g., 6,500"
            />
          </div>

          <div className="calc-field">
            <label>Other Expenses ($)</label>
            <input
              type="number"
              name="otherExpenses"
              value={inputs.otherExpenses}
              onChange={handleChange}
              placeholder="e.g., 8,000"
            />
          </div>

        </div>

        <button className="calc-btn" onClick={calculateProfitLeak}>
          Calculate My Profit Leak
        </button>

        {result !== null && (
          <div className="calc-result">
            <p>
              You may be losing approximately:
            </p>
            <h3>${result.toLocaleString()}</h3>
            <p className="calc-note">
              in preventable monthly profit leaks.
            </p>

            <a href="#contact" className="calc-cta btn-primary">
              Fix My Profit Leak
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProfitCalculator;
