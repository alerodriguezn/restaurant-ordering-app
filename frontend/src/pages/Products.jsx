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
  Divider,
} from "@chakra-ui/react";
import {MdAddCircle } from "react-icons/md";
import useProducts from "../hooks/useProducts";
import ProductPreview from "../components/ProductPreview";
import AddProductModal from "../components/AddProductModal";
import { useDisclosure } from "@chakra-ui/react";


const Products = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { products } = useProducts();
  return (
    <Container maxW={"container.xl"}>
      <Card>
        <CardHeader paddingBottom={1}>
          <Heading size="md">All Products</Heading>
          <Button
            className="mt-2"
            onClick={onOpen}
            color={"white"}
            bg={"#276749"}
            iconSpacing={"1"}
            leftIcon={<MdAddCircle size={18} />}
          >
            Add New Product
          </Button>
        </CardHeader>

        <Divider marginTop={"2"} color={"gray.300"} />
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {products.length ? (
              products.map((product) => (
              <ProductPreview key={product._id} product={product} />
            ))):(<p>No hay productos</p>)}
          </Stack>
        </CardBody>
      </Card>
      <AddProductModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Products;
