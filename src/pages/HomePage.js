import React from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Payment from '../components/home/Payment'
import Missions from '../components/home/Missions'
import Testimonials from '../components/home/Testimonials'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services id="services"/>
      <Payment />
      <Missions /> 
      <Testimonials />
    </div>
  )
}

export default HomePage
