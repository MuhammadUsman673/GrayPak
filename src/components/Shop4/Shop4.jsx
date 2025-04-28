import React from "react";
import "./Shop4.css";
import image1 from "../../assets/j1.webp"; 
import image2 from "../../assets/j2.webp"; 

const NewSection1 = () => {
  return (
    <div className="collection-section">
      {/* Headings centered over both images */}
      <div className="collection-text-overlay">
        <h2 className="collection-title">The New Collection</h2>
        <h3 className="collection-subtitle">GEM 2.1</h3>
      </div>

      {/* Image containers */}
      <div className="collection-image-container">
        <img src={image1} alt="First" className="collection-hover-zoom" />
      </div>
      <div className="collection-image-container">
        <img src={image2} alt="Second" className="collection-hover-zoom" />
      </div>
    </div>
  );
};

export default NewSection1;
