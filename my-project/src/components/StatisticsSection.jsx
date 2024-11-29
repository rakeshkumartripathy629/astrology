import React, { useState } from "react";

const StatisticsSection = () => {
  const news = [
    {
      id: 1,
      title: "Astrotalk Expands to 10 More Countries",
      description: "Astrotalk has officially launched its services in 10 new countries, bringing astrology services to millions.",
      image: "https://businessprizm.com/wp-content/uploads/2024/04/Astrotalk-Founder-Puneet-Gupta-Success-Story-1200x900.webp",
      date: "Nov 20, 2024",
      channel: "Astro Channel 1",
      link: "#",
    },
    {
      id: 2,
      title: "New Astrologers Join Astrotalk",
      description: "Over 500 astrologers have joined the platform, offering expert advice on various astrological services.",
      image: "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2023/11/Astrotalk-profile-ftr.png",
      date: "Nov 22, 2024",
      channel: "Astro Channel 2",
      link: "#",
    },
    {
      id: 3,
      title: "Astrotalk's 2024 Predictions Are Here",
      description: "Get ready for the most accurate and detailed horoscope predictions for the year 2024 from our top astrologers.",
      image: "https://marketingmind.in/wp-content/uploads/2019/11/Astrowala.png",
      date: "Nov 24, 2024",
      channel: "Astro Channel 3",
      link: "#",
    },
    {
      id: 4,
      title: "Astrotalk Offers Free Kundli Reports",
      description: "Astrotalk is offering free Kundli reports for new users. Get your free personalized astrology report today.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaF8hWmuxfkEYtjo4F7MWCtm8nrPEwplL_g&s",
      date: "Nov 26, 2024",
      channel: "Astro Channel 4",
      link: "#",
    },
    {
      id: 5,
      title: "Astrotalk Celebrates Milestone",
      description: "Astrotalk celebrates crossing 1 million customers worldwide. Thank you for your trust in us.",
      image: "https://i.ytimg.com/vi/_1juzNR4MWg/maxresdefault.jpg",
      date: "Nov 28, 2024",
      channel: "Astro Channel 5",
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle slider navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? news.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === news.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-yellow-500 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Astrotalk</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <h2 className="text-4xl font-bold">40,762+</h2>
              <p className="text-lg">Total Astrologers</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">1148 Million Minutes</h2>
              <p className="text-lg">Total Chat/Call minutes</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">78.8 Million</h2>
              <p className="text-lg">Total Customers</p>
            </div>
          </div>
        </div>
      </header>

      {/* Latest News Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Astrotalk Latest News</h2>

          {/* Slider Section */}
          <div className="relative">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-yellow-500 p-2 rounded-full"
            >
              &#10094;
            </button>

            <div className="flex overflow-hidden">
              {news.slice(currentIndex, currentIndex + 3).map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-4 py-2"
                >
                  <div className="bg-white border-2 border-yellow-500 rounded-lg shadow-md overflow-hidden h-[300px] transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 flex flex-col justify-between h-full">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">{item.date}</p>
                        <p className="text-sm font-semibold text-gray-700">{item.channel}</p>
                      </div>
                      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                      <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                      <a
                        href={item.link}
                        className="mt-4 px-4 py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 text-xs inline-block"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-yellow-500 p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatisticsSection;
