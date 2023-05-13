/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "./CartContext";

function CartItems({ showCart, toggleCart }) {
  const { cartItems, removeFromCart ,addToCart, decrementCartItem} = useContext(CartContext);
  
  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div className="relative z-50 flex flex-row mb-4" key={item.id}>
        <img
          className="h-16 w-16 rounded-md object-cover"
          src={item.image}
          alt={item.title}
        />
        <div className="ml-2 flex flex-col justify-between">
          <div>
            <h1 className="text-sm font-medium">{item.title}</h1>
            <p className="text-xs text-gray-500">{item.description}</p>
            <p className="text-sm font-medium">${item.price}</p>
          </div>
          <div className="flex items-center mt-2">
            <button
              className="px-2 py-1 rounded-md bg-gray-200 text-gray-500 hover:bg-gray-300"
              onClick={() => decrementCartItem(item.id)}
            >
              -
            </button>
            <p className="mx-2">{item.quantity}</p>
            <button
              className="px-2 py-1 rounded-md bg-gray-200 text-gray-500 hover:bg-gray-300"
              onClick={() => addToCart(item.id, item.title, item.price)}
            >
              +
            </button>
            <p className="text-sm font-medium ml-auto">
              ${item.price * item.quantity}
            </p>
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    ));
  };
  
  return (
    <div>
      {showCart && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-start justify-end min-h-screen">
            <div className="relative bg-white right-0 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg shadow-lg">
              <button
                className="absolute top-0 right-0 m-3"
                onClick={toggleCart}
              >
                <IoClose className="text-gray-500 hover:text-gray-800 w-6 h-6" />
              </button>
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <FaShoppingCart className="text-gray-500 mr-2" />
                  <h1 className="text-lg font-medium">Shopping Cart</h1>
                </div>
                <div className="flex flex-col">{renderCartItems()}</div>
                <div className="flex justify-end mt-4">
                  <Link to="/cartpage">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"  onClick={toggleCart}>
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItems
