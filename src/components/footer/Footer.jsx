import React from "react";
import "./footer.css"; // Make sure to create and style this CSS file
import { FaFacebookF, FaYoutube, FaXTwitter, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
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
              <li>About Us</li>
              <li>Careers</li>
              <li>Help</li>
              <li>Contact Us</li>
              <li>Store Locator</li>
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
            <input type="email" placeholder="Enter your email" />
            <button>Sign Up</button>
          </div>
          <h3>Follow Gray-Nicolls</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaYoutube />
            <FaXTwitter />
            <FaInstagram />
            <FaTiktok />
            <FaLinkedin />
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
