import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';


const Product = ({ id, title, price, image, rating }) => {
  const [{ basket, user }, dispatcher] = useStateValue();
  const navigate = useNavigate();

  const addToBasket = () => {
    if(user){
      dispatcher({
        type: "ADD_TO_BASKET",
        item: {
          id,
          title,
          image,
          price,
          rating,
        
        },
      });
    }else{
      navigate('/login')
    }
    
  };

  return (
    <div className='product  '>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product_rating">
        {Array(rating).fill().map((_, i) => (
          <p key={i}>⭐</p>
        ))}
      </div>
      <img src={image} alt="img not loaded" width='100%' />
      <button onClick={addToBasket}>ADD TO CART</button>
    </div>
  );
};

export default Product;
