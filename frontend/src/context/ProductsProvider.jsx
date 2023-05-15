import { useState, useEffect, createContext } from "react";
import clienteAxios from "../../config/axiosClient";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
          try {
            const { data } = await clienteAxios("/products/getAll")
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

