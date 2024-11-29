import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* About Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">About Astrotalk</h3>
          <p className="mt-2">
            Astrotalk is the best astrology website for online Astrology
            predictions. Talk to Astrologer on call and get answers to all your
            worries by seeing the future life through Astrology Kundli Predictions
            from the best Astrologers from India. Get the best future predictions
            related to Marriage, love life, Career, or Health over call, chat, 
            query, or report.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" target="_blank" className="text-2xl hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" className="text-2xl hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" className="text-2xl hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" className="text-2xl hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" target="_blank" className="text-2xl hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          <div>
            <h4 className="font-semibold">Important Links</h4>
            <ul>
              <li><a href="#" className="hover:underline">Astromall</a></li>
              <li><a href="#" className="hover:underline">Astrotalk Store</a></li>
              <li><a href="#" className="hover:underline">Today Panchang</a></li>
              <li><a href="#" className="hover:underline">Live Astrologers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">More Links</h4>
            <ul>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Planetary Transit 2024</a></li>
              <li><a href="#" className="hover:underline">Tarot</a></li>
              <li><a href="#" className="hover:underline">Zodiac Signs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <p>
              Email:{" "}
              <a href="mailto:contact@astrotalk.com" className="hover:underline">
                contact@astrotalk.com
              </a>
            </p>
            <p>We are available 24x7 on chat support, click to start chat</p>

            {/* Social media links in Contact Us */}
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://www.facebook.com" target="_blank" className="text-2xl hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-2xl hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" className="text-2xl hover:text-gray-400">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="text-2xl hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Yext Section */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold">Powered by Yext</h4>
          <p>Manage your online presence with Yext.</p>
        </div>

        {/* Bottom Section */}
        <div className="text-sm">
          <p>&copy; 2024 Astrotalk. All rights reserved.</p>
          <p>
            <a href="#" className="hover:underline">Privacy Policy</a> | 
            <a href="#" className="hover:underline"> Terms & Conditions</a> | 
            <a href="#" className="hover:underline"> Refund & Cancellation Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
