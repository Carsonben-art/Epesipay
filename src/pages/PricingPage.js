import React from 'react'
import PricingHero from '../components/pricing/PricingHero'
import ATMWithdrawalTariff from '../components/pricing/ATMWithdrawalTariff'
import EpesiPayTable from '../components/pricing/EpesiPayTable'

const PricingPage = () => {
  return (
    <div>
      <PricingHero />
      <EpesiPayTable />
      <ATMWithdrawalTariff />
    </div>
  )
}

export default PricingPage
