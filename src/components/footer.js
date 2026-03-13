import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="footer-logo-icon"
                >
                  <path
                    fill="currentColor"
                    d="M20 10a2 2 0 0 1 2 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V20a2 2 0 0 1-1.85 1.995L16 22H8a2 2 0 0 1-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 12.5V12a2 2 0 0 1 2-2zm-1.071-3.997a1 1 0 1 1 .142 1.994l-14 1a1 1 0 1 1-.142-1.994zm-.139-4.981a1 1 0 1 1 .42 1.956l-14 3a1 1 0 1 1-.42-1.956z"
                  ></path>
                </svg>
                <span className="footer-brand-name">Wok Profit</span>
              </div>
              <p className="footer-brand-description">
                Empowering Asian restaurants with 24/7 financial intelligence.
                Turn your kitchen data into actionable profit margins.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Twitter" className="footer-social-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-columns">
              <div className="footer-column">
                <h3 className="footer-column-title">Solutions</h3>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Bookkeeping</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Controller Services</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Profit Optimization</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Sales Dashboard</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Inventory Tracking</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">Company</h3>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Pricing</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Case Studies</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Blog</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">Resources</h3>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Support Center</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>API Documentation</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Financial Guides</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Security</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Partner Program</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>&amp;copy; 2026 Wok Profit. All rights reserved.</span>
            </div>
            <div className="footer-legal">
              <a href="#">
                <div className="footer-legal-link">
                  <span>Privacy Policy</span>
                </div>
              </a>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Terms of Service</span>
                </div>
              </a>
              <a href="#">
                <div className="footer-legal-link">
                  <span>Cookie Policy</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-interactivity">
(function(){
  // Subtle scroll-triggered reveal for footer items
  const footerColumns = document.querySelectorAll(".footer-column")
  const footerBrand = document.querySelector(".footer-brand")

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px",
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Initialize styles for animation
  if (footerBrand) {
    footerBrand.style.opacity = "0"
    footerBrand.style.transform = "translateY(20px)"
    footerBrand.style.transition = "all 0.6s ease-out"
    footerObserver.observe(footerBrand)
  }

  footerColumns.forEach((col, index) => {
    col.style.opacity = "0"
    col.style.transform = "translateY(20px)"
    col.style.transition = \`all 0.6s ease-out \${index * 0.1}s\`
    footerObserver.observe(col)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
