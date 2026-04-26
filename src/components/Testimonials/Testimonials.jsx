// src/components/Testimonials/Testimonials.jsx
import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "We discovered over $3,800/month in hidden profit just from pricing and food cost adjustments. I had no idea we were leaking that much.",
    name: "Jason L.",
    role: "Restaurant Owner",
  },
  {
    quote:
      "The dashboard alone changed how we run the business. We finally know what’s making money and what’s not—daily.",
    name: "Michelle T.",
    role: "Cafe Owner",
  },
  {
    quote:
      "We were busy but not profitable. After working with Wok Profit, our margins improved within the first month.",
    name: "David K.",
    role: "Restaurant Operator",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container container">
        <span className="testimonials-eyebrow">
          Real Results
        </span>

        <h2 className="testimonials-title">
          Restaurant Owners Are Finding Hidden Profit
        </h2>

        <p className="testimonials-subtitle">
          Most restaurants are sitting on thousands in missed profit. Here’s what happens when they fix it.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-quote">“{t.quote}”</p>

              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="testimonials-cta">
          Get Your Free Profit Audit
        </a>
      </div>
    </section>
  );
};

export default Testimonials;