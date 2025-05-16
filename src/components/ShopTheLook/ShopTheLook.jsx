import React, { useRef, useContext } from "react";
import "./ShopTheLook.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

// Import images
import mainImage from "../../assets/babar.jpg";
import product1 from "../../assets/bat4.webp";
import product2 from "../../assets/bat1.webp";
import product3 from "../../assets/cl.webp";
import product4 from "../../assets/sh.webp";

const products = [
  { id: 201, image: product1, name: "Gem 2.1.5 Star Lite Cricket Bat-Junior", price: "$299" },
  { id: 202, image: product2, name: "Gem 2.1.5 Star Lite Cricket Bat-Adult", price: "$149" },
  { id: 203, image: product3, name: "Pro T20 Long Sleeve Adult Shirt", price: "$79" },
  { id: 204, image: product4, name: "Gem 2.1.5 Shoes-Junior", price: "$199" },
];

const ShopTheLook = () => {
  const scrollRef = useRef(null);
  const { addToFavorites, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  const handleAddToFavorites = (product) => {
    addToFavorites({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace('$', '')),
      image: product.image,
    });
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace('$', '')),
      image: product.image,
    });
  };

  return (
    <div className="stl-container">
      {/* Left Section */}
      <div className="stl-left-section">
        <h2 className="stl-section-title">Shop the Look</h2>

        <div className="stl-text-nav-container">
          <p className="stl-description">Gray-Nicolls and Pakistan star Babar Azam!</p>
          <div className="stl-nav-buttons">
            <button onClick={() => scroll("left")} className="stl-scroll-btn">{"<"}</button>
            <button onClick={() => scroll("right")} className="stl-scroll-btn">{">"}</button>
          </div>
        </div>

        {/* Product Scroll Area */}
        <div className="stl-product-scroll-wrapper">
          <div className="stl-product-scroll-container" ref={scrollRef}>
            {products.map((item) => (
              <div className="stl-product-card" key={item.id}>
                <div className="stl-product-img-container">
                  <img src={item.image} alt={item.name} className="stl-product-img" />
                  <button
                    className="stl-fav-btn"
                    onClick={() => handleAddToFavorites(item)}
                    aria-label={`Add ${item.name} to favorites`}
                  >
                    <FaHeart className="stl-fav-icon" />
                  </button>
                </div>
                <p className="stl-product-name">{item.name}</p>
                <p className="stl-product-price">{item.price}</p>
                <button
                  className="stl-add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="stl-right-section">
        <div className="stl-main-img-wrapper">
          <img src={mainImage} alt="Look Image" className="stl-main-img" />
          <div className="stl-name-overlay">Babar Azam Look</div>
        </div>
      </div>
    </div>
  );
};

export default ShopTheLook;