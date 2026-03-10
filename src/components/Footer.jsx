/**
 * @file Footer.jsx
 * @description Footer section with navigation links, product lists, and social media icons.
 */

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  const productsGroup1 = ['Cashew', 'Almond', 'Pistachio', 'Raisins'];
  const productsGroup2 = ['Dry Apricot', 'Walnut', 'Black Raisins', 'Dry Figs'];

  const socialLinks = [
    { label: '@royaldelights', icon: <TwitterIcon />, href: '#' },
    { label: '/royaldelights', icon: <FacebookIcon />, href: '#' },
    { label: '/royaldelights', icon: <InstagramIcon />, href: '#' },
  ];

  return (
    <div id="footer">
      <section>
        <Container>
          <Row>
            <Col md={3} xs={5}>
              <h5>Quick Links</h5>
              <ul>
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <h6>
                      <a href={href}>{label}</a>
                    </h6>
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={3} xs={7}>
              <h5>Products</h5>
              <ul>
                {productsGroup1.map((item) => (
                  <li key={item}>
                    <h6>
                      <a href="#">{item}</a>
                    </h6>
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={3} xs={5}>
              <h5>Products</h5>
              <ul>
                {productsGroup2.map((item) => (
                  <li key={item}>
                    <h6>
                      <a href="#">{item}</a>
                    </h6>
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={3} xs={7}>
              <h5>Social Media</h5>
              <ul>
                {socialLinks.map(({ label, icon, href }) => (
                  <li key={label}>
                    <h6>
                      <a href={href}>
                        {icon} {label}
                      </a>
                    </h6>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>

          <hr />

          <div className="copyright">
            <p>&copy; {currentYear} Wok Profit LLC. All rights reserved.</p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Footer;