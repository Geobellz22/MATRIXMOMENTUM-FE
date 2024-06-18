import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderTracking = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Simulate fetching order details from backend
    setOrder({ id: orderId, total: 300, status: 'In Transit' });
  }, [orderId]);

  if (!order) return <p>Loading order details...</p>;

  return (
    <div>
      <h2>Order Tracking</h2>
      <p>Order #{order.id}</p>
      <p>Total: ${order.total}</p>
      <p>Status: {order.status}</p>
    </div>
  );
};

export default OrderTracking;
