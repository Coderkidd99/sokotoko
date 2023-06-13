import {  useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "./ProductContext";

const Products = () => {
  const { products, setProducts, favorites, setFavorites } = useContext(ProductContext);
 


  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

   useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((apiData) => setProducts(apiData))
      .catch((error) => console.log(error));
  }, [setProducts]); 



  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
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
