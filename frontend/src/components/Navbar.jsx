import { ShoppingCart } from "lucide-react";

const Navbar =()=>{
    return(
        <nav className="w-full bg-gray shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
            
            <div className="text-2xl font-bold text-pink-500text-2xl font-bold text-pink-500 tracking-wide cursor-pointer">
                Logo
            </div>

            <div className="md:flex space-x-8 text-gray-600 font-medium">
                <button className="hover:text-pink-500 transition">Clothing</button>
            </div>

            <div className="flex items-center space-x-2 cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-pink-500 transition"></ShoppingCart>
                <span className="text-gray-700 font-medium">5</span>
            </div>



        </nav>
    )
}

export default Navbar