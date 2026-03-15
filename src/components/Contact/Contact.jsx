import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <div className="contact-header">
        <h2>Contact Wok Profit</h2>
        <p>Have questions about improving your restaurant profitability? Let's talk.</p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-socials">

          <h3>Get In Touch</h3>

          <p>
            We help restaurants analyze their financial data to increase profit
            margins and reduce costs.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> kao@wokprofit.com</p>
            <p><strong>Location:</strong> Portland, Oregon</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>

          <div className="contact-links">
            <a href="#">LinkedIn</a>
            <a href="#">Schedule Call</a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">

          <input type="text" placeholder="Full Name" required />

          <input type="text" placeholder="Business Name" />

          <input type="email" placeholder="Email Address" required />

          <input type="tel" placeholder="Phone Number" />

          <textarea placeholder="How can we help your business?" rows="5"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
};

export default Contact;