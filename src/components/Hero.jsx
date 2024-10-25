import React from "react";
import Header from "./Header";
import heroBackground from "../assets/hero-background.png";

function Hero() {
  return (
    <section className="bg-[#745982] text-white  relative overflow-hidden h-[100vh] sm:px-5 ">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover object-[right]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/75"></div>
      </div>
      <div className="relative z-10 max-w-100 py-20 pt-9 px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-[#bb8fd0]">
          Find Your Way
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 text-[#b187c6]">
          With Yoga Lifestyle.
        </h2>
        <p className="mb-8 max-w-2xl text-sm sm:text-base md:text-lg">
          Slow movements and deep breathing increase blood flow and warm up
          muscles, while holding a pose can build strength. Balance on one foot,
          while holding the other foot to your calf at a right angle.
        </p>
        <div className="flex flex-row justify-start gap-7 mt-12 text-[#745982]">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              95+
            </div>
            <div className="text-xs sm:text-sm">Yoga Class</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              350+
            </div>
            <div className="text-xs sm:text-sm">Participant</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              10%
            </div>
            <div className="text-xs sm:text-sm">Offer For Beginner</div>
          </div>
        </div>
        <a className="inline-block bg-[#ffcc3f] text-[#745982] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#db2a59] hover:text-white transition duration-300 mt-8" href="#services">
          Our Services
        </a>
      </div>
    </section>
  );
}

export default Hero;
