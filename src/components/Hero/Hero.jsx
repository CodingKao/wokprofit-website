// src/components/Hero/Hero.jsx

import React, { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    badge: "Fractional Controller Services",
    title: "Enterprise-Level Financial Strategy for Restaurant Groups",
    description:
      "Transform complex restaurant data into executive-level insights. Our fractional controller services help multi-location restaurants scale profitably with advanced financial analytics.",
    image: "<INSERT IMAGE: upscale restaurant group / financial dashboard>",
    primaryBtn: "Book Free Audit",
    primaryLink: "#contact",
    secondaryBtn: "View Services",
    secondaryLink: "#services",
  },

  {
    badge: "Restaurant Profit Optimization",
    title: "Increase Restaurant Profit Margins with Data",
    description:
      "Most restaurants lose profit through hidden inefficiencies. Wok Profit analyzes food costs, labor metrics, and menu performance to unlock hidden margins.",
    image: "<INSERT IMAGE: chef plating food / restaurant kitchen>",
    primaryBtn: "Boost My Margins",
    primaryLink: "#pricing",
    secondaryBtn: "See Pricing",
    secondaryLink: "#pricing",
  },

  {
    badge: "Financial Intelligence for Owners",
    title: "Understand Your Restaurant Numbers Like Never Before",
    description:
      "Stop guessing your profitability. Our analytics dashboards give restaurant owners clear financial insights to make smarter decisions every month.",
    image: "<INSERT IMAGE: restaurant owner reviewing laptop data>",
    primaryBtn: "Try Profit Calculator",
    primaryLink: "#calculator",
    secondaryBtn: "Learn More",
    secondaryLink: "#services",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentSlide ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="hero-overlay">

            <div className="hero-content">

              <span className="hero-badge">{slide.badge}</span>

              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <div className="hero-actions">
                <a href={slide.primaryLink} className="btn btn-primary">
                  {slide.primaryBtn}
                </a>

                <a href={slide.secondaryLink} className="btn btn-outline">
                  {slide.secondaryBtn}
                </a>
              </div>

            </div>

          </div>
        </div>
      ))}

      {/* Slider indicators */}

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active-dot" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

    </section>
  );
};

export default Hero;