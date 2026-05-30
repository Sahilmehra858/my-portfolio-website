import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">My Portfolio</div>

        {/* Desktop Menus */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a className="hover:text-yellow-400 transition" href="#Home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-400 transition" href="#About">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-400 transition" href="Skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-400 transition" href="Projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-400 transition" href="Experience">
              Experience
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-400 transition" href="Contact Us">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button*/}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
      {/* Mobile Menu's */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-800 px-6 pb-4 pt-2 space-y-4 text-lg">
          <li>
            <a href="#home" className="block hover:text-yellow-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="block hover:text-yellow-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="block hover:text-yellow-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="block hover:text-yellow-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="block hover:text-yellow-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="block hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
