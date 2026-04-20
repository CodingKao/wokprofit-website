// src/components/About/About.jsx
import React, { useState } from "react";
import "./About.css";
import kaopic from "../../assets/images/kao-pic.jpeg";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  const credibilityPoints = [
    "Controller-level financial expertise — beyond basic bookkeeping",
    "Master’s in Finance with 5+ years in accounting and financial analysis",
    "Profit-first approach focused on margins, cost control, and cash flow",
    "Restaurant-focused dashboards and decision-making systems",
    "CFO-level strategic support without the full-time overhead",
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container container">
        {/* LEFT - Founder Card */}
        <div
          className={`flip-card ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setFlipped(!flipped);
            }
          }}
          aria-label="Flip founder card to learn more about Kao Saelor"
        >
          <div className="flip-card-inner">
            {/* FRONT */}
            <div className="flip-card-front">
              <img src={kaopic} alt="Kao Saelor, Founder of Wok Profit" />
              <div className="founder-badge">Founder</div>
              <h3>Kao Saelor</h3>
              <p>Controller • Finance • Analytics</p>
              <span className="flip-hint">Tap to learn more</span>
            </div>

            {/* BACK */}
            <div className="flip-card-back">
              <h3>Why Clients Trust Wok Profit</h3>
              <p>
                I built Wok Profit to help restaurant owners stop guessing and
                start making better profit decisions with clear financial data.
              </p>
              <p>
                My background combines accounting, finance, and analytics so you
                get more than reports—you get insight into what is hurting your
                margins and what to fix first.
              </p>
              <p>
                The goal is simple: help you control costs, improve profit, and
                grow with confidence without paying for a full-time CFO.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT - Trust + Conversion Content */}
        <div className="about-content">
          <span className="about-eyebrow">Why restaurant owners choose Wok Profit</span>

          <h2>Built for Owners Who Want More Than Just Bookkeeping</h2>

          <p className="about-intro">
            Most accountants tell you what happened.
            <strong> Wok Profit helps you understand what is hurting your margins,
            where profit is leaking, and what to do next.</strong>
          </p>

          <ul className="about-points">
            {credibilityPoints.map((point, index) => (
              <li key={index}>
                <span className="checkmark">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;