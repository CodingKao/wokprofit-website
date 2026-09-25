// src/components/Cta/Cta.jsx

import React from "react";
import "./Cta.css";
import { AUDIT_LINK } from "../../config/Links";

const Cta = () => {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <h2 id="cta-title" className="cta-title">
          Start with a free look at this month’s numbers.
        </h2>

        <p className="cta-subtitle">
          About 3 minutes. You’ll see a first pass at food cost, labor, and
          what to ask next.
        </p>

        <a
          href={AUDIT_LINK}
          className="btn-primary cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a free profit audit
        </a>
      </div>
    </section>
  );
};

export default Cta;
