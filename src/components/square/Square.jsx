import React from "react";
import "./square.css";
import img1 from "../../assets/s1.jpeg";
import img2 from "../../assets/s2.jpeg";
import img3 from "../../assets/s3.jpg";
import img4 from "../../assets/s4.jpg";
import img5 from "../../assets/s5.jpg";

const images = [img1, img2, img3, img4, img5];

const TheSquareSection = () => {
  return (
    <div className="square-container">
      <h2 className="square-heading">The Square</h2>
      
      <div className="square-images-wrapper">
        <div className="square-images">
          {images.map((img, index) => (
            <div key={index} className="square-image-container">
              <img src={img} alt={`Square ${index + 1}`} className="square-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheSquareSection;
