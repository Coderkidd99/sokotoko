/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  cartTotal: 0,
  getCartQuantity: () => {},
  increaseCartQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  decreaseCartQuantity: () => {},
  addPriceTotal: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const getCartQuantity = (id) => {
    const quantity = cartItems.find((product) => product.id === id)?.quantity;
    return quantity || 0;
  };

  const increaseCartQuantity = (id,title, price) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);
    if (existingItemIndex >= 0) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        {
          id,
          title,
          price,
          quantity: 1,
        },
      ]);
    }
  };

  const decreaseCartQuantity = (id, price) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);
    if (existingItemIndex >= 0) {
      const newCartItems = [...cartItems];
      const existingItem = newCartItems[existingItemIndex];
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        setCartItems(newCartItems);
      } else {
        newCartItems.splice(existingItemIndex, 1);
        setCartItems(newCartItems);
      }
      setCartTotal((prevTotal) => prevTotal - price);
    } else {
      console.log("Item not found in cart");
    }
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter((i) => i.id !== item.id);
    setCartItems(newCartItems);
    setCartTotal((prevTotal) => prevTotal - item.price * item.quantity);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        getCartQuantity,
        increaseCartQuantity,
        removeFromCart,
        clearCart,
        decreaseCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
