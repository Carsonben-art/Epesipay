import React from 'react'
import './WhyUs.css'
import Why from './Timeline'
import personalImg from '../../assets/personalImg2.png'
const WhyUs = () => {
  return (
    <div className='why-us-container'>
        <h1>Why Choose EpesiPay?</h1>
        <div className="why-content">
            <div className="why-container">

            <Why />
            </div>
        </div>
        <div className="image-container">
          <img src={personalImg} alt="personalImg" />
        </div>
    </div>
  )
}

export default WhyUs
