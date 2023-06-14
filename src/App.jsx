import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import CartPage from "./pages/CartPage";
import { CartProvider } from "../src/pages/CartContext";
import { ProductProvider } from "../src/pages/ProductContext";
import CartItems from "./pages/CartItems";
import Product from "./pages/Product"
import Favorites from "./pages/Favorites";

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
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/product/:id" element={<Product />}  />
            <Route path="/cartitems" element={<CartItems />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}
