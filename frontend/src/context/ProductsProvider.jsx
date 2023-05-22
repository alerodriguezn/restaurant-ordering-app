import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axiosClient";
import { useToast } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const toast = useToast();

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [total, setTotal] = useState(0);
  const [isUpdatingProduct, setIsUpdatingProduct] = useState(false);

  const navigate = useNavigate();

  const { auth } = useAuth();

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


  useEffect(() => {
    calculateTotal();
  }, [cart]);


  const login = async () => {
  }




  const addOrder = async (description) => {
    console.log("Hemo entrado")
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };



      const products = cart.map((productCart) => ({
        productID: productCart._id,
        quantity: productCart.quantity,
      }));


      const order = {
        products : products,
        description: description,
        total: total, 
        client : auth._id,
      }

      console.log(order)

      await axiosClient.post("/orders/add", order, config);
      toast({
        title: "Order created",
        description: "Your order has been created successfully",
        status: "success",  
        duration: 5000,
        isClosable: true,
      });

      setCart([]);
      setTotal(0);

      navigate("/")


    } catch (error) { 
      console.error(error);
    }
  }

  const addProductToCart = (product) => {
    const productExists = cart.find(
      (productState) => productState.code === product.code
    );
    if (productExists) {
      productExists.quantity += 1;
      const cartUpdated = cart.map((productState) =>
        productState.code === product.code ? productExists : productState
      );
      setCart(cartUpdated);
    } else {
      const productToAdd = { ...product };
      productToAdd.quantity = 1;
      setCart([...cart, productToAdd]);
    }
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setTotal(total);
  };

  const editQuantity = (product, newQuantity) => {
    const productExists = cart.find(
      (productState) => productState.code === product.code
    );
    if (productExists) {
      productExists.quantity = newQuantity;
      const cartUpdated = cart.map((productState) =>
        productState.code === product.code ? productExists : productState
      );
      setCart(cartUpdated);
    }
  };

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

      toast({
        title: "Product Added",
        description: "The product was added successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (product) => {
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

  const modifyProduct = async (product) => {
    console.log(product);
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axiosClient.put(
        `/products/${product.code}`,
        product,
        config
      );

      console.log(data);

      const updatedProducts = products.map((productState) =>
        productState.code === data.code ? data : productState
      );

      setProducts(updatedProducts);

      console.log(updatedProducts);

      toast({
        title: "Product Updated Successfully",
        description: "The product was updated successfully",
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
        isUpdatingProduct,
        setIsUpdatingProduct,
        modifyProduct,
        addProductToCart,
        cart,
        setCart,
        editQuantity,
        total,
        addOrder,
        login,
        addOrder
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };

export default ProductsContext;
