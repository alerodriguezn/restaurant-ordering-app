import { Image } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  useToast,
} from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";

const ProductCard = ({ product }) => {
  const toast = useToast();

  const { addProductToCart } = useProducts();

  const { name, description, price, image } = product;



  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="2">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
          <Text color="black.600" fontSize="2xl" fontWeight={"bold"}>
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          variant="solid"
          bg={"#FBBF24"}
          onClick={() => {
            addProductToCart(product);
            toast({
              title: "Product Added",
              description: "The product has been added to your cart.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          }}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
