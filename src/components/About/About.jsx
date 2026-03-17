// src/components/About/About.jsx
import React from "react";
import "./About.css";
import profile from "../../assets/images/kao-pic.jpeg"; // Your photo

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container container">
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={profile} alt="Kao - Founder of Wok Profit" />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-text">
          <h2 className="section-title">About Wok Profit</h2>
          <p className="section-subtitle">
          </p>

          <p>
            Hi there! My name is Kao. I hold a Master's in Finance and have extensive experience as a Controller, with a strong background in data analytics. I started Wok Profit to help restaurant owners take control of their numbers, understand their margins, and drive profitability.
          </p>

          <p>
            At Wok Profit, we focus on profit optimization, financial clarity, and actionable insights. By analyzing menu costs, tracking revenue streams, and identifying hidden profit opportunities, we help restaurants increase margins, reduce waste, and make smarter business decisions.
          </p>

          <p>
            Our mission is simple: empower restaurant owners to maximize profits, reduce stress, and grow a sustainable, thriving business. With Wok Profit, you’ll gain the tools and insights needed to confidently manage your finances and unlock your restaurant’s full potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;