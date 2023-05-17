import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Divider,
} from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductPreview from "../components/ProductPreview";
import AddProductModal from "../components/AddProductModal";

const Products = () => {
  const { products } = useProducts();

  return (
    <Container maxW={"container.xl"}>
      <Card>
        <CardHeader paddingBottom={1}>
          <Heading size="md">All Products</Heading>
          <AddProductModal />
        </CardHeader>

        <Divider marginTop={"2"} color={"gray.300"} />
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {products.length ? (
              products.map((product) => (
                <ProductPreview key={product._id} product={product} />
              ))
            ) : (
              <p>No hay productos</p>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Products;
