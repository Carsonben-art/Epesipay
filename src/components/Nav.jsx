import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/epesipay-logobg.png'
import { LuUser } from "react-icons/lu";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Epesipay" />
        
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="nav-item dropdown" onMouseEnter={() => toggleDropdown('company')} onMouseLeave={() => toggleDropdown(null)}>
          <button className="dropdown-btn">
            Company <span className="arrow">▼</span>
          </button>
          {activeDropdown === 'company' && (
            <div className="dropdown-menu">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
            </div>
          )}
        </div>
        <a href="#services" className="nav-item">Services</a>
        <a href="#personal" className="nav-item">Personal</a>
        <div className="nav-item dropdown" onMouseEnter={() => toggleDropdown('business')} onMouseLeave={() => toggleDropdown(null)}>
          <button className="dropdown-btn">
            Business <span className="arrow">▼</span>
          </button>
          {activeDropdown === 'business' && (
            <div className="dropdown-menu">
              <Link to="/business">Discover</Link>
              <a href="#pricing">Pricing</a>
              <a href="#contact-business">Contact Us</a>
            </div>
          )}
        </div>

        <div className="nav-item dropdown" onMouseEnter={() => toggleDropdown('resources')} onMouseLeave={() => toggleDropdown(null)}>
          <button className="dropdown-btn">
            Resources <span className="arrow">▼</span>
          </button>
          {activeDropdown === 'resources' && (
            <div className="dropdown-menu">
              <Link to="/user-guide">User Guide</Link>
              <a href="#faqs">FAQs</a>
            </div>
          )}
        </div>

      </div>
      <div className="buttons-container">
      <a href="#login" className="button"><LuUser />  Log In</a>
      <a href="#signup" className="button primary">Sign Up</a>
      </div>

      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
