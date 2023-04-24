/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
const [itemsListing, setItemsListing] = useState([]);

  return <ProductContext.Provider value={itemsListing}>{children}</ProductContext.Provider>;
};
