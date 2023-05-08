import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/LoginModal";
import User from "./pages/User";
import Seller from "./pages/Seller";
import CartPage from "./pages/CartPage";
import Products from "./pages/Products";
import { CartProvider } from "../src/pages/CartContext";
import { ProductProvider } from "../src/pages/ProductContext";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Dashboard loggedIn={loggedIn} handleLogout={handleLogout} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cartpage" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}
