// src/components/Cta/Cta.jsx

import React from "react";
import "./Cta.css";
import { AUDIT_LINK } from "../../config/Links";

const Cta = () => {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <h2 id="cta-title" className="cta-title">
          Ready for the full profit leak calculator?
        </h2>

        <p className="cta-subtitle">
          About 3 minutes. A clearer pass at food cost, labor, and what to fix
          next — built for Asian restaurants.
        </p>

        <a
          href={AUDIT_LINK}
          className="btn-primary cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          See My Profit Leak
        </a>
      </div>
    </section>
  );
};

export default Cta;
