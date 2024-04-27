import React ,{useEffect }from 'react';
import Header from './Header.js';
import Home from './Home.js';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Checkout.js';
import Login from './Login.js';
import { useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';
import { useStateValue } from './StateProvider.js';
import Payment from './Payment.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders.js';



const stripePromise = loadStripe('pk_test_51P579KSA3YngssnfiyxmFkLYt3ibzXVljV438jnC44T8qpeK922Ibr0pl7i2FkD05hRNmOOSqie0V3JQPtLYoN1900JGQamixP');
const App = () => {

  const location = useLocation();
  const[,dispatch]=useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    
      if(user){
        dispatch({
          type:'SET_USER',
          user:user
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    });

    return () => unsubscribe(); 
  }, []);


  return (
    
      <div className='app'>
    
      {location.pathname !== '/login' && <Header />}
      
          <Elements stripe={stripePromise} >

          <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />    
            <Route path='/payment' element= {<Payment/>} />
            <Route path='/orders' element= {<Orders/>} />
          </Routes>

          </Elements>
     
      </div>

        

        
    
    
  );
};

export default App;
