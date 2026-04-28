import React, { useState } from "react";
import "./Onboarding.css";
import logo from "../assets/images/logo.png";

function Onboarding() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: integrate EmailJS, Airtable, or backend endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="onboarding-success">
        <h2>🎉 You're All Set!</h2>
        <p>Thank you — your onboarding details have been received.</p>
        <p>We'll review everything and reach out shortly with next steps.</p>
      </div>
    );
  }

  return (
    <div className="onboarding-container">

      {/* Logo */}
      <div className="onboarding-logo">
        <img src={logo} alt="Wok Profit Logo" />
      </div>

      {/* Title */}
      <h1>Restaurant Onboarding</h1>
      <p className="subtext">
        Please complete the form below so we can begin your full profit audit.
      </p>

      <form className="onboarding-form" onSubmit={handleSubmit}>

        <label>Restaurant Name</label>
        <input type="text" name="restaurant" required />

        <label>Owner Name</label>
        <input type="text" name="owner" required />

        <label>Phone Number</label>
        <input type="text" name="phone" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>POS System</label>
        <input type="text" name="pos" placeholder="Toast, Clover, Square, etc." />

        <label>Food Cost % (if known)</label>
        <input type="number" name="foodCost" step="0.1" />

        <label>Labor Cost % (if known)</label>
        <input type="number" name="laborCost" step="0.1" />

        <label>Hours of Operation</label>
        <input type="text" name="hours" placeholder="Mon–Sun 11am–9pm" />

        <label># of Employees</label>
        <input type="number" name="employees" />

        <label>Menu Upload (PDF or Photos)</label>
        <input type="file" name="menu" multiple />

        <label>Vendor Invoices (PDF or Photos)</label>
        <input type="file" name="invoices" multiple />

        <label>Any Known Issues?</label>
        <textarea
          name="issues"
          placeholder="Food cost high? Labor too high? Slow days? Anything helps."
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit Onboarding
        </button>
      </form>
    </div>
  );
}

export default Onboarding;
