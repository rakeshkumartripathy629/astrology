import React from "react";
import { Link } from "react-router-dom"; // Make sure you have React Router installed
import { BsChatDots, BsTelephoneFill, BsCartFill } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {/* Chat with Astrologer */}
        <Link
          to="/chat-astrologer" // Internal route for your app
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-yellow-50 transition cursor-pointer"
        >
          <div className="text-4xl text-yellow-500 mb-4">
            <BsChatDots />
          </div>
          <h3 className="text-lg font-bold text-center">Chat with Astrologer</h3>
        </Link>

        {/* Talk to Astrologer */}
        <Link
          to="/talk-astrologer" // Internal route for your app
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-yellow-50 transition cursor-pointer"
        >
          <div className="text-4xl text-green-500 mb-4">
            <BsTelephoneFill />
          </div>
          <h3 className="text-lg font-bold text-center">Talk to Astrologer</h3>
        </Link>

        {/* Astromall Shop */}
        <Link
          to="/astromall-shop" // Internal route for your app
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-yellow-50 transition cursor-pointer"
        >
          <div className="text-4xl text-blue-500 mb-4">
            <BsCartFill />
          </div>
          <h3 className="text-lg font-bold text-center">Astromall Shop</h3>
        </Link>

        {/* Book a Pooja */}
        <Link
          to="/book-pooja" // Internal route for your app
          className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-yellow-50 transition cursor-pointer"
        >
          <div className="text-4xl text-orange-500 mb-4">
            <MdOutlineEventAvailable />
          </div>
          <h3 className="text-lg font-bold text-center">Book a Pooja</h3>
        </Link>
      </div>
    </div>
  );
};

export default Services;
