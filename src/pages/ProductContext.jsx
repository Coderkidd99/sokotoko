/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ProductContext = createContext({
  favorites: [],
  setFavorites: () => {},
  showHeart: false,
  search: "",
  setSearch: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [showHeart, setShowHeart] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        showHeart,
        setShowHeart,
        favorites,
        setFavorites,
        search,
        setSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
