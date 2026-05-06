// src/components/Problem/Problem.jsx

import React from "react";
import "./Problem.css";
import stress from "../../assets/images/stress-chef.png";
import { AUDIT_LINK } from "../../config/Links";

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

        {/* IMAGE FIRST (LEFT ON DESKTOP) */}
        <div className="problem-image">
          <img
            src={stress}
            alt="Stressed restaurant owner dealing with rising costs"
          />
        </div>

        {/* TEXT SECOND (RIGHT ON DESKTOP) */}
        <div className="problem-text">
          <h2 className="problem-title">
            Running a Restaurant Takes Hard Work — But Profit Isn’t Always Clear
          </h2>

          <p className="problem-subtext">
            It’s difficult to improve margins when you can’t clearly see where money is going.
          </p>

          <p className="problem-intro">
            If any of these sound familiar, you’re leaving money on the table every single month:
          </p>

          <ul className="problem-list">
            {painPoints.map((point, index) => (
              <li key={index}>
                <span className="bullet">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="problem-close">
            You’re working hard — but without clear financial visibility, your margins won’t improve.
          </p>

          <a
            href={AUDIT_LINK}
            className="btn-primary problem-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get My Free Profit Audit
          </a>
        </div>

      </div>
    </section>
  );
};

export default Problem;
