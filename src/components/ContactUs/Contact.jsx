import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="heading-section">
          <h2 className="heading">
            WE'RE HERE TO HELP<br />
            NEED TO GET IN TOUCH WITH US AT GRAY-NICOLLS?<br />
            CONTACT US.
          </h2>
        </div>
        <div className="form-section">
          <div className="form-group">
            <label className="form-label">Who are you?*</label>
            <select className="form-input">
              <option value="" disabled selected></option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Name*</label>
            <input type="text" className="form-input" placeholder="" />
          </div>
          <div className="form-group">
            <label className="form-label">Email*</label>
            <input type="email" className="form-input" placeholder="" />
          </div>
          <div className="form-group">
            <label className="form-label">Address</label>
            <input type="text" className="form-input" placeholder="" />
          </div>
          <div className="form-group">
            <label className="form-label">Area/Country</label>
            <input type="text" className="form-input" placeholder="" />
          </div>
          <div className="form-group">
            <label className="form-label">Phone number</label>
            <input type="text" className="form-input" placeholder="" />
          </div>
          <div className="form-group">
            <label className="form-label">Message*</label>
            <textarea className="form-textarea" rows="4"></textarea>
          </div>
          <p className="form-note">
            If you have a query or a question, send us a message using the form below and we'll do our best to get back to you within 24 hours.
          </p>
          <button className="send-button">SEND</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;