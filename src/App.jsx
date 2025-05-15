import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopProvider, ShopContext } from "./context/ShopContext";
import { SearchProvider } from "./context/SearchContext";
import Home from "./components/home/Home";
import Shop from "./components/Shop/Shop";
import Family from "./components/Families/Family";
import Teamwear from "./components/Teamwear/Teamwear";
import Athlete from "./components/Athlete/Athlete";
import Checkout from "./components/Checkout/Checkout";
import PaymentConfirmation from "./components/Confirmation/Confirmation";
import Favourites from "./components/Favorite/Favorite";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/About/About";
import Careers from "./components/Careers/Careers";
import ContactForm from "./components/ContactUs/Contact";
import ProductListing from "./components/Search/Search";

const AppContent = () => {
  const { authModal, toggleAuthModal } = React.useContext(ShopContext);

  return (
    <div className="app">
      <Header toggleAuthModal={toggleAuthModal} authModal={authModal} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/families/*" element={<Family />} />
          <Route path="/teamwear/*" element={<Teamwear />} />
          <Route path="/athletes/*" element={<Athlete />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/help" element={<div>Help Page</div>} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/store-locator" element={<div>Store Locator Page</div>} />
          <Route path="/search" element={<ProductListing />} />
          <Route path="/cart" element={<div>Cart Page</div>} />
          <Route path="/forgot-password" element={<div>Forgot Password Page</div>} />
        </Routes>
      </main>
      <Footer toggleAuthModal={toggleAuthModal} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ShopProvider>
        <SearchProvider>
          <AppContent />
        </SearchProvider>
      </ShopProvider>
    </Router>
  );
}

export default App;