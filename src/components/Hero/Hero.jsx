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
            Your Restaurant Is Bleeding Profit.
          </span>

          <h1 className="hero-title">
            We Find Your Profit Leaks in Under 5 Minutes.
          </h1>

          <p className="hero-sub">
            You’re not losing revenue — you’re losing profit.  
            We show you exactly where money is leaking and how to fix it within 30 days.
          </p>

          <div className="hero-actions">

            <a href="#contact" className="hero-btn primary">
              Get My Free Profit Audit
            </a>

            <a href="#services" className="hero-btn secondary">
              See How It Works
            </a>

          </div>

          <p className="hero-microcopy">
            No credit card. Takes 3 minutes. Keep the audit even if you don’t work with us.
          </p>

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
