/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Function to add item to cart
  const addToCart = (id, title, price) => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      setCartItems((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevState) => [
        ...prevState,
        {
          id,
          title,
          price,
          quantity: 1, // Initialize the quantity to 1 for new items
        },
      ]);
    }
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

  const itemPriceTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setCartTotal(total);
    console.log(cartTotal);
  };
  
  
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        removeFromCart,
        clearCart,
        decrementCartItem,
        itemPriceTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
