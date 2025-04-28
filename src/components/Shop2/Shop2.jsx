import React from "react";
import "./Shop2.css";
import image1 from "../../assets/harry.webp"; // Replace with actual image paths
import image2 from "../../assets/ollie.webp"; // Replace with actual image paths

const NewSection = () => {
  return (
    <div className="new-section">
      <div className="image-container">
        <img src={image1} alt="First" className="hover-zoom" />
        <p className="image-text">Ventus</p>
      </div>
      <div className="image-container">
        <img src={image2} alt="Second" className="hover-zoom" />
        <p className="image-text">Stratos</p>
      </div>
    </div>
  );
};

export default NewSection;
