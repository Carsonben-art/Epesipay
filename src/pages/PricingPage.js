import React from 'react'
import PricingHero from '../components/pricing/PricingHero'
// import ATMWithdrawalTariff from '../components/pricing/ATMWithdrawalTariff'
import EpesiPayTable from '../components/pricing/EpesiPayTable'
import BusinessNote from '../components/pricing/BusinessNote'

const PricingPage = () => {
  return (
    <div>
      <PricingHero />
      <EpesiPayTable />
      {/* <ATMWithdrawalTariff /> */}
      <BusinessNote />
    </div>
  )
}

export default PricingPage
