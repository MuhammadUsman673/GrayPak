import React, { useRef, useState, useEffect } from "react";
import "./com.css";
import { Link } from "react-router-dom";

// Importing images
import bats from "../../assets/bat1.webp";
import wicketkeeping from "../../assets/gen3.webp";
import protection from "../../assets/pr.webp";
import shoes from "../../assets/sh.webp";
import clothing from "../../assets/cl.webp";
import luggage from "../../assets/l.webp";
import balls from "../../assets/b.jpg";

// Collection Data
const collections = [
  { name: "All Cricket Bats", image: bats, link: "/shop" },
  { name: "Wicketkeeping", image: wicketkeeping, link: "/shop" },
  { name: "Protection", image: protection, link: "/shop" },
  { name: "Cricket Shoes", image: shoes, link: "/shop" },
  { name: "Clothing", image: clothing, link: "/shop" },
  { name: "Luggage", image: luggage, link: "/shop" },
  { name: "Balls", image: balls, link: "/shop" },
];

const ShopByCollection = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (wrapperRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current;
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft >= scrollWidth - clientWidth);
    }
  };

  // Scroll left & right
  const scroll = (direction) => {
    if (wrapperRef.current) {
      const scrollAmount = 300; // Adjust as needed
      wrapperRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    wrapper.addEventListener("scroll", checkScrollPosition);
    
    // Initial check
    checkScrollPosition();
    
    return () => {
      wrapper.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="shop-by-collection">
      <div className="header">
        <h2 className="section-title">Shop By Collection</h2>
        <div className="nav-buttons">
          <button 
            onClick={() => scroll("left")} 
            className="scroll-btn"
            disabled={isAtStart}
          >
            {"<"}
          </button>
          <button 
            onClick={() => scroll("right")} 
            className="scroll-btn"
            disabled={isAtEnd}
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="collection-container-wrapper" ref={wrapperRef}>
        <div className="collection-container" ref={containerRef}>
          {collections.map((item) => (
            <Link to={item.link} key={item.name} className="collection-item">
              <img src={item.image} alt={item.name} className="collection-image" />
              <p className="collection-name">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCollection;