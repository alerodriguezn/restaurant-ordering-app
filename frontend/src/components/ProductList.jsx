import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Product from "./Product";

const ProductList = () => {
  return (
    <SimpleGrid minChildWidth="250px" spacing="30px">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />

      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />


     
    </SimpleGrid>
  );
};

export default ProductList;
