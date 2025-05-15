
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Checkout.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Checkout = () => {
  const location = useLocation();
  const { cartItems = [], totalPrice = '0.00' } = location.state || {};
  const deliveryCharges = 10.00;
  const totalWithDelivery = (parseFloat(totalPrice) + deliveryCharges).toFixed(2);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    paymentMethod: 'creditCard'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to payment confirmation page (placeholder)
    // You can pass formData or other data if needed
    window.location.href = '/payment-confirmation';
  };

  return (
    <>
    {/* <Header/> */}
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="street">Street Address*</label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City*</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State/Province*</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip/Postal Code*</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country*</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </div>
            <h2>Payment Method</h2>
            <div className="payment-methods">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === 'creditCard'}
                  onChange={handleInputChange}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleInputChange}
                />
                PayPal
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bankTransfer"
                  checked={formData.paymentMethod === 'bankTransfer'}
                  onChange={handleInputChange}
                />
                Bank Transfer
              </label>
            </div>
            <button type="submit" className="pay-now-btn">Pay Now</button>
          </form>
        </div>
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="summary-line">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="summary-line">
                <span>Delivery Charges</span>
                <span>${deliveryCharges.toFixed(2)}</span>
              </div>
              <div className="summary-line total">
                <span>Total</span>
                <span>${totalWithDelivery}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Checkout;
