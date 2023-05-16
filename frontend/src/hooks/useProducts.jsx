import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider.jsx";

const useProducts = () => {
  return useContext(ProductsContext)
}

export default useProducts