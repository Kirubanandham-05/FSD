import React from "react";
function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
export default Cart;
