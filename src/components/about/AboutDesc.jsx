import React from 'react'
import './AboutDesc.css'
import aboutImg from '../../assets/aboutImg.png'
const AboutDesc = () => {
  return (
    <div className='about-desc-container'>
      <img src={aboutImg} alt="about" />
      <div className="about-content">
        <p>
            Through travelling across the globe, we discovered the efficiency and convenience of cashless transactions. 
            <br />
            <br />
            We saw how fast, seamless and safe cashless transactions were compared to carrying huge amounts of cash which could be 
            lost in a second if mugged or a wallet is lost. 
            <br />
            <br />

            Covid-19 added a whole new dimension to our vision, with many organisations banning the use of cash, a new, modern, 
            affordable and innovative cashless solution was necessary. This gave rise to EpesiPay, your Financial and Cashless Partner.
        </p>
      </div>
    </div>
  )
}

export default AboutDesc;
