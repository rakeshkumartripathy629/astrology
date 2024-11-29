import React, { useState } from "react";

// Sample Pooja Data with Image URLs
const poojas = [
  {
    name: "Twin Flame Love Spell",
    description: "Intensifies Love And Emotional Connections",
    date: "29 Nov 2024",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTVjGvqDfyLVyhKW6k9UJyW3eQ9c_ehrGZA&s", // Replace with actual image URLs
  },
  {
    name: "Maha Kali Pooja",
    description: "Removes The Effect Of Evil Forces From The Entire Family",
    date: "29 Nov 2024",
    imageUrl: "https://img.freepik.com/premium-photo/illustration-goddess-kali-maa-diwali-kali-pooja-india-festival-generative-ai_852336-19131.jpg", // Replace with actual image URLs
  },
  {
    name: "Vivah Badha Nivaran Pooja",
    description: "Helps In Leading A Successful & Happy Married Life",
    date: "29 Nov 2024",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUUkGtnZrSroES9RT4kaKmYtn0XC-HgYHUA&s", // Replace with actual image URLs
  },
  {
    name: "Maa Saraswati Pooja",
    description: "Get Desired Job/Appraisal & Growth Opportunities",
    date: "29 Nov 2024",
    imageUrl: "https://www.shutterstock.com/image-vector/sarasvati-happy-vasant-panchami-puja-260nw-2248337533.jpg", // Replace with actual image URLs
  },
  {
    name: "Get Your Ex Back Healing",
    description: "Get Your Love Back & Reestablish the Relationship",
    date: "29 Nov 2024",
    imageUrl: "https://m.media-amazon.com/images/I/81-hMRWo+SL._UF1000,1000_QL80_.jpg", // Replace with actual image URLs
  },
  {
    name: "Mangal Dosh Nivaran Pooja",
    description: "Solves Marriage Delays, Removes Financial Obstacles",
    date: "30 Nov 2024",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwW605aU1AUROfXYcBvJbfSGeyl48dQSzEng&s", // Replace with actual image URLs
  },
  {
    name: "Shani Tel Arpan & Aarti",
    description: "Calms Planet, Easing Life's Troubles Caused By It",
    date: "30 Nov 2024",
    imageUrl: "https://www.jansatta.com/wp-content/uploads/2024/05/shani-aarti.jpg?w=440", // Replace with actual image URLs
  },
  {
    name: "Shani Graha Shanti Pooja",
    description: "Dosh Nivaran Pooja Se Shani Ke Bure Prabhavon Ko Shant Karein",
    date: "30 Nov 2024",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_4rejNZlg4AcThnKVxtU-9DQyycLZU9cDg&s", // Replace with actual image URLs
  },
  {
    name: "Rahu & Ketu Graha Shanti Pooja",
    description: "Removes Negativity & Solves Problems",
    date: "30 Nov 2024",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbc3F8sTEsnEqkE4EXw3bM2c7eYFN4sUuq1A&s", // Replace with actual image URLs
  },
  {
    name: "Gauri Shankar Pooja",
    description: "Ensure A Joyful, Prosperous Start To Marriage Through Blessings",
    date: "30 Nov 2024",
    imageUrl: "https://i.pinimg.com/originals/bf/0a/6b/bf0a6b8d4bece2c5f30f76c9704dc0ba.jpg", // Replace with actual image URLs
  },
  {
    name: "Love Honey Spell",
    description: "Empower Love, Sweeten Bonds, & Manifest Harmony",
    date: "30 Nov 2024",
    imageUrl: "https://witchymagicks.com/wp-content/uploads/2024/05/honey-jar-spells-for-love-2.jpg", // Replace with actual image URLs
  },
  {
    name: "Reunion Healing",
    description: "Reconnect with your loved ones and restore harmony",
    date: "30 Nov 2024",
    imageUrl: "https://img.freepik.com/premium-photo/sewed-up-torn-paper-heart-concept-broken-heart-reunion-healing-from-loneliness_123211-4222.jpg?w=360", // Replace with actual image URLs
  },
];

const PoojaBooking = () => {
  const [selectedPooja, setSelectedPooja] = useState(null); // State for selected pooja
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Filter poojas based on search term
  const filteredPoojas = poojas.filter((pooja) =>
    pooja.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Pooja Booking
  const handleBookPooja = (pooja) => {
    setSelectedPooja(pooja);
  };

  // Handle Cancel (Close the booking details)
  const handleCancelBooking = () => {
    setSelectedPooja(null); // Reset the selected Pooja to null
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Book a Pooja</h1>

      {/* Search Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="w-full max-w-md">
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="Search for a pooja..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Pooja Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPoojas.map((pooja, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition ${
              pooja.name === "Vivah Badha Nivaran Pooja" ? "bg-yellow-100" : ""
            }`}
          >
            <img
              src={pooja.imageUrl}
              alt={pooja.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{pooja.name}</h3>
            <p className="text-gray-600 mt-2">{pooja.description}</p>
            <p className="text-sm text-gray-500 mt-2">Date: {pooja.date}</p>

            <button
              onClick={() => handleBookPooja(pooja)}
              className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-md w-full"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Booking Confirmation */}
      {selectedPooja && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
          onClick={handleCancelBooking}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button (Cross) */}
            <button
              onClick={handleCancelBooking}
              className="absolute top-2 right-2 text-gray-500 text-xl"
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold">Booking Confirmation</h3>
            <p className="text-lg mt-4">
              You have selected: <span className="font-bold">{selectedPooja.name}</span>
            </p>
            <p className="text-gray-600 mt-2">Description: {selectedPooja.description}</p>
            <p className="text-sm text-gray-500 mt-2">Date: {selectedPooja.date}</p>
            <button
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md"
              onClick={() => alert(`Pooja Booked: ${selectedPooja.name}`)}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoojaBooking;
