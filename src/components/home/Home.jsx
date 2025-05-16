import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Header from '../header/Header';
import { FaHeart } from 'react-icons/fa';
import { ShopContext } from '../../context/ShopContext';
import ShopByCollection from '../components/Com';
import RevoProSection from '../RevoProSection/RevoProSection';
import FourImagesSection from '../FourImagesSection/FourImagesSection';
import ShopTheLook from '../ShopTheLook/ShopTheLook';
import RevoProSection1 from '../Ollie/Ollie';
import RevoProSection2 from '../Neo/Neo';
import RevoProSection4 from '../kit/Kit';
import OurStoriesSection from '../stories/Stories';
import TheSquareSection from '../square/Square';

// Importing Images
import g1 from '../../assets/gen.webp';
import g2 from '../../assets/gen2.webp';
import g3 from '../../assets/gen3.webp';
import g4 from '../../assets/gen5.webp';
import bat1 from '../../assets/bat1.webp';
import bat2 from '../../assets/bat2.webp';
import bat3 from '../../assets/bat6.webp';
import bat4 from '../../assets/bat4.webp';
import Footer from '../footer/Footer';

const ProductCard = ({ id, title, price, sizes, images, sizeLabel = "Glove Size" }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart, addToFavorites, setCartPopupOpen } = useContext(ShopContext);

  const handleAddToCart = () => {
    const product = {
      id,
      name: title,
      price: parseFloat(price.replace('£', '')),
      image: images[0],
      quantity: Number(quantity),
      size: selectedSize
    };
    addToCart(product);
    setCartPopupOpen(true);
  };

  const handleAddToFavorites = () => {
    const product = {
      id,
      name: title,
      price: parseFloat(price.replace('£', '')),
      image: images[0]
    };
    addToFavorites(product);
  };

  return (
    <div className="product-card-container">
      {/* Image Gallery */}
      <div className="product-image-container">
        <img src={images[currentImageIndex]} alt={title} className="main-product-image" />
        {/* Favorite Icon moved to image container */}
        <button className="favorite-icon-button" onClick={handleAddToFavorites}>
          <FaHeart className="favorite-icon" />
        </button>
        <div className="image-thumbnails">
          {images.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={title}
              className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <div className="size-section">
          <p className="size-label">{sizeLabel}:</p>
          <div className="size-options">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="size-guide">Size Guide</p>
        </div>
        <div className="divider"></div>
        <p className="product-price">{price}</p>
        <div className="quantity-cart-section">
          <div className="quantity-selector">
            <button 
              className="quantity-btn" 
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button 
              className="quantity-btn" 
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Header /> */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">HARRY'S HOUSE</h1>
          <button className="shop-now-btn" onClick={() => navigate('/shop')}>
            SHOP NOW
          </button>
        </div>
      </div>
      
      {/* Batting Gloves Product Listing */}
      <div className="product-listing-container">
        <h2 className="section-title1">BATTING GLOVES</h2>
        <ProductCard 
          id={101}
          title="Stratos 1.0 1500 Batting Gloves"
          price="£99.99"
          sizes={["RH - Small", "LH - Small", "RH - Adult", "LH - Adult", "RH - Large", "LH - Large"]}
          images={[g1, g2, g3, g4]} 
        />
      </div>
      
      {/* Cricket Bats Product Listing */}
      <div className="product-listing-container">
        <h2 className="section-title1">CRICKET BATS</h2>
        <ProductCard 
          id={102}
          title="Stratos 1.0 1500 Cricket Bat"
          price="£249.99"
          sizes={["Short Handle", "Long Handle", "Harvey Handle", "Junior Size"]}
          images={[bat1, bat2, bat3, bat4]}
          sizeLabel="Bat Size" 
        />
      </div>
      <ShopByCollection/>
      <RevoProSection/>
      <FourImagesSection/>
      <ShopTheLook/>
      <RevoProSection1/>
      <RevoProSection2/>
      <RevoProSection4/>
      <OurStoriesSection/>
      <TheSquareSection/>
      {/* <Footer/> */}
    </>
  );
};

export default Home;