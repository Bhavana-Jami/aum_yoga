import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FitnessGoals from './components/FitnessGoals';
import YogaSessions from './components/YogaSessions';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <FitnessGoals />
      <YogaSessions />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
