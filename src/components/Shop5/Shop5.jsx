import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import "./Shop5.css";
import ball1 from "../../assets/b1.webp";
import ball2 from "../../assets/b2.webp";
import ball3 from "../../assets/b3.webp";
import ball4 from "../../assets/b4.webp";
import ball5 from "../../assets/b5.webp";
import ball6 from "../../assets/b6.webp";
import ball7 from "../../assets/b7.webp";
import ball8 from "../../assets/b8.webp";
import ball9 from "../../assets/b9.webp";
import ball10 from "../../assets/b10.webp";
import ball11 from "../../assets/b11.webp";
import ball12 from "../../assets/b12.webp"; // Fixed: Corrected path, removed invalid comment
import ball13 from "../../assets/b13.webp";
import ball14 from "../../assets/b14.webp";
import ball15 from "../../assets/b15.webp";
import ball16 from "../../assets/b16.webp";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../../context/ShopContext";

const categories2 = [
  "All Shoes",
  "All Luggage",
  "All Wicketkeeping",
  "All Cricket Helmets",
  "All Clothes",
  "All Balls",
];

const ballsData = {
  "All Shoes": [
    { id: 1, image: ball1, name: "All Shoes 1.0", price: 49 },
    { id: 2, image: ball2, name: "All Shoes 2.0", price: 59 },
    { id: 3, image: ball3, name: "All Shoes 3.0", price: 69 },
    { id: 4, image: ball4, name: "All Shoes 4.0", price: 79 },
  ],
  "All Luggage": [
    { id: 5, image: ball5, name: "All Luggage 1.0", price: 39 },
    { id: 6, image: ball6, name: "All Luggage 2.0", price: 49 },
    { id: 7, image: ball7, name: "All Luggage 3.0", price: 59 },
    { id: 8, image: ball8, name: "All Luggage 4.0", price: 69 },
  ],
  "All Wicketkeeping": [
    { id: 9, image: ball9, name: "All Wicketkeeping 1.0", price: 29 },
    { id: 10, image: ball10, name: "All Wicketkeeping 2.0", price: 39 },
    { id: 11, image: ball11, name: "All Wicketkeeping 3.0", price: 49 },
    { id: 12, image: ball12, name: "All Wicketkeeping 4.0", price: 59 },
  ],
  "All Cricket Helmets": [
    { id: 13, image: ball13, name: "All Cricket Helmets 1.0", price: 19 },
    { id: 14, image: ball14, name: "All Cricket Helmets 2.0", price: 29 },
    { id: 15, image: ball15, name: "All Cricket Helmets 3.0", price: 39 },
    { id: 16, image: ball16, name: "All Cricket Helmets 4.0", price: 49 },
  ],
  "All Clothes": [
    { id: 17, image: "https://www.gray-nicolls.co.uk/cdn/shop/products/CCIA18Cap_20Pro_20Fit_20Black.jpg?v=1544783856&width=360", name: "Protection Shirt", price: 34 },
    { id: 18, image: "https://www.gray-nicolls.co.uk/cdn/shop/products/CCCB14Sweaters_Slipovers_20Velocity_20Slipover_20Green.jpg?v=1534337170&width=360", name: "Leg Guard", price: 28 },
    { id: 19, image: "https://www.gray-nicolls.co.uk/cdn/shop/products/VelocityShortSleeveShirt.jpg?v=1668683526&width=360", name: "Chest Protector", price: 45 },
    { id: 20, image: "https://www.gray-nicolls.co.uk/cdn/shop/products/5034205MatrixV2SlimIvoryTrousers1Front_f5b0a7d1-117c-46b2-b8e9-1e931f5337c1.jpg?v=1640264511&width=360", name: "Arm Guard", price: 22 },
  ],
  "All Balls": [
    { id: 21, image: "https://www.gray-nicolls.co.uk/cdn/shop/files/2600_20CDAA19_205110605_20Ball_20Crown_20Legend_20White_20156g_20Back_f892a1f5-4920-4786-8199-092b4b4ffc18.jpg?v=1699971171&width=360", name: "Agility Cones", price: 15 },
    { id: 22, image: "https://www.gray-nicolls.co.uk/cdn/shop/products/CDAK17Ball_20Crest_20Elite_20Red_20Back.jpg?v=1534338411&width=360", name: "Resistance Bands", price: 25 },
    { id: 23, image: "https://www.gray-nicolls.co.uk/cdn/shop/products/2600_20CDAF19_205111204_20Ball_20Crown_202_20Star_20135g_20Pink_20Front.jpg?v=1534338327&width=360", name: "Speed Ladder", price: 35 },
    { id: 24, image: "https://www.gray-nicolls.co.uk/cdn/shop/products/CDBF15Ball_20Wonderball_20Orange.jpg?v=1534338446&width=360", name: "Training Hurdles", price: 40 },
  ],
};

const ShopPage3 = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Shoes");
  const { addToFavorites, favorites, addToCart } = useContext(ShopContext);
  const { searchQuery } = useSearch();
  const navigate = useNavigate();
  const location = useLocation();
  const itemRefs = useRef({}); // Store refs for each item
  const categoryRefs = useRef({});
  const categoryContainerRef = useRef(null);

  const queryParams = new URLSearchParams(location.search);
  const activeQuery = queryParams.get("query") || searchQuery;

  const allItems = Object.entries(ballsData).flatMap(([category, items]) =>
    items.map((item) => ({ ...item, category }))
  );

  const filteredItems = activeQuery
    ? allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(activeQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(activeQuery.toLowerCase())
      )
    : ballsData[selectedCategory] || [];

  useEffect(() => {
    if (activeQuery) {
      const matchingCategory = categories2.find((category) =>
        category.toLowerCase().includes(activeQuery.toLowerCase())
      );

      if (matchingCategory) {
        setSelectedCategory(matchingCategory);
        setTimeout(() => scrollToCategory(matchingCategory), 100);
      } else {
        const firstMatch = allItems.find((item) =>
          item.name.toLowerCase().includes(activeQuery.toLowerCase())
        );

        if (firstMatch) {
          setSelectedCategory(firstMatch.category);
          setTimeout(() => scrollToCategory(firstMatch.category), 100);
        }
      }
    }
  }, [activeQuery]);

  // Scroll to the first matched product
  useEffect(() => {
    if (activeQuery && filteredItems.length > 0 && itemRefs.current[filteredItems[0].id]) {
      itemRefs.current[filteredItems[0].id].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [filteredItems, activeQuery]);

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

  const handleAddToCart = (item) => {
    addToCart(item);
    // navigate("/cart"); // Uncomment if navigation to cart is desired
  };

  return (
    <div className="shop-page1">
      <h2 className="main-heading">New Gear</h2>
      {activeQuery && (
        <p className="search-result-text">
          Showing results for: "{activeQuery}"
        </p>
      )}
      <div className="shop-content1">
        <div className="categories-container1" ref={categoryContainerRef}>
          <h3 className="category-heading1">The Gear</h3>
          <p className="new-products-info1">
            We've added new shoes, bags, keeping kits, and protection gear this year.
          </p>
          <div className="categories1">
            {categories2.map((category) => (
              <p
                key={category}
                ref={(el) => (categoryRefs.current[category] = el)}
                className={`category1 ${selectedCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </p>
            ))}
          </div>
        </div>

        <div className="bat-list1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bat-item1"
                ref={(el) => (itemRefs.current[item.id] = el)} // Assign ref to each item
              >
                <button
                  className="fav-icon-button"
                  onClick={() => addToFavorites(item)}
                  aria-label={
                    favorites.some((fav) => fav.id === item.id)
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                >
                  <FaHeart
                    className={`fav-icon1 ${favorites.some((fav) => fav.id === item.id) ? "active" : ""}`}
                  />
                </button>
                <img src={item.image} alt={item.name} className="bat-image1" />
                <p className="bat-name1">{item.name}</p>
                <p className="bat-price1">${item.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(item)}
                >
                  <FaShoppingCart /> Add to Cart
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

export default ShopPage3;