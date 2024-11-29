import React, { useState, useEffect } from "react";

const AstrologersList = () => {
  const astrologers = [
    { name: "Astrologer 1", expertise: "Vedic Astrology", image: "https://astrologerpnrao.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-18-at-10.15.48-AM-576x576-1.webp" },
    { name: "Astrologer 2", expertise: "Tarot Reading", image: "https://media.istockphoto.com/id/1347480695/photo/beard-priest-holy-astrologer-guru-or-jyotishi-placing-cowrie-shells-on-chart-and-counting-to.jpg?s=612x612&w=0&k=20&c=Fa0mG3pfB7X_odMXwU4rM0lyyVFIradeKZjgmo3sd0Y=" },
    { name: "Astrologer 3", expertise: "Numerology", image: "https://az827626.vo.msecnd.net/cdn/localservices/images/thumbnail/localservices_2017-04-24-06-28-13-233_9133085.jpg" },
    { name: "Astrologer 4", expertise: "Vedic Astrology", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNtjN22HUJzPgB6h9oO3qFQo36Px3aivFpb5ehlX5g8fSjuRLUZyRwMSqNJWNaoY7tz4&usqp=CAU" },
    { name: "Astrologer 5", expertise: "Tarot Reading", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzQvq1N4g0cRDoDdH78NeXNrbt_rtcFwaUOCDtRZvN7I9NUck5gpskx0oUYzd148H_Uw&usqp=CAU" },
    { name: "Astrologer 6", expertise: "Palmistry", image: "https://content.jdmagicbox.com/v2/comp/hyderabad/e6/040pxx40.xx40.240121194118.n3e6/catalogue/indian-famous-astrologer-pandit-sri-r-k-guruji-kompally-rangareddy-astrologers-vuo3fnvk7i-250.jpg" },
    { name: "Astrologer 7", expertise: "Vedic Astrology", image: "https://content.jdmagicbox.com/comp/rajahmundry/a5/9999px883.x883.190912202448.t7a5/catalogue/srikanth-gurubhagavatula-konthamuru-rajahmundry-astrologers-zltjbuspv7-250.jpg" },
    { name: "Astrologer 8", expertise: "Numerology", image: "https://content.jdmagicbox.com/v2/comp/shahdol/w8/9999p7652.7652.240906221549.m4w8/catalogue/pt-kamlakar-gautam-astro-koilari-shahdol-astrologers-b7lb2dot6v.jpg" },
    { name: "Astrologer 9", expertise: "Tarot Reading", image: "https://images.astroswamig.com/astrologers/120106020232312801.png" },
    { name: "Astrologer 10", expertise: "Vedic Astrology", image: "https://images.astroswamig.com/astrologers/120112020232434083.png" },
  ];

  // Filter astrologers by expertise
  const vedicAstrologers = astrologers.filter((astrologer) => astrologer.expertise === "Vedic Astrology");
  const tarotAstrologers = astrologers.filter((astrologer) => astrologer.expertise === "Tarot Reading");
  const numerologyAstrologers = astrologers.filter((astrologer) => astrologer.expertise === "Numerology");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Vedic Astrology");

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % getCurrentAstrologers().length);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [activeCategory]);

  // Get the current astrologer list based on selected category
  const getCurrentAstrologers = () => {
    if (activeCategory === "Vedic Astrology") {
      return vedicAstrologers;
    } else if (activeCategory === "Tarot Reading") {
      return tarotAstrologers;
    } else if (activeCategory === "Numerology") {
      return numerologyAstrologers;
    }
    return [];
  };

  return (
    <div className="py-12 bg-yellow-400">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-black mb-4">
          Our Astrologers
        </h2>
        <p className="text-lg text-black mb-6">
          13000+ Best Astrologers from India for Online Consultation
        </p>
        
      </div>

      {/* Category Selection */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveCategory("Vedic Astrology")}
          className={`px-6 py-2 text-white rounded-full ${activeCategory === "Vedic Astrology" ? "bg-yellow-500" : "bg-yellow-300"}`}
        >
          Vedic Astrology
        </button>
        <button
          onClick={() => setActiveCategory("Tarot Reading")}
          className={`px-6 py-2 text-white rounded-full ${activeCategory === "Tarot Reading" ? "bg-yellow-500" : "bg-yellow-300"}`}
        >
          Tarot Reading
        </button>
        <button
          onClick={() => setActiveCategory("Numerology")}
          className={`px-6 py-2 text-white rounded-full ${activeCategory === "Numerology" ? "bg-yellow-500" : "bg-yellow-300"}`}
        >
          Numerology
        </button>
      </div>

      {/* Astrologers Slider */}
      <div className="relative">
        {/* Display the current astrologer */}
        <div className="flex justify-center items-center space-x-6">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto h-[250px] flex flex-col justify-between">
            <img
              src={getCurrentAstrologers()[currentIndex].image}
              alt={getCurrentAstrologers()[currentIndex].name}
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">
              {getCurrentAstrologers()[currentIndex].name}
            </h3>
            <p className="text-gray-700 mb-4">{getCurrentAstrologers()[currentIndex].expertise}</p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-6 transform -translate-y-1/2">
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? getCurrentAstrologers().length - 1 : prevIndex - 1))}
            className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-600 transition"
          >
            &#60;
          </button>
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % getCurrentAstrologers().length)}
            className="bg-yellow-500 text-black p-2 rounded-full hover:bg-yellow-600 transition"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AstrologersList;
