import React from "react";
import { Link } from "react-router-dom";
import "./RevenueEngine.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AUDIT_LINK } from "../config/Links";

import { HiOutlineDeviceMobile } from "react-icons/hi";
import { MdQrCode2 } from "react-icons/md";
import { FiGift, FiZap, FiBarChart2 } from "react-icons/fi";
import { TbPlugConnected } from "react-icons/tb";

const addOns = [
  {
    icon: HiOutlineDeviceMobile,
    title: "Mobile Ordering Website",
    bullets: [
      "Mobile ordering",
      "Menu photos + AI descriptions",
      "Online payments",
      "Pickup & delivery options",
    ],
  },
  {
    icon: MdQrCode2,
    title: "QR Code Ordering",
    bullets: [
      "Scan, order, and pay from phone",
      "Reduces labor and mistakes",
    ],
  },
  {
    icon: FiGift,
    title: "Loyalty & Rewards",
    bullets: [
      "Points system",
      "Rewards catalog",
      "Automated follow-ups",
    ],
  },
  {
    icon: FiZap,
    title: "AI Upsell Engine",
    bullets: [
      'Smart suggestions ("Add Thai Tea?", "Upgrade to Combo?")',
      "Increases average order value",
    ],
  },
  {
    icon: TbPlugConnected,
    title: "POS Integration",
    bullets: ["Clover, Square, Toast, Lightspeed"],
  },
  {
    icon: FiBarChart2,
    title: "Website Analytics",
    bullets: [
      "Customer behavior insights",
      "Ordering patterns",
      "Return rate",
    ],
  },
];

const maintenanceIncludes = [
  "Hosting, security updates, and uptime monitoring",
  "Menu updates and seasonal changes",
  "Payment gateway & ordering flow support",
  "Performance tuning and conversion improvements",
];

function RevenueEngine() {
  const handleAuditClick = () => {
    if (window.gtag) {
      window.gtag("event", "profit_audit_cta_click", {
        event_category: "Lead Generation",
        event_label: "Revenue Engine Page",
      });
    }
  };

  return (
    <>
      <Navbar />

      <main className="revenue-engine-page">
        <section className="re-hero">
          <div className="container re-hero-inner">
            <span className="re-eyebrow">Optional Add-On · Revenue Engine</span>
            <h1 className="re-title">Mobile Ordering Website</h1>
            <div className="re-title-divider" aria-hidden="true" />
            <p className="re-subtitle">
              Turn your restaurant website into a revenue engine — mobile ordering,
              QR pay, loyalty, AI upsells, POS sync, and analytics built for Asian
              restaurants.
            </p>

            <div className="re-pricing-card">
              <div className="re-pricing-row">
                <span className="re-pricing-label">Setup Fee</span>
                <span className="re-pricing-value">$2,500</span>
              </div>
              <div className="re-pricing-row">
                <span className="re-pricing-label">Monthly Maintenance</span>
                <span className="re-pricing-value">$250/mo</span>
              </div>
              <p className="re-pricing-note">
                One-time build plus ongoing maintenance, updates, and support so
                your ordering system stays fast, secure, and profitable.
              </p>
            </div>

            <div className="re-hero-ctas">
              <a
                href={AUDIT_LINK}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAuditClick}
              >
                Get My Free Profit Audit
              </a>
              <a href="/#contact" className="btn-outline re-secondary-cta">
                Talk to Us About Revenue Engine
              </a>
            </div>
          </div>
        </section>

        <section className="re-addons">
          <div className="container">
            <h2 className="re-section-title">What&apos;s Included in Revenue Engine</h2>
            <p className="re-section-subtitle">
              Everything you need to capture more orders, increase average ticket
              size, and reduce front-of-house labor.
            </p>

            <div className="re-addons-grid">
              {addOns.map((addon) => {
                const Icon = addon.icon;
                return (
                  <div key={addon.title} className="re-addon-card">
                    <div className="re-addon-icon-box">
                      <Icon size={28} color="#c8102e" aria-hidden="true" />
                    </div>
                    <h3 className="re-addon-title">{addon.title}</h3>
                    <ul className="re-addon-features">
                      {addon.bullets.map((bullet) => (
                        <li key={bullet}>
                          <span className="checkmark">✔</span> {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="re-maintenance">
          <div className="container re-maintenance-inner">
            <h2 className="re-section-title">Monthly Maintenance ($250/mo)</h2>
            <p className="re-section-subtitle">
              We handle the technical side so you can focus on service and sales.
            </p>
            <ul className="re-maintenance-list">
              {maintenanceIncludes.map((item) => (
                <li key={item}>
                  <span className="checkmark">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="re-bottom-cta">
          <div className="container re-bottom-cta-inner">
            <h2 className="re-section-title">Ready to Launch Your Revenue Engine?</h2>
            <p className="re-section-subtitle">
              $2,500 setup · $250/mo maintenance · Built for Asian restaurants
            </p>
            <a
              href={AUDIT_LINK}
              className="btn-primary re-bottom-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAuditClick}
            >
              Get My Free Profit Audit
            </a>
            <Link to="/" className="re-back-link">
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default RevenueEngine;
