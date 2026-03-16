// src/components/Cta/Cta.jsx
import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Ready to Maximize Your Restaurant Profits?</h2>
        <p>Join hundreds of Asian restaurant owners who have unlocked an average of 15% in hidden margins. Our data-driven approach takes the guesswork out of your kitchen operations..</p>
        <a href="#contact" className="btn-primary">Book a Consultation</a>
      </div>
    </section>
  );
};

export default Cta;