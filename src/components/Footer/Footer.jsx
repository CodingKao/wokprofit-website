// src/components/Footer/Footer.jsx

import React from "react";
import "./Footer.css";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#hero">Home</a>
        <a href="#calculator">Calculator</a>
        <a href="#how-it-works">How it works</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="footer-social">
        <a
          className="social-facebook"
          href="https://www.facebook.com/profile.php?id=61589262172260"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          className="social-instagram"
          href="https://www.instagram.com/wokprofitusa/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      <a href="#hero" className="footer-top">
        Back to Top ↑
      </a>

      <p className="footer-tagline">
        Helping Asian restaurant owners take control of their numbers and keep
        more of their hard-earned profit.
      </p>

      <p className="footer-copy">
        © {new Date().getFullYear()} Wok Profit. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
