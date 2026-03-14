// src/components/Hero/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Wok Profit Financial Analytics</span>
          <h1>Turn Your Asian Restaurant Data Into Pure Profit</h1>
          <p>
            Stop guessing and start growing. Our specialized financial intelligence platform
            helps Asian restaurant owners master their margins with real-time data and expert insights.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">Boost My Margins</a>
            <a href="#services" className="btn btn-outline">View Services</a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=1500"
            alt="Restaurant Dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;