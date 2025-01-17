import React from 'react';
import './Footer.css';
import futurizac from '../assets/futurizac Logo 1.png'
import dtb from '../assets/DTB.png'
import apple from '../assets/apple.png'
import google from '../assets/googleplay.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Powered By</h4>
        <div className="powered-by">
          <img src={futurizac} alt="Futurizac" />
          <img src={dtb} alt="DTB" />
        </div>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:support@epesipay.com">support@epesipay.com</a></p>
        <p>Phone: <a href="tel:+254107174680">+254 107174680</a></p>
        <p>Phone: <a href="tel:+254714853448">+254 714853448</a></p>
        <p>Address: P.O Box 61901–00200, Nairobi Kenya</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#tiktok"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Download App</h4>
        <div className="download-links">
          <a href="#app"><img src={apple} alt="App Store" /></a>
          <a href="#google"><img src={google} alt="Google Play" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Epesipay 2024. All Rights Reserved. <a href="#privacy">Privacy & Policy</a>. <a href="#terms">Terms & Conditions</a>.</p>
      </div>
    </footer>
  );
};

export default Footer;
