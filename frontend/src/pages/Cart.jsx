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

const Cart = () => {
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
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Summary
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    View a summary of all your clients over the last month.
                  </Text>
                  <Text pt="2" fontWeight={"bold"} fontStyle={"italic"}>
                    $16
                  </Text>
                  <div className="flex items-center gap-2 mt-2">
                    <NumberInput size="sm" maxW={20} defaultValue={1} min={1}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Button size={"sm"}>Remove</Button>
                  </div>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Summary
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    View a summary of all your clients over the last month.
                  </Text>
                  <Text pt="2" fontWeight={"bold"} fontStyle={"italic"}>
                    $16
                  </Text>
                  <div className="flex items-center gap-2 mt-2">
                    <NumberInput size="sm" maxW={20} defaultValue={1} min={1}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Button size={"sm"}>Remove</Button>
                  </div>
                </Box>
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
