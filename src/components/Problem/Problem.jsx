// src/components/Problem/Problem.jsx
import React from "react";
import stress from "../../assets/images/stress-chef.png";
import "./Problem.css";

const Problem = () => {
  const painPoints = [
    "Food costs creeping up with no clear explanation (losing thousands monthly)",
    "Overstaffing during slow hours eating into your margins",
    "Menu items that sell well—but barely make you profit",
    "No clear visibility into daily or weekly profit",
    "Reports that show numbers—but not what to fix",
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
          <h2>You’re Not Losing Revenue — You’re Losing Profit</h2>

          <p className="problem-subtext">
            Most restaurant owners don’t have a sales problem.
            <br />
            They have a <strong>profit leak problem</strong>.
          </p>

          <p>
            If you’re dealing with any of these, you’re leaving money on the table every month:
          </p>

          <ul>
            {painPoints.map((point, index) => (
              <li key={index}>
                <span className="checkmark">✖</span>
                <span className="point-text">{point}</span>
              </li>
            ))}
          </ul>

          <p className="problem-close">
            You’re working hard—but your margins aren’t improving.
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