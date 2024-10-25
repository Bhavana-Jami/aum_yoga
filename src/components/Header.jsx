import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="left-0 w-full z-40 ">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-[30px]"
        style={{
          maskImage: 'linear-gradient(to bottom, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0) 100%)'
        }}
      ></div>

      {/* Header content */}
      <div className="relative z-50 justify-center ">
        <header className="py-4 px-6 flex items-center justify-between md:justify-end sticky top-0 w-full">
          <div className="md:hidden sm:flex items-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#745982] to-[#db2a59] text-transparent bg-clip-text">
              Aum.
            </div>
          </div>

          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#ffcc3f] focus:outline-none focus:ring-2 focus:ring-[#ffcc3f] rounded-md"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Navigation for medium and large screens */}
          <nav className="hidden md:flex space-x-6">
            {["Services", "Testimonials", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#db2a59] hover:text-[#745982] transition duration-300  py-2 font-semibold"
              >
                {item}
              </a>
            ))}
            <a className="bg-[#ffcc3f] text-[#745982] px-4 py-2 rounded-full hover:bg-[#db2a59] hover:text-white transition duration-300" href="#contact">
              Book Now
            </a>
          </nav>

          {/* Navigation for small screens */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white z-50 md:hidden">
              <nav className="flex flex-col items-center py-4">
                {["Services", "Testimonials", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[#707070] hover:text-[#745982] py-2 transition duration-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>
      </div>
    </header>
  );
}

export default Header;
