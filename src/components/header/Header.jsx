import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaBars, FaTimes } from 'react-icons/fa'; // Added menu icons
import logo from '../../assets/logo.png';

import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Website Logo" />
      </Link>

      {/* Toggle Button for Small Screens */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle icon */}
      </button>

      {/* Center: Navigation Links */}
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        {/* Shop Dropdown */}
       
       <div className="shop-nav-dropdown">
      <Link to="/shop" className="shop-nav-btn main-link">
        Shop
      </Link>
      <div className="shop-nav-menu">
        <div className="shop-nav-container">
          {/* Cricket Bats */}
          <div className="shop-category">
            <Link to="/shop/cricket-bats" className="shop-category-link">
              Cricket Bats
            </Link>
            <div className="shop-subcategory">
              <Link to="/shop/cricket-bats/neocore" className="shop-sub-link">
                Neocore
              </Link>
              <Link to="/shop/cricket-bats/ventus" className="shop-sub-link">
                Ventus
              </Link>
              <Link to="/shop/cricket-bats/phantom" className="shop-sub-link">
                Phantom
              </Link>
              <Link to="/shop/cricket-bats/neocore" className="shop-sub-link">
                Neocore
              </Link>
              <Link to="/shop/cricket-bats/ventus" className="shop-sub-link">
                Ventus
              </Link>
              <Link to="/shop/cricket-bats/phantom" className="shop-sub-link">
                Phantom
              </Link>
              <Link to="/shop/cricket-bats/neocore" className="shop-sub-link">
                Neocore
              </Link>
              <Link to="/shop/cricket-bats/ventus" className="shop-sub-link">
                Ventus
              </Link>
              <Link to="/shop/cricket-bats/phantom" className="shop-sub-link">
                Phantom
              </Link>
              <Link to="/shop/cricket-bats/neocore" className="shop-sub-link">
                Neocore
              </Link>
              <Link to="/shop/cricket-bats/ventus" className="shop-sub-link">
                Ventus
              </Link>
              <Link to="/shop/cricket-bats/phantom" className="shop-sub-link">
                Phantom
              </Link>
            </div>
          </div>

          {/* Batting Gloves */}
          <div className="shop-category">
            <Link to="/shop/batting-gloves" className="shop-category-link">
              Batting Gloves
            </Link>
            <div className="shop-subcategory">
              <Link to="/shop/batting-gloves/protect" className="shop-sub-link">
                Protect
              </Link>
              <Link to="/shop/batting-gloves/elite" className="shop-sub-link">
                Elite
              </Link>
              <Link to="/shop/batting-gloves/stealth" className="shop-sub-link">
                Stealth
              </Link>
              <Link to="/shop/batting-gloves/protect" className="shop-sub-link">
                Protect
              </Link>
              <Link to="/shop/batting-gloves/elite" className="shop-sub-link">
                Elite
              </Link>
              <Link to="/shop/batting-gloves/stealth" className="shop-sub-link">
                Stealth
              </Link>
              <Link to="/shop/batting-gloves/protect" className="shop-sub-link">
                Protect
              </Link>
              <Link to="/shop/batting-gloves/elite" className="shop-sub-link">
                Elite
              </Link>
              <Link to="/shop/batting-gloves/stealth" className="shop-sub-link">
                Stealth
              </Link>
            </div>
          </div>

          {/* Batting Pads */}
          <div className="shop-category">
            <Link to="/shop/batting-pads" className="shop-category-link">
              Batting Pads
            </Link>
            <div className="shop-subcategory">
              <Link to="/shop/batting-pads/guardian" className="shop-sub-link">
                Guardian
              </Link>
              <Link to="/shop/batting-pads/shield" className="shop-sub-link">
                Shield
              </Link>
              <Link to="/shop/batting-pads/armor" className="shop-sub-link">
                Armor
              </Link>
              <Link to="/shop/batting-pads/guardian" className="shop-sub-link">
                Guardian
              </Link>
              <Link to="/shop/batting-pads/shield" className="shop-sub-link">
                Shield
              </Link>
              <Link to="/shop/batting-pads/armor" className="shop-sub-link">
                Armor
              </Link>
              <Link to="/shop/batting-pads/guardian" className="shop-sub-link">
                Guardian
              </Link>
              <Link to="/shop/batting-pads/shield" className="shop-sub-link">
                Shield
              </Link>
              <Link to="/shop/batting-pads/armor" className="shop-sub-link">
                Armor
              </Link>
              <Link to="/shop/batting-pads/armor" className="shop-sub-link">
                Armor
              </Link>
            </div>
          </div>

          {/* Helmets */}
          <div className="shop-category">
            <Link to="/shop/helmets" className="shop-category-link">
              Helmets
            </Link>
            <div className="shop-subcategory">
              <Link to="/shop/helmets/aero" className="shop-sub-link">
                Aero
              </Link>
              <Link to="/shop/helmets/fortis" className="shop-sub-link">
                Fortis
              </Link>
              <Link to="/shop/helmets/zenith" className="shop-sub-link">
                Zenith
              </Link>
              <Link to="/shop/helmets/aero" className="shop-sub-link">
                Aero
              </Link>
              <Link to="/shop/helmets/fortis" className="shop-sub-link">
                Fortis
              </Link>
              <Link to="/shop/helmets/zenith" className="shop-sub-link">
                Zenith
              </Link>
              <Link to="/shop/helmets/aero" className="shop-sub-link">
                Aero
              </Link>
              <Link to="/shop/helmets/fortis" className="shop-sub-link">
                Fortis
              </Link>
              <Link to="/shop/helmets/zenith" className="shop-sub-link">
                Zenith
              </Link>
              <Link to="/shop/helmets/aero" className="shop-sub-link">
                Aero
              </Link>
             
              
            </div>
          </div>

          {/* Shoes */}
          <div className="shop-category">
            <Link to="/shop/shoes" className="shop-category-link">
              Shoes
            </Link>
            <div className="shop-subcategory">
              <Link to="/shop/shoes/sprint" className="shop-sub-link">
                Sprint
              </Link>
              <Link to="/shop/shoes/turbo" className="shop-sub-link">
                Turbo
              </Link>
              <Link to="/shop/shoes/velocity" className="shop-sub-link">
                Velocity
              </Link>
              <Link to="/shop/shoes/sprint" className="shop-sub-link">
                Sprint
              </Link>
              <Link to="/shop/shoes/turbo" className="shop-sub-link">
                Turbo
              </Link>
              <Link to="/shop/shoes/velocity" className="shop-sub-link">
                Velocity
              </Link>
            </div>
          </div>

          {/* Wicketkeeping */}
          <div className="shop-category">
            <Link to="/shop/wicketkeeping" className="shop-category-link">
              Wicketkeeping
            </Link>
            <div className="shop-subcategory">
              <Link to="/shop/wicketkeeping/gloves" className="shop-sub-link">
                Gloves
              </Link>
              <Link to="/shop/wicketkeeping/pads" className="shop-sub-link">
                Pads
              </Link>
              <Link to="/shop/wicketkeeping/helmets" className="shop-sub-link">
                Helmets
              </Link>
              <Link to="/shop/wicketkeeping/gloves" className="shop-sub-link">
                Gloves
              </Link>
              <Link to="/shop/wicketkeeping/pads" className="shop-sub-link">
                Pads
              </Link>
              
            </div>
          </div>

          {/* Luggage & Accessories */}
          <div className="shop-category">
            <Link to="/shop/luggage-accessories" className="shop-category-link">
              Luggage & Accessories
            </Link>
            <div className="shop-subcategory">
              <Link to="/shop/luggage-accessories/bags" className="shop-sub-link">
                Bags
              </Link>
              <Link to="/shop/luggage-accessories/kitbags" className="shop-sub-link">
                Kitbags
              </Link>
              <Link to="/shop/luggage-accessories/accessories" className="shop-sub-link">
                Accessories
              </Link>
              <Link to="/shop/luggage-accessories/bags" className="shop-sub-link">
                Bags
              </Link>
              <Link to="/shop/luggage-accessories/kitbags" className="shop-sub-link">
                Kitbags
              </Link>
              <Link to="/shop/luggage-accessories/accessories" className="shop-sub-link">
                Accessories
              </Link>
              <Link to="/shop/luggage-accessories/bags" className="shop-sub-link">
                Bags
              </Link>
              <Link to="/shop/luggage-accessories/kitbags" className="shop-sub-link">
                Kitbags
              </Link>
              <Link to="/shop/luggage-accessories/accessories" className="shop-sub-link">
                Accessories
              </Link>
              <Link to="/shop/luggage-accessories/bags" className="shop-sub-link">
                Bags
              </Link>
              <Link to="/shop/luggage-accessories/kitbags" className="shop-sub-link">
                Kitbags
              </Link>
              <Link to="/shop/luggage-accessories/accessories" className="shop-sub-link">
                Accessories
              </Link>
            </div>
          </div>

          {/* Clothing */}
          <div className="shop-category">
            <Link to="/shop/clothing" className="shop-category-link">
              Clothing
            </Link>
            <div className="shop-subcategory">
              <Link to="/shop/clothing/jerseys" className="shop-sub-link">
                Jerseys
              </Link>
              <Link to="/shop/clothing/trousers" className="shop-sub-link">
                Trousers
              </Link>
              <Link to="/shop/clothing/caps" className="shop-sub-link">
                Caps
              </Link>
              <Link to="/shop/clothing/jerseys" className="shop-sub-link">
                Jerseys
              </Link>
              <Link to="/shop/clothing/trousers" className="shop-sub-link">
                Trousers
              </Link>
              <Link to="/shop/clothing/caps" className="shop-sub-link">
                Caps
              </Link>
              <Link to="/shop/clothing/jerseys" className="shop-sub-link">
                Jerseys
              </Link>
              <Link to="/shop/clothing/trousers" className="shop-sub-link">
                Trousers
              </Link>
              <Link to="/shop/clothing/caps" className="shop-sub-link">
                Caps
              </Link>
              <Link to="/shop/clothing/jerseys" className="shop-sub-link">
                Jerseys
              </Link>
              <Link to="/shop/clothing/trousers" className="shop-sub-link">
                Trousers
              </Link>
              <Link to="/shop/clothing/caps" className="shop-sub-link">
                Caps
              </Link>
              <Link to="/shop/clothing/jerseys" className="shop-sub-link">
                Jerseys
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>

        {/* Families Dropdown */}
        <div className="families-dropdown">
          <Link to="/families" className="families-btn main-link">Families</Link>
          <div className="families-menu">
            <div className="families-container">
              {/* Family 1 */}
              <div className="family-item">
                <Link to="/families/family-1" className="family-link">Neocore</Link>
                <div className="family-types">
                <img src="/src/assets/neocore.jpeg" alt="zainali" />
                  <Link to="/families/family-1/type-1" className="family-type-link">Playerd Addition</Link>
                  <Link to="/families/family-1/type-2" className="family-type-link">Pro</Link>
                  <Link to="/families/family-1/type-3" className="family-type-link">500</Link>
                </div>
              </div>

              {/* Family 2 */}
              <div className="family-item">
                <Link to="/families/family-2" className="family-link">Ventus</Link>
                <div className="family-types">
                <img src="/src/assets/ventus.jpeg" alt="zainali" />
                  <Link to="/families/family-2/type-1" className="family-type-link">Cricket Bats</Link>
                  <Link to="/families/family-2/type-2" className="family-type-link">Batting Pads</Link>
                  <Link to="/families/family-2/type-3" className="family-type-link">Batting Gloves</Link>
                  <Link to="/families/family-2/type-1" className="family-type-link">Cricket Bats</Link>
                  <Link to="/families/family-2/type-2" className="family-type-link">Batting Pads</Link>
                  <Link to="/families/family-2/type-3" className="family-type-link">Batting Gloves</Link>
                  <Link to="/families/family-2/type-1" className="family-type-link">Cricket Bats</Link>
                 
                </div>
              </div>

              {/* Family 3 */}
              <div className="family-item">
                <Link to="/families/family-3" className="family-link">Stratos</Link>
                <div className="family-types">
               
                <img src="/src/assets/neocore.jpeg" alt="zainali" />
                  <Link to="/families/family-3/type-1" className="family-type-link">Cricket Bats</Link>
                  <Link to="/families/family-3/type-2" className="family-type-link">Batting pads</Link>
                  <Link to="/families/family-3/type-3" className="family-type-link">Batting Gloves</Link>
                  <Link to="/families/family-3/type-1" className="family-type-link">Cricket Bats</Link>
                  <Link to="/families/family-3/type-2" className="family-type-link">Stratos 1.1</Link>
                  <Link to="/families/family-3/type-3" className="family-type-link">Harry Brook</Link>
                  <Link to="/families/family-3/type-3" className="family-type-link">Ollie Pope</Link>
                </div>
              </div>

              {/* Family 4 */}
              <div className="family-item">
                <Link to="/families/family-4" className="family-link">Classic</Link>
                <div className="family-types">
                <img src="/src/assets/scoop.jpg" alt="zainali" />
                  <Link to="/families/family-4/type-1" className="family-type-link">Cricket Bats</Link>
                  <Link to="/families/family-4/type-2" className="family-type-link">Cricket Pads</Link>
                  <Link to="/families/family-4/type-3" className="family-type-link">Batting Gloves</Link>
                  <Link to="/families/family-4/type-3" className="family-type-link">Shop All </Link>
                </div>
              </div>

              {/* Family 5 */}
              <div className="family-item">
                <Link to="/families/family-5" className="family-link">Gem</Link>
                <div className="family-types">
                <img src="/src/assets/neocore.jpeg" alt="zainali" />
                  <Link to="/families/family-5/type-1" className="family-type-link">Cricket Bats</Link>
                  <Link to="/families/family-5/type-2" className="family-type-link">Batting Pads</Link>
                  <Link to="/families/family-5/type-3" className="family-type-link">Batting Gloves</Link>
                  <Link to="/families/family-5/type-1" className="family-type-link">Gem2.0 & 1.1</Link>
                  <Link to="/families/family-5/type-2" className="family-type-link">Shop All</Link>
                  <Link to="/families/family-5/type-3" className="family-type-link">Babar Azam</Link>
                  <Link to="/families/family-5/type-1" className="family-type-link">Kusal Prera</Link>
                  <Link to="/families/family-5/type-2" className="family-type-link">Jammie Smith</Link>
                
                </div>
              </div>

              {/* Family 6 */}
              <div className="family-item">
                <Link to="/families/family-6" className="family-link">Scoop</Link>
                <div className="family-types">
                <img src="/src/assets/other.jpeg" alt="zainali" className='mola' />
                  <Link to="/families/family-6/type-1" className="family-type-link">Players</Link>
                  <Link to="/families/family-6/type-2" className="family-type-link">Classic</Link>
                
                </div>
              </div>

              {/* Family 7 */}
              <div className="family-item">
                <Link to="/families/family-7" className="family-link">Other Cricket Bats</Link>
                <div className="family-types">
                <img src="/src/assets/neocore.jpeg" alt="zainali" className='' />
                  <Link to="/families/family-7/type-1" className="family-type-link">Victus</Link>
                  <Link to="/families/family-7/type-2" className="family-type-link">Revet</Link>
                  <Link to="/families/family-7/type-3" className="family-type-link">Technique</Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="teamwear-dropdown">
  <Link to="/teamwear" className="teamwear-btn main-link">Teamwear</Link>
  <div className="teamwear-menu">
    <div className="teamwear-container">
      {/* Teamwear Category 1 */}
      <div className="teamwear-category">
        <Link to="/teamwear/category-1" className="teamwear-category-link">Neocore</Link>
        <div className="teamwear-subcategories">
          <Link to="/teamwear/category-1/sub-1" className="teamwear-sub-link">Playerd Addition</Link>
          <Link to="/teamwear/category-1/sub-2" className="teamwear-sub-link">Pro</Link>
          <Link to="/teamwear/category-1/sub-3" className="teamwear-sub-link">500</Link>
          <Link to="/teamwear/category-1/sub-1" className="teamwear-sub-link">Playerd Addition</Link>
          <Link to="/teamwear/category-1/sub-2" className="teamwear-sub-link">Pro</Link>
          
        </div>
      </div>

      {/* Teamwear Category 2 */}
      <div className="teamwear-category">
        <Link to="/teamwear/category-2" className="teamwear-category-link">Ventus</Link>
        <div className="teamwear-subcategories">
          <Link to="/teamwear/category-2/sub-1" className="teamwear-sub-link">Cricket Bats</Link>
          <Link to="/teamwear/category-2/sub-2" className="teamwear-sub-link">Batting Pads</Link>
          <Link to="/teamwear/category-2/sub-3" className="teamwear-sub-link">Batting Gloves</Link>
          <Link to="/teamwear/category-2/sub-1" className="teamwear-sub-link">Cricket Bats</Link>
          <Link to="/teamwear/category-2/sub-2" className="teamwear-sub-link">Batting Pads</Link>
          <Link to="/teamwear/category-2/sub-3" className="teamwear-sub-link">Batting Gloves</Link>
          <Link to="/teamwear/category-2/sub-1" className="teamwear-sub-link">Cricket Bats</Link>
          <Link to="/teamwear/category-2/sub-2" className="teamwear-sub-link">Batting Pads</Link>
          
        </div>
      </div>

      {/* Teamwear Category 3 */}
      <div className="teamwear-category">
        <Link to="/teamwear/category-3" className="teamwear-category-link">Stratos</Link>
        <div className="teamwear-subcategories">
          <Link to="/teamwear/category-3/sub-1" className="teamwear-sub-link">Batting Pads</Link>
          <Link to="/teamwear/category-3/sub-2" className="teamwear-sub-link">Cricket Bats</Link>
          <Link to="/teamwear/category-3/sub-3" className="teamwear-sub-link">Cricket Gloves</Link>
          <Link to="/teamwear/category-3/sub-1" className="teamwear-sub-link">Gem 1.0</Link>
          <Link to="/teamwear/category-3/sub-2" className="teamwear-sub-link">Sophia Dunkley</Link>
          <Link to="/teamwear/category-3/sub-3" className="teamwear-sub-link">Kane Williamson</Link>
          <Link to="/teamwear/category-3/sub-1" className="teamwear-sub-link">Mohammed Rizwan</Link>
         
        </div>
      </div>
    </div>
  </div>
</div>
<div className="athletes-dropdown">
  <Link to="/athletes" className="athletes-btn main-link">Athletes</Link>
  <div className="athletes-menu">
    <div className="athletes-container">
      {/* Athlete Category 1 */}
      <div className="athlete-category">
        <Link to="/athletes/category-1" className="athlete-category-link">Player 1</Link>
        <div className="athlete-subcategories">
          <Link to="/athletes/category-1/sub-1" className="athlete-sub-link">Batting Gear</Link>
          <Link to="/athletes/category-1/sub-2" className="athlete-sub-link">Bowling Gear</Link>

        </div>
      </div>

      {/* Athlete Category 2 */}
      <div className="athlete-category">
        <Link to="/athletes/category-2" className="athlete-category-link">Player 2</Link>
        <div className="athlete-subcategories">
          <Link to="/athletes/category-2/sub-1" className="athlete-sub-link">Batting Gear</Link>
          <Link to="/athletes/category-2/sub-2" className="athlete-sub-link">Bowling Gear</Link>
          <Link to="/athletes/category-2/sub-3" className="athlete-sub-link">Accessories</Link>
          <Link to="/athletes/category-2/sub-3" className="athlete-sub-link">Accessories</Link>
        </div>
      </div>

      {/* Athlete Category 3 */}
      <div className="athlete-category">
        <Link to="/athletes/category-3" className="athlete-category-link">Player 3</Link>
        <div className="athlete-subcategories">
          <Link to="/athletes/category-3/sub-1" className="athlete-sub-link">Batting Gear</Link>
          <Link to="/athletes/category-3/sub-2" className="athlete-sub-link">Bowling Gear</Link>
          <Link to="/athletes/category-3/sub-3" className="athlete-sub-link">Accessories</Link>
          <Link to="/athletes/category-3/sub-3" className="athlete-sub-link">Accessories</Link>
        </div>
      </div>
      <div className="athlete-category">
        <Link to="/athletes/category-3" className="athlete-category-link">Player 3</Link>
        <div className="athlete-subcategories">
          <Link to="/athletes/category-3/sub-1" className="athlete-sub-link">Batting Gear</Link>
          <Link to="/athletes/category-3/sub-2" className="athlete-sub-link">Bowling Gear</Link>
          <Link to="/athletes/category-3/sub-3" className="athlete-sub-link">Accessories</Link>
          <Link to="/athletes/category-3/sub-2" className="athlete-sub-link">Bowling Gear</Link>
          <Link to="/athletes/category-3/sub-3" className="athlete-sub-link">Accessories</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    




       
       
        <Link to="/blog" className="main-link">Outlet</Link>
      </div>

      {/* Right Side: Icons and Login */}
      <div className="navbar-icons">
        {/* Search Icon */}
        <Link to="/search" className="icon">
          <FaSearch />
        </Link>

        {/* Favourite Icon */}
        <Link to="/favourites" className="icon favourites-icon">
          <FaHeart />
        </Link>

        {/* Login Link */}
        <Link to="/login" className="icon">
          Login
        </Link>

        {/* Bag Button with Counter */}
        <Link to="/cart" className="cart-button">
          Bag: 0
        </Link>
      </div>
    </nav>
  );
};

export default Header;