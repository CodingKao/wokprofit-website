import React from "react";
import "./About.css";

const About = () => {
  const credibilityPoints = [
    "Master’s in Finance with 5+ years in accounting and financial analysis",
    "Experience helping restaurants understand costs and improve margins",
    "Clear, practical financial guidance — no confusing reports or jargon",
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container container">

        <div className="about-content">

          <span className="about-eyebrow">Meet the Founder</span>

          <h2>
            I started Wok Profit after seeing too many great restaurants — including some
            of my favorites — close simply because they never had clear financial visibility.
          </h2>

          <p className="about-intro">
            Working in accounting and financial analysis, I saw how often owners were
            handed reports without real explanations. They were working hard, but without
            the clarity needed to protect their margins or make confident decisions.
          </p>

          <p className="about-intro">
            That’s why I built Wok Profit — to give owners a simple, practical way to
            understand their numbers. My background includes:
          </p>

          <ul className="about-points">
            {credibilityPoints.map((point, index) => (
              <li key={index}>
                <span className="checkmark">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="about-proof-box">
            <p>
              My goal is simple: make profit clear — and help restaurant owners make
              smarter decisions every month. And that clarity starts with knowing exactly
              where your money is going.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
