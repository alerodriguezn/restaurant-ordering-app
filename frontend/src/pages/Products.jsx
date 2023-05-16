import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
  Button,
  Divider
} from "@chakra-ui/react";
import { MdUpdate, MdDelete,MdAddCircle } from "react-icons/md";
import useProducts from "../hooks/useProducts";
import ProductPreview from "../components/ProductPreview";


const Products = () => {


  const { products } = useProducts();
  return (
    <Container maxW={"container.xl"}>
      <Card>
        <CardHeader paddingBottom={1}>
          <Heading size="md">All Products</Heading>
          <Button className="mt-2" color={"white"} bg={"#276749"} iconSpacing={"1"} leftIcon={<MdAddCircle size={18} />}>Add New Product</Button>
        </CardHeader>
        
        <Divider marginTop={"2"} color={"gray.300"} />


        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
          {
            products.map((product) => (
              <ProductPreview key={product._id} product={product} />
            ))
          }
            

          
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Products;
