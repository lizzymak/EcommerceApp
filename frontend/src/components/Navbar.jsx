import { ShoppingCart } from "lucide-react";

function Navbar({onNavigate, cartCount, activePage}){
    return(
        <nav className="navbar">
           <ul className="pages">
            <li 
            className={activePage === "home" ? "active" : ""} 
            onClick={() => onNavigate("home")}
            >
            Home
            </li>

            <li 
            className={activePage === "clothing" ? "active" : ""} 
            onClick={() => onNavigate("clothing")}
            >
            Clothing
            </li>
        </ul>

        <h1 style={{"margin-right": "10%"}}>Angel Apparel</h1>

        {/* CART */}
        <div className="cart" onClick={() => onNavigate("cart")}>
            <ShoppingCart />
            <span>{cartCount}</span>
        </div>

        </nav>
    )
}

export default Navbar