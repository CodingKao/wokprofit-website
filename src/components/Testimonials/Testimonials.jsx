// src/components/Testimonials/Testimonials.jsx

import React from "react";
import "./Testimonials.css";
import {AUDIT_LINK} from "../../config/Links";

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
      <div className="testimonials-container container">

        <span className="testimonials-eyebrow">What Restaurant Owners Usually Tell Me</span>

        <h2 className="testimonials-title">
          Real Reactions From Owners Who See Their Numbers Clearly For the First Time
        </h2>

        <div className="testimonials-grid">
          {insights.map((quote, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">{quote}</p>
            </div>
          ))}
        </div>

<a
  href={AUDIT_LINK}
  className="btn-primary"
  target="_blank"
  rel="noopener noreferrer"
>
  Get My Free Profit Audit
</a>

      </div>
    </section>
  );
};

export default Testimonials;
