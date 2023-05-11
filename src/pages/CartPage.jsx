import { useContext } from "react";
import CartContext from "./CartContext";

const CartPage = () => {
  const { cartItems, cartTotal, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center p-4 text-black ">
          <h1 className="flex text-bold text-black text-xl mb-2">Shopping Cart</h1>
          <div className="border-2 p-5">add items in cart here</div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-4">
          <h2 className="text-xl font-bold border-1 p-5 mt-5 ">
            Shopping Cart is Empty!
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
