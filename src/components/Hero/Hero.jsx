// src/components/Hero/Hero.jsx

import React from "react";
import "./Hero.css";
import kitchenPhoto from "../../assets/images/wok5.jpg";
import { AUDIT_LINK } from "../../config/Links";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-badge">For Asian restaurants</span>

          <h1 className="hero-title">
            See where your restaurant is leaking profit.
          </h1>

          <p className="hero-sub">
            A clear look at food cost, labor, and menu — from someone who
            understands the kitchen.
          </p>

          <div className="hero-actions">
            <a
              href={AUDIT_LINK}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a free profit audit
            </a>

            <a href="/#how-it-works" className="btn-outline hero-secondary">
              See how it works
            </a>
          </div>

          <p className="hero-microcopy">
            About 3 minutes. No credit card. Keep the notes even if we don’t
            work together.
          </p>
        </div>

        <div className="hero-image">
          <img
            src={kitchenPhoto}
            alt="Wok cooking in a restaurant kitchen"
            className="hero-preview-img"
          />
          <p className="hero-image-caption">Built for the line — not a login.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
