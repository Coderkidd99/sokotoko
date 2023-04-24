/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ProductContext = createContext({
  itemsListing: [],
  setItemsListing: () => {},
});

export const ProductProvider = ({ children }) => {
  const [itemsListing, setItemsListing] = useState([]);

  return (
    <ProductContext.Provider value={{ itemsListing, setItemsListing }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
