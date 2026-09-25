// src/components/Testimonials/Testimonials.jsx

import React from "react";
import "./Testimonials.css";
import kitchenPhoto from "../../assets/images/dumpling.jpg";

const findings = [
  {
    title: "Food cost drifted",
    text: "Shrimp and oil were up, but plate prices hadn’t moved. Two popular dishes were selling well and making almost nothing.",
  },
  {
    title: "Labor didn’t match the rush",
    text: "Lunch was overstaffed midweek. Friday night was short. Same payroll, worse service, worse tickets.",
  },
  {
    title: "What we did first",
    text: "Repriced the two high-volume plates, tightened the Tuesday–Thursday lunch roster, and flagged the vendor increase to renegotiate.",
  },
];

const Testimonials = () => {
  return (
    <section id="review-example" className="testimonials-section">
      <div className="container testimonials-inner">
        <span className="testimonials-eyebrow">What a first review looks like</span>

        <h2 className="testimonials-title">
          A typical month we walk through with an owner
        </h2>

        <p className="testimonials-lead">
          I don’t publish client names yet. This is the pattern I see most
          often in independent Asian restaurants — and the first things we
          usually fix.
        </p>

        <div className="case-layout">
          <img
            src={kitchenPhoto}
            alt="Dumplings being prepared in a restaurant kitchen"
            className="case-photo"
          />

          <div className="case-findings">
            {findings.map((item) => (
              <article key={item.title} className="case-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
