import { useContext } from "react";
import  CartContext  from "./CartContext";

const CartPage = () => {
  const { items, cartTotal, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {items.length > 0 ? (
        <div>
          <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
          <div className="border p-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                <button
                  className="text-sm text-red-500"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4">
              <h3 className="font-bold">Total</h3>
              <p className="text-lg font-bold">${cartTotal}</p>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 mt-4">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="border p-4">
          <h2 className="text-lg font-bold">Shopping Cart is Empty</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
