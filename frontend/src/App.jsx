import React, { useState } from "react";
import ClothingPage from "./Pages/ClothingPage";
import Home from "./Pages/Home"; // your existing home component
import Navbar from "./components/Navbar";
import CartPage from "./Pages/CartPage";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("home"); // tracks current page
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1)
    setCartItems([...cartItems, product])
    alert(`${product.title} added to cart!`)
    }

  const handleRemoveFromCart = (index) => {
    const newCart = [...cartItems]
    newCart.splice(index, 1)
    setCartItems(newCart)
    setCartCount(cartCount-1)
    }

  return (
    <div>
      <Navbar onNavigate={setPage} cartCount={cartCount} activePage ={page}></Navbar>
      <main>
        {page === "home" && <Home />}
        {page === "clothing" && <ClothingPage onAddToCart={handleAddToCart}/>}
        {page === "cart" && (
        <CartPage cartItems={cartItems} onRemove={handleRemoveFromCart} />
        )}
      </main>
    </div>
  );
}
