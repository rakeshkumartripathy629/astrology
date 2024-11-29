import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  FaStar,
  FaHeart,
  FaRegCalendarAlt,
  FaYinYang,
  FaBookOpen,
  FaGlobe,
  FaUserFriends,
} from "react-icons/fa";

const ComplimentaryAstrologyServices = () => {
  const services = [
    {
      title: "Today Horoscope",
      description: "Get insights about your day based on astrological predictions.",
      icon: <FaStar className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Free Kundali",
      description: "Generate your personalized Kundali instantly for free.",
      icon: <FaBookOpen className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Compatibility",
      description: "Check compatibility with your partner based on astrology.",
      icon: <FaHeart className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Festival 2024",
      description: "Know the important festivals and dates for 2024.",
      icon: <FaRegCalendarAlt className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Kundali Matching",
      description: "Match Kundalis for marriage and ensure a prosperous union.",
      icon: <FaUserFriends className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Chinese Horoscope",
      description: "Discover your Chinese zodiac sign and its predictions.",
      icon: <FaYinYang className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Today Panchang",
      description: "View the Panchang for today including Tithi, Nakshatra, and more.",
      icon: <FaGlobe className="text-yellow-500 text-4xl" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= services.length ? 0 : prevIndex + 3
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 3 : prevIndex - 3
    );
  };

  const visibleCards = services.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-gray-100 py-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6">
        Complimentary Astrology Services
      </h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Slider Content */}
        <div className="flex items-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="p-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
          >
            <FaArrowLeft />
          </button>

          {/* Cards */}
          <div className="flex space-x-4 overflow-hidden">
            {visibleCards.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg w-64 text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplimentaryAstrologyServices;
