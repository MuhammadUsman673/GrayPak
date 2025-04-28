import React from "react";
import "./Neo.css";
import { Link } from "react-router-dom";

const RevoProSection = () => {
  return (
    <div className="revo-wrapper">
      <div className="revo-content-box">
        <p className="revo-waitlist-text">REJOIN THE WAITING LIST</p>
        <h2 className="revo-main-title">NEOCORE</h2>
        <Link to="/revo-pro-2" className="revo-shop-btn">SIGN UP</Link>
      </div>
    </div>
  );
};

export default RevoProSection;
