import React from "react";
import "./ServiceArea.css";

const areas = [
  "Portland",
  "Beaverton",
  "Hillsboro",
  "Gresham",
  "Tigard",
  "Lake Oswego",
  "Milwaukie",
  "Vancouver, WA",
];

const ServiceArea = () => {
  return (
    <section id="portland" className="service-area-section">
      <div className="container service-area-inner">
        <span className="service-area-eyebrow">Portland, Oregon</span>
        <h2 className="service-area-title">
          Restaurant profit help for Portland and the metro
        </h2>
        <p className="service-area-text">
          Wok Profit is based in Portland, OR. I work with Asian restaurants —
          Thai, Chinese, Vietnamese, Japanese, Korean, and more — on food cost,
          labor, menu pricing, and monthly numbers you can actually use. Onsite
          visits across the Portland metro; remote reviews when that fits better.
        </p>
        <ul className="service-area-list">
          {areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <p className="service-area-note">
          Looking for a restaurant profit consultant or bookkeeping partner in
          Portland? Start with the free profit leak calculator, then tell me
          about your restaurant.
        </p>
      </div>
    </section>
  );
};

export default ServiceArea;
