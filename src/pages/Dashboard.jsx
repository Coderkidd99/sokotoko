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
  const { items } = useContext(CartContext);
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between py-4">
        <div className="flex items-center flex-wrap">
          <img src={Logo} alt="Sokotoko logo" className="h-12 md:h-16" />
          <div className="ml-4 flex justify-end">
            <form className="flex">
              <input
                type="text"
                placeholder="Search for products"
                className="py-2 px-4 border border-gray-400 w-full md:w-80 rounded-l-md"
              />
              <button
                type="submit"
                className="bg-amber-800 hover:bg-amber-700 text-white px-4 md:px-8 w-auto rounded-r-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <nav className="">
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
                    <span className="ml-2">{items.length}</span>
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

                <li className="relative cursor-pointer hover:text-gray-600">
                  <Link to="/cart">
                    <BsCart4 size={24} />
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center">
                      {items.length}
                    </span>
                  </Link>
                </li>
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
