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
          <span className="hero-badge">Portland, OR · Asian restaurants</span>

          <h1 className="hero-title">
            See where your restaurant is leaking profit.
          </h1>

          <p className="hero-sub">
            Food cost, labor, and menu clarity for Asian restaurants in
            Portland and the metro — from someone who understands the kitchen.
          </p>

          <div className="hero-actions">
            <a
              href={AUDIT_LINK}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              See my profit leak
            </a>

            <a href="#how-it-works" className="btn-outline hero-secondary">
              See how it works
            </a>
          </div>

          <p className="hero-microcopy">
            Free calculator. About 3 minutes. No credit card.
          </p>
        </div>

        <div className="hero-image">
          <img
            src={kitchenPhoto}
            alt="Wok cooking in an Asian restaurant kitchen in Portland"
            className="hero-preview-img"
            width="560"
            height="420"
            loading="eager"
          />
          <p className="hero-image-caption">
            Serving Portland restaurants — not another software login.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
