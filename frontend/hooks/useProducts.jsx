import { useContext } from "react";
import ProductsContext from "../src/context/ProductsProvider";


const useProducts = () => {
  return useContext(ProductsContext)
}

export default useProducts