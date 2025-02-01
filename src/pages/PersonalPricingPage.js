import React from 'react'
import PricingHero from '../components/pricing/PricingHero'
import PricingTable from '../components/pricing/PricingTable'
import ATMWithdrawalTariff from '../components/pricing/ATMWithdrawalTariff'

const PersonalPricingPage = () => {
  return (
    <div>
      <PricingHero />
      <PricingTable />
      <ATMWithdrawalTariff />
    </div>
  )
}

export default PersonalPricingPage
