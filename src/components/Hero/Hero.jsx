// src/components/Hero/Hero.jsx

import React from "react";
import "./Hero.css";
import graph from "../../assets/images/graph.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">

      <div className="hero-container">

        {/* LEFT SIDE - TEXT */}

        <div className="hero-text">

          <span className="hero-badge">
            Wok Profit Restaurant Profit Optimization
          </span>

          <h2>
            We Find $2,000–$10,000/Month Hidden in Your Restaurant — Or You Don’t Pay.
          </h2>

          <p>
            Fix food cost, labor, and pricing leaks in 30 days.”
          </p>

          <p>
            Built for restaurant owners who want more profit—not more stress.
          </p>

          <div className="hero-actions">

            <a href="#contact" className="hero-btn primary">
              Get Your Free Profit Audit
            </a>

            <a href="#services" className="hero-btn secondary">
              See How We Increase Profit
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - GRAPH */}

        <div className="hero-graph">

          <img src={graph} alt="Restaurant analytics dashboard" />

          {/* KPI 1 */}

          <div className="kpi-card food">

            <span className="kpi-label">Food Cost</span>

            <span className="kpi-value">28.4%</span>

          </div>

          {/* KPI 2 */}

          <div className="kpi-card profit">

            <span className="kpi-label">Weekly Profit</span>

            <span className="kpi-value">+$4,250</span>

          </div>

          {/* KPI 3 */}

          <div className="kpi-card labor">

            <span className="kpi-label">Labor Cost</span>

            <span className="kpi-value">24.1%</span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
