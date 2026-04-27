// src/components/Problem/Problem.jsx

import React from "react";
import stress from "../../assets/images/stress-chef.png";
import "./Problem.css";

const Problem = () => {
  const painPoints = [
    "Food costs creeping up with no clear explanation (losing thousands monthly)",
    "Overstaffing during slow hours draining your margins",
    "Menu items that sell well — but barely make you profit",
    "No visibility into daily or weekly profit",
    "Reports that show numbers — but not what to fix next",
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="problem-container container">

        {/* LEFT IMAGE */}
        <div className="problem-image">
          <img 
            src={stress} 
            alt="Stressed restaurant owner dealing with rising costs" 
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="problem-text">

          <h2 className="problem-title">
            You’re Not Losing Revenue — You’re Losing Profit
          </h2>

          <p className="problem-subtext">
            Most restaurant owners don’t have a sales problem.  
            They have a <strong>profit leak problem</strong>.
          </p>

          <p className="problem-intro">
            If any of these sound familiar, you’re leaving money on the table every single month:
          </p>

          <ul className="problem-list">
            {painPoints.map((point, index) => (
              <li key={index}>
                <span className="checkmark">✖</span>
                <span className="point-text">{point}</span>
              </li>
            ))}
          </ul>

          <p className="problem-close">
            You’re working hard — but without clear financial visibility, your margins won’t improve.
          </p>

          {/* CTA */}
          <a href="#contact" className="problem-cta">
            Get Your Free Profit Audit
          </a>

        </div>
      </div>
    </section>
  );
};

export default Problem;
