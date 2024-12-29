import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import FitnessGoals from "./pages/FitnessGoals";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Testimonials from "./pages/Testimonials";
import BookNow from "./pages/BookNow";
import Payment from "./pages/Payment";
import "./App.css";
import KnowMore from "./pages/KnowMore";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/authProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Header /> */}
                  <Hero />
                  {/* <FitnessGoals /> */}
                  <Services />
                  <Testimonials />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route path="/" element={<Hero />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book/:serviceId" element={<BookNow />} />
            <Route path="/knowmore/:serviceId" element={<KnowMore />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
