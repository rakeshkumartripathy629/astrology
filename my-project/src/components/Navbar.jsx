import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("en");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // You can add additional logic to change the content based on the selected language.
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="bg-white text-gray-800 px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://www.clipartmax.com/png/middle/458-4589586_sagittarius-publications-vedic-astrology-png.png"
            alt="AstroTalk Logo"
            className="h-12" // Adjust logo size as needed
          />
          <span className="text-2xl font-bold text-yellow-500">Astro Talk</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/free-kundli" className="hover:underline">
              Free Kundli
            </Link>
          </li>
          <li>
            <Link to="/kundli-matching" className="hover:underline">
              Kundli Matching
            </Link>
          </li>
          
          {/* Horoscopes Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:underline focus:outline-none"
            >
              Horoscopes
            </button>
            {dropdownVisible && (
              <ul className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-48 border border-gray-200">
                <li>
                  <Link
                    to="/horoscopes"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                  >
                    Today's Horoscope
                  </Link>
                </li>
                <li>
                  <Link
                    to="/weekly-horoscope"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                  >
                    Weekly Horoscope
                  </Link>
                </li>
                <li>
                  <Link
                    to="/monthly-horoscope"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                  >
                    Monthly Horoscope
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/chat-astrologer" className="hover:underline">
              Chat Astrologer
            </Link>
          </li>
          <li>
            <Link to="/talk-astrologer" className="hover:underline">
              Talk Astrologer
            </Link>
          </li>
          <li>
            <Link to="/book-pooja" className="hover:underline">
              Book Pooja
            </Link>
          </li>
        </ul>

        {/* Language Dropdown and Login Button */}
        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-white text-gray-700 border border-gray-300 rounded-lg p-2"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle (Hamburger for smaller screens) */}
      <div className="md:hidden flex items-center justify-between">
        <button
          className="text-gray-800 focus:outline-none"
          // Add toggle logic for mobile menu here
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
