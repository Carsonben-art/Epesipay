import React from 'react'
import personalImg from '../../assets/PersonalImg.png'
import './PersonalHero.css'
const PersonalHero = () => {
  return (
    <div className='personal-container'>
      <div className="personal-content">
        <h2>Welcome to <br /> <span>EpesiPay</span><br />The Easiest Way to Pay</h2>
        <p>At EpesiPay, we're all about making your payment experience as smooth as 
            possible. Whether you're shopping at your favorite local store, dining out, 
            or buying online, we've got you covered. Say goodbye to the hassle of carrying
             cash or fumbling with cards. With Epesi pay, you can make payments with just 
             a quick tap on your smartphone.</p>
      </div>
      <img src={personalImg} alt="personal" />
    </div>
  )
}

export default PersonalHero
