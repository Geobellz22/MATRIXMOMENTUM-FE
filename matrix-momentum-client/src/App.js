import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import OrderTracking from './components/OrderTracking';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* Removed navigation links */}
        </header>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;