import React from 'react'
import { Link } from 'react-router-dom'
import './LandingHero.css'
import landingImg from '../../assets/LandingImg.png'
const LandingHero = () => {
  return (
    <div className='landing-hero'>
        <div className="landing-content">
            <h1>Welcome to <br />
            <span>Epesipay,</span></h1>
            <h2>Where the future of payments is just a scan away!</h2>
            <p>We're on a mission to transform the way Kenyan merchants 
                and customers transact, one QR code at a time. With our 
                lightning-fast, affordable, and oh-so-convenient payment 
                solution, we simplify for businesses and customers alike.</p>
                <Link to={"/"}><button>DOWNLOAD LINK</button></Link>

        </div>
        <img src={landingImg} alt="landingImg" />
    </div>
  )
}

export default LandingHero
