import React from 'react'
import './Payment.css'
const Payment = () => {
  return (
    <div className='payment'>
        <h1>Future Payment</h1>
        <div className="payment-container">
            <div className="left-container">
                <div className="payment-content-container">
                    <h2>Your All-in-One Mobile Financial Hub</h2>
                    <p>Experience the convenience of managing all your transactions in one place. Join thousands of satisfied users who've made the smart switch to simpler, faster, and more secure mobile transactions.</p>
                </div>
                <div className="payment-content-container">
                    <h2>Affordable Transfers</h2>
                    <p>Free transfers within EpesiPay users. Enjoy the lowest market rates to other mobile networks. With a monthly fee of only Ksh. 170 you can make as many transactions as you want.</p>
                </div>
                
            </div>
            <div className="right-container">
                <div className="payment-content-container">
                    <h2>Fast and Secure Transactions</h2>
                    <p>Unlock lightning-fast, fortress-secure payments with our cutting-edge QR technology. Simply scan your store's unique code, tap your screen, and voilà! Your transaction is complete, wrapped in layers of ironclad encryption.</p>
                </div>
                <div className="payment-content-container">
                    <h2>Multiple Wallets</h2>
                    <p>Run your operations with cash from your wallets and generate yield on funds stored in your wallets.</p>
                </div>
                
            </div>
            
        </div>

    </div>
  )
}

export default Payment
