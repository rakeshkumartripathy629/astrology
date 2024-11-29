import React, { useState, useEffect } from "react";
import { FiFilter, FiSearch, FiChevronDown, FiCheckCircle, FiPhone } from "react-icons/fi"; // Import necessary icons
import RechargeFlow from "./RechargePage"; // Assuming the RechargeFlow is in the same directory

const astrologers = [
  {
    id: 1,
    name: "Anupriti",
    expertise: "Vedic, Face Reading, Prashana",
    languages: "Hindi, English, Bhojpuri",
    experience: "5 Years",
    rate: "₹ 20/min",
    orders: "9064 orders",
    rating: 5,
    waitTime: "55m",
    isCelebrity: false,
    isVerified: true,
    imageUrl: "https://images.jdmagicbox.com/comp/ludhiana/m8/0161px161.x161.200726205903.t4m8/catalogue/lady-astrologer-guru-maa-astrology-center-ludhiana-ludhiana-astrologers-bvrd760q7l-250.jpg", // Image URL for astrologer
  },
  {
    id: 2,
    name: "Mansi",
    expertise: "Numerology, Tarot, Psychic",
    languages: "English, Hindi, Punjabi",
    experience: "5 Years",
    rate: "₹ 41/min",
    orders: "16741 orders",
    rating: 4,
    waitTime: "55m",
    isCelebrity: false,
    isVerified: true,
    imageUrl: "https://content.jdmagicbox.com/comp/ludhiana/l1/0161px161.x161.210331151730.u9l1/catalogue/lady-astrologer-neha-sharma-ludhiana-ludhiana-astrologers-398kbhu1r8.jpg", // Image URL for astrologer
  },
  {
    id: 3,
    name: "Aparnai",
    expertise: "Numerology",
    languages: "English, Hindi",
    experience: "3 Years",
    rate: "₹ 24/min",
    orders: "4729 orders",
    rating: 3,
    waitTime: "55m",
    isCelebrity: false,
    isVerified: true,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOcFkwL73pP4iysIurdH01CfNK5Alfc5I1A&s", // Image URL for astrologer
  },
  // Add more astrologer objects here
];

const ChatAstrologer = () => {
  const [balance, setBalance] = useState(0); // User balance state
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [sortOpen, setSortOpen] = useState(false); // State to control dropdown visibility
  const [sortOption, setSortOption] = useState(""); // State for selected sort option
  const [isRechargeOpen, setIsRechargeOpen] = useState(false); // State to control the Recharge modal
  const [userRatings, setUserRatings] = useState({}); // Store ratings by users

  // Sort function based on the selected option
  const sortAstrologers = (option) => {
    let sortedAstrologers = [...astrologers];

    switch (option) {
      case "experienceDesc":
        sortedAstrologers.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
        break;
      case "experienceAsc":
        sortedAstrologers.sort((a, b) => parseInt(a.experience) - parseInt(b.experience));
        break;
      case "ordersDesc":
        sortedAstrologers.sort((a, b) => parseInt(b.orders) - parseInt(a.orders));
        break;
      case "ordersAsc":
        sortedAstrologers.sort((a, b) => parseInt(a.orders) - parseInt(b.orders));
        break;
      case "priceDesc":
        sortedAstrologers.sort((a, b) => parseInt(b.rate.replace("₹", "").replace("/min", "")) - parseInt(a.rate.replace("₹", "").replace("/min", "")));
        break;
      case "priceAsc":
        sortedAstrologers.sort((a, b) => parseInt(a.rate.replace("₹", "").replace("/min", "")) - parseInt(b.rate.replace("₹", "").replace("/min", "")));
        break;
      case "ratingDesc":
        sortedAstrologers.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return sortedAstrologers;
  };

  // Handle star click to update rating
  const handleStarClick = (astrologerId, newRating) => {
    setUserRatings((prevRatings) => ({
      ...prevRatings,
      [astrologerId]: newRating,
    }));
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown-menu') && !e.target.closest('.sort-button')) {
      setSortOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Chat with Astrologer</h1>

      {/* Top Section (Balance, Filter, Sort, Search) */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8 flex justify-between items-center">
        {/* Left Section: Available Balance and Recharge Button */}
        <div className="flex items-center space-x-6">
          <div>
            <h2 className="text-lg font-semibold">Available Balance:</h2>
            <p className="text-2xl text-yellow-500">₹ {balance}</p>
          </div>
          <button
            onClick={() => setIsRechargeOpen(true)} // Open the Recharge modal
            className="bg-yellow-500 text-white px-6 py-3 rounded-md"
          >
            Recharge
          </button>
        </div>

        {/* Right Section: Filter, Sort, and Search Bar */}
        <div className="flex space-x-6 items-center">
          {/* Filter Icon and Button */}
          <button className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md">
            <FiFilter className="mr-2" />
            Filter
          </button>

          {/* Sort Icon and Button */}
          <button
            onClick={() => setSortOpen(!sortOpen)} // Toggle dropdown visibility
            className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md sort-button"
          >
            <FiChevronDown className="mr-2" />
            Sort by
          </button>

          {/* Search Icon and Input */}
          <div className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none"
            />
          </div>
        </div>
      </div>

      {/* Sort Dropdown Menu */}
      {sortOpen && (
        <div className="dropdown-menu bg-white shadow-lg rounded-lg absolute z-10 p-4 flex flex-col space-y-2 w-48 mt-2">
          <button
            onClick={() => { setSortOption("popularity"); setSortOpen(false); }}
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            {sortOption === "popularity" && <FiCheckCircle className="mr-2 text-yellow-500" />}
            Popularity
          </button>
          <button
            onClick={() => { setSortOption("experienceDesc"); setSortOpen(false); }}
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            {sortOption === "experienceDesc" && <FiCheckCircle className="mr-2 text-yellow-500" />}
            Experience: High to Low
          </button>
          <button
            onClick={() => { setSortOption("experienceAsc"); setSortOpen(false); }}
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            {sortOption === "experienceAsc" && <FiCheckCircle className="mr-2 text-yellow-500" />}
            Experience: Low to High
          </button>
        </div>
      )}

      {/* Astrologer Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortAstrologers(sortOption)
          .filter((astrologer) =>
            astrologer.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((astrologer, index) => {
            const userRating = userRatings[astrologer.id] || astrologer.rating;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="flex justify-between items-center">
                  <img
                    src={astrologer.imageUrl}
                    alt={astrologer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-semibold">{astrologer.name}</h3>
                  {astrologer.isCelebrity && (
                    <span className="text-yellow-500 font-bold">Celebrity</span>
                  )}
                </div>
                <p className="text-gray-600">{astrologer.expertise}</p>
                <p className="text-sm text-gray-500">Languages: {astrologer.languages}</p>
                <p className="text-sm text-gray-500">Experience: {astrologer.experience}</p>
                <p className="text-lg font-bold text-yellow-500">{astrologer.rate}</p>
                <div className="flex items-center">
                  {/* Display Rating */}
                  <div className="flex cursor-pointer">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`star ${index < userRating ? "text-yellow-500" : "text-gray-400"}`}
                        onClick={() => handleStarClick(astrologer.id, index + 1)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{astrologer.orders}</span>
                </div>
                <p className="text-sm text-gray-500">Wait ~ {astrologer.waitTime}</p>

                {/* Chat Button */}
                <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-md w-full">
                  Chat
                </button>
              </div>
            );
          })}
      </div>

      {/* Recharge Flow Modal */}
      {isRechargeOpen && (
        <RechargeFlow closeRecharge={() => setIsRechargeOpen(false)} />
      )}
    </div>
  );
};

export default ChatAstrologer;
