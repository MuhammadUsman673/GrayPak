import React from "react";
import "./FourImagesSection.css";

// Import images
import img1 from "../../assets/bat1.webp";
import img2 from "../../assets/bat6.webp";
import img3 from "../../assets/bat4.webp";
import img4 from "../../assets/bat6.webp";

const images = [
  { src: img1, description: "Classic" },
  { src: img2, description: "Ventus" },
  { src: img3, description: "Stratos" },
  { src: img4, description: "Gem" },
];

const FourImagesSection = () => {
  return (
    <div className="four-images-section">
      {images.map((item, index) => (
        <div className="image-card" key={index}>
          <img src={item.src} alt={item.description} className="image" />
          <p className="image-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FourImagesSection;
