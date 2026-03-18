// src/components/Cta/Cta.jsx
import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to <span>Maximize Your Restaurant Profits?</span>
        </h2>
        <p className="cta-subtitle">
          We help restaurant owners uncover hidden profit opportunities and boost margins through precise, data-driven insights.
        </p>
        <a href="#contact" className="btn-primary">
          Book A Free Profit Review
        </a>
      </div>
    </section>
  );
};

export default Cta;