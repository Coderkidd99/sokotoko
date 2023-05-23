import {  useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "./ProductContext";
import { productData } from "../ProductData";

const Products = () => {
  const { products, setProducts, favorites, setFavorites } = useContext(ProductContext);
 


  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

/*   useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((apiData) => setItemsListing(apiData))
      .catch((error) => console.log(error));
  }, [setItemsListing]); */



  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setProducts(productData);
      }, 1000);
    };

    fetchData();
  }, [setProducts]);

  return (
    <div>
      <h1 className="text-4xl font-bold p-4">All Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            isFavorite={favorites.includes(item.id)}
            toggleFavorite={() => toggleFavorite(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
