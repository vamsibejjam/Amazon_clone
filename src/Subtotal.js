import React from 'react';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import {  useNavigate } from 'react-router-dom';

export  const CurrencyFormat = ({ value, currency = 'INR' }) => {
  return (
    <span>
      {Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(value)}
    </span>
  );
};


const Subtotal = () => {
  
  const [{ basket }] = useStateValue();
  const navigate=useNavigate()
 
  const totalItems = basket.length;

  const totalValue = basket.reduce((acc, item) => acc + item.price, 0);

  const formattedAmount = <CurrencyFormat value={totalValue} currency='INR' />;

  return (
    <div className='subtotal '>
      <strong>Your total ({totalItems}) items values is: {formattedAmount}</strong>
      <small className='subtotal_gift'>
        <input type='checkbox' />This order contains a gift
      </small>
      <button onClick={ e=>navigate('/payment')} className='checkout_button'>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
