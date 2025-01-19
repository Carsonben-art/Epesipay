import React from 'react'
import PricingHero from '../components/pricing/PricingHero'
import PricingTable from '../components/pricing/PricingTable'
import ATMWithdrawalTariff from '../components/pricing/ATMWithdrawalTariff'

const PricingPage = () => {
  return (
    <div>
      <PricingHero />
      <PricingTable />
      <ATMWithdrawalTariff />
    </div>
  )
}

export default PricingPage
