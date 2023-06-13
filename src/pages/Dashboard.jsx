/* eslint-disable react/prop-types */
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "../App";
import { useContext, useState } from "react";
import CartContext from "./CartContext";
import CartItems from "./CartItems";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";

function Dashboard() {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  
  function toggleCart() {
    setShowCart(!showCart);
  }

  return (
    <header className="flex flex-col sm:flex-row bg-white shadow px-28">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Sokotoko logo"
              className="h-12 md:h-16 md:w-auto"
            />
          </Link>
        </div>
        <form className="flex flex-1 h-10 ml-4">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full h-full border border-gray-400 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-amber-800 hover:bg-amber-700 text-white px-4 rounded-r-md"
          >
            Search
          </button>
        </form>
        <nav className="flex p-2 justify-evenly items-center">
          <ul className="flex items-center list-none space-x-4">
              <>
                <li className="cursor-pointer hover:text-gray-600">
                  <MdFavoriteBorder size={24} />
                </li>

                <button
                  className="relative cursor-pointer hover:text-gray-600"
                  onClick={toggleCart}
                >
                  <BsCart4 size={24} />
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center">
                    {cartItems.length}
                  </span>
                </button>
                {showCart && (
                  <div>
                    <CartItems showCart={showCart} toggleCart={toggleCart} />
                  </div>
                )}

                <li className="cursor-pointer hover:text-gray-600">
                  < LoginButton />
                  <LogoutButton />
                </li>
                <Profile />

              </>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Dashboard;
