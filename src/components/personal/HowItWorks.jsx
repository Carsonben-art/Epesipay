import React from "react";
import { FaCheck } from "react-icons/fa6";
import "./HowItWorks.css";

import phones from '../../assets/howItWorksImg.png'
import join from '../../assets/joinImg2.png'

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <section className="steps-section">
        <div className="steps">
            <h2>How It Works</h2>
            <p>Using EpesiPay is EASY! Here's how it works:</p>
          <div className="step">
            <div className="icon-container">
            <FaCheck className="icon" />
            </div>
            <div>
              <h3>Step 1</h3>
              <p>
                Download the EpesiPay app from the App Store or Google Play
                Store. It's free and takes just a few seconds.
              </p>
            </div>
          </div>
          <div className="step">
          <div className="icon-container">
            <FaCheck className="icon" />
            </div>
            <div>
              <h3>Step 2</h3>
              <p>Create your EpesiPay account and load your account.</p>
            </div>
          </div>
          <div className="step">
          <div className="icon-container">
            <FaCheck className="icon" />
            </div>
            <div>
              <h3>Step 3</h3>
              <p>
                When you're ready to pay, just open the app, scan the
                merchant's QR code, enter the amount, and voilà! Payment done.
              </p>
            </div>
          </div>
          <div className="step">
          <div className="icon-container">
            <FaCheck className="icon" />
            </div>
            <div>
              <h3>Step 4</h3>
              <p>
                Receive a notification for every successful transaction, and
                you're all set!
              </p>
            </div>
          </div>
        </div>
        <div className="phones-image">
          
          <img src={phones} alt="EpesiPay App Screens" />
        </div>
      </section>

      <section className="join-section">
        <div className="personal-join-content">
          <h2>Join EpesiPay Today!</h2>
          <p>Ready to experience the future of payments?</p>
          <p>
            Join EpesiPay today and enjoy a seamless, secure, and convenient way
            to pay. Whether you're shopping, dining, or exploring new places,
            EpesiPay is your trusty companion. With us, you'll never have to
            worry about carrying cash again!
          </p>
          <button className="download-button">DOWNLOAD LINK</button>
        </div>
        <div className="join-image">
         
          <img src={join} alt="EpesiPay user" />
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;