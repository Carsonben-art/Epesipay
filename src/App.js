import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import BusinessPage from "./pages/BusinessPage";
import UserGuidePage from "./pages/UserGuidePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/user-guide" element={<UserGuidePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;