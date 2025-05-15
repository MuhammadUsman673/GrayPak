import React, { useRef } from "react";
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
  const scrollRef = useRef(null);

  // Scroll left & right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust as needed
      scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="shop-by-collection">
      <div className="header">
        <h2 className="section-title">Shop By Collection</h2>
        <div className="nav-buttons">
          <button onClick={() => scroll("left")} className="scroll-btn">{"<"}</button>
          <button onClick={() => scroll("right")} className="scroll-btn">{">"}</button>
        </div>
      </div>

      <div className="collection-container-wrapper">
        <div className="collection-container" ref={scrollRef}>
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
