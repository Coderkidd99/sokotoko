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
    <header className="flex justify-center bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Sokotoko logo" width={200} />
          <div className="ml-4 flex">
            <input
              type="text"
              placeholder="Search for products"
              className="py-2 px-4 border border-gray-400 w-96 rounded-s-md"
            />
            <button
              type="submit"
              className=" bg-amber-800 hover:bg-amber-700 text-white px-4 w-28 rounded-r-md"
            >
              Search
            </button>
          </div>
        </div>
        <nav className="">
          <ul className="flex items-center list-none space-x-4 ml-2">
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
                    <span>{items.length}</span>
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
                
                <li className="cursor-pointer hover:text-gray-600">
                <span className="fixed text-xl top-1  ">{items.length}</span>
                  <BsCart4 size={24} />
                </li>
                <li className="cursor-pointer hover:text-gray-600">
                  <Link to="/login">
                    <button onClick={toggleModal}>Sign In</button>
                  </Link>
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
