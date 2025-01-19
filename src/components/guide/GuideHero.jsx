import React from 'react'
import './GuideHero.css'
import guideImg from '../../assets/guideImg.png'
const GuideHero = () => {
  return (
    <div className="guide-hero">

        <div className="guide-content">
            <h1>EpesiPay,</h1>
            <h3>User Guide</h3>
            <p>Watch our video tutorials to get started and 
            maximize the potential of EpesiPay for your business.
            </p>
        </div>
        <div className="image-container">
          <img src={guideImg} alt="guideImg" />
        </div>
      
    </div>
  )
}

export default GuideHero
