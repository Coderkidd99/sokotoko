import { useState, useEffect } from "react";

const Products = () => {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((Response) => Response.json())
      .then((apiData) => setItemsData(apiData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex text-lg text-cyan-950 justify-center">
      <h1>Items from API:</h1>
      <ul className="list-group">
        {itemsData.map((item) => (
          <li key={item.id} className="flex bg-red-300">
            <img src={item.image} />
      
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
