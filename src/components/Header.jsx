import React from "react";

function Header() {
  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center">
      <div className="logo text-[#745982] text-2xl font-bold">Aum.</div>
      <nav className="hidden md:flex space-x-6">
        {["Home", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[#707070] hover:text-[#745982]"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
