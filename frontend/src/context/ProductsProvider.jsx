import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axiosClient";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

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
      const { data } = await axiosClient.post(
        "/products/add",
        newProduct,
        config
      );
      console.log(data);
      setProducts([...products, data]);

     
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      axiosClient.delete(`/products/${product.code}`, config);

      const updatedProducts = products.filter(
        (productState) => productState.code !== product.code
      );

      setProducts(updatedProducts);

      setProduct({});

      toast({
        title: "Product Deleted Successfully",
        description: "The product was deleted successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        setProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };

export default ProductsContext;
