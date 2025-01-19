import React from 'react'
import './BusinessHero.css'
import heroImg from '../../assets/bsHero.png'
const BusinessHero = () => {
  return (
    <div className='business-hero'>
      <div className="bs-hero-content">
        <h3>Discover</h3>
        <h1>EpesiPay,</h1>
        <p className='desc'>your key to business growth</p>
        <p>Unlock a world of opportunities with EpesiPay's range of <br />
            services and features. We're dedicated to empowering your business 
            with the tools it needs to thrive in today's fast-paced digital landscape.
        </p>
        <a href="https://business.epesipay.com/"><button>REGISTER NOW</button></a>
      </div>
      <img src={heroImg} alt="Hero" />
    </div>
  )
}

export default BusinessHero
