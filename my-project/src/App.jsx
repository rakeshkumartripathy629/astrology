import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FreeKundli from "./pages/FreeKundli";
import KundliMatching from "./pages/KundaliMatch";
import Horoscopes from "./pages/Horoscopes";
import ChatAstrologer from "./pages/ChatAstrologer";
import TalkAstrologer from "./pages/TalkAstrologer";
import BookPooja from "./pages/BookPooja";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RechargePage from "./pages/RechargePage"; 
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/free-kundli" element={<FreeKundli />} />
        <Route path="/kundli-matching" element={<KundliMatching />} />
        <Route path="/horoscopes" element={<Horoscopes />} />
        <Route path="/chat-astrologer" element={<ChatAstrologer />} />
        <Route path="/talk-astrologer" element={<TalkAstrologer />} />
        <Route path="/book-pooja" element={<BookPooja />} />
        <Route path="/recharge" element={<RechargePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
