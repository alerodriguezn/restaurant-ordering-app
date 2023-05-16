import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axiosClient";
import { useNavigate } from "react-router-dom";



const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axiosClient("/products/getAll");
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axiosClient.post("/products/add", newProduct, config);
      console.log(data)
      setProducts([...products, data]);
      


      setTimeout(() => {
        navigate("/admin/products");
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };

export default ProductsContext;
