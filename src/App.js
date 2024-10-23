import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FitnessGoals from './components/FitnessGoals';
import HealthyLifestyle from './components/HealthyLifestyle';
import YogaSessions from './components/YogaSessions';
import Institute from './components/Institute';
import './App.css';
import AboutUs from './components/AboutUs';
import  Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <Hero />
            {/* <HealthyLifestyle /> */}
            <YogaSessions />
            {/* <FitnessGoals /> */}
            <AboutUs />
            <Footer />
            {/* <Institute /> */}
        </div>
    );
}

export default App;