// src/components/Analytics/Analytics.jsx
import React, { useEffect, useRef } from "react";
import "./Analytics.css";

const slides = [
  { title: "Real-Time P&L", img: "https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&cs=tinysrgb&w=1500", text: "Monitor your net income daily with automated data integration." },
  { title: "Sales Mix Insights", img: "https://images.pexels.com/photos/5912324/pexels-photo-5912324.jpeg?auto=compress&cs=tinysrgb&w=1500", text: "Identify your \"Stars\" and \"Dogs\" with automated menu engineering." },
  { title: "Contribution Margin", img: "https://images.pexels.com/photos/7413936/pexels-photo-7413936.jpeg?auto=compress&cs=tinysrgb&w=1500", text: "Track profit per plate to optimize your recipe costs instantly." },
];

const Analytics = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let autoScroll;

    if (!track) return;

    const next = () => {
      const slideWidth = track.querySelector(".carousel-slide").clientWidth;
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 10) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: slideWidth, behavior: "smooth" });
    };

    autoScroll = setInterval(next, 5000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section id="analytics" className="analytics-section">
      <div className="analytics-container">
        <h2>The Wok Profit Dashboard</h2>
        <p>Real-time alerts and deep-dive analytics designed for busy restaurateurs.</p>
        <div className="carousel" ref={trackRef}>
          {slides.map((s) => (
            <div className="carousel-slide" key={s.title}>
              <img src={s.img} alt={s.title} />
              <div className="carousel-overlay">
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;