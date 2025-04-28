import React, { useState } from "react";
import "./Shop1.css";
import ball1 from "../../assets/n1.webp";
import ball2 from "../../assets/n2.webp";
import ball3 from "../../assets/n3.webp";
import ball4 from "../../assets/n4.webp";
import ball5 from "../../assets/n5.webp";
import ball6 from "../../assets/n6.webp";
import ball7 from "../../assets/n7.webp";
import ball8 from "../../assets/n8.webp";
import ball9 from "../../assets/n1.webp";
import ball10 from "../../assets/n2.webp";
import ball11 from "../../assets/n3.webp";
import ball12 from "../../assets/n4.webp";
import ball13 from "../../assets/n5.webp";
import ball14 from "../../assets/n6.webp";
import ball15 from "../../assets/n7.webp";
import ball16 from "../../assets/n8.webp";
import ball17 from "../../assets/n1.webp";
import ball18 from "../../assets/n2.webp";
import ball19 from "../../assets/n3.webp";
import ball20 from "../../assets/n4.webp";

import { FaHeart } from "react-icons/fa";

const categories2 = [
  "Ventus Bats",
  "Stratos Bats",
  "Gem Cricket Bats",
  "Classic Bats",
  "NEOCORE Cricket Bats"
];

const ballsData = {
  "Ventus Bats": [
    { id: 1, image: ball1, name: "Gem 2.0 Adult", price: "$49" },
    { id: 2, image: ball2, name: "Gem 2.0 Adult", price: "$59" },
    { id: 3, image: ball3, name: "Gem 2.0 Adult", price: "$69" },
    { id: 4, image: ball4, name: "Gem 2.0 Adult", price: "$79" },
  ],
  "Stratos Bats": [
    { id: 5, image: ball5, name: "Stratos 3.0 Gem Adult", price: "$39" },
    { id: 6, image: ball6, name: "Stratos 3.0 Gem Adult", price: "$49" },
    { id: 7, image: ball7, name: "Stratos 3.0 Gem Adult", price: "$59" },
    { id: 8, image: ball8, name: "Stratos 3.0 Gem Adult", price: "$69" },
  ],
  "Gem Cricket Bats": [
    { id: 9, image: ball1, name: "Gem Cricket Bats", price: "$29" },
    { id: 10, image: ball2, name: "Gem Cricket Bats", price: "$39" },
    { id: 11, image: ball3, name: "Gem Cricket Bats", price: "$49" },
    { id: 12, image: ball4, name: "Gem Cricket Bats", price: "$59" },
  ],
  "Classic Bats": [
    { id: 13, image: ball5, name: "Classic Bats 1.0", price: "$19" },
    { id: 14, image: ball6, name: "Classic Bats 2.0", price: "$29" },
    { id: 15, image: ball7, name: "Classic Bats 3.0", price: "$39" },
    { id: 16, image: ball8, name: "Classic Bats 4.0", price: "$49" },
  ],
  "NEOCORE Cricket Bats": [
    { id: 17, image: ball5, name: "NEOCORE Cricket Bats 1.0", price: "$19" },
    { id: 18, image: ball6, name: "NEOCORE Cricket Bats 2.0", price: "$29" },
    { id: 19, image: ball7, name: "NEOCORE Cricket Bats 3.0", price: "$39" },
    { id: 20, image: ball8, name: "NEOCORE Cricket Bats 4.0", price: "$49" },
  ],
};

const ShopPage2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ventus Bats");

  return (
    <div className="shop-page">
      <h2 className="main-heading">New Season</h2>
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
          {ballsData[selectedCategory]?.map((ball) => (
            <div key={ball.id} className="bat-item">
              <FaHeart className="fav-icon" />
              <img src={ball.image} alt={ball.name} className="bat-image" />
              <p className="bat-name">{ball.name}</p>
              <p className="bat-price">{ball.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage2;
