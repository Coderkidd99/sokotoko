/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import CartContext from "./CartContext";
import ProductContext from "./ProductContext";

function ProductCard({
  product,
  isFavorite = false,
  toggleFavorite = () => {},
}) {
  const { increaseCartQuantity } = useContext(CartContext);
  const { showHeart } = useContext(ProductContext);

  const handleAddToCart = () => {
    increaseCartQuantity(product.id, product.title, product.price);
};

  const imageStyle =  "object-contain	 cursor-pointer w-[200px] h-[200px] ";
  const price = product?.price || "";
 
  return (
    <div className="overflow-hidden relative">
      {showHeart && (
        <div className="absolute top-0 right-0 m-3 text-red-500">
          <MdFavorite size={24} />
        </div>
      )}
      <div
        className="relative flex justify-center aspect-w-1 aspect-h-1 hover:shadow-md z-10 shadow-md-left shadow-md-right
"
      >
        <Link to={`/product/${product?.id}`}>
        <img src={product?.image} alt={product?.title} className={imageStyle} />
        </Link>
      </div>
      <div className="p-4 bg-white">
        <Link to={`/product/${product?.id}`}>
          <h2 className="font-bold text-sm mb-2">{product?.title}</h2>
        </Link>
        <div className="flex justify-between items-center">
          <div className="text-gray-900 font-bold text-lg">{`$${price}`}</div>
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
