// src/components/Contact/Contact.jsx
import React from "react";
import "./Contact.css";
import logo from "../../assets/images/logo.png";

// React icons
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube,
  FaGithub 
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-logo">
            <img src={logo} alt="Wok Profit Logo" />
          </div>

          <p className="contact-description">
            Wok Profit helps restaurants analyze their financial data to optimize profits, reduce food and labor costs, and improve overall operations. 
            Our tools provide actionable insights on menu performance, contribution margins, labor efficiency, and cost control strategies. 
            <br /><br />
            Partner with us to unlock hidden profit opportunities and make smarter, data-driven business decisions. 
            Whether you’re a single-location restaurant or a growing chain, Wok Profit’s dashboards and analytics empower restaurant owners to increase margins and operational efficiency.
          </p>

          <div className="contact-social-icons">
            <a href="#" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>

          <div className="contact-info">
            <p><strong>Email:</strong> kao@wokprofit.com</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <form id="contact-form" className="contact-form">

            <h3 className="contact-form-title">
              Start with a <strong>free Profit Review</strong> – no commitment
            </h3>

            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Business Name" />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="How can we help your business?" rows="6"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      {/* 🔥 Sticky CTA */}
      <div className="sticky-cta">
        <a href="#contact-form">Book Free Profit Review</a>
      </div>

    </section>
  );
};

export default Contact;