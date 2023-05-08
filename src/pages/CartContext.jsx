/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Function to add item to cart
  const addToCart = (id, name, price) => {
    setCartItems((prevState) => [...prevState, { id, name, price }]);
    setCartTotal(cartTotal + price);
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
    setCartTotal(cartTotal - item.price);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };
  return (
    <CartContext.Provider
      value={{ cartItems, cartTotal, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
