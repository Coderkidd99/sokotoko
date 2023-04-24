import { useState, useContext } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";

function ProductCard({ product, isFavorite, toggleFavorite }) {
  const { items, addItem } = useContext(CartContext);
  const [showHeart, setShowHeart] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 2000);
  };

  return (
    <div className="border rounded-lg overflow-hidden relative">
      {showHeart && (
        <div className="absolute top-0 right-0 m-3 text-red-500">
          <MdFavorite size={24} />
        </div>
      )}
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-44 p-2 h-full"
        />
      </div>
      <div className="p-4 bg-white">
        <Link to={`/product/${product.id}`}>
          <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        </Link>
        <div className="flex justify-between items-center">
          <div className="text-gray-900 font-bold text-lg">
            ${product.price}
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className={`text-gray-500 ${isFavorite ? "text-red-500" : ""}`}
              onClick={toggleFavorite}
            >
              {isFavorite ? (
                <MdFavorite size={24} />
              ) : (
                <MdFavoriteBorder size={24} />
              )}
            </button>
            <button
              type="button"
              className="ml-4 bg-gray-900 text-white py-2 px-4 rounded-full flex items-center"
              onClick={handleAddToCart}
            >
              <FiPlus size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
