import React, { useState } from "react";
import { FiFilter, FiSearch, FiChevronDown, FiCheckCircle, FiPhone, FiStar } from "react-icons/fi"; // Import necessary icons

const astrologers = [
  {
    id: 1,
    name: "Aditi",
    expertise: "Vedic, Face Reading, Prashana",
    languages: "Hindi, English, Bhojpuri",
    experience: "5 Years",
    rate: "₹ 20/min",
    orders: "9064 orders",
    initialRating: 3, // Initial rating can be set to default value
    waitTime: "55m",
    isCelebrity: false,
    isVerified: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhJS7FI1jA744Axys7QGt3bsWaLHpvjDLGw&s", // Add image URL here
  },
  {
    id: 2,
    name: "Mitali",
    expertise: "Numerology, Tarot, Psychic",
    languages: "English, Hindi, Punjabi",
    experience: "5 Years",
    rate: "₹ 41/min",
    orders: "16741 orders",
    initialRating: 4,
    waitTime: "55m",
    isCelebrity: false,
    isVerified: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1tDtRuC25QBDIK8npaUcBfGPim1nTAAg9a-ZLZ16D2Ig-gx9LQeAvR14Az3j7RlGQ4k&usqp=CAU", // Add image URL here
  },
  {
    id: 3,
    name: "Arpiata",
    expertise: "Numerology",
    languages: "English, Hindi",
    experience: "3 Years",
    rate: "₹ 24/min",
    orders: "4729 orders",
    initialRating: 2,
    waitTime: "55m",
    isCelebrity: false,
    isVerified: true,
    image: "https://content.jdmagicbox.com/comp/kolkata/u8/033pxx33.xx33.231208201534.t9u8/catalogue/ombn7j79fpsa5ak-irrwk1u4t5.jpg?clr=", // Add image URL here
  },
  // Add more astrologer objects here
];

const ChatAstrologer = () => {
  const [balance, setBalance] = useState(0); // User balance state
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [ratings, setRatings] = useState({}); // User-specific ratings for each astrologer
  const [sortOpen, setSortOpen] = useState(false); // State to control dropdown visibility
  const [sortOption, setSortOption] = useState(""); // State for selected sort option

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

  // Handle rating click and store user rating
  const handleRatingClick = (astrologerId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [astrologerId]: rating, // Update the rating for the clicked astrologer
    }));
  };

  // Render the stars for rating
  const renderStars = (astrologerId, currentRating) => {
    const userRating = ratings[astrologerId] || currentRating; // Default to initial rating if no user rating

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FiStar
          key={i}
          className={`cursor-pointer ${i <= userRating ? "text-yellow-500" : "text-gray-300"}`}
          onClick={() => handleRatingClick(astrologerId, i)} // Set the rating on click
        />
      );
    }
    return stars;
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown-menu') && !e.target.closest('.sort-button')) {
      setSortOpen(false);
    }
  };

  React.useEffect(() => {
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
        <div className="flex items-center space-x-6">
          <div>
            <h2 className="text-lg font-semibold">Available Balance:</h2>
            <p className="text-2xl text-yellow-500">₹ {balance}</p>
          </div>
          <button
            onClick={() => alert("Recharge functionality not implemented yet")}
            className="bg-yellow-500 text-white px-6 py-3 rounded-md"
          >
            Recharge
          </button>
        </div>
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
          {/* Sort Options with Circle Indicators */}
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
          <button
            onClick={() => { setSortOption("ordersDesc"); setSortOpen(false); }}
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            {sortOption === "ordersDesc" && <FiCheckCircle className="mr-2 text-yellow-500" />}
            Total orders: High to Low
          </button>
          <button
            onClick={() => { setSortOption("ordersAsc"); setSortOpen(false); }}
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            {sortOption === "ordersAsc" && <FiCheckCircle className="mr-2 text-yellow-500" />}
            Total orders: Low to High
          </button>
          <button
            onClick={() => { setSortOption("priceDesc"); setSortOpen(false); }}
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            {sortOption === "priceDesc" && <FiCheckCircle className="mr-2 text-yellow-500" />}
            Price: High to Low
          </button>
          <button
            onClick={() => { setSortOption("priceAsc"); setSortOpen(false); }}
            className="flex items-center text-gray-700 hover:bg-gray-200 p-2 rounded-lg"
          >
            {sortOption === "priceAsc" && <FiCheckCircle className="mr-2 text-yellow-500" />}
            Price: Low to High
          </button>
        </div>
      )}

      {/* Astrologer Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortAstrologers(sortOption)
          .filter((astrologer) =>
            astrologer.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((astrologer) => (
            <div key={astrologer.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="flex justify-between items-center">
                <img
                  src={astrologer.image}
                  alt={astrologer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{astrologer.name}</h3>
                  {astrologer.isCelebrity && (
                    <span className="text-yellow-500 font-bold">Celebrity</span>
                  )}
                </div>
              </div>
              <p className="text-gray-600">{astrologer.expertise}</p>
              <p className="text-sm text-gray-500">Languages: {astrologer.languages}</p>
              <p className="text-sm text-gray-500">Experience: {astrologer.experience}</p>
              <p className="text-lg font-bold text-yellow-500">{astrologer.rate}</p>
              <p className="text-sm text-gray-500">{astrologer.orders}</p>

              {/* Star Rating */}
              <div className="flex items-center mt-2">
                {renderStars(astrologer.id, astrologer.initialRating)}
              </div>

              {/* Call Button */}
              <button
                onClick={() => alert("Calling functionality not implemented yet")}
                className="mt-2 bg-green-500 text-white px-6 py-2 rounded-md w-full"
              >
                <FiPhone className="mr-2" />
                Call Now
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatAstrologer;
