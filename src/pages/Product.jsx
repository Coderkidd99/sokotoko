import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "./ProductContext";
import CartContext from "./CartContext";

const Products = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const getProductById = (productId) => {
    return products.find((product) => product.id === parseInt(productId));
  };
  const { increaseCartQuantity } = useContext(CartContext);

  const handleAddToCart = (productId, title, price) => {
    increaseCartQuantity(productId, title, price);
  };

  const renderProductDetails = (product) => {
    return (
      <div key={product.id} className="flex items-center mb-8">
        <div className="mr-8">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-38 h-38 rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <h4 className="text-lg font-bold mb-4">${product.price}</h4>
          <button
            className="px-6 py-2 bg-orange-800 text-white rounded-full"
            onClick={() =>
              handleAddToCart(product.id, product.title, product.price)
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Products Page</h2>
      {id ? (
        <div>{renderProductDetails(getProductById(id))}</div>
      ) : (
        <div>{products.map((product) => renderProductDetails(product))}</div>
      )}
    </div>
  );
};

export default Products;
