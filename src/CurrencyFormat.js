import React from 'react'

const CurrencyFormat = ({amount,currency='INR'}) => {
    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
      }).format(amount);
  return (
    <div>
      
    </div>
  )
}

export default CurrencyFormat
