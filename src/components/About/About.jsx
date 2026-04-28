import React, { useState } from "react";
import kaopic from "../../assets/images/kao-pic.jpeg";
import "./About.css";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-container container">

        {/* RIGHT — Founder Story */}
        <div className="about-content">

          <span className="about-eyebrow">Meet the Founder</span>


          {/* Picture + Flip Card */}
          <div
            className={`flip-card ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
            >
            <div className="flip-card-inner">

              {/* FRONT */}
              <div className="flip-card-front">
                <img src={kaopic} alt="Founder" />
                <h3>Kao Saelor</h3>
                <p>Founder, Wok Profit</p>
                <p className="flip-hint">Tap to flip and see background </p>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                <h3>My Background</h3>
                <p>
                  Born in Chiang Kham, Thailand, I built my career across finance,
                  accounting, data analytics, and software development.
                </p>
                <p>
                  I earned my Master’s in Finance and spent 5+ years helping businesses
                  understand their numbers and improve margins. That mix of finance and
                  technical experience shaped the foundation of Wok Profit.
                </p>
              </div>

            </div>
          </div>

          {/* WHY I STARTED WOK PROFIT */}
            <h2>Why I Started Wok Profit</h2>

          <p className="about-intro">
            I started Wok Profit after seeing too many great Asian restaurants — including some
            of my favorites — struggle simply because they never had clear financial
            visibility. Owners and staff were putting in long hours, yet still couldn’t see where their money was going. That reality is what pushed me to create Wok Profit.
          </p>

          <p className="about-intro">
            Wok Profit exists to fix that — giving restaurant owners simple, practical
            financial clarity they can actually use.
          </p>

          <div className="about-proof-box highlight-goal">
            <p>
              <strong>My goal is simple:</strong> make profit clear — and help restaurant
              owners make smarter decisions every month.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
