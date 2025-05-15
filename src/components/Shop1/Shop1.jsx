import React, { useState, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import "./Shop1.css";
import ball1 from "../../assets/n1.webp";
import ball2 from "../../assets/n2.webp";
import ball3 from "../../assets/n3.webp";
import ball4 from "../../assets/n4.webp";
import ball5 from "../../assets/n5.webp";
import ball6 from "../../assets/n6.webp";
import ball7 from "../../assets/n7.webp";
import ball8 from "../../assets/n8.webp";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../../context/ShopContext";

const categories2 = [
  "Ventus Bats",
  "Stratos Bats",
  "Gem Cricket Bats",
  "Classic Bats",
  "NEOCORE Cricket Bats",
];

const ballsData = {
  "Ventus Bats": [
    { id: 1, image: ball1, name: "Gem 2.0 Adult", price: 49 },
    { id: 2, image: ball2, name: "Gem 2.0 Adult", price: 59 },
    { id: 3, image: ball3, name: "Gem 2.0 Adult", price: 69 },
    { id: 4, image: ball4, name: "Gem 2.0 Adult", price: 79 },
  ],
  "Stratos Bats": [
    { id: 5, image: ball5, name: "Stratos 3.0 Gem Adult", price: 39 },
    { id: 6, image: ball6, name: "Stratos 3.0 Gem Adult", price: 49 },
    { id: 7, image: ball7, name: "Stratos 3.0 Gem Adult", price: 59 },
    { id: 8, image: ball8, name: "Stratos 3.0 Gem Adult", price: 69 },
  ],
  "Gem Cricket Bats": [
    { id: 9, image: ball1, name: "Gem Cricket Bats", price: 29 },
    { id: 10, image: ball2, name: "Gem Cricket Bats", price: 39 },
    { id: 11, image: ball3, name: "Gem Cricket Bats", price: 49 },
    { id: 12, image: ball4, name: "Gem Cricket Bats", price: 59 },
  ],
  "Classic Bats": [
    { id: 13, image: ball5, name: "Classic Bats 1.0", price: 19 },
    { id: 14, image: ball6, name: "Classic Bats 2.0", price: 29 },
    { id: 15, image: ball7, name: "Classic Bats 3.0", price: 39 },
    { id: 16, image: ball8, name: "Classic Bats 4.0", price: 49 },
  ],
  "NEOCORE Cricket Bats": [
    { id: 17, image: ball5, name: "NEOCORE Cricket Bats 1.0", price: 19 },
    { id: 18, image: ball6, name: "NEOCORE Cricket Bats 2.0", price: 29 },
    { id: 19, image: ball7, name: "NEOCORE Cricket Bats 3.0", price: 39 },
    { id: 20, image: ball8, name: "NEOCORE Cricket Bats 4.0", price: 49 },
  ],
};

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ventus Bats");
  const { addToCart, addToFavorites, favorites } = useContext(ShopContext);
  const { searchQuery } = useSearch();
  const location = useLocation();
  const categoryRefs = useRef({});
  const categoryContainerRef = useRef(null);

  const queryParams = new URLSearchParams(location.search);
  const activeQuery = queryParams.get("query") || searchQuery;

  useEffect(() => {
    if (activeQuery) {
      // Try to match the query with a category name
      const matchingCategory = categories2.find((category) =>
        category.toLowerCase().includes(activeQuery.toLowerCase())
      );

      if (matchingCategory) {
        setSelectedCategory(matchingCategory);
        setTimeout(() => scrollToCategory(matchingCategory), 100);
      } else {
        // Find the parent category of the first matching product
        const allBatsWithCategory = categories2.flatMap((category) =>
          ballsData[category].map((bat) => ({ ...bat, category }))
        );

        const firstMatch = allBatsWithCategory.find((bat) =>
          bat.name.toLowerCase().includes(activeQuery.toLowerCase())
        );

        if (firstMatch) {
          setSelectedCategory(firstMatch.category);
          setTimeout(() => scrollToCategory(firstMatch.category), 100);
        }
      }
    }
  }, [activeQuery]);

  const scrollToCategory = (category) => {
    const element = categoryRefs.current[category];
    if (element && categoryContainerRef.current) {
      const container = categoryContainerRef.current;
      const elementRect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const scrollPosition = elementRect.top - containerRect.top + container.scrollTop - 20;

      container.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    scrollToCategory(category);
  };

  const allBats = Object.entries(ballsData).flatMap(([category, bats]) =>
    bats.map((bat) => ({ ...bat, category }))
  );

  const filteredBats = activeQuery
    ? allBats.filter(
        (bat) =>
          bat.name.toLowerCase().includes(activeQuery.toLowerCase()) ||
          bat.category.toLowerCase().includes(activeQuery.toLowerCase())
      )
    : ballsData[selectedCategory] || [];

  return (
    <div className="shop-page">
      <h2 className="main-heading">New Season</h2>
      {activeQuery && (
        <p className="search-result-text">
          Showing results for: "{activeQuery}"
        </p>
      )}
      <div className="shop-content">
        <div className="categories-container" ref={categoryContainerRef}>
          <h3 className="category-heading">The Bats</h3>
          <div className="categories">
            {categories2.map((category) => (
              <p
                key={category}
                ref={(el) => (categoryRefs.current[category] = el)}
                className={`category ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </p>
            ))}
          </div>
        </div>
        <div className="bat-list">
          {filteredBats.length > 0 ? (
            filteredBats.map((bat) => (
              <div key={bat.id} className="bat-item">
                <div className="icons-container">
                  <button
                    className="fav-icon-button"
                    onClick={() => addToFavorites(bat)}
                    aria-label={
                      favorites.some((item) => item.id === bat.id)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    <FaHeart
                      className={`fav-icon ${
                        favorites.some((item) => item.id === bat.id)
                          ? "active"
                          : ""
                      }`}
                    />
                  </button>
                </div>
                <img src={bat.image} alt={bat.name} className="bat-image" />
                <p className="bat-name">{bat.name}</p>
                <p className="bat-price">${bat.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(bat)}
                >
                  <FaShoppingCart className="cart-icon" /> Add to Cart
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

export default ShopPage;
