import React from 'react';


import standingpose from '../assets/standingposebackground.jpg';
import yogaMudra from '../assets/yogamudra.jpg';

function Hero() {
  return (
    <section className="bg-[#745982] text-white py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={standingpose}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#745982] opacity-80"></div>
      </div>
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Find Your Way</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">With Yoga Lifestyle</h2>
        <p className="mb-8 max-w-2xl text-sm sm:text-base md:text-lg">
          Slow movements and deep breathing increase blood flow and warm up muscles, while holding a pose can build strength. Balance on one foot, while holding the other foot to your calf at a right angle.
        </p>
        <div className="flex flex-wrap justify-left gap-8 mt-12 text-white">
          <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">95+</div>
            <div className="text-xs sm:text-sm">Yoga Class</div>
          </div>
          <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">350+</div>
            <div className="text-xs sm:text-sm">Participant</div>
          </div>
          <div className="text-center w-full sm:w-auto">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">10%</div>
            <div className="text-xs sm:text-sm">Offer For Beginner</div>
          </div>
        </div>
        <button className="bg-[#ffcc3f] text-[#745982] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#db2a59] hover:text-white transition duration-300 mt-8">
          Enroll Now
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full sm:w-1/2 h-4/5 max-w-md">
        <div className="relative w-full h-full">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <clipPath id="blob-shape">
                <path
                  d="M45.7,-58.9C59.9,-48.8,72.4,-35.7,77.9,-19.3C83.4,-2.9,81.9,16.8,73.4,32.5C64.9,48.2,49.4,59.9,32.4,68.1C15.5,76.3,-2.9,81,-20.6,77.5C-38.3,74,-55.3,62.3,-67.7,46.5C-80.1,30.7,-87.9,10.7,-85.9,-8.1C-83.9,-26.9,-72.1,-44.5,-57,-57.1C-41.8,-69.7,-23.4,-77.3,-4.7,-72.1C14,-66.9,31.5,-48.9,45.7,-58.9Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>
            <image
              href={yogaMudra}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#blob-shape)"
            />
            <path
              fill="none"
              stroke="#ffcc3f"
              strokeWidth="2"
              d="M45.7,-58.9C59.9,-48.8,72.4,-35.7,77.9,-19.3C83.4,-2.9,81.9,16.8,73.4,32.5C64.9,48.2,49.4,59.9,32.4,68.1C15.5,76.3,-2.9,81,-20.6,77.5C-38.3,74,-55.3,62.3,-67.7,46.5C-80.1,30.7,-87.9,10.7,-85.9,-8.1C-83.9,-26.9,-72.1,-44.5,-57,-57.1C-41.8,-69.7,-23.4,-77.3,-4.7,-72.1C14,-66.9,31.5,-48.9,45.7,-58.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
