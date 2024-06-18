import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    { id: 1, total: 300, status: 'Completed' },
    { id: 2, total: 200, status: 'Pending' }
  ]);

  useEffect(() => {
    // Simulate fetching order history from backend
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order #{order.id} - ${order.total} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
