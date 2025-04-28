import React, { useState } from "react";
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
import ball12 from "../../assets/b12.webp";
import ball13 from "../../assets/b13.webp";
import ball14 from "../../assets/b14.webp";
import ball15 from "../../assets/b15.webp";
import ball16 from "../../assets/b16.webp";


import { FaHeart } from "react-icons/fa";

const categories2 = [
  "All Shoes",
  "All Luggage",
  "All Wicketkeeping",
  "All Cricket Helmets"
  
];

const ballsData = {
  "All Shoes": [
    { id: 1, image: ball1, name: "All Shoes 1.0", price: "$49" },
    { id: 2, image: ball2, name: "All Shoes 2.0", price: "$59" },
    { id: 3, image: ball3, name: "All Shoes 3.0", price: "$69" },
    { id: 4, image: ball4, name: "All Shoes 4.0", price: "$79" },
  ],
  "All Luggage": [
    { id: 5, image: ball5, name: "All Luggage 1.0", price: "$39" },
    { id: 6, image: ball6, name: "All Luggage 2.0", price: "$49" },
    { id: 7, image: ball7, name: "All Luggage 3.0", price: "$59" },
    { id: 8, image: ball8, name: "All Luggage 4.0", price: "$69" },
  ],
  "All Wicketkeeping": [
    { id: 9, image: ball9, name: "All Wicketkeeping 1.0", price: "$29" },
    { id: 10, image: ball10, name: "All Wicketkeeping 2.0", price: "$39" },
    { id: 11, image: ball11, name: "All Wicketkeeping 3..0", price: "$49" },
    { id: 12, image: ball12, name: "All Wicketkeeping 4.0", price: "$59" },
  ],
  "All Cricket Helmets": [
    { id: 13, image: ball13, name: "All Cricket Helmets 1.0", price: "$19" },
    { id: 14, image: ball14, name: "All Cricket Helmets 2.0", price: "$29" },
    { id: 15, image: ball15, name: "All Cricket Helmets 3.0", price: "$39" },
    { id: 16, image: ball16, name: "All Cricket Helmets 4.0", price: "$49" },
  ],
 
};

const ShopPage3 = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Shoes");
  
    return (
      <div className="shop-page1">
        <div className="shop-content1">
          <div className="categories-container1">
            <h3 className="category-heading1">The Bats</h3>
            <p className="new-products-info1">
              We've added new shoes, bags, and keeping kit this year.
            </p>
            <div className="categories1">
              {categories2.map((category) => (
                <p
                  key={category}
                  className={`category1 ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
          <div className="bat-list1">
            {ballsData[selectedCategory]?.map((ball) => (
              <div key={ball.id} className="bat-item1">
                <FaHeart className="fav-icon1" />
                <img src={ball.image} alt={ball.name} className="bat-image1" />
                <p className="bat-name1">{ball.name}</p>
                <p className="bat-price1">{ball.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default ShopPage3;
