// src/components/RevoProSection.jsx
import React, { useContext } from "react";
import "./Neo.css";
import { ShopContext } from "../../context/ShopContext";

const RevoProSection = () => {
  const { toggleAuthModal } = useContext(ShopContext);

  console.log('ToggleAuthModal in RevoProSection:', toggleAuthModal); // Debug log

  return (
    <div className="revo-wrapper">
      <div className="revo-content-box">
        <p className="revo-waitlist-text">REJOIN THE WAITING LIST</p>
        <h2 className="revo-main-title">NEOCORE</h2>
        <button 
          className="revo-shop-btn" 
          onClick={() => {
            console.log('SIGN UP button clicked'); // Debug log
            toggleAuthModal('signup');
          }}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default RevoProSection;