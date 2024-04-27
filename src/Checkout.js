import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const [{ basket }] = useStateValue()

  return (
    <div className='container-fluid mt-3 '>

      {basket.length === 0 ? (
        <div className="empty-cart-message d-flex flex-column ">
          <div className="empty_basketOne ">
            <h1>Your Shopping Cart is Empty</h1>
            <p>
              Add some products to start shopping! Explore a wide variety of
              items on Amazon.in, from groceries and electronics to clothing and
              household supplies. Visit the homepage, browse today's deals, or
              check your Wish List for inspiration.
            </p>
          </div>

          <div className="empty_basketSecond">
            <h1>Your Items</h1>
            <div className='empty_basketLinks' >
              <Link to='#'><p>No items saved for later</p></Link>
              <Link to='/'><p>Buy it again</p></Link>
            </div>
            <Link to='#'><p>No items saved for later</p></Link>
          </div>
        </div>

      ) : (
        
        <div className='container-fluid   '> 
        <div className='row'>
          <div className="  border border-light col-xs-12 col-md-8  mb-3  ">
              <img
                className='checkout_ad  mb-3'
                src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Coupons/BAU/coupon_pc_1500x300.gif'
                alt='img not loaded'
              />             
          </div>
          <div className=" col-xs-12 col-md-4  p-3">
            <div className="d-flex justify-content-center"> 
              <Subtotal />
              </div>
          </div>
        </div>
          
        <div className="row">
          <div className=" col-md-8 col-sm-12">
            <div className='d-flex flex-column'>
                      <h2 className='checkout_title'>Your Shopping Items</h2>
                      {basket.map((item, index) => (
                        <CheckoutProduct
                          key={index}
                          id={item.id}
                          title={item.title}
                          price={item.price}
                          rating={item.rating}
                          image={item.image}
                        />
                      ))}
              </div>
            </div>
          </div>
          

        </div>
      )}
    </div>
  )
}

export default Checkout
