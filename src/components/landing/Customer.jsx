import React from 'react'
import customerImg from '../../assets/cutomerImg.png'
import supportIcon from '../../assets/supportIcon.png'
import collaborateIcon from '../../assets/innovateIcon.png'

import customerJoinImg from '../../assets/customerJoinImg.png'

import './Customer.css'
import { Link } from 'react-router-dom'
const Customer = () => {
  return (
    <div className='customer-container'>
      <h1>Customer Focused</h1>
      <div className="content-container">
        <img src={customerImg} alt="customerImg" />
        <div className="contents">
            <div className="content">
                <img src={supportIcon} alt="" />
                <div className="contet-desc">
                    <h2>Support Assistance</h2>
                    <p>Our customer support team is here to answer any 
                        questions you have and guide you through the 
                        setup process.</p>
                </div>
            </div>
            <div className="content">
                <img src={collaborateIcon} alt="" />
                <div className="contet-desc">
                    <h2>Collaborate and Innovative</h2>
                    <p>We love hearing from our users! Share 
                        your feedback, ideas, or suggestions, 
                        and together, we'll continue to 
                        improve EpesiPay.</p>
                </div>
            </div>
        </div>
      </div>
      <div className="customer-join-container">
        <div className="join-content">
            <h2>Join Our Network</h2>
            <p>Whether you're a merchant or a potential partner,
                 we're always open to new collaborations. Let's work
                  together to shape the future of payments in Kenya!
                   Remember, EpesiPay is more than just a payment solution; 
                   it's a catalyst for growth, efficiency, and progress. 
                   Join us on this journey as we transform the way Kenya transacts. 
                   Welcome to the world of effortless payments with EpesiPay!</p>
            <Link to={"https://play.google.com/store/apps/details?id=com.futurizac.epesipay"}>
            <button>DOWNLOAD LINK</button> 
            </Link>
        </div>
        <img src={customerJoinImg} alt="customer" />
      </div>
    </div>
  )
}

export default Customer
