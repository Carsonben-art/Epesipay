import React from 'react'
import './Home.css'
import heroImg from '../../assets/HeroImg.png'
const Hero = () => {
  return (
    <div className='home-hero'>
      <div className="hero-content">
        <p className='title'>Welcome to <br /><span>Epesipay,</span></p>
        <p className='sub-title'>where the future of payments is just one scan away!</p>
        <p>We're on a mission to transform the way Kenyan  merchants and customers transact, one QR code at a 
         time. With our lightning-fast, affordable, and oh-so-convenient payment solution, we simplify for businesses and customers alike.</p>
      </div>
      <div className="mobile-img">
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  )
}

export default Hero
