import {
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import ModalEditQuantity from "./ModalEditQuantity";



const ProductCart = ({ product }) => {


  const { name, description, price, quantity } = product;


  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {name}
      </Heading>
      <Text pt="2" fontSize="sm">
        {description}
      </Text>
      <Text pt="2"  fontSize="sm" fontWeight={"bold"}>
        Quantity: {quantity}
      </Text>
      <Text pt="2" fontWeight={"bold"} fontStyle={"italic"}>
        ${price}
      </Text>
      <div className="flex items-center gap-2 mt-2">
        

        <ModalEditQuantity product={product}/>
        <Button size={"sm"} colorScheme="red">Remove</Button>
      </div>
    </Box>
  );
};

export default ProductCart;
