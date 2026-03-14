// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "../styles/global.css"; // Global styles
import "../components/Hero/Hero.css"; // Assuming Hero styles
import "../components/Services/Services.css";
import "../components/Pricing/Pricing.css";
import "../components/Analytics/Analytics.css";
import "../components/Cta/Cta.css";
import "../components/Contact/Contact.css";

const Home = () => {
  // Add floating animation CSS & carousel JS using useEffect
  useEffect(() => {
    // Floating animation
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .hero-floating-card {
        animation: float 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    // Carousel functionality
    const track = document.getElementById("analyticsCarousel");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (track && nextBtn && prevBtn) {
      const scrollSlide = () => track.querySelector(".carousel-slide").clientWidth;

      nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: scrollSlide(), behavior: "smooth" });
      });
      prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -scrollSlide(), behavior: "smooth" });
      });

      let autoScroll = setInterval(() => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll - 10) {
          track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
        }
      }, 5000);

      track.addEventListener("mouseenter", () => clearInterval(autoScroll));
    }

    // Scroll reveal animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".service-card, .price-card, .hero-metric-item").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>Wok Profit</title>
        <meta property="og:title" content="Wok Profit" />
        <link rel="canonical" href="https://wokprofit.com/" />
        <meta property="og:url" content="https://wokprofit.com/" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-badge">Wok Profit Financial Analytics</span>
              <h1 className="hero-title">Turn Your Asian Restaurant Data Into Pure Profit</h1>
              <p className="hero-subtitle">
                Stop guessing and start growing. Our specialized financial intelligence platform
                helps Asian restaurant owners master their margins with real-time data and expert insights.
              </p>
              <div className="hero-actions">
                <a href="#pricing" className="btn btn-primary btn-lg">Boost My Margins</a>
                <a href="#services" className="btn btn-outline btn-lg">View Services</a>
              </div>
              {/* Hero Metrics */}
              <div className="hero-metrics-grid">
                <div className="hero-metric-item">
                  <span className="hero-metric-value">15%+</span>
                  <span className="hero-metric-label">Margin Increase</span>
                </div>
                <div className="hero-metric-item">
                  <span className="hero-metric-value">24/7</span>
                  <span className="hero-metric-label">Cost Intelligence</span>
                </div>
                <div className="hero-metric-item">
                  <span className="hero-metric-value">100%</span>
                  <span className="hero-metric-label">Data-Driven</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <img
                src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=1500"
                alt="Restaurant Financial Analytics Dashboard"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services, Pricing, Analytics, CTA sections */}
      {/* You can reuse your existing component JSX here for Services, Pricing, Analytics, Cta */}

      <Footer />
    </div>
  );
};

export default Home;