import React, { useState } from "react";
import axios from "axios";

const Horoscopes = () => {
  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  const [selectedSign, setSelectedSign] = useState("");
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchHoroscope = async (sign) => {
    setLoading(true);
    setHoroscope(null);
    try {
      const response = await axios.post(
        `https://aztro.sameerkumar.website/?sign=${sign.toLowerCase()}&day=today`
      );
      setHoroscope(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Horoscopes</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
        {zodiacSigns.map((sign) => (
          <button
            key={sign}
            className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:bg-yellow-100"
            onClick={() => {
              setSelectedSign(sign);
              fetchHoroscope(sign);
            }}
          >
            {sign}
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {horoscope && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">{selectedSign}</h2>
          <p>{horoscope.description}</p>
        </div>
      )}
    </div>
  );
};

export default Horoscopes;
