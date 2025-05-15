import React, { useContext } from 'react';
import { FaHeart, FaCartPlus, FaTrash } from 'react-icons/fa';
import './Favorite.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { ShopContext } from '../../context/ShopContext';

const Favourites = () => {
  const { favorites, addToCart, setFavorites, setCartPopupOpen } = useContext(ShopContext);

  const addAllToCart = () => {
    favorites.forEach(item => addToCart(item));
    setFavorites([]); // Clear favorites after adding
    setCartPopupOpen(true); // Open cart popup
  };

  const removeAllFromWishlist = () => {
    setFavorites([]); // Clear all favorites
  };

  const removeFromWishlist = (id) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      {/* <Header /> */}
      <div className="favourites-page">
        <div className="favourites-header">
          <h1>Wishlist</h1>
          <div className="favourites-actions">
            <button
              className="add-all-to-cart-btn"
              onClick={addAllToCart}
              disabled={favorites.length === 0}
            >
              Add All to Cart <FaCartPlus />
            </button>
            <button
              className="remove-all-btn"
              onClick={removeAllFromWishlist}
              disabled={favorites.length === 0}
            >
              Remove All <FaTrash />
            </button>
          </div>
        </div>
        <div className="favourites-content">
          {favorites.length === 0 ? (
            <div className="empty-wishlist">
              <FaHeart className="empty-icon" />
              <p>Your wishlist is empty. Add some items to get started!</p>
            </div>
          ) : (
            <div className="wishlist-items">
              {favorites.map(item => (
                <div key={item.id} className="wishlist-item">
                  <img src={item.image} alt={item.name} className="wishlist-image" />
                  <div className="wishlist-details">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <button
                      className="buy-btn"
                      onClick={() => {
                        addToCart(item);
                        setCartPopupOpen(true);
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                  <div className="wishlist-actions">
                    <button
                      className="favorite-toggle"
                      onClick={() => {
                        addToCart(item);
                        setCartPopupOpen(true);
                      }}
                    >
                      <FaHeart className="favorite-icon active" />
                    </button>
                    <button
                      className="remove-item"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Favourites;