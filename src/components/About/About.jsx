// src/components/About/About.jsx

import React from "react";
import kaopic from "../../assets/images/kao-pic.jpeg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-inner">
        <span className="about-eyebrow">Who you’re working with</span>

        <div className="about-grid">
          <div className="about-photo-wrap">
            <img src={kaopic} alt="Kao Saelor, founder of Wok Profit" />
            <p className="about-photo-name">Kao Saelor</p>
            <p className="about-photo-role">Founder · Chiang Kham, Thailand</p>
          </div>

          <div className="about-content">
            <h2 className="about-title">I started this for the restaurants I eat at.</h2>

            <p className="about-intro">
              Too many great Asian restaurants — including places I love — work
              all week and still can’t see where the money went. Long hours.
              Thin months. An accountant who files the year and never walks the
              menu.
            </p>

            <p className="about-intro">
              I have a master’s in finance and spent 5+ years in accounting and
              analytics. Wok Profit is the simple version of that: monthly
              numbers you can use, in language that matches the kitchen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
