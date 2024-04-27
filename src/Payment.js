import React, {  useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom';
import './Payment.css'
import {  CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CurrencyFormat } from './Subtotal';
import axios from 'axios';
import { db } from "./firebase";
import { collection, doc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';

const Payment = () => {
  const axiosInstance=axios.create({
    baseURL:'http://127.0.0.1:5001/clone-667af/us-central1/api'
})

const[{basket,user},dispatch]= useStateValue()
const totalValue = basket.reduce((acc, item) => acc + item.price, 0);
const formattedAmount = <CurrencyFormat value={totalValue} currency='INR' />;
const navigate =useNavigate();
const stripe=useStripe();
const elements=useElements();
const [error,setError]=useState(null);
const [disabled,setDisabled]=useState(true);
const [processing,setProcessing]=useState('');
const [succeeded,SetSucceeded]=useState(false)
const[clientSecret,setClientSecret]=useState(null)



//----------------THIS IS USEEFFECT FUNCTION-----------------------------------------------------
useEffect(() => {
  const getClientSecret = async () => {
    try {
      const response = await axiosInstance({
        method: 'post',
        url: `/payments/create?total=${totalValue * 100}`
      });
      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.error('Error fetching client secret:', error); 
    }
  };

  getClientSecret();
}, [basket]);



//----------------THIS IS ONSUBMIT EVENT FUNCTION-----------------------------------------------------

 
const handleSubmit = async (e) => {
  e.preventDefault();

  setProcessing(true);
  

  await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
        card: elements.getElement(CardElement)
    }
}).then(async({ paymentIntent, error }) => {
      if (error) {
          // Handle error
          console.error("Error confirming card payment:", error);
          setError(error.message); // Set error message state
          setProcessing(false); // Stop processing
      } else {
          console.log(paymentIntent); // Log paymentIntent to console for debugging

          // Assuming db is your Firestore instance

          const userOrdersRef = collection(db, "users", user?.uid, "orders"); // Using collection chaining for readability
          const orderDocRef = doc(userOrdersRef, paymentIntent.id);
          
          try {
            await setDoc(orderDocRef, {
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });
            console.log("Order data saved successfully!");
          } catch (error) {
            console.error("Error saving order data:", error);
            // Optionally display an error message to the user
            setError(error.message); // Assuming 'setError' is a state setter for displaying error messages
          }
          

          dispatch({
              type: 'EMPTY_BASKET'
          });

          SetSucceeded(true);
          setError(null);
          setProcessing(false);
          navigate('/');
      }
  });
}

//------------------------------------------------------------------------------------------------

 /*THIS IS ONCHANGE EVENT FUNCTION*/
  const handleChange= (e)=>{
    
    setDisabled(e.empty)
    setError(e.error?e.error.message:'')
    

  }

/*--------------------------------------------*/
  return (
    <div className='container-fluid '>
      <div className='d-flex flex-column bg-white '>
        <h1 className='text-center m-3 title '><Link to='/checkout' className='text-decoration-none' >Checkout({basket.length} Items</Link>)</h1>
        <div className='payment_section  m-3  row  p-3'>
            <div className='payment_title p-2  col-md-3 '>
              <h3 >Delivery Address</h3>
            </div>
            <div className='payment_address  col-md-9 p-3'>
              <p>{user?.email}</p>
              <p>6-10-171/A1</p>
              <p>Vemuri street,522265,repalle</p>
            </div>
        </div>

        <div className='payment_section  m-3  p-3 row  '>

          <div className="payment_title col-md-3 p-2 ">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment_items col-md-9  ">
            {basket.map((item,index)=>(
              <CheckoutProduct 
              key={index}
              id={item.id}
              price={item.price}
              rating={item.rating}
              title={item.title}
              image={item.image}
              />
            ))}
          </div>
          
        </div>

        <div className='payment_section  m-3  p-3   row '>
          <div className="  p-2 col-md-3">
            <h3 className='text-center'>Payment Method</h3>
          </div>

          <div className="payment_details p-3  col-md-9 "> 

              <form onSubmit={handleSubmit} className='d-flex flex-column  ' >

                <CardElement onChange={handleChange}  className='mb-3'/>
                
                  <div className="payment_currencyconatiner mb-3">
                    <h5>Order Total :{formattedAmount}</h5>
                  </div>

                  <button className='mb-3' disabled={processing || disabled || succeeded }>
                    <span>{processing ? <p>Processing</p> :"Buy now" }</span>
                  </button>

                  {error && <div>{error}</div> }
                  
              </form>
          </div>
          
          
        </div>

      </div>
      </div>
    
  )
}

export default Payment
