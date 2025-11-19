import React from "react";

export default function CartPage({ cartItems, onRemove }) {
  // calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-info">
                <h2>{item.title}</h2>
                <p>${item.price}</p>
              </div>
              <button onClick={() => onRemove(index)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: </strong>${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
