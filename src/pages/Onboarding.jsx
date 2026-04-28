import React, { useState } from "react";
import "./Onboarding.css";
import logo from "../assets/images/logo.png";

// EmailJS + Airtable imports
import emailjs from "emailjs-com";
import Airtable from "airtable";

// Airtable configuration
const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

function Onboarding() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Extract form fields
    const data = {
      restaurant: formData.get("restaurant"),
      owner: formData.get("owner"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      pos: formData.get("pos"),
      foodCost: formData.get("foodCost"),
      laborCost: formData.get("laborCost"),
      hours: formData.get("hours"),
      employees: formData.get("employees"),
      issues: formData.get("issues"),
    };

    /* ------------------------------------
       1. SEND EMAIL NOTIFICATION (EmailJS)
    ------------------------------------ */
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
    } catch (err) {
      console.error("EmailJS Error:", err);
    }

    /* ------------------------------------
       2. STORE DATA IN AIRTABLE
    ------------------------------------ */
    try {
      await base("Clients").create([
        {
          fields: {
            "Restaurant Name": data.restaurant,
            "Owner Name": data.owner,
            Phone: data.phone,
            Email: data.email,
            "POS System": data.pos,
            "Food Cost %": Number(data.foodCost) || null,
            "Labor Cost %": Number(data.laborCost) || null,
            Hours: data.hours,
            Employees: Number(data.employees) || null,
            "Known Issues": data.issues,
            Status: "New",
          },
        },
      ]);
    } catch (err) {
      console.error("Airtable Error:", err);
    }

    // Show success screen
    setSubmitted(true);
  };

  /* ------------------------------------
     SUCCESS SCREEN
  ------------------------------------ */
  if (submitted) {
    return (
      <div className="onboarding-success">
        <h2>🎉 You're All Set!</h2>
        <p>Thank you — your onboarding details have been received.</p>
        <p>We'll review everything and reach out shortly with next steps.</p>
      </div>
    );
  }

  /* ------------------------------------
     ONBOARDING FORM UI
  ------------------------------------ */
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
