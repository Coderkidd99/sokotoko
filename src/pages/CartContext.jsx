import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  cartTotal: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  decrementCartItem: () => {},
  addPriceTotal: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
    setCartTotal(cartTotal - item.price);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

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

  const addPriceTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    console.log("total: ", total);
    setCartTotal(total);
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
        addPriceTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
