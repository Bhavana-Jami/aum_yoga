import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Hero from './pages/Hero';
import FitnessGoals from './pages/FitnessGoals';
import Services from './pages/Services';
import About from './pages/About';
import Footer from './pages/Footer';
import Testimonials from './pages/Testimonials';
import BookNow from './pages/BookNow';
import Payment from './pages/Payment';
import './App.css';
import KnowMore from './pages/KnowMore';
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
              <About />
              <Footer />
            </>
          } />
          <Route path="/book/:serviceId" element={<BookNow />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/knowmore/:serviceId" element={<KnowMore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
