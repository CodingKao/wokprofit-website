// src/components/Analytics/Analytics.jsx

import React, { useEffect, useRef, useState } from "react";
import "./Analytics.css";

const slides = [
  {
    title: "Real-Time Profit Visibility",
    img: "https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=1500",
    text: "See whether your restaurant is actually making money day by day—not just generating sales."
  },
  {
    title: "Menu Performance Insights",
    img: "https://images.pexels.com/photos/5912324/pexels-photo-5912324.jpeg?auto=compress&cs=tinysrgb&w=1500",
    text: "Identify which menu items drive profit, which ones drain margin, and where pricing needs adjustment."
  },
  {
    title: "Contribution Margin Tracking",
    img: "https://images.pexels.com/photos/7413936/pexels-photo-7413936.jpeg?auto=compress&cs=tinysrgb&w=1500",
    text: "Track profit per plate so you can optimize food cost, improve pricing, and protect your margins."
  }
];

const Analytics = () => {
  const trackRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToSlide = (index) => {
    const track = trackRef.current;
    if (!track) return;

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const slideWidth = track.clientWidth;
      if (!slideWidth) return;

      const index = Math.round(track.scrollLeft / slideWidth);
      setCurrentSlide(index);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="analytics" className="analytics-section">
      <div className="analytics-container container">
        <span className="analytics-eyebrow">The Wok Profit System</span>

        <h2 className="analytics-title">
          Turn Restaurant Data Into Clear Profit Decisions
        </h2>

        <p className="analytics-subtitle">
          You do not need more spreadsheets. You need a dashboard that shows
          where profit is leaking, what is driving margin, and what to fix next.
        </p>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            ref={trackRef}
            aria-label="Wok Profit dashboard highlights"
          >
            {slides.map((slide) => (
              <div className="carousel-slide" key={slide.title}>
                <img src={slide.img} alt={slide.title} />

                <div className="carousel-overlay">
                  <span className="slide-label">Dashboard Insight</span>
                  <h4>{slide.title}</h4>
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button
            type="button"
            onClick={prevSlide}
            className="carousel-btn"
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="carousel-btn"
            aria-label="Next slide"
          >
            →
          </button>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Carousel navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to ${slide.title}`}
              aria-pressed={currentSlide === index}
            />
          ))}
        </div>

        <div className="analytics-proof">
          <p>
            <strong>What this gives you:</strong> faster decisions, tighter cost
            control, better pricing visibility, and a clearer path to higher profit.
          </p>
        </div>

        <a href="#contact" className="analytics-cta btn-primary">
          Get Your Free Profit Audit
        </a>
      </div>
    </section>
  );
};

export default Analytics;