// src/components/Cta/Cta.jsx
import React from "react";
import "./Cta.css";
import {AUDIT_LINK} from "../../config/Links";

const Cta = () => {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="cta-container container">
        <span className="cta-eyebrow">Ready to increase profit?</span>

        <h2 id="cta-title" className="cta-title">
          Stop guessing where your money is going.
          <span>Start making smarter profit decisions.</span>
        </h2>

        <p className="cta-subtitle">
          Get a free profit audit and see where food cost, labor, pricing, and
          margin leaks may be hurting your restaurant.
        </p>

        <div className="cta-actions">
<a
  href={AUDIT_LINK}
  className="btn-primary"
  target="_blank"
  rel="noopener noreferrer"
>
  Get My Free Profit Audit
</a>
        </div>
      </div>
    </section>
  );
};

export default Cta;