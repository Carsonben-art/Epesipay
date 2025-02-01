import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/epesipay-logobg.png';
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

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Epesipay" />
        </Link>
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <div
          className="nav-item dropdown"
          onMouseEnter={() => toggleDropdown('company')}
          onMouseLeave={() => toggleDropdown(null)}
        >
          <button className="dropdown-btn">
            Company <span className="arrow">▼</span>
          </button>
          {activeDropdown === 'company' && (
            <div className="dropdown-menu">
              <Link to="/home" onClick={closeMobileMenu}>Home</Link>
              <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
            </div>
          )}
        </div>
        <Link to="/home" className="nav-item" onClick={closeMobileMenu}>Services</Link>
        {/* <Link to="/personal" className="nav-item" onClick={closeMobileMenu}>Personal</Link> */}
        <div
          className="nav-item dropdown"
          onMouseEnter={() => toggleDropdown('personal')}
          onMouseLeave={() => toggleDropdown(null)}
        >
            <button className="dropdown-btn">
              Personal <span className="arrow">▼</span>
            </button>
          {activeDropdown === 'personal' && (
            <div className="dropdown-menu">

              <Link to="/personal" onClick={closeMobileMenu}>Personal</Link>
              <Link to="/personal-pricing" onClick={closeMobileMenu}>Pricing</Link>
              
            </div>
          )}
        </div>
        <div
          className="nav-item dropdown"
          onMouseEnter={() => toggleDropdown('business')}
          onMouseLeave={() => toggleDropdown(null)}
        >
            <button className="dropdown-btn">
              Business <span className="arrow">▼</span>
            </button>
          {activeDropdown === 'business' && (
            <div className="dropdown-menu">

              <Link to="/business" onClick={closeMobileMenu}>Discover</Link>
              <Link to="/pricing" onClick={closeMobileMenu}>Pricing</Link>
            </div>
          )}
        </div>

        <div
          className="nav-item dropdown"
          onMouseEnter={() => toggleDropdown('resources')}
          onMouseLeave={() => toggleDropdown(null)}
        >
          <button className="dropdown-btn">
            Resources <span className="arrow">▼</span>
          </button>
          {activeDropdown === 'resources' && (
            <div className="dropdown-menu">
              <Link to="/user-guide" onClick={closeMobileMenu}>User Guide</Link>
              <Link to="/faqs" onClick={closeMobileMenu}>FAQs</Link>
            </div>
          )}
        </div>
      </div>

      <div className="buttons-container">
        <a
          href="https://business.epesipay.com/"
          className="button"
          onClick={closeMobileMenu}
        >
          <LuUser /> Log In
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.futurizac.epesipay"
          className="button primary"
          onClick={closeMobileMenu}
        >
          Sign Up
        </a>
      </div>

      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;