import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";


function Order({ order }) {
    return (
        <div className='container bg-white  p-5 border border-light mb-3  '>  
        <div className="p-3">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p> <small>{order.id}</small> </p>
        </div>

            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            </div>
             
        
    )
}

export default Order
