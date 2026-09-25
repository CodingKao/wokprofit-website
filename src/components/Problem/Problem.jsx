// src/components/Problem/Problem.jsx

import React from "react";
import "./Problem.css";

const painPoints = [
  "Shrimp or oil jumped in price and nobody caught it for three weeks",
  "Tuesday lunch is overstaffed while Friday night is slammed",
  "Pad thai sells out — and barely covers the plate",
  "The accountant sends a report. It doesn’t say what to do next",
];

const Problem = () => {
  return (
    <section id="problem" className="problem-section">
      <div className="container problem-inner">
        <h2 className="problem-title">
          The kitchen is busy. The profit is not.
        </h2>

        <p className="problem-subtext">
          Most owners I talk to already work 70-hour weeks. The gap is
          visibility — which dishes, shifts, and vendors are quietly taking
          the month’s profit.
        </p>

        <ul className="problem-list">
          {painPoints.map((point) => (
            <li key={point}>
              <span className="checkmark">✔</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problem;
