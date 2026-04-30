// src/components/Hero/Hero.jsx

import React from "react";
import "./Hero.css";
import auditPreview from "../../assets/images/auditpreview.png";
import { AUDIT_LINK } from "../../config/Links";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-inner">

        {/* LEFT TEXT */}
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
            <a
              href={AUDIT_LINK}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get My Free Profit Audit
            </a>

            <a href="#services" className="btn-outline hero-secondary">
              See How It Works
            </a>
          </div>

          <p className="hero-microcopy">
            No credit card. Takes 3 minutes. Keep the audit even if you don’t work with us.
          </p>
        </div>

        {/* RIGHT SIDE — AUDIT PREVIEW */}
        <div className="hero-preview">
          <img
            src={auditPreview}
            alt="Sample Profit Audit Preview"
            className="hero-preview-img"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
