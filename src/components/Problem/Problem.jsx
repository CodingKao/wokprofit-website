// src/components/Problem/Problem.jsx
import React from "react";
import stress from "../../assets/images/stress-chef.png";
import "./Problem.css";

const Problem = () => {
  const painPoints = [
    "Difficulty tracking profits and costs accurately",
    "Limited visibility into menu performance and food cost",
    "Time-consuming manual bookkeeping",
    "Lack of actionable insights to improve margins",
    "Inconsistent financial reporting across locations",
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="problem-container container">
        {/* LEFT IMAGE */}
        <div className="problem-image">
          <img 
            src={stress} 
            alt="Stressed chef" 
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="problem-text">
          <h2>Is Your Restaurant Struggling?</h2>
          <p>
            Running a restaurant is challenging, and many owners face common issues that make it hard to stay profitable and organized. 
            Are you dealing with any of the following problems?
          </p>

          <ul>
            {painPoints.map((point, index) => (
              <li key={index}>
                <span className="checkmark">✖</span>
                <span className="point-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problem;