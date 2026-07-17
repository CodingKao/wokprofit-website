// src/components/Calculator/ProfitCalculator.jsx

import React, { useState } from "react";
import "./ProfitCalculator.css";
import { AUDIT_LINK } from "../../config/Links";

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

  const formatCurrency = (value) =>
    value.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const GAUGE_SEGMENTS = [
    { color: "#2d9d4f" },
    { color: "#7cb342" },
    { color: "#e8a317" },
    { color: "#e65100" },
    { color: "#c8102e" },
  ];

  const getStatusMetrics = (revenue, totalCosts, leak) => {
    const costRatio = totalCosts / revenue;
    const score = Math.min(
      100,
      Math.max(0, ((costRatio - 0.6) / 0.25) * 100)
    );

    const level = Math.min(5, Math.max(1, Math.ceil(score / 20) || 1));

    let status = "healthy";
    if (level >= 5) status = "danger";
    else if (level >= 3) status = "warning";

    const adjustedLeak = Math.max(0, leak);
    const low = adjustedLeak * 0.9;
    const high = adjustedLeak * 1.1;

    return { status, score, level, low, high, adjustedLeak, costRatio };
  };

  const calculateProfitLeak = () => {
    const revenue = Number(inputs.monthlyRevenue);
    const food = Number(inputs.foodCost);
    const labor = Number(inputs.laborCost);
    const rent = Number(inputs.rent);
    const other = Number(inputs.otherExpenses);

    if (!revenue) return;

    const totalCosts = food + labor + rent + other;
    const idealCost = revenue * 0.65;
    const leak = totalCosts - idealCost;

    setResult(getStatusMetrics(revenue, totalCosts, leak));
  };

  const renderGauge = (score) => {
    const cx = 100;
    const cy = 100;
    const r = 72;
    const gap = 2.5;
    const segmentSpan =
      (180 - gap * (GAUGE_SEGMENTS.length - 1)) / GAUGE_SEGMENTS.length;
    // Left = 180° (green), right = 0° (red)
    const needleAngle = 180 - (score / 100) * 180;

    const polar = (angleDeg) => {
      const rad = (angleDeg * Math.PI) / 180;
      return {
        x: cx + r * Math.cos(rad),
        y: cy - r * Math.sin(rad),
      };
    };

    const arc = (start, end) => {
      const s = polar(start);
      const e = polar(end);
      return `M ${s.x} ${s.y} A ${r} ${r} 0 0 1 ${e.x} ${e.y}`;
    };

    const needleRad = (needleAngle * Math.PI) / 180;
    const needleX = cx + 58 * Math.cos(needleRad);
    const needleY = cy - 58 * Math.sin(needleRad);

    // Draw left → right: green at 180° (left) → red at 0° (right)
    let angle = 180;

    return (
      <div className="calc-gauge" aria-hidden="true">
        <svg viewBox="0 0 200 118" className="calc-gauge-svg">
          {GAUGE_SEGMENTS.map((segment, index) => {
            const end = angle - segmentSpan;
            const path = (
              <path
                key={index}
                d={arc(angle, end)}
                fill="none"
                stroke={segment.color}
                strokeWidth="16"
                strokeLinecap="butt"
              />
            );
            angle = end - gap;
            return path;
          })}
          <circle cx={cx} cy={cy} r="7" fill="#111" />
          <line
            x1={cx}
            y1={cy}
            x2={needleX}
            y2={needleY}
            stroke="#111"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  };

  return (
    <section id="calculator" className="calc-section">
      <div className="container calc-inner">

        <span className="calc-eyebrow">Profit Leak Calculator</span>

        <h2 className="calc-title">
          Estimate How Much Profit You’re Losing Each Month
        </h2>

        <p className="calc-subtitle">
          Enter your numbers — we’ll show you how much profit may be slipping away.
        </p>

        {/* CALCULATOR CARD */}
        <div className="calc-card">

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
              <p className="calc-result-label">You may be losing around:</p>

              {result.adjustedLeak > 0 ? (
                <h3 className={`calc-range calc-range--${result.status}`}>
                  ${formatCurrency(result.low)} – ${formatCurrency(result.high)}
                  /month
                </h3>
              ) : (
                <h3 className="calc-range calc-range--healthy">$0/month</h3>
              )}

              <div className="calc-status-visual">
                <div className="calc-status-left">
                  <div className="calc-status-bar">
                    <div
                      className={`calc-status-marker calc-status-marker--level-${result.level}`}
                      style={{ left: `${result.score}%` }}
                    />
                  </div>
                  <div className="calc-status-labels">
                    <span className="calc-status-label calc-status-label--healthy">
                      Healthy
                    </span>
                    <span className="calc-status-label calc-status-label--warning">
                      Warning
                    </span>
                    <span className="calc-status-label calc-status-label--danger">
                      Danger
                    </span>
                  </div>
                </div>

                {renderGauge(result.score)}
              </div>

              {result.adjustedLeak > 0 && (
                <p className="calc-note">
                  Based on the numbers you entered, your costs may be higher than
                  they should be.
                </p>
              )}

              <p className="calc-disclaimer">
                These numbers are based on estimates — your full Profit Audit
                will show exactly where the money is going and how to fix it.
              </p>

              <a
                href={AUDIT_LINK}
                className="btn-primary calc-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get My Free Profit Audit
              </a>

              <p className="calc-trust">
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
