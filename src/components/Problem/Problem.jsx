// src/components/Problem/Problem.jsx

import React from "react";
import "./Problem.css";

const painPoints = [
  "Food costs creeping up with no clear explanation (losing thousands monthly)",
  "Overstaffing during slow hours draining your margins",
  "Menu items that sell well — but barely make you profit",
  "No visibility into daily or weekly profit",
  "Reports that show numbers — but not what to fix next",
];

const Problem = () => {
  return (
    <section id="problem" className="problem-section">
      <div className="container problem-inner">
        <h2 className="problem-title">
          Running a Restaurant Takes Hard Work — But Profit Isn’t Always Clear
        </h2>
        <div className="problem-divider" aria-hidden="true" />

        <p className="problem-subtext">
          It’s difficult to improve margins when you can’t clearly see where
          money is going.
        </p>

        <p className="problem-intro">
          If any of these sound familiar, you’re leaving money on the table
          every single month:
        </p>

        <ul className="problem-list">
          {painPoints.map((point, index) => (
            <li key={index}>
              <span className="checkmark">✔</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="problem-close">
          You’re working hard — but without clear financial visibility, your
          margins won’t improve.
        </p>
      </div>
    </section>
  );
};

export default Problem;
