// src/components/Contact/Contact.jsx

import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import logo from "../../assets/images/logo.png";
import { AUDIT_LINK } from "../../config/Links";

const Contact = () => {
  const stickyRef = useRef(null);
  const footerRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      business: form.business.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
      owner: form.name.value.trim(),
      restaurant: form.business.value.trim() || "Website inquiry",
      issues: form.message.value.trim(),
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setSending(false);
      setSubmitted(true);
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setSending(false);
      setError(
        "We couldn’t send that just now. Email kao@wokprofit.com and I’ll get back to you."
      );
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div className="contact-left">
          <img src={logo} alt="Wok Profit Logo" className="contact-logo" />

          <p className="contact-text">
            Prefer to talk first? Send a note with your restaurant name and
            what’s been bothering you — food cost, labor, or a quiet month.
          </p>

          <p className="contact-email">
            Or email me directly: <strong>kao@wokprofit.com</strong>
          </p>
        </div>

        <div className="contact-right">
          {submitted ? (
            <div className="contact-success">
              <h3>Message sent</h3>
              <p>
                Thanks for reaching out — I’ll review your message personally
                and follow up as soon as I can.
              </p>
              <p>You’ll keep the insights even if we don’t work together.</p>
            </div>
          ) : (
            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <h3 className="contact-form-title">
                Tell me about your restaurant
              </h3>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                autoComplete="name"
              />
              <input
                type="text"
                name="business"
                placeholder="Business Name"
                autoComplete="organization"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                autoComplete="email"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="tel"
              />
              <textarea
                name="message"
                placeholder="How can we help your business?"
                rows="6"
              ></textarea>

              {error && <p className="contact-error">{error}</p>}

              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >
                {sending ? "Sending…" : "Send Message"}
              </button>

              <p className="contact-reassurance">
                Your information is never shared. No pressure. No sales pitch.
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="sticky-cta" ref={stickyRef}>
        <a href={AUDIT_LINK} target="_blank" rel="noopener noreferrer">
          Get a free profit audit
        </a>
      </div>

      <div ref={footerRef} className="footer-sentinel"></div>
    </section>
  );
};

export default Contact;
