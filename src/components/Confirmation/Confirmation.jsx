
import React from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const PaymentConfirmation = () => {
  return (
    <>
    {/* <Header/> */}
    <div className="payment-confirmation-page">
      <h1>Payment Successful</h1>
      <p>Thank you for your purchase! Your order has been successfully placed.</p>
      <p>You will receive a confirmation email with your order details soon.</p>
      <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
    </div>
{/* <Footer/> */}
    </>
  );
};

export default PaymentConfirmation;
