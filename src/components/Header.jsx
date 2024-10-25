import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-6 flex items-center md:justify-end sticky top-0 z-50 w-full sm:justify-between">
      <div className=" md:hidden sm:flex items-center">
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
  );
}

export default Header;
