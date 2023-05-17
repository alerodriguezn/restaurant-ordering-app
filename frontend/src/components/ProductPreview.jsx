import { Box, Heading, Text, Button } from "@chakra-ui/react";
import DeleteProductModal from "./DeleteProductModal";
import EditProductModal from "./EditProductModal";

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


      
       <EditProductModal product={product}/>
        
        <DeleteProductModal product={product}  />
      </div>
      
    </Box>
  );
};

export default ProductPreview;
