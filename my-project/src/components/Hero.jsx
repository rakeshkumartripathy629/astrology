import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-yellow-400 via-white to-yellow-400 text-white h-[60vh] flex items-center justify-center">
      {/* Hero Content */}
      <div className="text-center max-w-4xl mx-auto px-4">
        {/* Image */}
        <div className="mb-4 flex justify-center">
          <img
            src="https://www.astrologycollege.in/hubfs/Famous%20Kerala%20Astrologer.png"
            alt="Astrologer"
            className="rounded-lg shadow-lg max-h-48"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-3">
          <span className="text-yellow-500">200+ Celebs</span> recommend AstroTalk
        </h1>
        <p className="text-base mb-4">
          Chat with experienced astrologers and get insights to improve your life.
        </p>

        {/* Call to Action */}
        <Link
          to="/chat-astrologer"
          className="bg-yellow-500 text-black px-5 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
        >
          Chat Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
