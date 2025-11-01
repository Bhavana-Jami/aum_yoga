import React, { useState, useContext } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  }
  const { handleSignOut, authState } = useAuth();
  return (
    <header className="left-0 w-full z-40 ">
      {/* Backdrop with blur effect */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-[30px]"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0) 100%)",
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
            {authState.currentUser ? (
              // <>{JSON.stringify(authState.currentUser.displayName) || User}</>
              <>
                <div className="relative">
                  {/* Trigger */}
                  <button
                    onClick={handleUserMenu}
                    className="flex items-center justify-center"
                  >
                    {showUserMenu ? (
                      <X
                        size={28}
                        className="h-9 w-9 text-[#db2a59] bg-[#ffcc3f] rounded-full p-2 shadow-md hover:scale-105 transition"
                      />
                    ) : authState.currentUser?.photoURL ? (
                      <img
                        src={authState.currentUser.photoURL}
                        alt="Profile"
                        className="w-9 h-9 rounded-full object-cover border-2 border-[#ffcc3f] shadow-sm hover:scale-105 transition"
                      />
                    ) : (
                      <User
                        className="h-9 w-9 text-[#db2a59] bg-[#ffcc3f] rounded-full p-2 shadow-md hover:scale-105 transition"
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute right-0 mt-3 w-48 rounded-xl bg-black text-white ring-1 ring-[#ffcc3f] ring-opacity-60 shadow-lg transform transition-all duration-200 ${showUserMenu ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      }`}
                  >
                    <div className="flex flex-col p-3 space-y-3">
                      <Link
                        to="/user_profile"
                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#ffcc3f] hover:text-black transition"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="px-3 py-2 rounded-md text-sm font-medium text-left hover:bg-[#db2a59] hover:text-white transition"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </>

            ) : (
              <Link
                className="bg-[#ffcc3f] text-[#db2a59] px-4 py-2 rounded-full hover:bg-[#db2a59] hover:text-white transition duration-300"
                to="/signup"
              >
                Sign Up
              </Link>
            )}
          </nav>

          {/* Navigation for small screens */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white z-50 md:hidden">
              <nav className="flex flex-col items-center py-4">
                {["Services", "Testimonials", "About", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-[#707070] hover:text-[#745982] py-2 transition duration-300"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>
              <LogOut className="h-5 w-5" onClick={signOut} />
            </div>
          )}
        </header>
      </div>
    </header>
  );
}

export default Header;
