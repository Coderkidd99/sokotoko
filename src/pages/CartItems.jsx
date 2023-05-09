/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartItems({ showCart, toggleCart }) {
  return (
    <div>
      {showCart && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
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
                <div className="flex flex-col">{/* cart items here */}</div>
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

export default CartItems;
