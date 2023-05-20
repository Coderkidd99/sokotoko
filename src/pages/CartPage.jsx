import { useState, useContext } from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import CartContext from "./CartContext";
import axios from "axios";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useContext(CartContext);

  const [clientSecret, setClientSecret] = useState("");

  const initiatePayment = async () => {
    try {
      const response = await axios.post("/checkout");
      const { clientSecret } = response.data;
      setClientSecret(clientSecret);
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-xl w-full">
        {cartItems.length === 0 ? (
          <div className="flex flex-col justify-center items-center p-4">
            <h2 className="text-lg font-medium">Shopping Cart is Empty!</h2>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center border-b-2 pb-2">
              <h2 className="text-lg font-medium">Shopping Cart</h2>
              <span className="text-gray-400">{cartItems.length} items</span>
            </div>
            <div className="mt-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                    <p className="text-gray-500">
                      ${item.price.toFixed(2) * item.quantity}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="text-gray-400 hover:text-gray-800"
                      onClick={() => decreaseCartQuantity(item.id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="text-gray-400 hover:text-gray-800"
                      onClick={() =>
                        increaseCartQuantity(item.id, item.title, item.price)
                      }
                    >
                      <FaPlus />
                    </button>
                    <button
                      className="text-gray-400 hover:text-gray-800 ml-4"
                      onClick={() => removeFromCart(item)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-between items-center">
                <p className="font-medium text-gray-800">Total</p>
                <p className="font-medium text-gray-800">${totalPrice}</p>
              </div>
              <form action="/create-checkout-session" method="POST">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded mt-4 w-full"
                  onClick={initiatePayment}
                >
                  Pay Now
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
