import React from 'react';

// import Features from './Features';
import featuresImg from '../../assets/epesipayUser.png'

import './FeaturesSection.css'
import Features from './Timeline';


const EpesiPayFeatures = () => {
  

  return (
    <div className='features-section'>
      
        <h1>EpesiPay Business Key Features</h1>
      <div className="content-container">
        <div className="left-container">
          <h2>Transform How you process <br /> payment with EpesiPay</h2>
          <p>Streamline your business workflow and enhance customer satisfaction with our intelligent payment solutions.
          </p>
          <img src={featuresImg} alt="features" />
        </div>

        <div className="right-container">
          <Features />
        </div>

      </div>
    </div>
  );
};

export default EpesiPayFeatures;
