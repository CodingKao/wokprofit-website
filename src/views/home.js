import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Lustrous Composed Mosquito</title>
        <meta property="og:title" content="Lustrous Composed Mosquito" />
        <link
          rel="canonical"
          href="https://lustrous-composed-mosquito-4a47l9.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://lustrous-composed-mosquito-4a47l9.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  overflow: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-badge">Wok Profit Financial Analytics</span>
              <h1 className="hero-title">
                Turn Your Asian Restaurant Data Into Pure Profit
              </h1>
              <p className="hero-subtitle">
                Stop guessing and start growing. Our specialized financial
                intelligence platform helps Asian restaurant owners master their
                margins with real-time data and expert insights.
              </p>
              <div className="hero-actions">
                <a href="#pricing">
                  <div className="btn btn-primary btn-lg">
                    <span>Boost My Margins</span>
                  </div>
                </a>
                <a href="#services">
                  <div className="btn btn-lg btn-outline">
                    <span>View Services</span>
                  </div>
                </a>
              </div>
              <div className="hero-metrics-grid">
                <div className="hero-metric-item">
                  <div className="hero-metric-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="hero-metric-text">
                    <span className="hero-metric-value">15%+</span>
                    <span className="hero-metric-label">Margin Increase</span>
                  </div>
                </div>
                <div className="hero-metric-item">
                  <div className="hero-metric-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="hero-metric-text">
                    <span className="hero-metric-value">24/7</span>
                    <span className="hero-metric-label">Cost Intelligence</span>
                  </div>
                </div>
                <div className="hero-metric-item">
                  <div className="hero-metric-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3v16a2 2 0 0 0 2 2h16m-3-4V9m-5 8V5M8 17v-3"
                      ></path>
                    </svg>
                  </div>
                  <div className="hero-metric-text">
                    <span className="hero-metric-value">100%</span>
                    <span className="hero-metric-label">Data-Driven</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Restaurant Financial Analytics Dashboard"
                  className="hero-image"
                />
                <div className="hero-floating-card hero-floating-1">
                  <span className="floating-label">Weekly Profit</span>
                  <span className="floating-value">+$4,250</span>
                </div>
                <div className="hero-floating-card hero-floating-2">
                  <span className="floating-label">Food Cost</span>
                  <span className="floating-value">28.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="section-title">Specialized Financial Solutions</h2>
            <p className="section-subtitle">
              Tailored intelligence for the unique demands of Asian hospitality.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                    <path d="m9 9.5l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">Bookkeeping</h3>
              <ul className="service-bullets">
                <li className="service-bullet-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Accurate P&amp;L Tracking
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="service-bullet-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Balance Sheet Management
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="service-bullet-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Daily Reconciliations
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <a href="#pricing">
                <div className="btn btn-link">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="service-card service-card-featured">
              <div className="service-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    <path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">Controller</h3>
              <ul className="service-bullets">
                <li className="service-bullet-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Prime Cost Analysis
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="service-bullet-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Budget vs Actual Reporting
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="service-bullet-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Sales Performance Dashboard
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <a href="#pricing">
                <div className="btn btn-link">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">Profit Optimization</h3>
              <ul className="service-bullets">
                <li className="service-bullet-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Menu Engineering
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="service-bullet-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Contribution Margin Analysis
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="service-bullet-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Break-even Strategy
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <a href="#pricing">
                <div className="btn btn-link">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <h2 className="section-title">Transparent Pricing Tiers</h2>
            <p className="section-subtitle">
              Scalable financial intelligence for every stage of your
              restaurant&apos;s growth.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-card-inner">
                <h3 className="price-tier-name">Bookkeeping</h3>
                <div className="price-amount">
                  <span>
                    {' '}
                    $400–700
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="price-period">/mo</span>
                </div>
                <p className="price-description">
                  Foundation for clean financials and tax compliance.
                </p>
                <div className="price-features">
                  <div className="price-feature-item">
                    <span>P&amp;L &amp; Balance Sheet</span>
                  </div>
                  <div className="price-feature-item">
                    <span>Cash Flow Tracking</span>
                  </div>
                  <div className="price-feature-item">
                    <span>Monthly Reconciliations</span>
                  </div>
                  <div className="price-feature-item">
                    <span>Standard Monthly Report</span>
                  </div>
                </div>
                <button className="w-full btn btn-lg btn-outline">
                  Choose Bookkeeping
                </button>
              </div>
            </div>
            <div className="price-card price-card-popular">
              <div className="price-card-inner">
                <div className="popular-tag">
                  <span>Most Popular</span>
                </div>
                <h3 className="price-tier-name">Controller</h3>
                <div className="price-amount">
                  <span>
                    {' '}
                    $1200–1800
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="price-period">/mo</span>
                </div>
                <p className="price-description">
                  Strategic oversight for active cost management.
                </p>
                <div className="price-features">
                  <div className="price-feature-item">
                    <span>Budget vs Actual Analysis</span>
                  </div>
                  <div className="price-feature-item">
                    <span>Prime Cost Tracking</span>
                  </div>
                  <div className="price-feature-item">
                    <span>Sales Mix Dashboard</span>
                  </div>
                  <div className="price-feature-item">
                    <span>12-Month Cash Forecast</span>
                  </div>
                </div>
                <button className="w-full btn btn-primary btn-lg">
                  Choose Controller
                </button>
              </div>
            </div>
            <div className="price-card">
              <div className="price-card-inner">
                <h3 className="price-tier-name">Profit Optimization</h3>
                <div className="price-amount">
                  <span>
                    {' '}
                    $2000–3000
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="price-period">/mo</span>
                </div>
                <p className="price-description">
                  Maximum ROI through deep operational data.
                </p>
                <div className="price-features">
                  <div className="price-feature-item">
                    <span>Full Menu Engineering</span>
                  </div>
                  <div className="price-feature-item">
                    <span>Contribution Margin Audit</span>
                  </div>
                  <div className="price-feature-item">
                    <span>Live Food Cost Tracking</span>
                  </div>
                  <div className="price-feature-item">
                    <span>Break-even Sensitivity</span>
                  </div>
                </div>
                <button className="w-full btn btn-lg btn-outline">
                  Choose Optimization
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="analytics-section">
        <div className="analytics-container">
          <div className="analytics-header">
            <h2 className="section-title">The Wok Profit Dashboard</h2>
            <p className="section-subtitle">
              Real-time alerts and deep-dive analytics designed for busy
              restaurateurs.
            </p>
          </div>
          <div className="carousel-outer">
            <div id="analyticsCarousel" className="carousel-track">
              <div className="carousel-slide">
                <div className="slide-content">
                  <img
                    src="https://images.pexels.com/photos/7887816/pexels-photo-7887816.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="P&amp;L Dashboard Preview"
                    className="slide-image"
                  />
                  <div className="slide-overlay">
                    <h4 className="slide-title">Real-Time P&amp;L</h4>
                    <p className="slide-text">
                      Monitor your net income daily with automated data
                      integration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-content">
                  <img
                    src="https://images.pexels.com/photos/5912324/pexels-photo-5912324.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Sales Mix Analysis"
                    className="slide-image"
                  />
                  <div className="slide-overlay">
                    <h4 className="slide-title">Sales Mix Insights</h4>
                    <p className="slide-text">
                      Identify your &quot;Stars&quot; and &quot;Dogs&quot; with
                      automated menu engineering.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-content">
                  <img
                    src="https://images.pexels.com/photos/7413936/pexels-photo-7413936.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Contribution Margin"
                    className="slide-image"
                  />
                  <div className="slide-overlay">
                    <h4 className="slide-title">Contribution Margin</h4>
                    <p className="slide-text">
                      Track profit per plate to optimize your recipe costs
                      instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button
                id="prevBtn"
                aria-label="Previous Slide"
                className="carousel-btn prev"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m15 18l-6-6l6-6"
                  ></path>
                </svg>
              </button>
              <button
                id="nextBtn"
                aria-label="Next Slide"
                className="carousel-btn next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 18l6-6l-6-6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <div className="cta-inner">
              <h2 className="section-title">
                Ready to Transform Your Restaurant&apos;s Profitability?
              </h2>
              <p className="section-content">
                Join hundreds of Asian restaurant owners who have unlocked an
                average of 15% in hidden margins. Our data-driven approach takes
                the guesswork out of your kitchen operations.
              </p>
              <div className="cta-actions">
                <a href="#">
                  <div className="btn btn-accent btn-xl">
                    <span>Boost My Margins Now</span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn btn-outline btn-xl">
                    <span>Schedule a Demo</span>
                  </div>
                </a>
              </div>
              <div className="cta-trust">
                <div className="trust-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                  <span>Bank-Level Security</span>
                </div>
                <div className="trust-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    ></path>
                  </svg>
                  <span>No Long-Term Contracts</span>
                </div>
                <div className="trust-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3v16a2 2 0 0 0 2 2h16m-3-4V9m-5 8V5M8 17v-3"
                    ></path>
                  </svg>
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container6">
        <div className="home-container7">
          <Script
            html={`<script defer data-name="wok-profit-logic">
(function(){
  const track = document.getElementById("analyticsCarousel")
  const nextBtn = document.getElementById("nextBtn")
  const prevBtn = document.getElementById("prevBtn")

  if (track && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      const slideWidth = track.querySelector(".carousel-slide").clientWidth
      track.scrollBy({ left: slideWidth, behavior: "smooth" })
    })

    prevBtn.addEventListener("click", () => {
      const slideWidth = track.querySelector(".carousel-slide").clientWidth
      track.scrollBy({ left: -slideWidth, behavior: "smooth" })
    })

    // Optional: Auto-scroll
    let autoScroll = setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth
      if (track.scrollLeft >= maxScroll - 10) {
        track.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        track.scrollBy({ left: track.clientWidth, behavior: "smooth" })
      }
    }, 5000)

    track.addEventListener("mouseenter", () => clearInterval(autoScroll))
  }

  // Simple Intersection Observer for scroll reveals
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".service-card, .price-card, .hero-metric-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon62"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text45">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
