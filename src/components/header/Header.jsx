import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaBars, FaTimes, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { ShopContext } from '../../context/ShopContext';
import logo from '../../assets/logo.png'; 
import './header.css';

const Header = ({ toggleAuthModal, authModal }) => {
  const { 
    cartItems, 
    favorites,
    addToCart,
    setCartItems,
    cartPopupOpen,
    setCartPopupOpen
  } = useContext(ShopContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    signupFirstName: '',
    signupLastName: '',
    signupEmail: '',
    signupPassword: '',
    gdprConsent: false
  });
  const navigate = useNavigate();

  const mustHaves = [
    { id: 1, name: 'Neocore Bat', price: 99.99, image: '/src/assets/neocore.jpeg' },
    { id: 2, name: 'Ventus Gloves', price: 49.99, image: '/src/assets/ventus.jpeg' },
    { id: 3, name: 'Stratos Pads', price: 79.99, image: '/src/assets/stratos.jpg' },
    { id: 4, name: 'Aero Helmet', price: 129.99, image: '/src/assets/f1.webp' },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleAuthModal(null);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleNavLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={handleNavLinkClick}>
        <img src={logo} alt="Website Logo" />
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <div className="shop-nav-dropdown">
          <Link to="/shop" className="shop-nav-btn main-link" onClick={handleNavLinkClick}>Shop</Link>
          <div className="shop-nav-menu">
            <div className="shop-nav-container">
              <div className="shop-category">
                <Link to="/shop/cricket-bats" className="shop-category-link" onClick={handleNavLinkClick}>Cricket Bats</Link>
                <div className="shop-subcategory">
                  <Link to="/shop/cricket-bats/neocore" className="shop-sub-link" onClick={handleNavLinkClick}>Neocore</Link>
                  <Link to="/shop/cricket-bats/ventus" className="shop-sub-link" onClick={handleNavLinkClick}>Ventus</Link>
                  <Link to="/shop/cricket-bats/phantom" className="shop-sub-link" onClick={handleNavLinkClick}>Phantom</Link>
                </div>
              </div>
              <div className="shop-category">
                <Link to="/shop/batting-gloves" className="shop-category-link" onClick={handleNavLinkClick}>Batting Gloves</Link>
                <div className="shop-subcategory">
                  <Link to="/shop/batting-gloves/protect" className="shop-sub-link" onClick={handleNavLinkClick}>Protect</Link>
                  <Link to="/shop/batting-gloves/elite" className="shop-sub-link" onClick={handleNavLinkClick}>Elite</Link>
                  <Link to="/shop/batting-gloves/stealth" className="shop-sub-link" onClick={handleNavLinkClick}>Stealth</Link>
                </div>
              </div>
              <div className="shop-category">
                <Link to="/shop/batting-pads" className="shop-category-link" onClick={handleNavLinkClick}>Batting Pads</Link>
                <div className="shop-subcategory">
                  <Link to="/shop/batting-pads/guardian" className="shop-sub-link" onClick={handleNavLinkClick}>Guardian</Link>
                  <Link to="/shop/batting-pads/shield" className="shop-sub-link" onClick={handleNavLinkClick}>Shield</Link>
                  <Link to="/shop/batting-pads/armor" className="shop-sub-link" onClick={handleNavLinkClick}>Armor</Link>
                </div>
              </div>
              <div className="shop-category">
                <Link to="/shop/helmets" className="shop-category-link" onClick={handleNavLinkClick}>Helmets</Link>
                <div className="shop-subcategory">
                  <Link to="/shop/helmets/aero" className="shop-sub-link" onClick={handleNavLinkClick}>Aero</Link>
                  <Link to="/shop/helmets/fortis" className="shop-sub-link" onClick={handleNavLinkClick}>Fortis</Link>
                  <Link to="/shop/helmets/zenith" className="shop-sub-link" onClick={handleNavLinkClick}>Zenith</Link>
                </div>
              </div>
              <div className="shop-category">
                <Link to="/shop/shoes" className="shop-category-link" onClick={handleNavLinkClick}>Shoes</Link>
                <div className="shop-subcategory">
                  <Link to="/shop/shoes/sprint" className="shop-sub-link" onClick={handleNavLinkClick}>Sprint</Link>
                  <Link to="/shop/shoes/turbo" className="shop-sub-link" onClick={handleNavLinkClick}>Turbo</Link>
                  <Link to="/shop/shoes/velocity" className="shop-sub-link" onClick={handleNavLinkClick}>Velocity</Link>
                </div>
              </div>
              <div className="shop-category">
                <Link to="/shop/wicketkeeping" className="shop-category-link" onClick={handleNavLinkClick}>Wicketkeeping</Link>
                <div className="shop-subcategory">
                  <Link to="/shop/wicketkeeping/gloves" className="shop-sub-link" onClick={handleNavLinkClick}>Gloves</Link>
                  <Link to="/shop/wicketkeeping/pads" className="shop-sub-link" onClick={handleNavLinkClick}>Pads</Link>
                  <Link to="/shop/wicketkeeping/helmets" className="shop-sub-link" onClick={handleNavLinkClick}>Helmets</Link>
                </div>
              </div>
              <div className="shop-category">
                <Link to="/shop/luggage-accessories" className="shop-category-link" onClick={handleNavLinkClick}>Luggage & Accessories</Link>
                <div className="shop-subcategory">
                  <Link to="/shop/luggage-accessories/bags" className="shop-sub-link" onClick={handleNavLinkClick}>Bags</Link>
                  <Link to="/shop/luggage-accessories/kitbags" className="shop-sub-link" onClick={handleNavLinkClick}>Kitbags</Link>
                  <Link to="/shop/luggage-accessories/accessories" className="shop-sub-link" onClick={handleNavLinkClick}>Accessories</Link>
                </div>
              </div>
              <div className="shop-category">
                <Link to="/shop/clothing" className="shop-category-link" onClick={handleNavLinkClick}>Clothing</Link>
                <div className="shop-subcategory">
                  <Link to="/shop/clothing/jerseys" className="shop-sub-link" onClick={handleNavLinkClick}>Jerseys</Link>
                  <Link to="/shop/clothing/trousers" className="shop-sub-link" onClick={handleNavLinkClick}>Trousers</Link>
                  <Link to="/shop/clothing/caps" className="shop-sub-link" onClick={handleNavLinkClick}>Caps</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="families-dropdown">
          <Link to="/families" className="families-btn main-link" onClick={handleNavLinkClick}>Families</Link>
          <div className="families-menu">
            <div className="families-container">
              <div className="family-item">
                <Link to="/families/neocore" className="family-link" onClick={handleNavLinkClick}>Neocore</Link>
                <img src="/src/assets/neocore.jpeg" alt="Neocore" />
                <div className="family-types">
                  <Link to="/families/neocore/players-edition" className="family-type-link" onClick={handleNavLinkClick}>Players Edition</Link>
                  <Link to="/families/neocore/pro" className="family-type-link" onClick={handleNavLinkClick}>Pro</Link>
                  <Link to="/families/neocore/500" className="family-type-link" onClick={handleNavLinkClick}>500</Link>
                </div>
              </div>
              <div className="family-item">
                <Link to="/families/ventus" className="family-link" onClick={handleNavLinkClick}>Ventus</Link>
                <img src="/src/assets/ventus.jpeg" alt="Ventus" />
                <div className="family-types">
                  <Link to="/families/ventus/cricket-bats" className="family-type-link" onClick={handleNavLinkClick}>Cricket Bats</Link>
                  <Link to="/families/ventus/batting-pads" className="family-type-link" onClick={handleNavLinkClick}>Batting Pads</Link>
                  <Link to="/families/ventus/batting-gloves" className="family-type-link" onClick={handleNavLinkClick}>Batting Gloves</Link>
                </div>
              </div>
              <div className="family-item">
                <Link to="/families/stratos" className="family-link" onClick={handleNavLinkClick}>Stratos</Link>
                <img src="/src/assets/stratos.jpg" alt="Stratos" />
                <div className="family-types">
                  <Link to="/families/stratos/harry-brook" className="family-type-link" onClick={handleNavLinkClick}>Harry Brook</Link>
                  <Link to="/families/stratos/ollie-pope" className="family-type-link" onClick={handleNavLinkClick}>Ollie Pope</Link>
                  <Link to="/families/stratos/stratos-1.1" className="family-type-link" onClick={handleNavLinkClick}>Stratos 1.1</Link>
                </div>
              </div>
              <div className="family-item">
                <Link to="/families/classic" className="family-link" onClick={handleNavLinkClick}>Classic</Link>
                <img src="/src/assets/scoop.jpg" alt="Classic" />
                <div className="family-types">
                  <Link to="/families/classic/shop-all" className="family-type-link" onClick={handleNavLinkClick}>Shop All</Link>
                </div>
              </div>
              <div className="family-item">
                <Link to="/families/gem" className="family-link" onClick={handleNavLinkClick}>Gem</Link>
                <img src="/src/assets/stratos2.webp" alt="Gem" />
                <div className="family-types">
                  <Link to="/families/gem/babar-azam" className="family-type-link" onClick={handleNavLinkClick}>Babar Azam</Link>
                  <Link to="/families/gem/kusal-perera" className="family-type-link" onClick={handleNavLinkClick}>Kusal Perera</Link>
                  <Link to="/families/gem/gem-2.0" className="family-type-link" onClick={handleNavLinkClick}>Gem 2.0 & 1.1</Link>
                </div>
              </div>
              <div className="family-item">
                <Link to="/families/scoop" className="family-link" onClick={handleNavLinkClick}>Scoop</Link>
                <img src="/src/assets/f1.webp" alt="Scoop" />
                <div className="family-types">
                  <Link to="/families/scoop/players" className="family-type-link" onClick={handleNavLinkClick}>Players</Link>
                  <Link to="/families/scoop/classic" className="family-type-link" onClick={handleNavLinkClick}>Classic</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="teamwear-dropdown">
          <Link to="/teamwear" className="teamwear-btn main-link" onClick={handleNavLinkClick}>Teamwear</Link>
          <div className="teamwear-menu">
            <div className="teamwear-container">
              <div className="teamwear-category">
                <Link to="/teamwear/neocore" className="teamwear-category-link" onClick={handleNavLinkClick}>Neocore</Link>
                <div className="teamwear-subcategories">
                  <Link to="/teamwear/neocore/players-edition" className="teamwear-sub-link" onClick={handleNavLinkClick}>Players Edition</Link>
                  <Link to="/teamwear/neocore/pro" className="teamwear-sub-link" onClick={handleNavLinkClick}>Pro</Link>
                  <Link to="/teamwear/neocore/500" className="teamwear-sub-link" onClick={handleNavLinkClick}>500</Link>
                </div>
              </div>
              <div className="teamwear-category">
                <Link to="/teamwear/ventus" className="teamwear-category-link" onClick={handleNavLinkClick}>Ventus</Link>
                <div className="teamwear-subcategories">
                  <Link to="/teamwear/ventus/cricket-bats" className="teamwear-sub-link" onClick={handleNavLinkClick}>Cricket Bats</Link>
                  <Link to="/teamwear/ventus/batting-pads" className="teamwear-sub-link" onClick={handleNavLinkClick}>Batting Pads</Link>
                  <Link to="/teamwear/ventus/batting-gloves" className="teamwear-sub-link" onClick={handleNavLinkClick}>Batting Gloves</Link>
                </div>
              </div>
              <div className="teamwear-category">
                <Link to="/teamwear/stratos" className="teamwear-category-link" onClick={handleNavLinkClick}>Stratos</Link>
                <div className="teamwear-subcategories">
                  <Link to="/teamwear/stratos/gem-1.0" className="teamwear-sub-link" onClick={handleNavLinkClick}>Gem 1.0</Link>
                  <Link to="/teamwear/stratos/sophia-dunkley" className="teamwear-sub-link" onClick={handleNavLinkClick}>Sophia Dunkley</Link>
                  <Link to="/teamwear/stratos/kane-williamson" className="teamwear-sub-link" onClick={handleNavLinkClick}>Kane Williamson</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="athletes-dropdown">
          <Link to="/athletes" className="athletes-btn main-link" onClick={handleNavLinkClick}>Athletes</Link>
          <div className="athletes-menu">
            <div className="athletes-container">
              <div className="athlete-category">
                <Link to="/athletes/player-1" className="athlete-category-link" onClick={handleNavLinkClick}>Player 1</Link>
                <div className="athlete-subcategories">
                  <Link to="/athletes/player-1/batting-gear" className="athlete-sub-link" onClick={handleNavLinkClick}>Batting Gear</Link>
                  <Link to="/athletes/player-1/bowling-gear" className="athlete-sub-link" onClick={handleNavLinkClick}>Bowling Gear</Link>
                </div>
              </div>
              <div className="athlete-category">
                <Link to="/athletes/player-2" className="athlete-category-link" onClick={handleNavLinkClick}>Player 2</Link>
                <div className="athlete-subcategories">
                  <Link to="/athletes/player-2/batting-gear" className="athlete-sub-link" onClick={handleNavLinkClick}>Batting Gear</Link>
                  <Link to="/athletes/player-2/bowling-gear" className="athlete-sub-link" onClick={handleNavLinkClick}>Bowling Gear</Link>
                  <Link to="/athletes/player-2/accessories" className="athlete-sub-link" onClick={handleNavLinkClick}>Accessories</Link>
                </div>
              </div>
              <div className="athlete-category">
                <Link to="/athletes/player-3" className="athlete-category-link" onClick={handleNavLinkClick}>Player 3</Link>
                <div className="athlete-subcategories">
                  <Link to="/athletes/player-3/batting-gear" className="athlete-sub-link" onClick={handleNavLinkClick}>Batting Gear</Link>
                  <Link to="/athletes/player-3/bowling-gear" className="athlete-sub-link" onClick={handleNavLinkClick}>Bowling Gear</Link>
                  <Link to="/athletes/player-3/accessories" className="athlete-sub-link" onClick={handleNavLinkClick}>Accessories</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-icons">
        <Link to="/search" className="icon" onClick={handleNavLinkClick}><FaSearch /></Link>
        <Link to="/favourites" className="icon favourites-icon" onClick={handleNavLinkClick}>
          <FaHeart />
          {favorites.length > 0 && <span className="favorites-count">{favorites.length}</span>}
        </Link>
        <button onClick={() => toggleAuthModal('login')} className="icon login-button">
          Login
        </button>
        <button onClick={() => setCartPopupOpen(!cartPopupOpen)} className="cart-button">
          Bag: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        </button>
      </div>

      {cartPopupOpen && (
        <div className="cart-popup">
          <div className="cart-popup-content">
            <button 
              className="close-cart-popup" 
              onClick={() => setCartPopupOpen(false)} 
              aria-label="Close cart popup"
            >
              <FaTimes />
            </button>
            <div className="cart-left">
              <h2>Must Haves</h2>
              <div className="must-haves-list">
                {mustHaves.map(product => (
                  <div key={product.id} className="must-have-item">
                    <img src={product.image} alt={product.name} className="must-have-image" />
                    <div className="must-have-details">
                      <h3>{product.name}</h3>
                      <p>${product.price.toFixed(2)}</p>
                      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                        Add to Cart <FaPlus />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cart-right">
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  <div className="cart-items">
                    {cartItems.map(item => (
                      <div key={item.id} className="cart-item">
                        <div className="cart-item-details">
                          <h3>{item.name}</h3>
                          <p>${item.price.toFixed(2)}</p>
                          <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.id, -1)}><FaMinus /></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}><FaPlus /></button>
                          </div>
                          <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="cart-footer">
                    <p>Total: ${totalPrice}</p>
                    <Link
                      to="/checkout"
                      state={{ cartItems, totalPrice }}
                      className="checkout-btn"
                      onClick={() => setCartPopupOpen(false)}
                    >
                      Checkout
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {authModal === 'login' && (
        <div className="auth-modal-overlay" onClick={() => toggleAuthModal(null)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => toggleAuthModal(null)} aria-label="Close modal">
              ×
            </button>
            <div className="auth-form">
              <h1>SIGN IN</h1>
              <p className="form-description">Please enter your details below to sign in</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="login-email">Email*</label>
                  <input
                    type="email"
                    id="login-email"
                    name="loginEmail"
                    value={formData.loginEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="login-password">Password*</label>
                  <input
                    type="password"
                    id="login-password"
                    name="loginPassword"
                    value={formData.loginPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
                </div>
                <div className="form-divider"></div>
                <div className="form-footer">
                  <p className="auth-prompt">
                    Don't have an account yet?{' '}
                    <button type="button" className="auth-toggle-btn" onClick={() => toggleAuthModal('signup')}>
                      Sign up here
                    </button>
                  </p>
                  <button type="submit" className="submit-btn">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {authModal === 'signup' && (
        <div className="auth-modal-overlay" onClick={() => toggleAuthModal(null)}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => toggleAuthModal(null)} aria-label="Close modal">
              ×
            </button>
            <div className="auth-form">
              <h1>CREATE ACCOUNT</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="signup-firstname">First Name*</label>
                  <input
                    type="text"
                    id="signup-firstname"
                    name="signupFirstName"
                    value={formData.signupFirstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-lastname">Last Name*</label>
                  <input
                    type="text"
                    id="signup-lastname"
                    name="signupLastName"
                    value={formData.signupLastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-email">Email*</label>
                  <input
                    type="email"
                    id="signup-email"
                    name="signupEmail"
                    value={formData.signupEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">Password*</label>
                  <input
                    type="password"
                    id="signup-password"
                    name="signupPassword"
                    value={formData.signupPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="gdpr-consent">
                  <input
                    type="checkbox"
                    id="gdpr-consent"
                    name="gdprConsent"
                    checked={formData.gdprConsent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="gdpr-consent">
                    As a GDPR compliant business we respect your data and privacy. We would like to contact you from time to time with offers, news and announcements. To opt-in, please tick this box.
                  </label>
                </div>
                <div className="form-footer">
                  <p className="auth-prompt">
                    Have an account?{' '}
                    <button type="button" className="auth-toggle-btn" onClick={() => toggleAuthModal('login')}>
                      Sign in here
                    </button>
                  </p>
                  <button type="submit" className="submit-btn">Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;