import React from 'react'
import './PricingHero.css'
import pricingImg from'../../assets/PricesImg.png'
const PricingHero = () => {
  return (
    <div className='pricing-hero'>
        <div className="pricing-content">
            <h1>Charges <br />
            <span>EpesiPay</span></h1>
            <p>These are charges that a customer incurs depending 
                on the amount of transaction and the transaction 
                type i.e. sending or withdrawing.</p>
        </div>
        <img src={pricingImg} alt="pricingImg" />
    </div>
  )
}

export default PricingHero
