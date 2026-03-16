// src/components/Analytics/Analytics.jsx

import React, { useRef, useState } from "react";
import "./Analytics.css";

const slides = [
  {
    title: "Real-Time P&L",
    img: "https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=1500",
    text: "Monitor your net income daily with automated data integration."
  },
  {
    title: "Sales Mix Insights",
    img: "https://images.pexels.com/photos/5912324/pexels-photo-5912324.jpeg?auto=compress&cs=tinysrgb&w=1500",
    text: "Identify your Stars and Dogs with automated menu engineering."
  },
  {
    title: "Contribution Margin",
    img: "https://images.pexels.com/photos/7413936/pexels-photo-7413936.jpeg?auto=compress&cs=tinysrgb&w=1500",
    text: "Track profit per plate to optimize your recipe costs instantly."
  }
];

const Analytics = () => {

  const trackRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSlide = (index) => {
    const track = trackRef.current;
    const slideWidth = track.clientWidth;

    track.scrollTo({
      left: slideWidth * index,
      behavior: "smooth"
    });

    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    scrollToSlide(prev);
  };

  return (
    <section id="analytics" className="analytics-section">

      <div className="analytics-container">

        <h2 className="analytics-title">
          The Wok Profit Dashboard
        </h2>

        <p className="analytics-subtitle">
          Real-time alerts and deep-dive analytics designed for busy restaurateurs.
        </p>

        <div className="carousel-wrapper">

          <div className="carousel-track" ref={trackRef}>

            {slides.map((s) => (
              <div className="carousel-slide" key={s.title}>

                <img src={s.img} alt={s.title} />

                <div className="carousel-overlay">
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ARROWS */}

        <div className="carousel-controls">

          <button onClick={prevSlide} className="carousel-btn">
            ←
          </button>

          <button onClick={nextSlide} className="carousel-btn">
            →
          </button>

        </div>

        {/* DOT INDICATORS */}

        <div className="carousel-dots">

          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => scrollToSlide(index)}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Analytics;