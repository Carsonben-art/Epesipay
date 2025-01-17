import React from 'react'
import './AboutHero.css'
import storyImg from '../../assets/storyImg.png'
const AboutHero = () => {
  return (
    <div className='about-hero'>
      <div className="about-container">
        <h1>Our Story</h1>
        <h3>Embracing the digital <br />revolution</h3>
        <p>At EpesiPay, we are more than just a payment solution; <br />
         we are pioneers of the digital revolution in Kenya. Our <br />
         journey began with a vision to simplify payments for <br />
         merchants and customers, driving the country towards <br />
          a cashless economy.</p>
      </div>
      <img src={storyImg} alt="story" />
    </div>
  )
}

export default AboutHero
