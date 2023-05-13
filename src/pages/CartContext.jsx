/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);


  // Function to add item to cart
  const addToCart = (id, title, price) => {
    setCartItems((prevState) => [...prevState, { id, title, price }]);
    setCartTotal(cartTotal + price);
    console.log(cartItems);
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

  // Function to decrement item quantity in cart
  const decrementCartItem = (item) => {
    const itemIndex = cartItems.findIndex((i) => i.id === item.id);
    const newCartItems = [...cartItems];
    if (itemIndex >= 0) {
      const itemQuantity = newCartItems[itemIndex].quantity;
      if (itemQuantity > 1) {
        newCartItems[itemIndex].quantity = itemQuantity - 1;
        setCartItems(newCartItems);
        setCartTotal(cartTotal - item.price);
      }
    } else {
      console.log("Item not found in cart");
    }
  };
  
  
  

  return (
    <CartContext.Provider
      value={{ cartItems, cartTotal, addToCart, removeFromCart, clearCart, decrementCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
