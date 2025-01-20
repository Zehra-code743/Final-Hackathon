"use client"
import React, { useState } from 'react';
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Cirtus Edge', price: 20, image: '/Frame.webp', quantity: 1 },
    { id: 2, name: 'Rose Luxre Armchair', price: 20, image: '/Pinksofa.webp', quantity: 1 },
    { id: 3, name: 'Libraray Stool Chair', price: 20, image: '/Image.webp', quantity: 1 },
    { id: 4, name: 'Wing Chair', price: 3854, image: '/image5.webp', quantity: 1 },
    { id: 5, name: 'wooden chair', price: 157, image: '/image9.webp', quantity: 1 },
    { id: 6, name: 'Desk chair', price: 154, image: '/Image3.webp', quantity: 1 },
  ]);

  const handleRemove = (id :any) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id :any, action :any) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const updatedQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: updatedQuantity > 0 ? updatedQuantity : 1 };
      }
      return item;
    }));
  };

  const handleCheckout = () => {
    alert('Checkout successful!');
    setCartItems([]); // Clear the cart after checkout
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.map(item => (
        <div className="flex items-center justify-between mb-4" key={item.id}>
          <div className="flex items-center gap-4">
            <img src={item.image} className="w-24 h-24 object-contain" alt={item.name} />
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <button className="text-red-500" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
          </div>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}

      <div className="mt-4">
        <div className="flex justify-between">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
        <div className="mt-2 flex justify-between">
          <button onClick={handleCheckout} className="bg-blue-600 text-white py-2 px-4 rounded">Checkout</button>
          <button className="bg-gray-300 py-2 px-4 rounded">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
