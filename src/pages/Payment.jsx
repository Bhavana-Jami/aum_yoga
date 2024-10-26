import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingData, serviceId } = location.state || {};

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically process the payment
    // For now, we'll just show a success message
    alert('Payment processed successfully!');
    navigate('/'); // Redirect to home page after payment
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <div className="booking-summary">
        <h3>Booking Summary</h3>
        <p>Name: {bookingData?.name}</p>
        <p>Date: {bookingData?.date}</p>
        <p>Time: {bookingData?.time}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameOnCard">Name on Card</label>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            value={paymentData.nameOnCard}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleInputChange}
            pattern="[0-9]{16}"
            maxLength="16"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              value={paymentData.expiryDate}
              onChange={handleInputChange}
              pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentData.cvv}
              onChange={handleInputChange}
              pattern="[0-9]{3,4}"
              maxLength="4"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Complete Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
