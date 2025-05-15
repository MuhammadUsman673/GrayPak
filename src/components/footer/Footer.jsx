import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaXTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa6";

const Footer = ({ toggleAuthModal }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: My Account & Gray-Nicolls */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>My Account</h3>
            <ul>
              <li>Bat Repairs</li>
              <li>Delivery & Returns</li>
              <li>Loyalty Points</li>
              <li>Size Guides</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Gray-Nicolls</h3>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              {/* <li><Link to="/help">Help</Link></li> */}
              <li><Link to="/contact-us">Contact Us</Link></li>
              {/* <li><Link to="/store-locator">Store Locator</Link></li> */}
            </ul>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="newsletter-section">
          <h3>Newsletter</h3>
          <p>
            Get 10% off your first purchase and be the first to know about new products, technology, and our competitions.
          </p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" aria-label="Enter your email for newsletter" />
            <button onClick={() => toggleAuthModal('signup')}>Sign Up</button>
          </div>
          <p className="auth-prompt">
            Already have an account?{' '}
            <button type="button" className="auth-toggle-btn" onClick={() => toggleAuthModal('login')}>
              Sign in here
            </button>
          </p>
          <h3>Follow Gray-Nicolls</h3>
          <div className="social-icons">
            <a href="https://facebook.com/graynicolls" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/graynicolls" target="_blank" rel="noopener noreferrer" aria-label="Follow us on YouTube">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/graynicolls" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/graynics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@graynicolls" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok">
              <FaTiktok />
            </a>
            <a href="https://linkedin.com/company/graynicolls" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Gray-Nicolls. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;