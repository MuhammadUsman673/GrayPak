import React from "react";
import "./Olllie.css";
import { Link } from "react-router-dom";

const OllieSection = () => {
  return (
    <div className="ollie-section">
      <div className="ollie-content">
        <h2 className="ollie-title">SIGN-UP AND SAVE!</h2>
        <Link to="/revo-pro-2" className="ollie-shop-btn">CLICK TO SAVE 10%</Link>
      </div>
    </div>
  );
};

export default OllieSection;
