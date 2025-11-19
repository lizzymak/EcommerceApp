import React from "react";

export default function Modal({ product, onClose, onAddToCart }) {
  if (!product) return null; // don't render if no product

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p style={{ color: "#ffc0cb", fontWeight: "bold" }}>${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
