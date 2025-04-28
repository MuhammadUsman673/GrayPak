import React, { useRef } from "react";
import "./ShopTheLook.css";

// Import images
import mainImage from "../../assets/babar.jpg";
import product1 from "../../assets/bat4.webp";
import product2 from "../../assets/bat1.webp";
import product3 from "../../assets/cl.webp";
import product4 from "../../assets/sh.webp";

const products = [
  { image: product1, name: "Gem 2.1.5 Star Lite Cricket Bat-Junior", price: "$299" },
  { image: product2, name: "Gem 2.1.5 Star Lite Cricket Bat-Adult", price: "$149" },
  { image: product3, name: "Pro T20 Long Sleeve Adult Shirt", price: "$79" },
  { image: product4, name: "Gem 2.1.5 Shoes-Junior", price: "$199" },
];

const ShopTheLook = () => {
  const scrollRef = useRef(null);

  // Scroll Function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="shop-the-look">
      {/* Left Section */}
      <div className="left-section">
        <h2 className="section-title">Shop the Look</h2>

        {/* Description & Navigation Buttons */}
        <div className="text-nav-container">
          <p className="description">Gray-Nicolls and Pakistan star Babar Azam!</p>
          <div className="nav-buttons">
            <button onClick={() => scroll("left")} className="scroll-btn">{"<"}</button>
            <button onClick={() => scroll("right")} className="scroll-btn">{">"}</button>
          </div>
        </div>

        {/* Scrollable Product Images */}
        <div className="product-container-wrapper">
          <div className="product-container" ref={scrollRef}>
            {products.map((item, index) => (
              <div className="product-item" key={index}>
                <img src={item.image} alt={item.name} className="product-image" />
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="image-wrapper">
          <img src={mainImage} alt="Look Image" className="main-image" />
          <div className="name-overlay">Babar Azam Look</div>
        </div>
      </div>
    </div>
  );
};

export default ShopTheLook;
