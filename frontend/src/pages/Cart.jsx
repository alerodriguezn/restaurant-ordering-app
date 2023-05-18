import React from "react";
import Navbar from "../components/Navbar";
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  Text,
  Stack,
  Heading,
  StackDivider,
  Box,
  Button,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import ProductCart from "../components/ProductCart";
import useProducts from "../hooks/useProducts";

const Cart = () => {
  const { cart } = useProducts();

  return (
    <div>
      <Navbar />

      <Container className="flex" maxW={"container.md"}>
        <Container maxW={"container.md"}>
          <Card>
            <CardHeader>
              <Heading size="md">Cart</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                {cart.length ? (
                  cart.map((product) => <ProductCart key={product._id} product={product} />)
                ) : (
                  <p>No products on the cart</p>
                )}
              </Stack>
            </CardBody>
          </Card>
        </Container>
        <Container maxW={"container.md"}>
          <Heading marginBottom={"2"} as={"h2"} size={"md"}>
            Resume
          </Heading>

          <Text>Total Price: $31 </Text>
          <Text>Discount: $0 </Text>
          <Text fontStyle={"italic"} marginTop={"2"} fontWeight={"bold"}>
            Total: $31
          </Text>

          <Button marginTop={"2"} colorScheme="red">
            Proceed to checkout
          </Button>
        </Container>
      </Container>
    </div>
  );
};

export default Cart;
