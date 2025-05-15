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
    // navigate("/cart"); // Redirect to cart
  };

  return (
    <div className="shop-the-look">
      {/* Left Section */}
      <div className="left-section">
        <h2 className="section-title">Shop the Look</h2>

        <div className="text-nav-container">
          <p className="description">Gray-Nicolls and Pakistan star Babar Azam!</p>
          <div className="nav-buttons">
            <button onClick={() => scroll("left")} className="scroll-btn">{"<"}</button>
            <button onClick={() => scroll("right")} className="scroll-btn">{">"}</button>
          </div>
        </div>

        {/* Product Scroll Area */}
        <div className="product-container-wrapper">
          <div className="product-container" ref={scrollRef}>
            {products.map((item) => (
              <div className="product-item" key={item.id}>
                <img src={item.image} alt={item.name} className="product-image" />

                {/* Favorite Button */}
                <button
                  className="favorite-icon-button"
                  onClick={() => handleAddToFavorites(item)}
                  aria-label={`Add ${item.name} to favorites`}
                >
                  <FaHeart className="favorite-icon" />
                </button>

                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>

                {/* Add to Cart Button */}
                <button
                  className="add-to-cart-button"
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
