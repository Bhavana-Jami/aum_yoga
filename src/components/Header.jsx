import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="h-[10vh] py-4 px-6 flex items-center justify-between  bg-gradient-to-b from-black/100 to-black/100"
      style={{
        backdropFilter: 'blur(10px)', // Adjust the blur value as needed
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
        maskImage: 'linear-gradient(to bottom, black 100%, transparent 100%)', // Mask to dissolve bottom edge
        WebkitMaskImage: 'linear-gradient(to bottom, black 100%, transparent 100%)', // For Safari support
      }}
    >
      <div className="flex items-center">
        <div className="text-[#745982] text-2xl font-bold">Aum.</div>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-[#745982] focus:outline-none focus:ring-2 focus:ring-[#745982] rounded-md"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation for medium and large screens */}
      <nav className="hidden md:flex space-x-6">
        {["Home", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[#707070] hover:text-[#745982] transition duration-300  py-2"
          >
            {item}
          </a>
        ))}
        <button className="bg-[#ffcc3f] text-[#745982] px-4 py-2 rounded-full hover:bg-[#db2a59] hover:text-white transition duration-300">
          Book Now
        </button>
      </nav>

      {/* Navigation for small screens */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white z-50 md:hidden">
          <nav className="flex flex-col items-center py-4">
            {["Home", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
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
  );
}

export default Header;
