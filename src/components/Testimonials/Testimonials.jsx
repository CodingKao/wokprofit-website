// src/components/Testimonials/Testimonials.jsx

import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Lopez",
      role: "Owner, Casa Del Sol",
      quote:
        "We thought we had a food cost problem — turns out we had three profit leaks we didn’t even know existed. WokProfit helped us recover over $7,800/month.",
    },
    {
      name: "James Park",
      role: "Owner, Bento House",
      quote:
        "The audit alone was worth more than the entire first month. I finally understand my margins and what to fix first.",
    },
    {
      name: "Sarah Nguyen",
      role: "GM, Lotus Kitchen",
      quote:
        "Our labor cost was killing us. WokProfit showed us exactly where we were overspending and helped us tighten operations without cutting staff.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container container">

        <span className="testimonials-eyebrow">Client Results</span>

        <h2 className="testimonials-title">
          What Restaurant Owners Are Saying
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="testimonials-cta btn-primary">
          Get Your Free Profit Audit
        </a>

      </div>
    </section>
  );
};

export default Testimonials;
