import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <p>Email: kao@wokprofit.com</p>

      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Business Name" />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" />
        <textarea placeholder="Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;