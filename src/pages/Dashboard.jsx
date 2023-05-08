/* eslint-disable react/prop-types */
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BiStore } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "../App";
import LoginModal from "./LoginModal";
import { useContext, useState } from "react";
import CartContext from "./CartContext";

function Dashboard({ loggedIn, handleLogout }) {
  const { cartItems } = useContext(CartContext);
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <header className="flex flex-col sm:flex-row bg-white shadow px-28">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <Link to="/home">
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
            {loggedIn ? (
              <>
                <li>
                  <Link to="/user">
                    <FaUserCircle size={24} />
                  </Link>
                </li>
                <li>
                  <Link to="/seller">
                    <BiStore size={24} />
                    <span className="ml-2">{cartItems.length}</span>
                  </Link>
                </li>
                <li
                  className="cursor-pointer hover:text-gray-600"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </>
            ) : (
              <>
                <li className="cursor-pointer hover:text-gray-600">
                  <MdFavoriteBorder size={24} />
                </li>

                <Link
                  to="/CartPage"
                  className="relative cursor-pointer hover:text-gray-600"
                >
                  <BsCart4 size={24} />
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center">
                    {cartItems.length}
                  </span>
                </Link>
                <li className="cursor-pointer hover:text-gray-600">
                  <button onClick={toggleModal}>Sign In</button>
                  <LoginModal modal={modal} toggleModal={toggleModal} />
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Dashboard;
