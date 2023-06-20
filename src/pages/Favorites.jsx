import { useContext } from "react";
import ProductContext from "./ProductContext";
import CartContext from "./CartContext";
import { MdAddCircle } from "react-icons/md"
import { FaTrash } from "react-icons/fa";

const Favorites = () => {
  const { favorites, setFavorites } = useContext(ProductContext);
  const { increaseCartQuantity} = useContext(CartContext)

  const handleAddToCart = (productId, title, price) => {
    increaseCartQuantity(productId, title, price);
    handleDelete(productId);

  };

  const handleDelete = (productId) => {
    const updatedFavorites = favorites.filter((item) => item.id !== productId);
    setFavorites(updatedFavorites);
  };
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="font-bold text-3xl justify-start pl-10 pt-10">Favorites</h1>
      </div>
      <div className="flex flex-col space-y-6 p-10">
        {favorites.map((product) => (
          <div key={product.id} className="flex space-x-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 object-cover"
            />
            <div>
              <h2 className="font-bold text-lg">{product.title}</h2>
              <p className="text-gray-500">${product.price}</p>
            </div>
            <button
            className=" text-black"
            onClick={() =>
              handleAddToCart(product.id, product.title, product.price)
            }
          >
          < MdAddCircle size={24} />
          </button>
          <button
              className="ml-2 text-gray-400 hover:text-gray-800"
              onClick={() => handleDelete(product.id)} //find a way to delete upon click of trash icon for deletion of the item from the page.
            >
              <FaTrash size={21}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
// make a button for removing and adding to cart