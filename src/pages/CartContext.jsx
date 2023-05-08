/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Function to add item to cart
  const addToCart = (name, price) => {
    setItems((prevState) => [...prevState, { name, price }]);
    setCartTotal(cartTotal + price);
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    setItems(items.filter((i) => i.id !== item.id));
    setCartTotal(cartTotal - item.price);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

