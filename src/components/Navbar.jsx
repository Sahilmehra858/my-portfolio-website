import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm bg-gray-900 text-white shadow-lg">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold cursor-pointer">
          <a href="">
            Sahil <span className="text-purple-500">Mehra</span>
          </a>
        </div>

        {/* Desktop Menus */}
        <ul className="hidden md:flex space-x-8 text-md">
          <li>
            <a className="hover:text-purple-400 transition" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-purple-400 transition" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-purple-400 transition" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-purple-400 transition" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-purple-400 transition" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="hover:text-purple-400 transition" href="#contact Us">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button*/}
        {isOpen ? (
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdClose />
          </div>
        ) : (
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu />
          </div>
        )}
      </div>
      {/* Mobile Menu's */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-800 px-6 pb-4 pt-2 space-y-4 text-md">
          <li>
            <a href="#home" className="block hover:text-purple-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="block hover:text-purple-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="block hover:text-purple-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="block hover:text-purple-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="block hover:text-purple-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="block hover:text-purple-400">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
