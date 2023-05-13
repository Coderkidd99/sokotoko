/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ProductContext = createContext({
  itemsListing: [],
  setItemsListing: () => {},
  favorites: [],
  setFavorites: () => {},
  showHeart: false,
});

export const ProductProvider = ({ children }) => {
  const [itemsListing, setItemsListing] = useState([]);
  const [showHeart, setShowHeart] = useState(false);
  const [favorites, setFavorites] = useState([]);

  return (
    <ProductContext.Provider value={{ itemsListing, setItemsListing, showHeart, setShowHeart, favorites, setFavorites}}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
