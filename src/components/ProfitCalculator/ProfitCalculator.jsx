// src/components/Calculator/ProfitCalculator.jsx

import React, { useState } from "react";
import "./ProfitCalculator.css";
import {AUDIT_LINK} from "../../config/Links";

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

  const formatCurrency = (value) =>
    value.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <section id="calculator" className="calc-section">
      <div className="calc-container container">

        <span className="calc-eyebrow">Profit Leak Calculator</span>

        <h2 className="calc-title">
          Estimate How Much Profit You’re Losing Each Month
        </h2>

        <p className="calc-subtitle">
          Enter your numbers — we’ll show you how much profit may be slipping away.
        </p>

        <div className="calc-box">
          <div className="calc-grid">

            <div className="calc-field">
              <label>Monthly Revenue ($)</label>
              <input
                type="number"
                name="monthlyRevenue"
                value={inputs.monthlyRevenue}
                onChange={handleChange}
                placeholder="e.g., 30,000"
              />
            </div>

            <div className="calc-field">
              <label>Food Cost ($)</label>
              <input
                type="number"
                name="foodCost"
                value={inputs.foodCost}
                onChange={handleChange}
                placeholder="e.g., 10,000"
              />
            </div>

            <div className="calc-field">
              <label>Labor Cost ($)</label>
              <input
                type="number"
                name="laborCost"
                value={inputs.laborCost}
                onChange={handleChange}
                placeholder="e.g., 9,000"
              />
            </div>

            <div className="calc-field">
              <label>Rent ($)</label>
              <input
                type="number"
                name="rent"
                value={inputs.rent}
                onChange={handleChange}
                placeholder="e.g., 2,500"
              />
            </div>

            <div className="calc-field">
              <label>Other Expenses ($)</label>
              <input
                type="number"
                name="otherExpenses"
                value={inputs.otherExpenses}
                onChange={handleChange}
                placeholder="e.g., 1,000"
              />
            </div>

          </div>

          <button className="calc-btn" onClick={calculateProfitLeak}>
            Calculate My Profit Leak
          </button>

          {result !== null && (
            <div className="calc-result">

              <p><strong>You may be losing around:</strong></p>

              {/* RANGE DISPLAY */}
              {result > 0 ? (
                <>
                  {(() => {
                    const low = result * 0.9;
                    const high = result * 1.1;
                    return (
                      <h3>
                        ${formatCurrency(low)} – ${formatCurrency(high)}/month
                      </h3>
                    );
                  })()}

                  {/* CONTEXT LINE */}
                  <p className="calc-note" style={{ marginTop: "0.75rem" }}>
                    Based on the numbers you entered:
                  </p>

                  <p className="calc-note">
                    Your costs may be higher than they should be.
                  </p>
                </>
              ) : (
                <h3>$0/month</h3>
              )}

              <p className="calc-note">
                This is an estimate — your full Profit Audit will show exactly where the money is going and how to fix it.
              </p>

              <p className="calc-note" style={{ marginTop: "0.5rem", fontWeight: 600 }}>
                Want the full breakdown?
              </p>

<a
  href={AUDIT_LINK}
  className="btn-primary"
  target="_blank"
  rel="noopener noreferrer"
>
  Get My Free Profit Audit
</a>

              {/* TRUST CUE */}
              <p className="calc-note" style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.8 }}>
                Takes 3 minutes. No pressure. No sales pitch.
              </p>

            </div>
          )}
        </div>

        <p className="calc-microcopy">
          Your numbers are not stored or shared. This estimate is for guidance only.
        </p>

      </div>
    </section>
  );
};

export default ProfitCalculator;
