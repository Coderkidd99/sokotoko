import { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "./ProductContext";

const Products = () => {
  const { products, setProducts, favorites, setFavorites, search, setSearch } =
    useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };


  useEffect(() => {
    setIsLoading(true); // Set loading state to true before fetching data

    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((apiData) => {
        setProducts(apiData);
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // Set loading state to false if an error occurs during fetching
      });
  }, [setProducts]);

  useEffect(() => {
    // Filter products based on the search query
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSearch("");
  }, [products, search]);


  return (
    <div>
      {isLoading ? ( // Display loading indicator while loading
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              isFavorite={favorites.includes(item.id)}
              toggleFavorite={() => toggleFavorite(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
