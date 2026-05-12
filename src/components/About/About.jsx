// src/components/About/About.jsx

import React, { useState } from "react";
import kaopic from "../../assets/images/kao-pic.jpeg";
import "./About.css";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="container about-inner">
        <span className="about-eyebrow">Meet the Founder</span>

        {/* LEFT/RIGHT GRID */}
        <div className="about-grid">
          {/* LEFT — FLIP CARD */}
          <div
            className={`flip-card ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className="flip-card-inner">
              {/* FRONT */}
              <div className="flip-card-front">
                <img src={kaopic} alt="Founder Kao Saelor" />
                <h3>Kao Saelor</h3>
                <p>Founder, Wok Profit</p>
                <p className="flip-hint">Tap to flip and see background</p>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                <h3>My Background</h3>
                <p>
                  Born in Chiang Kham, Thailand, I built my career across
                  finance, accounting, data analytics, and software development.
                </p>
                <p>
                  I earned my Master’s in Finance and spent 5+ years helping
                  businesses understand their numbers and improve margins. That
                  mix of finance and technical experience shaped the foundation
                  of Wok Profit.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="about-content">
            <h2 className="about-title">Why I Started Wok Profit</h2>

            <p className="about-intro">
              I started Wok Profit after seeing too many great Asian restaurants
              — including some of my own favorites — work incredibly hard yet
              still struggle to keep the profit they deserved. Most owners never
              had clear financial visibility. They were putting in long hours,
              but couldn’t see where their money was going — and that lack of
              clarity was costing them thousands every month.
            </p>

            <p className="about-intro">
              Wok Profit exists to fix that. Our mission is simple: help Asian
              restaurants keep more of the profit they work so hard to earn by
              giving owners clear, practical financial visibility they can
              actually use.
            </p>

            <div className="about-proof-box highlight-goal">
              <p>
                <strong>My goal is simple:</strong> make profit clear — and
                become the trusted partner Asian restaurant owners rely on to
                make smarter decisions every month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
