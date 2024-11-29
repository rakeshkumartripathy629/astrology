import React from "react";

const KundliMatching = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-600">Kundli Matching</h1>
        <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-700">Partner 1 Details</h2>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-gray-700">Date of Birth</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-700">Partner 2 Details</h2>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-gray-700">Date of Birth</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-3 rounded shadow-md w-full font-bold hover:bg-yellow-600 focus:outline-none"
          >
            Match Kundli
          </button>
        </form>
      </div>
    </div>
  );
};

export default KundliMatching;
