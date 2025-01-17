import React from 'react'
import missionImg from '../../assets/mission-img.png'
import joinImg from '../../assets/joinImg.png'
import './Missions.css'
const Missions = () => {
  return (
    <div className='missions'>
        <div className="mission-container">
            <div className="mission-content">
                <p className='title'>our mission</p>
                <h1>We've Helped <br />Innovative Companies</h1>
                <p className='desc'>Hundreds of all sizes and across all industries <br /> have made big improvements with us.</p>
                <div className="stats-container">
                    <div className="stats">
                        <h2>24%</h2>
                        <p>Revenue Business</p>
                    </div>
                    <div className="stats">
                        <h2>180,000</h2>
                        <p>In Annual Revenue</p>
                    </div>
                    <div className="stats">
                        <h2>10+</h2>
                        <p>Months of Runway</p>
                    </div>
                </div>
            </div>
            <img src={missionImg} alt="mission-img" />
        </div>
        <div className="business-container">
            <div className="business-content">
                <h1>Do you own a business?</h1>
                <p>EpesiPay has got you covered. Join thousands of <br />
                other business owners who have chosen EpesiPay to <br />
                streamline payments. Whether B2B or B2C, enjoy fast <br />
                and secure transactions.</p>
            </div>
        </div>
        <div className="join-container">
            <p className="title">join our network</p>
            <h1>EpesiPay Supports Individuals And Businesses <br />
            With Secured And Seamless Transactions
            </h1>
            <div className="join-content">
                <img src={joinImg} alt="joinImg" />
                <div className="desc">
                    <p>Whether you're a merchant or a potential partner, <br />
                     we're always open to new collaborations. Let's work <br />
                      together to shape the future of payments in Kenya! <br />
                      Remember, EpesiPay is more than just a payment <br />
                      solution; it's a catalyst for growth, efficiency, and <br />
                      progress.</p>
                      <p className="info">
                      Join us on this journey as we transform the way <br />
                      Kenya transacts. Welcome to the world of <br />
                       effortless payments with EpesiPay!
                      </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Missions
