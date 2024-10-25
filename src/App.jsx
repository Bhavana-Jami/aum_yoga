import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FitnessGoals from './components/FitnessGoals';
import Services from './components/Services';
import AboutUs from './components/About';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BookNow from './components/BookNow';
import Payment from './components/Payment';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              {/* <Header /> */}
              <Hero />
              {/* <FitnessGoals /> */}
              <Services />
              <Testimonials />
              <AboutUs />
              <Footer />
            </>
          } />
          <Route path="/book/:serviceId" element={<BookNow />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
