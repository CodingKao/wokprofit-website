// src/components/Cta/Cta.jsx
import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Ready to Maximize Your Restaurant Profits?</h2>
        <p>Get started with Wok Profit and transform your restaurant's financial intelligence today.</p>
        <a href="#contact" className="btn-primary">Book a Consultation</a>
      </div>
    </section>
  );
};

export default Cta;