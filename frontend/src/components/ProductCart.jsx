import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";

const ProductCart = ({ product }) => {


  const { name, description, price } = product;


  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {name}
      </Heading>
      <Text pt="2" fontSize="sm">
        {description}
      </Text>
      <Text pt="2" fontWeight={"bold"} fontStyle={"italic"}>
        ${price}
      </Text>
      <div className="flex items-center gap-2 mt-2">
        <NumberInput size="sm" defaultValue={1} maxW={20} min={1}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button size={"sm"}>Remove</Button>
      </div>
    </Box>
  );
};

export default ProductCart;
