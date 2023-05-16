import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { MdUpdate, MdDelete } from "react-icons/md";

const ProductPreview = ({ product }) => {

  const { name, price, description } = product;

  return (
    <Box>
      <Heading size="xs" textTransform="uppercase">
        {name}
      </Heading>
      <Text pt="2" fontSize="sm">
        {description}
      </Text>
      <Text pt="2" fontSize="sm" fontWeight={"bold"} fontStyle={"italic"}>
        ${price}
      </Text>
      <div className="mt-2">
        <Button
          className="mr-2"
          bg={"#6B46C1"}
          leftIcon={<MdUpdate />}
          color={"white"}
          iconSpacing={"1"}
        >
          Update
        </Button>
        <Button
          bg={"#C53030"}
          leftIcon={<MdDelete />}
          color={"white"}
          iconSpacing={"1"}
        >
          Delete
        </Button>
      </div>
    </Box>
  );
};

export default ProductPreview;
