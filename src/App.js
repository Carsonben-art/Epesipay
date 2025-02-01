import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import BusinessPage from "./pages/BusinessPage";
import UserGuidePage from "./pages/UserGuidePage";
import HomePage from "./pages/HomePage";
import PersonalPage from './pages/PersonalPage';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import FaqPage from './pages/FaqPage';
import PersonalPricingPage from './pages/PersonalPricingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage /> } />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/user-guide" element={<UserGuidePage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/personal-pricing" element={<PersonalPricingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faqs" element={<FaqPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;