import { useState } from 'react';

function CartModal() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartTotal(cartTotal + item.price);
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
    setCartTotal(cartTotal - item.price);
  };

  return (
    <div className="fixed bottom-0 right-0 bg-white border border-gray-300 p-4">
      <div className="hidden absolute right-0 top-0 bg-white border border-gray-300 p-4 w-96">
        <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <div>{item.name}</div>
              <div>${item.price}</div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4">
          <div>Total:</div>
          <div>${cartTotal}</div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
