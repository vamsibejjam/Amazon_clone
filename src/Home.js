import React from 'react';
import './Home.css';
import Product from './Product';


const Home = () => {
  return (
    <div className="Home">
      <div className="home_container   ">

      <img className='home_image ' src='https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg' alt='img not loaded' />   

      <div className="container-fluid p-3  ">
        <div className="row product_section   ">
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3  justify-content-center ">
            <Product  id={1} title='GODOX 32"/ 80cm Umbrella reflector' price={399} image="https://m.media-amazon.com/images/I/51fAwMX4oBL._SL1000_.jpg" rating={5}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3  justify-content-center">
            <Product id={2} title='GIFTMAX Single Bulb Holder for Photography Light Lamp' price={999} image="https://m.media-amazon.com/images/I/416H9Z9OXdL._SL1000_.jpg" rating={4}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3  justify-content-center">
            <Product id={3} title='Lightweight & Portable Aluminum Alloy Light Stand for Ring Light' price={699} image="https://m.media-amazon.com/images/I/51zhVVMvqsL._SL1265_.jpg" rating={3}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3  justify-content-center">
            <Product id={4} title='Boya ByM1 Auxiliary Omnidirectional Lavalier Condenser Microphone' price={399} image="https://m.media-amazon.com/images/I/61IIhU50DML._SL1200_.jpg" rating={4}/>
          </div>
        </div>

        <div className="row product_section  ">
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3   justify-content-center">
            <Product id={5} title='Boult Audio Z40 True Wireless in Ear Earbuds with 60H' price={1399} image="https://m.media-amazon.com/images/I/81r4-kfrAvL._SL1500_.jpg" rating={3}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3   justify-content-center">
            <Product id={6} title='MI Xiaomi Beard Trimmer for Men 2C With High Precision Trimming' price={1099} image="https://m.media-amazon.com/images/I/61lSUHkhbGL._SL1500_.jpg" rating={4}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3   justify-content-center">
            <Product id={7} title='Ant Esports KM1610 LED Keyboard and Mouse Combo, 104 Keys Rainbow Backlit Keyboard' price={799} image="https://m.media-amazon.com/images/I/61eonV8rcEL._SL1500_.jpg" rating={4}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3   justify-content-center">
            <Product id={8} title='iQOO Z7s 5G by vivo (Norway Blue, 6GB RAM, 128GB Storage)' price={15999} image="https://m.media-amazon.com/images/I/71k3gOik46L._SL1200_.jpg" rating={4}/>
          </div>
        </div>

        <div className="row product_section  ">
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3   justify-content-center">
            <Product id={9} title='Amazon basics 42-Piece Impact Screwdriver Bit Set - Phillips, Slotted and Torx' price={879} image="https://m.media-amazon.com/images/I/81leza6EFYL._SL1500_.jpg" rating={4}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3   justify-content-center">
            <Product id={10} title='Himalaya Baby Lotion (400ml) & Himalaya Baby Lotion 700m' price={546} image="https://m.media-amazon.com/images/I/71CEf-j7xJL._SL1500_.jpg" rating={4}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3  justify-content-center">
            <Product id={11} title='Lenovo 15.6" (39.62cm) Slim Everyday Backpack, Made in India, Compact' price={499} image="https://m.media-amazon.com/images/I/61v0-iGlR1L._SL1333_.jpg" rating={4}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex  p-3  justify-content-center">
            <Product id={12} title='Drone-with-4K-Camera-WiFi-FPV-1080P-HD-Dual-Foldable-RC-Quadcopter' price={1799} image="https://m.media-amazon.com/images/I/6197cJY8NAL._SL1108_.jpg" rating={4}/>
          </div>
        </div>

      </div>

    </div>
    </div>
  );
}

export default Home;
