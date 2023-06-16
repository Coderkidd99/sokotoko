import { useContext } from "react";
import ProductContext from "./ProductContext";


const Favorites = () => {

  const { showHeart, favorites } = useContext(ProductContext);
  
  return (
    <div>
      <div>
        <h1>Favorites</h1>
      </div>
    </div>
  );
};

export default Favorites;
