import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <>
      {/* Top Image Section */}
      <div className="careers-container">
        <div className="image-wrapper">
          <img
            src="https://www.gray-nicolls.co.uk/cdn/shop/files/Dutch_Cricket_Team_Amsterdam-2348_7d9cb7f8-8a28-4510-a37b-ea447d40812e.jpg?v=1695821321&width=1400" // Replace with actual URL
            alt="Careers Team"
            className="careers-image"
          />
          <h1 className="careers-text">Careers</h1>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section">
        <div className="contact-content">
          <img
            src="https://www.gray-nicolls.co.uk/cdn/shop/files/Gray_Nicolls_Primary_Logo_Outlined_Positive_1.png?v=1698753717&width=500" // Replace with actual URL
            alt="Gray Nicolls Logo"
            className="contact-logo"
          />
          <div className="contact-text">
            <p>
              We're always on the hunt for new teammates to join the Gray-Nicolls team. If you've
              got a passion for product, marketing, sales or accounts, careers at Gray-Nicolls are
              rewarding and long-lasting. So whether you’ve got a particular specialism, or you're a
              great all-rounder, send us an email with a bit about you and your CV and we’ll be in
              touch after our next selection meeting if you fit the bill.
            </p>
            <button className="contact-button">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
