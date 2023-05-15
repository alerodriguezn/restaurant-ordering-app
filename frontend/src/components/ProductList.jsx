import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Product from "./Product";
import useProducts from "../../hooks/useProducts";

const ProductList = () => {
  const { products } = useProducts();


  return (
    <SimpleGrid minChildWidth="250px" spacing="30px">
        {products.length ? (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-600 uppercase p-5">
            No products found
          </p>
        )}
    </SimpleGrid>
  );
};

export default ProductList;
