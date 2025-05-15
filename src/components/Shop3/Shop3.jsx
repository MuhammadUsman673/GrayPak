import React, { useState, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import "./Shop3.css";
import ball1 from "../../assets/u1.webp";
import ball2 from "../../assets/u2.webp";
import ball3 from "../../assets/u3.webp";
import ball4 from "../../assets/u4.webp";
import ball5 from "../../assets/u5.webp";
import ball6 from "../../assets/u6.webp";
import ball7 from "../../assets/u7.webp";
import ball8 from "../../assets/u8.webp";
import { FaHeart } from "react-icons/fa";
import { ShopContext } from "../../context/ShopContext";

const categories2 = [
  "All Ventus",
  "All Stratos",
  "Gem Family",
  "All Classic",
];

const ballsData = {
  "All Ventus": [
    { id: 1, image: ball1, name: "All Ventus 1.0", price: 49 },
    { id: 2, image: ball2, name: "All Ventus 2.0", price: 59 },
    { id: 3, image: ball3, name: "All Ventus 3.0", price: 69 },
    { id: 4, image: ball4, name: "All Ventus 4.0", price: 79 },
  ],
  "All Stratos": [
    { id: 5, image: ball5, name: "All Stratos 1.0", price: 39 },
    { id: 6, image: ball6, name: "All Stratos 2.0", price: 49 },
    { id: 7, image: ball7, name: "All Stratos 3.0", price: 59 },
    { id: 8, image: ball8, name: "All Stratos 4.0", price: 69 },
  ],
  "Gem Family": [
    { id: 9, image: ball1, name: "Gem Family 1.0", price: 29 },
    { id: 10, image: ball2, name: "Gem Family 2.0", price: 39 },
    { id: 11, image: ball3, name: "Gem Family 3.0", price: 49 },
    { id: 12, image: ball4, name: "Gem Family 4.0", price: 59 },
  ],
  "All Classic": [
    { id: 13, image: ball5, name: "All Classic 1.0", price: 19 },
    { id: 14, image: ball6, name: "All Classic 2.0", price: 29 },
    { id: 15, image: ball7, name: "All Classic 3.0", price: 39 },
    { id: 16, image: ball8, name: "All Classic 4.0", price: 49 },
  ],
};

const ShopPage2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Ventus");
  const { addToFavorites, addToCart, favorites } = useContext(ShopContext);
  const { searchQuery } = useSearch();
  const location = useLocation();
  const batRefs = useRef({}); // Store refs for each bat item

  const queryParams = new URLSearchParams(location.search);
  const queryFromUrl = queryParams.get("query") || searchQuery;

  const allBats = Object.values(ballsData).flat();

  const filteredBats = queryFromUrl
    ? allBats.filter((bat) =>
        bat.name.toLowerCase().includes(queryFromUrl.toLowerCase())
      )
    : ballsData[selectedCategory] || [];

  // Automatically switch to the category of the first matched result
  useEffect(() => {
    if (queryFromUrl && filteredBats.length > 0) {
      const foundCategory = Object.entries(ballsData).find(([category, bats]) =>
        bats.some((bat) =>
          bat.name.toLowerCase().includes(queryFromUrl.toLowerCase())
        )
      );

      if (foundCategory) {
        setSelectedCategory(foundCategory[0]);
      }
    }
  }, [queryFromUrl]);

  // Scroll to the first matched product when filteredBats changes
  useEffect(() => {
    if (queryFromUrl && filteredBats.length > 0 && batRefs.current[filteredBats[0].id]) {
      batRefs.current[filteredBats[0].id].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [filteredBats, queryFromUrl]);

  return (
    <div className="shop-page">
      <h2 className="main-heading">New Families</h2>
      {queryFromUrl && (
        <p className="search-result-text">Showing results for: "{queryFromUrl}"</p>
      )}
      <div className="shop-content">
        <div className="categories-container">
          <h3 className="category-heading">The Bats</h3>
          <div className="categories">
            {categories2.map((category) => (
              <p
                key={category}
                className={`category ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </p>
            ))}
          </div>
        </div>
        <div className="bat-list">
          {filteredBats.length > 0 ? (
            filteredBats.map((ball) => (
              <div
                key={ball.id}
                className="bat-item"
                ref={(el) => (batRefs.current[ball.id] = el)} // Assign ref to each bat item
              >
                <button
                  className="fav-icon-button"
                  onClick={() => addToFavorites(ball)}
                  aria-label={
                    favorites.some((item) => item.id === ball.id)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  <FaHeart
                    className={`fav-icon ${
                      favorites.some((item) => item.id === ball.id)
                        ? "active"
                        : ""
                    }`}
                  />
                </button>
                <img src={ball.image} alt={ball.name} className="bat-image" />
                <p className="bat-name">{ball.name}</p>
                <p className="bat-price">${ball.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(ball)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage2;