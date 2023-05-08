import { useContext } from 'react';
import { CartContext } from './CartContext'


const CartPage = () => {
  const { items, cartTotal } = useContext(CartContext);

  return (
    <div>

    </div>
  )

  }

export default CartPage;
