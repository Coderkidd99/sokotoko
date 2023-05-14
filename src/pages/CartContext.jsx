import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  cartTotal: 0,
  increaseCartQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  decreaseCartQuantity: () => {},
  addPriceTotal: () => {},
  getItemQuantity: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);



  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  //add item to cart
  const increaseCartQuantity = (id, title, price) => {
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

  //decrease item from cart
  const decreaseCartQuantity = (id, price) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    const newCartItems = [...cartItems];
    if (itemIndex >= 0) {
      const itemQuantity = newCartItems[itemIndex].quantity;
      if (itemQuantity > 1) {
        newCartItems[itemIndex].quantity = itemQuantity - 1;
        setCartItems(newCartItems);
        setCartTotal(prevTotal => prevTotal - price);
      }
    } else {
      console.log("Item not found in cart");
    }
    
  };
  

  //delete and remove the item completely from cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
    setCartTotal(prevTotal => prevTotal - item.price);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };


  //add the total amount of product x qty
  const addPriceTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    setCartTotal(prevTotal => prevTotal + total);
  };
  
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        increaseCartQuantity,
        removeFromCart,
        clearCart,
        decreaseCartQuantity,
        addPriceTotal,
        getItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
