import React, { useRef } from "react";
import "./stories.css";
import sampleImage from "../../assets/harrykane.webp"; 
import sampleImage1 from "../../assets/art.webp"; 
import sampleImage2 from "../../assets/ollieg.webp"; 
import sampleImage3 from "../../assets/willow.webp"; 
import sampleImage4 from "../../assets/atherton.webp"; 

// Each image now has a caption
const images = [
  { src: sampleImage, caption: "Harry Kane - The Striker's Journey" },
  { src: sampleImage1, caption: "Art of Cricket - A Timeless Skill" },
  { src: sampleImage2, caption: "Ollie G - Rising to the Challenge" },
  { src: sampleImage3, caption: "Willow Craft - The Batmaker’s Legacy" },
  { src: sampleImage4, caption: "Atherton - A Classic Cricket Tale" }
];

const OurStoriesSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -900, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  return (
    <div className="our-stories-container">
      <div className="header">
        <div className="text-content">
          <h3 className="greatness-heading">Greatness in the making</h3>
          <h2 className="stories-heading">OUR STORIES</h2>
        </div>
        <div className="nav-icons1">
          <span className="icon1" onClick={scrollLeft}>&lt;</span>
          <span className="icon1" onClick={scrollRight}>&gt;</span>
        </div>
      </div>

      <div className="stories-images-wrapper" ref={scrollRef}>
        <div className="stories-images">
          {images.map((item, index) => (
            <div key={index} className="story-image-container">
              <img src={item.src} alt={`Story ${index + 1}`} className="story-image" />
              <div className="image-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="horizontal-scrollbar1"></div>
    </div>
  );
};

export default OurStoriesSection;
