// src/components/Testimonials/Testimonials.jsx

import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const insights = [
    "“I’ve never had this level of clarity before.”",
    "“No accountant has ever explained my margins like this.”",
    "“I finally understand where my money is going.”",
    "“I didn’t realize how much profit I was losing until I saw the breakdown.”",
    "“This is the first time I know exactly what to fix next.”",
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container testimonials-inner">

        <span className="testimonials-eyebrow">What Restaurant Owners Usually Say</span>

        <h2 className="testimonials-title">
          Common Reactions When Owners See Their Numbers Clearly For the First Time
        </h2>

        <div className="testimonials-grid">
          {insights.map((quote, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">{quote}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
