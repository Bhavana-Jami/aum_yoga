import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Testimonials from "./pages/Testimonials";
import BookNow from "./pages/BookNow";
import Payment from "./pages/Payment";
import KnowMore from "./pages/KnowMore";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import "./App.css";
import Profile from "./pages/Profile";
import AdminProfile from "./pages/AdminProfile";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Testimonials />
                <About />
                <Footer />
              </>
            }
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/user_profile" element={<Profile />} />
          <Route path="/admin_profile" element={<AdminProfile />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book/:serviceId" element={<BookNow />} />
          <Route path="/knowmore/:serviceId" element={<KnowMore />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
