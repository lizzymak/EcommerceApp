import {useState} from "react";
import { products } from "../data/products";
import Modal from "../components/ProductModal";



const ClothingPage = ({ onAddToCart }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    return(
        <div>
            <div className="grid">
            {products.map((product) => (
            <div key={product.id} className="card"
            onClick={() => setSelectedProduct(product)}>
                <img src={product.image} alt={product.title} />
                <div className="card-info">
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
            </div>
            </div>
            ))}
            </div>

            {/* {selectedProduct && (
        <div className="modal-bg" onClick={() => setSelectedProduct(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // prevent modal click from closing
          >
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <p style={{ color: "#ff6b81", fontWeight: "bold" }}>
              ${selectedProduct.price}
            </p>
            <button onClick={() => alert("Added to cart!")}>
              Add to Cart
            </button>
          </div>
        </div>
      )} */}
      <Modal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
            
        </div>
    )
}

export default ClothingPage