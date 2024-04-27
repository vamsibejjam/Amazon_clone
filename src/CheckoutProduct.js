import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, image, rating, title, price, hideButton }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };

  return (
    <div className=' d-flex  justify-content-center p-3'>
      <img className="checkoutproduct_image col-lg-3  p-3" src={image} alt="img not loaded" />
      <div className="checkoutproduct_info col-lg-9  p-3 d-flex flex-column">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket} className="btn mt-auto">Remove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
