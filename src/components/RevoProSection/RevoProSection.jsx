import React from "react";
import "./RevoProSection.css";
import bgImage from "../../assets/kusal.webp"; // Update with actual image path
import { Link } from "react-router-dom";

const RevoProSection = () => {
  return (
    <div className="revo-pro-section">
      <div className="revo-content">
        <h2 className="revo-title">REVO PRO 2</h2>
        <Link to="/revo-pro-2" className="shop-now-btn">Shop Now</Link>
      </div>
    </div>
  );
};

export default RevoProSection;
