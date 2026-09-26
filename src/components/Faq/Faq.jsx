import React, { useState } from "react";
import "./Faq.css";

const questions = [
  {
    q: "Do I have to switch accountants?",
    a: "No. I can work with the books you already have, or clean them up and send a year-end package to your CPA. Most owners keep their tax person.",
  },
  {
    q: "What do you need from me each month?",
    a: "Bank and POS exports, vendor invoices, and about 30 minutes for a review call. I handle the organizing. You don’t need new software.",
  },
  {
    q: "Can I cancel after 90 days?",
    a: "Yes. Stay month to month after the first 90 days. If it’s not useful, we stop. You keep the work we already did.",
  },
  {
    q: "What do I get in the free audit?",
    a: "A first pass at food cost, labor, and leftover profit, plus two or three things to check this week — dishes, shifts, or a vendor. About 3 minutes. No credit card.",
  },
  {
    q: "Do I need to change my POS?",
    a: "No. Square, Clover, Toast, and similar systems are fine. We use what you already run.",
  },
  {
    q: "What is the $1,000 setup?",
    a: "That’s the first month: we clean the books, set them up the way a restaurant actually runs, and do the first review. Same setup on every plan. After that you pay the monthly fee.",
  },
  {
    q: "Who is this for?",
    a: "Independent Asian restaurants that want clearer food, labor, and menu numbers. If you have multiple locations or want a forecast, we can talk about Plan ahead.",
  },
  {
    q: "How soon can we start?",
    a: "Usually within a week of the first call. Send a note or the calculator results and I’ll reply the same day when I can.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-inner">
        <span className="faq-eyebrow">FAQ</span>
        <h2 className="faq-title">Common questions</h2>
        <p className="faq-subtitle">
          Short answers. If yours isn’t here, email kao@wokprofit.com.
        </p>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
