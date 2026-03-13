import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <Link to="/">
            <div aria-label="Wok Profit - Home" className="navigation-brand">
              <div className="navigation-logo-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 0 1 1-1m15-4L5 8m14-6L5 5"
                  ></path>
                </svg>
              </div>
              <span className="navigation-brand-text">Wok Profit</span>
            </div>
          </Link>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links">
              <li>
                <Link to="/">
                  <div className="navigation-link">
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              <li>
                <a href="#services">
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#pricing">
                  <div className="navigation-link">
                    <span>Pricing</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#analytics">
                  <div className="navigation-link">
                    <span>Analytics</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-actions">
              <a href="#get-started">
                <div className="btn-md btn btn-primary">
                  <span>Get Started</span>
                </div>
              </a>
            </div>
          </div>
          <button
            id="nav-toggle"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobile-overlay"
            className="navigation-mobile-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        id="mobile-overlay"
        aria-hidden="true"
        className="navigation-mobile-overlay"
      >
        <div className="navigation-overlay-header">
          <Link to="/">
            <div aria-label="Wok Profit - Home" className="navigation-brand">
              <div className="navigation-logo-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 0 1 1-1m15-4L5 8m14-6L5 5"
                  ></path>
                </svg>
              </div>
              <span className="navigation-brand-text">Wok Profit</span>
            </div>
          </Link>
          <button
            id="nav-close"
            aria-label="Close menu"
            className="navigation-mobile-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-mobile-links">
            <li>
              <Link to="/">
                <div className="navigation-mobile-link">
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li>
              <a href="#services">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#pricing">
                <div className="navigation-mobile-link">
                  <span>Pricing</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#analytics">
                <div className="navigation-mobile-link">
                  <span>Analytics</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-mobile-actions">
            <a href="#get-started">
              <div className="btn btn-primary btn-lg">
                <span>Get Started</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="wok-profit-nav">
(function(){
  const navToggle = document.getElementById("nav-toggle")
  const navClose = document.getElementById("nav-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  function openMenu() {
    mobileOverlay.classList.add("is-active")
    document.body.style.overflow = "hidden"
    navToggle.setAttribute("aria-expanded", "true")
    mobileOverlay.setAttribute("aria-hidden", "false")
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-active")
    document.body.style.overflow = ""
    navToggle.setAttribute("aria-expanded", "false")
    mobileOverlay.setAttribute("aria-hidden", "true")
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767 && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  let lastScroll = 0
  const navWrapper = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navWrapper.style.boxShadow = "none"
      return
    }

    if (currentScroll > 0) {
      navWrapper.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.05)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
