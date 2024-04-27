import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'
import { collection, orderBy, query, onSnapshot, getDocs } from "firebase/firestore";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserOrders = async (user) => {
    if (!user) return;

    setIsLoading(true);

    try {
      const userOrdersRef = collection(db, "users", user.uid, "orders");
      const q = query(userOrdersRef, orderBy("created", "desc"));

      const snapshot = await getDocs(q);

      const orders = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setOrders(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserOrders(user);
  }, [user]);

  return (
    <div className=' container     '>
  
    <h1 className='m-3'>Your Orders</h1>
    {isLoading ? (
            <p>Loading orders...</p>
          ) : user ? (
            <div  >
              {orders.map((order) => (
                
                <Order order={order} key={order.id} />
              ))}
            </div>
          ) : (
            <p>You don't have any orders yet.</p>
          )}

   
     
    </div>
  );
}

export default Orders;
