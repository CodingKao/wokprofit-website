// src/components/Calculator/ProfitCalculator.jsx

import React, { useState } from "react";
import "./ProfitCalculator.css";
import { AUDIT_LINK } from "../../config/Links";
import { calculateProfitLeak } from "../../utils/profitCalc";

const ProfitCalculator = () => {
  const [inputs, setInputs] = useState({
    monthlyRevenue: "",
    foodCost: "",
    laborCost: "",
    rent: "",
    otherExpenses: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const digitsOnly = (value) => value.replace(/[^\d]/g, "");

  const formatThousands = (digits) => {
    if (!digits) return "";
    return Number(digits).toLocaleString("en-US");
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: digitsOnly(e.target.value),
    });
  };

  const formatCurrency = (value) =>
    value.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const formatPct = (value) => `${(value * 100).toFixed(1)}%`;

  const GAUGE_SEGMENTS = [
    { color: "#2d9d4f" },
    { color: "#7cb342" },
    { color: "#e8a317" },
    { color: "#e65100" },
    { color: "#c8102e" },
  ];

  const runCalculation = () => {
    const next = calculateProfitLeak(inputs);
    if (next.error) {
      setResult(null);
      setError(next.error);
      return;
    }
    setError("");
    setResult(next);
  };

  const renderGauge = (score) => {
    const cx = 100;
    const cy = 100;
    const r = 72;
    const gap = 2.5;
    const segmentSpan =
      (180 - gap * (GAUGE_SEGMENTS.length - 1)) / GAUGE_SEGMENTS.length;
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
          Try it with this month’s sales and costs
        </h2>

        <p className="calc-subtitle">
          Enter your monthly sales, food cost, and labor. We’ll estimate how
          much profit may be slipping away.
        </p>

        <div className="calc-card">
          <div className="calc-grid">
            <div className="calc-field calc-field--wide">
              <label>Monthly Revenue ($)</label>
              <input
                type="text"
                inputMode="numeric"
                name="monthlyRevenue"
                value={formatThousands(inputs.monthlyRevenue)}
                onChange={handleChange}
                placeholder="e.g., 40,000"
              />
            </div>

            <div className="calc-field">
              <label>Food Cost ($)</label>
              <input
                type="text"
                inputMode="numeric"
                name="foodCost"
                value={formatThousands(inputs.foodCost)}
                onChange={handleChange}
                placeholder="e.g., 12,000"
              />
            </div>

            <div className="calc-field">
              <label>Labor Cost ($)</label>
              <input
                type="text"
                inputMode="numeric"
                name="laborCost"
                value={formatThousands(inputs.laborCost)}
                onChange={handleChange}
                placeholder="e.g., 12,000"
              />
            </div>

            <div className="calc-field">
              <label>Rent ($)</label>
              <input
                type="text"
                inputMode="numeric"
                name="rent"
                value={formatThousands(inputs.rent)}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>

            <div className="calc-field">
              <label>Other Expenses ($)</label>
              <input
                type="text"
                inputMode="numeric"
                name="otherExpenses"
                value={formatThousands(inputs.otherExpenses)}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>
          </div>

          <button className="calc-btn" type="button" onClick={runCalculation}>
            Calculate My Profit Leak
          </button>

          {error && <p className="calc-error">{error}</p>}

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

              <div className="calc-metrics">
                <div>
                  <span>Food cost</span>
                  <strong>{formatPct(result.foodPct)}</strong>
                </div>
                <div>
                  <span>Labor cost</span>
                  <strong>{formatPct(result.laborPct)}</strong>
                </div>
                <div>
                  <span>Prime cost</span>
                  <strong>{formatPct(result.primeRatio)}</strong>
                </div>
                {result.hasOverhead && (
                  <div>
                    <span>Left after costs</span>
                    <strong>
                      {result.profit >= 0 ? "" : "−"}$
                      {formatCurrency(Math.abs(result.profit))}
                    </strong>
                  </div>
                )}
              </div>

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
                  Based on the numbers you entered, food and labor costs may be
                  higher than they should be.
                </p>
              )}

              {result.adjustedLeak === 0 && (
                <p className="calc-note">
                  Food and labor look in a healthy range. Rent and other costs
                  still matter — a full audit checks those too.
                </p>
              )}

              <p className="calc-disclaimer">
                These numbers are an estimate. A full profit audit uses your
                actual menu, invoices, and schedule.
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
          Your numbers are not stored or shared. This estimate is for guidance
          only.
        </p>
      </div>
    </section>
  );
};

export default ProfitCalculator;
