import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Prabha..</h1>
          <ul className="hidden md:flex gap-6 font-medium">
            <li>
              <a href="#home" className="hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:text-orange-400">
                Timeline
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-orange-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
