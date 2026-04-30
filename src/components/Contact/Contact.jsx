// src/components/Contact/Contact.jsx

import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import logo from "../../assets/images/logo.png";
import { AUDIT_LINK } from "../../config/Links";

const Contact = () => {
  const stickyRef = useRef(null);
  const footerRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const sticky = stickyRef.current;
    const footer = footerRef.current;

    if (!sticky || !footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sticky.classList.add("hide-cta");
          } else {
            sticky.classList.remove("hide-cta");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful submission
    setSubmitted(true);

    // Optional: scroll to success message
    setTimeout(() => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <img src={logo} alt="Wok Profit Logo" className="contact-logo" />

          <p className="contact-text">
            Wok Profit helps Asian restaurant owners understand their numbers, fix profit leaks,
            and make smarter financial decisions every month.
          </p>

          <p className="contact-email">
            Prefer email? Reach me directly: <strong>kao@wokprofit.com</strong>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          {/* SUCCESS MESSAGE */}
          {submitted ? (
            <div className="contact-success">
              <h3>Message Sent Successfully 🎉</h3>
              <p>
                Thanks for reaching out — I’ll review your message personally and follow up as soon as I’m able.
              </p>
              <p>You’ll keep the insights even if we don’t work together.</p>
            </div>
          ) : (
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>

              <h3 className="contact-form-title">
                Get a clear breakdown of where your profit is going — free.
              </h3>

              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Business Name" />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="How can we help your business?" rows="6"></textarea>

              <button type="submit" className="contact-submit">
                Send Message
              </button>

              <p className="contact-reassurance">
                Your information is never shared. No pressure. No sales pitch.
              </p>

              <div className="contact-next-box">
                <strong>What happens next:</strong>
                <ul>
                  <li>I review your message personally</li>
                  <li>I follow up as soon as I’m able</li>
                  <li>You keep the insights even if we don’t work together</li>
                </ul>
              </div>

            </form>
          )}

        </div>
      </div>

      {/* Sticky CTA */}
      <div className="sticky-cta" ref={stickyRef}>
        <a href={AUDIT_LINK} target="_blank" rel="noopener noreferrer">
          Get My Free Profit Audit
        </a>
      </div>

      {/* Footer sentinel */}
      <div ref={footerRef} className="footer-sentinel"></div>
    </section>
  );
};

export default Contact;
