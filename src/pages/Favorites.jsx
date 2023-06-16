import { useContext } from "react";
import ProductContext from "./ProductContext";

const Favorites = () => {
  const { showHeart, favorites } = useContext(ProductContext);

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="font-bold text-3xl justify-start pl-10 pt-10">Favorites</h1>
      </div>
      <div className="flex flex-col space-y-6 p-10">
        {favorites.map((product) => (
          <div key={product.id} className="flex space-x-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 object-cover"
            />
            <div>
              <h2 className="font-bold text-lg">{product.title}</h2>
              <p className="text-gray-500">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
