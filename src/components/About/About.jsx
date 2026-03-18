// src/components/About/About.jsx
import React, { useState } from "react";
import "./About.css";
import kaopic from "../../assets/images/kao-pic.jpeg";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT - Flip Card */}
        <div 
          className={`flip-card ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="flip-card-inner">

            {/* FRONT */}
            <div className="flip-card-front">
              <img src={kaopic} alt="Founder" />
              <div className="founder-badge">Founder</div>
              <h3>Kao Saelor</h3>
              <p>Controller • Finance • Analytics</p>
              <span className="flip-hint">Click to learn more</span>
            </div>

            {/* BACK */}
            <div className="flip-card-back">
              <h3>About Me</h3>
              <p>
                Controller with 5+ years in accounting and a master’s in finance.
                I specialize in turning restaurant data into profit-focused decisions.
              </p>
              <p>
                Built Wok Profit to help restaurant owners control costs, improve margins,
                and scale with clarity—without hiring a full-time CFO.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT - SHORTENED CONTENT */}
        <div className="about-content">
          <h2>Why Wok Profit is Different</h2>

          <ul>
            <li>Controller-level expertise — beyond bookkeeping</li>
            <li>Profit-first focus — not just reports</li>
            <li>Restaurant cost & margin optimization</li>
            <li>Data-driven decisions with real analytics</li>
            <li>CFO-level strategy without full-time cost</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;