import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/LoginModal";
import User from "./pages/User";
import Seller from "./pages/Seller";
import { CartProvider } from "../src/pages/CartContext";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Dashboard loggedIn={loggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/seller" element={<Seller />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
