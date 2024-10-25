import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookNow = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    serviceId: serviceId
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate and process the booking
    // For now, we'll just navigate to payment with the booking data
    navigate('/payment', { 
      state: { 
        bookingData,
        serviceId 
      }
    });
  };
console.log(serviceId);
  return (
    <div className="book-now-container">
      <h2>Book Your Session</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookingData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={bookingData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={bookingData.time}
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default BookNow;
