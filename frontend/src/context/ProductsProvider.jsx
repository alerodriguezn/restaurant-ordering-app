import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axiosClient";



const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
          try {
            const { data } = await axiosClient("/products/getAll")
            setProducts(data)
 
    
          } catch (error) {
            console.error(error)
          }
        }
        getProducts()
      }, [])

    return (
        <ProductsContext.Provider
          value={{
            products,
       
          }}
        >
          {children}
        </ProductsContext.Provider>
      )

};

export { ProductsProvider }


export default ProductsContext

